Ext.define('CM.view.EditModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.edit',

	data: {
		action: null,
		type: null,
		action: null,
		title: null,
		record: null
	}

	//formulas: {
	//	title: function (get) {
	//		var action = get('action'),
	//			title = action + ' ' + get('type'),
	//			recordName = get('record.name')  || get('record.title') || ''; // prevent undefined in title
	//
	//		if (action == 'Edit') {
	//			title += ' "' + recordName + '"';
	//		}
	//
	//		return title;
	//	}
	//}
});