import React, { memo } from 'react'
import { RecommendWrapper } from './style'
import TopBanner from "./childPages/topbanner"

export default memo(function Recommend() {
  return (
    <RecommendWrapper>
      <TopBanner />
    </RecommendWrapper>
  )
})
