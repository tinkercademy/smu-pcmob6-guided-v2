export const CHANGE_MODE_ACTION = "change_mode";
export const UPLOAD_PIC_ACTION = "profile_picture";
export const DELETE_PIC_ACTION = "delete_photo";

const initialState = {
  isDark: false,
  profilePicture: null
};

export function changeModeAction() {
  return { type: CHANGE_MODE_ACTION }
}

export function uploadPicAction() {
  return { type: UPLOAD_PIC_ACTION }
}

export function deletePicAction() {
  return { type: DELETE_PIC_ACTION }
}

export default function accountPrefReducer(state = initialState, action) {
  switch (action.type) {
    case "change_mode":
      return { ...state, isDark: !state.isDark };
    case "profile_picture":
      return { ...state, profilePicture: action.payload }
    case "delete_photo":
      return { ...state, profilePicture: null }
    default:
      return state;
  }
}