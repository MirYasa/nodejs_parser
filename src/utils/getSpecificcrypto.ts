import axios from "axios"

const cheerio = require('cheerio')

export async function getSpecificcrypto(address: string) {
    let content
    await axios.get(address)
        .then(res => {
            content = res.data
        })

    const $ = cheerio.load(content)

    // $('div.statsContainer div.statsBlockInner div.statsLabel, div.statsItemRight div.statsValue').each((i: number, elem: Element) => {
    //     // console.log($(elem).text())
    //     console.log($(elem).text())
    // })
    //
    // $('ul.content a.link-button').each((i: number, elem: Element) => {
    //     console.log($(elem).text(), $(elem).attr('href'))
    // })

    // $('div.priceValue, div.sliderSection span').each((i: number, elem: Element) => {
    //     console.log($(elem).text())
    // })
    $('div.nameHeader').each((i: number, elem: Element) => {
        $(elem).children().each((is, ds) => {
            console.log($(ds).text())
        })
    })
}