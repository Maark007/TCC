import styled from "styled-components";

export const Body = styled.div`
  position: relative;
  button {
    :first-child {
      position: absolute;
      left: 0;
      top: 50%;
      margin-left: auto;
      margin-right: auto;
      z-index: 100;
      cursor: pointer;
      background: none;
      border: none;
    }
    :last-child {
      position: absolute;
      right: 0;
      top: 50%;
      margin-left: auto;
      margin-right: auto;
      z-index: 100;
      cursor: pointer;
      border: none;
      background: none;
    }
  }
  [type="radio"] {
    display: none;
  }

  #slider {
    display: flex;
    align-items: center;
    height: 330px;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
  }

  #slider label {
    margin: auto;
    width: 65%;
    max-width: 800px;
    height: 300px;
    border-radius: 4px;
    position: absolute;
    left: 0;
    right: 0;
    cursor: pointer;
    transition: transform 0.4s ease;
  }

  #s1:checked ~ #slide4,
  #s2:checked ~ #slide5,
  #s3:checked ~ #slide1,
  #s4:checked ~ #slide2,
  #s5:checked ~ #slide3 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    transform: translate3d(-45vh, 0%, -300px);
  }

  #s1:checked ~ #slide5,
  #s2:checked ~ #slide1,
  #s3:checked ~ #slide2,
  #s4:checked ~ #slide3,
  #s5:checked ~ #slide4 {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(-20vh, 0%, -150px);
  }

  #s1:checked ~ #slide1,
  #s2:checked ~ #slide2,
  #s3:checked ~ #slide3,
  #s4:checked ~ #slide4,
  #s5:checked ~ #slide5 {
    box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3),
      0 11px 7px 0 rgba(0, 0, 0, 0.19);
    transform: translate3d(0, 0, 0);
  }

  #s1:checked ~ #slide2,
  #s2:checked ~ #slide3,
  #s3:checked ~ #slide4,
  #s4:checked ~ #slide5,
  #s5:checked ~ #slide1 {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(20vh, 0%, -150px);
  }

  #s1:checked ~ #slide3,
  #s2:checked ~ #slide4,
  #s3:checked ~ #slide5,
  #s4:checked ~ #slide1,
  #s5:checked ~ #slide2 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    transform: translate3d(45vh, 0%, -300px);
  }

  #slide1 {
    background: #e5e5e5;
    display: flex;
  }
  #slide2 {
    background: #e5e5e5;
    display: flex;
  }
  #slide3 {
    background: #e5e5e5;
    display: flex;
  }
  #slide4 {
    background: #e5e5e5;
    display: flex;
  }
  #slide5 {
    background: #e5e5e5;
    display: flex;
  }

  .video {
    width: 70%;
    height: 100%;
    background-color: #e5e5e5;
  }
  .player {
    width: 100%;
    height: 100%;
  }
  .info {
    width: 30%;
    height: 100%;
    background-color: #fff;
  }

  .info-title {
    display: flex;
    padding: 10px 20px;

    img {
      height: 45px;
      object-fit: cover;
    }
  }
  .info-title-span {
    display: flex;
    flex-direction: column;
    padding: 0px 0 0 10px;
  
    span {
      font-size: 14px;
    }
  }

  .date-paragraph {
    height: calc(100% - 68px);
    padding: 10px;
    span {
      color: #000000b3;
      font-size: 13px;
      font-weight: bold;
    }
    p {
      margin-top: 10px;
      font-size: 14px;
      overflow: auto;
      height: calc(100% - 20px);
    }
  }

  @media only screen and (max-width: 1300px) {
    #s1:checked ~ #slide4,
    #s2:checked ~ #slide5,
    #s3:checked ~ #slide1,
    #s4:checked ~ #slide2,
    #s5:checked ~ #slide3 {
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
      transform: translate3d(0%, 0%, -300px);
    }

    #s1:checked ~ #slide5,
    #s2:checked ~ #slide1,
    #s3:checked ~ #slide2,
    #s4:checked ~ #slide3,
    #s5:checked ~ #slide4 {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3),
        0 2px 2px 0 rgba(0, 0, 0, 0.2);
      transform: translate3d(0%, 0%, -150px);
    }

    #s1:checked ~ #slide1,
    #s2:checked ~ #slide2,
    #s3:checked ~ #slide3,
    #s4:checked ~ #slide4,
    #s5:checked ~ #slide5 {
      box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3),
        0 11px 7px 0 rgba(0, 0, 0, 0.19);
      transform: translate3d(0, 0, 0);
    }

    #s1:checked ~ #slide2,
    #s2:checked ~ #slide3,
    #s3:checked ~ #slide4,
    #s4:checked ~ #slide5,
    #s5:checked ~ #slide1 {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3),
        0 2px 2px 0 rgba(0, 0, 0, 0.2);
      transform: translate3d(0%, 0%, -150px);
    }

    #s1:checked ~ #slide3,
    #s2:checked ~ #slide4,
    #s3:checked ~ #slide5,
    #s4:checked ~ #slide1,
    #s5:checked ~ #slide2 {
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
      transform: translate3d(0%, 0%, -300px);
    }
    #slider {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1090px) {
    #slider label {
      margin: auto;
      width: 80%;
      border-radius: 4px;
      position: absolute;
      left: 0;
      right: 0;
      cursor: pointer;
      transition: transform 0.4s ease;
    }
    .info {
      display: none;
    }
    .video {
      width: 100%;
      height: 100%;
      background-color: #e5e5e5;
    }
    #slider {
      display: flex;
      align-items: center;
      height: 330px;
      position: relative;
      perspective: 1000px;
      transform-style: preserve-3d;
    }
  }
`;
