const include = async function(url) {
  let response = await fetch(url);
  let text = await response.text();
  (1, eval)(text);
  return text;
}
if(!window.initalized) {
  include("https://pixelmelt.github.io/starblast/src/ancientsEpicModdingUI.js");
}
var Shadow_X_1_plus_303 = '{"name":"Shadow X-1+","level":3,"model":3,"size":0.8,"zoom":0.8,"specs":{"shield":{"capacity":[90,130],"reload":[3,6]},"generator":{"capacity":[50,80],"reload":[15,20]},"ship":{"mass":70,"speed":[120,155],"rotation":[50,85],"acceleration":[130,150]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,20,30,40,20,20,40,40,40,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,63,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,13,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":70,"y":10,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,5,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[3,4,10,3],"propeller":true,"laser":{"damage":[3,4],"rate":6,"type":1,"speed":[180,210],"number":1}}},"wings":{"top":{"offset":{"x":0,"y":50,"z":5},"length":[30],"width":[70,30],"angle":[90],"position":[0,50],"texture":[4],"bump":{"position":10,"size":15}},"side_joins":{"offset":{"x":0,"y":30,"z":-3},"length":[100],"width":[100,40],"angle":[0],"position":[-50,50],"texture":[4],"bump":{"position":10,"size":10}}},"typespec":{"name":"Shadow X-1+","level":3,"model":3,"code":303,"specs":{"shield":{"capacity":[90,130],"reload":[3,6]},"generator":{"capacity":[50,80],"reload":[15,20]},"ship":{"mass":70,"speed":[120,155],"rotation":[50,85],"acceleration":[130,150]}},"shape":[1.6,1.582,1.552,1.313,1.138,1.009,0.919,0.75,0.688,0.708,0.733,1.157,1.297,1.359,1.392,1.431,1.696,1.975,2.192,2.258,1.661,1.429,1.58,1.628,1.705,1.835,1.705,1.628,1.58,1.429,1.661,2.258,2.192,1.975,1.696,1.431,1.392,1.359,1.297,1.157,0.733,0.708,0.688,0.75,0.919,1.009,1.138,1.313,1.552,1.582],"lasers":[{"x":1.12,"y":-0.16,"z":-0.32,"angle":0,"damage":[3,4],"rate":6,"type":1,"speed":[180,210],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.12,"y":-0.16,"z":-0.32,"angle":0,"damage":[3,4],"rate":6,"type":1,"speed":[180,210],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.258}}';
var Shadow_X_2_plus_505 = '{"name":"Shadow X-2+","level":5,"model":5,"size":1.1,"specs":{"shield":{"capacity":[150,220],"reload":[5,7]},"generator":{"capacity":[80,145],"reload":[23,33]},"ship":{"mass":125,"speed":[110,140],"rotation":[50,70],"acceleration":[140,160]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,30,20,20,30,30,30,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,3,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":12},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,5,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":50,"y":10,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1}}},"wings":{"top":{"doubleside":true,"offset":{"x":10,"y":60,"z":5},"length":[30],"width":[50,30],"angle":[60],"position":[0,50],"texture":[3],"bump":{"position":10,"size":10}},"side":{"doubleside":true,"offset":{"x":10,"y":70,"z":5},"length":[30],"width":[40,20],"angle":[-13],"position":[0,60],"texture":[63],"bump":{"position":10,"size":10}},"wings":{"offset":{"x":0,"y":35,"z":0},"length":[80],"width":[100,70],"angle":[0],"position":[-80,50],"texture":[4],"bump":{"position":10,"size":15}}},"typespec":{"name":"Shadow X-2+","level":5,"model":5,"code":505,"specs":{"shield":{"capacity":[150,220],"reload":[5,7]},"generator":{"capacity":[80,145],"reload":[23,33]},"ship":{"mass":125,"speed":[110,140],"rotation":[50,70],"acceleration":[140,160]}},"shape":[2.2,2.141,1.787,1.481,1.272,1.135,1.076,1.035,1.016,1.188,1.343,1.35,1.371,1.416,1.46,1.564,1.887,2.17,2.405,2.753,3.16,2.084,2.79,3.199,2.656,2.315,2.656,3.199,2.79,2.084,3.16,2.753,2.405,2.17,1.887,1.564,1.46,1.416,1.372,1.35,1.343,1.188,1.016,1.035,1.076,1.135,1.272,1.481,1.787,2.141],"lasers":[{"x":1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.199}}';
var Bastion_plus_703 = '{"name":"Bastion+","level":7,"model":3,"size":4,"specs":{"shield":{"capacity":[500,500],"reload":[20,20]},"generator":{"capacity":[500,500],"reload":[100,100]},"ship":{"mass":500,"speed":[80,80],"rotation":[15,15],"acceleration":[125,125]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":50,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-40,-50,-20,0,20,40,25],"z":[0,0,0,0,0,0,0]},"width":[0,5,22,18,16,15,0],"height":[0,2,12,16,16,15,0],"texture":[10,1,1,10,8,17],"propeller":true},"thrusters":{"section_segments":8,"offset":{"x":40,"y":43,"z":-24},"position":{"x":[0,0,0,0,0,0],"y":[-25,-20,0,20,40,30],"z":[0,0,0,0,0,0]},"width":[0,8,12,8,8,0],"height":[0,12,12,8,8,0],"texture":[63,2,2,2,17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":30,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,-10,0,11,35],"z":[-5,-3,-1,0,0]},"width":[0,5,10,10,0],"height":[0,3,5,7,0],"texture":[9]},"cannon1":{"section_segments":4,"offset":{"x":10,"y":-80,"z":1},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,2,4,7,3],"height":[0,1,3,6,0],"texture":[17,4],"laser":{"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1}},"cannon2":{"section_segments":4,"offset":{"x":42,"y":-129,"z":8},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,2,4,7,3],"height":[0,1,3,6,0],"texture":[17,4],"angle":3,"laser":{"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1}},"cannon3":{"section_segments":4,"offset":{"x":75,"y":-105,"z":-8},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,2,4,7,3],"height":[0,1,3,6,0],"texture":[17,4],"angle":5,"laser":{"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1}}},"wings":{"main1":{"doubleside":true,"offset":{"x":9,"y":15,"z":0},"length":[0,15,0,7],"width":[0,160,70,30,30],"angle":[0,20,0,-10],"position":[30,-20,30,30,30],"texture":[13,63,13,8],"bump":{"position":35,"size":5}},"main2":{"doubleside":true,"offset":{"x":30,"y":15,"z":0},"length":[0,15,0,20],"width":[0,80,90,200,30],"angle":[30,30,30,30],"position":[30,30,10,-45,30],"texture":[13,3,13,4],"bump":{"position":35,"size":7}},"main3":{"doubleside":true,"offset":{"x":0,"y":25,"z":-7},"length":[45,35,0,20],"width":[40,40,40,200,40],"angle":[-20,20,-20,-5],"position":[20,30,0,-30,10],"texture":[0,8,13,63],"bump":{"position":35,"size":20}}},"typespec":{"name":"Bastion+","level":7,"model":3,"code":703,"specs":{"shield":{"capacity":[500,500],"reload":[20,20]},"generator":{"capacity":[500,500],"reload":[100,100]},"ship":{"mass":500,"speed":[80,80],"rotation":[15,15],"acceleration":[125,125]}},"shape":[4.056,7.244,11.603,11.152,9.19,10.943,9.896,9.163,8.149,7.735,7.473,7.332,7.401,7.615,7.85,8.175,8.679,8.889,9.155,9.588,9.692,7.67,7.338,6.661,7.299,7.214,7.299,6.661,7.338,7.67,9.692,9.588,9.155,8.889,8.679,8.175,7.85,7.615,7.401,7.332,7.473,7.735,8.149,9.163,9.896,10.943,9.19,11.152,11.603,7.244],"lasers":[{"x":0.8,"y":-7.2,"z":0.08,"angle":0,"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.8,"y":-7.2,"z":0.08,"angle":0,"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.318,"y":-11.119,"z":0.64,"angle":3,"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.318,"y":-11.119,"z":0.64,"angle":-3,"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.93,"y":-9.197,"z":-0.64,"angle":5,"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.93,"y":-9.197,"z":-0.64,"angle":-5,"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":11.603}}';
var ships_plus = [Shadow_X_1_plus_303, Shadow_X_2_plus_505, Bastion_plus_703];
const hues = [120,180];
const vocabulary = [
  {text: "You", icon: "\u004e", key: "O"},
  {text: "Me", icon: "\u004f", key: "E"},
  {text: "Yes", icon: "\u004c", key: "Y"},
  {text: "No", icon: "\u004d", key: "N"},
  
  {text: "Good Game", icon: "\u00a3", key: "G"},
  {text: "No Prob", icon: "\u0047", key: "P"},
  {text: "Thanks", icon: "\u0041", key: "X"},
  {text: "Sorry", icon: "\u00a1", key: "S"},
  
  {text: "Raid", icon: "\u00bd", key: "R"},
  {text: "Heal", icon: "\u0037", key: "I"},
  {text: "Attack", icon: "\u0049", key: "A"},
  {text: "Defend", icon: "\u0025", key: "D"},
  
  {text: "Wait", icon: "\u0048", key: "T"},
  {text: "Hmm", icon: "\u004b", key: "Q"},
  {text: "Help", icon: "\u004a", key: "H"},
  {text: "Follow", icon: "\u0050", key: "F"},
  
  {text: "Mine", icon: "\u0044", key: "M"},
  {text: "Base", icon: "\u0034", key: "B"},
  {text: "Alien", icon: "\u0030", key: "L"},
  {text: "Kill", icon: "\u005b", key: "K"},
];
const max_aliens = 3;
const max_players = 200;
this.options = {
  root_mode: "team",
  crystal_value: 5,
  friendly_colors: 2,
  reset_tree: false,
  ships: ships_plus, 
  vocabulary: vocabulary,
  map_name: "CJ5B Wars I",
  map_id: 1145,
  lives: 5,
  max_players: max_players,
  mines_self_destroy: false,
  map_size: 120,
  healing_ratio: 1,
  station_size: 3,
  station_crystal_capacity: 1.5,
  station_repair_threshold: 0.1,
  station_regeneration: 1.8,
  hues: hues
};
var tips_button = {
  id: "tips",
  position: [0,0,0,0],
  clickable: true,
  visible: false,
  shortcut: "W"
};
var pause_ui = {
  id: "pause_ui",
  position: [0,0,100,100],
  clickable: false,
  visible: true,
  components: [
    {
      type: "box",
      position: [0,0,100,100],
      fill: "#00FF7F3F",
    },
    {
      type: "text",
      position: [14,19,70,20],
      value: "Battle Paused!",
      color: "#FFFFFFFF"
    },
    {
      type: "text",
      position: [17,39,66,4],
      value: "The Republic of CJ5B and G's Office Defense Force have reached an",
      color: "#FFFFFFFF",
      align: "left"
    },
    {
      type: "text",
      position: [17,44,75,4],
      value: "agreement to pause the battle to let the students finish their I.T. tasks.",
      color: "#FFFFFFFF",
      align: "left"
    },
    {
      type: "text",
      position: [17,49,27,4],
      value: "??min ??sec until resume...",
      color: "#FFFFFFFF",
      align: "left"
    },
    {
      type: "text",
      position: [17,54,13,4],
      value: "Did you know?",
      color: "#FFFFFFFF",
      align: "left"
    },
    {
      type: "text",
      position: [17,59,66,4],
      value: "OC is colorful.",
      color: "#FFFFFFFF",
      align: "left"
    }
  ]
};
const alien_levels = [0,0,0,1,1,2,2,3];
const alien_gems = [20,38,60,875];
const alien_weapons = [[null], [10, 20], [11, 21], [12]];
const generals = ["Klaus", "Lucina"];
const messages = [
  [
    "Welcome, student.\nThis is OC.\nPress [W] to continue...",
    "\nYour help is infinitely needed.\nDefend the Republic of CJ5B and blast G's office to rubble.\nPress [W] to continue...",
    "\nGood luck and fight proudly.\nPress [W] to continue...",
    "\nDeveloped by ᑕᖇEEᑭYᑕᖇEEᑭEᖇ(mcy)\nCredits to 𝐿.𝒞.𝒴.(lms), 𝐿𝐼𝒟𝒜𝒮𝐻𝒰(lhy) and ???(tyr) for ideas.\nPress [W] to close..."
  ],
  [
    "Welcome, student.\nThis is G.\nBe loyal to me or you will have to do 200 handouts every day.\nPress [W] to continue...",
    "\nYou will stand with us in this battle.\nDefend my office to the last man and destroy the Republic of CJ5B.\nPress [W] to continue...",
    "\nDeveloped by ᑕᖇEEᑭYᑕᖇEEᑭEᖇ(mcy)\nCredits to 𝐿.𝒞.𝒴.(lms), 𝐿𝐼𝒟𝒜𝒮𝐻𝒰(lhy) and ???(tyr) for ideas.\nPress [W] to close..."
  ]
];
const tips = [
  "OC is colorful.",
  "G is colorless.",
  "A purple piranha has 1750 health.",
  "The Bat-Defender is surprisingly good at combat, especially in asteriod fields.",
  "The X-Warrior mines faster than both of its upgrades, the T-Warrior and the Aetos.",
  "The Scorpion is as heavy as the Rock-Tower.",
  "A skilled U-Sniper without gems can kill an Odyssey or Aries with full gems.",
  "A FuryStar can theoretically turn 1080 degrees in one second.",
  "Try killing piranhas to get some interesting toys.",
  "The Barracuda has less energy regeneration than a Fly.",
  "The Vanguard has more DPS than it's upgrade, the FuryStar.",
  "The U-Sniper has more DPS than it's upgrade, the Scorpion.",
  "The Advanced-Fighter has more DPS than it's upgrade, the Shadow X-3.",
  "Healers are given one point for every ten shields they heal.",
  "The Barracuda is almost as heavy as the Odyssey.",
  "The Shadow X-3 can't fire all of its cannons at once due to the low energy cap.",
  "The Pioneer is the fastest tier 4, despite being the heaviest."
];
const player_names = [
  [
    "ᑕᖇEEᑭYᑕᖇEEᑭEᖇ",
    "CREEPYCREEPER",
    "JQY",
    "OC_YHF",
    "???",
    "？？？",
    "OC_ETHAN_SEP",
    "TOOTHPASTEUWU",
    "TOM THUNDER"
  ],
  [
    "𝐿.𝒞.𝒴.",
    "L.C.Y.",
    "L.C.Y",
    "𝐿𝐼𝒟𝒜𝒮𝐻𝒰",
    "LIDASHU",
    "OC_GG",
    "SAGIRI",
    "LAWERENCE",
    "LAWRENCE",
    "DAX",
    "BYJ"
  ]
];
const ship_names = [
  [""],
  ["", "Fly"],
  ["", "Delta-Fighter", "Trident"],
  ["", "Pulse-Fighter", "Side-Fighter", "Shadow X-1+", "Y-Defender"],
  ["", "Vanguard", "Mercury", "X-Warrior", "Side-Intercepter", "Pioneer", "Crusader"],
  ["", "U-Sniper", "FuryStar", "T-Warrior", "Aetos", "Shadow X-2+", "Howler", "Bat-Defender"],
  ["", "Advanced-Fighter", "Scorpion", "Marauder", "Condor", "A-Speedster", "Rock-Tower", "Barracuda", "O-Defender"],
  ["", "Odyssey", "Shadow X-3", "Bastion+", "Aries"]
];
const alien_colors = ["Green", "Yellow", "Red", "Purple"];
function getShipName(type) {
  return ship_names[Math.floor(type / 100)][type % 100];
}
this.event = function(event,game) {
  switch (event.name) {
    case "ship_destroyed":
      if(event.killer != null) {
        echo("<" + event.killer.name + "> destroyed <" + event.ship.name + ">'s [" + getShipName(event.ship.type) + "] using a [" + getShipName(event.killer.type) + "]!");
      } else {
        echo("<" + event.ship.name + "> died piloting a [" + getShipName(event.ship.type) + "]!");
      }
      break;
    case "alien_destroyed":
      if(event.killer != null) {
        echo("<" + event.killer.name + "> destroyed a [" + alien_colors[event.alien.level] + " Piranha] using a ["+ getShipName(event.killer.type) + "]!");
      } else {
        echo("A [" + alien_colors[event.alien.level] + " Piranha] died!");
      }
      break;
    case "ui_component_clicked":
      var ship = event.ship;
      var component = event.id;
      if(component == "tips") {
        if(ship.custom.tips < (messages[ship.team].length - 1)) {
          ship.custom.tips++;
          ship.instructorSays(messages[ship.team][ship.custom.tips], generals[ship.team]);
        } else {
          ship.hideInstructor();
        }
      }
      break;
  }
};
var player_x = [];
var player_y = [];
var player_xv = [];
var player_yv = [];
var player_angle = [];
var player_shield = [];
var player_energy = [];
var alien_x = [];
var alien_y = [];
var alien_xv = [];
var alien_yv = [];
var alien_shield = [];
const format = function(num) {
  num %= 100;
  return ((num < 10) ? "0" : "") + num;
};
const freeze = function(game) {
  for(var i = 0; i < game.ships.length; i++) {
    player_x[i] = game.ships[i].x;
    player_y[i] = game.ships[i].y;
    player_xv[i] = game.ships[i].vx;
    player_yv[i] = game.ships[i].vy;
    player_angle[i] = game.ships[i].r;
    player_shield[i] = game.ships[i].shield;
    player_energy[i] = game.ships[i].generator;
    game.ships[i].set({vx:0, vy:0, idle:true, invunerable:601});
  }
  for(var i = 0; i < game.aliens.length; i++) {
    alien_x[i] = game.aliens[i].x;
    alien_y[i] = game.aliens[i].y;
    alien_xv[i] = game.aliens[i].vx;
    alien_yv[i] = game.aliens[i].vy;
    alien_shield[i] = game.aliens[i].shield;
    game.aliens[i].set({vx:0, vy:0});
  }
  var sec = Math.floor((game.custom.pauseUntil - game.step) / 60);
  pause_ui.components[4].value = game.custom.pauseUntil == -1 ? "??min ??sec until resume..." : (format(Math.floor(sec / 60)) + "min " + format(sec % 60) + "sec until resume...");
  pause_ui.components[6].value = tips[Math.floor(game.step / 600) % tips.length];
  pause_ui.position = [0,0,100,100];
  game.setUIComponent(pause_ui);
};
const unfreeze = function(game) {
  pause_ui.position = [0,0,0,0];
  game.setUIComponent(pause_ui);
  for(var i = 0; i < game.ships.length; i++) {
    game.ships[i].set({x:player_x[i], y:player_y[i], vx:player_xv[i], vy:player_yv[i], angle:player_angle[i], shield:player_shield[i], generator:player_energy[i], idle:false, invnerable:0});
  }
  for(var i = 0; i < game.aliens.length; i++) {
    game.aliens[i].set({x:alien_x[i], y:alien_y[i], vx:alien_xv[i], vy:alien_yv[i], shield:alien_shield[i]});
  }
};
this.tick = function(game) {
  if(game.step == 216000) {
    game.custom.pauseUntil = 234000;
  }
  if(game.custom.pauseUntil == -1 || game.custom.pauseUntil > game.step) {
    if(!game.custom.pauseFlag) {
      game.custom.pauseFlag = true;
      freeze(game);
    }
    for(var i = 0; i < game.ships.length; i++) {
      game.ships[i].set({x:player_x[i], y:player_y[i], vx:0, vy:0, angle:player_angle[i], shield:player_shield[i], generator:player_energy[i]});
    }
    for(var i = 0; i < game.aliens.length; i++) {
      game.aliens[i].set({x:alien_x[i], y:alien_y[i], vx:0, vy:0, shield:alien_shield[i]});
    }
    if(game.step % 60 == 0) {
      var sec = Math.floor((game.custom.pauseUntil - game.step) / 60);
      pause_ui.components[4].value = game.custom.pauseUntil == -1 ? "??min ??sec until resume..." : (format(Math.floor(sec / 60)) + "min " + format(sec % 60) + "sec until resume...");
      game.setUIComponent(pause_ui);
    }
    if(game.step % 600 == 0) {
      pause_ui.components[6].value = tips[Math.floor(game.step / 600) % tips.length];
      for(var i = 0; i < game.ships.length; i++) {
        game.ships[i].set({invulnerable:601});
      }
    }
  } else {
    if(game.custom.pauseFlag) {
      game.custom.pauseFlag = false;
      unfreeze(game);
    }
    if(game.step % 60 == 0) {
      for(var i = 0; i < game.ships.length; i++) {
        if(game.ships[i].custom.tips == undefined) {
          var team = -1;
          for(var j = 0; j < player_names.length; j++) {
            var flag = false;
            for(var k = 0; k < player_names[j].length; k++) {
              if(game.ships[i].name == player_names[j][k]) {
                team = j;
                flag = true;
                break;
              }
            }
            if(flag) {
              break;
            }
          }
          if(team != -1) {
            game.ships[i].set({team:team, hue:hues[team]});
          } else {
            team = game.ships[i].team;
          }
          game.ships[i].custom.tips = 0;
          game.ships[i].instructorSays(messages[team][0], generals[team]);
          game.ships[i].setUIComponent(tips_button);
        }
      }
    }
    if(game.step % 600 == 0) {
      if(game.aliens.length < Math.min(3, Math.max(1,game.ships.length))) {
        var max_player_level = 0;
        for(var i = 0; i < game.ships.length; i++) {
          max_player_level = Math.max(max_player_level, Math.floor(game.ships[i].type / 100));
        }
        var weapons_list = alien_weapons[alien_levels[max_player_level]];
        game.addAlien({x:0, y:0, code:16, level: alien_levels[max_player_level], crystal_drop: alien_gems[alien_levels[max_player_level]], weapon_drop: weapons_list[Math.floor(Math.random() * weapons_list.length)]});
      }
    }
  }
};
for(var i = 0; i < max_players; i++) {
  player_x.push(0);
  player_y.push(0);
  player_angle.push(0);
  player_shield.push(0);
  player_energy.push(0);
}
for(var i = 0; i < max_aliens; i++) {
  alien_x.push(0);
  alien_y.push(0);
  alien_shield.push(0);
}
game.custom.pauseUntil = 0;
game.custom.pauseFlag = false;
var oc = {
  id: "oc",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/img/OC.jpg",
  transparent: true
};
var umarksman = {
  id: "umarksman",
  obj: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/obj/U-Marksman.obj",
  diffuse: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture_blue2.png",
  emissive:"https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_emissive_texture.png",
  shininess: 0,
  emissiveColor: 0x0000FF,
  specularColor: 0x4080FF,
  transparent: false,
  bump: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png"
};
var ufusion = {
  id: "ufusion",
  obj: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/obj/U-Fusion.obj",
  diffuse: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png",
  emissive:"https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_emissive_texture.png",
  shininess: 0,
  emissiveColor: 0xFF0000,
  specularColor: 0x4080FF,
  transparent: false,
  bump: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png"
};
var g = {
  id: "g",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/img/G.jpg",
  transparent: true
};
var shadowx27 = {
  id: "shadowx27",
  obj: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/obj/Shadow%20X-27.obj",
  diffuse: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture_blue2.png",
  emissive:"https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_emissive_texture.png",
  shininess: 0,
  emissiveColor: 0x0000FF,
  specularColor: 0x4080FF,
  transparent: false,
  bump: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png"
};
var heartbreaker = {
  id: "heartbreaker",
  obj: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/obj/Heartbreaker.obj",
  diffuse: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png",
  emissive:"https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_emissive_texture.png",
  shininess: 0,
  emissiveColor: 0xFF0000,
  specularColor: 0x4080FF,
  transparent: false,
  bump: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png"
};
var oc2 = {
  id: "oc2",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/img/OC2.jpg",
  transparent: true
};
var rocket = {
  id: "rocket",
  obj: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/obj/Rocket.obj",
  diffuse: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture_blue2.png",
  emissive:"https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_emissive_texture.png",
  shininess: 0,
  emissiveColor: 0x0000FF,
  specularColor: 0x4080FF,
  transparent: false,
  bump: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png"
};
var heavymine = {
  id: "heavymine",
  obj: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/obj/Heavy%20Mine.obj",
  diffuse: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png",
  emissive:"https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_emissive_texture.png",
  shininess: 0,
  emissiveColor: 0xFF0000,
  specularColor: 0x4080FF,
  transparent: false,
  bump: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png"
};
var attackpod = {
  id: "attackpod",
  obj: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/obj/Attack%20Pod.obj",
  diffuse: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture_green.png",
  emissive:"https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_emissive_texture.png",
  shininess: 0,
  emissiveColor: 0xFF0000,
  specularColor: 0x4080FF,
  transparent: false,
  bump: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png"
};
var g2 = {
  id: "g2",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/img/G2.jpg",
  transparent: true
};
var missile = {
  id: "missile",
  obj: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/obj/Missile.obj",
  diffuse: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture_blue2.png",
  emissive:"https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_emissive_texture.png",
  shininess: 0,
  emissiveColor: 0x0000FF,
  specularColor: 0x4080FF,
  transparent: false,
  bump: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png"
};
var spacemine = {
  id: "spacemine",
  obj: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/obj/Space%20Mine.obj",
  diffuse: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png",
  emissive:"https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_emissive_texture.png",
  shininess: 0,
  emissiveColor: 0xFF0000,
  specularColor: 0x4080FF,
  transparent: false,
  bump: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png"
};
var defensepod = {
  id: "defensepod",
  obj: "https://raw.githubusercontent.com/Maxsh001/CJ5B_Wars/main/res/obj/Defense%20Pod.obj",
  diffuse: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture_green.png",
  emissive:"https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_emissive_texture.png",
  shininess: 0,
  emissiveColor: 0xFF0000,
  specularColor: 0x4080FF,
  transparent: false,
  bump: "https://raw.githubusercontent.com/StarblastFinalizer/StarblastModding/master/ship_lambert_texture.png"
};
game.setObject({
  id: "oc",
  type:oc,
  position:{x:75, y:-25, z:-25},
  scale:{x:-20, y:-30, z:-20},
  rotation:{x:0, y:0, z:0}
});
game.setObject({
  id: "umarksman",
  type:umarksman,
  position:{x:30 * Math.cos((Math.PI * 2) / 6) + 75, y:-30 * Math.sin((Math.PI * 2) / 6) - 25, z:-20},
  scale:{x:15 / 2, y:15 / 2, z:15 / 2},
  rotation:{x:-0.4, y:0, z:(Math.PI * 2) / 8 * 3}
});
game.setObject({
  id: "ufusion",
  type:ufusion,
  position:{x:-30 * Math.cos((Math.PI * 2) / 6) + 75, y:-30 * Math.sin((Math.PI * 2) / 6) - 25, z:-20},
  scale:{x:17 / 2, y:17 / 2, z:17 / 2},
  rotation:{x:-0.4, y:0, z:(Math.PI * 2) / 8}
});
game.setObject({
  id: "g",
  type:g,
  position:{x:-75, y:25, z:-25},
  scale:{x:-20, y:-25, z:-20},
  rotation:{x:0, y:0, z:0}
});
game.setObject({
  id: "shadowx27",
  type:shadowx27,
  position:{x:30 * Math.cos((Math.PI * 2) / 6) - 75, y:-30 * Math.sin((Math.PI * 2) / 6) + 25, z:-20},
  scale:{x:22 / 2, y:22 / 2, z:22 / 2},
  rotation:{x:-0.4, y:0, z:(Math.PI * 2) / 8 * 3}
});
game.setObject({
  id: "heartbreaker",
  type:heartbreaker,
  position:{x:-30 * Math.cos((Math.PI * 2) / 6) - 75, y:-30 * Math.sin((Math.PI * 2) / 6) + 25, z:-20},
  scale:{x:17 / 2, y:17 / 2, z:17 / 2},
  rotation:{x:-0.4, y:0, z:(Math.PI * 2) / 8}
});
game.setObject({
  id: "oc2",
  type:oc2,
  position:{x:-25, y:-75, z:-25},
  scale:{x:-25, y:-25, z:-20},
  rotation:{x:0, y:0, z:0}
});
game.setObject({
  id: "rocket",
  type:rocket,
  position:{x:30 * Math.cos((Math.PI * 2) / 6) - 25, y:-25 * Math.sin((Math.PI * 2) / 6) - 75, z:-20},
  scale:{x:22 / 2, y:22 / 2, z:22 / 2},
  rotation:{x:-0.4, y:0, z:(Math.PI * 2) / 8 * 3}
});
game.setObject({
  id: "heavymine",
  type:heavymine,
  position:{x:0 * Math.cos((Math.PI * 2) / 6) - 25, y:-35 * Math.sin((Math.PI * 2) / 6) - 75, z:-20},
  scale:{x:11 / 2, y:11 / 2, z:11 / 2},
  rotation:{x:-0.4, y:0, z:(Math.PI * 2) / 8 * 2}
});
game.setObject({
  id: "attackpod",
  type:attackpod,
  position:{x:-30 * Math.cos((Math.PI * 2) / 6) - 25, y:-25 * Math.sin((Math.PI * 2) / 6) - 75, z:-20},
  scale:{x:17 / 2, y:17 / 2, z:17 / 2},
  rotation:{x:-0.4, y:0, z:(Math.PI * 2) / 8}
});
game.setObject({
  id: "g2",
  type:g2,
  position:{x:25, y:75, z:-25},
  scale:{x:-25, y:-25, z:-20},
  rotation:{x:0, y:0, z:0}
});
game.setObject({
  id: "missile",
  type:missile,
  position:{x:30 * Math.cos((Math.PI * 2) / 6) + 25, y:-25 * Math.sin((Math.PI * 2) / 6) + 75, z:-20},
  scale:{x:22 / 2, y:22 / 2, z:22 / 2},
  rotation:{x:-0.4, y:0, z:(Math.PI * 2) / 8 * 3}
});
game.setObject({
  id: "spacemine",
  type:spacemine,
  position:{x:0 * Math.cos((Math.PI * 2) / 6) + 25, y:-35 * Math.sin((Math.PI * 2) / 6) + 75, z:-20},
  scale:{x:11 / 2, y:11 / 2, z:11 / 2},
  rotation:{x:-0.4, y:0, z:(Math.PI * 2) / 8 * 2}
});
game.setObject({
  id: "defensepod",
  type:defensepod,
  position:{x:-30 * Math.cos((Math.PI * 2) / 6) + 25, y:-25 * Math.sin((Math.PI * 2) / 6) + 75, z:-20},
  scale:{x:17 / 2, y:17 / 2, z:17 / 2},
  rotation:{x:-0.4, y:0, z:(Math.PI * 2) / 8}
});
