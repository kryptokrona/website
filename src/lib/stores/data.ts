import {writable} from "svelte/store";

export const nodeData = writable<NodeData>();

export const supplyData = writable<SuplyData>();

export const blogPosts = writable([])