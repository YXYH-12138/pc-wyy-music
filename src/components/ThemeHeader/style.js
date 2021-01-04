import styled from "styled-components";

export const ThemeHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  width: 100%;
  border-bottom: 2px solid #C10D0C;
  background-position: -225px -156px;
  padding: 0 10px 0 34px;

  .left a, .right a {
    color: #666;
    font-size: 12px;
  }

  .left {
    display: flex;
    .title {
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
      cursor: pointer;
    }

    .category {
      display: flex;
      margin-left: 20px;
      padding-top: 1px;
      .line {
        color: #ccc;
        font-size: 12px;
        margin: 0 10px;
      }
    }
  }

  .right {
    padding-top: 1px;
    .icon {
      display: inline-block;
      width: 12px;
      height: 10px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }

`