/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('CM.Application', {
    extend: 'Ext.app.Application',
    
    name: 'CM',

    requires: [
        'Scaffold.Config',
		'Scaffold.Form',

        'CM.config.Session',
        'CM.config.Speaker',
        'CM.config.Track',
        'CM.config.Location'
    ],

    stores: [
        // TODO: add global / shared stores here
    ],

    views: [
        'CM.view.Main',
        'CM.view.Drawer',
        'CM.view.Edit',
        'CM.view.Grid'
    ],
    
    init: function () {
        Scaffold.Config.setAppNamespace(this.getName());
        Scaffold.Config.setApiModelsPath('data/meta/models.json');
        Scaffold.Config.setApiPath('data/{0}.json');

        Ext.setGlyphFontFamily('Material Design Iconic Font');

        // init here already, otherwise the section route handler is not triggered (as it's in main's view controller)
        main = Ext.widget('appmain');

        Scaffold.Config.init({
            callback: function () {
                var items;

                items = Ext.Array.map(Scaffold.Config.models, function (model) {
                    return Scaffold.Grid.build(model, {
                        xtype: 'app-grid',
                        itemId: model.pluralName.toLowerCase(),
                        title: null
                    });
                }, this);

                main.add(items);
            }
        });
    }
});
