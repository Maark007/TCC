import React from "react";
import styled from "styled-components";
import MUIDataTable from "mui-datatables";

const MuiTable = styled(MUIDataTable)`
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
    "Aluno",
    "Série",
    "Nota das atividades",
    "Trabalhos",
    "Prova",
    "Nota final",
  ];

  const data = [
    ["Joe James", "3 ano", "5", "4", "1", "1"],
    ["John Walsh", "2 ano", "6", "3", "1", "1"],
    ["Bob Herm", "3 ano", "4", "2", "1", "1"],
    ["James Houston", "1 ano", "10", "2", "1", "1"],
  ];

  const options = {
    filter: true,
    responsive: "vertical",
    selectableRows: false,
  };

  return (
    <MuiTable
      title="Definir notas"
      data={data}
      columns={columns}
      options={options}
    />
  );
}
