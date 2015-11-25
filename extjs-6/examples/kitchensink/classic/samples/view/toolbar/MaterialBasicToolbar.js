Ext.define('KitchenSink.view.toolbar.MaterialBasicToolbar', {
    extend: 'Ext.Panel',
    xtype: 'material-basic-toolbar',

    requires: [
        'Material.container.plugin.FlexibleToolbar'
    ],

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
                text: 'Basic Toolbar'
            }
        ],

        bodyPadding: 24,

        items: [
            {
                frame: true,
                tbar: {
                    items: [
                        {
                            xtype: 'title',
                            text: 'Title'
                        },
                        '->',
                        {
                            icon: 'search'
                        },
                        {
                            icon: 'delete'
                        },
                        {
                            icon: 'more_vert'
                        }
                    ]
                },
                html: 'Basic toolbar with icons'
            },
            
            {
                frame: true,
                margin: '24 0 0 0',
                tbar: {
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
                html: 'Basic toolbar with text buttons'
            },
            
            {
                frame: true,
                margin: '24 0 0 0',
                bbar: {
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
                html: 'Basic toolbar with text buttons in footer'
            }
        ]
    }
});
