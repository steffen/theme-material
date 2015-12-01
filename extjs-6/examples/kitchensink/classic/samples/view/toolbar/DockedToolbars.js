/**
 * Demonstrates a the docking of toolbars in each dimension on a panel.
 */
Ext.define('KitchenSink.view.toolbar.DockedToolbars', {
    extend: 'Ext.Panel',
    xtype: 'docked-toolbars',
    id: 'docked-toolbars',
    
    //<example>
    exampleTitle: 'Docked Toolbars',
    profiles: {
        classic: {
            width: 480,
            listCls: 'list',
            closeCls: 'close',
            pasteCls: 'paste',
            editCls: 'edit',
            layoutTdAttrs: { style: 'padding: 10px;' },
            defaults: {
                height: 220,
                width: 220,
                bodyPadding: 10
            }
        },
        neptune: {
            width: 480,
            listGlyph: 61,
            closeGlyph: 88,
            pasteGlyph: 70,
            editGlyph: 47,
            layoutTdAttrs: { style: 'padding: 10px;' },
            defaults: {
                height: 220,
                width: 220,
                bodyPadding: 10
            }
        },
        material: {
            width: 520,
            frame: true,
            listIcon: 'list',
            closeIcon: 'clear',
            pasteIcon: 'content_paste',
            editIcon: 'edit',
            defaults: {
                height: 300,
                width: 260,
                bodyPadding: 24
            }
        }
    },
    //</example>
    layout: {
        type: 'table',
        columns: 2
    },

    defaults: {
        xtype: 'panel'
    },

    initComponent: function() {
        Ext.apply(this, {
            width: this.profileInfo.width,
            frame: this.profileInfo.frame
        });

        Ext.apply(this.layout, {
            tdAttrs: this.profileInfo.layoutTdAttrs
        });

        Ext.apply(this.defaults, this.profileInfo.defaults);
        
        this.items = [
            {
                title: 'Top',
                xtype: 'panel',
                cls: 'material-border-right material-border-bottom',
                dockedItems: [{
                    dock: 'top',
                    xtype: 'toolbar',
                    items: [{
                        iconCls: this.profileInfo.listCls,
                        glyph: this.profileInfo.listGlyph,
                        icon: this.profileInfo.listIcon,
                        xtype: 'button'
                    }, '-', {
                        iconCls: this.profileInfo.closeCls,
                        glyph: this.profileInfo.closeGlyph,
                        icon: this.profileInfo.closeIcon,
                        xtype: 'button'
                    }, {
                        iconCls: this.profileInfo.pasteCls,
                        glyph: this.profileInfo.pasteGlyph,
                        icon: this.profileInfo.pasteIcon,
                        xtype: 'button'
                    }, '-', {
                        iconCls: this.profileInfo.editCls,
                        glyph: this.profileInfo.editGlyph,
                        icon: this.profileInfo.editIcon,
                        xtype: 'button'
                    }]
                }],
                html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                title: 'Right',
                xtype: 'panel',
                cls: 'material-border-bottom',
                dockedItems: [{
                    dock: 'right',
                    xtype: 'toolbar',
                    items: [{
                        iconCls: this.profileInfo.listCls,
                        glyph: this.profileInfo.listGlyph,
                        icon: this.profileInfo.listIcon,
                        xtype: 'button'
                    }, '-', {
                        iconCls: this.profileInfo.closeCls,
                        glyph: this.profileInfo.closeGlyph,
                        icon: this.profileInfo.closeIcon,
                        xtype: 'button'
                    }, {
                        iconCls: this.profileInfo.pasteCls,
                        glyph: this.profileInfo.pasteGlyph,
                        icon: this.profileInfo.pasteIcon,
                        xtype: 'button'
                    }, '-', {
                        iconCls: this.profileInfo.editCls,
                        glyph: this.profileInfo.editGlyph,
                        icon: this.profileInfo.editIcon,
                        xtype: 'button'
                    }]
                }],
                html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                title: 'Left',
                xtype: 'panel',
                cls: 'material-border-right',
                dockedItems: [{
                    dock: 'left',
                    xtype: 'toolbar',
                    items: [{
                        iconCls: this.profileInfo.listCls,
                        glyph: this.profileInfo.listGlyph,
                        icon: this.profileInfo.listIcon,
                        xtype: 'button'
                    }, '-', {
                        iconCls: this.profileInfo.closeCls,
                        glyph: this.profileInfo.closeGlyph,
                        icon: this.profileInfo.closeIcon,
                        xtype: 'button'
                    }, {
                        iconCls: this.profileInfo.pasteCls,
                        glyph: this.profileInfo.pasteGlyph,
                        icon: this.profileInfo.pasteIcon,
                        xtype: 'button'
                    }, '-', {
                        iconCls: this.profileInfo.editCls,
                        glyph: this.profileInfo.editGlyph,
                        icon: this.profileInfo.editIcon,
                        xtype: 'button'
                    }]
                }],
                html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                title: 'Bottom',
                xtype: 'panel',
                dockedItems: [{
                    dock: 'bottom',
                    xtype: 'toolbar',
                    items: [{
                        iconCls: this.profileInfo.listCls,
                        glyph: this.profileInfo.listGlyph,
                        icon: this.profileInfo.listIcon,
                        xtype: 'button'
                    }, '-', {
                        iconCls: this.profileInfo.closeCls,
                        glyph: this.profileInfo.closeGlyph,
                        icon: this.profileInfo.closeIcon,
                        xtype: 'button'
                    }, {
                        iconCls: this.profileInfo.pasteCls,
                        glyph: this.profileInfo.pasteGlyph,
                        icon: this.profileInfo.pasteIcon,
                        xtype: 'button'
                    }, '-', {
                        iconCls: this.profileInfo.editCls,
                        glyph: this.profileInfo.editGlyph,
                        icon: this.profileInfo.editIcon,
                        xtype: 'button'
                    }]
                }],
                html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        ];

        this.callParent();
    }
});