// $("h1").click(function () {
//     $(this).css("color", "purple");
// });
$('button').on("click", function (event) {
    $("h1").animate({
        opacity: 0.5,
        marginLeft: "20px",
        fontSize: "3rem"
    })
});