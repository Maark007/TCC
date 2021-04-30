import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import styled from "styled-components";
import api from "../../services/api";

import TextField from "@material-ui/core/TextField";

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
  @media (max-width: 960px) {
    td {
      display: flex;
      align-items: center;
    }
  }
`;

export default function Table() {
  const [students, setStudents] = useState(undefined);

  useEffect(() => {
    async function loadData() {
      try {
        const usuary = await api.get("/students");
        const newUsers = usuary.data.map((user) => {
          return {
            ...user,
            atividades: "",
            trabalhos: "",
            provas: "",
            media: 0,
          };
        });
        setStudents(newUsers);
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

  const handleActivities = (e, id) => {
    setStudents((state) =>
      state.map((item) => {
        if (item._id === id) {
          const media =
            (Number(item.trabalhos) +
              Number(item.provas) +
              Number(e.target.value)) /
            3;
          return {
            ...item,
            atividades: e.target.value,
            media: media.toFixed(2),
          };
        }
        return item;
      })
    );
  };

  const handleJobs = (e, id) => {
    setStudents((state) =>
      state.map((item) => {
        if (item._id === id) {
          const media =
            (Number(item.atividades) +
              Number(item.provas) +
              Number(e.target.value)) /
            3;
          return {
            ...item,
            trabalhos: e.target.value,
            media: media.toFixed(2),
          };
        }
        return item;
      })
    );
  };

  const handleProves = (e, id) => {
    setStudents((state) =>
      state.map((item) => {
        if (item._id === id) {
          const media =
            (Number(item.atividades) +
              Number(item.trabalhos) +
              Number(e.target.value)) /
            3;

          return {
            ...item,
            provas: e.target.value,
            media: media.toFixed(2),
          };
        }
        return item;
      })
    );
  };

  const data = students?.map((data, i) => [
    data.name,
    data.series,
    <TextField
      label="Nota"
      type="number"
      style={{ width: 100 }}
      value={data.atividades}
      onChange={(e) => handleActivities(e, data._id)}
    />,
    <TextField
      label="Nota"
      type="number"
      style={{ width: 100 }}
      value={data.trabalhos}
      onChange={(e) => handleJobs(e, data._id)}
    />,
    <TextField
      label="Nota"
      type="number"
      style={{ width: 100 }}
      value={data.provas}
      onChange={(e) => handleProves(e, data._id)}
    />,
    data.media,
  ]);

  const options = {
    filter: true,
    responsive: "vertical",
    selectableRows: false,
    maxHeight: 900,
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
