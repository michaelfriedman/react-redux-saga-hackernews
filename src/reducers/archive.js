import { STORY_ARCHIVE } from "../constants/actionTypes";
// import applyArchiveStory from '../actions/archive';

const INITIAL_STATE = [];

const applyArchiveStory = (state, action) => [...state, action.id];

const archiveReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case STORY_ARCHIVE:
      return applyArchiveStory(state, action);
    default:
      return state;
  }
};

export default archiveReducer;
