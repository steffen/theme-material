Ext.define('KitchenSink.view.button.MaterialBasicButtons', {
    extend: 'Ext.Panel',
    xtype: 'material-basic-buttons',

    requires: [
        'Material.FloatingActionButton'
    ],

    platformConfig: {
        '!phone': {
            bodyPadding: 24,
            defaults: {
                xtype: 'panel',
                ui: 'material-card',
                margin: '0 0 24 0',
                bodyPadding: 24
            }
        },
        phone: {
            bodyPadding: 8,
            defaults: {
                xtype: 'panel',
                ui: 'material-card',
                margin: '0 0 16px 0',
                bodyPadding: 16
            }
        }
    },

    items: [
        /**
         * Buttons
         */
        {
            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'title',
                            title: 'Basic Buttons'
                        }
                    ]
                }
            ],
            
            html: '<p>Material Design does not suggest using different button sizes such as small, medium and large. Instead buttons are shown automatically in their optimal size depending on device type (desktop, tablet or phone).</p>'
        },

        /**
         * Toolbar Buttons
         */
        {
            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'title',
                            title: 'Toolbar Buttons'
                        },
                        '->',
                        {
                            icon: 'info',
                            href: 'https://www.google.com/design/icons'
                        }
                    ]
                }, {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    platformConfig: {
                        phone: {
                            height: 44 * 3,
                            layout: {
                                type: 'vbox',
                                align: 'start'
                            }
                        }
                    },
                    items: [
                        {
                            text: 'Text Button'
                        },
                        {
                            text: 'Icon and Text Button',
                            icon: 'format_color_text'
                        },
                        // TODO: add support for menu buttons in modern
                        //{
                        //    text: 'Menu Button',
                        //    icon: 'insert_photo',
                        //    menu: [{
                        //        text: 'Menu Button 1'
                        //    }]
                        //},
                        {
                            icon: 'format_bold'
                        }
                    ]
                }
            ],
            
            html: 'Use default toolbar buttons for toolbars with many buttons or that require menu buttons.'
        },

        /**
         * Action Buttons
         */
        {
            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'title',
                            title: 'Action Buttons'
                        },
                        '->',
                        {
                            icon: 'info',
                            href: 'http://www.google.com/design/spec/components/buttons.html#buttons-flat-raised-buttons'
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    ui: 'action',
                    items: [
                        '->',
                        {
                            text: 'Button'
                        },
                        {
                            text: 'Another Button'
                        }
                    ]
                }
            ],
            
            html: 'Use flat action buttons for simple toolbars and dialogs to avoid excessive layering.'
        },

        /**
         * Raised Buttons
         */
        {
            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            bodyPadding: 0,

            platformConfig: {
                '!phone': {
                    defaults: {
                        xtype: 'panel',
                        bodyPadding: 24
                    }
                },
                phone: {
                    defaults: {
                        xtype: 'panel',
                        bodyPadding: 16
                    }
                }
            },

            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'title',
                            title: 'Raised Buttons'
                        },
                        '->',
                        {
                            icon: 'info',
                            href: 'http://www.google.com/design/spec/components/buttons.html#buttons-flat-raised-buttons'
                        }
                    ]
                },
                {
                    html: 'Raised buttons are the default styles for buttons. They add dimension to mostly flat layouts. They emphasize functions on busy or wide spaces.'
                },
                {
                    platformConfig: {
                        '!phone': {
                            layout: {
                                type: 'hbox',
                                pack: 'center'
                            }
                        },
                        phone: {
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            }
                        }
                    },
                    items: [
                        {
                            xtype: 'button',
                            text: 'Default Raised Button'
                        },
                        {
                            xtype: 'button',
                            ui: 'material-raised-colored',
                            text: 'Colored Raised Button'
                        },
                        {
                            xtype: 'button',
                            ui: 'material-raised-lime',
                            text: 'Custom Raised Button'
                        }
                    ]
                }
            ]
        },

        /**
         * Floating Action Buttons
         */
        {
            bodyPadding: 0,
            
            defaults: {
                xtype: 'panel'
            },

            platformConfig: {
                '!phone': {
                    defaults: {
                        bodyPadding: 24
                    }
                },
                phone: {
                    defaults: {
                        bodyPadding: 16
                    }
                }
            },

            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    items:  [
                        {
                            xtype: 'title',
                            title: 'Floating Action Buttons'
                        },
                        '->',
                        {
                            icon: 'info',
                            href: 'http://www.google.com/design/spec/components/buttons-floating-action-button.html'
                        }
                    ]
                },
                {
                    html: [
                        '<p>Floating action buttons are used for a promoted action. They are distinguished by a circled icon floating above the UI and have motion behaviors that include morphing, launching, and a transferring anchor point.</p>',
                        '<p>Make floating action buttons positive actions like Create, Favorite, Share, Navigate, and Explore.</p>'
                    ].join('')
                },
                {
                    height: 128,
                    bodyPadding: '0 24',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    },
                    defaults: {
                        margin: '24 24 24 0',
                        floating: false,
                        hidden: false
                    },
                    items: [
                        {
                            xtype: 'materialfloatingactionbutton',
                            floating: false
                        },
                        {
                            xtype: 'materialfloatingactionbutton',
                            icon: 'edit',
                            floating: false
                        },
                        {
                            xtype: 'materialfloatingactionbutton',
                            icon: 'favorite'
                        }
                    ]
                }
            ]
        }
    ]
});
