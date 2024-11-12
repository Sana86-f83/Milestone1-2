const skills = document.getElementById("skills") as HTMLElement;
const toggleButton = document.getElementById(
  "toggleButton"
) as HTMLInputElement;

toggleButton?.addEventListener("click", () => {
  if (skills.style.display === "none") {
    skills.style.display = "block";
  } else {
    skills.style.display = "none";
  }
});
