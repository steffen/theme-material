/**
 * Demonstrates a simple toolbar. Some of the buttons have menus attached.
 */
Ext.define('KitchenSink.view.toolbar.BasicToolbar', {
    extend: 'Ext.panel.Panel',
    xtype: 'basic-toolbar',
    id: 'basic-toolbar',
    //<example>
    exampleTitle: 'Basic Toolbar',
    profiles: {
        classic: {
            width: 380,
            frame: false,
            bodyPadding: 20,
            pasteIconCls: 'paste',
            cutIconCls: 'cut',
            copyIconCls: 'copy',
            formatIconCls: 'format',
            listIconCls: 'list'
        },
        neptune: {
            width: 500,
            frame: false,
            bodyPadding: 20,
            pasteGlyph: 70,
            cutGlyph: 67,
            copyGlyph: 102,
            formatGlyph: 76,
            listGlyph: 61
        },
        triton: {
            width: 560,
            frame: false,
            bodyPadding: 20
        },
        'neptune-touch': {
            width: 620,
            frame: false,
            bodyPadding: 20
        },
        material: {
            width: 680,
            frame: true,
            listIcon: 'list',
            cutIcon: 'content_cut',
            copyIcon: 'content_copy',
            pastaIcon: 'content_paste',
            formatIcon: 'view_compact'
        }
    },
    //</example>

    height: 400,

    html: KitchenSink.DummyText.longText,

    initComponent: function() {
        Ext.apply(this, {
            width: this.profileInfo.width,
            frame: this.profileInfo.frame,
            bodyPadding: this.profileInfo.bodyPadding
        });

        this.tbar = [{
            xtype:'splitbutton',
            text:'Menu Button',
            iconCls: this.profileInfo.listIconCls,
            glyph: this.profileInfo.listGlyph,
            icon: 'menu',
            menu:[{
                text:'Menu Button 1'
            }]
        }, '-', {
            xtype:'splitbutton',
            text:'Cut',
            iconCls: this.profileInfo.cutIconCls,
            glyph: this.profileInfo.cutGlyph,
            icon: this.profileInfo.cutIcon,
            menu: [{
                text:'Cut Menu Item'
            }]
        }, {
            iconCls: this.profileInfo.copyIconCls,
            glyph: this.profileInfo.copyGlyph,
            icon: this.profileInfo.copyIcon,
            text:'Copy'
        }, {
            text:'Paste',
            iconCls: this.profileInfo.pasteIconCls,
            glyph: this.profileInfo.pasteGlyph,
            icon: this.profileInfo.pastaIcon,
            menu:[{
                text:'Paste Menu Item'
            }]
        }, '-', {
            iconCls: this.profileInfo.formatIconCls,
            glyph: this.profileInfo.formatGlyph,
            icon: this.profileInfo.formatIcon,
            text:'Format'
        }];
        this.callParent();
    }
});