import styled, { keyframes } from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: auto;
  transition: all 500ms cubic-bezier(0.685, 0.0473, 0.346, 1) 0ms;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
`;

export const FloatLanding = keyframes`
 0% {
  -webkit-transform: translate3d(0,-4px,0);
  transform: translate3d(5px,-14px,0); 
 }
 100% {
  -webkit-transform: translate3d(0,4px,0);
  transform: translate3d(0,4px,0);
 }
`;

export const MiddleDivisor = styled.div`
  display: flex;
  width: 70%;
  max-width: 1000px;
  max-height: 530px;
  min-height: 530px;
  height: 80%;
  transition: all 500ms cubic-bezier(0.685, 0.0473, 0.346, 1) 0ms;
  .delivery-image-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    img {
      animation-name: ${FloatLanding};
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: ease-in-out;
      width: 270px;
    }
  }
  @media screen and (max-width: 1090px) {
    width: 90%;
  }
  @media screen and (max-width: 830px) {
    flex-direction: column;
    align-items: center;
    display: grid;
  }
`;

export const ImageDivisor = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0px 0 10px;
  background: linear-gradient(90deg, #0c2646 0, #204065 60%, #2a5788);
  transition: all 500ms cubic-bezier(0.685, 0.0473, 0.346, 1) 0ms;
  min-height: 530px;
  @media screen and (max-width: 830px) {
    display: none;
    img {
      display: none;
    }
  }
`;

export const LoginDivisor = styled.div`
  width: 50%;
  min-height: 530px;
  height: 100%;
  transition: all 500ms cubic-bezier(0.685, 0.0473, 0.346, 1) 0ms;
  .formsEffect {
    margin-top: 20px;
    transition: all 500ms;
    height: auto;
  }
  .ramon-title {
    display: flex;
    width: 100%;
    padding: 5px 0;
    margin-bottom: 10px;
    height: auto;
    h1 {
      color: #25d366;
      font-size: 26px;
      font-weight: 400;
      line-height: 10px;
      cursor: pointer;
      font-family: "poppins", sans-serif;
      height: auto;
    }
  }
  .login-container {
    margin: 0 auto;
    padding: 20px;
    height: 100%;
    max-width: 500px;
    transition: all 500ms cubic-bezier(0.685, 0.0473, 0.346, 1) 0ms;
    height: auto;

    @media screen and (max-width: 830px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: auto;
      padding: 5px !important;
    }
    h4 {
      margin: 10px 18px 10px 0;
      cursor: pointer;
      padding-bottom: 2px;
      height: auto;
    }
  }
  .active-border {
    border-bottom: 2px solid #0c2646;
    height: auto;
  }
  .login-input-container {
    transition: all 500ms cubic-bezier(0.685, 0.0473, 0.346, 1) 0ms;
  }
  .login-button {
    display: flex;
    justify-content: center;
    button {
      cursor: pointer;
      margin: 15px 0;
      background: #25d366;
      color: #fff;
      border-radius: 6px;
      width: 200px;
      height: 45px;
      text-align: center;
      font-size: 15px;
      border: none;
    }
    span {
      font-size: 14px !important;
      color: #616161;
      line-height: 45px;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
  .create-account-span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    height: auto;
    span {
      color: #616161;
      cursor: pointer;
      display: flex;
    }
    p {
      color: #25d366;
      cursor: pointer;
      margin-left: 5px;
      margin-top: 5px;
      :hover {
        text-decoration: underline;
      }
    }
  }
  @media screen and (max-width: 830px) {
    display: flex;
    width: 100%;
    height: auto;
    button {
      width: 40% !important;
    }
    span,
    p {
      font-size: 16px !important;
    }
    .ramon-title {
      justify-content: center;
      margin-bottom: 10px;
      h1 {
        font-size: 28px;
      }
    }
  }
`;
