// import { umaCharaIds } from "./data";
// import { umaSupportIds } from "./data";

let divOutput = document.getElementById("output");
let divPulled = document.getElementById("pulled");

// Assume umaSupportIds is defined globally before this script runs.

const supportNameList = [];
for (const [key, value] of Object.entries(umaSupportIds)) {
  if (value.name !== null) {
    supportNameList.push(value.name);
  }
}

// Initialize cardCount object with all possible card IDs set to 0 (Keep as is)
const cardCount = {};
for (let i = 10001; i <= 10072; i++) {
  cardCount[i] = 0;
}
for (let i = 20001; i <= 20035; i++) {
  cardCount[i] = 0;
}
for (let i = 30001; i <= 30062; i++) {
  cardCount[i] = 0;
}
//

const getFirstDigit = (num) => {
  const absoluteNum = Math.abs(num);
  const numString = String(absoluteNum);
  const firstDigitChar = numString[0];
  const firstDigit = Number(firstDigitChar);
  return firstDigit;
};

// ... (Keep getUmaSupportPoolCount and the RATE/COUNT constants)

// Define DOM elements

const app = document.getElementById("app");
const supportDropdown = document.getElementById("supportDropdown");
const caratsInput = document.getElementById("caratInput");
const scoutTenBtn = document.getElementById("scoutTenBtn");
const autoScoutBtn = document.getElementById("autoScoutBtn");
const totalPullsSpan = document.getElementById("totalPulls");
const caratsTotalStatSpan = document.getElementById("caratsTotalStat");
const moneySpentStatSpan = document.getElementById("moneySpentStat");
const caratsRemainingStatSpan = document.getElementById("caratsRemainingStat");
const currentPitySpan = document.getElementById("currentPity");

// Once you get this you guarantee a pull
const PITY_POINT_GUARANTEE = 200;
let currentPity = 0;

let deck = [];
let deckObj = {};
let deckHtmlObj = {};

let total_money_spent = 0;
let currentCarats = 0;
let caratsTotal = 0;
let found = false;
let intervalId = null;

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const capitalizeFirstLetterOfEachWord = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
const sanitizeValue = (str) => {
  return capitalizeFirstLetterOfEachWord(str.trim().toLowerCase());
};

// === Card Creation and Display Logic ===

