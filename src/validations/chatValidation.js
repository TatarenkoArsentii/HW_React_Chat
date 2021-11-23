import * as yup from "yup";

const schema = yup.object({
  userName: yup.string().required().min(2),
  userMsg: yup.string().required(),
});
export default schema;
