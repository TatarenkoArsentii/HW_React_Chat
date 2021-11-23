import ACTION_TYPE from "./actionsTypes";

export const sendMsg = (data) => {
  return { type: ACTION_TYPE.SEND_MSG_ACTION, data };
};
