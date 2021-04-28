import React from "react";

import { data } from "../../utils/schoolSubjects";
import { Body, Model } from "./subjectsStyles";
import { Link } from "react-router-dom";

export default function Subjects() {
  return (
    <Body>
      <Model>
        {data.map((subject, i) => (
          <Link to={`/materia/${subject.redirect}`} id={i}>
            <div id="flex">
              <div className="box-items">
                <div className="box-image">
                  <img alt="" src={subject.src} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Model>
    </Body>
  );
}
