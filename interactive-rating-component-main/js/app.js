$(document).ready(function () {
  // change button's color
  $(".btn-rate").click(function () {
    $(this).addClass("active");
    $(this).siblings(".btn-rate").removeClass("active");
  });

  // output rating
  const points = $("input[name='rate']");
  $(".btn-rate").click(function () {
    let i = $(this).index();
    let print = $(points[i]).attr("value");
    $("#output").text(`${print} `);
  });

  // show Thank You and hide Rating
  $("form").submit(function (e) {
    e.preventDefault();
    $(".rating").hide();
    $(".success").show().animate({
      opacity: "1",
    });
    return;
  });
});