function createCardElement(id, count) {
  const card = document.createElement("div");
  card.classList.add("uma-card-item");

  const cardName = umaSupportIds[id]?.name || "Unknown Card";
  const cardTitle = umaSupportIds[id]?.title || "Unknown";
  const wikiName = cardName
    .replace(/ /g, "_")
    .replace(/'/g, "")
    .replace(/é/g, "e");
  const rarityDigit = getFirstDigit(id);

  card.innerHTML = `
    <a class="uma-card-link" target="_blank" rel="noopener noreferrer" href="https://umamusu.wiki/${wikiName}">
      <div class="uma-card-container ${rarityDigit === 3 ? "ssr-glow" : ""}">
        <img class="uma-card-image" src="img/uma-support/${id}.png" alt="${cardName}" />
        <img class="uma-rarity-icon" src="img/utx_txt_rarity_0${rarityDigit}.png" alt="rarity" />
        <img class="uma-stat-icon" src="img/utx_ico_obtain_${umaSupportIds[id]?.stat}.png" alt="stat" />
        <span class="uma-card-count-badge">x${count}</span>
      </div>
      <div class="uma-card-label">
        <span>${cardName} (${cardTitle})</span>
      </div>
    </a>
  `;

  return card;
}

function createAnimatedCard2(id) {
  const card = document.createElement("div");
  card.classList.add("uma-card-item");

  const cardName = umaSupportIds[id]?.name || "Unknown Card";
  const wikiName = cardName
    .replace(/ /g, "_")
    .replace(/'/g, "")
    .replace(/é/g, "e");
  const rarityDigit = getFirstDigit(id);
  const count = deckHtmlObj[id]?.count || 1;

  card.innerHTML = `
    <a class="uma-card-link" target="_blank" rel="noopener noreferrer" href="https://umamusu.wiki/${wikiName}">
    <div class="card-inner">
      <div class="card-back">
        <img class="uma-card-image" src="img/card_back.png" alt="Card Back" />
      </div>
      <div class="card-front">
        <div class="uma-card-container ${rarityDigit === 3 ? "ssr-glow" : ""}">
          <img class="uma-card-image" src="img/uma-support/${id}.png" alt="${cardName}" />
          <img class="uma-rarity-icon" src="img/utx_txt_rarity_0${rarityDigit}.png" alt="rarity" />
          <img class="uma-stat-icon" src="img/utx_ico_obtain_${umaSupportIds[id]?.stat}.png" alt="stat" />
          <span class="uma-card-count-badge">x${count}</span>
        </div>
      </div>
    </div>
    <div class="uma-card-label">
      
    </div>
    </a>
  `;

  return card;
}

function createAnimatedCardWithLink(id) {
  const card = document.createElement("div");
  card.classList.add("uma-card-item");
  card.style.cursor = "pointer"; // Show pointer on hover

  const cardName = umaSupportIds[id]?.name || "Unknown Card";
  const wikiName = cardName
    .replace(/ /g, "_")
    .replace(/'/g, "")
    .replace(/é/g, "e");
  const rarityDigit = getFirstDigit(id);
  const count = deckHtmlObj[id]?.count || 1;

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-back">
        <img class="uma-card-image" src="img/card_back.png" alt="Card Back" />
      </div>
      <div class="card-front">
        <div class="uma-card-container ${rarityDigit === 3 ? "ssr-glow" : ""}">
          <img class="uma-card-image" src="img/uma-support/${id}.png" alt="${cardName}" />
          <img class="uma-rarity-icon" src="img/utx_txt_rarity_0${rarityDigit}.png" alt="rarity" />
          <img class="uma-stat-icon" src="img/utx_ico_obtain_${umaSupportIds[id]?.stat}.png" alt="stat" />
          <span class="uma-card-count-badge">x${count}</span>
        </div>
      </div>
    </div>
    <div class="uma-card-label">
      <span>${cardName}</span>
    </div>
  `;

  // Open wiki in a new tab when clicked
  card.addEventListener("click", () => {
    window.open(`https://umamusu.wiki/${wikiName}`, "_blank");
  });

  return card;
}

async function revealCardsSequentially(ids) {
  const deckOutput = document.createElement("div");
  deckOutput.classList.add("gacha-pull-row"); // Use a specific class for the flex/grid layout of pulled cards

  for (let i = 0; i < ids.length; i++) {
    const cardElement = createAnimatedCard2(ids[i]);
    deckOutput.appendChild(cardElement);

    // Add small delay for sequential reveal (Adjust for speed)
    await new Promise((resolve) => setTimeout(resolve, 50));

    // Flip the card
    const inner = cardElement.querySelector(".card-inner");
    inner.classList.add("card-flipped");
  }

  // Update the output display with the new pulls
  // divOutput.innerHTML = "";

  // Instead, insert new rows at the top (or bottom) of the output container:
  divOutput.insertBefore(deckOutput, divOutput.firstChild);

  divOutput.appendChild(deckOutput);
}

// === Core Gacha Logic ===

function updateStatsDisplay() {
  totalPullsSpan.textContent = deck.length;
  caratsTotalStatSpan.textContent = caratsTotal;
  moneySpentStatSpan.textContent = total_money_spent.toFixed(2);
  caratsRemainingStatSpan.textContent = currentCarats;
  currentPitySpan.textContent = currentPity + "/200";
}

function resetDeck() {
  deck = [];
  deckObj = {};
  deckHtmlObj = {};

  total_money_spent = 0;

  currentCarats = parseInt(caratsInput.value, 10) || 0; // Use the value from the input field
  caratsTotal = 0;

  found = false;

  // reset pity points
  currentPity = 0;

  // Reset card counts
  for (let id in cardCount) {
    cardCount[id] = 0;
  }
  divOutput.innerHTML = "";
}

function resetPity() {
  currentPity = 0;
}

function stopAutoScout() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    console.log("Auto-scout stopped.");
  }
}

function getIdFromSupportDropdownInput(name) {
  // iterate through uma support ids
  // get the id from the supportDropdown.value
  // if uma_support_id.name = supportDropdown.value
  // return the id
  for (const supp in umaSupportIds) {
    // if (supp.name == supportDropdown.value) {
    // return supp;
    // }
    if (umaSupportIds[supp].name == name) {
      return supp;
    }
  }
  return null;
}

function getIdByName(objList, targetName) {
  for (const id in objList) {
    if (objList[id].name === targetName && getFirstDigit(id) === 3) {
      return id; // Returns immediately when found
    }
  }
  return null; // Returns null if no match is found
}

const copyCountInput = document.getElementById("copyCountInput");

