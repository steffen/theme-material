/**
 * This example shows how to create basic panels. Panels typically have a header and a body,
 * although the header is optional. The panel header can contain a title, and icon, and
 * one or more tools for performing specific actions when clicked.
 */
Ext.define('KitchenSink.view.panel.BasicPanels', {
    extend: 'Ext.Panel',
    xtype: 'basic-panels',

    //requires: [
    //    'Ext.layout.container.Table'
    //],

    platformConfig: {
        '!phone': {
            centered: true,
            width: 440,
            layout: 'hbox',
            defaults: {
                xtype: 'panel',
                width: 220,
                height: 380,
                bodyPadding: 24
            }
        },
        phone: {
            centered: false,
            width: null,
            margin: 8,
            //scrollable: true,
            //layout: {
            //    type: 'vbox',
            //    align: 'stretch'
            //},
            defaults: {
                xtype: 'panel',
                height: 240,
                bodyPadding: 16
            }
        }
    },
    
    ui: 'material-card',

    initialize: function () {
        this.setItems([
            {
                html: KitchenSink.DummyText.mediumText
            },
            {
                title: 'Title',
                cls: !Ext.is.Phone ? 'material-border-left' : null,
                platformConfig: {
                    '!phone': {
                        bodyPadding: '0 24 24'
                    },
                    phone: {
                        bodyPadding: '0 16 16'
                    }
                },
                html: KitchenSink.DummyText.mediumText
            }
        ]);

        this.callParent();
    }
});
