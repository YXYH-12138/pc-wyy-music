import styled from "styled-components";

export const SongsCoverWrapper = styled.div`
  width: 140px;

  .cover-top {
    position: relative;
    cursor: pointer;
    .cover {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 27px;
      padding : 0 10px;
      background-position: 0 -537px;
      color: #ccc;
      font-size: 12px;

      .erji {
        display: inline-block;
        width: 14px;
        height: 11px;
        margin-right: 5px;
        background-position: 0 -24px;
      }

      .play {
        display: inline-block;
        width: 16px;
        height: 17px;
        background-position: 0 0;
      }
   }
  }

  .cover-source {
    font-size: 14px;
    color: #000;
    margin-top: 6px;
    a {
      color: #000;
    }
  }
`