/**
 * This example shows how to create basic panels. Panels typically have a header and a body,
 * although the header is optional. The panel header can contain a title, and icon, and
 * one or more tools for performing specific actions when clicked.
 */
Ext.define('KitchenSink.view.Forms', {
    extend: 'Ext.Panel',
    xtype: 'forms',
    
    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldContainer'
    ],

    bodyPadding: 24,

    scrollable: true,

    defaults: {
        ui: 'material-card',
        margin: '0 0 24 0'
    },

    items: [
        {
            tbar: [
                {
                    xtype: 'title',
                    text: 'Forms'
                },
                '->',
                {
                    icon: 'link',
                    href: 'http://www.google.com/design/spec/components/buttons.html'
                }
            ],

            bodyPadding: 24,
            html: [
                '<p>There are three standard types of buttons:</p>',
                '<ul>',
                '<li><b style="letter-spacing: .1px;">Flat button</b>: A button made of ink that displays ink reactions on press but does not lift.</li>',
                '<li><b style="letter-spacing: .1px;">Raised button:</b> A typically rectangular material button that lifts and displays ink reactions on press.</li>',
                '<li><b style="letter-spacing: .1px;">Floating action button:</b> A circular material button that lifts and displays an ink reaction on press.</li>',
                '</ul>'
            ].join('')
        },

        {
            itemId: 'login-form',
            tbar: [
                {
                    xtype: 'title',
                    text: 'Login Form'
                },
                '->',
                {
                    icon: 'link',
                    href: 'http://www.google.com/design/spec/components/buttons.html#buttons-flat-raised-buttons'
                }
            ],

            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },

            items: [
                {
                    width: '100%',
                    bodyPadding: 24,
                    html: 'Raised buttons add dimension to mostly flat layouts. They emphasize functions on busy or wide spaces.'
                },
                {
                    xtype: 'form',
                    layout: 'anchor',
                    //defaults: {
                    //    anchor: '70%'
                    //},
                    //layout: {
                    //    type: 'vbox',
                    //    pack: 'center'
                    //},
                    width: 400,
                    bodyPadding: '24 24 48 24',
                    defaults: {
                        xtype: 'textfield',
                        width: 240,
                        margin: '8 0 0 5'
                    },
                    items: [
                        {
                            fieldLabel: 'Username'
                        },
                        {
                            // TODO: inputType: 'password',
                            fieldLabel: 'Password'
                        },
                        {
                            xtype: 'button',
                            width: 250,
                            margin: '24 0 0 0',
                            ui: 'material-raised-colored',
                            text: 'Login'
                        }
                    ]
                }
            ]
        },

        {
            itemId: 'edit-form',
            tbar: [
                {
                    xtype: 'title',
                    text: 'Edit Form'
                },
                '->',
                {
                    icon: 'link',
                    href: 'http://www.google.com/design/spec/components/buttons.html#buttons-flat-raised-buttons'
                }
            ],

            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },

            bodyPadding: 24,

            items: [
                {
                    width: '100%',
                    //bodyPadding: 24,
                    html: 'Raised buttons add dimension to mostly flat layouts. They emphasize functions on busy or wide spaces.'
                },
                {
                    xtype: 'form',
                    layout: 'anchor',
                    ui: 'material-card',
                    //defaults: {
                    //    anchor: '100%'
                    //},
                    //layout: {
                    //    type: 'vbox',
                    //    pack: 'center'
                    //},
                    margin: '32 0 24 0',
                    width: 400,
                    bodyPadding: '24 24 48 24',
                    defaults: {
                        xtype: 'textfield',
                        //width: 240,
                        anchor: '100%',
                        margin: '8 0 0 5'
                    },
                    
                    tbar: [
                        {
                            xtype: 'title',
                            text: 'Edit'
                        }
                    ],
                    
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            defaults: {
                                xtype: 'textfield'
                            },
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    flex: 1,
                                    name: 'firstName',
                                    fieldLabel: 'First Name',
                                    padding: '0 4 0 0'
                                },
                                {
                                    flex: 1,
                                    name: 'lastName',
                                    fieldLabel: 'Last Name',
                                    padding: '0 0 0 4'
                                }
                            ]
                        },
                        {
                            fieldLabel: 'Company'
                        },
                        {
                            xtype: 'textareafield',
                            fieldLabel: 'Biography'
                        }
                    ],
                    
                    bbar: [
                        '->',
                        {
                            text: 'Cancel'
                        },
                        {
                            ui: 'material-raised-colored',
                            text: 'Save'
                        }
                    ]
                }
            ]
        }
    ]
});
