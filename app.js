const arrows = document.querySelectorAll(".arrow");
const itemLists = document.querySelectorAll(".item-list");

arrows.forEach((arrow, i) => {
  const itemNumber = itemLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      itemLists[i].style.transform = `translateX(${
        itemLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      itemLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});
