function rowCounter({ placeHolder, movePointer, countdownTimer }) {
  const checkForWinner = {
    diagonalChips: [],
    verticalChips: [],
    horizontalChips: [],
  };

  const arrayOfChipNodes = [
    // row 6 - 6
    // index 0
    [null, null, null, null, null, null, null],
    // row 5 - 4
    // index 1
    [null, null, null, null, null, null, null],
    // row 4 - 2
    // index 2
    [null, null, null, null, null, null, null],
    // row 3
    // index 3
    [null, null, null, null, null, null, null],
    // row 2 + 2
    // index 4
    [null, null, null, null, null, null, null],
    // row 1 + 4
    // index 5
    [null, null, null, null, null, null, null],
  ];

  const objOfCounter = {
    columnOne: 0,
    columnTwo: 0,
    columnThree: 0,
    columnFour: 0,
    columnFive: 0,
    columnSix: 0,
    columnSeven: 0,
  };

  const obj = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
  };

  const objOfMethods = {
    // use objOfCounter and value of property of obj passed into
    // objOfMethods func call. For example {first,second, third etc}
    first: ({ first }) => {
      console.log(first);
      // there is no seventh row, return
      console.log(objOfCounter);
      if (objOfCounter.columnOne == 7) return;
      placeHolder({
        animateColumn: "animation-column-first",
        columnObj: objOfCounter,
        columnCounter: "columnOne",
        chipNodeColumnValue: first,
        childNodeValue: 0,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
      });
      // // add 1 to column counter
      // objOfCounter.columnOne += 1;
      // // get value of data-playerturn attr of main element with id "game-board-bg-selector"
      // const currentPlayer = document
      //   .getElementById("game-board-bg-selector")
      //   .getAttribute("data-playerturn");
      // // select first column
      // const firstColumn = document.getElementById("animation-column-first");
      // // access position in arrayOfChipNodes here
      // // console.log(
      // //   document.querySelector(
      // //     `#row-${objOfCounter.columnOne} [data-chipselector='${objOfCounter.columnOne}-${first}']`
      // //   )
      // // );

      // const chipNodeElement = document.querySelector(
      //   `#row-${objOfCounter.columnOne} [data-chipselector='${objOfCounter.columnOne}-${first}']`
      // );

      // // console.log(chipNodeElement.);
      // // set value of data-droppedposition attr based on current counter
      // firstColumn.setAttribute(
      //   "data-droppedposition",
      //   `${objOfCounter.columnOne}`
      // );
      // // show player chip
      // // row 6
      // if (objOfCounter.columnOne == 6) {
      //   console.log(chipNodeElement, "row 6");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 6 - 6
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 6][Number(column) - 1],
      //     "array node"
      //   );
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-6")
      //       .childNodes[0].setAttribute("data-playerchip", `${currentPlayer}`);
      //   }, 100);
      //   // set "data-droppedposition" as empty string
      //   setTimeout(() => {
      //     firstColumn.setAttribute("data-droppedposition", "");
      //   }, 150);
      // }

      // // row 5
      // if (objOfCounter.columnOne == 5) {
      //   console.log(chipNodeElement, "row 5");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 5 - 4
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 4][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1260 : 1310;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-5")
      //       .childNodes[0].setAttribute("data-playerchip", `${currentPlayer}`);
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1360 : 1410;

      //   setTimeout(() => {
      //     firstColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 4
      // if (objOfCounter.columnOne == 4) {
      //   console.log(chipNodeElement, "row 4");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 4 - 2
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 2][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1290 : 1340;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-4")
      //       .childNodes[0].setAttribute("data-playerchip", `${currentPlayer}`);
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1390 : 1440;

      //   setTimeout(() => {
      //     firstColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 3
      // if (objOfCounter.columnOne == 3) {
      //   console.log(chipNodeElement, "row 3");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 3
      //   console.log(
      //     arrayOfChipNodes[Number(row)][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1320 : 1370;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-3")
      //       .childNodes[0].setAttribute("data-playerchip", `${currentPlayer}`);
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1420 : 1470;

      //   setTimeout(() => {
      //     firstColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 2
      // if (objOfCounter.columnOne == 2) {
      //   console.log(chipNodeElement, "row 2");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 2 + 2
      //   console.log(
      //     arrayOfChipNodes[Number(row) + 2][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1350 : 1400;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-2")
      //       .childNodes[0].setAttribute("data-playerchip", `${currentPlayer}`);
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1450 : 1500;

      //   setTimeout(() => {
      //     firstColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 1
      // if (objOfCounter.columnOne == 1) {
      //   console.log(chipNodeElement, "row 1");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 1 + 4
      //   console.log(
      //     arrayOfChipNodes[Number(row) + 4][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1370 : 1420;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-1")
      //       .childNodes[0].setAttribute("data-playerchip", `${currentPlayer}`);
      //   }, time);
      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1520 : 1570;

      //   setTimeout(() => {
      //     firstColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }
    },
    second: ({ second }) => {
      console.log(second);
      // there is no seventh row, return
      if (objOfCounter.columnTwo == 7) return;
      placeHolder({
        animateColumn: "animation-column-second",
        columnObj: objOfCounter,
        columnCounter: "columnTwo",
        chipNodeColumnValue: second,
        childNodeValue: 1,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
      });
      // // add 1 to column counter
      // objOfCounter.columnTwo += 1;
      // // select second column
      // const secondColumn = document.getElementById("animation-column-second");

      // const chipNodeElement = document.querySelector(
      //   `#row-${objOfCounter.columnTwo} [data-chipselector='${objOfCounter.columnTwo}-${second}']`
      // );

      // // set value of data-droppedposition attr based on current counter
      // secondColumn.setAttribute(
      //   "data-droppedposition",
      //   `${objOfCounter.columnTwo}`
      // );
      // // show player chip
      // // row 6
      // if (objOfCounter.columnTwo == 6) {
      //   console.log(chipNodeElement, "row 6");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 6 - 6
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 6][Number(column) - 1],
      //     "array node"
      //   );
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-6")
      //       .childNodes[1].setAttribute("data-playerchip", "two");
      //   }, 100);
      //   // set "data-droppedposition" as empty string
      //   setTimeout(() => {
      //     secondColumn.setAttribute("data-droppedposition", "");
      //   }, 150);
      // }

      // // row 5
      // if (objOfCounter.columnTwo == 5) {
      //   console.log(chipNodeElement, "row 5");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 5 - 4
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 4][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1260 : 1310;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-5")
      //       .childNodes[1].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1360 : 1410;

      //   setTimeout(() => {
      //     secondColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 4
      // if (objOfCounter.columnTwo == 4) {
      //   console.log(chipNodeElement, "row 4");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 4 - 2
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 2][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1290 : 1340;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-4")
      //       .childNodes[1].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1390 : 1440;

      //   setTimeout(() => {
      //     secondColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 3
      // if (objOfCounter.columnTwo == 3) {
      //   console.log(chipNodeElement, "row 3");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 3
      //   console.log(
      //     arrayOfChipNodes[Number(row)][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1320 : 1370;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-3")
      //       .childNodes[1].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1420 : 1470;

      //   setTimeout(() => {
      //     secondColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 2
      // if (objOfCounter.columnTwo == 2) {
      //   console.log(chipNodeElement, "row 2");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 2 + 2
      //   console.log(
      //     arrayOfChipNodes[Number(row) + 2][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1350 : 1400;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-2")
      //       .childNodes[1].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1450 : 1500;

      //   setTimeout(() => {
      //     secondColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 1
      // if (objOfCounter.columnTwo == 1) {
      //   console.log(chipNodeElement, "row 1");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 1 + 4
      //   console.log(
      //     arrayOfChipNodes[Number(row) + 4][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1370 : 1420;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-1")
      //       .childNodes[1].setAttribute("data-playerchip", "two");
      //   }, time);
      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1520 : 1570;

      //   setTimeout(() => {
      //     secondColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }
    },
    third: ({ third }) => {
      console.log(third);
      // there is no seventh row, return
      if (objOfCounter.columnThree == 7) return;
      placeHolder({
        animateColumn: "animation-column-third",
        columnObj: objOfCounter,
        columnCounter: "columnThree",
        chipNodeColumnValue: third,
        childNodeValue: 2,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
      });
      // objOfCounter.columnThree += 1;

      // // select third column
      // const thirdColumn = document.getElementById("animation-column-third");

      // const chipNodeElement = document.querySelector(
      //   `#row-${objOfCounter.columnThree} [data-chipselector='${objOfCounter.columnThree}-${third}']`
      // );

      // // set value of data-droppedposition attr based on current counter
      // thirdColumn.setAttribute(
      //   "data-droppedposition",
      //   `${objOfCounter.columnThree}`
      // );
      // // show player chip
      // // row 6
      // if (objOfCounter.columnThree == 6) {
      //   console.log(chipNodeElement, "row 6");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 6 - 6
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 6][Number(column) - 1],
      //     "array node"
      //   );
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-6")
      //       .childNodes[2].setAttribute("data-playerchip", "two");
      //   }, 100);
      //   // set "data-droppedposition" as empty string
      //   setTimeout(() => {
      //     thirdColumn.setAttribute("data-droppedposition", "");
      //   }, 150);
      // }

      // // row 5
      // if (objOfCounter.columnThree == 5) {
      //   console.log(chipNodeElement, "row 5");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 5 - 4
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 4][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1260 : 1310;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-5")
      //       .childNodes[2].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1360 : 1410;

      //   setTimeout(() => {
      //     thirdColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 4
      // if (objOfCounter.columnThree == 4) {
      //   console.log(chipNodeElement, "row 4");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 4 - 2
      //   console.log(
      //     arrayOfChipNodes[Number(row) - 2][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1290 : 1340;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-4")
      //       .childNodes[2].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1390 : 1440;

      //   setTimeout(() => {
      //     thirdColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 3
      // if (objOfCounter.columnThree == 3) {
      //   console.log(chipNodeElement, "row 3");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 3
      //   console.log(
      //     arrayOfChipNodes[Number(row)][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1320 : 1370;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-3")
      //       .childNodes[2].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1420 : 1470;

      //   setTimeout(() => {
      //     thirdColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 2
      // if (objOfCounter.columnThree == 2) {
      //   console.log(chipNodeElement, "row 2");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 2 + 2
      //   console.log(
      //     arrayOfChipNodes[Number(row) + 2][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1350 : 1400;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-2")
      //       .childNodes[2].setAttribute("data-playerchip", "two");
      //   }, time);

      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1450 : 1500;

      //   setTimeout(() => {
      //     thirdColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }

      // // row 1
      // if (objOfCounter.columnThree == 1) {
      //   console.log(chipNodeElement, "row 1");
      //   const [row, column] = chipNodeElement
      //     .getAttribute("data-chipselector")
      //     .split("-");
      //   console.log(row, "row");
      //   console.log(column, "column");
      //   // row 1 + 4
      //   console.log(
      //     arrayOfChipNodes[Number(row) + 4][Number(column) - 1],
      //     "array node"
      //   );
      //   const time = window.innerWidth <= 378 ? 1370 : 1420;
      //   setTimeout(() => {
      //     document
      //       .getElementById("row-1")
      //       .childNodes[2].setAttribute("data-playerchip", "two");
      //   }, time);
      //   // set "data-droppedposition" as empty string
      //   const removeDroppedPositionTimer =
      //     window.innerWidth <= 378 ? 1520 : 1570;

      //   setTimeout(() => {
      //     thirdColumn.setAttribute("data-droppedposition", "");
      //   }, removeDroppedPositionTimer);
      // }
    },
    fourth: ({ fourth }) => {
      console.log(fourth);
      // there is no seventh row, return
      if (objOfCounter.columnFour == 7) return;
      placeHolder({
        animateColumn: "animation-column-fourth",
        columnObj: objOfCounter,
        columnCounter: "columnFour",
        chipNodeColumnValue: fourth,
        childNodeValue: 3,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
      });
    },
    fifth: ({ fifth }) => {
      console.log(fifth);
      // there is no seventh row, return
      if (objOfCounter.columnFive == 7) return;
      placeHolder({
        animateColumn: "animation-column-fifth",
        columnObj: objOfCounter,
        columnCounter: "columnFive",
        chipNodeColumnValue: fifth,
        childNodeValue: 4,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
      });
    },
    sixth: ({ sixth }) => {
      console.log(sixth);
      // there is no seventh row, return
      if (objOfCounter.columnSix == 7) return;
      placeHolder({
        animateColumn: "animation-column-sixth",
        columnObj: objOfCounter,
        columnCounter: "columnSix",
        chipNodeColumnValue: sixth,
        childNodeValue: 5,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
      });
    },
    seventh: ({ seventh }) => {
      console.log(seventh);
      // there is no seventh row, return
      if (objOfCounter.columnSeven == 7) return;
      placeHolder({
        animateColumn: "animation-column-seventh",
        columnObj: objOfCounter,
        columnCounter: "columnSeven",
        chipNodeColumnValue: seventh,
        childNodeValue: 6,
        arrayNodes: arrayOfChipNodes,
        countdownTimer,
      });
    },
  };

  return function innerFunc(event) {
    const columnClicked = event.target.getAttribute("data-column");
    movePointer({ columnClicked });

    console.log(columnClicked);
    if (columnClicked && objOfMethods[columnClicked]) {
      // clear setInterval
      const playersTurnTimer = JSON.parse(
        localStorage.getItem("stopCountdown")
      );
      if (playersTurnTimer) {
        // reset timer display to 30s
        document.getElementById("turn-countdown-selector").textContent = "30";
        // reset timer function
        clearInterval(playersTurnTimer);
      }
      objOfMethods[columnClicked]({
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
        fifth: 5,
        sixth: 6,
        seventh: 7,
      });
    }
  };
}

