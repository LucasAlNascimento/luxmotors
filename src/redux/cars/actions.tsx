import CarsActionTypes from "./action-types";

export const addCar = (payload: any) => ({
    type: CarsActionTypes.ADD_CARS,
    payload,
})