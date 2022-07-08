/*------------------*/
/* Javascript Index */
/*------------------*/

// Home Page
//    Navigation
//    Bookmark btn
//    Back this project btn
//    Select Reward btn
//
// Selection Modal
//    Select Card
//    Data Display
//    --Number animation I
//    --Submit function
//    Submit success
//    Input feild focus style
//
// Success Modal
//    Close btn
//
// Animation (jQuery)
//    Number animation II
//    Data card pop & return

/*------------------*/
/* Home Page        */
/*------------------*/

// Navigation

const nav = document.querySelector("#navbar");
const navToggle = document.querySelector("#navbarToggle");
const bgContainer = document.querySelector("#primaryHeader");

navToggle.addEventListener("click", function (e) {
  navToggle.setAttribute(
    "aria-expanded",
    navToggle.getAttribute("aria-expanded") == "false" ? true : false
  );
  nav.toggleAttribute("data-hidden");
  bgContainer.classList.toggle("bg-linear");

  //[UNSURE] when nav is open, close Selection modal and Sucess modal
  closeSelecModal();
});

//Summary | Bookmark btn
const bookmarkBtn = document.querySelector("#bookmarkBtn");
const bookmark = document.querySelector(".prod-summary--bookmark");
const bookmarkText = bookmark.childNodes[3];

bookmarkBtn.addEventListener("click", () => {
  let marked = bookmarkBtn.getAttribute("data-bookmark");

  if (marked === "false") {
    bookmarkBtn.setAttribute("data-bookmark", true);
    bookmarkBtn.classList.add("bookmark-marked");
    bookmark.classList.add("text-secondary");
    bookmarkText.innerHTML = "Bookmarked";
  } else {
    bookmarkBtn.setAttribute("data-bookmark", false);
    bookmarkBtn.classList.remove("bookmark-marked");
    bookmark.classList.remove("text-secondary");
    bookmarkText.innerHTML = "Bookmark";
  }
});

// Summary | Back this project btn

// when click on "Back this project" btn...
// 1. show selection modal
// 2. add "bg-shage" class on header

const backBtn = document.querySelector("#backBtn");
const selectModal = document.querySelector("#selectModal");

backBtn.addEventListener("click", (e) => {
  selectModal.style.display = "block";
  bgContainer.classList.add("bg-shade");
});

// Product plan | Select Reward btn

// when click on "Select Reward" btn...
// 1. show selection modal
// 2. add "bg-shage" class on header
// 3. select exact card by using selecCard funciton
const selectBtns = document.querySelectorAll("[role='selectBtn']");

selectBtns.forEach((btn) =>
  btn.addEventListener("click", function selectBtn(e) {
    let targetCardId = e.target.getAttribute("data-card");
    let targetCard = document.querySelector(`#${targetCardId}`);
    selectModal.style.display = "block";
    bgContainer.classList.add("bg-shade");
    selectCard(targetCard);
  })
);

/*------------------*/
/* Selection Modal  */
/*------------------*/

// Selection | Select Card 選擇卡片

// when click on unavailable card...
// no action

// when click on target card...
// 0. remove below 3 settings from all cards as default
// 1. add "selected" class on target card
// 2. check input radio on target card
// 3. expand pledge aria on target card

// when click on target input radio...
// 0. remove below 3 settings from all cards as default
// 1. add "selected" class on target card
// 2. check input radio on target card
// 3. expand pledge aria on target card

// Notes: HTML settings...
// for each Card
// data-role="selectCard" (use for manipulating card itself)
// aria-controls="" (use for manipulating pledge aria)
// data-controls="" (use for manipulating input radio)

// when click on close btn...
// 1. close selection modal
// 2. remove "bg-shade" class on header

selectModal.addEventListener("click", selectStyle, false);

function selectStyle(e) {
  // when click on unavailable card...
  if (e.target.classList.contains("unavailable")) {
    return;
  } else {
    // when click on target card...
    if (e.target.getAttribute("data-role") == "selectCard") {
      let targetCard = e.target;
      removeSelectCard();
      selectCard(targetCard);
    }

    // when click on target input radio...
    if (e.target.getAttribute("name") === "select") {
      let targetCardDataControls = e.target.getAttribute("id");
      let targetCard = document.querySelector(
        `[data-controls='${targetCardDataControls}']`
      );
      removeSelectCard();
      selectCard(targetCard);
    }

    // when click on close btn...
    if (e.target.getAttribute("id") === "selectCloseBtn") {
      selectModal.style.display = "none";
      bgContainer.classList.remove("bg-shade");
      removeSelectCard();
    }
  }
}

function removeSelectCard() {
  // 0. remove below 3 settings
  let cards = document.querySelectorAll("[data-role='selectCard']");
  cards.forEach((card) => card.classList.remove("selected"));

  let radios = document.querySelectorAll("[name='select']");
  radios.forEach((radio) => (radio.checked = false));

  let pledges = document.querySelectorAll("[data-role='selectPledge']");
  pledges.forEach((pledge) => pledge.setAttribute("data-visible", false));
}

function selectCard(targetCard) {
  // 1. add "selected" class
  targetCard.classList.add("selected");

  // 2. check input radio
  let targetRaidoId = targetCard.getAttribute("data-controls");
  let targetRaido = document.querySelector([`#${targetRaidoId}`]);
  targetRaido.checked = true;

  // 3. expand pledge aria
  let targetPledgeId = targetCard.getAttribute("aria-controls");
  let targetPledge = document.querySelector([`#${targetPledgeId}`]);
  targetPledge.setAttribute("data-visible", true);
}

