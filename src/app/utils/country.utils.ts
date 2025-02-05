export enum Continent {
    EUROPE = "europe",
    ASIA = "asia",
    AFRICA = "africa",
    AMERICA = "america",
    OCEANIA = "australia",
    ANTARCTICA = "antarctica",
}

export interface IContinentProperties {
    imageUrl: string;
    color: string;
}

export const CountryTypeProperties: {[key: string]: IContinentProperties} = {
    [Continent.AFRICA]:{
        imageUrl: 'assets/continents/africa.png',
        color: "rgba(255, 182, 193)"
    },
    [Continent.ASIA]:{
        imageUrl: 'assets/continents/asia.png',
        color: "rgba(255,102,85)"
    },
    [Continent.EUROPE]:{
        imageUrl: 'assets/continents/europe.png',
        color: "rgba(241, 198, 117)"
    },
    [Continent.AMERICA]:{
        imageUrl: 'assets/continents/america.png',
        color: "rgba(100,250,128)"
    },
    [Continent.OCEANIA]:{
        imageUrl: 'assets/continents/oceania.png',
        color: "rgba(0,150,255)"
    },
    [Continent.ANTARCTICA]:{
        imageUrl: 'assets/continents/antarctica.png',
        color: "rgba(210, 180, 140)"
    },
}