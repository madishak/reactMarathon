import { GET_USER_DATA } from "../../constants";

export const getUserData = (noun, cases) => ({
    type: GET_USER_DATA,
    noun,
    cases,
  });