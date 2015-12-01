/**
 * This example illustrates how to use the grouping feature of the Grid.
 */
Ext.define('KitchenSink.view.grid.GroupedGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'grouped-grid',
    requires: [
        'Ext.grid.feature.Grouping'
    ],
    collapsible: true,
    frame: true,
    width: 600,
    height: 400,

    // Need a minHeight. Neptune resizable framed panels are overflow:visible so as to
    // enable resizing handles to be embedded in the border lines.
    minHeight: 200,
    title: 'Restaurants',
    resizable: true,

    features: [{
        ftype: 'grouping',
        groupHeaderTpl: '{columnName}: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})',
        hideGroupedHeader: true,
        startCollapsed: true,
        id: 'restaurantGrouping',
        // the ctrl feature for expanding and collapsing doesn't seem to work, therefore disabling for now
        expandTip: null,
        collapseTip: null
    }],
    //<example>
    otherContent: [{
        type: 'Store',
        path: 'classic/samples/store/Restaurants.js'
    },{
        type: 'Model',
        path: 'classic/samples/model/Restaurant.js'
    }],
    profiles: {
        classic: {
            height: 400,
            clearIconCls: 'icon-clear-group'
        },
        neptune: {
            height: 400,
            clearIconCls: 'icon-clear-group'
        },
        material: {
            height: 500,
            clearIcon: 'clear'
        }
    },
    //</example>

    initComponent: function() {
        this.height = this.profileInfo.height;
        this.store = new KitchenSink.store.Restaurants();
        this.columns = [{
            text: 'Name',
            flex: 1,
            dataIndex: 'name'
        },{
            text: 'Cuisine',
            flex: 1,
            dataIndex: 'cuisine'
        }];

        this.callParent();

        var store = this.getStore(),
            toggleMenu = [];

        this.groupingFeature = this.view.getFeature('restaurantGrouping');

        // Create checkbox menu items to toggle associated group
        store.getGroups().each(function(group) {
            toggleMenu.push({
                xtype: 'menucheckitem',
                text: group.getGroupKey(),
                handler: this.toggleGroup,
                scope: this
            });
        }, this);

        this.addDocked([{
            xtype: 'toolbar',
            items: [
                '->',
                {
                    itemId: 'toggleGroupsButton',
                    text: 'Toggle groups',
                    destroyMenu: true,
                    menu: toggleMenu
                },
                {
                    itemId: 'clearGroupingButton',
                    text: 'Clear grouping',
                    iconCls: this.profileInfo.clearIconCls,
                    icon: this.profileInfo.clearIcon,
                    scope: this,
                    handler: this.onClearGroupingClick
                }
            ]
        }]);

        this.mon(this.store, 'groupchange', this.onGroupChange, this);
        this.mon(this.view, {
            groupcollapse: this.onGroupCollapse,
            groupexpand: this.onGroupExpand,
            scope: this
        });
    },

    onClearGroupingClick: function(){
        this.groupingFeature.disable();
    },

    toggleGroup: function(item) {
        var groupName = item.text;
        if (item.checked) {
            this.groupingFeature.expand(groupName, true);
        } else {
            this.groupingFeature.collapse(groupName, true);
        }
    },

    onGroupChange: function(store, grouper) {
        var grouped = store.isGrouped(),
            groupBy = grouper ? grouper.getProperty() : '',
            toggleMenuItems, len, i = 0;

        // Clear grouping button only valid if the store is grouped
        this.down('#clearGroupingButton').setDisabled(!grouped);

        // Sync state of group toggle checkboxes
        if (grouped && groupBy === 'cuisine') {
            toggleMenuItems = this.down('#toggleGroupsButton').menu.items.items;
            for (len = toggleMenuItems.length; i < len; i++) {
                toggleMenuItems[i].setChecked(
                    this.groupingFeature.isExpanded(toggleMenuItems[i].text)
                );
            }
            this.down('#toggleGroupsButton').enable();
        } else {
            this.down('#toggleGroupsButton').disable();
        }
    },

    onGroupCollapse: function(v, n, groupName) {
        if (!this.down('#toggleGroupsButton').disabled) {
            this.down('menucheckitem[text=' + groupName + ']').setChecked(false, true);
        }
    },

    onGroupExpand: function(v, n, groupName) {
        if (!this.down('#toggleGroupsButton').disabled) {
            this.down('menucheckitem[text=' + groupName + ']').setChecked(true, true);
        }
    }
});
