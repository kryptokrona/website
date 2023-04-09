import { error, json } from "@sveltejs/kit";
import {fetchSupply} from "../../../lib/utils/helpers";

export async function GET() {

    const supply = await fetchSupply("https://blocksum.org/api/v1/supply")

    if (!supply) {
        throw error('404', 'Bad request')
    } else {
        return json(supply)
    }
}