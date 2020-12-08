const gameBoard = (() => {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    
    return {
        change(y, x, shape) {
            board[y][x] = shape;
        },

        get() {
            return board;
        }
    };
})();

const Player = (name, shape) => {
    return { name, shape };
};
