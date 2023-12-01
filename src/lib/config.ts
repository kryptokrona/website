import { dev } from "$app/environment";

export const CONFIG = {
  NODE_ONE: 'http://blocksum.org:11898',
  NODE_TWO: 'http://blocksum.org:11898',
  SUPPLY_API: dev ? 'http://localhost:5173/api/supply' : 'https://kryptokrona.org/api/supply'
}