# Description
Utility to generate Magento2 searchcriteria query string params.

# Example Usage
```js
const example = {
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
const Builder = require('../src/builder');

const builder = new Builder();
const output = builder.process(example);
console.log(output);
```

## Example output
```
searchCriteria[filter_groups][0][filters][0][field]=end_date&searchCriteria[filter_groups][0][filters][0][value]=2022-08-17 14:45:00&searchCriteria[filter_groups][0][filters][0][condition_type]=lt&searchCriteria[filter_groups][0][filters][1][field]=status&searchCriteria[filter_groups][0][filters][1][value]=1&searchCriteria[filter_groups][0][filters][1][condition_type]=eq&searchCriteria[sort_orders][0][field]=created_at&searchCriteria[sort_orders][0][direction]=asc
```


## Run locally

- edit file ```./test/data.js```
- run ```npm run test```