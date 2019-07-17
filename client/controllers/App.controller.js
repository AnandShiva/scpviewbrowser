sap.ui.define(["sap/ui/core/mvc/Controller","ssb/scp/viewbrowser/utils/Formatter"], function(Controller,Formatter){
    "use strict";
    return Controller.extend("ssb.scp.viewbrowser.controllers.App", {
        onInit : function(){
           this.initializeDataModel();
        },
        initializeDataModel : function(){
            var oDataModel = new sap.ui.model.json.JSONModel({});
            this.getView().setModel("dataModel",oDataModel);
        }
    })
});