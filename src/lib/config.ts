import { dev } from "$app/environment";

export const supplyUrl: string = dev ? 'http://localhost:5173/api/supply' : 'https://kryptokrona.org/api/supply'

export interface Node {
  id: number;
  name: string;
  url: string;
  port: number;
  ssl: boolean;
}
export const stableNodes: Node[] = [
  {
    id: 1,
    name: 'Blocksum',
    url: 'blocksum.org',
    port: 11898,
    ssl: false
  },
  {
    id: 2,
    name: 'KTH Node',
    url: 'kth.kryptokrona.se',
    port: 20176,
    ssl: true
  },
  {
    id: 3,
    name: 'TechyNode',
    url: 'techy.ddns.net',
    port: 11898,
    ssl: false
  },
  {
    id: 4,
    name: 'Privacy Mine',
    url: 'privacymine.net',
    port: 11898,
    ssl: false
  },
  {
    id: 5,
    name: 'XKR Network',
    url: 'node.xkr.network',
    port: 80,
    ssl: false
  }
]
