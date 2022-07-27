import users from "../../database";
import jwt from "jsonwebtoken";

const listUserService = (token) =>{
    const decoded = jwt.verify(token, "SECRET_KEY");
    const id = decoded.uuid;
    const user = users.find(user => user.uuid === id);
    const {uuid, name, email, isAdm, createdOn, updatedOn} = user;
    const returnUser = {
        uuid,
        name,
        email,
        isAdm,
        createdOn,
        updatedOn
    }
    return returnUser
}

export default listUserService;