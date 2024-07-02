let menuWidth = $(".inner-menu").outerWidth(true);
$(".left-menu").animate({ left: -1 * menuWidth }, 0);
$(".open-menu").on("click", function () {
  $(".left-menu").animate({ left: 0 }, 500);
});
$(".close-menu").on("click", function () {
  $(".left-menu").animate({ left: -1 * menuWidth }, 500);
});

$(".slide-item.close div").slideUp(0);

$(".slide-item h2").on("click", function () {
  let slideItem = $(this).parent();
  if (slideItem.hasClass("open")) {
    slideItem.removeClass("open").addClass("close");
    slideItem.find("div").slideUp(500);
  } else {
    $(".slide-item").removeClass("open").addClass("close");
    $(".slide-item div").slideUp(500);
    slideItem.removeClass("close").addClass("open");
    slideItem.find("div").slideDown(500);
  }
});

window.onload = function () {
  countDownToTime("25 october 2024");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  let timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}

let maxLength = 100;
$("textarea").on("keyup", function () {
  let length = $(this).val().length;
  let AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#chars").text("your available character finished");
  } else {
    $("#chars").text(AmountLeft);
  }
});
