import decodeToken from "../utils";

const storeReducer = (state, action) => {
    const { type, payload } = action;

    if (type === "login_success") {
        state.token = payload.token;
        state.userInfo = decodeToken(payload.token);
        console.log(state);
        console.log(type);
        console.log(payload);
    }
    return state;
};

export default storeReducer;
