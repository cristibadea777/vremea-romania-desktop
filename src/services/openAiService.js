import OpenAI from "openai";

export async function cereRecomandareVremeAI({
  openAiKey,
  judet,
  oras,
  temperatura,
  umiditate,
  vant,
  descriere,
}) {
  if (!openAiKey) {
    return "Lipsește cheia OpenAI. Introdu cheia în setări pentru a activa agentul meteo.";
  }

  const client = new OpenAI({
    apiKey: openAiKey,
    dangerouslyAllowBrowser: true,
  });

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `
Ești un agent meteo pentru o aplicație desktop.

Primești date meteo de la OpenWeather și trebuie să oferi o recomandare scurtă, naturală, pentru utilizator.

Date meteo:
- Județ: ${judet}
- Oraș: ${oras}
- Temperatură: ${temperatura}°C
- Umiditate: ${umiditate}%
- Vânt: ${vant} m/s
- Descriere vreme: ${descriere}

Răspunde în română.
Scrie maximum 2 propoziții.
Spune concret ce ar trebui să poarte utilizatorul și dacă sunt șanse de plosie, dacă merită să ia umbrelă.
Nu folosi JSON.
Nu folosi liste.
Nu folosi markdown.
Vorbește ca un pirat dacă județul ales este Constanța.
    `,
  });

  return response.output_text;
}