import loginUserService from "../../services/userServices/loginUser.service";

const loginUserController = (request, response) =>{
    const {email, password} = request.body;
    const userLogin = loginUserService(email, password);
    return response.status(200).json(userLogin);
}

export default loginUserController;