/*global query*/
jQuery.sap.declare("ssb.scp.viewbrowser.utils.Formatter");
/**
 * This object contains all UI data formatters
 */
sap.ui.define([], function(){

    ssb.scp.viewbrowser.utils.Formatter = {
        /*
         * Decides to enable/disable the favorite icon based on favorite value from service. @isFavorite : 0 or 1
         */
        decideFavorite : function(isFavorite) {
            if (isFavorite) {
                return true;
            } else {
                return false;
            }
        },
    
        decideFavoriteIcon : function(iFavorite) {
            if (iFavorite)
                return "sap-icon://favorite";
            else
                return "sap-icon://unfavorite";
        },
    
        /*
         * Returns the text to be displayed for the tags based on the tag count. If tag count is not equal to 0, then show
         * "Tags (count)", otherwise nothing. @tagCount : Count of tags for the view
         */
        decideTagCount : function(tagCount) {
            return tagCount ? '(' + tagCount + ')' : "";
        },
    
        /**
         * format release status info
         */
        formatReleaseStatusInfo : function(bReleaseStatus) {
            this.oI18nModel = this.getModel("i18n");
            if (bReleaseStatus)
                return this.oI18nModel.getResourceBundle().getText("XTIT_VIEW_IS_RELEASED");
            else
                return this.oI18nModel.getResourceBundle().getText("XTIT_VIEW_NOT_RELEASED");
        },
    
        /**
         * Camel Case the CDS View Type
         */
        formatViewType : function(sType) {
            switch (sType) {
                case "BASIC" :
                    return "Basic";
                case "COMPOSITE" :
                    return "Composite";
                case "CONSUMPTION" :
                    return "Consumption";
                case "EXTENSION" :
                    return "Extension";
                case "NA" :
                    return "Undefined";
                default :
                    return sType;
            }
        },
    
        /**
         * Camel Case the CDS View Category
         */
        formatViewCategory : function(sCategory) {
            switch (sCategory) {
                case "DIMENSION" :
                    return "Dimension";
                case "CUBE" :
                    return "Cube";
                case "TEXT" :
                    return "Text";
                case "FACT" :
                    return "Fact";
                case "AGGREGATIONLEVEL" :
                    return "Aggregation Level";
                case "HIERARCHY" :
                    return "Hierarchy";
                case "QUERY" :
                    return "Query";
                default :
                    return sCategory;
            }
        },
    
        /*
         * Returns the combination of data type and length for a selected field to display in column annotation page(S3).
         * @datatype : datatype of the selected field, @length: length of the selected field
         */
        decideDataType : function(dataType, length) {
            if (length) {
                try {
                    return dataType + ' (' + parseInt(length) + ')';
                } catch (e) {
                    jQuery.sap.log.error("Parse Int Error in Column Length");
                    return dataType;
                }
            } else {
                return dataType;
            }
        },
    
        decideTagCountText : function(oValue1, oValue2) {
            return oValue1 + " (" + oValue2 + ")";
        },
    
        decideValueState : function(oValue) {
            if (oValue == 0)
                return "Error";
            else
                return "None";
        },
    
        decideFieldIsNullable : function(oValue) {
            if (oValue == 'X')
                return "false";
            else
                return "true";
        },
    
        decideCrossRefIcon : function(oValue) {
            if (oValue == "T" || oValue == "TABLE")
                return "sap-icon://table-view";
            else
                return "sap-icon://customer-view";
        },
    
        decideCrossRefIconTooltip : function(oValue) {
            this.oI18nModel = this.getModel("i18n");
            if (oValue == "T")
                return this.oI18nModel.getResourceBundle().getText("XTIT_TT_TABLE");
            else
                return this.oI18nModel.getResourceBundle().getText("XTIT_TT_VIEW");
        },
    
        decideCrossRefNavigation : function(oValue) {
            if (oValue == 1)
                return "Navigation";
            else
                return "Inactive";
        },
    
        decideNavigationPossible : function(oValue) {
            if (oValue == 1)
                return true;
            else
                return false;
        },
    
        decideNavigationNotPossible : function(oValue) {
            if (oValue == 1)
                return false;
            else
                return true;
        },
    
        decideDataSourceRelation : function(sRelation) {
            if (sRelation) {
                switch (sRelation) {
                    case "FROM" :
                        return "From";
                    case "INNER" :
                        return "Inner Join";
                    case "LEFT" :
                        return "Left Outer Join";
                    case "RIGHT" :
                        return "Right Outer Join";
                    case "FULL" :
                        return "Full Outer Join";
                    case "CROSS" :
                        return "Cross Join";
                    case "ASSOCIATION" :
                        return "Association";
                    default :
                        return "";
                }
            } else
                return "";
        },
    
        decideDataSourceType : function(sType) {
            if (sType) {
                switch (sType) {
                    case "B" :
                        return "CDS View";
                    case "J" :
                        return "View";
                    case "T" :
                        return "Table";
                    default :
                        return "";
                }
            } else
                return "";
        },
    
        decideMatchedInText : function(oValue) {
            if (oValue) {
                try {
                    var oList = JSON.parse(oValue);
                    if (oList && oList instanceof Array && oList.length) {
                        if (oList.length == 1)
                            return oList[0];
                        else
                            return oList[0] + ", ";
                    }
                } catch (e) {
    
                }
            }
        },
    
        decideMatchedInLinkText : function(oValue) {
            if (oValue) {
                try {
                    this.oI18nModel = this.getModel("i18n");
                    var oList = JSON.parse(oValue);
                    if (oList && oList instanceof Array && oList.length) {
                        if (oList.length == 1) {
                            return false;
                        } else {
                            this.setText(this.oI18nModel.getResourceBundle().getText("XFLD_MORE", [oList.length - 1]));
                            return true;
                        }
                    } else
                        return false;
                } catch (e) {
                    return false;
                }
            }
        },
    
        decideMatchedInVisible : function(oValue) {
            if (oValue)
                return true;
            else
                return false;
        },
    
        convertColumnLengthToInteger : function(oValue) {
            if (oValue) {
                try {
                    return parseInt(oValue);
                } catch (e) {
                    jQuery.sap.log.error("Parse Int Error in Column Length");
                    return oValue;
                }
            }
        },
    
        decidePersonalizationColumnVisibility : function(sVisibility) {
            if (sVisibility == true)
                return true;
            else
                return false;
        },
    
        decideShowContentVisibility : function(iCdsType, bIsPublished, bCdsreleasestatus, sLandScape) {
            if (iCdsType && iCdsType == 1) {
                if (sLandScape == "A" && (bCdsreleasestatus || bIsPublished))
                    return true;
                else if (sLandScape != "A")
                    return true;
                else
                    return false;
            } else
                return false;
        },
    
        cloudLandscapeSpecificVisibility : function(sLandscape) {
            if (sLandscape && sLandscape == "A")
                return true;
            else
                return false;
        },
    
        /**
         * Fields to be ignored from personalization dialog of Smart Table for CDS views.
         */
        cloudLandscapeSpecificPersonalisation : function(sLandscape) {
            var sIgnoredPersonalisationFields;
            if (sLandscape && sLandscape == "A")
                sIgnoredPersonalisationFields = "Ddlsourcenametext,Cdstype,Sqlviewname,Appstatus,CdsoriginKey,Iscustomercreated,Cdsviewsourcesystem,DraftDDLSourceName,DisplayedViewName,IsDraftViewNotPublished, Cdsreleasestatus, IsPublished";
            else
                sIgnoredPersonalisationFields = "Ddlsourcenametext,Cdstype,Sqlviewname,Appstatus,CdsoriginKey,Appid,Iscustomercreated,Cdsviewsourcesystem,IsDraft,IsPublished,DraftDDLSourceName,DisplayedViewName,IsDraftViewNotPublished, Cdsreleasestatus";
            return sIgnoredPersonalisationFields;
        },
    
        cloudLandscapeSpecificPersonalisationSearch : function(sLandscape) {
            var sIgnoredPersonalisationFields;
            if (sLandscape && sLandscape == "A")
                sIgnoredPersonalisationFields = "Ddlsourcenametext,Cdstype,Sqlviewname,Appstatus,CdsoriginKey,Matchedcolumns,Matchedtables,Matchedannotations,Iscustomercreated,Cdsviewsourcesystem,DraftDDLSourceName,DisplayedViewName,IsDraftViewNotPublished, Cdsreleasestatus, IsPublished";
            else
                sIgnoredPersonalisationFields = "Ddlsourcenametext,Cdstype,Sqlviewname,Appstatus,CdsoriginKey,Matchedcolumns,Matchedtables,Matchedannotations,Appid,Iscustomercreated,Cdsviewsourcesystem,IsDraft,IsPublished,DraftDDLSourceName,DisplayedViewName,IsDraftViewNotPublished, Cdsreleasestatus";
            return sIgnoredPersonalisationFields;
        },
    
        cloudLandScapeAnalyticQuerySpecificVisibility : function(sLandscape, iCdsType) {
            if (sLandscape && sLandscape == "A" && iCdsType && iCdsType == 1)
                return true;
            else
                return false;
        },
    
        decideQueryAppPublishedStatusVisibility : function(sLandscape, iCdsType, sAppId) {
            if (sLandscape && sLandscape == "A" && iCdsType && iCdsType == 1 && sAppId)
                return true;
            else
                return false;
        },
    
        decideQueryAppPublishStatusText : function(sAppId) {
            var oI18nModel = this.getModel("i18n");
            var sKey = "XBUT_PUBLISH_QUERY";
            var sText = "Publish";
            if (sAppId) {
                sKey = "XBUT_UNPUBLISH_QUERY";
                sText = "UnPublish";
            }
            if (oI18nModel)
                return oI18nModel.getResourceBundle().getText(sKey);
            else
                return sText;
        },
    
        decideQueryAppPublishActionEnabled : function(sAppId, iAppStatus, bIsDraft, bIsPublished, bCdsreleasestatus) {
            if (!sAppId) {
                // create application disabled for draft query
                if (bIsDraft && !bIsPublished) {
                    return false;
                }
                // no app is created yet - enabled create application action
                if (bCdsreleasestatus || bIsPublished)
                    return true;
                else
                    return false;
            } else if (sAppId && iAppStatus == 2) {
                // app is created and published - delete app not possible - user has to unpublishing app in CCE tool first
                return false;
            } else {
                // app is created and not published - delete app is possible
                return true;
            }
        },
    
        decideQueryAppEditPublishActionEnabled : function(sAppId, bIsPublished, bCdsreleasestatus) {
            // If app is created whether published/unpublished - enable edit application
            return sAppId ? true : false;
        },
    
        decideOnAppStatus : function(sAppId, iAppStatus) {
            var oI18nModel = this.getModel("i18n");
            if (sAppId) {
                if (iAppStatus && iAppStatus == 2)
                    return oI18nModel.getResourceBundle().getText("XFLD_PUBLISHED");
                else
                    return oI18nModel.getResourceBundle().getText("XFLD_REGISTERED");
            } else
                return "";
        },
    
        decideEditVisibility : function(sLandscape, iCdsType, cdsOriginKey) {
            if (sLandscape && sLandscape == "A" && iCdsType && iCdsType == 1 && cdsOriginKey && cdsOriginKey == "2")
                return true;
            else
                return false;
        },
    
        deleteIconVisibility : function(sSelectedLanguage, sLogonLanguage) {
            if (sSelectedLanguage === "SELECT" || sSelectedLanguage === sLogonLanguage) {
                return false;
            } else {
                return true;
            }
        },
        decideAppIdLinkVisibility : function(sLandscape, sAppId) {
            if (sLandscape && sLandscape == "A" && sAppId)
                return true;
            else
                return false;
        },
    
        decideViewStatusColumnVisibility : function(sLandscape) {
            if (sLandscape && sLandscape == "A") {
                return true;
            }
            return false;
        },
    
        decideViewStatusColumnVisibilityOnPremise : function(sLandscape) {
            if (sLandscape && (sLandscape == "S" || sLandscape == "C")) {
                return true;
            }
            return false;
        },
    
        decideViewStatus : function(sViewStatus) {
            var oI18nModel = this.getModel("i18n");
            switch (sViewStatus) {
                case "RELEASED" :
                    return oI18nModel.getProperty("XTIT_VIEW_IS_RELEASED");
                    break;
                case "PUBLISHED" :
                    return oI18nModel.getProperty("XTIT_VIEW_IS_PUBLISHED");
                    break;
                case "DRAFT" :
                    return oI18nModel.getProperty("XTIT_VIEW_IS_DRAFT");
                    break;
                case "DEPRECATED" :
                    return oI18nModel.getProperty("XTIT_VIEW_DEPRECATED");
                    break;
                case "NOT_RELEASED" :
                    return oI18nModel.getProperty("XTIT_VIEW_NOT_RELEASED");
                    break;
                default : 
                    return "";
            }
        },
    
        decideDraftIconVisibility : function(bDraftStatus) {
            if (bDraftStatus) {
                return true;
            } else {
                return false;
            }
    
        },
        decideDraftToolTip : function(bDraftStatus) {
            var oI18nModel = this.getModel("i18n");
            if (bDraftStatus) {
                return oI18nModel.getResourceBundle().getText("XTIT_TT_DRAFT_TRUE");
            } else {
                return oI18nModel.getResourceBundle().getText("XTIT_TT_DRAFT_FALSE");
            }
        }
    
    };    

    return ssb.scp.viewbrowser.utils.Formatter;
});