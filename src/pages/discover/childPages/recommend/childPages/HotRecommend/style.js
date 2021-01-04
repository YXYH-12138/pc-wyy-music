import styled from "styled-components";

export const HotRecommendWrapper = styled.div`
  width: 100%;

  .hot-recommend-list {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 0 -42px;

    li {
      width: 140px;
      padding: 0 0 50px 42px;
      box-sizing: content-box;
    }
  }
`