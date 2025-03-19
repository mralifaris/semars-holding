import React from 'react';
import './VisionMissionGoal.css';

function VisionMissionGoal() {
  const vmgData = [
    {
      id: 'vision',
      title: 'Vision',
      image: 'https://via.placeholder.com/80', // Replace with actual icon
      text: 'To be the leading facilitator of foreign investment and business expansion in Saudi Arabia, offering luxury advisory services that ensure client success.',
    },
    {
      id: 'mission',
      title: 'Mission',
      image: 'https://via.placeholder.com/80', // Replace with actual icon
      text: 'We are committed to empowering international businesses by providing the expertise and resources they need to succeed in the Kingdom of Saudi Arabia. We deliver comprehensive business solutions through operational excellence and deep local expertise.',
    },
    {
      id: 'goal',
      title: 'Goal',
      image: 'https://via.placeholder.com/80', // Replace with actual icon
      text: 'To establish a robust support system for global enterprises, ensuring smooth business integration, growth, and long-term success in Saudi Arabia.',
    },
  ];

  return (
    <section className="vision-mission-goal" id="vision-mission-goal" aria-labelledby="vmg-title">
      <h2 id="vmg-title">Vision, Mission, and Goal</h2>
      <div className="vmg-container">
        {vmgData.map((item) => (
          <div className="vmg-card" key={item.id}>
            <img src={item.image} alt={item.title} className="vmg-icon" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VisionMissionGoal;
