export function getPagesCount($) {
    const pages = []
    $('ul.pagination li.page').each((i, el) => {
        pages.push($(el).text())
    })
    return Math.max.apply(null, pages)
}