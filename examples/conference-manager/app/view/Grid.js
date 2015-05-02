Ext.define('CM.view.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'app-grid',

	requires: [
		'CM.view.GridController'
	],

	controller: 'grid',

    //mixin: [
    //    'Ext.mixin.Responsive'
    //],
    //
    //responsiveConfig: {
    //    'width > 1024': {
    //        //padding: '16 72 72 72'
    //        hidden: false
    //    },
    //    'width <= 1024': {
    //        //padding: '0'
    //        hidden: true
    //    }
    //},

    padding: '16 72 72 72',

    //sortableColumns: false,

    //ui: 'padded',

	listeners: {
		rowclick: 'onRowClick'
	},


    //store: {
    //    fields: [
    //        'title',
    //        'speaker',
    //        'track',
    //        'date',
    //        'start_time',
    //        'end_time'
    //    ],
    //    data: [
    //        ['Materializing Ext JS', 'Steffen Hiller', 'Design', '4/7', '10:00 AM', '10:50 AM'],
    //        ['Theming Ext JS', 'Steffen Hiller', 'Design', '4/7', '11:00 AM', '11:50 AM']
    //    ]
    //},
    //columns: [
    //    {
    //        text: 'Title',
    //        dataIndex: 'title',
    //        flex: 1,
    //        tdCls: 'bold',
    //        menuDisabled: true
    //    },
    //    {
    //        text: 'Speaker',
    //        dataIndex: 'speaker',
    //        width: 150,
    //        menuDisabled: true
    //    },
    //    {
    //        text: 'Track',
    //        dataIndex: 'track',
    //        width: 150,
    //        menuDisabled: true
    //    },
    //    {
    //        text: 'Date',
    //        dataIndex: 'date',
    //        width: 80,
    //        menuDisabled: true
    //    },
    //    {
    //        text: 'Start Time',
    //        dataIndex: 'start_time',
    //        width: 100,
    //        menuDisabled: true
    //    },
    //    {
    //        text: 'End Time',
    //        dataIndex: 'end_time',
    //        width: 100,
    //        menuDisabled: true
    //    }
    //],

    setPadding: function (padding) {
        if (this.el) {
            this.el.setPadding(padding);
            this.doLayout();
        }
    },

    afterComponentLayout: function () {
        var addButtonOffsets = [this.el.getPadding('r') * -1, (this.el.getPadding('b') + 56) * -1];

        this.callParent(arguments);

        this.addButton = this.addButton || Ext.create('Material.button.FloatingAction', {
			ownerCt: this,
			handler: 'onAddClick'
        });

        this.addButton.showBy(this, 'c-br', addButtonOffsets);
    }

});