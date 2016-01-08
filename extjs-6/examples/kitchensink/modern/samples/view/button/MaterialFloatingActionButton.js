/**
 * Little helper class for "materialfloatingactionbutton" that sets the
 * private floating property to false in order to show multiple floating action buttons within the basic button example.
 */
Ext.define('KitchenSink.view.button.MaterialFloatingActionButton', {
    extend: 'Material.FloatingActionButton',
    
    xtype: 'kitchensinkmaterialfloatingactionbutton',
    
    floating: false
});