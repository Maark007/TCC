import React from "react";

import { data } from "../../utils/schoolSubjects";
import { Body, Model } from "./subjectsStyles";
import { Link } from "react-router-dom";

export default function Subjects({ user }) {
  console.log(user.type);
  return (
    <Body>
      <Model>
        {user.type === "Professor"
          ? data
              .filter((matery) => matery.name === user.matery)
              .map((subject, i) => (
                <Link to={`/materia/${subject.redirect}`} id={i}>
                  <div id="flex">
                    <div className="box-items">
                      <div className="box-image">
                        <img alt="" src={subject.src} />
                        <span>{subject.name}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
          : data.map((subject, i) => (
              <Link to={`/materia/${subject.redirect}`} id={i}>
                <div id="flex">
                  <div className="box-items">
                    <div className="box-image">
                      <img alt="" src={subject.src} />
                      <span>{subject.name}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </Model>
    </Body>
  );
}
