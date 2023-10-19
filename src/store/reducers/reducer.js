import { SINGLE_TRIGGER } from "../types";

const initialState = {
  count: 0,
  text: "Hello World!",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SINGLE_TRIGGER:
      return {
        ...state,
        count: state.count + payload,
      };

    default:
      return state;
  }
};

export default reducer;