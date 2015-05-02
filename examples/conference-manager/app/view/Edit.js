Ext.define('CM.view.Edit', {
    extend: 'Ext.Window',
	xtype: 'appedit',

    requires: [
		'CM.view.EditModel',
        'CM.view.EditController'
    ],

    controller: 'edit',

	viewModel: {
		type: 'edit'
	},

	config: {
		// the model class which this edit view is bind to
		model: null
	},

    width: 500,
    height: 400,
    layout: 'fit',

	draggable: false, // dragging is triggered when inspecting via control click easier, so disabling for now

	bind: {
		title: '{action} {title}'
	},

    bbar: [
        {
            xtype: 'tbfill'
        },
        {
            text: 'Cancel',
            scale: 'medium',
            handler: 'onCancelClick'
        },
        {
            text: 'Save',
            scale: 'medium'
        }
    ],

	initComponent: function () {
		this.items = {
			xtype: 'form',
			bodyPadding: '0 24 24 24',
            scrollable: true,
			defaults: {
				anchor: '100%'
			},
			items: Scaffold.Form.buildItems(this.getModel())
		};

		this.callParent();
	}
});