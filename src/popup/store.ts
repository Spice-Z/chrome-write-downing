import memos, {MemoActions, MemosState} from '../modules/memo'
import {createStore, combineReducers, Action} from 'redux'

export default createStore(
  combineReducers({
    memos
  })
)

export type ReduxState = {
  memoList : MemosState
}

export type ReduxAction = MemoActions | Action