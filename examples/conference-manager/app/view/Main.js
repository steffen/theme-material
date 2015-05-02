/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('CM.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'appmain',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.layout.container.Border',

        'Material.button.FloatingAction',

        'Scaffold.Grid'
    ],

    controller: 'main',

    //layout: 'fit',

    //dockedItems: [{
    //    xtype: 'header',
    //    dock: 'top',
    //    title: 'Sessions',
    //    height: 64
    //}],

    plugins: 'viewport',

    header: {
        title: 'Sessions',
        titlePosition: 1,
        height: 64,
        defaults: {
            scale: 'medium'
        },
        items: [
            {
                xtype: 'button',
                glyph: 62113,
                margin: '0 31 0 8',
                handler: function () {
                    var menu = Ext.create('CM.view.Drawer', {
                        height: Ext.getBody().getHeight()
                    });

                    menu.showAt(-200, 0);

                    menu.showAt(0, 0, {
                        duration: 300
                    });
                }
            },
            {
                xtype: 'button',
                glyph: 61536,
                margin: '0 9',
                handler: function () {
                    var menu = Ext.getCmp('grid').getHeaderContainer().getMenu();

                    menu.showBy(this);
                }
            }
        ]
    },

    layout: 'card'

    //items: {
    //    xtype: 'appgrid',
    //
    //    plugins: 'responsive',
    //
    //    responsiveConfig: {
    //        'width > 1024': {
    //            padding: '16 72 72 72'
    //            //hidden: false
    //        },
    //        'width <= 1024': {
    //            padding: '0'
    //            //hidden: true
    //        }
    //    }
    //}
});
