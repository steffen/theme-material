Ext.define('CM.config.Speaker', {
    singleton: true,

    grid: {
        columnConfig: {
            name: {
                tdCls: 'bold'
            },
            bio: {
                hidden: true
            }
        }
    },

    form: {
        fieldConfig: {
            bio: {
                xtype: 'textarea',
                height: 150
            }
        }
    }
});