export const checking = rowCounter({
  placeHolder,
  movePointer,
  countdownTimer,
});

// obj for each node in our matrix
const objForNode = {
  // each direction should be an array
  // we can loop while player matches, the data-playerturn
  // of main element with id "game-board-bg-selector"
  direction: {
    left: {},
    topLeft: {},
    up: {},
  },
};

function placeHolder({
  animateColumn,
  columnObj,
  columnCounter,
  chipNodeColumnValue,
  childNodeValue,
  arrayNodes,
  countdownTimer,
}) {
  // get current player
  console.log("hello");
  const currentPlayerChip = document
    .getElementById("game-board-bg-selector")
    .getAttribute("data-playerturn");
  // add 1 to column counter
  columnObj[columnCounter] += 1;
  // get value of data-playerturn attr of main element with id "game-board-bg-selector"
  // const currentPlayer = document
  //   .getElementById("game-board-bg-selector")
  //   .getAttribute("data-playerturn");
  // select a column
  const selectedColumn = document.getElementById(`${animateColumn}`);
  // access position in arrayNodes here
  // console.log(
  //   document.querySelector(
  //     `#row-${columnObj[columnCounter]} [data-chipselector='${columnObj[columnCounter]}-${chipNodeColumnValue}']`
  //   )
  // );

  // const chipNodeElement = document.querySelector(
  //   `#row-${columnObj[columnCounter]} [data-chipselector='${columnObj[columnCounter]}-${chipNodeColumnValue}']`
  // );

  const chipNodeElement = document.getElementById(
    `row-${columnObj[columnCounter]}`
  ).children[chipNodeColumnValue - 1];

  // console.log(
  //   document.getElementById(`row-${columnObj[columnCounter]}`).children[
  //     chipNodeColumnValue - 1
  //   ]
  // );

  console.log(chipNodeElement, "chipNodeElement");
  // set value of data-droppedposition attr based on current counter
  selectedColumn.setAttribute(
    "data-droppedposition",
    `${columnObj[columnCounter]}`
  );
  // show player chip
  // row 6
  if (columnObj[columnCounter] == 6) {
    // each row has seven columns
    // chipNodeColumnValue use the value assigned to this variable
    // first: right, diagonalDownRight, down
    // second: left, right, diagonalDownRight, down
    // third: left, right, diagonalDownRight, down
    // fourth: left, right, diagonalDownRight, down, diagonalDownLeft
    // fifth: left, right, down, diagonalDownLeft
    // sixth: left, right, down, diagonalDownLeft
    // seventh: left, diagonalDownLeft, down

    // stop timer
    stopTimer({ getItemValue: "stopCountdown" });
    console.log(chipNodeElement, "row 6");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    // console.log(row, "row");
    // console.log(column, "column");
    // row 6 - 6
    // console.log(arrayNodes[Number(row) - 6][Number(column) - 1], "array node");
    const positionRow = Number(row) - 6;
    const positionColumn = Number(column) - 1;
    // console.log(position, "position");
    setPlayerChip({
      arrayNodes,
      positionRow,
      positionColumn,
      currentPlayerChip,
      row,
      column,
    });

    testingAlgorithm({ arrayNodes, positionRow, positionColumn });

    console.log(arrayNodes);
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-6")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayerChip}`
        );
    }, 100);
    // set "data-droppedposition" as empty string
    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
      // start timer
      countdownTimer(document.getElementById("turn-countdown-selector"));
    }, 150);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, 250);
  }

  // row 5
  if (columnObj[columnCounter] == 5) {
    // each row has seven columns
    // chipNodeColumnValue use the value assigned to this variable
    // first: right, diagonalDownRight, down
    // second: left, diagonalTopLeft, up, right, diagonalDownRight, down
    // third: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fourth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fifth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // sixth: diagonalDownLeft, left, up, right, down
    // seventh: diagonalDownLeft, left, up, down

    // stop timer
    stopTimer({ getItemValue: "stopCountdown" });
    console.log(chipNodeElement, "row 5");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    // console.log(row, "row");
    // console.log(column, "column");
    // row 5 - 4
    // console.log(arrayNodes[Number(row) - 4][Number(column) - 1], "array node");
    const positionRow = Number(row) - 4;
    const positionColumn = Number(column) - 1;
    // console.log(position, "position");
    setPlayerChip({
      arrayNodes,
      positionRow,
      positionColumn,
      currentPlayerChip,
      row,
      column,
    });

    testingAlgorithm({ arrayNodes, positionRow, positionColumn });

    console.log(arrayNodes);
    const time = window.innerWidth <= 378 ? 1260 : 1310;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-5")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayerChip}`
        );
    }, time);

    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1360 : 1410;

    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
      // start timer
      countdownTimer(document.getElementById("turn-countdown-selector"));
    }, time + 100);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }

  // row 4
  if (columnObj[columnCounter] == 4) {
    // each row has seven columns
    // chipNodeColumnValue use the value assigned to this variable
    // first: up, right, diagonalDownRight, down
    // second: diagonalDownLeft, left, up, diagonalTopRight, right, diagonalDownRight, down
    // third: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fourth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fifth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // sixth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // seventh: diagonalDownLeft, left, up, down

    // stop timer
    stopTimer({ getItemValue: "stopCountdown" });
    console.log(chipNodeElement, "row 4");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    // console.log(row, "row");
    // console.log(column, "column");
    // row 4 - 2
    // console.log(arrayNodes[Number(row) - 2][Number(column) - 1], "array node");
    const positionRow = Number(row) - 2;
    const positionColumn = Number(column) - 1;
    // console.log(position, "position");
    setPlayerChip({
      arrayNodes,
      positionRow,
      positionColumn,
      currentPlayerChip,
      row,
      column,
    });

    testingAlgorithm({ arrayNodes, positionRow, positionColumn });

    console.log(arrayNodes);
    const time = window.innerWidth <= 378 ? 1290 : 1340;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-4")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayerChip}`
        );
    }, time);

    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1390 : 1440;

    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
      // start timer
      countdownTimer(document.getElementById("turn-countdown-selector"));
    }, time + 100);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }

  // row 3
  if (columnObj[columnCounter] == 3) {
    // each row has seven columns
    // chipNodeColumnValue use the value assigned to this variable
    // first: up, diagonalTopRight, right, down
    // second: diagonalDownLeft, left, up, diagonalTopRight, right, diagonalDownRight, down
    // third: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fourth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fifth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // sixth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // seventh: left, diagonalTopLeft, up, down

    // stop timer
    stopTimer({ getItemValue: "stopCountdown" });
    console.log(chipNodeElement, "row 3");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    // console.log(row, "row");
    // console.log(column, "column");
    // row 3
    // console.log(arrayNodes[Number(row)][Number(column) - 1], "array node");
    const positionRow = Number(row);
    const positionColumn = Number(column) - 1;
    // console.log(position, "position");
    setPlayerChip({
      arrayNodes,
      positionRow,
      positionColumn,
      currentPlayerChip,
      row,
      column,
    });

    testingAlgorithm({ arrayNodes, positionRow, positionColumn });

    console.log(arrayNodes);
    const time = window.innerWidth <= 378 ? 1320 : 1370;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-3")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayerChip}`
        );
    }, time);

    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1420 : 1470;

    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
      // start timer
      countdownTimer(document.getElementById("turn-countdown-selector"));
    }, time + 100);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }

  // row 2
  if (columnObj[columnCounter] == 2) {
    // each row has seven columns
    // chipNodeColumnValue use the value assigned to this variable
    // first: up, diagonalTopRight, right, down
    // second: diagonalDownLeft, left, up, diagonalTopRight, right, down
    // third: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fourth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // fifth: diagonalDownLeft, left, diagonalTopLeft, up, diagonalTopRight, right, diagonalDownRight, down
    // sixth: left, diagonalTopLeft, up, right, diagonalDownRight, down
    // seventh: left, diagonalTopLeft, up, down

    // stop timer
    stopTimer({ getItemValue: "stopCountdown" });
    console.log(chipNodeElement, "row 2");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    // console.log(row, "row");
    // console.log(column, "column");
    // row 2 + 2
    // console.log(arrayNodes[Number(row) + 2][Number(column) - 1], "array node");

    const positionRow = Number(row) + 2;
    const positionColumn = Number(column) - 1;
    // console.log(position, "position");
    setPlayerChip({
      arrayNodes,
      positionRow,
      positionColumn,
      currentPlayerChip,
      row,
      column,
    });

    testingAlgorithm({ arrayNodes, positionRow, positionColumn });

    console.log(arrayNodes);
    const time = window.innerWidth <= 378 ? 1350 : 1400;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-2")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayerChip}`
        );
    }, time);

    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1450 : 1500;

    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
      // start timer
      countdownTimer(document.getElementById("turn-countdown-selector"));
    }, time + 100);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }

  // row 1
  if (columnObj[columnCounter] == 1) {
    // each row has seven columns
    // chipNodeColumnValue use the value assigned to this variable
    // first: up, diagonalTopRight, right
    // second: left, up, diagonalTopRight, right
    // third: left, up, diagonalTopRight, right
    // fourth: left, diagonalTopLeft, up, diagonalTopRight, right
    // fifth: left, diagonalTopLeft, up, right
    // sixth: left, diagonalTopLeft, up, right
    // seventh: left, diagonalTopLeft, up

    // stop timer
    stopTimer({ getItemValue: "stopCountdown" });
    console.log(chipNodeElement, "row 1");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    // console.log(row, "row");
    // console.log(column, "column");
    // row 1 + 4
    // console.log(arrayNodes[Number(row) + 4][Number(column) - 1], "array node");
    // console.log(typeof arrayNodes[Number(row) + 2][Number(column) - 1]);
    // console.log(
    //   Object.is(arrayNodes[Number(row) + 2][Number(column) - 1], null)
    // );
    // const position = [Number(row) + 4][Number(column) - 1];
    const positionRow = Number(row) + 4;
    const positionColumn = Number(column) - 1;
    // console.log(position, "position");
    setPlayerChip({
      arrayNodes,
      positionRow,
      positionColumn,
      currentPlayerChip,
      row,
      column,
    });

    testingAlgorithm({ arrayNodes, positionRow, positionColumn });

    console.log(arrayNodes);
    const time = window.innerWidth <= 378 ? 1370 : 1420;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-1")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayerChip}`
        );
    }, time);
    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1520 : 1570;

    // setTimeout(() => {
    //   selectedColumn.setAttribute("data-droppedposition", "");
    // }, removeDroppedPositionTimer);
    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
      // start timer
      countdownTimer(document.getElementById("turn-countdown-selector"));
    }, time + 150);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }
}

