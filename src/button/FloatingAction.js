Ext.define('Material.button.FloatingAction', {
    extend: 'Ext.Button',
    xtype: 'floatingactionbutton',

    floating: true,
    shadow: false,
    ui: 'floating-action',
    width: 55,
    height: 55,

    glyph: 61691,

    initComponent: function() {
        this.scale = null;

        this.callParent();
    },

    setScale: Ext.emptyFn,

    mask: function () {
        this.callParent(arguments);

        this.setDisabled(true);
    },

    unmask: function () {
        this.callParent(arguments);

        this.setDisabled(false);
    }
});