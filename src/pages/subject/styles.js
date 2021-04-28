import styled from "styled-components";

export const Body = styled.div`
  .content-box {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
  .mar {
    margin: 40px 0 5px 0;
  }
`;

export const PdfBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .pdf-container {
    box-shadow: -1px -6px 25px 0 rgb(0 0 0 / 22%), 0 11px 7px 0 rgb(0 0 0 / 31%);
    border-radius: 5px;
    display: flex;
    padding: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    img {
      height: 100px;
      object-fit: cover;
    }
  }
  .pdf-informations {
    display: flex;
    margin-top: 2px;
    min-width: 240px;
    margin-left: 2px;
    flex-direction: column;
    span {
      margin-bottom: 5px;
    }
  }
  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
    .pdf-container{
      width: 100%;
    }
    .pdf-informations {
      min-width: auto;
      width: 100%;
    }
  }
`;
