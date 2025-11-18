import "../styles/Benefits.css";

function Benefits() {
  const data = [
    { icon: "🚚", title: "Envío Rápido", text: "Entrega en 24-48 horas en todo el país" },
    { icon: "🔒", title: "Pago Seguro", text: "Múltiples métodos de pago disponibles" },
    { icon: "🛠️", title: "Garantía Total", text: "Productos 100% originales y certificados" },
    { icon: "📞", title: "Soporte 24/7", text: "Asistencia técnica especializada" },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-grid">
        {data.map((item, i) => (
          <div className="benefit-card" key={i}>
            <div className="icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
