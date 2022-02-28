import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    origin : null, //то где user находится
    destination : null, //место назначение
    travelTimeInformation : null, //время поездки
}

export const navSlice = createSlice({
    name : 'nav', // имя
    initialState,
    reducer : {   //то же самое что и в обычном редаксе, только тут мы описываем редюсеры внутри кусочка стейта
        setOrigin : (state, action) => {
            state.origin = action.payload
        },
        setDestination : (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation : (state, action) => {
            state.travelTimeInformation = action.payload
        }
    }
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.reducer // экспорт всех редюсеров

//SELECTORS
export const selectorOrigin = (state) => state.nav.origin

export const selectorDescription = (state) => state.nav.destination

export const selectorTravelTimeInformation = (state) => state.nav.travelTimeInformation


export default navSlice.reducer