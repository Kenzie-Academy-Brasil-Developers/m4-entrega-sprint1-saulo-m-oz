import users from "../../database";
import * as bcrypt from "bcryptjs";
import {v4 as uuid} from "uuid";

const createUserService = async (name, email, password, isAdm) =>{

    const hashPassword = await bcrypt.hash(password, 10);
    const createdOn = new Date().toISOString();

    const newUser = {
        uuid: uuid(),
        name,
        email,
        password: hashPassword,
        isAdm,
        createdOn: createdOn,
        updatedOn: createdOn,
    }

    users.push(newUser);
    return {
        uuid: uuid(),
        name,
        email,
        isAdm,
        createdOn: createdOn,
        updatedOn: createdOn,
    }

}

export default createUserService;