function changePlayerChip({ currentPlayerChip }) {
  // change data-playerturn value after animation
  // make this work with each column and row combination
  if (currentPlayerChip == "one") {
    // change value to "two"
    document
      .getElementById("game-board-bg-selector")
      .setAttribute("data-playerturn", "two");
  } else {
    // change value to "one"
    document
      .getElementById("game-board-bg-selector")
      .setAttribute("data-playerturn", "one");
  }
}

function movePointer({ columnClicked }) {
  // get data-column value then assign that value to data-chipdroplocation
  // of element with id "chip-drop-pointer-selector"
  const chipPointerElement = document.getElementById(
    "chip-drop-pointer-selector"
  );
  // assign value of columnClicked to chipPointerElement
  chipPointerElement.setAttribute("data-chipdroplocation", `${columnClicked}`);
}

function stopTimer({ getItemValue }) {
  const playersTurnTimer = JSON.parse(localStorage.getItem(getItemValue));
  if (playersTurnTimer) {
    clearInterval(playersTurnTimer);
  }
}

function countdownTimer(element) {
  let startingNumber = 30;
  // make the time value dynamic
  const stopInterval = setInterval(() => {
    console.log(startingNumber);
    startingNumber = startingNumber - 1;
    element.textContent = `${startingNumber}`;

    if (startingNumber === 0) {
      const stopIntervalDigit = JSON.parse(
        localStorage.getItem("stopCountdown")
      );
      element.textContent = `00`;
      clearInterval(stopIntervalDigit);
    }
  }, 1000);
  localStorage.setItem("stopCountdown", JSON.stringify(stopInterval));
}

