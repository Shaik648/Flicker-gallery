import { combineReducers } from "redux";

import flickr from "./flickr";

const init = (state = {}, { type, data }) => {
  if (type === "INIT") {
    return {
      ...state,
      ...data
    };
  }

  return state;
};

export default combineReducers({
  init,
  flickr
});
