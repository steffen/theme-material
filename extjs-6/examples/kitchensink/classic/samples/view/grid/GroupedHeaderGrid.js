/**
 * This example shows how to create a grid with column headers which are nested within
 * category headers.
 *
 * Category headers do not reference Model fields via a `dataIndex`, rather they contain
 * child header definitions (which may themselves either contain a `dataIndex` or more
 * levels of headers).
 */
Ext.define('KitchenSink.view.grid.GroupedHeaderGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'grouped-header-grid',
    store: 'Companies',
    title: 'Grouped Header Grid',
    //<example>
    otherContent: [{
        type: 'Store',
        path: 'samples/store/Companies.js'
    },{
        type: 'Model',
        path: 'samples/model/Company.js'
    }],
    profiles: {
        classic: {
            width: 600,
            height: 350,
            frame: false,
            columnLines: true,
            priceColumnWidth: 75,
            changeColumnWidth: 80,
            lastUpdatedColumnWidth: 85,
            percentChangeColumnWidth: 75
        },
        neptune: {
            width: 675,
            height: 350,
            frame: false,
            columnLines: true,
            priceColumnWidth: 75,
            changeColumnWidth: 80,
            lastUpdatedColumnWidth: 115,
            percentChangeColumnWidth: 100
        },
        'neptune-touch': {
            width: 720,
            height: 350,
            frame: false,
            columnLines: true,
            priceColumnWidth: 75,
            changeColumnWidth: 90,
            lastUpdatedColumnWidth: 125,
            percentChangeColumnWidth: 115
        },
        material: {
            width: 720,
            height: 450,
            frame: true,
            columnLines: false,
            priceColumnWidth: 105,
            changeColumnWidth: 105,
            percentChangeColumnWidth: 120,
            lastUpdatedColumnWidth: 140
        }
    },
    //</example>

    initComponent: function () {
        Ext.apply(this, {
            width: this.profileInfo.width,
            height: this.profileInfo.height,
            frame: this.profileInfo.frame,
            columnLines: this.profileInfo.columnLines
        });
        
        this.columns = [{
                text     : 'Company',
                flex     : 1,
                sortable : true,
                dataIndex: 'name'
            }, {
                text: 'Stock Price',
                columns: [{
                    text     : 'Price',
                    width    : this.profileInfo.priceColumnWidth,
                    sortable : true,
                    formatter: 'usMoney',
                    dataIndex: 'price'
                }, {
                    text     : 'Change',
                    width    : this.profileInfo.changeColumnWidth,
                    sortable : true,
                    renderer :  function(val) {
                        if (val > 0) {
                            return '<span style="color:green;">' + val + '</span>';
                        } else if (val < 0) {
                            return '<span style="color:red;">' + val + '</span>';
                        }
                        return val;
                    },
                    dataIndex: 'change'
                }, {
                    text     : '% Change',
                    width    : this.profileInfo.percentChangeColumnWidth,
                    sortable : true,
                    renderer : function(val) {
                        if (val > 0) {
                            return '<span style="color:green;">' + val + '</span>';
                        } else if (val < 0) {
                            return '<span style="color:red;">' + val + '</span>';
                        }
                        return val;
                    },
                    dataIndex: 'pctChange'
                }]
            }, {
                text     : 'Last Updated',
                width    : this.profileInfo.lastUpdatedColumnWidth,
                sortable : true,
                formatter: 'date("m/d/Y")',
                dataIndex: 'lastChange'
            }];

        //Sorting store
        Ext.getStore('Companies').sort({property:'name', direction:'ASC'});

        this.callParent();
    }
});
