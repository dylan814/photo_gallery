
//Lightgallery Plugin
$(document).ready(function() {
        $("#lightgallery").lightGallery();
    });

//Search function

$("#search-bar").keyup(function() {
  let img_query = $("#search-bar").val().toLowerCase();
  $(".gallery img").filter(function() {
    let img_keyword = $(this).attr("alt").toLowerCase();
    if (img_keyword.indexOf(img_query) >= 0) {
      $(this).parent().show();
    } else {
      $(this).parent().hide()
    }
  });
});