let currentCopiesOwned = 0;
let successBannerHTML = ``;
let mlbNotice = "";
async function scoutForSupport(supportName = "Kitasan Black") {
  if (found) return;

  // --- Helper Functions (nested to keep scope clean) ---
  const pullSupport = (rarity = "R") => {
    let minId, maxId;
    if (rarity === "SSR") {
      minId = 30001;
      maxId = 30062;
    } else if (rarity === "SR") {
      minId = 20001;
      maxId = 20035;
    } else {
      minId = 10001;
      maxId = 10072;
    }

    let id = getRandomNumber(minId, maxId);
    let card = umaSupportIds[id];
    while (card === undefined) {
      id = getRandomNumber(minId, maxId);
      card = umaSupportIds[id];
    }
    cardCount[id] += 1;
    return id;
  };

  const addToDeck = (id) => {
    if (!(id in deckObj)) {
      deckObj[id] = 1;
      deckHtmlObj[id] = { count: 1 };
    } else {
      deckObj[id] += 1;
      if (deckHtmlObj[id] !== undefined) deckHtmlObj[id].count += 1;
    }
    deck.push(id);
  };
  // --- End Helper Functions ---

  // Cost: 1500 Carats per 10x scout
  if (currentCarats <= 1500) {
    console.log("Bought more carats");
    currentCarats += 5000;
    caratsTotal += 5000;
    total_money_spent += 69.99; // Standard cost of biggest Carat pack
  }
  currentCarats -= 1500;
  caratsTotal += 1500;

  let pulledIds = [];

  // Pull 10 cards (Same logic as before)
  for (let i = 0; i < 10; i++) {
    let randomInteger = getRandomNumber(1, 100);
    let rarity = "";

    if (i < 9) {
      // Normal rates: SSR 3%, SR 18%, R 79%
      if (randomInteger <= 3) rarity = "SSR";
      else if (randomInteger <= 21) rarity = "SR";
      else rarity = "R";
    } else {
      // 10th pull guaranteed SR or better: SSR 3%, SR 97%
      rarity = randomInteger <= 3 ? "SSR" : "SR";
    }

    // add pity
    currentPity += 1;
    const id = pullSupport(rarity);
    addToDeck(id);
    pulledIds.push(id);
  }

  // 6 is needed for max limit break (max level/ MLB)
  const targetCopiesRequired = Math.max(
    1,
    parseInt(copyCountInput.value, 10) || 1,
  );
  console.log(
    `Required copies: ${cardCount[getIdByName(umaSupportIds, supportDropdown.value)]}/${targetCopiesRequired} `,
  );

  let targetId = getIdByName(umaSupportIds, supportDropdown.value);

  // if pity is reached just give them the card they want

  if (currentPity >= 200 && targetId) {
    currentPity %= 200; // Reset pity counter (or keep remainder)
    cardCount[targetId] += 1;
    addToDeck(targetId);
    console.log(`PITIED: Claimed 1x copy of ${supportName}`);
  }
  targetCopiesOwnd = cardCount[targetId];
  // RENDERING
  await renderStats(pulledIds);
  updateCardChart(); // Synchronizes chart bars after every 10-pull batch

  let existingBanner = divPulled.querySelector(".uma-success-message");
  // Check if target support pulled (The target is always the SSR version, ID starting with 3)
  for (let id of pulledIds) {
    if (
      getFirstDigit(id) === 3 &&
      cardCount[getIdByName(umaSupportIds, supportDropdown.value)] >=
        targetCopiesRequired
    ) {
      found = true;
      stopAutoScout();

      // Check if a success banner is already present in the DOM
      existingBanner = divPulled.querySelector(".uma-success-message");

      if (targetCopiesRequired == 6) {
        mlbNotice = " for Max Limit Break";
      }

      if (!existingBanner) {
        // Prepend the victory message above the scout results grid
        successBannerHTML = `
            <div class="uma-success-message">
              <h2>🎉 Congratulations! You got ${supportName}${mlbNotice}! 🎉</h2>
              <img class="uma-banner-image" src="img/uma-support/${targetId}.png" alt="${supportName} acquired">
              <span class="uma-card-count-badge" style="position: absolute; bottom: 8px; right: 8px;">x${currentCopiesOwned}</span>
              <p>Total Carats Used: <strong>${caratsTotal}</strong> | Total Money Spent: <strong>$${total_money_spent.toFixed(2)}</strong> | Total Pulls: <strong>${deck.length}</strong></p>
            </div>
          `;
        divPulled.insertAdjacentHTML("afterbegin", successBannerHTML);
      } else {
        // If banner exists, update the count badge and stats instead of adding a new one
        const countBadge = existingBanner.querySelector(
          ".uma-card-count-badge",
        );
        if (countBadge) countBadge.textContent = `x${currentCopiesOwned}`;
      }

      return;
    }
  }
}

