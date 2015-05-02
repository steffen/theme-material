// extend from menu since it has already some focusable and esc stuff
// really just needs the sliding in and out part
Ext.define('Material.panel.Drawer', {
    extend: 'Ext.Panel',
    xtype: 'drawer',

    floating: true,
    contrain: false,
    
    width: 200,
    
    show: function () {
        
    },
    
    hide: function () {

    }

    //onEscapeKey
    //onFocusLeave
});