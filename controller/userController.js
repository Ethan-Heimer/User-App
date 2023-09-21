const userSchema = require("../model/users");

const addUser = async (req, res) => {
    try{
        const user = new userSchema(constructData(req.body));
        await user.save();
    }
    catch(err){
        console.log(err);
    }

    res.redirect('/');
}

const editUser = async (req, res) => {
    try{
        await userSchema.findByIdAndUpdate(req.params.id,constructData(req.body));
        res.redirect('/');
    }catch(err){
        console.log(err);
    }
}

const deleteUser = async (req, res) => {
    try{
        await userSchema.findByIdAndDelete(req.params.id);
        res.redirect('/');
    }
    catch(err){
        console.log(err);
    }
}

function constructData(body){
    return {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        organization: body.organization,
        phone: body.phoneNumber,
        address: body.address,
        city: body.city,
        country: body.country
    }
}

module.exports = {
    addUser,
    editUser,
    deleteUser
}