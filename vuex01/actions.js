// export const incrementCounter = function ({ dispatch, state }) {
//     dispatch('INCREMENT', 1)
// }


export const increment = ({ dispatch }) => dispatch('INCREMENT')
export const decrement = ({ dispatch }) => dispatch('DECREMENT')

export const incrementIfOdd = ({ dispatch, state }) => {
    if ((state.count + 1) % 2 === 0) {
        dispatch('INCREMENT')
    }
}

export const incrementAsync = ({ dispatch }) => {
    setTimeout(() => {
        dispatch('INCREMENT')
    }, 1000)
}