/**
 * Demonstrates a simple login form.
 */
Ext.define('KitchenSink.view.form.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'form-login',
    
    ui: 'material-card',

    title: 'Login',

    platformConfig: {
        '!phone': {
            centered: true,
            width: 320,
            bodyPadding: '0 24 24'
        },
        phone: {
            centered: false,
            width: null,
            margin: 8,
            bodyPadding: '0 16 16'
        }
    },

    defaultType: 'textfield',

    items: [
        {
            //allowBlank: false,
            label: 'User ID',
            name: 'user'
        }, {
            //allowBlank: false,
            label: 'Password',
            name: 'pass',
            inputType: 'password'
        }, {
            xtype: 'checkboxfield',
            label: 'Remember me',
            name: 'remember'
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            ui: 'action',
            cls: 'material-border-none',
            items: [
                '->',
                {
                    text: 'Register'
                },
                {
                    ui: 'material-raised-colored',
                    text: 'Login'
                }
            ]
        }
    ]
});
