 interface Coord {
    lon: number;
    lat: number;
}

 interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
}

 interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

 interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

 interface List {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: Temp;
    pressure: number;
    humidity: number;
    weather: Weather[];
    speed: number;
    deg: number;
    clouds: number;
}

export interface WeatherI {
    city: City;
    cod: string;
    message: number;
    cnt: number;
    list: List[];
}
