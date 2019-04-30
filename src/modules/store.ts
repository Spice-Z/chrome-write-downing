import {MemoActions, AddMemo} from './actions'
import {createStore, Action} from 'redux'
import memosApp, { MemosState } from './reducers';

const store = createStore(memosApp)
console.log(store.getState());
const unsubscribe = store.subscribe(() => {console.log(store.getState())})
store.dispatch(AddMemo({id:0,text:"a"}))
unsubscribe()

export type ReduxState = {
  memoList : MemosState
}

export type ReduxAction = MemoActions | Action




export default store
