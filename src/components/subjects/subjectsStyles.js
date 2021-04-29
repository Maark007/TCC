import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
`;

export const Model = styled.div`
  overflow: hidden;
  flex-wrap: wrap;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(330px, 3fr));

  #flex {
    display: flex;
  }

  .box-items {
    height: 170px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .div-box {
    align-items: center;
    justify-content: center;
    margin: 0 20px 0 20px;
  }

  .box-image {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.08s ease;
    position: relative;
    span {
      position: absolute;
      color: #fff;
      left: 0;
      bottom: 0;
      padding: 13px;
    }
  }
  .box-image:hover {
    box-shadow: -1px 1px #987afd, -2px 2px #987afd, -3px 3px #987afd,
      -4px 4px #987afd, -5px 5px #987afd, -6px 6px #987afd;
    transform: translate(6px, -6px);
    transition: 0.3s ease;
    cursor: pointer;
    position: relative;
  }

  .box-image img {
    height: 100%;
    width: 100%;
    transition: 0.3s ease;
    object-fit: cover;
    filter: brightness(0.3) blur(0.3px);
  }
`;
