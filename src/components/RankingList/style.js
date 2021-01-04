import styled from "styled-components";

export const RankingListWrapper = styled.div`
  width: 230px;
  .top {
    display: flex;
    height: 120px;
    padding: 20px 0 0 19px;
    .cover {
      position: relative;
      width: 80px;
      height: 80px;
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-indent: -9999px;
        background-position: -145px -57px;
      }
    }

    .top-right {
      margin: 6px 0 0 10px;
      .title {
        display:inline-block;
        a {
          color: #333;
          font-size: 14px;
          font-weight: 600;
        }
      }

      .btn {
        margin-top:8px;
        button {
          width: 22px;
          height: 22px;
          margin-right: 10px;
          cursor: pointer;
          :nth-child(1) {
            background-position: -267px -205px;
            &:hover {
              background-position: -267px -235px;
            }
          }
          :nth-child(2) {
            background-position: -300px -205px;
            &:hover {
              background-position: -300px -235px;
            }
          }
        }
      }
    }
  }

  .list {
    text-align: right;
    height: 319px;
    .list-item {
      position: relative;
      display: flex;
      padding-left: 18px;
      .oper {
        position: absolute;
        display: none;
        align-items: center;
        justify-content: flex-end;
        right: 14px;
        width: 64px;
        height: 32px;
        button {
          width: 17px;
          height: 17px;
          background: url(${require('@/assets/img/sprite_02.png').default}) no-repeat;
          cursor: pointer;
          :nth-child(1) {
            background-position: -267px -268px;
            &:hover {
              background-position: -267px -288px;
            }
          }
          :nth-child(2) {
            margin: 4px 6px 0 8px;
            background: url(${require('@/assets/img/sprite_icon2.png').default}) no-repeat  0 -700px;
            &:hover {
              background-position: -22px -700px;
            }
          }
          :nth-child(3) {
            background-position: -297px -268px;
            &:hover {
              background-position: -297px -288px;
            }
          }
        }
      }
      .index {
        width: 35px;
        height: 32px;
        line-height: 32px;
        color: #666;
        text-align: center;
      }
      a {
        width: calc(100% - 35px);
        max-width: 170px;
        height: 32px;
        color: #000;
        font-size: 12px;
        line-height: 32px;
        text-align: left;
      }
      :nth-child(-n+3)>.index{
        color: #c10d0c
      }
      &:hover a {
        width: calc(100% - 80px - 35px);
      }
      &:hover .oper {
        display: flex;
      }
    }
  }

  .more {
    margin-right: 32px;
    text-align: right;
    line-height: 32px;

    a {
      color: #000;
      font-size: 12px;
    }
  }
`