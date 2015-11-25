Ext.define('KitchenSink.view.Toolbars', {
    extend: 'Ext.Panel',
    xtype: 'toolbars',

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
        /**
         * Toolbars
         */
        {
            tbar: [
                {
                    xtype: 'title',
                    text: 'Toolbars'
                },
                '->',
                {
                    icon: 'link',
                    //href: 'http://www.google.com/design/spec/components/toolbars.html'
                    href: 'http://www.google.com/design/spec/layout/structure.html#structure-toolbars'
                }
            ],

            bodyPadding: 24,
            html: [
                '<p>This theme defines three types of toolbars:</p>',
                '<ul>',
                '<li><b>Primary toolbar</b>: An application usually only has one primary toolbar.</li>',
                '<li><b>Flexible toolbar</b>: A flexible toolbar goes behind a card.</li>',
                '<li><b>Default toolbar</b>: The default toolbar used in cards.</li>',
                '</ul>'
            ].join('')
        },

        /**
         * Primary Toolbar
         */
        {
            itemId: 'primary-toolbar',
            tbar: [
                {
                    xtype: 'title',
                    text: 'Primary Toolbar'
                },
                '->',
                {
                    icon: 'link',
                    href: 'http://www.google.com/design/spec/components/buttons.html#buttons-flat-raised-buttons'
                }
            ],

            bodyPadding: 24,
            
            items: [
                {
                    bodyPadding: '0 0 24 0',
                    html: 'Primary toolbar without shadow'
                },
                {
                    height: 100,
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
                    bodyPadding: '0 0 24 0',
                    html: 'Primary toolbar with shadow'
                },
                {
                    height: 100,
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
                }
            ]
        },

        /**
         * Flexible Toolbar
         */
        {
            itemId: 'flexible-toolbar',
            tbar: [
                {
                    xtype: 'title',
                    text: 'Flexible Toolbar'
                },
                '->',
                {
                    icon: 'link',
                    href: 'http://www.google.com/design/spec/layout/structure.html#structure-toolbars'
                }
            ],

            bodyPadding: 24,

            items: [
                {
                    bodyPadding: '0 0 24 0',
                    html: 'Flexible toolbar and card toolbar'
                },
                {
                    xtype: 'panel',
                    height: 250,
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
                        height: 150,
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
                }
            ]
        },

        /**
         * Default Toolbar
         */
        {
            itemId: 'default-toolbar',
            tbar: [
                {
                    xtype: 'title',
                    text: 'Default Toolbar'
                },
                '->',
                {
                    icon: 'link',
                    href: 'http://www.google.com/design/spec/components/buttons.html#buttons-flat-raised-buttons'
                }
            ],

            bodyPadding: 24,

            items: [
                {
                    bodyPadding: '0 0 24 0',
                    html: 'Primary toolbar without shadow'
                },
                {
                    height: 150,
                    ui: 'material-card',
                    tbar: {
                        items: [
                            {
                                xtype: 'title',
                                text: 'Title'
                            },
                            '->',
                            {
                                icon: 'delete'
                            }
                        ]
                    }
                },
                {
                    bodyPadding: '32 0 24 0',
                    html: 'Primary toolbar with shadow'
                },
                {
                    height: 150,
                    ui: 'material-card',
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
                    }
                },
                {
                    bodyPadding: '32 0 24 0',
                    html: 'Primary toolbar with shadow'
                },
                {
                    height: 150,
                    ui: 'material-card',
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
                    }
                }
            ]
        }
    ]
});
