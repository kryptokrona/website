import type { Node } from "$lib/config";
import { stableNodes } from "$lib/config";

export interface NodeResponse {
  node: Node
  response: any
}

const fetchNodeInfo = async (node: Node): Promise<NodeResponse | null> => {
  const protocol = node.ssl ? "https" : "http";
  const baseUrl = `${protocol}://${node.url.split('/')[0]}:${node.port}`;
  const path = node.url.split('/')[1]?.length ? `/${node.url.split('/')[1]}` : '';
  const url = `${baseUrl}${path}/info`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(`Success fetching info from node: ${node.name}`);
      return { node, response: jsonResponse };
    } else {
      console.warn(`Node responded with error status: ${response.status}, node: ${node.name}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching info from node: ${node.name}, URL: ${url}`, error);
    return null; // Resolve with null instead of throwing
  }
};



export const getFastestNodeResponse = async (): Promise<NodeResponse | null> => {
  const fetchPromises = stableNodes.map(node => fetchNodeInfo(node));

  try {
    // Return immediately when the first successful response is resolved
    const successfulNodeResponse = await Promise.any(
      fetchPromises.map(promise =>
        promise.then(result => {
          if (result !== null) return result; // Pass successful results through
          throw new Error("Rejected by fetchNodeInfo"); // Force failure for `null` results
        })
      )
    );
    return successfulNodeResponse;
  } catch (error) {
    console.error("All node requests failed or returned null.");
    return null;
  }
};


