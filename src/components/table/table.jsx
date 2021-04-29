import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import styled from "styled-components";
import api from "../../services/api";

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
  const [students, setStudents] = useState(undefined);

  useEffect(() => {
    async function loadData() {
      try {
        const usuary = await api.get("/students");
        setStudents(usuary.data);
      } catch {}
    }
    loadData();
  }, []);

  const columns = [
    "Aluno",
    "Série",
    "Atividades",
    "Trabalhos",
    "Prova",
    "Nota final",
  ];

  const data = students?.map((data) => [data.name, data.series]);

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
