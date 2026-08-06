

let day = "holiday";

if (day === "monday") {
    console.log("Today is Monday");
}

else if (day === "tuesday") {
    console.log("Today is Tuesday");
}

else if (day === "wednesday") {
    console.log("Today is Wednesday");
}

else if (day === "thursday") {
    console.log("Today is Thursday");
}

else if (day === "friday") {
    console.log("Today is Friday");
}

else if (day === "saturday") {
    console.log("Today is Saturday");
}

else if (day === "sunday" || day === "codeday" || day === "holiday") {
    console.log("Today is Sunday");
}

else {
    console.log("Invalid day");
}

// switch statement

switch (day) {
    case "monday":
        console.log("Today is Monday");
        break;  // break statement is used to exit the switch statement after a case is executed
    case "tuesday":
        console.log("Today is Tuesday");
        break;
    case "wednesday":
        console.log("Today is Wednesday");
        break;
    case "thursday":
        console.log("Today is Thursday");
        break;
    case "friday":
        console.log("Today is Friday");
        break;
    case "saturday":
        console.log("Today is Saturday");
        break;
    case "sunday" && "codeday" && "holiday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}

// print numbers 1 to 5.

let num = 1;

while (num <= 5) {
    console.log(num);
    num++;  // increment the value of num by 1
}


