import styled from "styled-components";

export const Body = styled.div`
  transition: all 500ms;
  height: auto;
  .name-last_name-box {
    display: flex;
    div {
      :first-child {
        margin-right: 5px;
      }
      :last-child {
        margin-left: 5px;
      }
    }
  }
  @media (max-width: 500px) {
    .name-last_name-box {
      flex-direction: column;
      div {
        :first-child {
          margin-right: 0px;
        }
        :last-child {
          margin-left: 0px;
        }
      }
    }
  }
`;
