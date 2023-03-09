 
 
 
 
 let a = 10;
        let b = 16;

        if (a==b) {
            document.getElementById("if").innerHTML = "They are equal";
        }
        else {
            document.getElementById("if").innerHTML = "They are not equal";
        }

        const time = new Date().getHours();
        let status;

        if (time <= 11) {
            document.getElementById("time").innerHTML = "It is Morning";
        }
        else if (time == 12 && time <=17) {
            document.getElementById("time").innerHTML = "It is Afternoon";
        }
        else {
            document.getElementById("time").innerHTML = "It is Evening";
        }


    let day

        switch (new Date().getDay()) {
            case 0:
                break;
            case 0:
                Day = "Sunday";
                break;
            case 1:
                Day = "Monday";
                break;
            case 2:
                Day = "Tuesday";
                break;
            case 3:
                Day = "Wednesday";
                break;
            case 4:
                Day = "Thursday";
                break;
            case 5:
                Day = "Friday";
                break;
            case 6:
                Day = "Saturday";
                break;
        }
        document.getElementById("day").innerHTML = "The day today is:" + Day;
