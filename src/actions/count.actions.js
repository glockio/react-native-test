import Firebase from 'firebase';
const firebaseUrl = "https://fiery-heat-567.firebaseio.com/";


const rootFireRef =  new Firebase(firebaseUrl);
const countRef = rootFireRef.child('count');

export function updateCount () {
  return {type: "UPDATE_COUNT"};
};

export function setCount (count) {
  return {type: "SET_COUNT", count};
};



export function fetchCount () {
  return (dispatch) => {
    dispatch({type: "FETCH_COUNT", fetching: true});

    countRef.once('value', (snapShot) => {
      const count  = snapShot.val();
      console.log(count)
      dispatch({type: "FETCH_COUNT", count, fetching: false});

    }, (error) => dispatch({type: "FETCH_COUNT", error, fetching: false }))
  }
}