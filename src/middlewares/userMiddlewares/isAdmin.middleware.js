import jwt from "jsonwebtoken";
import users from "../../database";

const isAdminMiddleware = (request, response, next) =>{
    const {id} = request.params;
    let token = request.headers.authorization;
    token = token.split(" ")[1];
    jwt.verify(token, "SECRET_KEY", (error, decoded) =>{
        const userID = decoded.uuid;
        const user = users.find(user => user.uuid === userID);
        const isAdmin = user?.isAdm;
        if(!isAdmin && userID !== id){
            return response.status(401).json({message: "Unauthorized"});
        }
        next();
    })

}

export default isAdminMiddleware;