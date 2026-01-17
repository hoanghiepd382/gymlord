module.exports.index = (req, res)=> {
    const team = [
        {
          name: "Trịnh Hoàng Hiệp",
          role: "Chủ tịch",
          avatar: "https://res-console.cloudinary.com/dkutmdg2v/thumbnails/v1/image/upload/v1746631982/YXp0dncwbnlobWE4NW1lczJjeDM=/drilldown",
        },
        {
          name: "Phạm Văn Mách",
          role: "Giám đốc thể hình",
          avatar: "https://file.qdnd.vn/data/images/0/2017/10/07/vanphong/07102017p1p7.jpg?w=578",
        },
        {
          name: "Lý Đức",
          role: "Chuyên gia dinh dưỡng",
          avatar: "https://nuedu.vn/cdn/data/brandlogo/huyen-thoai-ly-duc.jpg",
        },
      ];
    res.render("client/pages/about/index", {
        pageTitle: "Về chúng tôi",
        team,
    });
}