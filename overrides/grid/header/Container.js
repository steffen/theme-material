Ext.define('Material.grid.header.Container', {
    override: 'Ext.grid.header.Container',

    getMenuItems: function () {
        var me = this,
            menuItems = [],
            hideableColumns = me.enableColumnHide ? me.getColumnMenu(me) : null;

        menuItems = hideableColumns;

        return menuItems;
    },

    beforeMenuShow: Ext.emptyFn,

    onMenuHide: function(menu) {
        if (menu.activeHeader) {
            menu.activeHeader.setMenuActive(false);
        }
    }
})