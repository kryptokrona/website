import { error, json } from "@sveltejs/kit";
import { CONFIG } from "$lib/config";

let timestamp: number
let SUPPLY: number
const MAX = 100000000000000
const COIN_UNITS = 100000
const DECIMALS = 5
export async function GET() {
    await getLatest()

    if (!SUPPLY) {
        throw error(404, 'Bad request')
    } else {
        return json({
            lastCheck: timestamp,
            circulatingUnits: parseInt(String(SUPPLY)),
            maxUnits: MAX,
            coinUnits: COIN_UNITS,
            decimals: DECIMALS,
            calculatedSupply: SUPPLY / COIN_UNITS,
            calculatedMaxSupply: MAX / COIN_UNITS,
        })
    }
}
async function getLatest() {
    const response = await fetch(`${CONFIG.NODE_ONE}/json_rpc`, {
        method: 'POST',
        cache: 'no-cache',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: "test",
            method: "getlastblockheader",
            params: {
            }
        })
    });
    const data = await response.json()
    await getByBlockHash(data.result.block_header.hash)
}

async function getByBlockHash(hash: string) {
    const response = await fetch(`${CONFIG.NODE_ONE}/json_rpc`, {
        method: 'POST',
        cache: 'no-cache',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: "test",
            method: "f_block_json",
            params: {
                hash: hash
            }
        })
    });
    const data = await response.json();
    timestamp = Date.now()
    SUPPLY = data.result.block.alreadyGeneratedCoins
}