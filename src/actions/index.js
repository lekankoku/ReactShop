import { SEND_EMAIL, SUBSCRIBE_MAILING } from "./types";
import { setLoader, removeLoader } from "./loaderActions";
import axios from "axios";
import { addSnackbar } from "./snackbarActions";
import snackbarMessages from "../components/utils/snackbarMessages";
export const sendEmail = (name, email, subject, message) => {
  return async function(dispatch) {
    dispatch(setLoader());
    try {
      const payload = {
        email,
        subject,
        message,
        name
      };
      await axios.post("/api/mail", payload);

      dispatch(removeLoader());
      dispatch(addSnackbar(snackbarMessages.mailer[0]));
    } catch (error) {
      dispatch(removeLoader());

      dispatch(addSnackbar(snackbarMessages.mailer[1]));
    }
  };
};

export const subscribeMailing = email => {
  return {
    type: SUBSCRIBE_MAILING,
    payload: true
  };
};
