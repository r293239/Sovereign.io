export interface Player {
  id: string;
  name: string;
  color: string;
  resources: {
    gold: number;
    manpower: number;
    materials: number;
    energy: number;
  };
  territories: Territory[];
  armies: Army[];
  buildings: Building[];
  research: Research[];
  allies: string[];
}

export interface Territory {
  id: string;
  x: number;
  y: number;
  ownerId: string | null;
  armyGarrison: number;
  building: Building | null;
}

export interface Army {
  id: string;
  playerId: string;
  size: number;
  position: { x: number; y: number };
  destination: { x: number; y: number } | null;
  type: ArmyType;
  health: number;
}

export type ArmyType = 'infantry' | 'cavalry' | 'artillery' | 'navy';

export interface Building {
  id: string;
  type: BuildingType;
  level: number;
  territoryId: string;
  playerId: string;
}

export type BuildingType = 'mine' | 'factory' | 'city' | 'port' | 'capital' | 'turret';

export interface Research {
  id: string;
  type: ResearchType;
  level: number;
  progress: number;
}

export type ResearchType = 
  | 'military_tactics' | 'siege_warfare' | 'naval_warfare'
  | 'economic_growth' | 'trade_routes' | 'industrialization'
  | 'advanced_energy' | 'special_operations';

export const BUILDING_DATA: Record<BuildingType, {
  cost: Partial<Record<keyof Player['resources'], number>>;
  production: Partial<Record<keyof Player['resources'], number>>;
  maxLevel: number;
}> = {
  mine: { cost: { materials: 50, gold: 100 }, production: { materials: 10 }, maxLevel: 5 },
  factory: { cost: { materials: 100, gold: 150 }, production: { gold: 15 }, maxLevel: 5 },
  city: { cost: { materials: 200, gold: 300 }, production: { manpower: 20, gold: 25 }, maxLevel: 3 },
  port: { cost: { materials: 150, gold: 250 }, production: { gold: 30 }, maxLevel: 3 },
  capital: { cost: { materials: 500, gold: 1000 }, production: { gold: 50, manpower: 30 }, maxLevel: 1 },
  turret: { cost: { materials: 80, gold: 120 }, production: {}, maxLevel: 3 }
};

export const RESEARCH_DATA: Record<ResearchType, {
  cost: Partial<Record<keyof Player['resources'], number>>;
  levels: number;
  effects: string[];
}> = {
  military_tactics: { cost: { gold: 200, materials: 100 }, levels: 5, effects: ['+10% army strength'] },
  siege_warfare: { cost: { gold: 300, materials: 200 }, levels: 3, effects: ['+25% damage to buildings'] },
  naval_warfare: { cost: { gold: 400, materials: 300 }, levels: 3, effects: ['+15% navy strength'] },
  economic_growth: { cost: { gold: 150, energy: 100 }, levels: 5, effects: ['+10% resource production'] },
  trade_routes: { cost: { gold: 250, energy: 150 }, levels: 3, effects: ['+20% gold from ports'] },
  industrialization: { cost: { gold: 350, materials: 250 }, levels: 3, effects: ['+15% factory output'] },
  advanced_energy: { cost: { gold: 200, energy: 200 }, levels: 4, effects: ['+12% energy production'] },
  special_operations: { cost: { gold: 500, energy: 300 }, levels: 2, effects: ['Unlock special abilities'] }
};
