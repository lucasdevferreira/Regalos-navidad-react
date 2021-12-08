import { ADD_GIFT, REMOVE_ALL, REMOVE_GIFT } from "../actions";

//Reducer
let index = 1;
const initialState = {
  gifts: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GIFT:
      return {
        ...state,
        gifts: [...state.gifts, { gift: action.payload, id: index++ }],
      };

    case REMOVE_ALL:
      return {
        ...state,
        gifts: action.payload,
      };
    case REMOVE_GIFT:
      return {
        ...state,
        gifts: state.gifts.filter((g) => g.id !== action.id),
      };
    default:
      return state;
  }
}
