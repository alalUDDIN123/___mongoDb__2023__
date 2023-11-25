// user.controller.js
const handleSuccess = require("../middlewares/success.middleware");
const { UserModel } = require("../model/user.model");

const createUser = async (req, res, next) => {
    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        await user.save();
        handleSuccess(user, 'User created successfully', { additionalInfo: 'Some details' },  res, next);
    } catch (err) {
        next(err);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find();
        handleSuccess(users, 'All users', { additionalInfo: 'Some details' }, res, next);
    } catch (err) {
        next(err);
    }
};


const getUserById = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.params.id);
        handleSuccess(user, 'User by id', { additionalInfo: 'Some details' }, res, next);
    } catch (err) {
        next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        handleSuccess(user, 'User updated', { additionalInfo: 'Some details' }, res, next);
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        handleSuccess(user, 'User deleted', { additionalInfo: 'Some details' }, res, next);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
