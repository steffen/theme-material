Ext.define('KitchenSink.view.button.MaterialBasicButtons', {
    extend: 'Ext.Panel',
    xtype: 'material-basic-buttons',

    requires: [
        'Material.button.FloatingAction'
    ],

    bodyPadding: 24,

    scrollable: true,

    defaults: {
        ui: 'material-card',
        margin: '0 0 24 0'
    },

    items: [
        /**
         * Buttons
         */
        {
            tbar: [
                {
                    xtype: 'title',
                    text: 'Basic Buttons'
                },
                '->',
                {
                    icon: 'link',
                    href: 'http://www.google.com/design/spec/components/buttons.html'
                }
            ],

            bodyPadding: 24,
            html: [
                '<p>Material Design does not suggest using different button sizes (small, medium, large) and buttons with icons and text in one (as it is seen as redundant and noise).<br>',
                'Instead buttons are shown automatically in their optimal size depending on device type (desktop, tablet or phone).</p>',
                '<p>See available button styles below.</p>'
            ].join('')
        },

        /**
         * Flat Buttons
         */
        {
            itemId: 'flat-button',
            tbar: [
                {
                    xtype: 'title',
                    text: 'Flat Buttons'
                },
                '->',
                {
                    icon: 'link',
                    href: 'http://www.google.com/design/spec/components/buttons.html#buttons-flat-raised-buttons'
                }
            ],

            bodyPadding: 24,
            html: 'Use flat buttons for toolbars and dialogs to avoid excessive layering.',

            bbar: [
                '->',
                {
                    text: 'Button'
                },
                {
                    text: 'Another Button'
                },
                '->'
            ]
        },

        /**
         * Raised Buttons
         */
        {
            itemId: 'raised-button',
            tbar: [
                {
                    xtype: 'title',
                    text: 'Raised Buttons'
                },
                '->',
                {
                    icon: 'link',
                    href: 'http://www.google.com/design/spec/components/buttons.html#buttons-flat-raised-buttons'
                }
            ],

            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            items: [
                {
                    bodyPadding: 24,
                    html: 'Raised buttons are the default styles for buttons. They add dimension to mostly flat layouts. They emphasize functions on busy or wide spaces.'
                },
                {
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    },
                    bodyPadding: 24,
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
            itemId: 'floating-action-button',
            tbar: [
                {
                    xtype: 'title',
                    text: 'Floating Action Buttons'
                },
                '->',
                {
                    icon: 'link',
                    href: 'http://www.google.com/design/spec/components/buttons-floating-action-button.html'
                }
            ],

            items: [
                {
                    bodyPadding: 24,
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
                        floating: false
                    },
                    items: [
                        {
                            xtype: 'floatingactionbutton'
                        },
                        {
                            xtype: 'floatingactionbutton',
                            icon: 'edit'
                        },
                        {
                            xtype: 'floatingactionbutton',
                            icon: 'favorite'
                        }
                    ]
                }
            ]
        }
    ]
});
