({
    "optimize": "none",
    "exclude": [
        "Handlebars",
        "underscore",
        "hbs"
    ],
    "hbs": {
        "disableHelpers": true,
        "disableI18n": true
    },
    "paths": {
        "nmodule/KitPxKsv": "src",
        "jquery": "empty:",
        "bajaux": "empty:",
        "Promise": "empty:",
        "nmodule/webEditors": "empty:",
        "Handlebars": "build\\\\tmp\\\\buildjs.KitPxKsv-ux.KitPxKsv\\\\moduleResources\\\\js-ux\\\\rc\\\\handlebars\\\\handlebars-v4.0.6",
        "hbs": "build\\\\tmp\\\\buildjs.KitPxKsv-ux.KitPxKsv\\\\moduleResources\\\\js-ux\\\\rc\\\\require-handlebars-plugin\\\\hbs",
        "i18nprecompile": "build\\\\tmp\\\\buildjs.KitPxKsv-ux.KitPxKsv\\\\moduleResources\\\\js-ux\\\\rc\\\\require-handlebars-plugin\\\\hbs\\\\i18nprecompile",
        "json2": "build\\\\tmp\\\\buildjs.KitPxKsv-ux.KitPxKsv\\\\moduleResources\\\\js-ux\\\\rc\\\\require-handlebars-plugin\\\\hbs\\\\json2",
        "underscore": "build\\\\tmp\\\\buildjs.KitPxKsv-ux.KitPxKsv\\\\moduleResources\\\\js-ux\\\\rc\\\\underscore\\\\underscore"
    },
    "rhinoJvmArgs": [
        "-Xss4m"
    ],
    "rootDir": "src/rc",
    "include": [
        "nmodule/KitPxKsv/rc/KitPxKsv.run",
        "nmodule/KitPxKsv/rc/TestWidget"
    ],
    "rawText": {
        "baja": "define({load:function(n,p,o,c){console.log(\"omitting baja!\" + n);o();}});",
        "lex": "define({load:function(n,p,o,c){console.log(\"omitting lex!\" + n);o();}});",
        "log": "define({load:function(n,p,o,c){console.log(\"omitting log!\" + n);o();}});",
        "css": "define({load:function(n,p,o,c){console.log(\"omitting css!\" + n);o();}});"
    },
    "excludeShallow": [
        "baja",
        "lex",
        "log",
        "css"
    ],
    "findNestedDependencies": true
})
