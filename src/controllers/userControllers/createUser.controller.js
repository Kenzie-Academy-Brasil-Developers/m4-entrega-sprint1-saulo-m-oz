import createUserService from "../../services/userServices/createUser.service";

const createUserController = async(request, response)=>{
    const {name, email, password, isAdm} = request.body;
    const newUser = await createUserService(name, email, password, isAdm);
    return response.status(201).json(newUser);
}

export default createUserController;