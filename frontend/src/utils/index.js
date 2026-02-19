import { jwtDecode } from "jwt-decode";

const decodeToken = (token) => {
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            const exp = new Date(decodeToken.exp * 1000);
            if (new Date() > exp) {
                localStorage.removeItem("newsToken");
                return "";
            } else {
                return decodedToken;
            }
        } catch (error) {}
    } else {
        return "";
    }
};

export default decodeToken;
