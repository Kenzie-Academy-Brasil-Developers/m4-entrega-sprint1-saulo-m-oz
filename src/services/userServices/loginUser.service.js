import jwt from "jsonwebtoken";
import users from "../../database";

const loginUserService = (email) =>{
    const user = users.find((user) => user.email === email);
    const token = jwt.sign({uuid: user.uuid}, "SECRET_KEY", {expiresIn: "24h"});
    return {
        token: token
    }
}

export default loginUserService;