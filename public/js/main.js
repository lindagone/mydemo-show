// Global settings
var staticFileServer = '';
var jsRoot = staticFileServer + "/js/";

window.contextBase = window.location.pathname.split("/")[1] + "/";

// Set the require.js configuration for your application.
require.config({
	urlArgs: "bust=v0.1",// + (new Date()).getTime(),
    shim: {
        'underscore': {
            exports: '_'
        },
        'underscore-string': {
            deps: [
                'underscore'
            ]
        },
        'handlebars-orig': {
            exports: 'Handlebars'
        },
        'backbone': {
            deps: [
                'underscore',
                'underscore-string',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'backbone-queryparams': {
            deps: [
                'backbone'
            ]
        },
        'backbone-datagrid': {
            deps: [
                'backbone'
            ],
            exports: 'Backbone.Datagrid'
        },
        'backbone-paginator': {
            deps: [
                'backbone'
            ],
            exports: 'Backbone.Paginator'
        },
        'bootstrap': {
            deps: [
                'jquery'
            ]
        },
        'backbone-relational': {
            deps: [
                'backbone'
            ]
        },
        'keymaster': {
            exports: 'key'
        },
        'async': {
            exports: 'async'
        },
        "jquery-plugin": {
            exports: "$",
            deps: ['jquery']
        }
    },

    // Libraries
    paths: {
        'jquery': jsRoot + 'lib/jquery/jquery-1.9.1.min',
        'jquery-plugin': jsRoot + 'lib/jquery/jquery-plugin',
        'underscore': jsRoot + 'lib/underscore',
        'underscore-string': jsRoot + 'lib/underscore-string',
        'backbone': jsRoot + 'lib/backbone',
        'resthub': jsRoot + 'lib/resthub/resthub',
        'localstorage': jsRoot + 'lib/localstorage',
        'text': jsRoot + 'lib/text',
        'i18n': jsRoot + 'lib/i18n',
        'pubsub': jsRoot + 'lib/resthub/pubsub',
        'bootstrap': jsRoot + 'lib/bootstrap',
        'backbone-validation-orig': jsRoot + 'lib/backbone-validation',
        'backbone-validation': jsRoot + 'lib/resthub/backbone-validation-ext',
        'handlebars-orig': jsRoot + 'lib/handlebars',
        'handlebars': jsRoot + 'lib/resthub/handlebars-helpers',
        'backbone-queryparams': jsRoot + 'lib/backbone-queryparams',
        'backbone-datagrid': jsRoot + 'lib/backbone-datagrid',
        'backbone-paginator': jsRoot + 'lib/backbone-paginator',
        'backbone-relational': jsRoot + 'lib/backbone-relational',
        'async': jsRoot + 'lib/async',
        'keymaster': jsRoot + 'lib/keymaster',
        'hbs': jsRoot + 'lib/resthub/require-handlebars',
        'und': jsRoot + 'lib/resthub/require-underscoreTemplate',
        'moment': jsRoot + 'lib/moment',
		'json2': jsRoot + 'lib/json2',
        'console': jsRoot + 'lib/resthub/console',
        'template': '../template'
    },

    locale: localStorage.getItem('locale') || 'zh-cn'
});

// Load our app module and pass it to our definition function
require(['console'],function(){
	if (/^()\/login.*/.test(location.pathname)){
		require(['login']);	
	}else{
		require(['app']);
	}
	
});
