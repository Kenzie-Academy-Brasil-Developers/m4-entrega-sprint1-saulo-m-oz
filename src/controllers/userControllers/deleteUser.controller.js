import deleteUserService from "../../services/userServices/deleteUser.service";

const deleteUserController = (request, response) =>{
    const {id} = request.params;
    const deletedUser = deleteUserService(id);
    return response.status(200).json(deletedUser);
}
export default deleteUserController;