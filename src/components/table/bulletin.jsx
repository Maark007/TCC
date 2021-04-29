import React from "react";
import styled from "styled-components";
import MUIDataTable from "mui-datatables";

import { useUser } from "../../container/context";

const MuiTable = styled(MUIDataTable)`
  margin: 10px;
  td {
    text-align: center;
  }
  .MUIDataTableHeadCell-contentWrapper-59 {
    display: flex;
    justify-content: center;
  }
  .MUIDataTableHeadCell-toolButton-55 {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export default function Table() {
  const columns = [
    "Matérias",
    "1º Bimestre",
    "2º Bimestre",
    "3º Bimestre",
    "4º Bimestre",
    "Média Final",
  ];

  const data = [
    ["Matemática", "8", "9", "10", "7", "10"],
    ["Sociologia", "8", "9", "10", "7", "10"],
    ["Filosofia", "8", "9", "10", "7", "10"],
    ["Geografia", "8", "9", "10", "7", "10"],
    ["Português", "8", "9", "10", "7", "10"],
    ["História", "8", "9", "10", "7", "10"],
    ["Espanhol", "8", "9", "10", "7", "10"],
    ["Biologia", "8", "9", "10", "7", "10"],
    ["Química", "8", "9", "10", "7", "10"],
    ["Física", "8", "9", "10", "7", "10"],
    ["Inglês", "8", "9", "10", "7", "10"],
  ];

  const NullData = [
    ["Matemática", "0", "0", "0", "0", "0"],
    ["Sociologia", "0", "0", "0", "0", "0"],
    ["Filosofia", "0", "0", "0", "0", "0"],
    ["Geografia", "0", "0", "0", "0", "0"],
    ["Português", "0", "0", "0", "0", "0"],
    ["História", "0", "0", "0", "0", "0"],
    ["Espanhol", "0", "0", "0", "0", "0"],
    ["Biologia", "0", "0", "0", "0", "0"],
    ["Química", "0", "0", "0", "0", "0"],
    ["Física", "0", "0", "0", "0", "0"],
    ["Inglês", "0", "0", "0", "0", "0"],
  ];

  const options = {
    filter: true,
    responsive: "vertical",
    selectableRows: false,
  };

  const user = useUser();

  return (
    <>
      <MuiTable
        title="1º Bimestre"
        data={data}
        columns={columns}
        options={options}
      />
      <MuiTable
        title="2º Bimestre"
        data={NullData}
        columns={columns}
        options={options}
      />
      <MuiTable
        title="3º Bimestre"
        data={NullData}
        columns={columns}
        options={options}
      />
      <MuiTable
        title="4º Bimestre"
        data={NullData}
        columns={columns}
        options={options}
      />
    </>
  );
}
