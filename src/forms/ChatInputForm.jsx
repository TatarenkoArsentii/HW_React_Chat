import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { connect } from "react-redux";
import { sendMsg } from "../actions";
import schema from "../validations/chatValidation";
import styles from "./chat.module.sass";
import { useLayoutEffect } from "react";

function ChatInputForm(props) {
  const { sendMsgAction, usersAndMsgs } = props;
  const initialUserValues = { userName: "", userMsg: "", isCurrentUser: false };
  const article = usersAndMsgs.map((u, index) => {
    return u.isCurrentUser ? (
      <article key={index} className={styles.currentUser}>
        <div className={styles.currentUser_wrapper}>
          <span>{u.userMsg}</span>
          <p>{u.date}</p>
        </div>
      </article>
    ) : (
      <article key={index} className={styles.otherUsers}>
        <div className={styles.user_info_wrapper}>
          <img src={u.img.defaultUserAva} alt="logo" />
          <span>{u.userName}</span>
        </div>
        <div className={styles.otherUsers_wrapper}>
          <span>{u.userMsg}</span>
          <p>{u.date}</p>
        </div>
      </article>
    );
  });

  const firstElem = usersAndMsgs[0];
  useLayoutEffect(() => {
    const div = document.getElementById("chat");
    div.scrollTo(0, div.scrollHeight);
  }, [usersAndMsgs.length, firstElem]);

  const onSubmitHendler = (value, formikBag) => {
    sendMsgAction(value);
    formikBag.resetForm();
  };
  return (
    <>
      <div id="chat" className={styles.chatWrapper}>
        {article}
      </div>
      <Formik
        initialValues={initialUserValues}
        onSubmit={onSubmitHendler}
        validationSchema={schema}
      >
        {(formikProps) => {
          return (
            <Form>
              <Field name="userName" type="text" placeholder="Ваше имя" />
              <ErrorMessage name="userName" />

              <Field
                name="userMsg"
                component="textarea"
                placeholder="Введите сообщение"
              />
              <ErrorMessage name="userMsg" />
              <label htmlFor="isCurrentUser">
                Current user
                <Field type="checkbox" name="isCurrentUser"></Field>
              </label>

              <button type="submit"> Отправить </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

const mapStateToProps = (state) => {
  return state.chatReducer;
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMsgAction: (data) => {
      dispatch(sendMsg(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatInputForm);
