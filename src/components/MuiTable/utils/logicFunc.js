/**
 *
 * @param reportFilter
 * @param filters
 * @returns {boolean isFiltered}
 */
// this function sets the filter logic of this field if the data in a column in the table
// is not a list but a single string value separated by commas
export function getIsFilter(reportFilter, filters) {
    if (filters.length) {
        const options = reportFilter.split(",")
        let isFiltered = true
        options.forEach(opt => {
            if (filters.includes(opt.trim())) {
                isFiltered = false
            }
        })
        return isFiltered
    }
    return false
}
