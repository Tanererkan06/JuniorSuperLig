// variable making function start
const makeVariableByClassName = (className) => {
  return document.querySelector(`.${className}`);
};
// variable making function end



// global variables start
const profileMenuItems = document.querySelectorAll(".profileMenuItem");
const quickViewBtn = makeVariableByClassName("quickViewBtn");
const question = makeVariableByClassName("question");
let last = makeVariableByClassName("last");
// global variables start



// toggon nav bar function start
const toggleNav = (param1, param2) => {
  const nav = makeVariableByClassName(param1);
  const menu = makeVariableByClassName(param2);
  nav.classList.toggle("anim");
  menu.classList.toggle("left");
};
// toggon nav bar function end



// function for active menu item start
for (let index = 0; index < profileMenuItems.length; index++) {
  const element = profileMenuItems[index];
  element.addEventListener("click", () => {
    const nav = makeVariableByClassName("navBar");
    const menu = makeVariableByClassName("customPosition");
    nav.classList.toggle("anim");
    menu.classList.toggle("left");
    const activeMenu = document.querySelectorAll(".activeLi");
    if (activeMenu.length > 0) {
      for (let index = 0; index < activeMenu.length; index++) {
        const element2 = activeMenu[index];
        element2.classList.remove("activeLi");
      }
    }
    element.classList.add("activeLi");
  });
}
// function for active menu item end



// function for showing faq start 

question.addEventListener("click", () => {
  last.classList.toggle("left0");
});

// function for showing faq start 



