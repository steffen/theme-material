/**
 * This example demonstrates how to create framed panels. Framing is a theme-specific
 * concept that adds rounded corners and sometimes a background-color, depending on what
 * is specified in the theme css.
 */
Ext.define('KitchenSink.view.panel.FramedPanels', {
    extend: 'Ext.Panel',
    xtype: 'framed-panels',

    //layout: {
    //    type: 'table',
    //    columns: 3,
    //    tdAttrs: { style: 'padding: 10px; vertical-align: top;' }
    //},

    platformConfig: {
        '!phone': {
            centered: true,
            width: 440,
            layout: 'hbox',
            defaults: {
                xtype: 'panel',
                width: 220,
                height: 380,
                margin: 10,
                bodyPadding: 24,
                ui: 'material-card'
            }
        },
        phone: {
            centered: false,
            width: null,
            margin: '8 8 0 8',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                xtype: 'panel',
                height: 220,
                margin: '0 0 8 0',
                bodyPadding: 24,
                ui: 'material-card'
            }
        }
    },

    //<example>
    profiles: {
        classic: {
        },
        neptune: {
        }
    },
    //</example>

    initialize: function () {
        this.setItems([
            {
                html: KitchenSink.DummyText.mediumText
            },
            {
                title: 'Title',
                bodyPadding: '0 24 24 24',
                html: KitchenSink.DummyText.mediumText
            }
        ]);

        this.callParent();
    }
});
