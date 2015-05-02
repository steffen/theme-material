Ext.define('CM.view.EditController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.edit',

    control: {
        '#': {
            show: 'onEditShow',
            close: 'onEditClose'
        }
    },

    onCancelClick: function () {
        var view = this.getView();

        view.close();
    },

    onEditShow: function () {
        this.setMasked(true);
    },

    onEditClose: function () {
        this.setMasked(false);
    },

    setMasked: function (mask) {
        var mainView = Ext.ComponentQuery.query('appmain')[0],
            floatingActionButton = Ext.ComponentQuery.query('floatingactionbutton')[0],
            action = mask ? 'mask' : 'unmask';

        mainView[action]();
        floatingActionButton[action]();
    }
});
