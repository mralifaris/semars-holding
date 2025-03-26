import React, { useEffect } from "react";
import { activateScrollAnimation } from "./ScrollAnimation";
import "./Services.css";
import market from '../../assets/market.jpg';
import legal from '../../assets/legal.png';
import invest from '../../assets/investement op.png';
import RD from '../../assets/R&D.png';
import hr from '../../assets/hr.png';

const services = [
  {
    id: "1",
    image: market,
    title: "Market Entry & Advisory",
    description:
      "Helping businesses establish a strong presence in Saudi Arabia through strategic market analysis and entry strategies.",
  },
  {
    id: "2",
    image: legal,
    title: "Legal & Compliance",
    description:
      "Ensuring smooth business operations by navigating complex legal frameworks and regulatory requirements.",
  },
  {
    id: "3",
    image: invest,
    title: "Investment Opportunities",
    description:
      "Identifying and facilitating lucrative investment opportunities for businesses and investors.",
  },
  {
    id: "4",
    image: RD,
    title: "R&D Support",
    description:
      "Providing research and development support to foster innovation and business growth.",
  },
  {
    id: "5",
    image: hr,
    title: "HR & Financial Services",
    description:
      "Providing HR and Financial services to foster innovation and business growth.",
  },
];

function Services() {
  useEffect(() => {
    activateScrollAnimation();
  }, []);

  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services-container">
        <h2 id="services-title">Services Overview</h2>
        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <button className="service-button">Explore More</button>
      </div>
    </section>
  );
}

export default Services;
