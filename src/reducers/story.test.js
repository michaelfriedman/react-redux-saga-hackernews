import storyReducer from './story';
import { STORIES_ADD } from '../constants/actionTypes';

describe('storyReducer', () => {
  it('adds stories to the next state', () => {
    const stories = ['a', 'b', 'c'];

    const action = {
      type: 'STORIES_ADD',
      stories,
    };

    const previousState = { stories: [], error: null };
    const expectedState = { stories, error: null };
    const newState = storyReducer(previousState, action);

    expect(newState).toEqual(expectedState);
  });
});
