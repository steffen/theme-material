/**
 * This example shows how to create basic panels. Panels typically have a header and a body,
 * although the header is optional. The panel header can contain a title, and icon, and
 * one or more tools for performing specific actions when clicked.
 */
Ext.define('KitchenSink.view.Windows', {
    extend: 'Ext.Panel',
    xtype: 'windows',

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
                    text: 'Windows'
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
            itemId: 'basic-window',
            tbar: [
                {
                    xtype: 'title',
                    text: 'Basic Window'
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
                    html: 'Raised buttons add dimension to mostly flat layouts. They emphasize functions on busy or wide spaces.'
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
                            ui: 'material-raised',
                            text: 'Open Window',
                            handler: function () {
                                var win = Ext.create('Ext.Window', {
                                    width: 600,
                                    height: 400,
                                    closable: true,
                                    
                                    title: 'Window',
                                    
                                    bodyPadding: 24,
                                    
                                    html: 'Content goes here.',
                                    
                                    bbar: [
                                        '->',
                                        {
                                            text: 'Cancel',
                                            handler: function () {
                                                this.up('window').close();
                                            }
                                        },
                                        {
                                            text: 'Save',
                                            handler: function () {
                                                this.up('window').close();
                                            }
                                        }
                                    ]
                                });
                                
                                win.show()
                            }
                        }
                    ]
                }
            ]
        },

        {
            itemId: 'message-box',
            tbar: [
                {
                    xtype: 'title',
                    text: 'Message Box'
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
                    html: 'Raised buttons add dimension to mostly flat layouts. They emphasize functions on busy or wide spaces.'
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
                            ui: 'material-raised',
                            text: 'Open Alert Message',
                            handler: function () {
                                Ext.Msg.alert('Status', 'Changes saved successfully.');
                            }
                        },
                        {
                            xtype: 'button',
                            ui: 'material-raised',
                            text: 'Open Confirmation Message',
                            handler: function () {
                                Ext.Msg.confirm('Confirm', 'Are you sure you want to do that?',
                                    function (choice) {
                                        if (choice === 'yes') {
                                            window.location.reload();
                                        }
                                    }
                                );
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
