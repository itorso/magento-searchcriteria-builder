module.exports = {
    filter_groups: [
        {
            filters: [
                {
                    field: 'end_date',
                    value: '2022-08-17 14:45:00',
                    condition_type: 'lt'
                },
                {
                    field: 'status',
                    value: 1,
                    condition_type: 'eq'
                }
            ]
        }
    ],
    sort_orders: [
        {
            field: 'created_at',
            direction: 'asc'
        }
    ],
    page_size: 10,
    current_page: 1
};