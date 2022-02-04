import { GET_USER_DATA } from "../../constants";
import nounEndings from "../../nounEndings.json";
import nounZeroEndings from "../../nounZeroEndings.json";

const userData = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_DATA: {
      const { noun, cases } = action;
      const endings = ["а", "я", "о", "е", "ь"];

      let newNoun = "";
      if (endings.includes(noun[noun.length - 1])) {
        newNoun = nounEndings.reduce((acc, elem) => {
          if (noun[noun.length - 1] === elem.ending) {
            acc =
              noun.substring(0, noun.length - 1) +
              noun
                .substring(noun.length - 1)
                .replace(noun[noun.length - 1], elem.cases[cases]);
          }
          return acc;
        }, "");
      } else {
        const { endings } = nounZeroEndings;
        newNoun = noun + endings[cases];
      }
      return { ...state, noun: newNoun, cases };
    }
    default:
      return state;
  }
};

export default userData;
