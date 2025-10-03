class Mine extends Building {
    constructor(x, y) {
        super(x, y, 'MINE', {
            cost: 100,
            production: { gold: 8 },
            size: 4,
            color: '#f39c12',
            name: 'Gold Mine'
        });
    }
}
