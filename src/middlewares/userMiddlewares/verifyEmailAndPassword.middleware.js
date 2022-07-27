import users from "../../database";
import * as bcrypt from "bcryptjs";

const verifyEmailAndPasswordMiddleware = (request, response, next) =>{
    const {email, password} = request.body;
    const user = users.find((user) => user.email === email);
    if(!user){
        return response.status(401).json({message: "Wrong email/password"});
    }
    const correctPassword = bcrypt.compareSync(password, user.password);
    if(!correctPassword){
        return response.status(401).json({message: "Wrong email/password"});
    }
    next();
}

export default verifyEmailAndPasswordMiddleware;