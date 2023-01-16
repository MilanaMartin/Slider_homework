const interior = [
  {
    city: "Rostov-on-Don <br/>  LCD admiral",
    apartment: "81m2",
    repairTime: "3.5 months",
    RepairCost: "Upon request",
    img: "img/rostov-on-don-admiral.jpg",
  },
  {
    city: "Sochi <br/> Thieves",
    apartment: "105m2",
    repairTime: "4 months",
    RepairCost: "Upon request",
    img: "img/sochi-thieves.jpg",
  },
  {
    city: "Rostov-on-Don <br/>  Patriotic",
    apartment: "93m2",
    repairTime: "3 months",
    RepairCost: "Upon request",
    img: "img/rostov-on-don-patriotic.jpg",
  },
];

const img = document.querySelector(".f");
const city = document.querySelector(".city");
const apartment = document.querySelector(".apartment");
const repairTime = document.querySelector(".repairTime");
const RepairCost = document.querySelector(".RepairCost");
const dots = document.querySelectorAll(".dot");
const dotsArray = Array.from(dots);
const locations = document.querySelectorAll(".location");
const locArray = Array.from(locations);

const setInterior = (index) => {
  img.style.backgroundImage = `url(${interior[index].img})`;
  city.innerHTML = interior[index].city;
  apartment.innerHTML = interior[index].apartment;
  repairTime.innerHTML = interior[index].repairTime;
  RepairCost.innerHTML = interior[index].RepairCost;
};

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  if (currentIndex < interior.length - 1) {
    setInterior(currentIndex + 1);
    thisSlide(currentIndex + 1);
    currentIndex += 1;
  } else {
    currentIndex = -1;
    setInterior(currentIndex + 1);
    thisSlide(currentIndex + 1);
    currentIndex += 1;
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    setInterior(currentIndex - 1);
    thisSlide(currentIndex - 1);
    currentIndex -= 1;
  } else {
    currentIndex = interior.length;
    setInterior(currentIndex - 1);
    thisSlide(currentIndex - 1);
    currentIndex -= 1;
  }
});

for (let i = 0; i < locArray.length; i++) {
  locArray[i].addEventListener("click", () => {
    setInterior(i);
    thisSlide(i);
  });
}

for (let i = 0; i < dotsArray.length; i++) {
  dotsArray[i].addEventListener("click", () => {
    setInterior(i);
    thisSlide(i);
    currentIndex = i;
  });
}

const thisSlide = (index) => {
  for (let dot of dotsArray) {
    dot.classList.remove("active");
  }
  dotsArray[index].classList.add("active");
  for (let dot of locArray) {
    dot.classList.remove("loc_active");
  }
  locArray[index].classList.add("loc_active");
};