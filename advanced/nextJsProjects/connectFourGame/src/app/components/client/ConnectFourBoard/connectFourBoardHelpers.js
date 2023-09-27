function rowCounter(func) {
  const arrayOfChipNodes = [
    // row 6 - 6
    // index 0
    ["6-1", "6-2", "6-3", "6-4", "6-5", "6-6", "6-7"],
    // row 5 - 4
    // index 1
    ["5-1", "5-2", "5-3", "5-4", "5-5", "5-6", "5-7"],
    // row 4 - 2
    // index 2
    ["4-1", "4-2", "4-3", "4-4", "4-5", "5-6", "6-7"],
    // row 3
    // index 3
    ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7"],
    // row 2 + 2
    // index 4
    ["2-1", "2-2", "2-3", "2-4", "2-5", "2-6", "2-7"],
    // row 1 + 4
    // index 5
    ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7"],
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
      func({
        animateColumn: "animation-column-first",
        columnObj: objOfCounter,
        columnCounter: "columnOne",
        chipNodeColumnValue: first,
        childNodeValue: 0,
        arrayNodes: arrayOfChipNodes,
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
      func({
        animateColumn: "animation-column-second",
        columnObj: objOfCounter,
        columnCounter: "columnTwo",
        chipNodeColumnValue: second,
        childNodeValue: 1,
        arrayNodes: arrayOfChipNodes,
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
      func({
        animateColumn: "animation-column-third",
        columnObj: objOfCounter,
        columnCounter: "columnThree",
        chipNodeColumnValue: third,
        childNodeValue: 2,
        arrayNodes: arrayOfChipNodes,
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
      func({
        animateColumn: "animation-column-fourth",
        columnObj: objOfCounter,
        columnCounter: "columnFour",
        chipNodeColumnValue: fourth,
        childNodeValue: 3,
        arrayNodes: arrayOfChipNodes,
      });
    },
    fifth: ({ fifth }) => {
      console.log(fifth);
      // there is no seventh row, return
      if (objOfCounter.columnFive == 7) return;
      func({
        animateColumn: "animation-column-fifth",
        columnObj: objOfCounter,
        columnCounter: "columnFive",
        chipNodeColumnValue: fifth,
        childNodeValue: 4,
        arrayNodes: arrayOfChipNodes,
      });
    },
    sixth: ({ sixth }) => {
      console.log(sixth);
      // there is no seventh row, return
      if (objOfCounter.columnSix == 7) return;
      func({
        animateColumn: "animation-column-sixth",
        columnObj: objOfCounter,
        columnCounter: "columnSix",
        chipNodeColumnValue: sixth,
        childNodeValue: 5,
        arrayNodes: arrayOfChipNodes,
      });
    },
    seventh: ({ seventh }) => {
      console.log(seventh);
      // there is no seventh row, return
      if (objOfCounter.columnSeven == 7) return;
      func({
        animateColumn: "animation-column-seventh",
        columnObj: objOfCounter,
        columnCounter: "columnSeven",
        chipNodeColumnValue: seventh,
        childNodeValue: 6,
        arrayNodes: arrayOfChipNodes,
      });
    },
  };

  return function innerFunc(event) {
    console.log("hello");
    const columnClicked = event.target.getAttribute("data-column");
    console.log(columnClicked);
    if (columnClicked && objOfMethods[columnClicked]) {
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

export const checking = rowCounter(placeHolder);

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
}) {
  // get current player
  console.log("hello");
  const currentPlayerChip = document
    .getElementById("game-board-bg-selector")
    .getAttribute("data-playerturn");
  // add 1 to column counter
  columnObj[columnCounter] += 1;
  // get value of data-playerturn attr of main element with id "game-board-bg-selector"
  const currentPlayer = document
    .getElementById("game-board-bg-selector")
    .getAttribute("data-playerturn");
  // select a column
  const selectedColumn = document.getElementById(`${animateColumn}`);
  // access position in arrayNodes here
  // console.log(
  //   document.querySelector(
  //     `#row-${columnObj[columnCounter]} [data-chipselector='${columnObj[columnCounter]}-${chipNodeColumnValue}']`
  //   )
  // );

  const chipNodeElement = document.querySelector(
    `#row-${columnObj[columnCounter]} [data-chipselector='${columnObj[columnCounter]}-${chipNodeColumnValue}']`
  );

  // console.log(chipNodeElement.);
  // set value of data-droppedposition attr based on current counter
  selectedColumn.setAttribute(
    "data-droppedposition",
    `${columnObj[columnCounter]}`
  );
  // show player chip
  // row 6
  if (columnObj[columnCounter] == 6) {
    console.log(chipNodeElement, "row 6");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    console.log(row, "row");
    console.log(column, "column");
    // row 6 - 6
    console.log(arrayNodes[Number(row) - 6][Number(column) - 1], "array node");
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-6")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayer}`
        );
    }, 100);
    // set "data-droppedposition" as empty string
    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
    }, 150);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, 250);
  }

  // row 5
  if (columnObj[columnCounter] == 5) {
    console.log(chipNodeElement, "row 5");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    console.log(row, "row");
    console.log(column, "column");
    // row 5 - 4
    console.log(arrayNodes[Number(row) - 4][Number(column) - 1], "array node");
    const time = window.innerWidth <= 378 ? 1260 : 1310;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-5")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayer}`
        );
    }, time);

    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1360 : 1410;

    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
    }, time + 100);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }

  // row 4
  if (columnObj[columnCounter] == 4) {
    console.log(chipNodeElement, "row 4");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    console.log(row, "row");
    console.log(column, "column");
    // row 4 - 2
    console.log(arrayNodes[Number(row) - 2][Number(column) - 1], "array node");
    const time = window.innerWidth <= 378 ? 1290 : 1340;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-4")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayer}`
        );
    }, time);

    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1390 : 1440;

    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
    }, time + 100);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }

  // row 3
  if (columnObj[columnCounter] == 3) {
    console.log(chipNodeElement, "row 3");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    console.log(row, "row");
    console.log(column, "column");
    // row 3
    console.log(arrayNodes[Number(row)][Number(column) - 1], "array node");
    const time = window.innerWidth <= 378 ? 1320 : 1370;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-3")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayer}`
        );
    }, time);

    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1420 : 1470;

    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
    }, time + 100);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }

  // row 2
  if (columnObj[columnCounter] == 2) {
    console.log(chipNodeElement, "row 2");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    console.log(row, "row");
    console.log(column, "column");
    // row 2 + 2
    console.log(arrayNodes[Number(row) + 2][Number(column) - 1], "array node");
    const time = window.innerWidth <= 378 ? 1350 : 1400;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-2")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayer}`
        );
    }, time);

    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1450 : 1500;

    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
    }, time + 100);

    // change player
    setTimeout(() => {
      changePlayerChip({ currentPlayerChip });
    }, time + 250);
  }

  // row 1
  if (columnObj[columnCounter] == 1) {
    console.log(chipNodeElement, "row 1");
    const [row, column] = chipNodeElement
      .getAttribute("data-chipselector")
      .split("-");
    console.log(row, "row");
    console.log(column, "column");
    // row 1 + 4
    console.log(arrayNodes[Number(row) + 4][Number(column) - 1], "array node");
    const time = window.innerWidth <= 378 ? 1370 : 1420;
    // chip dropped animation
    setTimeout(() => {
      document
        .getElementById("row-1")
        .childNodes[childNodeValue].setAttribute(
          "data-playerchip",
          `${currentPlayer}`
        );
    }, time);
    // set "data-droppedposition" as empty string
    const removeDroppedPositionTimer = window.innerWidth <= 378 ? 1520 : 1570;

    // setTimeout(() => {
    //   selectedColumn.setAttribute("data-droppedposition", "");
    // }, removeDroppedPositionTimer);
    setTimeout(() => {
      selectedColumn.setAttribute("data-droppedposition", "");
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

function movePointer() {
  //
}

function diagonalTopLeft() {}
function diagonalTopRight() {}
function diagonalBottomRight() {}
function diagonalBottomLeft() {}

function Up() {}
function right() {}
function down() {}
function left() {}
