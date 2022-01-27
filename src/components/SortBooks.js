import {useDispatch} from "react-redux"
import {sortItems} from "../actions/libraryAction"
import React, { Fragment } from 'react'
import {BY_DATE, BY_TITLE} from "../helper/constant"
const SortBooks = () => {
    const dispatch = useDispatch()
    return (
        <Fragment>
            <strong>Sort By:&nbsp;</strong>
            <select name="sortBooks" id="sortBooks" onChange={
                evt => {
                    sortItems(evt.target.value)(dispatch)
                }
            }>
                <option value='bestMatch'>Best Match</option>
                <option value={BY_TITLE}>Title</option>
                <option value={BY_DATE}>Published Date</option>
            </select>
        </Fragment>
    )
}
export default SortBooks