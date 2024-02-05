//Action Value
const ADD_LETTER = "ADD_LETTER";

//Action Creator
export const addLetter = (payload) => {
  return {
    type: ADD_LETTER,
    payload
  };
};

const LOCAL_KEY = "letter"; //localStorage key
const initial = JSON.parse(localStorage.getItem(LOCAL_KEY));

//초깃값
const initialState = {
  data: initial !== null ? initial : {},
  localKey: LOCAL_KEY
};

//리듀서
const letter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default letter;
