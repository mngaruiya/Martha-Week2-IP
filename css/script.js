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
        ;
        }
        if (bdate != '' && gender != '') {


            let d = new Date(bdate);
            let day = d.getDay();
            let month = d.getMonth();
            let year = d.getFullYear().toString();
            let CC = year.substring(0, 2);

            let dw = ((((CC / 4) - 2) * (CC - 1)) + ((5 * year) / 4) + ((26 * (month + 1) / 10)) +
                day) % 7;

            let day_of_week = Math.trunc(dw);

            const male_names = ["Kwasi","Kwadwo","Kwabena","Kwahu","Yaw","Kofi","Kwame"];
            const female_names = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

           