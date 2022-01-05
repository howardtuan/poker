function edit() {
    var name = document.getElementById("member_name");
    var mail = document.getElementById("member_mail");
    var password = document.getElementById("member_password");
    var btn_group = document.getElementById("btn_group");
    var edit_btn = document.getElementById("edit_button");
    var confirm_edit = document.getElementById("confirm_edit");
    var cancel_edit = document.getElementById("cancel_edit");
    var history = document.getElementById("history");
    name.style.backgroundColor = "#fff";
    name.style.pointerEvents = "auto";
    mail.style.backgroundColor = "#fff";
    mail.style.pointerEvents = "auto";
    btn_group.style.justifyContent = "center";
    edit_btn.style.display = "none";
    confirm_edit.style.display = "block";
    cancel_edit.style.display = "block";
    history.style.display = "none";
}

function edit_finish() {
    var name = document.getElementById("member_name");
    var mail = document.getElementById("member_mail");
    var password = document.getElementById("member_password");
    var btn_group = document.getElementById("btn_group");
    var edit_btn = document.getElementById("edit_button");
    var confirm_edit = document.getElementById("confirm_edit");
    var cancel_edit = document.getElementById("cancel_edit");
    var history = document.getElementById("history");
    name.style.backgroundColor = "#bbb";
    name.style.pointerEvents = "none";
    mail.style.backgroundColor = "#bbb";
    mail.style.pointerEvents = "none";
    btn_group.style.justifyContent = "left";
    edit_btn.style.display = "block";
    confirm_edit.style.display = "none";
    cancel_edit.style.display = "none";
    history.style.display="block";
}

function popout(){
    
}

