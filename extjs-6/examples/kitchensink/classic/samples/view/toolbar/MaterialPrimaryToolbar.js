Ext.define('KitchenSink.view.toolbar.MaterialPrimaryToolbar', {
    extend: 'Ext.Panel',
    xtype: 'material-primary-toolbar',

    requires: [
        'Material.container.plugin.FlexibleToolbar'
    ],

    bodyPadding: 24,

    scrollable: true,

    defaults: {
        ui: 'material-card',
        margin: '0 0 24 0'
    },

    items: [
        {
            itemId: 'primary-toolbar',
            tbar: [
                {
                    xtype: 'title',
                    text: 'Primary Toolbar'
                }
            ],

            bodyPadding: 24,

            items: [
                {
                    height: 120,
                    style: 'background: #eee;',
                    userCls: 'example-viewport',
                    tbar: {
                        ui: 'material-primary-toolbar-shadow',
                        items: [
                            {
                                icon: 'menu'
                            },
                            {
                                xtype: 'title',
                                text: 'Title'
                            },
                            '->',
                            {
                                icon: 'settings'
                            }
                        ]
                    }
                },
                {
                    bodyPadding: '8 0 32 0',
                    cls: 'example-caption',
                    html: 'Primary toolbar with shadow'
                },
                {
                    height: 120,
                    userCls: 'example-viewport',
                    tbar: {
                        ui: 'material-primary-toolbar',
                        items: [
                            {
                                icon: 'menu'
                            },
                            {
                                xtype: 'title',
                                text: 'Title'
                            },
                            '->',
                            {
                                icon: 'settings'
                            }
                        ]
                    }
                },
                {
                    cls: 'example-caption',
                    bodyPadding: '8 0 24 0',
                    html: 'Primary toolbar without shadow'
                }
            ]
        }
    ]
});
