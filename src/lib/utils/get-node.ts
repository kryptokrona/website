import type { Node } from "$lib/config";
import { stableNodes } from "$lib/config";

export interface NodeResponse {
  node: Node
  response: any
}

const fetchNodeInfo = async (node: Node): Promise<NodeResponse | null> => {
  const protocol = node.ssl ? "https" : "http"
  const url = `${protocol}://${node.url}:${node.port}/getinfo`
  try {
    const response = await fetch(url)
    if (response.ok) {
      const jsonResponse = await response.json()
      return { node, response: jsonResponse }
    }
    return null
  } catch (error) {
    console.error(`Error fetching info from ${node.name}:`, error)
    return null
  }
};

export const getFastestNodeResponse = async (): Promise<NodeResponse | null> => {
  const fetchPromises = stableNodes.map(node => fetchNodeInfo(node))
  try {
    const successfulNodeResponse = await Promise.race(fetchPromises)
    if (!successfulNodeResponse) {
      throw new Error("All node requests failed")
    }
    return successfulNodeResponse
  } catch (error) {
    console.error("Error in getting fastest node response:", error)
    return null
  }
};
