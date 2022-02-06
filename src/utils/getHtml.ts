import {CryptoLink} from "../interfaces/cmc"
import {convertToObj} from "./convertToObj"
import axios from "axios"
import {getPagesCount} from "./getPagesCount"

const cheerio = require('cheerio')

export async function getHtml(address: string, content: CryptoLink[]): Promise<CryptoLink[]> {
    try {

        await axios.get(address )
            .then(res => {
                content += res.data
            })
       const pagesCount = getPagesCount(cheerio.load(content))

        for (let i = 1; i <=  pagesCount; i++) {
            await axios.get(address + i)
                .then(res => {
                    content += res.data
                })
        }
        return convertToObj(cheerio.load(content))

    } catch (e) {
        console.log(e.message, 'html')
        return []
    }
}