const usersData = require("../users.json");
// const Joi = require("joi");
// const getQueryErrors = require("../validators/users.validators");
// const verifyAuth = require("../middlewares/verifyAuth.middleware");

// const password = "LetMeIn";
// const userSearchSchema = Joi.object({
//     gender: Joi.string().valid('male','female'),
//     age: Joi.number().integer().min(0).max(100)
// }).or('gender', 'age');


const getUsers = (req,res) => {
    return res.send(usersData.data).end();
};

const getUserById = (req,res) => {
    const {uuid} = req.params;
    const reqUser = usersData.data.find((f) => f.login.uuid === uuid)
    if(reqUser)
    return res.send(reqUser).end();
    res.status(400).send({message: "User not found"});
    // res.sendStatus(400);//when we don't want to send any response
};

const searchUsers = (req,res) => {
    const {gender, age} = req.query;
    // if(gender && !["male", "female"].includes(gender))
    //     return res.status(422).send({message: "gender must be either male or female"});
    // if(age && isNaN(age))
    //     return res.status(422).send({message: "age must be an integer"});
    // if(age && age<0 || age>100)
    //     return res.status(422).send({message: "age must be between 0 & 100"});
    
    // const error = getQueryErrors(userSearchSchema, {gender, age});
    // if(error) return res.status(422).send({ message: error.details[0].message});
    
    if(gender && age)
        return res.send(usersData.data.filter((f) => f.gender === gender && f.dob.age === parseInt(age)));
    else if(gender)
        return res.send(usersData.data.filter((f) => f.gender === gender));
    else if (age)
        return res.send(usersData.data.filter((f) =>  f.dob.age === parseInt(age)));
    else
    return res.status(400).send({message: "At least one of the [gender or age] query params must be passed!"});
};

module.exports = {getUsers, getUserById, searchUsers};