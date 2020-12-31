import styled from "styled-components";

export const HeaderWrapper = styled.div`
  font-size: 14px;
  color: #fff;
  background-color: #242424;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;

  .logo {
    width: 176px;
    height:100%;
    a {
      display: block;
      height: 100%;
      background-position: 0 0;
      text-indent: -99999px;
    }
  }

  .select-list {
    display: flex;
    .select-list-item {
      position: relative;
      a {
        display: block;
        color: #ccc;
        padding: 0 20px;
        line-height: 70px;
      }
      &:hover a, a.active {
        text-decoration: none;
        color: #fff;
        background: #000;
      }
      a.active .icon {
        position: absolute;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
        background-position: -226px 0;
      }
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          top: 20px;
          right: -15px;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png").default});
          background-position: -190px 0;
        }
      }
    }
  }
`

export const HeaderRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  div {
    white-space: nowrap;
  }

  .search {
    border-radius: 32px;
    width: 180px;
    border: 1px solid #d9d9d9;
    background: #fff;
  }

  .creation-center {
    height: 32px;
    padding: 0 10px;
    line-height: 32px;
    margin-left: 10px;
    font-size: 12px;
    border: 1px solid #4F4F4F;
    color: #ccc;
    border-radius: 32px;
    cursor: pointer;

    &:hover {
      border: 1px solid #fff;
      color: #fff;
    }
  }

  .login {
    font-size: 12px;
    margin-left: 16px;
  }
`
