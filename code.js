$(document).ready(
    function () {
        $("form").submit(placeOrder);

        function placeOrder(event)
        {
            event.preventDefault();

            var salary = parseFloat($("#salary").val());
            var creditScore = parseFloat($("#creditScore").val());
            var monthsAtJob = parseFloat($("#monthsAtJob").val());

            if (salary >= 40000 && creditScore >= 600)
            {
                $("#output").text("Loan Approved!")
            }
            else if (salary < 40000 && monthsAtJob >= 12)
            {
                $("#output").text("Loan Approved!")
            }
            else if (creditScore >= 600 && monthsAtJob >= 12)
            {
                $("#output").text("Loan Approved!")
            }
            else
            {
                $("#output").text("Loan Denied :(")
            }

        }

    }
);