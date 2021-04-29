import styled from "styled-components";

export const Body = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100%;
  .MuiAppBar-colorPrimary {
    background: linear-gradient(90deg, #0c2646 0, #204065 60%, #2a5788);
  }
  .MuiSelect-icon {
    color: #fff !important;
    right: 8px;
  }
  .MuiInput-underline:before {
    border: none;
    outline: none;
  }
  .MuiToolbar-regular {
    min-height: 64px !important;
  }
  .user-config {
    padding-left: 10px !important;
    font-size: 31px !important;
  }
  .header-title {
    width: 100%;
  }
`;
