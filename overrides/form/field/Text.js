Ext.define('Material.form.field.Text', {
    override: 'Ext.form.field.Text',

    labelAlign: 'top',
    labelSeparator: '',

    listeners: {
        change: function (field, value) {
            if (value) {
                field.el.addCls('not-empty');
            }
        },
		focus: function () {
            this.addCls('had-focus');
		}
    }
});