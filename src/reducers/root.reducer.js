import {Map, Seq, List,OrderedMap, Record} from 'immutable';

const initialState = Map({
  count: 0,
  loading: false,
});

export default function rootReducer(state=initialState, action) {
  console.log(`Calling ${action.type}...`);
  console.log(action)
  switch (action.type) {
    case "UPDATE_COUNT": {
      return state.update( "count", (count) => count + 1 );
    }

    case "SET_COUNT": {
      return state.set('count', action.count);
    }

    case "FETCH_COUNT": {
      if(action.fetching) {
        return state.set( "loading", true);
      } else {

        if(action.error) {
          // handel error
        } else {
          return state.merge({count: action.count, loading: false});
        }
      }

    }
   }
  return state;
}
