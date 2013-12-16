Ext.define('TestApp.view.MainMenu', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
    ],
    alias: 'widget.mainmenuview',
    config: {

        title: 'Welcome',
        iconCls: 'home',
    	layout: 'vbox',
    	xtype: 'formpanel',
    	scrollable: false,
        items: [
                	{
                		xtype: 'container',
                		padding: "0 0 0 0",
                		layout: 'vbox',
                		flex: 1,
                		
                		items: [
                		        {
                        		xtype: 'container',
                            	padding: "0 20% 0 20%",
                            	layout: 'vbox',
                            	flex: 1,
                        		
                        		items: [
                                        {
                                            xtype: 'image',
                                            src: 'resources/test.png',
                                            height: "200px",
                                        },
                                        {
                                            xtype: 'button',
                                            text: 'Free Coffee Game',
                                            itemId: 'loginButton',
                                            flex: 1,
                                            margin: "10 0 10 0",
                                        },
                                        {
                                            xtype: 'button',
                                            text: 'FIND',
                                            itemId: 'loginButton',
                                            ui: 'action',
                                            flex: 1,
                                            margin: "10 0 10 0",
                                        },	   
                                        {
                                            xtype: 'button',
                                            text: 'LEARN',
                                            itemId: 'loginButton',
                                            ui: 'action',
                                            flex: 1,
                                            margin: "10 0 10 0",
                                        },	   
                                        {
                                            xtype: 'button',
                                            text: 'BREW',
                                            itemId: 'loginButton',
                                            ui: 'action',
                                            flex: 1,
                                            margin: "10 0 10 0",
                                        },	   	   
                        		],
                        	},
                        	{
                        		xtype: 'container',
                        		padding: "0 0 0 0",
                    			height: '100px',
                        		
                        		items: [{
                        			/*
                        			xtype: 'button',
                        			text: 'MY ACCOUNT',
                        			cls: 'accButton',
                        			height: "100%",
                        			*/
                        				mode: 'image',
                                        xtype: 'image',
                                        src: 'resources/account.png',
                                        height: "100px",
                                        width: "100%",
                        		},
                        		{
                                    xtype: 'label',
                                    html: "My Account",	
                                    cls: 'myAccountButton'
                        		}
                        		],
                        	}
                		],
                	}
        ],
    },
});
