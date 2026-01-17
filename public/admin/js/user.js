const buttonChangeStatus = document.querySelectorAll("[button-change-status]");
if (buttonChangeStatus.length > 0){
    buttonChangeStatus.forEach(button =>{
        button.addEventListener("click", ()=>{
            const currentStatus = button.getAttribute("data-status");
            const status = currentStatus == "active"? "inactive"  : "active";
            const userId = button.getAttribute("data-id");
            axios.patch("/admin/user/changeStatus", {
                status,
                userId
            })
            .then(response => {
                if (response.data.code == 200) {
                    button.setAttribute("data-status", status);
                    window.location.reload();
                } else {
                    alert("Có lỗi xảy ra khi cập nhật trạng thái.");
                }
            })
            .catch(error => {
                console.error("Lỗi:", error);
                alert("Không thể kết nối đến máy chủ.");
            });
        })
    })
}

const buttonDelete = document.querySelectorAll("[button-delete]");
if (buttonDelete.length>0){
    buttonDelete.forEach(button =>{
        button.addEventListener("click", ()=>{
            const userId = button.getAttribute("data-item");
            axios.patch(`/admin/user/delete`, {
                userId
            })
            .then(response =>{
                if (response.data.code == 200){
                    window.location.reload();
                }
            })
        })
    })
}
