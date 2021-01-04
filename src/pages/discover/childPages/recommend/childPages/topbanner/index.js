import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { TopBannerWrapper, BannerLeft, BannerControl, BannerRight } from './style';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { topBannerAction } from '../../store/actionCreators';
import { Carousel } from "antd";

export default memo(function TopBanner() {

  const [index, setIndex] = useState(0);
  const bannerRef = useRef();
  const dispatch = useDispatch();
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual);

  useEffect(() => {
    dispatch(topBannerAction());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setIndex(to);
  }, [])

  const bgImg = topBanners[index] && topBanners[index].imageUrl + "?imageView&blur=40x20";

  return (
    <TopBannerWrapper bgImg={bgImg}>
      <div className="banner wrap-v2">
        <BannerLeft>
          {/* 轮播图 */}
          <Carousel
            dots={{ className: "banner-dot" }}
            effect="fade"
            autoplay
            beforeChange={bannerChange}
            ref={bannerRef}
          >
            {
              topBanners && topBanners.map(item => (
                <div className="banner-item" key={item.imageUrl}>
                  <a href={item.url}>
                    <img src={item.imageUrl} alt="" />
                  </a>
                </div>
              ))
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <a href="https://music.163.com/#/download" target="__blank">下载客户端</a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl direction="left" onClick={() => bannerRef.current.prev()} />
        <BannerControl direction="right" onClick={() => bannerRef.current.next()} />
      </div>
    </TopBannerWrapper >
  )
})
