export function getAssetURL(id: string): string | null {
    if (id) return null;
    return `${import.meta.env.VITE_DIRECTUS_URL}/assets/${id}`;
}