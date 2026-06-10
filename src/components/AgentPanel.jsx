export default function AgentPanel({ seIncarcaAI, recomandareAI }) {
  return (
    <div className="agent-panel">
      {seIncarcaAI ? (
        <div className="agent-window">
          <div className="agent-title">Agent meteo</div>
          <div className="agent-output">Agentul analizează vremea...</div>
        </div>
      ) : null}

      {recomandareAI && !seIncarcaAI ? (
        <div className="agent-window">
          <div className="agent-title">Agent meteo</div>
          <div className="agent-output">{recomandareAI}</div>
        </div>
      ) : null}
    </div>
  );
}