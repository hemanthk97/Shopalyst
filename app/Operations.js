$(document).ready(function () {
    $('#example').okzoom({
        width: 200,
        height: 200,
        border: "1px solid black",
        shadow: "0 0 5px #000"
    });
});

$(document).ready(function () {

    $("#cmd").click(function () {
        $("#textdown").text('Downloading...');
        // Convert the DOM element to a drawing using kendo.drawing.drawDOM
        kendo.drawing.drawDOM($("#content"))
        .then(function (group) {
            // Render the result as a PDF file
            return kendo.drawing.exportPDF(group, {
                paperSize: "auto",
                margin: { left: "1cm", top: "1cm", right: "1cm", bottom: "1cm" }
            });
        })
        .done(function (data) {
            // Save the PDF file
            kendo.saveAs({
                dataURI: data,
                fileName: "sample.pdf",
                proxyURL: "http://demos.telerik.com/kendo-ui/service/export"
            });
        });
        $("#textdown").text("Download");
    });
});