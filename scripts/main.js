const classesToAdd = document.querySelector(".classes-to-add");
const classesToRemove = document.querySelector(".classes-to-remove");
const currentElement = document.querySelector(".current");
const ListContainer = document.querySelector(".classes-list").lastElementChild;

classesToAdd.addEventListener("blur", () => {
  // ListContainer.removeChild("span")
  if (classesToAdd.value.trim().length !== 0) {
    let toBeAdded = classesToAdd.value.trim().toLowerCase().split(" ");
    toBeAdded.forEach(ele => currentElement.classList.add(ele));
    const currentClasses = currentElement.classList.value.split(" ").sort();
    const spans = document.querySelectorAll("span");
    spans.forEach(ele => ele.remove())
    currentClasses.forEach(ele => {
      let addedSpan = document.createElement("span");
        addedSpan.className = ele;
      addedSpan.textContent = ele;
      ListContainer.append(addedSpan);
      classesToAdd.value = "";
    });
  }
});

classesToRemove.addEventListener("blur", () => {
  if(classesToRemove.value.trim().length !== 0) {
    toBeRemove = classesToRemove.value.trim().toLowerCase().split(" ");
    toBeRemove.forEach(ele => currentElement.classList.remove(ele));
    currentElement.classList.remove(toBeRemove);
    const spans = document.querySelectorAll("span");
    spans.forEach(ele => {
      if(!currentElement.classList.contains(ele.className)) {
        ele.remove();
      }
    });
    classesToRemove.value = "";
  }
});
