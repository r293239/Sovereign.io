class Barracks extends Building {
    constructor(x, y) {
        super(x, y, 'BARRACKS', {
            cost: 120,
            production: {},
            size: 6,
            color: '#2c3e50',
            name: 'Barracks',
            trainingSpeed: 1.2
        });
    }
}
