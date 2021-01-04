import styled from "styled-components";

export const NewDiscWrapper = styled.div`
  .album-list {
    height: 186px;
    margin: 20px 0 37px; 
    border: 1px solid #d3d3d3;
    
    .list-inner {
      position: relative;
      height: 184px;
      padding-left: 16px;
      background: #f5f5f5;
      border: 1px solid #fff;

      .album-swiper-item {
        display: flex;
        margin-top: 28px;
        li {
          width: 118px;
          height: 150px;
          margin-left: 11px;
        }
      }
    }
  }
`

export const AlbumsControl = styled.button`
  position: absolute;
  top: 71px;
  width: 17px;
  height: 17px;
  background-color:transparent;
  background-image: url(${require('@/assets/img/sprite_02.png').default});
  cursor: pointer;
  ${props => {
    const { direction } = props;
    if (direction === 'left') {
      return 'background-position: -260px -75px;left: 4px;&:hover {background-position: -280px -75px}';
    }
    return 'background-position: -300px -75px;right: 4px;&:hover {background-position: -320px -75px}';
  }}
  
`