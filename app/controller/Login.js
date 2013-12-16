Ext.define('TestApp.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.util.JSONP'],
    config: {
        refs: {
            loginView: 'loginview',
            mainMenuView: 'mainmenuview'
        },
        control: {
            loginView: {
            	signInCommand: 'onSignInCommand',
            }
        }
    },

	onSignInCommand: function (me, username, password) {	
	    console.log('Username: ' + username + '\n' + 'Password: ' + password);
	
	    var me = this,
	        loginView = me.getLoginView();
	    
	
	    if (username.length === 0 || password.length === 0) {
	
	        loginView.showSignInFailedMessage('Please enter your username and password.');
	        return;
	    }

	    loginView.setMasked({
	        xtype: 'loadmask',
	        message: 'Signing In...'
	    });
	    Ext.util.JSONP.request({
	        url: 'https://code.btohweb.com/login.php',
	        params: {
	            user: username,
	            pwd: password
	        },

	        callbackKey: 'jsoncallback',
	        
	        callback: function(successful, data ) {
	            if (data["success"]){
	            	me.sessionToken = data['sessid'];
	            	me.signInSuccess();
	            } else {
	            	if (data['sessid']=="Incorrect Password"){
		            	me.signInFailure('Login failed. Incorrect Password.');
	            	} else {
		            	me.signInFailure('Login failed. Unknown Account.');
	            	}
	            }
	        }
	        /*
	        callback: function (response) {
	
	            var loginResponse = Ext.JSON.decode(response);
	            me.signInFailure(loginResponse.success);
	            if (loginResponse.success === "true") {
	                // The server will send a token that can be used throughout the app to confirm that the user is authenticated.
	                //me.sessionToken = loginResponse.sessionToken;
	                me.signInSuccess();     //Just simulating success.
	            } else {
	                me.signInFailure(loginResponse.message);
	            }
	        },
	        failure: function (response) {
	            me.sessionToken = null;
	            me.signInFailure('Login failed. Please try again later.'+response);
	        }*/
	    });
	},
    signInSuccess: function () {
        console.log('Signed in.');
        var loginView = this.getLoginView();
        mainMenuView = this.getMainMenuView();
        loginView.setMasked(false);

        Ext.Viewport.animateActiveItem(mainMenuView, this.getSlideLeftTransition());
    },
    signInFailure: function (message) {
        var loginView = this.getLoginView();
        loginView.showSignInFailedMessage(message);
        loginView.setMasked(false);
    },
    getSlideLeftTransition: function () {
        return { type: 'slide', direction: 'left' };
    },
});