import {combineReducers} from "redux"
import {libraryReduce} from "./libraryReduce"
import {loadingReduce} from "./loadingReduce"

export default combineReducers({
    libraryReduce, loadingReduce
})