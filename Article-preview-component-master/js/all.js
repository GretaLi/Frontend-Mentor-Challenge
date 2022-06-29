const btnShare = document.querySelector('[aria-controls="share"]');
const share = document.querySelector("#share");

btnShare.addEventListener("click", shareSocialMedia);

function shareSocialMedia(e) {
  let visibilty = share.getAttribute("data-visible");

  if (visibilty === "false") {
    btnShare.setAttribute("aria-expanded", true);
    share.setAttribute("data-visible", true);
  } else {
    btnShare.setAttribute("aria-expanded", false);
    share.setAttribute("data-visible", false);
  }
}
