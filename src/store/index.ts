import reduce from './reduce'
import { createStore } from 'redux'

const store = createStore(reduce)

export default store
