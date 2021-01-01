import { TOP_BANNERS } from "./constants"

const initialState = {
  topBanners: []
}

export function recommendReducer(state = initialState, action) {
  switch (action.type) {
    case TOP_BANNERS:
      return { ...state, topBanners: action.topBanners };
    default:
      return state;
  }
}

