(function () {
    const date_input = document.getElementById("date");
    const male = document.getElementById("male");
    const female = document.getElementById("female");

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

        if (bdate != '' && gender != '') {


            let d = new Date(bdate);
            let day = d.getDay();
            let month = d.getMonth();
            let year = d.getFullYear().toString();
            let CC = year.substring(0, 2);

            let dw = ((((CC / 4) - 2) * (CC - 1)) + ((5 * year) / 4) + ((26 * (month + 1) / 10)) +
                day) % 7;

            let day_of_week = Math.trunc(dw);

            let male_names = ["Kwasi", "Kwadwo", "Kwabena", "Kwahu", "Yaw", "Kofi", "Kwame"];
            let female_names = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

            let akan_name = "";
            if (gender == "male") {
                akan_name = male_names[day];
            } else {
                akan_name = female_names[day];
            }

            document.getElementById("akan-name").innerHTML = `
            <div class="alert alert-success" role="alert">
                <p class="text-sm">Your Akan Name is <u><b>${akan_name}</b></u></p>
            </div> 
        `;
        } else {
            document.getElementById("akan-name").innerHTML = `
            <div class="alert alert-danger" role="alert">
                <p class="text-sm">Please Select Options To Display Your Akan Name</p>
            </div> 
        `;
        }
    };
})();