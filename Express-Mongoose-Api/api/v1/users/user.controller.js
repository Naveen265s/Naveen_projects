// controller file ,calls service
const userService=require('./user.service')

const loginUser=(userDetails)=>{
    // return userDAO.loginUser(userDetails);
    return userService.loginUser(userDetails);
}
const registerUser=(userDetails)=>{
    // return userDAO.registerUser(userDetails);
    return userService.registerUser(userDetails);
}
module.exports={
    loginUser,registerUser
}