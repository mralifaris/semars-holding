import React, { useEffect } from "react";
import "./VisionMissionGoal.css";
import { activateScrollAnimation } from "./ScrollAnimation"; 
import visionIcon from "../../assets/visionIcon.png";
import goalIcon from "../../assets/goalIcon.png";
import missionIcon from "../../assets/missionIcon.png";

function VisionMissionGoal() {
  useEffect(() => {
    activateScrollAnimation(); 
  }, []);

  const vmgData = [
    {
      id: "vision",
      title: "Vision",
      image: visionIcon,
      text: "To be the leading facilitator of foreign investment and business expansion in Saudi Arabia, offering luxury advisory services that ensure client success.",
    },
    {
      id: "mission",
      title: "Mission",
      image: missionIcon,
      text: "We are committed to empowering international businesses by providing the expertise and resources they need to succeed in the Kingdom of Saudi Arabia.",
    },
    {
      id: "goal",
      title: "Goal",
      image: goalIcon,
      text: "To establish a robust support system for global enterprises, ensuring smooth business integration, growth, and long-term success in Saudi Arabia.",
    },
  ];

  return (
    <section className="vision-mission-goal" id="vision-mission-goal">
      <div className="vmg-container">
        {vmgData.map((item) => (
          <div className="vmg-card" key={item.id}>
            <div className="vmg-icon-bg">
              <img src={item.image} alt={item.title} className="vmg-icon" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VisionMissionGoal;
