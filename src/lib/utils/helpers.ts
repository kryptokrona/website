export const fetchHeight = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data.height
}

export function numberWithCommas(x) {
    x = x.toString();
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}