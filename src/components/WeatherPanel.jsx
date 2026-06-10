export default function WeatherPanel({
  judetCurent,
  resedintaCurenta,
  temperatura,
  umiditate,
  vant,
  descriere,
  imagine,
}) {
  return (
    <div className="meteo-panel">
      <div className="info-row">
        <span className="text-info">Județ:</span>
        <span className="text-info-2">{judetCurent}</span>
      </div>

      <div className="info-row">
        <span className="text-info">Reședință județ:</span>
        <span className="text-info-2">{resedintaCurenta}</span>
      </div>

      <div className="info-row">
        <span className="text-info">Temperatură:</span>
        <span className="text-info-2">{temperatura} °C</span>
      </div>

      <div className="info-row">
        <span className="text-info">Umiditate:</span>
        <span className="text-info-2">{umiditate}%</span>
      </div>

      <div className="info-row">
        <span className="text-info">Vânt:</span>
        <span className="text-info-2">{vant} km/h</span>
      </div>

      <div className="descriere">
        <div className="descriere-text">{descriere}</div>

        {imagine ? (
          <img className="imagine-vreme" src={imagine} alt={descriere} />
        ) : null}
      </div>
    </div>
  );
}