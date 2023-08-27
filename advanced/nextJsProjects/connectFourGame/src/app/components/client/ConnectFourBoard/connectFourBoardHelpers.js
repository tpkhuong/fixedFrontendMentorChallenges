function rowCounter() {
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

  function testing({ first, second, third, fourth, fifth, sixth, seventh }) {
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);
    console.log(fifth);
    console.log(sixth);
    console.log(seventh);
  }

  const objOfMethods = {
    // use objOfCounter and value of property of obj passed into
    // objOfMethods func call. For example {first,second, third etc}
    first: ({ first }) => {
      console.log(first);
      // there is no seventh row, return
      console.log(objOfCounter);
      if (objOfCounter.columnOne == 7) return;
      // add 1 to column counter
      objOfCounter.columnOne += 1;
      // select first column
      const firstColumn = document.getElementById("animation-column-first");
      // access position in arrayOfChipNodes here
      // console.log(
      //   document.querySelector(
      //     `#row-${objOfCounter.columnOne} [data-chipselector='${objOfCounter.columnOne}-${first}']`
      //   )
      // );

      const chipNodeElement = document.querySelector(
        `#row-${objOfCounter.columnOne} [data-chipselector='${objOfCounter.columnOne}-${first}']`
      );

      // console.log(chipNodeElement.);
      // set value of data-droppedposition attr based on current counter
      firstColumn.setAttribute(
        "data-droppedposition",
        `${objOfCounter.columnOne}`
      );
      // show player chip
      // row 6
      if (objOfCounter.columnOne == 6) {
        console.log(chipNodeElement, "row 6");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 6 - 6
        console.log(
          arrayOfChipNodes[Number(row) - 6][Number(column) - 1],
          "array node"
        );
        setTimeout(() => {
          alert("make this dynamic");
          document
            .getElementById("row-6")
            .childNodes[0].setAttribute("data-playerchip", "two");
        }, 100);
        // set "data-droppedposition" as empty string
        setTimeout(() => {
          firstColumn.setAttribute("data-droppedposition", "");
        }, 150);
      }

      // row 5
      if (objOfCounter.columnOne == 5) {
        console.log(chipNodeElement, "row 5");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 5 - 4
        console.log(
          arrayOfChipNodes[Number(row) - 4][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1260 : 1310;
        setTimeout(() => {
          document
            .getElementById("row-5")
            .childNodes[0].setAttribute("data-playerchip", "two");
        }, time);

        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1360 : 1410;

        setTimeout(() => {
          firstColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }

      // row 4
      if (objOfCounter.columnOne == 4) {
        console.log(chipNodeElement, "row 4");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 4 - 2
        console.log(
          arrayOfChipNodes[Number(row) - 2][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1290 : 1340;
        setTimeout(() => {
          document
            .getElementById("row-4")
            .childNodes[0].setAttribute("data-playerchip", "two");
        }, time);

        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1390 : 1440;

        setTimeout(() => {
          firstColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }

      // row 3
      if (objOfCounter.columnOne == 3) {
        console.log(chipNodeElement, "row 3");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 3
        console.log(
          arrayOfChipNodes[Number(row)][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1320 : 1370;
        setTimeout(() => {
          document
            .getElementById("row-3")
            .childNodes[0].setAttribute("data-playerchip", "two");
        }, time);

        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1420 : 1470;

        setTimeout(() => {
          firstColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }

      // row 2
      if (objOfCounter.columnOne == 2) {
        console.log(chipNodeElement, "row 2");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 2 + 2
        console.log(
          arrayOfChipNodes[Number(row) + 2][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1350 : 1400;
        setTimeout(() => {
          document
            .getElementById("row-2")
            .childNodes[0].setAttribute("data-playerchip", "two");
        }, time);

        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1450 : 1500;

        setTimeout(() => {
          firstColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }

      // row 1
      if (objOfCounter.columnOne == 1) {
        console.log(chipNodeElement, "row 1");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 1 + 4
        console.log(
          arrayOfChipNodes[Number(row) + 4][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1370 : 1420;
        setTimeout(() => {
          document
            .getElementById("row-1")
            .childNodes[0].setAttribute("data-playerchip", "two");
        }, time);
        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1520 : 1570;

        setTimeout(() => {
          firstColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }
    },
    second: ({ second }) => {
      console.log(second);
      // there is no seventh row, return
      if (objOfCounter.columnTwo == 7) return;
      // add 1 to column counter
      objOfCounter.columnTwo += 1;
      // select second column
      const secondColumn = document.getElementById("animation-column-second");

      const chipNodeElement = document.querySelector(
        `#row-${objOfCounter.columnTwo} [data-chipselector='${objOfCounter.columnTwo}-${second}']`
      );

      // set value of data-droppedposition attr based on current counter
      secondColumn.setAttribute(
        "data-droppedposition",
        `${objOfCounter.columnTwo}`
      );
      // show player chip
      // row 6
      if (objOfCounter.columnTwo == 6) {
        console.log(chipNodeElement, "row 6");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 6 - 6
        console.log(
          arrayOfChipNodes[Number(row) - 6][Number(column) - 1],
          "array node"
        );
        setTimeout(() => {
          document
            .getElementById("row-6")
            .childNodes[1].setAttribute("data-playerchip", "two");
        }, 100);
        // set "data-droppedposition" as empty string
        setTimeout(() => {
          secondColumn.setAttribute("data-droppedposition", "");
        }, 150);
      }

      // row 5
      if (objOfCounter.columnTwo == 5) {
        console.log(chipNodeElement, "row 5");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 5 - 4
        console.log(
          arrayOfChipNodes[Number(row) - 4][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1260 : 1310;
        setTimeout(() => {
          document
            .getElementById("row-5")
            .childNodes[1].setAttribute("data-playerchip", "two");
        }, time);

        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1360 : 1410;

        setTimeout(() => {
          secondColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }

      // row 4
      if (objOfCounter.columnTwo == 4) {
        console.log(chipNodeElement, "row 4");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 4 - 2
        console.log(
          arrayOfChipNodes[Number(row) - 2][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1290 : 1340;
        setTimeout(() => {
          document
            .getElementById("row-4")
            .childNodes[1].setAttribute("data-playerchip", "two");
        }, time);

        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1390 : 1440;

        setTimeout(() => {
          secondColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }

      // row 3
      if (objOfCounter.columnTwo == 3) {
        console.log(chipNodeElement, "row 3");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 3
        console.log(
          arrayOfChipNodes[Number(row)][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1320 : 1370;
        setTimeout(() => {
          document
            .getElementById("row-3")
            .childNodes[1].setAttribute("data-playerchip", "two");
        }, time);

        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1420 : 1470;

        setTimeout(() => {
          secondColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }

      // row 2
      if (objOfCounter.columnTwo == 2) {
        console.log(chipNodeElement, "row 2");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 2 + 2
        console.log(
          arrayOfChipNodes[Number(row) + 2][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1350 : 1400;
        setTimeout(() => {
          document
            .getElementById("row-2")
            .childNodes[1].setAttribute("data-playerchip", "two");
        }, time);

        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1450 : 1500;

        setTimeout(() => {
          secondColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }

      // row 1
      if (objOfCounter.columnTwo == 1) {
        console.log(chipNodeElement, "row 1");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 1 + 4
        console.log(
          arrayOfChipNodes[Number(row) + 4][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1370 : 1420;
        setTimeout(() => {
          document
            .getElementById("row-1")
            .childNodes[1].setAttribute("data-playerchip", "two");
        }, time);
        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1520 : 1570;

        setTimeout(() => {
          secondColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }
    },
    third: ({ third }) => {
      console.log(third);
      // there is no seventh row, return
      if (objOfCounter.columnThree == 7) return;
      objOfCounter.columnThree += 1;

      // select third column
      const thirdColumn = document.getElementById("animation-column-third");

      const chipNodeElement = document.querySelector(
        `#row-${objOfCounter.columnTwo} [data-chipselector='${objOfCounter.columnTwo}-${third}']`
      );

      // set value of data-droppedposition attr based on current counter
      thirdColumn.setAttribute(
        "data-droppedposition",
        `${objOfCounter.columnTwo}`
      );
      // show player chip
      // row 6
      if (objOfCounter.columnTwo == 6) {
        console.log(chipNodeElement, "row 6");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 6 - 6
        console.log(
          arrayOfChipNodes[Number(row) - 6][Number(column) - 1],
          "array node"
        );
        setTimeout(() => {
          document
            .getElementById("row-6")
            .childNodes[2].setAttribute("data-playerchip", "two");
        }, 100);
        // set "data-droppedposition" as empty string
        setTimeout(() => {
          thirdColumn.setAttribute("data-droppedposition", "");
        }, 150);
      }

      // row 5
      if (objOfCounter.columnTwo == 5) {
        console.log(chipNodeElement, "row 5");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 5 - 4
        console.log(
          arrayOfChipNodes[Number(row) - 4][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1260 : 1310;
        setTimeout(() => {
          document
            .getElementById("row-5")
            .childNodes[2].setAttribute("data-playerchip", "two");
        }, time);

        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1360 : 1410;

        setTimeout(() => {
          thirdColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }

      // row 4
      if (objOfCounter.columnTwo == 4) {
        console.log(chipNodeElement, "row 4");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 4 - 2
        console.log(
          arrayOfChipNodes[Number(row) - 2][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1290 : 1340;
        setTimeout(() => {
          document
            .getElementById("row-4")
            .childNodes[2].setAttribute("data-playerchip", "two");
        }, time);

        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1390 : 1440;

        setTimeout(() => {
          thirdColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }

      // row 3
      if (objOfCounter.columnTwo == 3) {
        console.log(chipNodeElement, "row 3");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 3
        console.log(
          arrayOfChipNodes[Number(row)][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1320 : 1370;
        setTimeout(() => {
          document
            .getElementById("row-3")
            .childNodes[2].setAttribute("data-playerchip", "two");
        }, time);

        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1420 : 1470;

        setTimeout(() => {
          thirdColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }

      // row 2
      if (objOfCounter.columnTwo == 2) {
        console.log(chipNodeElement, "row 2");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 2 + 2
        console.log(
          arrayOfChipNodes[Number(row) + 2][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1350 : 1400;
        setTimeout(() => {
          document
            .getElementById("row-2")
            .childNodes[2].setAttribute("data-playerchip", "two");
        }, time);

        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1450 : 1500;

        setTimeout(() => {
          thirdColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }

      // row 1
      if (objOfCounter.columnTwo == 1) {
        console.log(chipNodeElement, "row 1");
        const [row, column] = chipNodeElement
          .getAttribute("data-chipselector")
          .split("-");
        console.log(row, "row");
        console.log(column, "column");
        // row 1 + 4
        console.log(
          arrayOfChipNodes[Number(row) + 4][Number(column) - 1],
          "array node"
        );
        const time = window.innerWidth <= 378 ? 1370 : 1420;
        setTimeout(() => {
          document
            .getElementById("row-1")
            .childNodes[2].setAttribute("data-playerchip", "two");
        }, time);
        // set "data-droppedposition" as empty string
        const removeDroppedPositionTimer =
          window.innerWidth <= 378 ? 1520 : 1570;

        setTimeout(() => {
          thirdColumn.setAttribute("data-droppedposition", "");
        }, removeDroppedPositionTimer);
      }
    },
    fourth: ({ fourth }) => {
      console.log(fourth);
      // there is no seventh row, return
      if (objOfCounter.columnFour == 7) return;
      objOfCounter.columnFour += 1;
    },
    fifth: ({ fifth }) => {
      console.log(fifth);
      // there is no seventh row, return
      if (objOfCounter.columnFive == 7) return;
      objOfCounter.columnFive += 1;
    },
    sixth: ({ sixth }) => {
      console.log(sixth);
      // there is no seventh row, return
      if (objOfCounter.columnSix == 7) return;
      objOfCounter.columnSix += 1;
    },
    seventh: ({ seventh }) => {
      console.log(seventh);
      // there is no seventh row, return
      if (objOfCounter.columnSeven == 7) return;
      objOfCounter.columnSeven += 1;
    },
  };

  return function innerFunc(event) {
    const columnClicked = event.target.getAttribute("data-column");

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

export const checking = rowCounter();

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
