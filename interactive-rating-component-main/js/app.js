$(document).ready(function () {
  // change button's color
  $(".btn-rate").click(function () {
    $(this).addClass("active");
    $(this).siblings(".btn-rate").removeClass("active");
  });

  // output rating
  const points = [1, 2, 3, 4, 5];
  $(".btn-rate").click(function () {
    let i = $(this).index();
    $("#output").text(`${points[i]} `);
  });

  // show Thank You and hide Rating
  $("form").submit(function () {
    $(".rating").hide();
    $(".success").show().animate({
      opacity: "1",
    });
    return;
  });
});
