import axios from "axios";
import {API_URL, GET_ERRORS} from "./types";

export const createProject = (project, history) => async dispatch => {
    try {
        const res = await axios.post(API_URL, project);
        history.push("/dashboard");
    } catch (e) {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    }
}
