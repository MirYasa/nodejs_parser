import {getLinks} from "./utils/getLinks"
import {getSpecificcrypto} from "./utils/getSpecificcrypto"
import * as fs from "fs"
import {CMC_BASE} from "./constants/urls"

function main() {
    const now = Date.now()
    let query = 'currencies'

    if (query === 'links') {
        getLinks(__dirname)

    } else {
        const address = fs.readFileSync(`${__dirname}/data/cryptoLinks.json`, 'utf-8')
        const first_curr = JSON.parse(address).slice(0, 1)

        getSpecificcrypto(CMC_BASE + first_curr[0].link)
    }
    console.log(new Date(Date.now() - now))
}

main()