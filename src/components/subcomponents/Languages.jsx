import React from 'react'
import { FaRegDotCircle } from "react-icons/fa";

const Languages = () => {
  const languages = [
    {
      _id: "1",
      title: "English",
      progress: 85
    },
    {
      _id: "2",
      title: "Urdu",
      progress: 100
    },
    {
      _id: "3",
      title: "Sindhi",
      progress: -55
    },
  ]
  return (
    <div style={{marginTop: "2rem"}}>
        <h3>LANGUAGES</h3>
        {languages.map((element) => {
          return (
            <div key={element._id} className="progressBar">
              <p>{element.title}</p>
              <span>
                <FaRegDotCircle
                  style={{
                    right: `${
                      element.progress > 85 ? 0 : 100 - element.progress
                    }`,
                  }}
                />
              </span>
            </div>
          );
        })}
    </div>
  )
}

export default Languages