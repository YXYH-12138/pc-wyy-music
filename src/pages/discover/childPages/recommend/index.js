import React, { memo } from 'react'
import { Content, RecommendLeft } from './style'
import TopBanner from "./childPages/TopBanner"
import HotRecommend from './childPages//HotRecommend'
import NewAlbum from './childPages/NewAlbum'
import TopList from './childPages/TopList'

export default memo(function Recommend() {
  return (
    <>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          {/* 热门推荐 */}
          <HotRecommend />
          {/* 新碟上架 */}
          <NewAlbum />
          {/* 榜单 */}
          <TopList />
        </RecommendLeft>
      </Content>
    </>
  )
})
