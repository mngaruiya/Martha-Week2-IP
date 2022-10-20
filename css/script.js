(function () {
    let date_input = document.getElementById("date");
    let male = document.getElementById("male");
    let female = document.getElementById("female")

    document.getElementById("submit").onclick = function () {
        let gender, bdate;

        bdate = date_input.value;

        if (male.checked) {
            gender = "male";
        } else if (female.checked) {
            gender = "female";
        } else {
            document.getElementById("akan-name").innerHTML = `
            <div class="alert alert-danger" role="alert">
                <p class="text-sm">Select options to learn your Akan name</p>
            </div> 
        `;
        }



    }
