import listAllUsersService from "../../services/userServices/listAllUsers.service";

const listAllUsersController = (request, response) =>{
    const users = listAllUsersService();
    return response.status(200).json(users);
}

export default listAllUsersController;