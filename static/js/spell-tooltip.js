$("document").ready(function() {

$(".spell-tooltip")
  .on("mouseenter mouseleave mousemove", function(event) {
    const spellParam = $(this).attr("data-spell-param");
    const tooltipId = `${spellParam}-tooltip`;
    if (event.type === "mouseenter") {
      if ($(`#${tooltipId}`).length === 0) {
        const wrapper = $(document.createElement("div"));
        wrapper.attr("id", tooltipId);
        wrapper.attr("class", "spell-tooltip-popup-wrapper");
        wrapper.load(`/tooltips/${spellParam}`);
        $("body").append(wrapper);
      }
      $(`#${tooltipId}`).show();
    } else if (event.type === "mouseleave") {
      $(`#${tooltipId}`).hide();
    } else if (event.type === "mousemove") {
      $(`#${tooltipId}`).show();
      $(`#${tooltipId}`).css({ top: event.clientY, left: event.clientX + 10 })
    }
  });

});