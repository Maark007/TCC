import styled, { css } from "styled-components";
import Mountains from "../../assets/mountains.jpg";

export const Body = styled.div`
  display: flex;
  width: 100%;
  margin-top: 64px;
  .MuiDrawer-paper {
    width: 240px;
    position: fixed;
    margin-top: 64px;
    height: 100%;
    z-index: 0;
    border: none;
    box-shadow: rgb(0 0 0 / 30%) 1px 0px 20px;
  }
  .btn-model {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 16px 5px 16px;
    background: linear-gradient(90deg, #0c2646 0, #204065 60%, #2a5788);
    text-transform: inherit;
    span {
      margin-left: 5px;
    }
  }
`;

export const ImageContent = styled.div`
  width: 100%;
  height: 180px;
  background: url(${Mountains}) no-repeat;
  display: flex;
  align-items: flex-end;
  .user-name {
    width: 100%;
    height: 35px;
    background: rgba(0, 0, 0, 0.5);
    margin-bottom: 35px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      padding-left: 25px;
      font-size: 14.9px;
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  ${({ isMobile, isOpen }) =>
    isMobile &&
    isOpen &&
    css`
      overflow: hidden;
    `}
`;
