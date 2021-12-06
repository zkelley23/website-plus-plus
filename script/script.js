/* ---------- NAVBAR ---------- */
function openNav() {
    document.getElementById("sideNav").style.width = "200px";
    document.getElementById("body").style.marginright = "200px";
    document.getElementById("darken").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
    document.getElementsByTagName(main).style.overflow = "hidden";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("body").style.marginright = "0";
    document.getElementById("darken").style.display = "none";
    document.getElementById("body").style.overflow = "visible";
    document.getElementsByTagName(main).style.overflow = "visible";
}