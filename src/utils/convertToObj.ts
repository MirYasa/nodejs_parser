import {CryptoLink} from "../interfaces/cmc"

export function convertToObj($): CryptoLink[] {
    const res: CryptoLink[] = []

    $('tbody tr td:nth-child(3) a').each((i: number, elem: Element) => {
        const title: string = $(elem).text()
        const link = $(elem).attr('href')

        res.push({id: i, title, link})
    })

    return res
}