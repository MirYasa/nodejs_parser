import axios from "axios"

const cheerio = require('cheerio')

export async function getSpecificcrypto(address: string) {
    let content
    await axios.get(address)
        .then(res => {
            content = res.data
        })

    const $ = cheerio.load(content)

    $('div.top-summary-container').slice(0,1).each((i: number, elem: Element) => {
        console.log($(elem).text())
        // console.log($(elem).html())
    })
}