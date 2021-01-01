import styled from 'styled-components';

export const TopBannerWrapper = styled.div`
  height: 285px;
  margin-top: -5px;
  background: url(${props => props.bgImg}) center center/6000px;

  .banner {
    position: relative;
    display: flex;
    height: 100%;

    .banner-dot {
      height: 8px;
      li {
        height: 8px;
        margin: 0 10px 0 0; 
        :last-child {
          margin: 0;
        }
        button {
          width: 8px;
          height: 8px;
          border-radius: 8px;
        }
        &.slick-active{
          width: 16px;
          border-radius: 8px;
        }
        &.slick-active button, button:hover {
         background-color: red;
         opacity: 0.75;
        }
      }
    }
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 285px;
    
    img {
      height: 285px;
    }
  }
`

export const BannerRight = styled.div`
  width: calc(100% - 730px);
  background: url(${require("@/assets/img/download.png").default}) no-repeat 0 0;
  a {
    text-indent:-9999px;
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
  }
  p {
    margin: 10px auto ;
    text-align: center;
    color: #8d8d8d;
    font-size: 12px;
  }
`

export const BannerControl = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 37px;
  height: 63px;
  background-image: url(${require("@/assets/img/banner_sprite.png").default});
  background-color: transparent;
  cursor: pointer;
  ${props => {
    if (props.direction === 'left') {
      return 'left: -68px; background-position: 0 -360px'
    }
    return 'right: -68px; background-position: 0 -508px'
  }};

  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }
`