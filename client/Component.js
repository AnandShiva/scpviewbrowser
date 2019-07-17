sap.ui.define(["sap/ui/core/UIComponent","ssb/scp/viewbrowser/utils/Formatter"], function(UIComponent,Formatter){
    "use strict";
    return UIComponent.extend("ssb.scp.viewbrowser.Component",{
        metadata : {
           manifest : "json"
         },
        init : function(){
        // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
        },
        fetchDestinations : function(){
            jQuery.ajax("/redirect",{
                success : function(){

                },
                error : function(){

                }
            });
        }
    })
});