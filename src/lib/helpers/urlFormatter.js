export function titleToURL(url) {
    url = url.replace(/\s+/g, '-').toLowerCase()
    return url
}

export function URLToTitle(url) {
    url = url.replace(/-/g, ' ')
    return url
}