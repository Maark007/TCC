import React from "react";
import { Body, PdfBox } from "./styles";

import Slider from "../../components/slider/slider";
import PdfImage from "../../assets/pdf.png";

export default function Subject() {
  return (
    <Body>
      <div className="content-box">
        <h3>Aulas para assistir</h3>
        <Slider />
      </div>
      <div className="content-box mar">
        <h3>Área PDF</h3>
      </div>
      <PdfBox>
        <div className="pdf-container">
          <img src={PdfImage} alt="PdfImage" />
          <div className="pdf-informations">
            <span>Data: 20/04 - 30/04</span>
            <span>Assunto: verbos</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://concurseria.com.br/wp-content/uploads/2017/10/Verbo.pdf"
            >
              Abrir PDF
            </a>
          </div>
        </div>
      </PdfBox>
    </Body>
  );
}
