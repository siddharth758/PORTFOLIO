var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tabLinks) {
    tablink.classList.remove("active-links");
  }
  for (let tabcontent of tabContents) {
    tabcontent.classList.remove("active-tabs");
  }
  event.currentTarget.classList.add("active-links");
  let selectedTabs = document.getElementsByClassName(tabname);
  for (let tab of selectedTabs) {
    tab.classList.add("active-tabs");
  }
}