async function renderStats(pulledIds) {
  // RENDERING
  // Animate card reveal
  await revealCardsSequentially(pulledIds);

  // Update stats after pull
  renderSortedGrid();
  updateStatsDisplay();
  updateInventoryDisplay();
}

// === Event Listeners and Initialization ===

// Initialize Support Dropdown
supportNameList.forEach((supportName) => {
  const option = document.createElement("option");
  option.value = supportName;
  option.textContent = supportName;
  if (supportName === "Kitasan Black") {
    option.selected = true;
  }
  supportDropdown.appendChild(option);
});

// Scout 10 Button
scoutTenBtn.addEventListener("click", () => {
  if (found) return; // Prevent single pulls after target is found
  const targetSupport = sanitizeValue(supportDropdown.value);
  scoutForSupport(targetSupport);
});

let isScouting = false;

async function runAutoScoutLoop(targetSupport) {
  if (!isScouting || found) return;

  await scoutForSupport(targetSupport);

  // If still scouting and target not found, schedule the next pull
  if (isScouting && !found) {
    setTimeout(() => runAutoScoutLoop(targetSupport), 10);
  } else {
    stopAutoScout();
  }
}

// Auto Scout Button
autoScoutBtn.addEventListener("click", () => {
  if (isScouting) {
    stopAutoScout();
    return;
  }

  if (intervalId !== null) {
    stopAutoScout();
    autoScoutBtn.textContent = "Auto Scout Until Found";
    return;
  }

  // Initial setup before starting auto-scout
  resetDeck();

  // 2. Re-establish the DOM structure in case divPulled was overwritten by success message

  divPulled.innerHTML = `
        <h2>Scout Results</h2>
        <div id="output" class="scout-output"></div>
    `;
  // Re-bind the global output element variable
  divOutput = document.getElementById("output");

  updateStatsDisplay(); // Display initial/reset stats
  // divPulled.innerHTML = '<h2>Scout Results</h2><p>Auto scouting...</p>';

  const targetSupport = sanitizeValue(supportDropdown.value);
  autoScoutBtn.textContent = "Auto Scout";

  // use mode 1 or 2 to test the different auto scout functions
  let mode = 2;
  if (mode == 1) {
    isScouting = true;
    runAutoScoutLoop(targetSupport);
  }

  if (mode == 2) {
    // Start auto-scout loop
    intervalId = setInterval(() => {
      if (found) {
        stopAutoScout();
        autoScoutBtn.textContent = "Auto Scout Until Found";
        return;
      }
      // Use an IIFE or separate function to call the async scout
      (async () => {
        await scoutForSupport(targetSupport);
      })();
    }, 10); // Small delay to simulate pulling and prevent freezing
  }
});

async function runAutoScoutingLoop2(targetSupport) {
  intervalId = setInterval(() => {
    if (found) {
      stopAutoScout();
      autoScoutBtn.textContent = "Auto Scout Until Found";
      return;
    }
    // Use an IIFE or separate function to call the async scout
    (async () => {
      await scoutForSupport(targetSupport);
    })();
  }, 10); // Small delay to simulate pulling and prevent freezing
}

function initAutoScoutBtn() {
  // Auto Scout Button Listener
  autoScoutBtn.addEventListener("click", () => {
    // 1. Toggle off if already running
    if (isScouting || intervalId !== null) {
      stopAutoScout();
      autoScoutBtn.textContent = "Auto Scout Until Found";
      return;
    }

    // 2. Ensure container exists without wiping existing pulls
    if (!document.getElementById("output")) {
      divPulled.innerHTML = `
            <h2>Scout Results</h2>
            <div id="output" class="scout-output"></div>
        `;
      divOutput = document.getElementById("output");
    }

    // 3. Set state and UI label
    isScouting = true;
    autoScoutBtn.textContent = "STOP Auto Scout";

    const targetSupport = sanitizeValue(supportDropdown.value);

    // 4. Run async loop safely (Mode 1 recommended to avoid stacked async intervals)
    runAutoScoutLoop(targetSupport);
  });
}

