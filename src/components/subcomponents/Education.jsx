import React from "react";

const Education = () => {
  const educations = [
    {
      _id: "1",
      title: "Matriculation",
      description:
        "AJ Science College, MirpurKhas. 2018",
    },
    {
      _id: "2",
      title: "Intermediate",
      description:
        "SAL College, MirpurKhas. 2020",
    },
    {
      _id: "3",
      title: "Bachelor's in Computer Science",
      description:
        "National University of Computer and Emerging Science - FAST. 2020 - present",
    },
  ];

  return (
    <>
      <div className="education_component" style={{ marginTop: "2rem" }}>
        <h3>EDUCATION</h3>
        {educations.map((element) => {
          return (
            <div className="education" key={element._id}>
              <p>{element.title}</p>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;