import React, { useState } from "react";
import Swal from "sweetalert2";

import { Body, PdfBox } from "./styles";
import { useUser } from "../../container/context";

import Slider from "../../components/slider/slider";
import PdfImage from "../../assets/pdf.png";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Subject() {
  const user = useUser();
  const [open, setOpen] = useState(false);
  const [openPdf, setOpenPdf] = useState(false);

  function openDialog() {
    return setOpen(true);
  }

  function closeDialog() {
    setOpenPdf(false);
    return setOpen(false);
  }

  function subscribe(e, text) {
    e.preventDefault();
    setOpenPdf(false);
    setOpen(false);
    return Swal.fire("Sucesso", text, "success");
  }

  console.log(user.type);

  return (
    <Body>
      <div className="content-box">
        <h3>Aulas para assistir</h3>
        {user.type === "Professor" && (
          <div className="content-box-title">
            <Button variant="outlined" color="primary" onClick={openDialog}>
              Adicionar video
            </Button>
          </div>
        )}
        <Slider />
      </div>
      <div className="content-box mar">
        <h3>Área PDF</h3>
        {user.type === "Professor" && (
          <div className="content-box-title">
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setOpenPdf(true)}
            >
              Adicionar PDF
            </Button>
          </div>
        )}
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
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle id="form-dialog-title">Adicionar video</DialogTitle>
        <form onSubmit={(e) => subscribe(e, "Video enviado com sucesso!")}>
          <DialogContent>
            <DialogContentText>
              Ao criar, os alunos poderão ter acesso ao conteúdo.
            </DialogContentText>
            <TextField
              autoFocus
              label="URL do vídeo"
              fullWidth
              required
              variant="outlined"
              style={{ marginBottom: 5, marginTop: 10 }}
            />
            <TextField
              autoFocus
              variant="outlined"
              fullWidth
              label="Descrição"
              style={{ marginBottom: 5, marginTop: 5 }}
              required
            />
            <TextField
              autoFocus
              fullWidth
              variant="outlined"
              type="date"
              required
              style={{ marginBottom: 5, marginTop: 5 }}
            />
          </DialogContent>
          <DialogActions>
            <Button color="secondary" variant="outlined" onClick={closeDialog}>
              Cancelar
            </Button>
            <Button color="primary" variant="outlined" type="submit">
              Criar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <Dialog open={openPdf} onClose={closeDialog}>
        <DialogTitle id="form-dialog-title">Adicionar PDF</DialogTitle>
        <form onSubmit={(e) => subscribe(e, "Video enviado com sucesso!")}>
          <DialogContent>
            <DialogContentText>
              Ao criar, os alunos poderão ter acesso ao conteúdo.
            </DialogContentText>
            <TextField
              autoFocus
              label="Adicionar PDF"
              fullWidth
              required
              type="file"
              variant="outlined"
              style={{ marginBottom: 5, marginTop: 10 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              autoFocus
              fullWidth
              variant="outlined"
              type="date"
              required
              style={{ marginBottom: 5, marginTop: 5 }}
            />
          </DialogContent>
          <DialogActions>
            <Button color="secondary" variant="outlined" onClick={closeDialog}>
              Cancelar
            </Button>
            <Button color="primary" variant="outlined" type="submit">
              Adicionar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Body>
  );
}
