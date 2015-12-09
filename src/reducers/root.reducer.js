import {Map, Seq, List,OrderedMap, Record} from 'immutable';

const initialState = Map({
  count: 0
});

export default function rootReducer(state=initialState, action) {
  console.log(`Calling ${action.type}...`);
  switch (action.type) {
    case "UPDATE_COUNT": {
      return state.update( "count", (count) => count + 1 );
    }
   }
  return state;
}
