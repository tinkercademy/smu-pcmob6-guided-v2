export const LOG_IN = "log_in";
export const LOG_OUT = "log_out";

export function logInAction() {
  return { type: LOG_IN }
}

export function logOutAction() {
  return { type: LOG_OUT }
}

const initialState = {
  auth: null,
}

export default function blogAuthReducer(state = initialState, action) {
  switch (action.type) {
    case "log_in":
      return { ...state, auth: action.payload }
    case "log_out":
      return { ...state, auth: null }
  }
}
