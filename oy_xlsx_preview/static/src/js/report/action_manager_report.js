odoo.define("oy_xlsx_preview.report", function (require) {
    "use strict";

    var ActionManager = require("web.ActionManager");
    const Dialog = require('web.Dialog');
    const { qweb} = require('web.core');

    ActionManager.include({
        _showXlsxPreview : function(reportUrl, action){
            return new Promise((resolve, reject) => {
                var xlsxUrl = reportUrl.xlsx;
                if (action.context.active_ids) {
                    var baseUrl = window.location.origin;
                    xlsxUrl = baseUrl + xlsxUrl + "/" + action.context.active_ids.join(",");
                    
                    const url = `/oy_xlsx_preview/static/src/lib/xlsx_preview/index.html?file=${xlsxUrl}`

                    const dialog = new Dialog(this, {
                        title: action.name,
                        size: 'large',
                        renderFooter: false,
                        $content: $(qweb.render('oy_xlsx_preview.XlsxPreview', {url: url, download: xlsxUrl}))
                    });
                    dialog.open();
                }
            });
        },
        
        _executeReportAction: function (action, options) {
            var self = this;
            if (action.report_type === "xlsx") {
                // return self._triggerDownload(action, options, "xlsx");
                return self._showXlsxPreview(self._makeReportUrls(action), action);
            }
            return this._super.apply(this, arguments);
        },
    });
});
