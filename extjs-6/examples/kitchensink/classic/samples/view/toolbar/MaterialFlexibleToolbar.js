Ext.define('KitchenSink.view.toolbar.MaterialFlexibleToolbar', {
    extend: 'Ext.Panel',
    xtype: 'material-flexible-toolbar',

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
            itemId: 'flexible-toolbar',
            tbar: [
                {
                    xtype: 'title',
                    text: 'Flexible Toolbar'
                }
            ],

            bodyPadding: 24,

            items: [
                {
                    xtype: 'panel',
                    style: 'background: #eee',
                    userCls: 'example-viewport',
                    height: 300,
                    bodyPadding: '0 0 24 0',
                    plugins: 'materialflexibletoolbar',
                    tbar: {
                        ui: 'material-primary-toolbar',
                        items: [
                            {
                                icon: 'menu'
                            }
                        ]
                    },
                    items: {
                        ui: 'material-card',
                        margin: '0 128 32 128',
                        height: 200,
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
                                    icon: 'view_module'
                                },
                                {
                                    icon: 'more_vert'
                                }
                            ]
                        }
                    }
                },
                {
                    cls: 'example-caption',
                    bodyPadding: '8 0 24 0',
                    html: 'Flexible toolbar with a card'
                }
            ]
        }
    ]
});
