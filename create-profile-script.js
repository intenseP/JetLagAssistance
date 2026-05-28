function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function checkForExistingProfile() {

    document.cookie = "username=Alex; expires=Fri, 31 Dec 2029 23:59:59 GMT; path=/";

    alert(document.cookie);

    
    if (getCookie("username") != "") {
        document.getElementById("profile-creation-form").style = "display:none;";
        document.getElementById("profile-edit").style = "display:block;";
    }
    else {

        document.getElementById("profile-creation-form").style = "display:block;";
        document.getElementById("profile-edit").style = "display:none;";
    }
}


function profileCreated() {
    let username = document.forms["profileForm"]["username"].value;

    setCookie("username", username, 100);

    checkForExistingProfile();
}

