import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Car {
    id: number;
    marca: string;
    modelo: string;
    ano: number;
    imagem: string;
}

const INITIAL_STATE: Car[] = [
    {
        id: 1,
        marca: 'Audi',
        modelo: 'Q8 e-tron Sportback',
        ano: 2023,
        imagem: '/assets/cars/AudiQ8etronSportback.jpg',
    },
    {
        id: 2,
        marca: 'BMW',
        modelo: 'iX3',
        ano: 2023,
        imagem: '/assets/cars/BMWiX3.jpg',
    },
    {
        id: 3,
        marca: 'Jaguar',
        modelo: 'XKR Coupe X100',
        ano: 2002,
        imagem: '/assets/cars/JaguarXKRCoupe.jpg',
    },
    {
        id: 4,
        marca: 'Land Rover',
        modelo: 'Range Rover Sport',
        ano: 2022,
        imagem: '/assets/cars/RangeRoverSport.jpg',
    },
    {
        id: 5,
        marca: 'Porsche',
        modelo: 'Carrera GT',
        ano: 2005,
        imagem: '/assets/cars/PorscheCarreraGT.jpg',
    },
    {
        id: 6,
        marca: 'Mercedes-Benz',
        modelo: 'C 43 AMG',
        ano: 2018,
        imagem: '/assets/cars/MercedesBenzC43AMG.jpg',
    },

];

const sliceCars = createSlice({
    name: 'cars',
    initialState: INITIAL_STATE,
    reducers: {
        filterCars(state, { payload }: PayloadAction<{ marca: string; modelo: string }>) {
            return state.filter((car) => car.marca.includes(payload.marca) || car.modelo.includes(payload.modelo));
        },
        resetCars: () => {
            return INITIAL_STATE;
        },
    },
});

export default sliceCars.reducer;
export const { filterCars, resetCars } = sliceCars.actions;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCars = (state: any) => {
    return state.cars as Car[];
}