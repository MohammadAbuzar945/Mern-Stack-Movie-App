import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
    //when click on the button  , start dispatch action which is login start
    dispatch(loginStart());
    try {
        const res = await axios.post("auth/login", user);

        //if it is admin , & success , start dispatch action which is login success
        res.data.isAdmin && dispatch(loginSuccess(res.data));
    } catch (err) {
        //if it fails  , start dispatch action which is login failure
        dispatch(loginFailure());
    }
};