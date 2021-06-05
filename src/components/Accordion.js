import React from "react";
import { useState, useEffect } from "react";
// import data from "./data";

import "../css/Accordion.css";

const Accordion = () => {
  const [number, setNumber] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:5000/questions");
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    fetchTasks();
  }, []);

  const toggleAccordion = (id) => {
    if (id === number) {
      return setNumber(0);
    }

    setNumber(id);
  };

  return (
    <div>
      <h1 className="container-title">About</h1>
      <div className="underline"></div>

      {data.map((question) => {
        return (
          <div key={question.id}>
            {question.id === 1 ? (
              <h1 className="container-heading">Getting Started</h1>
            ) : (
              ""
            )}
            {question.id === 5 ? (
              <h1 className="container-heading">
                About Simplii Financial™ personal banking products and services
              </h1>
            ) : (
              ""
            )}

            <button
              onClick={() => toggleAccordion(question.id)}
              className="accordion-title"
            >
              {number === question.id ? (
                <div className="accordion-title active">{question.title}</div>
              ) : (
                question.title
              )}
              <h3>{number === question.id ? "x" : "+"}</h3>
            </button>

            <p>
              {number === question.id ? (
                <div className="accordion-content">
                  <p>{question.info} </p> <p> {question.info2} </p>
                </div>
              ) : (
                ""
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
