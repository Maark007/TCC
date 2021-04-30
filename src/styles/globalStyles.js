import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }

  body {
   -webkit-font-smoothing: antialiased;
   line-height: 1.15; 
  }

  .swal2-title, .swal2-content {
   font-family: 'Poppins', sans-serif;
  }

  a {
   text-decoration: none;
  }

  iframe {
    border: none;
    background-color: #000;
  }

  .MuiDialogContentText-root {
    margin-bottom: 0 !important;
  }

  .MuiDialogTitle-root {
    padding: 16px 24px 0 24px !important;
  }
`;
