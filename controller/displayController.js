const userModel = require("../model/users");

const displayRegister = (req, res) => {
    res.render('register', {user: null});
}

const displayEdit = async (req, res) => {
    const user = await userModel.findById(req.params.id);
    res.render('register', {user})
}

const displayUsers = async(req, res) => {
    const users = await userModel.find();
    console.log(users);

    res.render("users", {users});
}

module.exports = {
    displayRegister,
    displayUsers,
    displayEdit
}