import produce from "immer";
import * as ActionType from '@Actions/repos'

export const initialState = {
  isLoading: false,
  lang: '',
  items: [],
  totalCount: 0,
  incompleteResults: false
}

/* eslint-disable default-case, no-param-reassign */
export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionType.GET_TOP_REPOS:
        draft.isLoading = true;
        break;
      case ActionType.GET_TOP_REPOS_SUCCESS:
        draft.isLoading = false;
        draft.land = action.lang;
        draft.totalCount = action.payload.totalCount;
        draft.items = action.payload.items;
        draft.incompleteResults = action.payload.incompleteResults;
        break;
    }
  });