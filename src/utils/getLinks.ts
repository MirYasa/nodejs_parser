import {CMC_MAIN} from "../constants/urls"
import {writeToJSON} from "./writeToJSON"
import {CryptoLink} from "../interfaces/cmc"
import * as path from "path"
import {getHtml} from "./getHtml"

export function getLinks(dir) {
    try {
        let content: CryptoLink[] = []
        getHtml(CMC_MAIN, content)
            .then((res) => {
                writeToJSON(res, path.join(dir, 'data/'))
            })
            .catch(e => {
                console.log(e, 'main')
            })
    } catch (e) {
        console.log(e)
    }
}