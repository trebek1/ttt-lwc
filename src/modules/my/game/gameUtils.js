export const checkGameOver = (board, pos) => {
    let working;
    // left diagonal
    if (pos === 0 || pos === 4 || pos === 8) {
        working = board[0].value;
        if (
            working &&
            working === board[4].value &&
            working === board[8].value
        ) {
            return true;
        }
    }
    // right diagonal
    if (pos === 2 || pos === 4 || pos === 6) {
        working = board[2].value;
        if (
            working &&
            working === board[4].value &&
            working === board[6].value
        ) {
            return true;
        }
    }
    // rows and cols
    for (let i = 0; i < 3; i++) {
        working = board[i].value;
        // columns
        if (
            working &&
            working === board[i + 3].value &&
            working === board[i + 6].value
        ) {
            return true;
        }
        // rows
        let j = i * 3;
        working = board[j].value;
        if (
            working &&
            working === board[j + 1].value &&
            working === board[j + 2].value
        ) {
            return true;
        }
    }
    return false;
};

export function allUsed(board) {
    return board.reduce((acc, curr) => {
        if (curr.value === null) {
            return false;
        }
        return acc;
    }, true);
}
