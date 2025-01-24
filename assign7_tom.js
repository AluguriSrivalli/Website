$(document).ready(function() {
    function getBitDepth(numColors) {
        return Math.log2(numColors);
    }

    function indexedFileSize(width, height, numColors) {
        var bitDepth = getBitDepth(numColors);
        return (width * height * bitDepth) / 8;
    }

    $("#calculateBtn").on("click", function() {
        var width = parseInt($("#width").val());
        var height = parseInt($("#height").val());
        var colors = parseInt($("#colors").val());
        var fileSize = indexedFileSize(width, height, colors);

        if (fileSize < 50000) {
            $("#resultMessage").html("Success! file size is " + (fileSize / 1000).toFixed(1) + " KB is OK");
        } else {
            $("#resultMessage").html("The file size is " + (fileSize / 1000).toFixed(1) + " KB. It is too large");
        }
    });
});
