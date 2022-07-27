import users from "../../database";

const verifyUserMiddleware = (request, response, next) =>{
    const {id} = request.params;
    const userIndex = users.findIndex(user => user.id === id);
    if(userIndex === -1){
        return response.status(401).json({message: "User not found"});
    }
    next();
}

export default verifyUserMiddleware;