import React, { useState, useEffect } from "react";
import { Body } from "./styles";

import Subject from "../../components/subjects/subjects";
import LoadingGif from "../../assets/gif/loading.gif";

export default function Home() {
  // const [isLoading, setIsloading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsloading(false);
  //   }, 2000);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <Body>
  //       <div className="central-loading">
  //         <img alt="" src={LoadingGif} />
  //       </div>
  //     </Body>
  //   );
  // }

  return (
    <Body>
      <div className="home-title">
        <h3>Selecione uma matéria.</h3>
      </div>
      <Subject />
    </Body>
  );
}
