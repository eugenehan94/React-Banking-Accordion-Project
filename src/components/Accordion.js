import React from "react";
import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [number, setNumber] = useState();

  const toggleAccordion = (id) => {
    if (id === number) {
      return setNumber(0);
    }

    setNumber(id);
  };

  return (
    <div>
      <h1>Accordion</h1>

      {data.map((question) => {
        return (
          <div key={question.id}>
            <h1 onClick={() => toggleAccordion(question.id)}>
              {question.title}
            </h1>

            <p>{number === question.id ? question.info : ""}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
