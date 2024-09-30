let logo = document.querySelector("header .logo");
let mode = document.querySelector(".mode");
let layout = document.querySelector(".layout");
let useBtn = document.querySelector(".layout .btn");
let leaveBtn = document.querySelector(".project .leave");
let leavePopup = document.querySelector(".leave-popup");
let leaveBtnAccept = document.querySelector(".leave-popup .btn .accept");
let leaveBtnNo = document.querySelector(".leave-popup .btn .no");
let filterBtn = document.querySelector(".filter");
let filterOptions = document.querySelector(".filter-options");
let filterOptionsPs = document.querySelectorAll(".filter-options p");
let addForm = document.querySelector(".add-form");
let addbtn = document.querySelector(".addUsers");
let addUserBtn = document.querySelector(".add-user-btn");
let boxsContainer = document.querySelector(".boxs-container");
let deleteAll = document.querySelector(".project .delete-all");
let boxsContainerBox;
setInterval(() => {
  boxsContainerBox = document.querySelectorAll(".boxs-container .box");
  if (boxsContainer.textContent == "") {
    deleteAll.classList.add("hidden");
  } else {
    deleteAll.classList.remove("hidden");
  }
}, 100);
let addNameInput = document.querySelector(".nameInput");
let addTasmea3Input = document.querySelector(".tasmea3Input");
let addElshea5Input = document.querySelector(".elshea5Input");
let addGozaInput = document.querySelector(".gozaInput");
let addHodorInput = document.querySelector(".hodorInput");
let addTmAltasmea3Input = document.querySelector(".tmAltasmea4Input");
let backBtn = document.querySelector(".add-form h1 button");
let inputSearch = document.querySelector(".features-bar .search input");

let usersArr = [];
let newObj = {};

getMode();
getData();
getUse();
addBoxstoPage();

function getUse() {
  let value = localStorage.getItem("use");
  if (value === "false") {
    layout.classList.add("none");
  } else {
    layout.classList.remove("none");
  }
}

logo.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

useBtn.onclick = function () {
  localStorage.setItem("use", false);
  getUse();
};

leaveBtnAccept.onclick = function () {
  leavePopup.classList.add("scale-0");
  localStorage.clear();
  localStorage.setItem("use", true);
  getUse();
};

leaveBtnNo.onclick = function () {
  leavePopup.classList.add("scale-0");
};

leaveBtn.onclick = function () {
  leavePopup.classList.remove("scale-0");
  addForm.classList.add("scale-x-0");
};

mode.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-mode");
  mode.textContent = "";
  let span = document.createElement("span");
  let i = document.createElement("img");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
    i.src = "./sun-svgrepo-com.svg";
    span.textContent = "الوضع الفاتح";
  } else {
    localStorage.setItem("mode", "light");
    span.textContent = "الوضع الغامق";
    i.src = "./moon-waning-cresent-svgrepo-com.svg";
  }
  mode.appendChild(i);
  mode.appendChild(span);
});

filterBtn.onclick = function () {
  filterOptions.classList.toggle("scaleY-full");
  boxsContainer.classList.toggle("p-100px");
};

filterOptionsPs.forEach((p) => {
  p.onclick = function () {
    filterOptions.classList.remove("scaleY-full");
    boxsContainer.classList.remove("p-100px");
    if (p.dataset.goza == "goza-first") {
      boxsContainerBox.forEach((box) => {
        box.classList.add("hidden");
      });
      for (let i = 1; i < 11; i++) {
        if (document.querySelector(`.boxs-container .box.goza-${i}`) != null) {
          document
            .querySelectorAll(`.boxs-container .box.goza-${i}`)
            .forEach((box) => {
              box.classList.remove("hidden");
            });
        }
      }
    } else if (p.dataset.goza == "goza-second") {
      boxsContainerBox.forEach((box) => {
        box.classList.add("hidden");
      });
      for (let i = 11; i < 21; i++) {
        if (document.querySelector(`.boxs-container .box.goza-${i}`) != null) {
          document
            .querySelectorAll(`.boxs-container .box.goza-${i}`)
            .forEach((box) => {
              box.classList.remove("hidden");
            });
        }
      }
    } else if (p.dataset.goza == "goza-third") {
      boxsContainerBox.forEach((box) => {
        box.classList.add("hidden");
      });
      for (let i = 21; i < 31; i++) {
        if (document.querySelector(`.boxs-container .box.goza-${i}`) != null) {
          document
            .querySelectorAll(`.boxs-container .box.goza-${i}`)
            .forEach((box) => {
              box.classList.remove("hidden");
            });
        }
      }
    } else if (p.dataset.goza == "goza-all") {
      boxsContainerBox.forEach((box) => {
        box.classList.remove("hidden");
      });
    }
  };
});

addbtn.onclick = function () {
  addForm.classList.remove("scale-x-0");
};

