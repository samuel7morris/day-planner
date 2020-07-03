$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, description)
    })

    function pastPres() {
        var blockTime = moment().hours()
        $(".time-block").each(function () {
            var time = $(this).attr("id")
            if (time < blockTime) {
                $(this).addClass("past")
            } else if (time === blockTime) {
                $(this).removeClass("past")
                $(this).addClass("present")
            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })
    }

    pastPres()

    var interval = setInterval(pastPres, 15000)

    $("#9am .description").val(localStorage.getItem("9am"))
    $("#10am .description").val(localStorage.getItem("10am"))
    $("#11am .description").val(localStorage.getItem("11am"))
    $("#12pm .description").val(localStorage.getItem("12pm"))
    $("#1pm .description").val(localStorage.getItem("1pm"))
    $("#2pm .description").val(localStorage.getItem("2pm"))
    $("#3pm .description").val(localStorage.getItem("3pm"))
    $("#4pm .description").val(localStorage.getItem("4pm"))
    $("#5pm .description").val(localStorage.getItem("5pm"))
    $("#currentDay").text(moment().format("MMMM DD, YYYY"))
    
})