// Initial state setup
document.addEventListener("DOMContentLoaded", () => {
  carats = parseInt(caratsInput.value, 10) || 0;
  updateStatsDisplay();
});

function addResetButton() {
  // Add a Reset button listener
  document.getElementById("resetBtn")?.addEventListener("click", () => {
    resetDeck();
    for (let id in cardCount) {
      cardCount[id] = 0;
    }
    divOutput.innerHTML = "<p>Cards pulled will appear here...</p>";
    updateStatsDisplay();
    const inventoryDiv = document.getElementById("inventorySummary");
    if (inventoryDiv) inventoryDiv.innerHTML = "";
  });
}

const barChartElement = document.getElementById("barGraph1");
const barChartOriginalHTML = barChartElement.innerHTML;

function addResetFunctionality() {
  document.getElementById("resetBtn")?.addEventListener("click", () => {
    // 1. Stop any active auto scouting
    if (typeof stopAutoScout === "function") {
      stopAutoScout();
    }

    // 2. Reset numerical deck state and card counts
    resetDeck();

    // 3. Re-establish clean DOM layout inside #pulled (clears win banners)
    divPulled.innerHTML = `
      <h2>Scout Results</h2>
      <div id="output" class="scout-output">
        <p>Cards pulled will appear here...</p>
      </div>
    `;
    divOutput = document.getElementById("output");

    // 4. Clear inventory summary if present
    const inventoryDiv = document.getElementById("inventorySummary");
    if (inventoryDiv) {
      inventoryDiv.innerHTML = "";
    }

    // 5. Update stats display back to zero values
    updateStatsDisplay();

    // reset bar chart
    barChartElement.innerHTML = barChartOriginalHTML;
  });
}

// == Rendering ==
// render a cumulative inventory view:

function updateInventoryDisplay() {
  // Create or get an inventory container inside your results panel
  let inventoryDiv = document.getElementById("inventorySummary");
  if (!inventoryDiv) {
    inventoryDiv = document.createElement("div");
    inventoryDiv.id = "inventorySummary";
    inventoryDiv.classList.add("uma-panel");
    divPulled.appendChild(inventoryDiv);
  }

  // Filter and display cards that have been pulled at least once
  const pulledCards = Object.entries(cardCount)
    .filter(([id, count]) => count > 0)
    .map(([id, count]) => {
      const card = umaSupportIds[id];
      return `<li><strong>${card.name}</strong> (${card.title}): ${count}x</li>`;
    });

  inventoryDiv.innerHTML = `
    <h3>Card Inventory Summary</h3>
    <ul>${pulledCards.join("")}</ul>
  `;
}

// SORTING AND GRID RENDERING LOGIC

/*
// Creates a single card DOM node with count badge
function createCardElement(id, count) {
  const card = document.createElement("div");
  card.classList.add("uma-card-item");

  const cardName = umaSupportIds[id].name;
  const wikiName = cardName.replace(/ /g, "_").replace(/'/g, "").replace(/é/g, "e");
  const rarityDigit = getFirstDigit(id);

  card.innerHTML = `
    <div class="uma-card-container ${rarityDigit === 3 ? 'ssr-glow' : ''}">
      <img class="uma-card-image" src="img/uma-support/${id}.png" alt="${cardName}" />
      <img class="uma-rarity-icon" src="img/utx_txt_rarity_0${rarityDigit}.png" alt="rarity" />
      <img class="uma-stat-icon" src="img/utx_ico_obtain_${umaSupportIds[id].stat}.png" alt="stat" />
      <span class="uma-card-count-badge">x${count}</span>
    </div>
  `;

  return card;
}*/

// Renders the full collection sorted by Rarity (SSR -> SR -> R) then Alphabetical Name
function renderSortedGrid() {
  divOutput.innerHTML = ""; // Clear existing grid

  // Extract all cards with count > 0
  const activeCards = Object.keys(cardCount)
    .filter((id) => cardCount[id] > 0)
    .map((id) => Number(id));

  // Sort by Rarity Descending (30000s -> 20000s -> 10000s), then Alphabetically by Name
  activeCards.sort((a, b) => {
    const rarityA = getFirstDigit(a);
    const rarityB = getFirstDigit(b);

    if (rarityA !== rarityB) {
      return rarityB - rarityA; // Higher rarity first
    }

    const nameA = umaSupportIds[a].name.toLowerCase();
    const nameB = umaSupportIds[b].name.toLowerCase();
    return nameA.localeCompare(nameB); // Alphabetical sort
  });

  // Append sorted cards to output grid
  activeCards.forEach((id) => {
    const cardNode = createCardElement(id, cardCount[id]);
    divOutput.appendChild(cardNode);
  });
}

