export default {
    line: {
        label: 'Line Chart',
        fact: { min: 1 },
        dim: { min: 1, max: 2 },
    },
    area: {
        label: 'Area Chart',
        fact: { min: 1 },
        dim: { min: 1, max: 2 },
        /*Ideas TODO
        defaults: {stacked:1},
        series: {
            n: 25 //how many items will fit. if more, then do TOP logic
        }
        */
    },
    bar: {
        label: 'Bar Chart',
        fact: { min: 1 },
        dim: { min: 1, max: 2 },
    },
    column: {
        label: 'Column Chart',
        fact: { min: 1 },
        dim: { min: 1, max: 2 },
    },
    map: {
        label: 'Map',
        fact: { min: 1, max: 1 },
        dim: { min: 1, max: 1 },
    },
    pie: {
        label: 'Pie Chart',
        fact: { min: 1, max: 1 },
        dim: { min: 1, max: 1 },
    },
    donut: {
        label: 'Donut Chart',
        fact: { min: 1, max: 1 },
        dim: { min: 1, max: 1 },
    },
    scatter: {
        label: 'Scatter Plot',
        fact: { min: 2 },
        dim: { min: 1, max: 1 },
    },
    heatmap: {
        label: 'Heatmap',
        desc: 'Heatmaps show data by color variations based on the chosen measure. Traditionally, dark red (i.e. hot) signifies the highest values while lighter (i.e. cool) signifies the lowest values. Heatmaps offer a way to quickly visualize patterns and correlations between the two categories (i.e. dimensions).',
        fact: { min: 1, max: 1 },
        dim: { min: 2, max: 2 },
        similar: ['treemap','packed_bubble'],
        uuid: '250ee871-2e30-4f6c-8ac3-49d08a71e025',
    },
    treemap: {
        label: 'Treemap',
        desc: 'Treemaps show hierarchical data with category (i.e. dimension) rectangle size based on the chosen meausure. If multiple dimensions are chosen, then the first dimension (i.e. category) will have the second dimension (i.e. subcategory) nested inside of it.',
        fact: { min: 1, max: 1 },
        dim: { min: 1, max: 2 },
        similar: ['heatmap','packed_bubble'],
        uuid: '23b1b318-3a7c-47d5-9521-6745f3c67710',
    },
    bubble: {
        label: 'Bubble Chart',
        fact: { min: 1 },
        dim: { min: 1, max: 2 },
    },
    packed_bubble: {
        label: 'Packed Bubble',
        fact: { min: 1, max: 1 },
        dim: { min: 1, max: 1 },
    },
    big_number: {
        label: 'KPI (Rich Text)',
        fact: { min: 1, max: 1 },
        dim: { min: 0, max: 1 },
    },
    funnel: {
        label: 'Funnel',
        fact: { min: 1, max: 1 },
        dim: { min: 1, max: 1 },
    },
    sankey: {
        label: 'Sankey',
        fact: { min: 1, max: 1 },
        dim: { min: 1, max: 2 },
    },
    sunburst: {
        label: 'Sunburst',
        fact: { min: 1, max: 1 },
        dim: { min: 1, max: 2 },
    },
    word_cloud: {
        label: 'Word Cloud',
        fact: { min: 1, max: 1 },
        dim: { min: 1, max: 1 },
    },
    radar: {
        label: 'Radar',
        fact: { min: 1, max: 1 },
        dim: { min: 1, max: 2 },
    },
    gauge: {
        label: 'Gauge',
        fact: { min: 1, max: 1 },
        dim: { min: 0, max: 1 },
    },
    calendar: {
        label: 'Calendar',
        fact: { min: 1, max: 1 },
        dim: { min: 1, max: 1 },
    },
    boxplot: {
        label: 'Boxplot',
        fact: { min: 1, max: 1 },
        dim: { min: 1, max: 2 },
    },
    bullet: {
        label: 'Bullet',
        fact: { min: 1, max: 1 },
        dim: { min: 1, max: 1 },
    },
    parallel: {
        label: 'Parallel',
        fact: { min: 1 },
        dim: { min: 1, max: 1 },
    },
    tree: {
        label: 'Tree',
        fact: { min: 0 },
        dim: { min: 1 },
    },
};