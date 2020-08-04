let clipper = 10,
  budget = 110,
  wire = 510,
  cost = 0.1,
  autoClipper = 0;

// DOM
const clipperElm = document.querySelector("#clipper");
const budgetElm = document.querySelector("#budget");
const wireElm = document.querySelector("#wire");
const costElm = document.querySelector("#cost");
const autoClipperElm = document.querySelector("#autoClipper");

// DOM controllers
const makeClipperElm = document.querySelector("#makeClipper");
const buyWireElm = document.querySelector("#buyWire");
const buyAutoClipperElm = document.querySelector("#buyAutoClipper");

// Event
makeClipperElm.addEventListener("click", () => {
  makePaperClip();
});

buyAutoClipperElm.addEventListener("click", () => {
  // NOTE: magic constant
  // 1 AutoClipper costs 50$
  if (budget < 50) {
    UIkit.notification("You don't have enough money to buy AutoClipper");
  } else {
    autoClipper += 1;
    budget -= 50;
  }
  update();
});

buyWireElm.addEventListener("click", () => {
  // NOTE: magic constant
  // 100 inch of wire costs 10$
  if (budget < 10) {
    UIkit.notification("You don't have enough money to buy wire");
  } else {
    wire += 100;
    budget -= 10;
  }
  update();
});

// Game loop
setInterval(() => {
  // Handling autoclippers
  if (autoClipper > 0) {
    makePaperClip(autoClipper);
  }

  // Selling paperclips
  if (clipper <= 0) {
  } else {
    clipper -= 1;
    budget += cost;
    update();
  }
}, 500);

// Utils
const makePaperClip = (amount = 1) => {
  if (wire > amount * 3) {
    clipper += amount;
    wire -= amount;
  }

  update();
};

const update = () => {
  // Udate
  clipperElm.textContent = clipper;
  budgetElm.textContent = budget.toFixed(2);
  wireElm.textContent = wire;
  costElm.textContent = cost;
  autoClipperElm.textContent = autoClipper;
};

// Setup
update();
