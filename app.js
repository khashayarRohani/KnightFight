const leftKnight = {
  health: 100,
  Attack: 10,
  defense: 8,
  AttackFunc: function (otherguy) {
    let res = leftKnight.Attack - otherguy.defense;

    if (res <= 0) {
      otherguy.health -= 1;
      return otherguy.health;
    } else {
      otherguy.health -= res;
      return otherguy.health;
    }
  },
};
const RightKnight = {
  health: 100,
  Attack: 9,
  defense: 4,
  AttackFunc: function (otherguy) {
    let res = RightKnight.Attack - otherguy.defense;

    if (res <= 0) {
      otherguy.health -= 1;
      return otherguy.health;
    } else {
      otherguy.health -= res;
      return otherguy.health;
    }
  },
};

const LeftKnightbtn = document.getElementById("LeftKnightAttack");
const lftKnightDiv = document.getElementById("LftKnightInfo");

const RightKnightbtn = document.getElementById("RightKnightAttack");
const rgtKnightDiv = document.getElementById("RightKnightInfo");

const PHealth = document.createElement("p");
const PDefense = document.createElement("p");
const PAttack = document.createElement("p");
PDefense.textContent = "Defense: " + leftKnight.defense;
PHealth.textContent = "Health: " + leftKnight.health;
PAttack.textContent = "Attack: " + leftKnight.Attack;

const PrHealth = document.createElement("p");
const PrDefense = document.createElement("p");
const PrAttack = document.createElement("p");
PrDefense.textContent = "Defense: " + RightKnight.defense;
PrHealth.textContent = "Health: " + RightKnight.health;
PrAttack.textContent = "Attack: " + RightKnight.Attack;

lftKnightDiv.appendChild(PAttack);
lftKnightDiv.appendChild(PHealth);
lftKnightDiv.appendChild(PDefense);

rgtKnightDiv.appendChild(PrAttack);
rgtKnightDiv.appendChild(PrHealth);
rgtKnightDiv.appendChild(PrDefense);

LeftKnightbtn.addEventListener("click", function () {
  resHealth = leftKnight.AttackFunc(RightKnight);
  if (resHealth <= 0) {
    PrHealth.textContent = "Dead";
    rgtKnightDiv.style.backgroundColor = "red";
  } else {
    PrHealth.textContent = "Health :" + resHealth;
  }
});
RightKnightbtn.addEventListener("click", function () {
  resHp = RightKnight.AttackFunc(leftKnight);
  if (resHp <= 0) {
    PHealth.textContent = "Dead";
    lftKnightDiv.style.backgroundColor = "red";
  } else {
    PHealth.textContent = "Health :" + resHp;
  }
});

const Movelftbtn = document.getElementById("mvLeftbtn");

Movelftbtn.addEventListener("click", function () {
  let currentLeft = parseFloat(knight1Image.style.left) || 0;

  // Move the image 3% to the left
  knight1Image.style.left = currentLeft - 3 + "%";
});
