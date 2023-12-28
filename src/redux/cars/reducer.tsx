import CarsActionTypes from "./action-types"

const initialState = {
    cars: [],
}

const carsReducer = (state = initialState, action: any) => {
    switch (action.type){
        case CarsActionTypes.ADD_CARS:
            return {
                ...initialState,
                products: [...initialState.cars, action.payload]}
        default:
            return state;
    }
}

export default carsReducer