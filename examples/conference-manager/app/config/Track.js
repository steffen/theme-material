Ext.define('CM.config.Track', {
    singleton: true,

    store: {
        sorters: [
            {
                property: 'name'
            }
        ]
    },

    grid: {
        columnConfig: {
            order_index: {
                hidden: true
            }
        }
    },

    form: {
        fieldConfig: {
            order_index: {
                hidden: true
            }
        }
    }
});