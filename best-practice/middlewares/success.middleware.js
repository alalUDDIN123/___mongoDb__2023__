// success.middleware.js
const handleSuccess = (data, message, additionalDetails,res, next) => {

    const response = {
        status: 'success',
        data,
        message,
        additionalDetails: additionalDetails || {}
    };

    res.status(200).json(response);
   
};

module.exports = handleSuccess;
