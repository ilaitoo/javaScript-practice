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
    // nextBtn.classList.add("no-more");
  }
};
previousBtn.onmouseover = (e) => {
  if (slideNumber !== 1) previousBtn.classList.add("hover");
};
previousBtn.onmouseout = (e) => {
  if (slideNumber !== 1) previousBtn.classList.remove("hover");
  // previousBtn.classList.add("no-more");
  // else {
  //   // previousBtn.classList.remove("hover");
  // }
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
    // active.style.display = "none";
    // let activeNode = document.createAttribute("active");
    // next.style.display = "block";
    // l.target.style.backgroundColor = `rgb(26 186 170)`;
    // let slideof = document.getElementById("slideof");
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
    // let activeNode = document.createAttribute("active");
    active.nextElementSibling.setAttributeNode(activeNode.cloneNode());
    let point = document.getElementById(`point${slideNumber}`);
    point.removeAttribute("active");
    point.nextElementSibling.setAttributeNode(activeNode.cloneNode());
    slideNumber++;
    // let next = document.querySelector("#images .imgFrame img[active] + img");
    // let next = active.nextElementSibling;
    // active.style.display = "none";
    // next.style.display = "block";
    // let slideof = document.getElementById("slideof");
    document.getElementById("slideof").innerHTML = `Slide #${slideNumber} of 5`;
    if (slideNumber !== 1) {
      previousBtn.classList.remove("no-more");
    }
    if (slideNumber === 5) {
      nextBtn.classList.remove("hover");
      nextBtn.classList.add("no-more");
    }
    // let point = document.querySelector(`.bar div[active])`);
    // point.style.backgroundColor = `rgb(26, 186, 170)`;
    // let prevPoint = point.previousElementSibling;
    // prevPoint.style.backgroundColor = `#ededed`;
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
    // let next = active.previousElementSibling;
    // let activeNode = document.createAttribute("active");
    // active.style.display = "none";
    // next.style.display = "block";
    // let slideof = document.getElementById("slideof");
    document.getElementById("slideof").innerHTML = `Slide #${slideNumber} of 5`;
    if (slideNumber === 4) {
      nextBtn.classList.remove("no-more");
    }
    if (slideNumber === 1) {
      previousBtn.classList.remove("hover");
      previousBtn.classList.add("no-more");
    }
    // let point = document.querySelector(`.bar div:nth-child(${slideNumber})`);
    // point.style.backgroundColor = `rgb(26, 186, 170)`;
    // let prevPoint = point.nextElementSibling;
    // prevPoint.style.backgroundColor = `#ededed`;
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
    // let next = active.nextElementSibling;
    // let next = document.querySelector("#images .imgFrame img[active] + img");
    // active.style.display = "none";
    // let activeNode = document.createAttribute("active");
    // next.style.display = "block";
    // let slideof = document.getElementById("slideof");
    document.getElementById("slideof").innerHTML = `Slide #${slideNumber} of 5`;
    if (slideNumber !== 1) {
      previousBtn.classList.remove("no-more");
    }
    if (slideNumber === 5) {
      nextBtn.classList.add("no-more");
    }
    // let point = document.querySelector(`.bar div:nth-child(${slideNumber})`);
    // point.style.backgroundColor = `rgb(26, 186, 170)`;
    // let prevPoint = point.previousElementSibling;
    // prevPoint.style.backgroundColor = `#ededed`;
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
    // let next = active.previousElementSibling;
    // active.style.display = "none";
    // let activeNode = document.createAttribute("active");
    // next.style.display = "block";
    // let slideof = document.getElementById("slideof");
    document.getElementById("slideof").innerHTML = `Slide #${slideNumber} of 5`;
    if (slideNumber === 4) {
      nextBtn.classList.remove("no-more");
    }
    if (slideNumber === 1) {
      previousBtn.classList.add("no-more");
    }
    // let point = document.querySelector(`.bar div:nth-child(${slideNumber})`);
    // point.style.backgroundColor = `rgb(26, 186, 170)`;
    // let prevPoint = point.nextElementSibling;
    // prevPoint.style.backgroundColor = `#ededed`;
  }
});
