class Factory extends Building {
    constructor(x, y) {
        super(x, y, 'FACTORY', {
            cost: 150, 
            production: { manpower: 5 },
            size: 5,
            color: '#7f8c8d',
            name: 'Factory'
        });
    }
}
