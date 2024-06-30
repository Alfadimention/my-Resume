function open_menu_bar() {
    var menu = document.getElementById("Side_Bar");
    var SignInButton = document.getElementById("Sign in");
    var ContactMe = document.getElementById("Contact me")
    if (menu.style.width == "1px") {
        menu.style.width = "200px";
        menu.style.height = "600px";
        SignInButton.style.display = "block";
        ContactMe.style.display = "block";
    }
    else {
        menu.style.width = "1px";
        menu.style.height = "1px";
        SignInButton.style.display = "none";
        ContactMe.style.display = "none";
    }
}

function rainbow() {
    var p1 = document.getElementById("position");
    var p2 = document.getElementById("programming experties");
    var p3 = document.getElementById("future plans");
    var b = document.getElementById("rainbow_gray");
    if (b.textContent == "Rainbow") {
        b.textContent = "Gray";
        p1.style.animationName = "rainbow_text";
        p2.style.animationName = "rainbow_text";
        p3.style.animationName = "rainbow_text";
        b.style.animationName = "rainbow_background";
        b.style.color = rgb(100, 100, 100)
    }
    else {
        b.textContent = "Rainbow";
        p1.style.animationName = "none";
        p2.style.animationName = "none";
        p3.style.animationName = "none";
        b.style.animationName = "rainbow_text";
    }
}