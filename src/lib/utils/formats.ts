export function getReadableDifficultyString(difficulty: number, precision?: number): string {
    if (isNaN(parseFloat(String(difficulty))) || !isFinite(difficulty)) return '0';
    precision = precision ?? 0;
    const units = ['', 'k', 'M', 'G', 'T', 'P'],
      number = Math.floor(Math.log(difficulty) / Math.log(1000));
    if (units[number] === undefined) {
        return '0';
    }
    return localizeNumber(parseFloat((difficulty / Math.pow(1000, Math.floor(number))).toFixed(precision))) + ' ' + units[number];
}

export function prettifyHashrate(value: number, decimal: number): string {
    const kilo = 1000,
      mega = 1000000,
      giga = 1000000000,
      tera = 1000000000000;

    if (value < kilo) return `${value.toFixed(decimal)} H/s`;
    if (value >= kilo && value < mega) return `${(value / kilo).toFixed(decimal)} KH/s`;
    if (value >= mega && value < giga) return `${(value / mega).toFixed(decimal)} MH/s`;
    if (value >= giga && value < tera) return `${(value / giga).toFixed(decimal)} GH/s`;
    return `${(value / tera).toFixed(decimal)} TH/s`;
}

export function numberWithCommas(x: string | number): string | undefined {
    if (!x) return undefined;
    let str = x.toString();
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(str)) str = str.replace(pattern, '$1,$2');
    return str;
}

export function localizeNumber(number: number): string {
    const numberFormatter = new Intl.NumberFormat('en-US');
    return numberFormatter.format(number);
}

export function serializeSchema(data: any): string {
    return `<script type="application/ld+json">${JSON.stringify(data, null, 2)}</script>`;
}
