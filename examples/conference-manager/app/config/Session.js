Ext.define('CM.config.Session', {
    singleton: true,

    fields: {
        date: {
            convert: function (value) {
                return Ext.Date.format(Ext.Date.parse(value, 'Y-m-d'), 'm/d');
            }
        }
    },

    store: {
        sorters: [
            {
                property: 'date'
            },
            {
                property: 'start_time_as_date'
            },
            {
                property: 'track_order_index'
            },
            {
                property: 'order_index'
            },
            {
                property: 'title'
            }
        ],
        buildFields: function (fields) {
            fields.push({
                type: 'date',
                dateFormat: 'Y-m-d',
                name: 'date_as_date',
                mapping: 'date'
            });

            fields.push({
                type: 'date',
                dateFormat: 'g:i A',
                name: 'start_time_as_date',
                mapping: 'start_time'
            });

            return fields;
        }
    },

    grid: {
        columnConfig: {
            title: {
                flex: null,
                width: 300,
                tdCls: 'bold'
            },
            description: {
                hidden: true
            },
            date: {
                xtype: 'datecolumn',
                format: 'm/d',
                flex: null,
                width: 100,
                dataindex: 'date_as_date'
            },
            start_time: {
                text: 'Starts',
                flex: null,
                width: 100
            },
            end_time: {
                text: 'Ends',
                flex: null,
                width: 100
            }
        }
    },

    form: {
        fieldConfig: {
            description: {
                xtype: 'textarea',
                grow: true
            },
            start_time: {
                fieldLabel: 'Start Time'
            },
            end_time: {
                fieldLabel: 'End Time'
            },
            date_as_date: {
                hidden: true
            },
            start_time_as_date: {
                hidden: true
            }
        }
    }
});