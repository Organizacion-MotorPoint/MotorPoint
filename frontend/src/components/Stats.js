import "../styles/Stats.css";

function Stats() {
  const stats = [
    { number: "50,000+", label: "Productos disponibles" },
    { number: "15,000+", label: "Clientes satisfechos" },
    { number: "98%", label: "Satisfacción garantizada" },
    { number: "24/7", label: "Atención al cliente" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <h3>{s.number}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
