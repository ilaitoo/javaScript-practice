const nextBtn = document.getElementById("btn2");
const previousBtn = document.getElementById("btn1");
const prevArrow = document.getElementById("arrow1");
const nextArrow = document.getElementById("arrow2");
const bar = document.querySelectorAll(".bar div");
let activeNode = document.createAttribute("active");
let slideNumber = 1;
// buttons hover
nextBtn.onmouseover = (e) => {
  if (slideNumber !== 5) {
    nextBtn.classList.add("hover");
  }
};
nextBtn.onmouseout = (e) => {
  if (slideNumber !== 5) {
    nextBtn.classList.remove("hover");
  }
};
previousBtn.onmouseover = (e) => {
  if (slideNumber !== 1) previousBtn.classList.add("hover");
};
previousBtn.onmouseout = (e) => {
  if (slideNumber !== 1) previousBtn.classList.remove("hover");
};
// ----

// bar setting
bar.forEach((e) => {
  e.addEventListener("click", (l) => {
    let active = document.querySelector(`.images img[active]`);
    active.removeAttribute("active");
    let next = document.querySelector(
      `.imgFrame img:nth-of-type(${Number(l.target.innerHTML)})`
    );
    next.setAttributeNode(activeNode.cloneNode());
    document.getElementById(`point${slideNumber}`).removeAttribute("active");
    l.target.setAttributeNode(activeNode.cloneNode());
    slideNumber = Number(l.target.innerHTML);
    document.getElementById("slideof").innerHTML = `Slide #${slideNumber} of 5`;
    if (slideNumber === 5) {
      nextBtn.classList.add("no-more");
    } else {
      nextBtn.classList.remove("no-more");
    }
    if (slideNumber === 1) {
      previousBtn.classList.add("no-more");
    } else {
      previousBtn.classList.remove("no-more");
    }
  });
});
// ---------
nextBtn.addEventListener("click", (e) => {
  let active = document.querySelector(`.images img[active]`);
  if (active !== document.querySelector("#images .imgFrame img:last-of-type")) {
    active.removeAttribute("active");
    active.nextElementSibling.setAttributeNode(activeNode.cloneNode());
    let point = document.getElementById(`point${slideNumber}`);
    point.removeAttribute("active");
    point.nextElementSibling.setAttributeNode(activeNode.cloneNode());
    slideNumber++;
    document.getElementById("slideof").innerHTML = `Slide #${slideNumber} of 5`;
    if (slideNumber !== 1) {
      previousBtn.classList.remove("no-more");
    }
    if (slideNumber === 5) {
      nextBtn.classList.remove("hover");
      nextBtn.classList.add("no-more");
    }
  }
});
previousBtn.addEventListener("click", (e) => {
  let active = document.querySelector(`.images img[active]`);
  if (active !== document.querySelector("#images img:nth-of-type(1)")) {
    active.removeAttribute("active");
    active.previousElementSibling.setAttributeNode(activeNode.cloneNode());
    let point = document.getElementById(`point${slideNumber}`);
    point.removeAttribute("active");
    point.previousElementSibling.setAttributeNode(activeNode.cloneNode());
    slideNumber--;
    document.getElementById("slideof").innerHTML = `Slide #${slideNumber} of 5`;
    if (slideNumber === 4) {
      nextBtn.classList.remove("no-more");
    }
    if (slideNumber === 1) {
      previousBtn.classList.remove("hover");
      previousBtn.classList.add("no-more");
    }
  }
});
nextArrow.addEventListener("click", () => {
  let active = document.querySelector(`.images img[active]`);
  if (active !== document.querySelector("#images .imgFrame img:last-of-type")) {
    active.removeAttribute("active");
    active.nextElementSibling.setAttributeNode(activeNode.cloneNode());
    let point = document.getElementById(`point${slideNumber}`);
    point.removeAttribute("active");
    point.nextElementSibling.setAttributeNode(activeNode.cloneNode());
    slideNumber++;
    document.getElementById("slideof").innerHTML = `Slide #${slideNumber} of 5`;
    if (slideNumber !== 1) {
      previousBtn.classList.remove("no-more");
    }
    if (slideNumber === 5) {
      nextBtn.classList.add("no-more");
    }
  }
});
prevArrow.addEventListener("click", () => {
  let active = document.querySelector(`.images img[active]`);
  if (active !== document.querySelector("#images img:first-of-type")) {
    active.removeAttribute("active");
    active.previousElementSibling.setAttributeNode(activeNode.cloneNode());
    let point = document.getElementById(`point${slideNumber}`);
    point.removeAttribute("active");
    point.previousElementSibling.setAttributeNode(activeNode.cloneNode());
    slideNumber--;
    document.getElementById("slideof").innerHTML = `Slide #${slideNumber} of 5`;
    if (slideNumber === 4) {
      nextBtn.classList.remove("no-more");
    }
    if (slideNumber === 1) {
      previousBtn.classList.add("no-more");
    }
  }
});
