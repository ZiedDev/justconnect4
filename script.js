const board = document.getElementById("board");

let gridSize = 7;

let currentPlayerColor = "yellow-disk";

for (let i = 0; i < gridSize ** 2 - gridSize; i++) {
    board.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    board.style.gridTemplateRows = `repeat(${gridSize - 1}, auto)`;

    let tile = document.createElement("div");
    let disk = document.createElement("div");

    board.append(tile);
    tile.classList.add("tile");
    // tile.classList.add(`tile${i + 1}`);
    tile.setAttribute("id", `tile${i + 1}`);
    tile.setAttribute("onclick", `getActiveTile(${i + 1})`);

    tile.append(disk);
    disk.classList.add("disk");
    disk.setAttribute("id", `disk${i + 1}`);
}

function getActiveTile(tileNum) {
    const currentTile = document.getElementById(`tile${tileNum}`);

    if (currentPlayerColor == "yellow-disk") {
        currentPlayerColor = "red-disk";
    }
    else if (currentPlayerColor == "red-disk") {
        currentPlayerColor = "yellow-disk";
    }

    drawDisk(getCurrentColumn(tileNum));
}

function getCurrentColumn(tileNum) {
    if (1 <= tileNum && tileNum <= 7)
        return tileNum - 0;
    else if (8 <= tileNum && tileNum <= 14)
        return tileNum - 7;
    else if (15 <= tileNum && tileNum <= 21)
        return tileNum - 14;
    else if (22 <= tileNum && tileNum <= 28)
        return tileNum - 21;
    else if (29 <= tileNum && tileNum <= 35)
        return tileNum - 28;
    else if (35 <= tileNum && tileNum <= 42)
        return tileNum - 35;
}

function drawDisk(columnNum) {
    let rowNum = 6

    let isFirstRowFull = document.getElementById(`disk${columnNum + (rowNum - 1) * 7}`).classList.contains("red-disk") || document.getElementById(`disk${columnNum + (rowNum - 1) * 7}`).classList.contains("yellow-disk");

    let isSecondRowFull = document.getElementById(`disk${columnNum + (rowNum - 2) * 7}`).classList.contains("red-disk") || document.getElementById(`disk${columnNum + (rowNum - 2) * 7}`).classList.contains("yellow-disk");

    let isThirdRowFull = document.getElementById(`disk${columnNum + (rowNum - 3) * 7}`).classList.contains("red-disk") || document.getElementById(`disk${columnNum + (rowNum - 3) * 7}`).classList.contains("yellow-disk");

    let isForthRowFull = document.getElementById(`disk${columnNum + (rowNum - 4) * 7}`).classList.contains("red-disk") || document.getElementById(`disk${columnNum + (rowNum - 4) * 7}`).classList.contains("yellow-disk");

    let isFifthRowFull = document.getElementById(`disk${columnNum + (rowNum - 5) * 7}`).classList.contains("red-disk") || document.getElementById(`disk${columnNum + (rowNum - 5) * 7}`).classList.contains("yellow-disk");

    if (!isFirstRowFull && !isSecondRowFull && !isThirdRowFull && !isForthRowFull && !isFifthRowFull) {
        document.getElementById(`disk${columnNum + (rowNum - 1) * 7}`).classList.add(currentPlayerColor);
    }
    else if (isFirstRowFull && !isSecondRowFull && !isThirdRowFull && !isForthRowFull && !isFifthRowFull) {
        document.getElementById(`disk${columnNum + (rowNum - 2) * 7}`).classList.add(currentPlayerColor);
    }
    else if (isFirstRowFull && isSecondRowFull && !isThirdRowFull && !isForthRowFull && !isFifthRowFull) {
        document.getElementById(`disk${columnNum + (rowNum - 3) * 7}`).classList.add(currentPlayerColor);
    }
    else if (isFirstRowFull && isSecondRowFull && isThirdRowFull && !isForthRowFull && !isFifthRowFull) {
        document.getElementById(`disk${columnNum + (rowNum - 4) * 7}`).classList.add(currentPlayerColor);
    }
    else if (isFirstRowFull && isSecondRowFull && isThirdRowFull && isForthRowFull && !isFifthRowFull) {
        document.getElementById(`disk${columnNum + (rowNum - 5) * 7}`).classList.add(currentPlayerColor);
    }
    else if (isFirstRowFull && isSecondRowFull && isThirdRowFull && isForthRowFull && isFifthRowFull) {
        document.getElementById(`disk${columnNum + (rowNum - 6) * 7}`).classList.contains("red-disk") || document.getElementById(`disk${columnNum + (rowNum - 6) * 7}`).classList.contains("yellow-disk") ? null : document.getElementById(`disk${columnNum + (rowNum - 6) * 7}`).classList.add(currentPlayerColor);
    }
}