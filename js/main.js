// Support page show/hide live chat box

function display() {
    var x = document.getElementById("live-help");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
}

