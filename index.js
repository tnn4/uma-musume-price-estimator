let divOutput = document.getElementById("output");
let divPulled = document.getElementById("pulled");

const umaCharaIds = {
  1001: "Special Week",
  1002: "Silence Suzuka",
  1003: "Tokai Teio",
  1004: "Maruzensky",
  1005: "Fuji Kiseki",
  1006: "Oguri Cap",
  1007: "Gold Ship",
  1008: "Vodka",
  1009: "Daiwa Scarlet",
  1010: "Taiki Shuttle",
  1011: "Grass Wonder",
  1012: "Hishi Amazon",
  1013: "Mejiro McQueen",
  1014: "El Condor Pasa",
  1015: "T.M. Opera O",
  1016: "Narita Brian",
  1017: "Symboli Rudolf",
  1018: "Air Groove",
  1019: "Agnes Digital",
  1020: "Seiun Sky",
  1021: "Tamamo Cross",
  1022: "Fine Motion",
  1023: "Biwa Hayahide",
  1024: "Mayano Top Gun",
  1025: "Manhattan Cafe",
  1026: "Mihono Bourbon",
  1027: "Mejiro Ryan",
  1028: "Hishi Akebono",
  1029: "Yukino Bijin",
  1030: "Rice Shower",
  1031: "Ines Fujin",
  1032: "Agnes Tachyon",
  1033: "Admire Vega",
  1034: "Inari One",
  1035: "Winning Ticket",
  1036: "Air Shakur",
  1037: "Eishin Flash",
  1038: "Curren Chan",
  1039: "Kawakami Princess",
  1040: "Gold City",
  1041: "Sakura Bakushin O",
  1042: "Seeking the Pearl",
  1043: "Shinko Windy",
  1044: "Sweep Tosho",
  1045: "Super Creek",
  1046: "Smart Falcon",
  1047: "Zenno Rob Roy",
  1048: "Tosen Jordan",
  1049: "Nakayama Festa",
  1050: "Narita Taishin",
  1051: "Nishino Flower",
  1052: "Haru Urara",
  1053: "Bamboo Memory",
  1054: "Biko Pegasus",
  1055: "Marvelous Sunday",
  1056: "Matikanefukukitaru",
  1057: "Mr. C.B.",
  1058: "Meisho Doto",
  1059: "Mejiro Dober",
  1060: "Nice Nature",
  1061: "King Halo",
  1062: "Matikanetannhauser",
  1063: "Ikuno Dictus",
  1064: "Mejiro Palmer",
  1065: "Daitaku Helios",
  1066: "Twin Turbo",
  1067: "Satono Diamond",
  1068: "Kitasan Black",
  1069: "Sakura Chiyono O",
  1070: null,
  1071: "Mejiro Ardan",
  1072: "Yaeno Muteki",
  1073: null,
  1074: "Mejiro Bright",
  9001: "Tazuna Hayakawa",
  9002: "Director Akikawa",
  9003: "Etsuko Otonashi",
  9004: "Trainer Kiryuin",
  9005: "Sasami Anshinzawa",
  9006: "Riko Kashimoto"
};

