import styled from "styled-components";

export const Wrapper = styled.div`
  height: 376px;

  .content {
    height: 100%;
    background-color: #fff;

    .no-found {
      height: 100%;
      padding: 125px 0 0;
      text-align: center;
      color: #666;
      font-size: 18px;

      .no-found-logo {
        display: inline-block;
        width: 270px;
        height: 112px;
        background: url(${require('../../assets/img/logo.png').default}) no-repeat 0 -405px;
      }

      p {
        margin-top: 20px;
      }
    }
  }
`