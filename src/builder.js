const SC = 'searchCriteria';

module.exports = class Builder {
    process(data) {
        const output = [];

        // build filters.
        data.filter_groups?.forEach((filter_group, i) => {
            filter_group.filters?.forEach((filter, j) => {
                for(let key in filter){
                    const value = encodeURIComponent(filter[key]);
                    const part = `${SC}[filter_groups][${i}][filters][${j}][${key}]=${value}`;
                    output.push(part);
                }
            });
        });
    
        // build sort_orders.
        data.sort_orders?.forEach((sort_order, i) => {
            for(let key in sort_order){
                const value = sort_order[key];
                const part = `${SC}[sort_orders][${i}][${key}]=${value}`;
                output.push(part);
            }
        });
    
        // build options.
        data.page_size != null && output.push(`${SC}[page_size]=${data.page_size}`);
        data.current_page != null && output.push(`${SC}[current_page]=${data.current_page}`);
    
        return output.join('&');
    }
}