const umaSupportIds = {
  10001: { name: "Special Week", stat: "g", title: "Tracen Academy", tier: null, count: 0},
  10002: { name: "Silence Suzuka", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10003: { name: "Tokai Teio", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10004: { name: "Maruzensky", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10005: { name: "Oguri Cap", stat: "po", title: "Tracen Academy", tier: null, count: 0 },
  10006: { name: "Golden Ship", stat: "st", title: "Tracen Academy", tier: null, count: 0 },
  10007: { name: "Vodka", stat: "po", title: "Tracen Academy", tier: null, count: 0 },
  10008: { name: "Taiki Shuttle", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10009: { name: "Grass Wonder", stat: "g", title: "Tracen Academy", tier: null, count: 0 },
  10010: { name: "Mejiro McQueen", stat: "st", title: "Tracen Academy", tier: null, count: 0 },
  10011: { name: "El Condor Pasa", stat: "po", title: "Tracen Academy", tier: null, count: 0 },
  10012: { name: "T.M. Opera O", stat: "st", title: "Tracen Academy", tier: null, count: 0 },
  10013: { name: "Symboli Rudolf", stat: "w", title: "Tracen Academy", tier: null, count: 0 },
  10014: { name: "Seiun Sky", stat: "st", title: "Tracen Academy", tier: null, count: 0 },
  10015: { name: "Rice Shower", stat: "st", title: "Tracen Academy", tier: null, count: 0 },
  10016: { name: "Winning Ticket", stat: "g", title: "Tracen Academy", tier: null, count: 0 },
  10017: { name: "Gold City", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10018: { name: "Sakura Bakushin O", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10019: { name: "Super Creek", stat: "st", title: "Tracen Academy", tier: null, count: 0 },
  10020: { name: "Haru Urara", stat: "g", title: "Tracen Academy", tier: null, count: 0 },
  10021: { name: "Tazuna Hayakawa", stat: "pa", title: "Tracen Academy", tier: null, count: 0 },
  10022: { name: "Aoi Kiryuin", stat: "pa", title: "Tracen Academy", tier: null, count: 0 },
  10023: { name: "Daiwa Scarlet", stat: "w", title: "Tracen Academy", tier: null, count: 0 },
  10024: { name: "Hishi Amazon", stat: "po", title: "Tracen Academy", tier: null, count: 0 },
  10025: { name: "Air Groove", stat: "g", title: "Tracen Academy", tier: null, count: 0 },
  10026: { name: "Agnes Digital", stat: "po", title: "Tracen Academy", tier: null, count: 0 },
  10027: { name: "Tamamo Cross", stat: "st", title: "Tracen Academy", tier: null, count: 0 },
  10028: { name: "Fine Motion", stat: "w", title: "Tracen Academy", tier: null, count: 0 },
  10029: { name: "Biwa Hayahide", stat: "po", title: "Tracen Academy", tier: null, count: 0 },
  10030: { name: "Mayano Top Gun", stat: "st", title: "Tracen Academy", tier: null, count: 0 },
  10031: { name: "Manhattan Cafe", stat: "st", title: "Tracen Academy", tier: null, count: 0 },
  10032: { name: "Mihono Bourbon", stat: "po", title: "Tracen Academy", tier: null, count: 0 },
  10033: { name: "Mejiro Ryan", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10034: { name: "Yukino Bijin", stat: "g", title: "Tracen Academy", tier: null, count: 0 },
  10035: { name: "Ines Fujin", stat: "g", title: "Tracen Academy", tier: null, count: 0 },
  10036: { name: "Agnes Tachyon", stat: "w", title: "Tracen Academy", tier: null, count: 0 },
  10037: { name: "Air Shakur", stat: "w", title: "Tracen Academy", tier: null, count: 0 },
  10038: { name: "Eishin Flash", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10039: { name: "Smart Falcon", stat: "po", title: "Tracen Academy", tier: null, count: 0 },
  10040: { name: "Narita Taishin", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10041: { name: "Nishino Flower", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10042: { name: "Biko Pegasus", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10043: { name: "Marvelous Sunday", stat: "w", title: "Tracen Academy", tier: null, count: 0 },
  10044: { name: "Matikane Fukukitaru", stat: "w", title: "Tracen Academy", tier: null, count: 0 },
  10045: { name: "Meisho Doto", stat: "g", title: "Tracen Academy", tier: null, count: 0 },
  10046: { name: "Mejiro Dober", stat: "w", title: "Tracen Academy", tier: null, count: 0 },
  10047: { name: "Nice Nature", stat: "g", title: "Tracen Academy", tier: null, count: 0 },
  10048: { name: "King Halo", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10049: { name: "Fuji Kiseki", stat: "w", title: "Tracen Academy", tier: null, count: 0 },
  10050: { name: "Sweep Tosho", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10051: { name: "Twin Turbo", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10052: { name: "Daitaku Helios", stat: "po", title: "Tracen Academy", tier: null, count: 0 },
  10053: { name: "Ikuno Dictus", stat: "w", title: "Tracen Academy", tier: null, count: 0 },
  10054: { name: "Mejiro Palmer", stat: "g", title: "Tracen Academy", tier: null, count: 0 },
  10055: { name: "Kitasan Black", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10056: { name: "Satono Diamond", stat: "st", title: "Tracen Academy", tier: null, count: 0 },
  10057: { name: "Matikane Tannhauser", stat: "g", title: "Tracen Academy", tier: null, count: 0 },
  10058: { name: "Yaeno Muteki", stat: "po", title: "Tracen Academy", tier: null, count: 0 },
  10059: { name: "Zenno Rob Roy", stat: "st", title: "Tracen Academy", tier: null, count: 0 },
  10060: { name: "Riko Kashimoto Pal R", stat: "pa", title: "Tracen Academy", tier: null, count: 0 },
  10061: { name: "Seeking the Pearl", stat: "g", title: "Tracen Academy", tier: null, count: 0 },
  10062: { name: "Sakura Chiyono O", stat: "st", title: "Tracen Academy", tier: null, count: 0 },
  10063: { name: "Kawakami Princess", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  10064: { name: "Hish Akebono", stat: "g", title: "Tracen Academy", tier: null, count: 0 },
  10065: { name: "Bamboo Memory", stat: "po", title: "Tracen Academy", tier: null, count: 0 },
  10066: { name: "Shinko Windy", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },
  //10067: { name: null, stat: null, title: null, tier: null },
  //10068: { name: null, stat: null, title: null, tier: null },
  10069: { name: "Mejiro Ardan", stat: "w", title: "Tracen Academy", tier: null, count: 0 },
  10070: { name: "Tosen Jordan", stat: "st", title: "Tracen Academy", tier: null, count: 0 },
  //10071: { name: null, stat: null, title: null, tier: null },
  10072: { name: "Narita Brian", stat: "sp", title: "Tracen Academy", tier: null, count: 0 },

  20001: { name: "Fuji Kiseki", stat: "w", title: "Well Look Who's Home", tier: null, count: 0 },
  20002: { name: "Daiwa Scarlet", stat: "w", title: "Nothing Hard Work Can't Solve!", tier: null, count: 0 },
  20003: { name: "Hishi Amazon", stat: "po", title: "Reach to the Top!", tier: null, count: 0 },
  20004: { name: "Air Groove", stat: "g", title: "Nothing Escapes the Vice Prez", tier: null, count: 0 },
  20005: { name: "Agnes Digital", stat: "po", title: "Digital's Recharge Station", tier: null, count: 0 },
  20006: { name: "Biwa Hayahide", stat: "po", title: "Trial Initiation", tier: null, count: 0 },
  20007: { name: "Mayano Top Gun", stat: "st", title: "Cute + Cute = ?", tier: null, count: 0 },
  20008: { name: "Manhattan Cafe", stat: "st", title: "My Solo Drawn to Raindrop Drums", tier: null, count: 0 },
  20009: { name: "Mihono Bourbon", stat: "po", title: "Pal-Assisted Training", tier: null, count: 0 },
  20010: { name: "Mejiro Ryan", stat: "po", title: "On and Off the Court", tier: null, count: 0 },
  20011: { name: "Yukino Bijin", stat: "g", title: "City Girl 101", tier: null, count: 0 },
  20012: { name: "Agnes Tachyon", stat: "w", title: "Experimental Studies on Subject A", tier: null, count: 0 },
  20013: { name: "Eishin Flash", stat: "sp", title: "5:00 AM - Right on Schedule", tier: null, count: 0 },
  20014: { name: "Narita Taishin", stat: "sp", title: "Poolside High Tides", tier: null, count: 0 },
  20015: { name: "Marvelous Sunday", stat: "w", title: "A Marvelous Plan", tier: null, count: 0 },
  20016: { name: "Matikane Fukukitaru", stat: "w", title: "Fate's Forecast", tier: null, count: 0 },
  20017: { name: "Meisho Doto", stat: "g", title: "Fighting for Fortune", tier: null, count: 0 },
  20018: { name: "Mejiro Dober", stat: "w", title: "Ignore the Stares", tier: null, count: 0 },
  20019: { name: "Nice Nature", stat: "g", title: "It's Just Water", tier: null, count: 0 },
  20020: { name: "King Halo", stat: "sp", title: "First-Rate Plan", tier: null, count: 0 },
  20021: { name: "Aoi Kiryuin", stat: "pa", title: "Trainer's Teamwork", tier: null, count: 0 },
    //20022: { name: null, stat: "pa", title: "Trainer's Teamwork", tier: null },
  20023: { name: "Sweep Tosho", stat: "sp", title: "Lamplit Training of a Witch-to-be", tier: null, count: 0 },
  20024: { name: "Daitaku Helios", stat: "po", title: "Let's Get This Party Lit!", tier: null, count: 0 },
  20025: { name: "Ikuno Dictus", stat: "w", title: "Never Skip Warm-Ups", tier: null, count: 0 },
  20026: { name: "Nice Nature", stat: "w", title: "Messing Around", tier: null, count: 0 },
  20027: { name: "Nishino Flower", stat: "po", title: "Lifting Your Spirits", tier: null, count: 0 },
  20029: { name: "Seeking the Pearl", stat: "g", title: "The World's My Oyster", tier: null, count: 0 },
    //20030: { name: null, stat: "g", title: "The World's My Oyster", tier: null, count: 0 },
  20031: { name: "Shinko Windy", stat: "sp", title: "///WARNING GATE///", tier: null, count: 0 },
  //20032: { name: null},
  //20033: { name: null},
  20034: { name: "Mejiro Ardan", stat: "w", title: "My Heart Will Go On", tier: null, count: 0 },
  20035: { name: "Tosen Jordan", stat: "st", title: "The Perfect Book for You", tier: null, count: 0 },

  30001: { name: "Special Week", stat: "g", title: "The Brightest Star in Japan", tier: null, count: 0 },
  30002: { name: "Silence Suzuka", stat: "sp", title: "Beyond This Shining Moment", tier: null, count: 0 },
  30003: { name: "Takai Teio", stat: "sp", title: "Dream Big!", tier: null, count: 0 },
  30004: { name: "Gold Ship", stat: "st", title: "Breakaway Battleship", tier: null, count: 0 },
  30005: { name: "Vodka", stat: "po", title: "Wild Rider", tier: null, count: 0 },
  30006: { name: "Grass Wonder", stat: "g", title: "Fairest Fleur", tier: null, count: 0 },
  30007: { name: "El Condor Pasa", stat: "po", title: "Champion's Passion", tier: null, count: 0 },
  30008: { name: "Seiun Sky", stat: "st", title: "Foolproof Plan", tier: null, count: 0 },
  30009: { name: "Tamamo Cross", stat: "st", title: "Split the Sky White Lightning!", tier: null, count: 0 },
  30010: { name: "Fine Motion", stat: "w", title: "Wave of Gratitude", tier: "s", count: 0 },
  30011: { name: "Ines Fujin", stat: "g", title: "Watch My Star Fly!", tier: null, count: 0 },
  30012: { name: "Winning Ticket", stat: "g", title: "BNWinner!", tier: null, count: 0 },
  30013: { name: "Air Shakur", stat: "w", title: "7 More Centimeters", tier: null, count: 0 },
  30014: { name: "Gold City", stat: "sp", title: "Run (my) way", tier: null, count: 0 },
  30015: { name: "Sakura Bakushin O", stat: "st", title: "Eat Fast! Yum Fast!", tier: null, count: 0 },
  30016: { name: "Super Creek", stat: "st", title: "Piece of Mind", tier: "s", count: 0 },
  30017: { name: "Smart Falcon", stat: "po", title: "My Umadol Way!", tier: null, count: 0 },
  30018: { name: "Nishino Flower", stat: "sp", title: "Even the Littlest Bud", tier: null, count: 0 },
  30019: { name: "Haru Urara", stat: "g", title: "Urara's Day Off", tier: null, count: 0 },
  30020: { name: "Biko Pegasus", stat: "s", title: "Double Carrot Punch!", tier: null, count: 0 },
  30021: { name: "Tazuna Hayakawa", stat: "pa", title: "Tracen Reception", tier: null, count: 0 },
  30022: { name: "Mejiro McQueen", stat: "st", title: "Your Team Ace", tier: null, count: 0 },
  30023: { name: "Rice Shower", stat: "st", title: "Showered in Joy", tier: null, count: 0 },
  30024: { name: "Oguri Cap", stat: null, title: "Get Lots of Hugs For Me", tier: null, count: 0 },
  30025: { name: "Special Week", stat: "sp", title: "The Setting Sun and Rising Stars", tier: null, count: 0 },
  30026: { name: "Twin Turbo", stat: "sp", title: "Turbo Booooost!", tier: null, count: 0 },
  30027: { name: "Mejiro Palmer", stat: "g", title: "Go Ahead and Laugh", tier: null, count: 0 },
  30028: { name: "Kitasan Black", stat: "sp", title: "Fire at My Heels", tier: "s", count: 0 },
  30029: { name: "Satono Diamond", stat: "st", title: "The Will to Overtake", tier: null, count: 0 },
  30030: { name: "Matikane Tannhauser", stat: "g", title: "Just Keep Going", tier: null, count: 0 },
  30031: { name: "Yukino Bijin", stat: "w", title: "Hometown Cheers", tier: null, count: 0 },
  30032: { name: "Yaeno Muteki", stat: "po", title: "Fiery Discipline", tier: null, count: 0 },
  30033: { name: "Winning Tickket", stat: "po", title: "Dreams Do Come True!", tier: null, count: 0 },
  30034: { name: "Rice Shower", stat: "po", title: "Happiness Just around the Bend", tier: null, count: 0 },
  //30035: { name: null, stat: null, title: null, tier: null },
  30036: { name: "Riko Kashimoto", stat: "pa", title: "Planned Perfection", tier: null , count: 0},
  //30037: { name: null, stat: null, title: null, tier: null },
  30038: { name: "Sakura Chiyono O", stat: "st", title: "Peak Sakura Season", tier: null, count: 0 },
  30039: { name: "Kawakami Princess", stat: "sp", title: "Princess Bride", tier: null, count: 0 },
  30040: { name: "Hishi Akebono", stat: "g", title: "Who Wants the First Bite?", tier: null , count: 0},
  30041: { name: "Mejiro Dober", stat: "w", title: "My Thoughts My Desires", tier: null, count: 0 },
  30042: { name: "Bamboo Memory", stat: "po", title: "Head-on Fight!", tier: null, count: 0 },
  //30043: { name: null, stat: null, title: null, tier: null },
  30044: { name: "Narita Brian", stat: "sp", title: "Two Pieces", tier: null, count: 0 },
  30045: { name: "Sweep Tosho", stat: "sp", title: "It's All Mine!", tier: null, count: 0 },
  30046: { name: "Winning Ticket", stat: "st", title: "Full-Blown Tantrum", tier: null, count: 0 },
  30047: { name: "Daiwa Scarlet", stat: "po", title: "Mini Vacation", tier: null, count: 0 },
  30048: { name: "Mejiro Ryan", stat: "g", title: "Winning Pitch", tier: null, count: 0 },
  //30049: { name: null, stat: null, title: null, tier: null },
  //30050: { name: null, stat: null, title: null, tier: null },
  //30051: { name: null, stat: null, title: null, tier: null },
  //30052: { name: null, stat: null, title: null, tier: null },
  //30053: { name: null, stat: null, title: null, tier: null },
  30054: { name: "Nice Nature", stat: "w", title: "Daring to Dream", tier: null, count: 0 },
  30055: { name: "Seiun Sky", stat: "w", title: "Paint the Sky Red", tier: null, count: 0 },
  30056: { name: "King Halo", stat: "po", title: "Tonight We Watz", tier: null, count: 0 },
  30057: { name: "Gold Ship", stat: "sp", title: "That Time I Became the Strongest", tier: null, count: 0 },
  //30058: { name: null, stat: null, title: null, tier: null },
  //30059: { name: null, stat: null, title: null, tier: null },
  //30060: { name: null, stat: null, title: null, tier: null },
  //30061: { name: null, stat: null, title: null, tier: null },
  30062: { name: "Silence Suzuka", stat: "st", title: "Winning Dream", tier: null, count: 0 }
};

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
}

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


let deck = [];
let deckObj = {};
let deckHtmlObj = {};

let total_money_spent = 0;
let currentCarats=0;
let caratsTotal=0;
let found = false;
let intervalId = null;

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const capitalizeFirstLetterOfEachWord = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
};
const sanitizeValue = (str) => {
    return capitalizeFirstLetterOfEachWord(str.trim().toLowerCase());
}

// === Card Creation and Display Logic ===

function createCardElement(id, count) {
  const card = document.createElement("div");
  card.classList.add("uma-card-item");

  const cardName = umaSupportIds[id]?.name || "Unknown Card";
  const wikiName = cardName.replace(/ /g, "_").replace(/'/g, "").replace(/é/g, "e");
  const rarityDigit = getFirstDigit(id);

  card.innerHTML = `
    <a class="uma-card-link" target="_blank" rel="noopener noreferrer" href="https://umamusu.wiki/${wikiName}">
      <div class="uma-card-container ${rarityDigit === 3 ? 'ssr-glow' : ''}">
        <img class="uma-card-image" src="img/uma-support/${id}.png" alt="${cardName}" />
        <img class="uma-rarity-icon" src="img/utx_txt_rarity_0${rarityDigit}.png" alt="rarity" />
        <img class="uma-stat-icon" src="img/utx_ico_obtain_${umaSupportIds[id]?.stat}.png" alt="stat" />
        <span class="uma-card-count-badge">x${count}</span>
      </div>
      <div class="uma-card-label">
        <span>${cardName}</span>
      </div>
    </a>
  `;

  return card;
}

function createAnimatedCard2(id) {
  const card = document.createElement("div");
  card.classList.add("uma-card-item");

  const cardName = umaSupportIds[id]?.name || "Unknown Card";
  const wikiName = cardName.replace(/ /g, "_").replace(/'/g, "").replace(/é/g, "e");
  const rarityDigit = getFirstDigit(id);
  const count = deckHtmlObj[id]?.count || 1;

  card.innerHTML = `
    <a class="uma-card-link" target="_blank" rel="noopener noreferrer" href="https://umamusu.wiki/${wikiName}">
    <div class="card-inner">
      <div class="card-back">
        <img class="uma-card-image" src="img/card_back.png" alt="Card Back" />
      </div>
      <div class="card-front">
        <div class="uma-card-container ${rarityDigit === 3 ? 'ssr-glow' : ''}">
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
  const wikiName = cardName.replace(/ /g, "_").replace(/'/g, "").replace(/é/g, "e");
  const rarityDigit = getFirstDigit(id);
  const count = deckHtmlObj[id]?.count || 1;

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-back">
        <img class="uma-card-image" src="img/card_back.png" alt="Card Back" />
      </div>
      <div class="card-front">
        <div class="uma-card-container ${rarityDigit === 3 ? 'ssr-glow' : ''}">
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
    await new Promise(resolve => setTimeout(resolve, 50));

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
}

function resetDeck() {
    deck = [];
    deckObj = {};
    deckHtmlObj = {};
    total_money_spent = 0;
    currentCarats = parseInt(caratsInput.value, 10) || 0; // Use the value from the input field
    caratsTotal = 0;
    found = false;

    // Reset card counts
    for (let id in cardCount) {
        cardCount[id] = 0;
    }
    divOutput.innerHTML = "";
}



function stopAutoScout() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        console.log("Auto-scout stopped.");
    }
}

async function scoutForSupport(supportName="Kitasan Black") {
    if (found) return;

    // --- Helper Functions (nested to keep scope clean) ---
    const pullSupport = (rarity="R") => {
        let minId, maxId;
        if (rarity === "SSR") { minId = 30001; maxId = 30062; }
        else if (rarity === "SR") { minId = 20001; maxId = 20035; }
        else { minId = 10001; maxId = 10072; }

        let id = getRandomNumber(minId, maxId);
        let card = umaSupportIds[id];
        while (card === undefined) {
            id = getRandomNumber(minId, maxId);
            card = umaSupportIds[id];
        }
        cardCount[id] += 1;
        return id;
    }

    const addToDeck = (id) => {
        if (!(id in deckObj)){
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
    if (currentCarats < 1500 || currentCarats == 1500) {
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
            rarity = (randomInteger <= 3) ? "SSR" : "SR";
        }

        const id = pullSupport(rarity);
        addToDeck(id);
        pulledIds.push(id);
    }

    // RENDERING
    // Animate card reveal
    await revealCardsSequentially(pulledIds);

    // Update stats after pull
    renderSortedGrid();
    updateStatsDisplay();
    updateInventoryDisplay();

    // Check if target support pulled (The target is always the SSR version, ID starting with 3)
    for (let id of pulledIds) {
        if (
            umaSupportIds[id].name.toLowerCase() === supportName.toLowerCase() &&
            getFirstDigit(id) === 3
        ) {
            found = true;
            stopAutoScout();
            
            /*
            // Display a special Umamusume-style success message in the results area
            divPulled.innerHTML = `
                <div class="uma-success-message">
                    <h2>🎉 Congratulations! You got ${supportName}! 🎉</h2>
                    <img class="uma-banner-image" src="img/uma-support/${id}.png" alt="${supportName} acquired">
                    <p>Total Carats Used: <strong>${caratsTotal}</strong></p>
                    <p>Total Money Spent: <strong>$${total_money_spent.toFixed(2)}</strong></p>
                    <p>Total Pulls: <strong>${deck.length}</strong></p>
                </div>
            `;

            window.alert(`Got ${supportName}! Total money spent: $${total_money_spent.toFixed(2)}`);
            */

            // Prepend the victory message above the scout results grid
    const successBannerHTML = `
        <div class="uma-success-message">
            <h2>🎉 Congratulations! You got ${supportName}! 🎉</h2>
            <img class="uma-banner-image" src="img/uma-support/${id}.png" alt="${supportName} acquired">
            <p>Total Carats Used: <strong>${caratsTotal}</strong> | Total Money Spent: <strong>$${total_money_spent.toFixed(2)}</strong> | Total Pulls: <strong>${deck.length}</strong></p>
        </div>
    `;
    
    divPulled.insertAdjacentHTML("afterbegin", successBannerHTML);
            return;
        }
    }
}





// === Event Listeners and Initialization ===

// Initialize Support Dropdown
supportNameList.forEach(supportName => {
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
    if (isScouting){
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
    if (mode == 1){
        isScouting = true;
        runAutoScoutLoop(targetSupport);
    }
    
    

    if( mode == 2 ){
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

async function runAutoScoutingLoop2(targetSupport){
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


function initAutoScoutBtn(){
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
document.addEventListener('DOMContentLoaded', () => {
    carats = parseInt(caratsInput.value, 10) || 0;
    updateStatsDisplay();
});

function addResetButton(){
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
    .filter(id => cardCount[id] > 0)
    .map(id => Number(id));

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
  activeCards.forEach(id => {
    const cardNode = createCardElement(id, cardCount[id]);
    divOutput.appendChild(cardNode);
  });
}

async function render(){
    // RENDERING
    // Animate card reveal
    await revealCardsSequentially(pulledIds);

    // Update stats after pull
    renderSortedGrid();
    updateStatsDisplay();
    updateInventoryDisplay();
}

function main(){
    addResetFunctionality();
}

main();