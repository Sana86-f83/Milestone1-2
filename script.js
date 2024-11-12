var skills = document.getElementById("skills");
var toggleButton = document.getElementById("toggleButton");
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
