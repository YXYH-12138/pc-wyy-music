import styled from "styled-components";

export const TopWrapper = styled.div`
  position: relative;
  top: -5px;
  height: 35px;
  box-sizing: border-box;
  background-color: #C20C0C;
  border-bottom: 1px solid #a40011;

  .sub-menu {
    height: 100%;
    display: flex;
    padding-left: 180px;

    li {
      a {
        display: block;
        font-size: 12px;
        color: #fff;
        text-decoration: none;
        width: 84px;
        line-height: 35px;
        text-align: center;

        &.active em, em:hover {
          background: #9B0909;
        }

        em {
          display: inline-block;
          height: 20px;
          padding: 0 13px;
          border-radius: 20px;
          line-height: 21px;
        }
      }
    }
  }
`