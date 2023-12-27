import { error, json } from "@sveltejs/kit";
import { getFastestNodeResponse } from "$lib/utils/get-node";

let timestamp: number;
let supply: number;
let reward: number

const MAX_UNITS = 100000000000000;
const COIN_UNITS = 100000;
const DECIMALS = 5;


export const GET = async () => {
    await getLatest();

    if (!supply) {
        throw error(404, 'Bad request');
    } else {
        return json({
            lastCheck: timestamp,
            name: 'Kryptokrona',
            ticker: 'XKR',
            circulatingUnits: parseInt(String(supply)),
            maxUnits: MAX_UNITS,
            coinUnits: COIN_UNITS,
            decimals: DECIMALS,
            calculatedSupply: supply / COIN_UNITS,
            calculatedMaxSupply: MAX_UNITS / COIN_UNITS,
            calculatedLastReward: reward
        });
    }
};

async function getLatest() {
    const fastestNode = await getFastestNodeResponse();
    if (!fastestNode) {
        throw new Error('No responsive node found');
    }

    const protocol = fastestNode.node.ssl ? 'https' : 'http';
    const url = `${protocol}://${fastestNode.node.url}:${fastestNode.node.port}/json_rpc`;

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
    console.log(data);
    timestamp = Date.now();
    reward = data.result.block.reward / COIN_UNITS
    supply = data.result.block.alreadyGeneratedCoins;
}
