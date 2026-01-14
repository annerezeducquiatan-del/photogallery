window.onload = function() {
    console.log("Page loaded!");
    addTabIndexToFigures();
};

function addTabIndexToFigures() {
    const figures = document.querySelectorAll("figure");
    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0"); // make figures focusable
        // Mouse events
        figures[i].addEventListener("mouseover", () => {
            figures[i].style.borderColor = "red";
        });
        figures[i].addEventListener("mouseleave", () => {
            figures[i].style.borderColor = "#ccc";
        });
        // Keyboard events
        figures[i].addEventListener("focus", () => {
            figures[i].style.borderColor = "green";
            console.log("Figure focused!");
        });
        figures[i].addEventListener("blur", () => {
            figures[i].style.borderColor = "#ccc";
        });
    }
}