backBtn.onclick = function () {
  addForm.classList.add("scale-x-0");
};

addUserBtn.addEventListener("click", () => {
  if (addNameInput.value == "") {
    addNameInput.classList.add("border-red");
    addNameInput.classList.add("border");
  }
  if (addTasmea3Input.value == "") {
    addTasmea3Input.classList.add("border-red");
    addTasmea3Input.classList.add("border");
  }
  if (addTmAltasmea3Input.value == "") {
    addTmAltasmea3Input.classList.add("border-red");
    addTmAltasmea3Input.classList.add("border");
  }
  if (addHodorInput.value == "") {
    addHodorInput.classList.add("border-red");
    addHodorInput.classList.add("border");
  }
  if (addElshea5Input.value == "") {
    addElshea5Input.classList.add("border-red");
    addElshea5Input.classList.add("border");
  }
  if (addGozaInput.value == "") {
    addGozaInput.classList.add("border-red");
    addGozaInput.classList.add("border");
  }
  if (
    addNameInput.value != "" &&
    addElshea5Input.value != "" &&
    addTasmea3Input.value != "" &&
    addGozaInput.value != "" &&
    addHodorInput.value != "" &&
    addTmAltasmea3Input.value != ""
  ) {
    addForm.classList.add("scale-x-0");
    let newObj = {
      name: addNameInput.value,
      goza: addGozaInput.value,
      elShea5: addElshea5Input.value,
      altasme3: addTasmea3Input.value,
      tmAltasme3: addTmAltasmea3Input.value,
      hodor: addHodorInput.value,
    };
    usersArr.push(newObj);
    boxsContainer.textContent = "";
    addBoxstoPage();
    addNameInput.classList.remove("border-red");
    addNameInput.classList.remove("border");
    addTasmea3Input.classList.remove("border-red");
    addTasmea3Input.classList.remove("border");
    addElshea5Input.classList.remove("border-red");
    addElshea5Input.classList.remove("border");
    addGozaInput.classList.remove("border-red");
    addGozaInput.classList.remove("border");
    addTmAltasmea3Input.classList.remove("border-red");
    addTmAltasmea3Input.classList.remove("border");
    addHodorInput.classList.remove("border-red");
    addHodorInput.classList.remove("border");
    addNameInput.value = "";
    addElshea5Input.value = "";
    addTasmea3Input.value = "";
    addGozaInput.value = "";
    addHodorInput.value = "";
    addTmAltasmea3Input.value = "";
    let josnData = JSON.stringify(usersArr);
    localStorage.setItem("usersArr", josnData);
  }
});

function getMode() {
  if (localStorage.getItem("mode")) {
    let modeDark = localStorage.getItem("mode");
    if (modeDark == "dark") {
      document.body.classList.add("dark-mode");
      mode.textContent = "";
      let span = document.createElement("span");
      let i = document.createElement("img");
      i.src = "./sun-svgrepo-com.svg";
      span.textContent = "الوضع الفاتح";
      mode.appendChild(i);
      mode.appendChild(span);
    } else if (modeDark == "light") {
      document.body.classList.remove("dark-mode");
      mode.textContent = "";
      let span = document.createElement("span");
      let i = document.createElement("img");
      span.textContent = "الوضع الغامق";
      i.src = "./moon-waning-cresent-svgrepo-com.svg";
      mode.appendChild(i);
      mode.appendChild(span);
    }
  }
}

