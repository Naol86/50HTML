const panels = document.querySelectorAll(".panel");

let prevActivePanel = panels[0];

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (prevActivePanel && prevActivePanel !== panel) {
      prevActivePanel.classList.remove("active");
    }
    panel.classList.toggle("active");
    prevActivePanel = panel;
  });
});
