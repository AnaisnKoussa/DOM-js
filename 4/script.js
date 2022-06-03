const ol = document.querySelector("ol");
ol.insertBefore(ol.lastElementChild, ol.firstElementChild);

const section = document.querySelectorAll("section");

const firstSectionChild = section[2].children[0];

const h2SecondSection = firstSectionChild.children[0];

const h2ThirdSection = section[1].firstElementChild;

section[2].insertBefore(h2ThirdSection, firstSectionChild);

section[1].insertBefore(h2SecondSection, section[1].firstElementChild);

section[2].remove();


