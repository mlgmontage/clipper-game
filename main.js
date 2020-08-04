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

// Event
makeClipperElm.addEventListener("click", () => {
  clipper += 1;
  wire -= 3;
  update();
});

buyWireElm.addEventListener("click", () => {
  // NOTE: magic constant
  // 100 inch of wire costs 10$
  if (budget <= 0 || budget < 10) {
    UIkit.notification({
      message: "You don't have enough money to buy wire",
      status: "warning",
      pos: "top-right",
      timeout: 3000,
    });
  } else {
    wire += 100;
    budget -= 10;
  }
  update();
});

// Game loop
setInterval(() => {
  if (clipper <= 0) {
  } else {
    clipper -= 1;
    budget += cost;
    update();
  }
}, 1000);

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
