Ext.define('CM.view.Drawer', {
    extend: 'Ext.menu.Menu',

    width: 240,
    constrain: false,
    //baseCls: Ext.baseCSSPrefix + 'panel',
    ui: 'drawer',
    header: {
        title: 'Sessions',
        titlePosition: 1,
        height: 63, // 1px border
        items: [
            {
                xtype: 'button',
                glyph: 62113,
                margin: '0 31 0 18',
                scale: 'medium'
            }
        ]
    },
    defaults: {
        padding: '0 0 0 8'
    },
    items: [
        {
            text: 'Sessions',
            href: '#sessions'
        },
        {
            text: 'Speakers',
            href: '#speakers'
        },
        {
            text: 'Tracks',
            href: '#tracks'
        },
        {
            text: 'Locations',
            href: '#locations'
        }
    ]

    //onHide: function () {
    //    return;
    //}

});