function setPlayerChip({
  arrayNodes,
  positionRow,
  positionColumn,
  currentPlayerChip,
  row,
  column,
}) {
  if (
    typeof arrayNodes[positionRow][positionColumn] == "object" &&
    Object.is(arrayNodes[positionRow][positionColumn], null)
  ) {
    console.log("positionRow", positionRow);
    console.log("positionColumn", positionColumn);
    console.log(
      "arrayNodes[positionRow][positionColumn]",
      arrayNodes[positionRow][positionColumn]
    );
    console.log(
      document.getElementById(`row-${positionRow}`).children[positionColumn - 1]
    );
    console.log("hello this is chip.");
    // change value null to string "one" or "two"
    // needs to be an obj with player and position
    // with row and column we can target chip element to apply winning circle attr
    // arrayNodes[positionRow][positionColumn] = currentPlayerChip;
    arrayNodes[positionRow][positionColumn] = {
      playerChip: currentPlayerChip,
      chipPosition: [`${row}`, `${column}`],
    };
  }
}

function testingAlgorithm({ arrayNodes, positionRow, positionColumn }) {
  // get value at chip position
  console.log("this is testingAlgorithm function");
  console.log(arrayNodes[positionRow][positionColumn]);
  const chipObj = arrayNodes[positionRow][positionColumn];
  const [chipRow, chipColumn] = chipObj.chipPosition;
  // the position property in our obj at arrayNodes[positionRow][positionColumn]
  // will have the correct row and column we can use to select the chip element
  console.log(
    document.getElementById(`row-${chipRow}`).children[chipColumn - 1],
    "chip element in testingAlgorithm"
  );
}

