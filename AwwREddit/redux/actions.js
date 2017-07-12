export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOADING_CARDS = "LOADING_CARDS";
export const UPDATE_CARDS = "UPDATE_CARDS";
export const FAILURE_CARDS = "FAILURE_CARDS";
export const SWITCH_SECTION = "SWITCH_SECTION";
export const RESET_SECTION = "RESET_SECTION";
export const SECTIONS = { LOGIN: "LOGIN", CARDS: "CARDS", HISTORY: "HISTORY" };

export function Action(type, payload){
   return {
    type: type || null,
    payload: payload || null
  }
}
