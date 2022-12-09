export function formatCurrency(value) {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return formatter.format(value);
}

export function formatToK(value) {
    return Math.abs(value) > 999 ? Math.sign(value) * ((Math.abs(value) / 1000).toFixed(1)) + 'k' : Math.sign(value) * Math.abs(value)
}

export function formatPercent(percent, fixed) {
    return `${(percent * 100).toFixed(fixed)}%`;
}

export function formatDate(date) {
    return null;
    // return `${(percent * 100).toFixed(fixed)}%`;
}

export function formatBetweenDate(date) {
    const year = new Date(new Date() - new Date(date)).getFullYear() - 1970;
    const month = monthDiff(new Date(date), new Date()) % 12;
    return `${year} năm ${month > 0 ? month + ' tháng' : ''}`;
}

function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}