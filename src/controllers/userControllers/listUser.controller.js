import listUserService from "../../services/userServices/listUser.service";

const listUserController = (request, response) =>{
    let token = request.headers.authorization;
    token = token.split(" ")[1];
    const user = listUserService(token);
    return response.status(200).json(user);
}

export default listUserController;