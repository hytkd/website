/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function toggleNav() {
    if ($(".navi").data("collapsed")) {
        $(".navi").data("collapsed", false);
        $(".nav-link").show();
        $(".grid-container").css("grid-template-columns", "minmax(min-content, 200px)");
    } else {
        $(".navi").data("collapsed", true);
        $(".nav-link").hide();
        $(".grid-container").css("grid-template-columns", "minmax(min-content, 20px)");
    }
}