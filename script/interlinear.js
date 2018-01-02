/* Bible page: Interlinear button handling */

$(".inter-open").on("click", function () {
  // Get verse id of clicked ... button
  var v = $(this).parent().attr("id");
  
  // Hide ... inter-open button
	$("#" + v + "io").addClass("inter-hide");
  
  // Show interlinear loading message
	$("#" + v + "il").removeClass("inter-hide");
  
  // Attempt to load inter page fragment
  $("#" + v + "il").load("test_fragment_" + v + ".html", function (responseTxt, statusTxt, xhr) {
    if (statusTxt == "success") {
      //alert("External content loaded successfully!");
      $("#" + v +"ic").on("click",CloseInterlinear);
    } else {
      if (statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    }
  });
});

function CloseInterlinear(e) {
	var id = e.target.getAttribute("id");
	var v = "#" + id.substring(0, id.length - 2);
	// Show ... button
	$(v + "io").removeClass("inter-hide");
	// Hide interlinear content
	$(v + "il").addClass("inter-hide");
}
