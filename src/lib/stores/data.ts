import {writable} from "svelte/store";

export const nodeData = writable<NodeData>();

export const blogPosts = writable([])

export const supplyData = writable<SuplyData>();