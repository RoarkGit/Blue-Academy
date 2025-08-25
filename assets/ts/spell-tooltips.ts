function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  const tooltipLinks = document.getElementsByClassName("spell-tooltip");
  for (const tooltipLink of tooltipLinks) {
    const tooltipId = tooltipLink.getAttribute("data-tooltip-id");
    if (tooltipId === null) return
    const tooltip = document.getElementById(tooltipId);
    if (tooltip === null) return
    tooltipLink.addEventListener("mouseenter", function() {
      tooltip.hidden = false;
    });
    tooltipLink.addEventListener("mouseleave", function() {
      tooltip.hidden = true;
    });
    tooltipLink.addEventListener("mousemove", (event) =>{
      if (!(event instanceof MouseEvent)) return;
      tooltip.style.top = `${event.clientY}px`;
      tooltip.style.left = `${event.clientX + 10}px`;
    });
  }
});