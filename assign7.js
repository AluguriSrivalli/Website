$(document).ready(function() {
    $("#generateStoryBtn").on("click", function() {
        var nounName = $("#nounName").val();
        var nounObject = $("#nounObject").val();
        var adjective = $("#adjective").val();
        var adverb = $("#adverb").val();
        var nounColor = 'blue';
        var fontstyle='italic';
        var madLibsStory = `<h2> Wendy's Crazy MadLibs Story! </h2>`;
        madLibsStory += `<p>One day, my friend <span style="color: ${nounColor}; font-style:${fontstyle}">${nounName}</span> was visiting New York and ran `;
        madLibsStory += `into <span style="color: ${nounColor};font-style:${fontstyle}">${nounObject}</span>. `;
        madLibsStory += `<span style="color: ${nounColor};font-style:${fontstyle}">${nounName}</span> ran `;
        madLibsStory += `<span style="color: ${nounColor}; font-style:${fontstyle}">${adjective}</span> to meet `;
        madLibsStory += `<span style="color: ${nounColor};font-style:${fontstyle}">${nounObject}</span>. But `;
        madLibsStory += `<span style="color: ${nounColor};font-style:${fontstyle}">${nounObject}</span> turned out to be very `;
        madLibsStory += `<span style="color: ${nounColor};font-style:${fontstyle}">${adverb}</span> and `;
        madLibsStory += `<span style="color: ${nounColor};font-style:${fontstyle}">${nounName}</span> did not `;
        madLibsStory += `enjoy the meeting.</p>`;
        $("#madLibsStory").html(madLibsStory);
    });
});
