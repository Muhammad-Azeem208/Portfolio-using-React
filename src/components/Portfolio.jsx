import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const Portfolio = ({ show, setShow }) => {
  const projects = [
    {
      _id: "1",
      title: "Currency Converter App",
      category: "MERN STACK",
      thumbnail: "/currency.png",
      projectUrl: "https://currency-converter-mern.netlify.app/",
    },
    {
      _id: "2",
      title: "Job Portal WebApp",
      category: "MERN STACK",
      thumbnail: "/job.png",
      projectUrl: "https://azeem-job-portal.netlify.app/",
    },
    {
      _id: "3",
      title: "Fitness Club Gym App",
      category: "MERN STACK",
      thumbnail: "/gym.png",
      projectUrl: "/",
    },
    {
      _id: "4",
      title: "Restaurant Reservation",
      category: "MERN STACK",
      thumbnail: "/restaurant.png",
      projectUrl: "https://restaurant-reservation-azeem.netlify.app/",
    },
    {
      _id: "5",
      title: "ToDo App",
      category: "React",
      thumbnail: "/todo.png",
      projectUrl: "https://task-react-webapp.netlify.app/",
    },
    {
      _id: "6",
      title: "Portfolio",
      category: "React",
      thumbnail: "/portfolio.png",
      projectUrl: "https://mazeemportfolio.netlify.app/",
    },
    {
      _id: "7",
      title: "Weather App",
      category: "React",
      thumbnail: "/weather.png",
      projectUrl: "https://webapp-weather-react.netlify.app/",
    },
    {
      _id: "8",
      title: "Authentication Features",
      category: "MERN STACK",
      thumbnail: "/auth.jpg",
      projectUrl: "https://mern-auth-webapp.netlify.app/",
    },
  ];
  return (
    <section className="page portfolioPage">
      <Navbar show={show} />
      <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
      <div className="banner">
        <div className="header">
          <img src="/star.png" alt="star" /> <h1>ALL PROJECTS</h1>
          <img src="/star.png" alt="star" />
        </div>
        <div className="latest-projects">
          <div className="first-column">
            {projects.slice(0, 2).map((element) => {
              return (
                <div className="card" key={element._id}>
                  <img src={element.thumbnail} alt="project-thumbnail" />
                  <div>
                    <span>
                      <p>{element.category}</p>
                      <p>{element.title}</p>
                    </span>
                    <span>
                      <Link to={element.projectUrl} target="_blank">
                        <img src="/arrow.svg" alt="arrow" />
                      </Link>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="second-column">
            <div className="header">
              <img src="/star.png" alt="star" />
              <h1>ALL PROJECTS</h1>
              <img src="/star.png" alt="star" />
            </div>
            <div className="projects">
              {projects.slice(2, 4).map((element) => {
                return (
                  <div className="card" key={element._id}>
                    <img src={element.thumbnail} alt="project-thumbnail" />
                    <div>
                      <span>
                        <p>{element.category}</p>
                        <p>{element.title}</p>
                      </span>
                      <span>
                        <Link to={element.projectUrl} target="_blank">
                          <img src="/arrow.svg" alt="arrow" />
                        </Link>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="remaining-projects">
          {projects.slice(4).map((element) => {
            return (
              <div className="card" key={element._id}>
                <img src={element.thumbnail} alt="project-thumbnail" />
                <div>
                  <span>
                    <p>{element.category}</p>
                    <p>{element.title}</p>
                  </span>
                  <span>
                    <Link to={element.projectUrl} target="_blank">
                      <img src="/arrow.svg" alt="arrow" />
                    </Link>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;