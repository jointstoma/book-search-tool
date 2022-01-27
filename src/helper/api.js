import axios from 'axios'
import {fetch_base_url} from "./constant"

export default axios.create({
    baseURL: fetch_base_url
})