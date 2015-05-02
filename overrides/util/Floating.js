Ext.define('Material.util.Floating', {
    override: 'Ext.util.Floating',

    alignTo: function (element, position, offsets, animate) {
        var me = this,
            el = me.el;

        // Since floaters are rendered to the document.body, floaters could become marooned
        // from its ownerRef if the ownerRef has been rendered into a container that overflows
        // and then that container is scrolled.
        if (!me._lastAlignToEl) {
            // override: this caused the floating action button to scroll away when scrolling edit window or grid.
            // Ext.on('scroll','_onAlignToScroll', me);
        }

        // Let's stash these on the component/element in case it's aligned to something else
        // in its little lifetime.
        me._lastAlignToEl = element;
        me._lastAlignToPos = position;

        me.mixins.positionable.alignTo.call(me, element, position, offsets, animate);
    }
});