// Selection | Data Display 數據顯示
const dataBackers = document.getElementById("dataBackers");
const progressBar = document.getElementById("progressBar");
const dataCard = document.getElementById("prodData");

// Number animation I
// input original data with animation and store it in dataAmount
numberAnimation(".odometer_amount", 89914);
let dataAmount = 89914;
numberAnimation(".odometer_backer", 5007);
let dataBacker = 5007;

// Submit function
// after submit the form, check which plan the user selected...
// 0. check which plan is sebmited
// 1. check if input number is valid
// 2. display data
// 3. close selection modal
// 4. pop out data card
// 5. show success modal
// 6. return data card

function selectFunction(inputAmount, dataStockLeft, pledgeStockLeft, validNum) {
  //  if select Bamboo Stand...
  if (validNum === "validNum_1") {
    let maxNum = 75;
    let minNum = 25;

    if (inputAmount.value > maxNum || inputAmount.value < minNum) {
      return;
    } else {
      dataDisplay(".odometer_amount", ".odometer_backer");
      submitFunciton();
    }
  }

  //  if select Black Edition Stand...
  else if (validNum === "validNum_2") {
    let maxNum = 200;
    let minNum = 75;

    if (inputAmount.value > maxNum || inputAmount.value < minNum) {
      return;
    } else {
      dataDisplay(".odometer_amount", ".odometer_backer");
      submitFunciton();
    }
  }

  // if select Mahogany Special...
  else if (validNum === "validNum_3") {
    let maxNum = 999;
    let minNum = 200;

    if (inputAmount.value > maxNum || inputAmount.value < minNum) {
      return;
    } else {
      dataDisplay(".odometer_amount", ".odometer_backer");
      submitFunciton();
    }
  }

  //  if select Pledge with no reward...
  else if (validNum === "validNum_0") {
    let currentBacker = parseInt(dataBacker);
    currentBacker++;
    while (dataBacker <= 10000) {
      dataBacker++;
      break;
    }
    numberAnimation(".odometer_backer", currentBacker);
    submitFunciton();
  }

  function dataDisplay(item1, item2) {
    // data | prod-data--amount // +
    inputAmount = inputAmount.value;
    let currentAmount = parseInt(dataAmount) + parseInt(inputAmount);
    let currentProgress = currentAmount;
    numberAnimation(item1, currentAmount);

    while (dataAmount <= 100000) {
      dataAmount += parseInt(inputAmount);
      console.log("current amount: " + dataAmount);
      console.log("increse amount: " + (parseInt(dataAmount) - 89914));
      break;
    }

    // data | prod-data--backers // ++
    let currentBacker = parseInt(dataBacker);
    currentBacker++;
    numberAnimation(item2, currentBacker);

    while (dataBacker <= 10000) {
      dataBacker++;
      break;
    }

    // data | stok Left // --
    let currentStock = dataStockLeft.innerHTML;
    currentStock = parseInt(currentStock);
    currentStock--;
    dataStockLeft.innerHTML = currentStock;

    pledgeStockLeft.innerHTML = currentStock;

    // data | prod-data--progressbar_current // width%
    currentProgress = (currentProgress / 100000) * 100;
    progressBar.style.width = currentProgress + "%";
  }

  function submitFunciton() {
    closeSelecModal();
    dataPop(dataCard);
    setTimeout(() => {
      successModal.style.display = "block";
    }, 4000);
    setTimeout(() => dataBack(dataCard), 4000);
  }
}

// Selection | Submit success
// after submit the form...
// 1. close selection modal
// 2. open sucess modal
function closeSelecModal() {
  selectModal.style.display = "none";
  bgContainer.classList.remove("bg-shade");
  removeSelectCard();
}

// Selection | Input feild focus style
function inputFeildFocus(inputId, focusClassName) {
  let inputFeild = document.getElementById(inputId).parentNode;
  inputFeild.classList.add(focusClassName);
}
function inputFeildOnBlur(inputId, focusClassName) {
  let inputFeild = document.getElementById(inputId).parentNode;
  inputFeild.classList.remove(focusClassName);
}

/*------------------*/
/* Success Modal    */
/*------------------*/

// Success Modal | Close btn
// when click on close btn..
// 1. close modal
// 2. remove "bg-shade" from header

successCloseBtn.addEventListener("click", () => {
  successModal.style.display = "none";
  bgContainer.classList.remove("bg-shade");
});

/*--------------------*/
/* Animation (jQuery) */
/*--------------------*/

// Number animation II | data card number animation
// source: https://codepen.io/jimut/pen/aNwEbG
function numberAnimation(item, num) {
  var odometer = new Odometer({
    el: $(item)[0],
    value: 1234,
    theme: "minimal",
    duration: 3000,
  });
  odometer.render();

  $(item).text(num);
}

// Data card pop & return
// data card pop animation
function dataPop(card) {
  $(bgContainer).addClass("bg-shade");
  $(card).addClass("shadow").addClass("dataCardPop");
  $("html,body").animate({ scrollTop: 100 });
  $(card).fadeIn(3000).delay(3000).fadeOut("slow");
}

// data card return
function dataBack(card) {
  $(card).show();
  $(card).removeClass("dataCardPop");
  $(card).removeClass("shadow");
}
