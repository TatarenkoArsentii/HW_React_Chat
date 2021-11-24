import ACTION_TYPE from "../actions/actionsTypes";
import { defaultUserAva } from "../constants/defaultImgs";

const initialState = {
  usersAndMsgs: [
    {
      userName: "John",
      userMsg: "Hello ",
      img: { defaultUserAva },
      date: new Date().toLocaleString(),
      isCurrentUser: true,
    },
    {
      userName: "Den",
      userMsg: "lorem ipsum",
      img: { defaultUserAva },
      date: new Date().toLocaleString(),
      isCurrentUser: false,
    },
    {
      userName: "Den",
      userMsg: "lorem ipsum",
      img: { defaultUserAva },
      date: new Date().toLocaleString(),
      isCurrentUser: false,
    },
    {
      userName: "Den",
      userMsg: "lorem ipsum",
      img: { defaultUserAva },
      date: new Date().toLocaleString(),
      isCurrentUser: true,
    },
    {
      userName: "Den",
      userMsg: "lorem ipsum",
      img: { defaultUserAva },
      date: new Date().toLocaleString(),
      isCurrentUser: false,
    },
    {
      userName: "Den",
      userMsg: "lorem ipsum",
      img: { defaultUserAva },
      date: new Date().toLocaleString(),
      isCurrentUser: false,
    },
    {
      userName: "Den",
      userMsg: "lorem ipsum",
      img: { defaultUserAva },
      date: new Date().toLocaleString(),
      isCurrentUser: true,
    },
    {
      userName: "Den",
      userMsg: "lorem ipsum",
      img: { defaultUserAva },
      date: new Date().toLocaleString(),
      isCurrentUser: true,
    },
    {
      userName: "Den",
      userMsg: "lorem ipsum",
      img: { defaultUserAva },
      date: new Date().toLocaleString(),
      isCurrentUser: false,
    },
    {
      userName: "Den",
      userMsg: "lorem ipsum",
      img: { defaultUserAva },
      date: new Date().toLocaleString(),
      isCurrentUser: true,
    },
  ],
};
function ChatReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.SEND_MSG_ACTION:
      const { usersAndMsgs } = state;
      const { data } = action;
      const newUserAndMsg = {
        ...data,
        img: { defaultUserAva },
        date: new Date().toLocaleString(),
      };
      const newUsersAndMsgs = [...usersAndMsgs, newUserAndMsg];
      return { usersAndMsgs: newUsersAndMsgs };

    default:
      return state;
  }
}

export default ChatReducer;
