Ext.define('KitchenSink.view.toolbar.MaterialActionToolbar', {
    extend: 'Ext.Panel',
    xtype: 'material-action-toolbar',

    bodyPadding: 24,

    scrollable: true,

    defaults: {
        ui: 'material-card',
        margin: '0 0 24 0'
    },
    
    items: {
        tbar: [
            {
                xtype: 'title',
                text: 'Action Toolbar'
            }
        ],

        bodyPadding: 24,

        items: [
            {
                frame: true,
                tbar: {
                    ui: 'action',
                    items: [
                        {
                            xtype: 'title',
                            text: 'Title'
                        },
                        '->',
                        {
                            text: 'Cancel'
                        },
                        {
                            text: 'Delete'
                        }
                    ]
                },
                html: 'Action toolbar with action buttons in header'
            },
            
            {
                frame: true,
                margin: '24 0 0 0',
                tbar: {
                    items: [
                        {
                            xtype: 'title',
                            text: 'Title'
                        }
                    ]
                },
                bbar: {
                    ui: 'action',
                    items: [
                        '->',
                        {
                            text: 'Cancel'
                        },
                        {
                            text: 'Save'
                        }
                    ]
                },
                html: 'Action toolbar with action buttons in footer'
            }
        ]
    }
});