function addBoxstoPage() {
  usersArr.forEach((obj) => {
    if (obj.name != "") {
      let mainBox = document.createElement("div");
      mainBox.className = `box goza-${obj.goza}`;
      mainBox.setAttribute("data-name", obj.name);
      let firstDiv = document.createElement("div");
      let nameP = document.createElement("p");
      let nameInput = document.createElement("input");
      nameInput.value = obj.name;
      nameP.appendChild(nameInput);
      let nameSpan = document.createElement("span");
      nameSpan.textContent = ":الأسم";
      nameP.appendChild(nameSpan);
      firstDiv.appendChild(nameP);
      let gozaP = document.createElement("p");
      let gozaInput = document.createElement("input");
      gozaInput.value = obj.goza;
      gozaP.appendChild(gozaInput);
      let gozaSpan = document.createElement("span");
      gozaSpan.textContent = ":الجزء";
      gozaP.appendChild(gozaSpan);
      firstDiv.appendChild(gozaP);
      let secondDiv = document.createElement("div");
      let elShea5P = document.createElement("p");
      let elShea5Input = document.createElement("input");
      elShea5Input.value = obj.elShea5;
      elShea5P.appendChild(elShea5Input);
      let elShea5Span = document.createElement("span");
      elShea5Span.textContent = ":الشيخ";
      elShea5P.appendChild(elShea5Span);
      secondDiv.appendChild(elShea5P);
      let altasme3P = document.createElement("p");
      let altasme3Input = document.createElement("input");
      altasme3Input.value = obj.altasme3;
      altasme3P.appendChild(altasme3Input);
      let altasme3Span = document.createElement("span");
      altasme3Span.textContent = ":التسميع";
      altasme3P.appendChild(altasme3Span);
      secondDiv.appendChild(altasme3P);
      let editBtn = document.createElement("button");
      let editI = document.createElement("img");
      editI.src = "./pen-to-square-svgrepo-com.svg";
      editBtn.appendChild(editI);
      mainBox.appendChild(firstDiv);
      mainBox.appendChild(secondDiv);
      mainBox.appendChild(editBtn);
      let deleteBtn = document.createElement("button");
      deleteBtn.className = "delete";
      let deleteI = document.createElement("img");
      deleteI.src = "./trash-alt-svgrepo-com.svg";
      deleteBtn.appendChild(deleteI);
      mainBox.appendChild(deleteBtn);
      // Form
      let theform = document.createElement("div");
      theform.className = "the-form scale-0";
      let h1 = document.createElement("h1");
      let img = document.createElement("img");
      img.src = "./left-return-arrow-svgrepo-com.svg";
      h1.appendChild(img);
      h1.append("التفاصيل و التعديل");
      let container = document.createElement("div");
      container.className = "container";
      let theFirstDiv = document.createElement("div");
      let theNameInput = document.createElement("input");
      theNameInput.className = "the-name-input";
      theNameInput.placeholder = "أسم الحافظ";
      theNameInput.value = obj.name;
      theFirstDiv.append("أسم الحافظ:");
      theFirstDiv.appendChild(theNameInput);
      let theSecondDiv = document.createElement("div");
      let thegozaInput = document.createElement("input");
      thegozaInput.value = obj.goza;
      thegozaInput.className = "the-goza-input";
      thegozaInput.placeholder = "الجزء الذي هو فيه";
      theSecondDiv.append("الجزء الذي هو فيه:");
      theSecondDiv.appendChild(thegozaInput);
      let theThirdDiv = document.createElement("div");
      let theElshea5Input = document.createElement("input");
      theElshea5Input.value = obj.elShea5;
      theElshea5Input.className = "the-Elshea5-input";
      theElshea5Input.placeholder = "الشيخ الذي هو معه";
      theThirdDiv.append("الشيخ الذي هو معه:");
      theThirdDiv.appendChild(theElshea5Input);
      let theForthDiv = document.createElement("div");
      let theAltasmea3Input = document.createElement("input");
      theAltasmea3Input.value = obj.altasme3;
      theAltasmea3Input.className = "the-Altasmea3-input";
      theAltasmea3Input.placeholder = "التسميع المرة اللي جاية";
      theForthDiv.append("التسميع المرة اللي جاية:");
      theForthDiv.appendChild(theAltasmea3Input);
      let theFifthDiv = document.createElement("div");
      let theTmAltasmea3Input = document.createElement("input");
      theTmAltasmea3Input.value = obj.tmAltasme3;
      theTmAltasmea3Input.className = "the-Tm-Altasmea3-input";
      theTmAltasmea3Input.placeholder = "التسميع الذي تم";
      theFifthDiv.append("التسميع الذي تم:");
      theFifthDiv.appendChild(theTmAltasmea3Input);
      let theSixDiv = document.createElement("div");
      let theAlhodorInput = document.createElement("input");
      theAlhodorInput.value = obj.hodor;
      theAlhodorInput.className = "the-Alhodor-input";
      theAlhodorInput.placeholder = "عدد مرات الحضور";
      theSixDiv.append("عدد مرات الحضور:");
      theSixDiv.appendChild(theAlhodorInput);
      container.appendChild(theFirstDiv);
      container.appendChild(theSecondDiv);
      container.appendChild(theThirdDiv);
      container.appendChild(theForthDiv);
      container.appendChild(theFifthDiv);
      container.appendChild(theSixDiv);
      let saveBtn = document.createElement("button");
      saveBtn.textContent = "حفظ";
      let h1Cont = document.createElement("div");
      h1Cont.className = "container cont";
      let btnCont = document.createElement("div");
      btnCont.className = "container cont";
      h1Cont.appendChild(h1);
      btnCont.appendChild(saveBtn);
      theform.appendChild(h1Cont);
      theform.appendChild(container);
      theform.appendChild(btnCont);
      img.addEventListener("click", () => {
        theform.classList.add("scale-0");
      });
      // Form
      editBtn.addEventListener("click", () => {
        theform.classList.remove("scale-0");
      });
      let addObj;
      theNameInput.addEventListener("input", (e) => {
        addObj = { ...obj, name: e.target.value };
        obj.name = e.target.value;
      });
      thegozaInput.addEventListener("input", (e) => {
        addObj = { ...obj, goza: e.target.value };
        obj.goza = e.target.value;
      });
      theAltasmea3Input.addEventListener("input", (e) => {
        addObj = { ...obj, altasme3: e.target.value };
        obj.altasme3 = e.target.value;
      });
      theElshea5Input.addEventListener("input", (e) => {
        addObj = { ...obj, elShea5: e.target.value };
        obj.elShea5 = e.target.value;
      });
      theTmAltasmea3Input.addEventListener("input", (e) => {
        addObj = { ...obj, tmAltasme3: e.target.value };
        obj.tmAltasme3 = e.target.value;
      });
      theAlhodorInput.addEventListener("input", (e) => {
        addObj = { ...obj, hodor: e.target.value };
        obj.hodor = e.target.value;
      });
      saveBtn.addEventListener("click", () => {
        if (theNameInput.value == "") {
          theNameInput.classList.add("border-red");
          theNameInput.classList.add("border");
        }
        if (theAltasmea3Input.value == "") {
          theAltasmea3Input.classList.add("border-red");
          theAltasmea3Input.classList.add("border");
        }
        if (theElshea5Input.value == "") {
          theElshea5Input.classList.add("border-red");
          theElshea5Input.classList.add("border");
        }
        if (hodorInput.value == "") {
          hodorInput.classList.add("border-red");
          hodorInput.classList.add("border");
        }
        if (tmAltasme3Input.value == "") {
          tmAltasme3Input.classList.add("border-red");
          tmAltasme3Input.classList.add("border");
        }
        if (thegozaInput.value == "") {
          thegozaInput.classList.add("border-red");
          thegozaInput.classList.add("border");
        }
        if (
          theNameInput.value != "" &&
          theElshea5Input.value != "" &&
          theAltasmea3Input.value != "" &&
          thegozaInput.value != "" &&
          tmAltasme3Input.value != "" &&
          hodorInput.value != ""
        ) {
          theform.classList.add("scale-0");
          theNameInput.classList.remove("border-red");
          theNameInput.classList.remove("border");
          theAltasmea3Input.classList.remove("border-red");
          theAltasmea3Input.classList.remove("border");
          theElshea5Input.classList.remove("border-red");
          theElshea5Input.classList.remove("border");
          thegozaInput.classList.remove("border-red");
          thegozaInput.classList.remove("border");
          hodorInput.classList.remove("border-red");
          hodorInput.classList.remove("border");
          tmAltasme3Input.classList.remove("border-red");
          tmAltasme3Input.classList.remove("border");
          let josnData = JSON.stringify(usersArr);
          localStorage.setItem("usersArr", josnData);
          nameInput.value = obj.name;
          altasme3Input.value = obj.altasme3;
          elShea5Input.value = obj.elShea5;
          gozaInput.value = obj.goza;
          hodorInput.value = obj.hodor;
          tmAltasme3Input.value = obj.tmAltasme3;
        }
      });
      deleteBtn.addEventListener("click", () => {
        obj.name = "";
        obj.goza = "";
        obj.elShea5 = "";
        obj.altasme3 = "";
        obj.tmAltasme3 = "";
        obj.hodor = "";
        let josnData = JSON.stringify(usersArr);
        localStorage.setItem("usersArr", josnData);
        mainBox.remove();
      });
      boxsContainer.appendChild(mainBox);
      boxsContainer.appendChild(theform);
    }
  });
}

