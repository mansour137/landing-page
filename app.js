//declare usage global variable scoop
const li_in_nav = document.querySelector("#navbar__list");
const arr_sections = document.querySelectorAll("Section");

//create li dynamically inside empty ul
const new_li = () => {
  for (let sub_section of arr_sections) {
    let li = document.createElement("li");
    li.innerHTML = `<li><a href="#${sub_section.id}"  data-nav= "${sub_section.id}" class="menu__link">
                        ${sub_section.dataset.nav}</a></li>`;
    li_in_nav.appendChild(li);
  }
};
//invoke function
new_li();

//make scroll smooth by using addEventListener function
li_in_nav.addEventListener("click", (content) => {
  content.preventDefault();
  let smoothy = document.getElementById(`${content.target.dataset.nav}`);
  smoothy.scrollIntoView({
    behavior: "smooth",
  });
});

//using getBoundingClientRect() method
window.onscroll = () => {
  arr_sections.forEach((sub) => {
    if (
      sub.getBoundingClientRect().top >= -300 &&
      sub.getBoundingClientRect().top < 200
    )
      sub.classList.add("your-active-class");
    else sub.classList.remove("your-active-class");
  });

};


