$(document).ready(function(){
  $("button.visible").click(function(){
    $(".mobile.menu-item").toggleClass("visible hidden");
  });


});

var browserType ="";
$(document).ready(function () {
            //console.log(navigator.userAgent);
            //Check if browser is IE or not
            if (navigator.userAgent.search("MSIE") >= 0) {
                browserType = 'IE';
            }
            else if (navigator.userAgent.search("Edge") >= 0) {
                browserType = 'IE';
                //$rootScope.bodyClass = 'IE';
                $("body").addClass('IE')
            }
                //Check if browser is Chrome or not
            else if (navigator.userAgent.search("Chrome") >= 0) {
                browserType = 'Chrome';
                $("body").addClass('Chrome')
            }
                //Check if browser is Firefox or not
            else if (navigator.userAgent.search("Firefox") >= 0) {
                browserType = 'FireFox';
                $("body").addClass('FireFox')
                //console.log(navigator.userAgent);
            }
                //Check if browser is Safari or not
            else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                browserType = 'Safari';
                $("body").addClass('Safari')
            }
                //Check if browser is Opera or not
            else if (navigator.userAgent.search("Opera") >= 0) {
                browserType = 'Opera';
                $("body").addClass('Opera')
            }
            else if (navigator.userAgent.search("Windows") >= 0) {
                browserType = 'IE';
                $("body").addClass('IE')
            }
        //    console.log(browserType);

        });
