import React from "react";

const Experience = () => {
  const experiences = [
    {
      _id: "1",
      title: "Volunteer at PROCOM DEV Team",
      from: "1-Oct-2023",
      to: "1-Jan-2024",
      description: "Volunteer at PROCOM'24 Development Team: Contributed to full-stack projects using MERN, NestJS, and Docker, improving user engagement by 30% and server response times by 20%, while presenting solutions that exceeded client expectations.",
      
    },
  ];

  return (
    <>
      <div className="experience_component">
        <h3>EXPERIENCE</h3>
        <div className="experiences_container">
          {experiences.map((element) => {
            return (
              <div key={element._id} className="experience">
                <div className="duration">
                  {element.from} <span>to</span> {element.to}
                </div>
                <div className="organization">
                  <p>{element.title}</p>
                  <p>{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Experience;