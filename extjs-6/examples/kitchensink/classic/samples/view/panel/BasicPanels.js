/**
 * This example shows how to create basic panels. Panels typically have a header and a body,
 * although the header is optional. The panel header can contain a title, and icon, and
 * one or more tools for performing specific actions when clicked.
 */
Ext.define('KitchenSink.view.panel.BasicPanels', {
    extend: 'Ext.Panel',
    xtype: 'basic-panels',
    width: 660,
    requires: [
        'Ext.layout.container.Table'
    ],

    layout: {
        type: 'table',
        columns: 3,
        tdAttrs: { style: 'padding: 0px; vertical-align: top;' }
    },
    
    ui: 'material-card',
    //margin: 24,

    defaults: {
        xtype: 'panel',
        width: 220,
        height: 380
    },
    //<example>
    profiles: {
        classic: {
            percentChangeColumn: {
                width: 75
            }
        },
        neptune: {
            percentChangeColumn: {
                width: 100
            }
        }
    },
    //</example>

    initComponent: function () {
        this.items = [
            {
                html: KitchenSink.DummyText.mediumText
            },
            {
                title: 'Title',
                cls: 'material-border-left material-border-right',
                html: KitchenSink.DummyText.mediumText
            },
            {
                title: 'Collapsible',
                collapsible: true,
                html: KitchenSink.DummyText.mediumText
            },
            {
                title: 'Tools',
                cls: 'material-border-top',
                collapsed: true,
                collapsible: true,
                width: 660,
                html: KitchenSink.DummyText.mediumText,
                tools: [
                    { type:'pin' },
                    { type:'refresh' },
                    { type:'search' },
                    { type:'save' }
                ],
                colspan: 3
            }
        ];

        this.callParent();
    }
});
