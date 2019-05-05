import {MemosActions, AddMemo} from './actions'
import {createStore, Action} from 'redux'
import memosApp, { MemosState } from './reducers';

const store = createStore(memosApp)

export default store
