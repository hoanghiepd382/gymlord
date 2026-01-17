const User = require("../../models/user.model");
const configSystem = require("../../config/system");
const hashPasswordHelper = require("../../helpers/hashPassword")


module.exports.index = async (req, res)=>{
    const find = {
        deleted: false
    }
    
    const records = await User.find(find).select("-password -tokenUser");
   
    res.render("admin/pages/users/index", {
        pageTitle: "Danh sách tài khoản người dùng",
        records: records
    });
}

module.exports.create = (req, res)=>{
    res.render("admin/pages/users/create", {
        pageTitle: "Thêm người dùng mới",    
    });
}

module.exports.createPost = async (req, res) =>{
    const emailExist = await User.findOne({
        email: req.body.email,
        deleted: false
    });
    if (emailExist){
        req.flash("error", `Email ${req.body.email} đã tồn tại!`);
        res.redirect("back");
    }
    else{
        req.body.password = await hashPasswordHelper.hashPassword(req.body.password);

        const newUser = await new User(req.body);
        newUser.save();
        res.redirect(`${configSystem.prefixAdmin}/user`);
    }
}

module.exports.changeStatus = async (req, res)=>{
    try {
        await User.updateOne({
            _id: req.body.userId
        },{
            status: req.body.status
        });
        res.json({
            code: 200,
            message: "Thành công"
        })
        req.flash('success', 'Thay đổi trạng thái thành công!!!');
    } catch (error) {
        res.json({
            code: 400,
            message: "Có lỗi xảy ra"
        })
    }
}

module.exports.delete = async (req, res)=>{
    try {
        await User.updateOne({
            _id: req.body.userId
        },{
            deleted: true
        })
        res.json({
            code: 200,
            message: "Thành công"
        })
    } catch (error) {
        res.json({
            code: 400,
            message: "Thất bại"
        })
    }
}