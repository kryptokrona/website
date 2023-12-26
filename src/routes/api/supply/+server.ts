import { error, json } from "@sveltejs/kit";
import { getFastestNodeResponse } from "$lib/utils/get-node";

let timestamp: number;
let SUPPLY: number;
const MAX = 100000000000000;
const COIN_UNITS = 100000;
const DECIMALS = 5;

export const GET = async () => {
    await getLatest();

    if (!SUPPLY) {
        throw error(404, 'Bad request');
    } else {
        return json({
            lastCheck: timestamp,
            circulatingUnits: parseInt(String(SUPPLY)),
            maxUnits: MAX,
            coinUnits: COIN_UNITS,
            decimals: DECIMALS,
            calculatedSupply: SUPPLY / COIN_UNITS,
            calculatedMaxSupply: MAX / COIN_UNITS,
        });
    }
};

async function getLatest() {
    const fastestNode = await getFastestNodeResponse();

    if (!fastestNode) {
        throw new Error('No responsive node found');
    }

    const {node} = fastestNode

    const protocol = node.ssl ? 'https' : 'http';
    const url = `${protocol}://${node.url}:${node.port}/json_rpc`;

    const response = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: "test",
            method: "getlastblockheader",
            params: {}
        })
    });
    const data = await response.json();
    await getByBlockHash(data.result.block_header.hash, url);
}

async function getByBlockHash(hash: string, url: string) {
    const response = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: "test",
            method: "f_block_json",
            params: { hash }
        })
    });
    const data = await response.json();
    timestamp = Date.now();
    SUPPLY = data.result.block.alreadyGeneratedCoins;
}
