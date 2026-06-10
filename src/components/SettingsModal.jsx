export default function SettingsModal({
  openWeatherKey,
  setOpenWeatherKey,
  openAiKey,
  setOpenAiKey,
  onSave,
  onClose,
}) {
  return (
    <div className="setari-overlay">
      <div className="setari-box">
        <h2>Setări API</h2>

        <label>Cheie OpenWeather</label>
        <input
          type="password"
          value={openWeatherKey}
          onChange={(e) => setOpenWeatherKey(e.target.value)}
          placeholder="Introdu cheia OpenWeather"
        />

        <label>Cheie OpenAI</label>
        <input
          type="password"
          value={openAiKey}
          onChange={(e) => setOpenAiKey(e.target.value)}
          placeholder="Introdu cheia OpenAI"
        />

        <div className="setari-actions">
          <button onClick={onSave}>Salvează</button>
          <button onClick={onClose}>Anulează</button>
        </div>
      </div>
    </div>
  );
}