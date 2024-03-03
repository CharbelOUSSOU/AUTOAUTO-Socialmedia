const shareButtons = document.querySelectorAll(".tile-share-button");
console.log(shareButtons);

async function copyText(e) {
  //prevent button going to the site
  e.preventDefault();
  const link = this.getAttribute("link");
  console.log(link);
  try {
    await navigator.clipboard.writeText(link);
    alert("Voulez vous copier ce lien?" + link);
  } catch (err) {
    console.error(err);
  }
}

shareButtons.forEach((shareButton) =>
  shareButton.addEventListener("click", copyText)
);
