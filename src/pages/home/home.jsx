import React from "react";

import { useUser } from "../../container/context";
import { Body } from "./styles";

import Subject from "../../components/subjects/subjects";

export default function Home() {
  const user = useUser();

  return (
    <Body>
      <div className="home-title">
        <h3>Selecione uma matéria.</h3>
      </div>
      <Subject user={user}/>
    </Body>
  );
}
