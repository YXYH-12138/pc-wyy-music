import * as actionTypes from "./constants";
import { Map } from "immutable";

const initialState = Map({
  // 顶部轮播图
  topBanners: [],
  // 热门推荐
  hotRecommends: [],
  // 新碟上架
  newAlbums: [],
  // 榜单
  topList: [],
  // 飙升榜
  soaringRanking: {},
  soaringRankingDetail: [],
  // 新歌榜
  newSongsRanking: {},
  newSongsRankingDetail: [],
  // 原创榜
  originalRanking: {},
  originalRankingDetail: []

})

export function recommendReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOP_BANNERS:
      return state.set('topBanners', action.topBanners);
    case actionTypes.HOT_RECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends);
    case actionTypes.NEW_ALBUM:
      return state.set('newAlbums', action.newAlbums);
    case actionTypes.TOP_LIST:
      return state.set('topList', action.topList);
    case actionTypes.SOARING_RANKING:
      return state.set('soaringRanking', action.soaringRanking);
    case actionTypes.NEW_SONGS_RANKING:
      return state.set('newSongsRanking', action.newSongsRanking);
    case actionTypes.ORIGINAL_RANKING:
      return state.set('originalRanking', action.originalRanking);
    case actionTypes.SOARING_RANKING_DETAIL:
      return state.set('soaringRankingDetail', action.soaringRankingDetail);
    case actionTypes.NEW_SONGS_RANKING_DETAIL:
      return state.set('newSongsRankingDetail', action.newSongsRankingDetail);
    case actionTypes.ORIGINAL_RANKING_DETAIL:
      return state.set('originalRankingDetail', action.originalRankingDetail);
    default:
      return state;
  }
}

