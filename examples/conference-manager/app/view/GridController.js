Ext.define('CM.view.GridController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.grid',

    onAddClick: function (button) {
        var grid = this.getView(),
            store = grid.getStore(),
            record = Ext.create(store.getModel());

        this.showEditView(grid, record, 'New', button);
    },

    onRowClick: function (grid, record, tr) {
        this.showEditView(grid, record, 'Edit', Ext.fly(tr));
    },

    showEditView: function (grid, record, action, animateTarget) {
        var store = grid.getStore(),
            editView = Ext.create('CM.view.Edit', {
                model: store.getModel(),
                animateTarget: animateTarget
            });

        editView.getViewModel().setData({
            //action: 'Edit',
            //type: store.storeId,
            action: action,
            title: store.storeId,
            record: record
        });

        editView.show();
    }
});
