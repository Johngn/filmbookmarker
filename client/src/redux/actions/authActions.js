// import { REGISTER_USER } from "./types";
import axios from "axios";

export const registerUser = newUser => dispatch => {
    axios.post("/api/auth", newUser).then(res => console.log(res));
};
