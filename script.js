
        function updateOutput() {
        $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + 
        $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
                    
                    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
                    /*This is to enable the Javascript to run in the iframe*/
    }
        $(".toggleButton").hover(function () {

                $(this).addClass("highlightedButton");
            },
            function () {
                $(this).removeClass("highlightedButton");

            }); //This adds the Higlight to a button.

        $(".toggleButton").click(function () {

            $(this).toggleClass("active");

            $(this).removeClass("highlightedButton");
            //This adds a higlight to a button when its clicked on & off

            var panelId = $(this).attr("id") + "Panel";

            $("#" + panelId).toggleClass("hidden");

            var numberOfActivePanels = 4 - $('.hidden').length;

            $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
        }) 

        $(".panel").height($(window).height() - $("#header").height() - 10); /*this is setting the textarea height 
        to the height of the window(the whole page) minus the height of the header */

                $(".panel").width(($(window).width() / 2) - 10);

                

                updateOutput();
                /* this updates the iframe in real time when you type(even html code) in the text area */
                /*And this is placed here so it loads the code when the page refeshes*/

                $("textarea").on("change keyup paste", function() {

                    updateOutput();
                }); /* this updates the iframe in real time when you type(even html code) in the text area */