function getData() {
  if (localStorage.getItem("usersArr")) {
    let jsData = JSON.parse(localStorage.getItem("usersArr"));
    usersArr = jsData;
  }
}

inputSearch.addEventListener("input", (e) => {
  let num = 0;
  let chooseNum = 0;
  boxsContainerBox.forEach((box) => {
    box.classList.add("hidden");
    num++;
  });
  boxsContainerBox.forEach((box) => {
    let name = box.dataset.name;
    let splitValue = e.target.value.split("");
    splitValue.forEach((letterValue) => {
      let letters = name.split("").map((letter) => {
        if (letterValue == letter) {
          box.classList.remove("hidden");
        }
      });
    });
  });
  setTimeout(() => {
    boxsContainerBox.forEach((box) => {
      if (box.classList.contains("hidden")) {
        chooseNum++;
        if (chooseNum == num) {
          // Nothing
        }
      }
      if (e.target.value == "") {
        boxsContainerBox.forEach((box) => {
          box.classList.remove("hidden");
        });
      }
      if (box.dataset.name == e.target.value) {
        box.style.order = 0;
      } else {
        box.style.order = 1;
      }
    });
  }, 100);
});

deleteAll.addEventListener("click", () => {
  localStorage.setItem("usersArr", []);
  usersArr = [];
  boxsContainer.textContent = "";
});
