import {CryptoLink} from "../interfaces/cmc"
import * as fs from "fs"

export function writeToJSON(obj: CryptoLink[], pathDir: string): void {
    const newJSON = JSON.stringify(obj)

    if (obj.length === 0) return

    fs.writeFile(`${pathDir}cryptoLinks.json`, newJSON, (e) => {
        if (e) throw new Error(e.message)

        console.log('File created successful!')
    })
}