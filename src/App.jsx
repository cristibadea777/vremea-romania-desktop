import { useEffect, useState } from "react";
import "./App.css";

import AgentPanel from "./components/AgentPanel";
import HartaRomanieiSvg from "./components/HartaRomanieiSvg";
import SettingsModal from "./components/SettingsModal";
import WeatherPanel from "./components/WeatherPanel";

import { cereRecomandareVremeAI } from "./services/openAiService";
import { getWeatherByCity } from "./services/openWeatherService";
import { getWeatherDescription } from "./services/weatherDescription";

export default function App() {
  const [judetCurent, setJudetCurent] = useState("");
  const [resedintaCurenta, setResedintaCurenta] = useState("");

  const [temperatura, setTemperatura] = useState("");
  const [umiditate, setUmiditate] = useState("");
  const [vant, setVant] = useState("");
  const [descriere, setDescriere] = useState("");
  const [imagine, setImagine] = useState("");

  const [recomandareAI, setRecomandareAI] = useState("");
  const [seIncarcaAI, setSeIncarcaAI] = useState(false);

  const [openWeatherKey, setOpenWeatherKey] = useState(
    localStorage.getItem("openWeatherKey") || ""
  );

  const [openAiKey, setOpenAiKey] = useState(
    localStorage.getItem("openAiKey") || ""
  );

  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const savedOpenWeatherKey = localStorage.getItem("openWeatherKey");
    const savedOpenAiKey = localStorage.getItem("openAiKey");

    if (!savedOpenWeatherKey || !savedOpenAiKey) {
      setShowSettings(true);
    }
  }, []);

  useEffect(() => {
    if (!resedintaCurenta) return;

    const incarcaDateMeteo = async () => {
      setRecomandareAI("");
      setSeIncarcaAI(true);

      try {
        const raspunsAPI = await getWeatherByCity(
          resedintaCurenta,
          openWeatherKey
        );

        const tempCelsius = Math.round(raspunsAPI.main.temp - 273.15);
        const umiditateApi = raspunsAPI.main.humidity;
        const vantApi = raspunsAPI.wind.speed;
        const descriereApi = raspunsAPI.weather[0].description;
        const mainApi = raspunsAPI.weather[0].main;

        const descriereTradusa = getWeatherDescription(descriereApi, mainApi);

        setTemperatura(tempCelsius);
        setUmiditate(umiditateApi);
        setVant(vantApi);
        setDescriere(descriereTradusa.descriere);
        setImagine(descriereTradusa.imagine);

        const raspunsAgent = await cereRecomandareVremeAI({
          openAiKey,
          judet: judetCurent,
          oras: resedintaCurenta,
          temperatura: tempCelsius,
          umiditate: umiditateApi,
          vant: vantApi,
          descriere: descriereApi,
        });

        setRecomandareAI(raspunsAgent);
      } catch (error) {
        console.log(error);

        setRecomandareAI(
          "Agentul nu a putut genera recomandarea. Verifică dacă cheile API sunt corecte."
        );
      } finally {
        setSeIncarcaAI(false);
      }
    };

    incarcaDateMeteo();
  }, [resedintaCurenta]);

  const handleClickJudet = (name, resedinta) => {
    setJudetCurent(name);
    setResedintaCurenta(resedinta);
  };

  const salveazaSetari = () => {
    if (!openWeatherKey.trim() || !openAiKey.trim()) {
      alert("Completează ambele chei API.");
      return;
    }

    localStorage.setItem("openWeatherKey", openWeatherKey.trim());
    localStorage.setItem("openAiKey", openAiKey.trim());

    setOpenWeatherKey(openWeatherKey.trim());
    setOpenAiKey(openAiKey.trim());
    setShowSettings(false);
  };

 return showSettings ? (
  <SettingsModal
    openWeatherKey={openWeatherKey}
    setOpenWeatherKey={setOpenWeatherKey}
    openAiKey={openAiKey}
    setOpenAiKey={setOpenAiKey}
    onSave={salveazaSetari}
    onClose={() => setShowSettings(false)}
  />
) : (
  <div className="container-principal">
    <button className="buton-setari" onClick={() => setShowSettings(true)}>
      ⚙ 
    </button>

    <div className="stanga">
      <HartaRomanieiSvg
        judetCurent={judetCurent}
        handleClickJudet={handleClickJudet}
      />
    </div>

    <div className="dreapta">
      {judetCurent ? (
        <>
          <WeatherPanel
            judetCurent={judetCurent}
            resedintaCurenta={resedintaCurenta}
            temperatura={temperatura}
            umiditate={umiditate}
            vant={vant}
            descriere={descriere}
            imagine={imagine}
          />

          <AgentPanel
            seIncarcaAI={seIncarcaAI}
            recomandareAI={recomandareAI}
          />
        </>
      ) : (
        <div className="mesaj-start">
          Selectează un județ de pe hartă pentru a vedea vremea.
        </div>
      )}
    </div>
  </div>
);

}