const shell = require("shelljs");
const sleep = require("system-sleep");

// # 350 height
// # 586

// # 236

// 463

// 113

let navbarHeight = 350;
let rowHeight = 236;
let midScreenX = 553;
let keyboardFocusY = 2257;
let sendX = 1011;
let sendY = 1472;
let swipeStartY = 2000;
let swipeTime = 3000;
let slideRowCount = 7;

// Computed Variables
let startY = navbarHeight + rowHeight / 2;
let currentY = startY;

for (let i = 0; i < 3; i++) {
  if (i != 0 && i % slideRowCount == 0) {
    shell.exec(
      `adb shell input swipe ${midScreenX} ${swipeStartY} ${midScreenX} ${navbarHeight} ${swipeTime}`
    );
    currentY = startY;
  }
  shell.exec(`adb shell input tap ${midScreenX} ${currentY}`); // inside
  sleep(1000);
  shell.exec(`adb shell input tap ${midScreenX} ${keyboardFocusY}`); // focus keyboard
  shell.exec("adb shell input text 'hello%sfrom%sbot'"); // input text
  shell.exec(`adb shell input tap ${sendX} ${sendY}`); // enter
  shell.exec("adb shell input keyevent 4"); // back
  shell.exec("adb shell input keyevent 4"); // back
  currentY += rowHeight;
  sleep(1000);
}
