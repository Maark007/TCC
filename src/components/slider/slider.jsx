import React, { useState } from "react";
import { Body } from "./styles";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import Man from "../../assets/man.png";
import SecondMan from "../../assets/second-man.png";
import ThirdMan from "../../assets/third-man.png";
import Woman from "../../assets/woman.png";
import SecondWoman from "../../assets/second-woman.png";

export default function Slider(params) {
  const [label, setLabel] = useState(1);

  function toRight() {
    if (label === 5) return setLabel(1);
    else setLabel(label + 1);
  }

  function toLeft() {
    if (label <= 1) return setLabel(5);
    else setLabel(label - 1);
  }

  return (
    <Body>
      <button onClick={toLeft}>
        <ArrowBackIosIcon />
      </button>
      <section id="slider">
        <input
          type="radio"
          name="slider"
          id="s1"
          checked={label === 1 ? true : false}
          onChange={() => {}}
        />
        <input
          type="radio"
          name="slider"
          id="s2"
          checked={label === 2 ? true : false}
          onChange={() => {}}
        />
        <input
          type="radio"
          name="slider"
          id="s3"
          checked={label === 3 ? true : false}
          onChange={() => {}}
        />
        <input
          type="radio"
          name="slider"
          id="s4"
          checked={label === 4 ? true : false}
          onChange={() => {}}
        />
        <input
          type="radio"
          name="slider"
          id="s5"
          checked={label === 5 ? true : false}
          onChange={() => {}}
        />

        <label htmlFor="s1" id="slide1">
          <div className="video">
            {label === 1 && (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HdXs5b3M6pE"
                config
                controls
                title="video"
              />
            )}
          </div>
          <div className="info">
            <div className="info-title">
              <img src={Man} alt="" />
              <div className="info-title-span">
                <span>Marcos Aurélio</span>
                <span>Português</span>
                <span>3 ano</span>
              </div>
            </div>
            <div className="date-paragraph">
              <span>Entrega: 20/04 - 30/04</span>
              <p>
                Assistir o determinado video, e elaborar um resumo sobre o
                mesmo.
              </p>
            </div>
          </div>
        </label>

        <label htmlFor="s2" id="slide2">
          <div className="video">
            {label === 2 && (
              <iframe
                title="video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/wlTa_yTElGM"
                config
                controls
              />
            )}
          </div>
          <div className="info">
            <div className="info-title">
              <img src={SecondMan} alt="" />
              <div className="info-title-span">
                <span>João Carlos</span>
                <span>Física</span>
                <span>3 ano</span>
              </div>
            </div>
            <div className="date-paragraph">
              <span>Entrega: 20/04 - 30/04</span>
              <p>Assistir o determinado video, e responder o PDF inserido.</p>
            </div>
          </div>
        </label>

        <label htmlFor="s3" id="slide3">
          <div className="video">
            {label === 3 && (
              <iframe
                title="video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/6EcnJoYd5oI"
                config
                controls
              />
            )}
          </div>
          <div className="info">
            <div className="info-title">
              <img src={Woman} alt="" />
              <div className="info-title-span">
                <span>Mariana</span>
                <span>Biologia</span>
                <span>3 ano</span>
              </div>
            </div>
            <div className="date-paragraph">
              <span>Entrega: 20/04 - 30/04</span>
              <p>Assistir o determinado video, e responder o PDF inserido.</p>
            </div>
          </div>
        </label>

        <label htmlFor="s4" id="slide4">
          <div className="video">
            {label === 4 && (
              <iframe
                title="video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/XDBwYrWFZUQ"
                config
                controls
              />
            )}
          </div>
          <div className="info">
            <div className="info-title">
              <img src={ThirdMan} alt="" />
              <div className="info-title-span">
                <span>Rafael</span>
                <span>Química</span>
                <span>3 ano</span>
              </div>
            </div>
            <div className="date-paragraph">
              <span>Entrega: 20/04 - 30/04</span>
              <p>Assistir o determinado video, e responder o PDF inserido.</p>
            </div>
          </div>
        </label>
        <label htmlFor="s5" id="slide5">
          <div className="video">
            {label === 5 && (
              <iframe
                title="video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/jL2M3WWhRE4"
                config
                controls
              />
            )}
          </div>
          <div className="info">
            <div className="info-title">
              <img src={SecondWoman} alt="" />
              <div className="info-title-span">
                <span>Lívia</span>
                <span>Filosofia</span>
                <span>3 ano</span>
              </div>
            </div>
            <div className="date-paragraph">
              <span>Entrega: 20/04 - 30/04</span>
              <p>
                Assistir o determinado video, e elaborar um resumo sobre o
                mesmo.
              </p>
            </div>
          </div>
        </label>
      </section>
      <button onClick={toRight}>
        <ArrowForwardIosIcon />
      </button>
    </Body>
  );
}
