import "../styles/Benefits.css";
import { Truck, Shield, CreditCard, Headphones } from "lucide-react"

function Benefits() {
  const data = [
    { icon: Truck, title: "Envío Rápido", text: "Entrega en 24-48 horas en todo el país" },
    { icon: Shield, title: "Pago Seguro", text: "Múltiples métodos de pago disponibles" },
    { icon: CreditCard, title: "Garantía Total", text: "Productos 100% originales y certificados" },
    { icon: Headphones, title: "Soporte 24/7", text: "Asistencia técnica especializada" },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-grid">
        {data.map((item, i) => {
          const Icon = item.icon;
          return (
            <div className="benefit-card" key={i}>
              <div className="icon">
                <Icon className="benefit-icon" size={48} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Benefits;
