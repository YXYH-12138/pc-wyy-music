import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 173px;
  border-top: 1px solid #d3d3d3;
  
  .content {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
`

export const FooterLeft = styled.div`
  p a, p span {
    font-size: 12px;
    color: #666;
  }

  .sep {
    margin-right: 14px;
  }

  .email {
    color: #333;
  }

  .police-logo {
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url('https://s2.music.126.net/style/web2/img/3rd/police.png?26969cecb1f108af5beaf195770c35d6') no-repeat 0 0/cover;
    vertical-align: -2px;
  }

  p:nth-child(1){
    a {
      font-size: 12px;
      color: #999;
    }
    .line {
      margin: 0 8px 0 10px;
      color: #c2c2c2;
    }
  }
`

export const FooterRight = styled.ul`
  display: flex;
  margin-top: 33px;

  li + li {
    margin-left: 30px
  }

 .item {
   width: 60px;
   height: 70px;

   .link {
    display: block;
    width: 50px;
    height: 45px;
    background-image: url(${require("@/assets/img/sprite_footer_02.png").default});
    background-size: 110px 450px;
  }

  :nth-child(1) .link {
    background-position: -60px -101px;
  }
  :nth-child(2) .link {
    background-position: 0 0;
  }
  :nth-child(3) .link {
    background-position: -60px -50px;
  }
  :nth-child(4) .link {
    background-position: 0 -101px;
  }

  .title {
    margin-top: 5px;
    display: block;
    width: 52px;
    height: 10px;
    background-image: url(${require("@/assets/img/sprite_footer_01.png").default});
    background-size: 180px 100px;
  }

  :nth-child(1) .title {
    background-position: 2px -90px;
  }
  :nth-child(2) .title {
    background-position: 0 0;
    margin-top: 7px;
  }
  :nth-child(3) .title {
    background-position: 0 -54px;
    margin-top: 6px;
  }
  :nth-child(4) .title {
    background-position: -1px -72px;
    margin-top: 6px;
  }
 }
`