import users from "../../database";


const deleteUserService = (id) =>{
    const userIndex = users.findIndex(user => user.id === id);
    users.splice(userIndex, 1);
    return "User deleted with success";
}

export default deleteUserService;