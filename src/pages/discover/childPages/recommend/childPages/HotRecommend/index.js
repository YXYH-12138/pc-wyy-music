import React, { memo, useEffect } from 'react';
import ThemeHeader from 'components/ThemeHeader';
import { HotRecommendWrapper } from "./style";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { hotRecommendsAction } from '../../store/actionCreators';
import SongsCover from 'components/SongsCover';

export default memo(function HotRecommend() {

  const dispatch = useDispatch();
  const { hotRecommends = [] } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual);

  useEffect(() => {
    dispatch(hotRecommendsAction(8));
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeader title="热门推荐" keyWords={['华语', '流行', '摇滚', '民谣', '电子']} />
      <ul className="hot-recommend-list">
        {
          hotRecommends && hotRecommends.map((item) => (
            <li key={item.id}>
              <SongsCover info={item} />
            </li>
          ))
        }
      </ul>
    </HotRecommendWrapper>
  )
})
