function rowCounter() {
  const arrayOfChipNodes = [
    // row 6 - 6
    // index 0
    [],
    // row 5 - 4
    // index 1
    [],
    // row 4 - 2
    // index 2
    [],
    // row 3
    // index 3
    [],
    // row 2 + 2
    // index 4
    [],
    // row 1 + 4
    // index 5
    [],
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
      console.log(
        document.querySelector(
          `#row-${objOfCounter.columnOne} [data-chipselector='${objOfCounter.columnOne}-${first}']`
        )
      );

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
        // row 6 - 6
        setTimeout(() => {
          document
            .getElementById("row-6")
            .firstElementChild.setAttribute("data-playerchip", "two");
        }, 100);
      }

      // row 5
      if (objOfCounter.columnOne == 5) {
        // row 5 - 4
        const time = window.innerWidth <= 378 ? 1260 : 1310;
        setTimeout(() => {
          document
            .getElementById("row-5")
            .firstElementChild.setAttribute("data-playerchip", "two");
        }, time);
      }

      // row 4
      if (objOfCounter.columnOne == 4) {
        // row 4 - 2
        const time = window.innerWidth <= 378 ? 1290 : 1340;
        setTimeout(() => {
          document
            .getElementById("row-4")
            .firstElementChild.setAttribute("data-playerchip", "two");
        }, time);
      }

      // row 3
      if (objOfCounter.columnOne == 3) {
        // row 3
        const time = window.innerWidth <= 378 ? 1320 : 1370;
        setTimeout(() => {
          document
            .getElementById("row-3")
            .firstElementChild.setAttribute("data-playerchip", "two");
        }, time);
      }

      // row 2
      if (objOfCounter.columnOne == 2) {
        // row 2 + 2
        const time = window.innerWidth <= 378 ? 1350 : 1400;
        setTimeout(() => {
          document
            .getElementById("row-2")
            .firstElementChild.setAttribute("data-playerchip", "two");
        }, time);
      }

      // row 1
      if (objOfCounter.columnOne == 1) {
        // row 1 + 4
        const time = window.innerWidth <= 378 ? 1370 : 1420;
        setTimeout(() => {
          document
            .getElementById("row-1")
            .firstElementChild.setAttribute("data-playerchip", "two");
        }, time);
      }
    },
    second: ({ second }) => {
      console.log(second);
      // there is no seventh row, return
      if (objOfCounter.columnOne == 7) return;
      // add 1 to column counter
      objOfCounter.columnTwo += 1;
      // select second column
      const secondColumn = document.getElementById("animation-column-second");
      // set value of data-droppedposition attr based on current counter
      secondColumn.setAttribute(
        "data-droppedposition",
        `${objOfCounter.columnTwo}`
      );
    },
    third: ({ third }) => {
      console.log(third);
      objOfCounter.columnThree += 1;
    },
    fourth: ({ fourth }) => {
      console.log(fourth);

      objOfCounter.columnFour += 1;
    },
    fifth: ({ fifth }) => {
      console.log(fifth);
      objOfCounter.columnFive += 1;
    },
    sixth: ({ sixth }) => {
      console.log(sixth);

      objOfCounter.columnSix += 1;
    },
    seventh: ({ seventh }) => {
      console.log(seventh);

      objOfCounter.columnOne += 1;
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