// push string "one" or "two" in to array
// then run check to see if there are four consecutive "one" or "two"
function diagonalTopLeft({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[-][-]
}
function diagonalTopRight({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[-][+]
}
function diagonalBottomRight({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[+][+]
}
function diagonalBottomLeft({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[+][-]
}

function Up({ arrayNodes, positionRow, positionColumn }) {
  // check if item in array of nodes at dropped position is an string
  // arr[-][same]
  // positionRow is the index position of our matrix
  for (let index = positionRow; index !== 0; index--) {}
}
function right({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[same][+]
}
function down({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[+][same]
}
function left({ arrayNodes }) {
  // check if item in array of nodes at dropped position is an string
  // arr[same][-]
}

// make a recursive function

function testLoopGoingUp(array, row, column) {
  // loop through array add chip to result array if last value in array does not match currentVale of our loop
  // break
  const firstValue = array[row][column];
  const result = [firstValue];

  for (let index = row - 1; index != -1; index--) {
    // push value into array
    const currentValue = array[index][column];
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    if (currentValue == result[result.length - 1]) {
      result.push(currentValue);
    } else {
      return result;
    }
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    console.log(array);
  }
  return result;
}

function testLoopGoingDown(array, row, column) {
  // loop through array add chip to result array if last value in array does not match currentVale of our loop
  // break
  const firstValue = array[row][column];
  const result = [firstValue];

  for (let index = row + 1; index != array.length; index++) {
    // push value into array
    const currentValue = array[index][column];
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    if (currentValue == result[result.length - 1]) {
      result.push(currentValue);
    } else {
      return result;
    }
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    console.log(array);
  }
  return result;
}

function testLoopGoingLeft(array, row, column) {
  // loop through array add chip to result array if last value in array does not match currentVale of our loop
  // break
  const firstValue = array[row][column];
  const rowArray = array[row];
  const result = [firstValue];

  for (let index = column - 1; index != rowArray.length; index--) {
    // push value into array
    const currentValue = rowArray[index];
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    if (currentValue == result[result.length - 1]) {
      result.push(currentValue);
    } else {
      return result;
    }
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    console.log(array);
  }
  return result;
}

function testLoopGoingRight(array, row, column) {
  // loop through array add chip to result array if last value in array does not match currentVale of our loop
  // break
  const firstValue = array[row][column];
  const rowArray = array[row];
  const result = [firstValue];

  for (let index = column + 1; index != rowArray.length; index++) {
    // push value into array
    const currentValue = rowArray[index];
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    if (currentValue == result[result.length - 1]) {
      result.push(currentValue);
    } else {
      return result;
    }
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    console.log(array);
  }
  return result;
}

function goingUpLeft(array, row, column) {
  // loop through array add chip to result array if last value in array does not match currentVale of our loop
  // break
  const firstValue = array[row][column];
  const result = [firstValue];

  for (
    let index = row - 1, columnIndex = column - 1;
    index != -1;
    index--, columnIndex--
  ) {
    // push value into array
    const currentValue = array[index][columnIndex];
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    if (currentValue == result[result.length - 1]) {
      result.push(currentValue);
    } else {
      return result;
    }
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    console.log(array);
  }
  return result;
}

function goingDownRight(array, row, column) {
  // loop through array add chip to result array if last value in array does not match currentVale of our loop
  // break
  const firstValue = array[row][column];
  const result = [firstValue];

  for (
    let index = row + 1, columnIndex = column + 1;
    index < array.length;
    index++, columnIndex++
  ) {
    // push value into array
    const currentValue = array[index][columnIndex];
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    if (currentValue == result[result.length - 1]) {
      result.push(currentValue);
    } else {
      return result;
    }
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    console.log(array);
  }
  return result;
}

function goingUpRight(array, row, column) {
  // loop through array add chip to result array if last value in array does not match currentVale of our loop
  // break
  const firstValue = array[row][column];
  const result = [firstValue];

  for (
    let index = row - 1, columnIndex = column + 1;
    index != -1;
    index--, columnIndex++
  ) {
    // push value into array
    const currentValue = array[index][columnIndex];
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    if (currentValue == result[result.length - 1]) {
      result.push(currentValue);
    } else {
      return result;
    }
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    console.log(array);
  }
  return result;
}

function goingDownLeft(array, row, column) {
  // loop through array add chip to result array if last value in array does not match currentVale of our loop
  // break
  const firstValue = array[row][column];
  const result = [firstValue];

  for (
    let index = row + 1, columnIndex = column - 1;
    index < array.length;
    index++, columnIndex--
  ) {
    // push value into array
    const currentValue = array[index][columnIndex];
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    if (currentValue == result[result.length - 1]) {
      result.push(currentValue);
    } else {
      return result;
    }
    // console.log(previousValue);
    console.log(currentValue);
    console.log(result, "result");
    console.log(array);
  }
  return result;
}

function getValuesOfBothArrays(firstArray, secondArray) {
  // combine both arrays values into one array
  const combinedArrays = [...firstArray, ...secondArray];
  // copy first four values
  const firstFourValues = combinedArrays.slice(0, 4);
  // if array length is 3, combinedArrays.slice(0,4) will return an array with items at index 0,1,2
  // if length of array is == to 4 return the array
  if (firstFourValues.length == 4) {
    return firstFourValues;
  }
  // if the length is < 4 return string not connect four
  if (firstFourValues.length < 4) {
    return null;
  }
}

function connectFourChecker(...rest) {
  // get values of position of obj in array
  // use values to find element and apply winning circle attr
}

const testArray = [
  // row 6 - 6
  // index 0
  [null, null, "one", "two", "one", "one", "one"],
  // row 5 - 4
  // index 1
  [null, null, "one", "one", "one", "two", "two"],
  // row 4 - 2
  // index 2
  ["one", "two", "one", "one", null, null, null],
  // row 3
  // index 3
  ["tow", "one", "two", "two", null, null, null],
  // row 2 + 2
  // index 4
  [null, null, "two", "one", null, null, null],
  // row 1 + 4
  // index 5
  [null, null, null, null, null, null, null],
];

const anotherArray = [
  // row 6 - 6
  // index 0
  ["two", "one", "one", "two", "one", "one", "one"],
  // row 5 - 4
  // index 1
  ["two", "one", "one", "one", "one", "two", "two"],
  // row 4 - 2
  // index 2
  ["one", "two", "one", "one", "one", "one", "one"],
  // row 3
  // index 3
  ["two", "one", "two", "two", "one", "one", "two"],
  // row 2 + 2
  // index 4
  ["one", "two", "two", "one", "two", "two", "one"],
  // row 1 + 4
  // index 5
  ["two", "one", "two", "two", "two", "two", "two"],
];
