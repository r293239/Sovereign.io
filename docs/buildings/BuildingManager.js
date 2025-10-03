class BuildingManager {
    constructor() {
        this.buildings = new Map();
        this.buildingTypes = {
            MINE: { cost: 100, production: { gold: 5 }, size: 3, color: '#f39c12' },
            FACTORY: { cost: 150, production: { manpower: 3 }, size: 4, color: '#95a5a6' },
            BARRACKS: { cost: 120, production: {}, size: 5, color: '#34495e' }
        };
    }

    canBuild(x, y, type, player) {
        return player.gold >= this.buildingTypes[type].cost;
    }

    build(x, y, type, player) {
        if (this.canBuild(x, y, type, player)) {
            const buildingType = this.buildingTypes[type];
            player.gold -= buildingType.cost;
            
            const building = {
                id: Math.random().toString(36).substr(2, 9),
                type: type,
                x: x,
                y: y,
                level: 1,
                ...buildingType
            };
            
            this.buildings.set(building.id, building);
            return building;
        }
        return null;
    }

    getProduction() {
        let totalProduction = { gold: 0, manpower: 0 };
        
        this.buildings.forEach(building => {
            Object.entries(building.production).forEach(([resource, amount]) => {
                totalProduction[resource] += amount * building.level;
            });
        });
        
        return totalProduction;
    }
}
