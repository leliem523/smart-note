import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./constants"

export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER,
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER,
    }
}