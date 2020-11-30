$(".titlePopup").click(() => {
  $(".pupTraingBigWrap").removeClass("pupHide");
  $(".pupTraingBigWrap").addClass("pupShow");
});
// HIDE PUP WHEN THE CROSS CLICK:
$("#pupTraingClosePup").click(() => {
  $(".pupTraingBigWrap").removeClass("pupShow");
  $(".pupTraingBigWrap").addClass("pupHide");
});
// CLOSE PUP WHEN "ESC" PUSHED:
$(document).keyup(function (e) {
  if (e.key === "Escape") {
    // `27`
    $(".pupTraingBigWrap").removeClass("pupShow");
    $(".pupTraingBigWrap").addClass("pupHide");
  }
});
// LIFT PLACEHOLDER UP WHEN FOCUS:
const mainPupInput = $(".pupTraing__input");

mainPupInput.focus(function () {
  const $this = $(this);
  const mainPupCaption = $this.parent().find(".mainPup__input-caption");
  mainPupCaption.addClass("mainPup__input-caption--show");

  mainPupInput.blur(() => {
    if ($this.val() === "") {
      mainPupCaption.removeClass("mainPup__input-caption--show");
    }
  });
});

// document
//   .querySelector("#pupTraing_iPhone")
//   .addEventListener("keypress", (e) => {
//     if (
//       (e.code.match(/(Digit)|(Numpad)/i) === null &&
//         e.code.match("Backspace") === null) ||
//       e.target.value.length > 11
//     ) {
//       e.preventDefault();
//     }
//   });
