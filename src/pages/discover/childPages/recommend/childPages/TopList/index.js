import React, { memo, useEffect } from 'react';
import { TopListWrapper } from "./style";
import ThemeHeader from 'components/ThemeHeader';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { topListAction, rankingAction, rankingDetailAction } from '../../store/actionCreators';
import * as actionTypes from "../../store/constants";
import RankingList from 'components/RankingList';

export default memo(function TopList() {

  const dispatch = useDispatch();
  const {
    topList, soaringRanking, newSongsRanking, originalRanking,
    soaringRankingDetail, newSongsRankingDetail, originalRankingDetail
  } = useSelector(state => ({
    topList: state.getIn(['recommend', 'topList']),
    soaringRanking: state.getIn(['recommend', 'soaringRanking']),
    newSongsRanking: state.getIn(['recommend', 'newSongsRanking']),
    originalRanking: state.getIn(['recommend', 'originalRanking']),
    soaringRankingDetail: state.getIn(['recommend', 'soaringRankingDetail']),
    newSongsRankingDetail: state.getIn(['recommend', 'newSongsRankingDetail']),
    originalRankingDetail: state.getIn(['recommend', 'originalRankingDetail']),
  }), shallowEqual);

  useEffect(() => {
    dispatch(topListAction());
  }, [dispatch]);

  useEffect(() => {
    if (topList && topList.length > 0) {
      // 飙升榜
      dispatch(rankingAction(topList[0].id, actionTypes.SOARING_RANKING, 'soaringRanking'));
      // 新歌榜
      dispatch(rankingAction(topList[1].id, actionTypes.NEW_SONGS_RANKING, 'newSongsRanking'));
      // 原创榜
      dispatch(rankingAction(topList[2].id, actionTypes.ORIGINAL_RANKING, 'originalRanking'));
    }
  }, [topList, dispatch])

  useEffect(() => {
    const ids = getIns(soaringRanking);
    ids && ids.length > 0 && dispatch(rankingDetailAction(ids, actionTypes.SOARING_RANKING_DETAIL, 'soaringRankingDetail'));
  }, [dispatch, soaringRanking])

  useEffect(() => {
    const ids = getIns(newSongsRanking);
    ids && ids.length > 0 && dispatch(rankingDetailAction(ids, actionTypes.NEW_SONGS_RANKING_DETAIL, 'newSongsRankingDetail'));
  }, [dispatch, newSongsRanking])

  useEffect(() => {
    const ids = getIns(originalRanking);
    ids && ids.length > 0 && dispatch(rankingDetailAction(ids, actionTypes.ORIGINAL_RANKING_DETAIL, 'originalRankingDetail'));
  }, [dispatch, originalRanking])

  /**
   * 将id数组分割成字符串
   * @param {*} data 
   */
  function getIns(data) {
    const trackIds = data.trackIds;
    if (!trackIds) return null;
    return trackIds.map(item => item.id).join(',');
  }

  return (
    <TopListWrapper>
      <ThemeHeader title='榜单' />
      <div className="content">
        <RankingList info={soaringRanking} list={soaringRankingDetail} />
        <RankingList info={newSongsRanking} list={newSongsRankingDetail} />
        <RankingList info={originalRanking} list={originalRankingDetail} />
      </div>
    </TopListWrapper>
  )
})