/* RENDER BAR CHART */
function updateCardChart() {
  const container = document.getElementById("chartBarsContainer");
  if (!container) return;

  // Gather all pulled cards (count > 0)
  const pulledEntries = Object.entries(cardCount).filter(
    ([id, count]) => count > 0,
  );
  if (pulledEntries.length === 0) return;

  // Find max count to scale bar heights relative to highest pulled card
  const maxPullCount = Math.max(...pulledEntries.map(([_, count]) => count));

  container.innerHTML = pulledEntries
    .map(([id, count]) => {
      // Scale height between 2% and 100%
      const heightPercent = Math.max(
        2,
        Math.round((count / maxPullCount) * 100),
      );

      // Determine rarity class based on ID prefix
      const firstDigit = getFirstDigit(parseInt(id, 10));
      const rarityClass =
        firstDigit === 3 ? "ssr" : firstDigit === 2 ? "sr" : "r";

      return `
        <div class="chart-bar-group">
          <div class="chart-bar-wrapper">
            <span class="chart-bar-count">${count}</span>
            <div class="chart-bar ${rarityClass}" style="height: ${heightPercent}%;"></div>
          </div>
          <img class="chart-card-image" src="img/uma-support/${id}.png" alt="Card ${id}" title="ID: ${id}">
        </div>
      `;
    })
    .join("");
}

async function render() {
  // RENDERING
  // Animate card reveal
  await revealCardsSequentially(pulledIds);

  // Update stats after pull
  renderSortedGrid();
  updateStatsDisplay();
  updateInventoryDisplay();
}

// FILE EXPORT FUNCTIONS

// Helper to generate and trigger a file download from text content
function downloadFile(content, fileName, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();

  // Cleanup object URL from memory
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 1. Export as JSON
function exportInventoryJSON() {
  const inventoryData = {
    exportedAt: new Date().toISOString(),
    stats: {
      totalPulls: deck.length,
      caratsUsed: caratsTotal,
      moneySpent: total_money_spent,
    },
    inventory: Object.entries(cardCount)
      .filter(([_, count]) => count > 0)
      .map(([id, count]) => {
        const numericId = parseInt(id, 10);
        const rarityDigit = getFirstDigit(numericId);
        return {
          id: numericId,
          name: umaSupportIds[id] || "Unknown Card",
          rarity: rarityDigit === 3 ? "SSR" : rarityDigit === 2 ? "SR" : "R",
          count: count,
        };
      }),
  };

  const jsonString = JSON.stringify(inventoryData, null, 2);
  downloadFile(jsonString, "uma_card_inventory.json", "application/json");
}

// 2. Export as CSV
function exportInventoryCSV() {
  const rows = [["Card ID", "Card Name", "Rarity", "Amount Pulled"]];

  Object.entries(cardCount)
    .filter(([_, count]) => count > 0)
    .forEach(([id, count]) => {
      const numericId = parseInt(id, 10);
      const rarityDigit = getFirstDigit(numericId);
      const rarity = rarityDigit === 3 ? "SSR" : rarityDigit === 2 ? "SR" : "R";

      //
      // const rawName = umaSupportIds[id] || "Unknown Card";
      /*
      const rawName = umaSupportIds[id];
      const nameString =
        typeof rawName === "string"
          ? rawName
          : rawName?.name || String(rawName || "Unknown Card");
      */
      // 1. Safe extraction of string representation
      let rawVal = umaSupportIds[id] ?? umaSupportIds[numericId];
      let nameString = "Unknown Card";

      if (typeof rawVal === "string") {
        nameString = rawVal;
      } else if (rawVal && typeof rawVal === "object") {
        // If umaSupportIds holds objects like { name: "..." } or arrays
        nameString = rawVal.name || rawVal.title || JSON.stringify(rawVal);
      }

      // Escape double quotes inside names to prevent CSV corruption
      // const safeName = `"${rawName.replace(/"/g, '""')}"`;

      const safeName = `"${String(nameString).replace(/"/g, '""')}"`;

      rows.push([id, safeName, rarity, count]);
    });

  const csvContent = rows.map((row) => row.join(",")).join("\n");
  downloadFile(csvContent, "uma_card_inventory.csv", "text/csv;charset=utf-8;");
}

// END FILE EXPORT FUNCTIONS

function main() {
  addResetFunctionality();
}

main();
