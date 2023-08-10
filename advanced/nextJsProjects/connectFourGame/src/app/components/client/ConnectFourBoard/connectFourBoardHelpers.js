function rowCounter() {
  const objOfCounter = {
    columnOne: 0,
    columnTwo: 0,
    columnThree: 0,
    columnFour: 0,
    columnFive: 0,
    columnSix: 0,
    columnSeven: 0,
  };

  const objOfMethods = {
    first: () => {
      // there is no seventh row, return
      if (objOfCounter.columnOne == 7) return;
      // add 1 to column counter
      objOfCounter.columnOne += 1;
      // select first column
      const firstColumn = document.getElementById("animation-column-first");
      // set value of data-droppedposition attr based on current counter
      firstColumn.setAttribute(
        "data-droppedposition",
        `${objOfCounter.columnOne}`
      );
    },
    second: () => {
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
    third: () => {
      objOfCounter.columnThree += 1;
    },
    fourth: () => {
      objOfCounter.columnFour += 1;
    },
    fifth: () => {
      objOfCounter.columnFive += 1;
    },
    sixth: () => {
      objOfCounter.columnSix += 1;
    },
    seventh: () => {
      objOfCounter.columnOne += 1;
    },
  };

  return function innerFunc(event) {
    const columnClicked = event.target.getAttribute("data-column");

    if (columnClicked && objOfMethods[columnClicked]) {
      objOfMethods[columnClicked]();
    }
  };
}

export const checking = rowCounter();
