import updateUserService from "../../services/userServices/updateUser.service";

const updateUserController = async (request, response) =>{
    const {id} = request.params;
    const {name, email, password} = request.body;
    const updatedUser = await updateUserService(id, name, email, password);
    return response.status(200).json(updatedUser);
}

export default updateUserController;