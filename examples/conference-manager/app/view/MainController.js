Ext.define('CM.view.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    routes: {
        ':section': 'onSectionChange'
    },

    currentSection: null,

    onSectionChange: function (section) {
        var view = this.getView(),
            sectionItem = view.down('#' + section);

        view.setTitle(Ext.String.capitalize(section));

        this.currentSection = section;

        if (sectionItem) {
            view.setActiveItem(sectionItem);
        } else {
            view.on('add', this.onAdd, this); // , { single: true }
        }
    },

    onAdd: function () {
        var view = this.getView(),
            section = this.currentSection,
            sectionItem = view.down('#' + section);

        if (sectionItem) {
            view.setActiveItem(sectionItem);
            view.un('add', this.onAdd, this);
        }
    }
});