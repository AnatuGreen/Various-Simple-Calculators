// Jquery:

// Click and double click events:

// toggle the  details paragraph and the details button text when button is clicked
$(".showHide").click(function () {
  $(this).siblings(".detail").toggle();
  $(this).text(
    $(this).text() == "Show Details" ? "Hide Details" : "Show Details"
  );
});

// $(".showHide").dblclick(() => {
//   alert("This shows or hides the Ps");
// });

//Mouse enter and leave events:

// $(".showHide").mouseenter(function () {
//   alert("Show or hide the Ps");
// });

// $(".showHide").mouseleave(() => {
//   alert("Are you sure you want to leave?");
// });

//On hover jquery

// $(".showHide").hover(
//   function () {
//     alert("Entered");
//   },
//   function () {
//     alert("Left");
//   }
// );

$("input").focus(function () {
  $(this).css("background-color", "#ffe");
});
$("input").blur(function () {
  $(this).css("background-color", "#fff");
});

//Jquery on:

// $(".showHide").on({
//   mouseenter: function () {
//     alert("Entered");
//   },
// });

$(".section").on({
  mouseenter: function () {
    $(this).css({
      background: "rgba(0, 0, 0, 0.7)",
      "-webkit-backdrop-filter": "blur(10px)",
      "backdrop-filter": "blur(10px)",
      color: "white",
    });
  },
  mouseleave: function () {
    $(this).css({
      background: "rgba(255, 255, 255, 0.7)",
      "-webkit-backdrop-filter": "blur(10px)",
      "backdrop-filter": "blur(10px)",
      color: "black",
    });
    $(".detail").css("display", "none");
    $(".showHide").text("Show Details");
  },
});

//Searching:
$(".topSearch").keyup(function () {
  let search = $(this).val(),
    count = 0;
  $(".section h2").each(function () {
    if ($(this).text().search(new RegExp(search, "i")) < 0) {
      $(this).parent().fadeOut();
    } else {
      $(this).parent().show();
      count++;
    }
  });
});
