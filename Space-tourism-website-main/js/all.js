// Navigation

const nav = document.querySelector(".navbar");
const navToggle = document.querySelector(".navbar-toggle");

navToggle.addEventListener("click", function () {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
  console.log(nav.getAttribute("data-visible"));
  console.log(navToggle.getAttribute("aria-expanded"));
});

// Tab List
const tabList = document.querySelector("[role=tablist]");
const tabs = tabList.querySelectorAll("[role=tab]");

// Tab List - keydown focus
tabList.addEventListener("keydown", changeTabFocus);

// Tab List - click each tab
tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

// Tab List - keydown focus function
let tabFocus = 0;

function changeTabFocus(e) {
  const keydownRight = 39;
  const keydownLeft = 37;
  if (e.keyCode === keydownRight || e.keyCode === keydownLeft) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }

  if (e.keyCode === keydownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
  }

  if (e.keyCode === keydownLeft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
  }
  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
  console.log(`資料長度: ${tabs.length}`);
  console.log(`目前位置: ${tabFocus}`);
  console.log(
    `tab1: ${tabs[0].getAttribute("tabindex")}
     , tab2: ${tabs[1].getAttribute("tabindex")}
     , tab3: ${tabs[2].getAttribute("tabindex")}
     , tab4: ${tabs[3].getAttribute("tabindex")}    
    `
  );
}

// Tab List - click each tab function

// ! 點擊 tab 時
function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetIage = targetTab.getAttribute("data-image");
  const tabContainer = targetTab.parentNode;
  const contentContainer = tabContainer.parentNode.parentNode;

  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  // change content
  hideContent(contentContainer, "[role=tabpanel]");
  showContent(contentContainer, [`#${targetPanel}`]);

  // change image
  hideContent(contentContainer, "picture");
  showContent(contentContainer, [`#${targetIage}`]);
  // 規則: 先隱藏所有，再顯示特定
}

// refactoring
function hideContent(parent, content) {
  parent.querySelectorAll(content).forEach((item) => {
    item.setAttribute("hidden", true);
  });
}

function showContent(parent, content) {
  parent.querySelector(content).removeAttribute("hidden");
}
