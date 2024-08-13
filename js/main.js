const nextBtn = document.getElementById("btn2");
const previousBtn = document.getElementById("btn1");
const prevArrow = document.getElementById("arrow1");
const nextArrow = document.getElementById("arrow2");
const bar = document.querySelectorAll(".bar div");
let slideNumber = 1;

nextBtn.onmouseover = (e) => {
  if (slideNumber !== 5)
    e.target.style.backgroundColor = `rgb(26 186 170 / 70%)`;
};
nextBtn.onmouseout = (e) => {
  if (slideNumber === 5) {
    e.target.style.backgroundColor = `rgb(26 186 170 / 50%)`;
  } else {
    e.target.style.backgroundColor = `rgb(26 186 170)`;
  }
};
previousBtn.onmouseover = (e) => {
  if (slideNumber !== 1)
    e.target.style.backgroundColor = `rgb(26 186 170 / 70%)`;
};
previousBtn.onmouseout = (e) => {
  if (slideNumber === 1) {
    e.target.style.backgroundColor = `rgb(26 186 170 / 50%)`;
  } else {
    e.target.style.backgroundColor = `rgb(26 186 170)`;
  }
};
bar.forEach((e) => {
  e.addEventListener("click", (l) => {
    let active = document.querySelector(`.images img[active]`);
    active.removeAttribute("active");
    active.style.display = "none";
    let next = document.querySelector(
      `#images .imgFrame img:nth-of-type(${Number(l.target.innerHTML)})`
    );
    let activeNode = document.createAttribute("active");
    next.style.display = "block";
    next.setAttributeNode(activeNode);
    document.getElementById(
      `point${slideNumber}`
    ).style.backgroundColor = `#ededed`;
    l.target.style.backgroundColor = `rgb(26 186 170)`;
    slideNumber = Number(l.target.innerHTML);
    let slideof = document.getElementById("slideof");
    slideof.innerHTML = `Slide #${slideNumber} of 5`;
    if (slideNumber === 5) {
      nextBtn.style.backgroundColor = "rgb(26 186 170 / 50%)";
    } else {
      nextBtn.style.backgroundColor = "rgb(26 186 170)";
    }
    if (slideNumber === 1) {
      previousBtn.style.backgroundColor = "rgb(26 186 170 / 50%)";
    } else {
      previousBtn.style.backgroundColor = "rgb(26 186 170)";
    }
  });
});
nextBtn.addEventListener("click", (e) => {
  let active = document.querySelector(`.images img[active]`);
  if (active !== document.querySelector("#images .imgFrame img:last-of-type")) {
    let next = document.querySelector("#images .imgFrame img[active] + img");
    active.removeAttribute("active");
    active.style.display = "none";
    let activeNode = document.createAttribute("active");
    next.style.display = "block";
    next.setAttributeNode(activeNode);
    slideNumber++;
    let slideof = document.getElementById("slideof");
    slideof.innerHTML = `Slide #${slideNumber} of 5`;
    previousBtn.style.cssText = `background-color: rgb(26 186 170 )`;
    if (slideNumber === 5) {
      e.target.style.backgroundColor = `rgb(26 186 170 / 50%)`;
    }
    let point = document.querySelector(`.bar div:nth-child(${slideNumber})`);
    point.style.backgroundColor = `rgb(26, 186, 170)`;
    let prevPoint = point.previousElementSibling;
    prevPoint.style.backgroundColor = `#ededed`;
  }
});
previousBtn.addEventListener("click", (e) => {
  let active = document.querySelector(`.images img[active]`);
  if (active !== document.querySelector("#images img:nth-of-type(1)")) {
    let next = active.previousElementSibling;
    active.removeAttribute("active");
    active.style.display = "none";
    let activeNode = document.createAttribute("active");
    next.style.display = "block";
    next.setAttributeNode(activeNode);
    slideNumber--;
    let slideof = document.getElementById("slideof");
    slideof.innerHTML = `Slide #${slideNumber} of 5`;
    if (slideNumber === 4) {
      nextBtn.style.cssText = `background-color: rgb(26 186 170 )`;
    }
    if (slideNumber === 1) {
      e.target.style.backgroundColor = `rgb(26 186 170 / 50%)`;
    }
    let point = document.querySelector(`.bar div:nth-child(${slideNumber})`);
    point.style.backgroundColor = `rgb(26, 186, 170)`;
    let prevPoint = point.nextElementSibling;
    prevPoint.style.backgroundColor = `#ededed`;
  }
});
nextArrow.addEventListener("click", () => {
  let active = document.querySelector(`.images img[active]`);
  if (active !== document.querySelector("#images .imgFrame img:last-of-type")) {
    let next = document.querySelector("#images .imgFrame img[active] + img");
    active.removeAttribute("active");
    active.style.display = "none";
    let activeNode = document.createAttribute("active");
    next.style.display = "block";
    next.setAttributeNode(activeNode);
    slideNumber++;
    let slideof = document.getElementById("slideof");
    slideof.innerHTML = `Slide #${slideNumber} of 5`;
    previousBtn.style.cssText = `background-color: rgb(26 186 170 )`;
    if (slideNumber === 5) {
      nextBtn.style.backgroundColor = `rgb(26 186 170 / 50%)`;
    }
    let point = document.querySelector(`.bar div:nth-child(${slideNumber})`);
    point.style.backgroundColor = `rgb(26, 186, 170)`;
    let prevPoint = point.previousElementSibling;
    prevPoint.style.backgroundColor = `#ededed`;
  }
});
prevArrow.addEventListener("click", () => {
  let active = document.querySelector(`.images img[active]`);
  if (active !== document.querySelector("#images img:first-of-type")) {
    let next = active.previousElementSibling;
    active.removeAttribute("active");
    active.style.display = "none";
    let activeNode = document.createAttribute("active");
    next.style.display = "block";
    next.setAttributeNode(activeNode);
    slideNumber--;
    let slideof = document.getElementById("slideof");
    slideof.innerHTML = `Slide #${slideNumber} of 5`;
    if (slideNumber === 4) {
      nextBtn.style.cssText = `background-color: rgb(26 186 170 )`;
    }
    if (slideNumber === 1) {
      previousBtn.style.backgroundColor = `rgb(26 186 170 / 50%)`;
    }
    let point = document.querySelector(`.bar div:nth-child(${slideNumber})`);
    point.style.backgroundColor = `rgb(26, 186, 170)`;
    let prevPoint = point.nextElementSibling;
    prevPoint.style.backgroundColor = `#ededed`;
  }
});
