import * as bcrypt from "bcryptjs";
import users from "../../database";

const updateUserService = async (id, name, email, password) =>{

    //Acessa o usuário
    const user = users.find(user => user.uuid === id);

    const newName = name ? name : user?.name;
    const newEmail = email ? email : user?.email;
    const newHashPassword = password ? await bcrypt.hash(password, 10) : user?.password;
    const updatedOn = new Date().toISOString();

    const updatedUser = {
        name: newName,
        email: newEmail,
        password: newHashPassword,
        updatedOn,
    }

    const userIndex = users.findIndex(user => user.uuid === id);
    users[userIndex] = {...users[userIndex], ...updatedUser};

    let returnUser;
    returnUser = {
        uuid: users[userIndex].uuid,
        name: users[userIndex].name,
        email: users[userIndex].email,
        isAdm: users[userIndex].isAdm,
        updatedOn: updatedOn,
        createdOn: users[userIndex].createdOn,
    };

    return returnUser;

}

export default updateUserService;