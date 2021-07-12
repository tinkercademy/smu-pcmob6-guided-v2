export const DARK_ACTION = "dark_mode";
export const LIGHT_ACTION = "light_mode";
export const UPLOAD_PIC_ACTION = "profile_picture";
export const DELETE_PIC_ACTION = "delete_photo";

const initialState = {
  isDark: false,
  profilePicture: null
};

export function lightModeAction() {
  return { type: LIGHT_ACTION }
}

export function darkModeAction() {
  return { type: DARK_ACTION }
}

export function uploadPicAction() {
  return { type: UPLOAD_PIC_ACTION }
}

export function deletePicAction() {
  return { type: DELETE_PIC_ACTION }
}

export default function accountPrefReducer(state = initialState, action) {
  switch (action.type) {
    case "dark_mode":
      return { ...state, isDark: true };
    case "light_mode":
      return { ...state, isDark: false };
    case "profile_picture":
      return { ...state, profilePicture: action.payload }
    case "delete_photo":
      return { ...state, profilePicture: null }
    default:
      return state;
  }
}