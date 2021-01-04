import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
  .cover {
    position: relative;
    border: 1px solid #ccc;
    margin-bottom: 7px;
    width: ${({ imgSize }) => imgSize + 'px'};
    height: ${({ imgSize }) => imgSize + 'px'};

   .mask:hover + .play-icon, .play-icon:hover {
      position: absolute;
      display: inline-block;
      right: 4px;
      bottom: 5px;
      width: 22px;
      height: 22px;
      background: url(${require('@/assets/img/sprite_icon.png').default}) no-repeat 0 -85px;
      cursor: pointer;
    }

    .play-icon:hover {
      background-position: 0 -110px;
    }

    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 118px;
      height: 100px;
      background-position: 0 -570px;
      text-indent: -9999px;
    }
  }
  p {
    width: 90%;
    font-size: 12px;
  }
  .song-name a{
    color: #000
  }
  .author-name a{
    color: #666
  }
`