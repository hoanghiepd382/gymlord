const bcrypt = require("bcrypt");

module.exports.validatePassword = (password)=>{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

module.exports.hashPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;
}

module.exports.checkPassword = async (password, hashedPassword) =>{
    const isMatch = await bcrypt.compare(password, hashedPassword);

    return isMatch;
}