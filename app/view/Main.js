Ext.define('TestApp.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.Spacer',
        'Ext.form.FieldSet',
        'Ext.form.Password',
        'Ext.util.DelayedTask',
        'Ext.Label',
    ],
    alias: 'widget.loginview',
    listeners: [{
    	delegate: '#loginButton',
    	event: 'tap',
    	fn: 'onLoginButtonTap',
    }],
    config: {
        title: 'Welcome',
        iconCls: 'home',
    	layout: 'vbox',
    	xtype: 'formpanel',
    	scrollable: false,
                items: [
	                        {
	                            docked: 'top',
	                            xtype: 'titlebar',
	                            title: 'That Free Coffee App login'
	                        },
	                        {
	                        	xtype: 'container',
	                        	flex: 1,
	                        	margin: '16 0 0 0',
	                        	
	                        	items: [
	        	                        {
	        	                            xtype: 'image',
	        	                            src: 'resources/test.png',
	        	                            height: '80%',
	        	                        },
	        	                        {
	        	                            xtype: 'image',
	        	                            src: 'resources/facebook.png',
	        	                            height: '20%',
	        	                            maxHeight: '80px',
	        	                        }
	                        	]
	                        },
	                        {
	                            xtype: 'label',
	                            html: 'Login failed. Please enter the correct credentials.',
	                            itemId: 'signInFailedLabel',
	                            hidden: true,
	                            hideAnimation: 'fadeOut',
	                            showAnimation: 'fadeIn',
	                            style: 'color:#990000;text-align:center;padding-top:10px',
	                        },
	                        {
	                        	xtype: 'panel',
	                        	margin: '0 10% 24px 10%',
	                        	
	                        	items: [
        	                       {
        	                        	xtype: 'fieldset',
        	                        	margin: '16 0 16 0',
        	                        	
        	                        	items: [
                	                        {
                	                            xtype: 'emailfield',
                	                            placeHolder: 'Email',
                	                            itemId: 'emailTextField',
                	                            name: 'emailTextField',
                	                            required: true,
                	                        },
                	                        {
                	                            xtype: 'passwordfield',
                	                            placeHolder: 'Password',
                	                            itemId: 'passwordTextField',
                	                            name: 'passwordTextField',
                	                            required: true,
                	                        },
        	                        	]
        	                        	
        	                        },
        	                        {
        	                            xtype: 'button',
        	                            text: 'Login',
        	                            itemId: 'loginButton',
        	                            ui: 'action',
        	                        },	                        	        
	                        	]
	                        }
                    ],
    },
    showSignInFailedMessage: function (message) {
        var label = this.down('#signInFailedLabel');
        label.setHtml(message);
        window.alert("signin failed");
        label.show();
    },
    onLoginButtonTap: function () {

        var me = this;

        var usernameField = me.down('#emailTextField'),
            passwordField = me.down('#passwordTextField'),
            label = me.down('#signInFailedLabel');

        //label.hide();
        var username = usernameField.getValue(),
            password = passwordField.getValue();

        // Using a delayed task in order to give the hide animation above
        // time to finish before executing the next steps.
        var task = Ext.create('Ext.util.DelayedTask', function () {
        	
        label.setHtml('');

            me.fireEvent('signInCommand', me, username, password);
            usernameField.setValue('');
            passwordField.setValue('');
        });

        task.delay(500);
    }
});
