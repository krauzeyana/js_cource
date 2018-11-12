var a = "", b = "", r = ""; // числа
var operation = ""; //текущая операция
var last_click = 3; //последняя нажатая кнопка ( 0 - число, 1 - 'operation', 2 - '=',3 - 'C');
var field = document.getElementById("input_call");
var newP = document.createElement("p");

function non_normal() {
    if (isFinite(Number(a))) {
        return true;
    }
    else {
        field.value = "Error";
        a = 0;
        return false;
    }
}
function last_operation() {
    if (last_click != 0)
        return false;
    if (operation == "")
        return false;
    if (operation == "-") {
        b = field.value;
        newP = document.createElement("p");
        r = Number(a) - Number(b);
        newP.innerText += (a + "-" + b + "=" + r);
        document.getElementById("output").appendChild(newP);
        a = r;
        field.value = a;
        operation = "";
        return true;
    }
    if (operation == "+") {
        b = field.value;
        newP = document.createElement("p");
        r = Number(a) + Number(b);
        newP.innerText += (a + "+" + b + "=" + r);
        document.getElementById("output").appendChild(newP);
        a = r;
        field.value = a;
        operation = "";
        return true;
    }
    if (operation == "*") {
        b = field.value;
        newP = document.createElement("p");
        r = Number(a) * Number(b);
        newP.innerText += (a + "*" + b + "=" + r);
        document.getElementById("output").appendChild(newP);
        a = r;
        field.value = a;
        operation = "";
        return true;
    }
    if (operation == "/") {
        b = field.value;
        newP = document.createElement("p");
        r = Number(a) / Number(b);
        newP.innerText += (a + "/" + b + "=");
        
        a = r;
        if (non_normal()){
            field.value = a;

        }

            newP.innerText+=field.value;

        operation = "";
        document.getElementById("output").appendChild(newP);
        return true;
    }
    if (operation == "%") {
        b = field.value;
        newP = document.createElement("p");
        r = Number(a) * Number(b) / 100;
        newP.innerText += (a + " percent " + b + "=" + r);
        document.getElementById("output").appendChild(newP);
        a = r;
        field.value = a;
        operation = "";
        return true;
    }
}
// обработчик события нажатия на кнопку "0"
document.getElementById("button-0").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_click > 0 && field.value == '-')
            field.value = field.value + "0";
        else if (last_click > 0)
            field.value = '0';
        else
            if (field.value != "0")
                field.value = field.value + "0";
        last_click = 0;
        return false;
    }
});
// обработчик события нажатия на кнопку "1"
document.getElementById("button-1").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_click > 0 && field.value == '-')
            field.value = field.value + "1";
        else if (last_click > 0)
            field.value = '1';
        else if (field.value == "0")
            field.value = "1";
        else
            field.value = field.value + "1";
        last_click = 0;
        return false;
    }
});
// обработчик события нажатия на кнопку "2"
document.getElementById("button-2").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_click > 0 && field.value == '-')
            field.value = field.value + "2";
        else if (last_click > 0)
            field.value = '2';
        else if (field.value == "0")
            field.value = "2";
        else
            field.value = field.value + "2";
        last_click = 0;
        return false;
    }
});
// обработчик события нажатия на кнопку "3"
document.getElementById("button-3").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_click > 0 && field.value == '-')
            field.value = field.value + "3";
        else if (last_click > 0)
            field.value = '3';
        else if (field.value == "0")
            field.value = "3";
        else
            field.value = field.value + "3";
        last_click = 0;
        return false;
    }
});
// обработчик события нажатия на кнопку "4"
document.getElementById("button-4").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_click > 0 && field.value == '-')
            field.value = field.value + "4";
        else if (last_click > 0)
            field.value = '4';
        else if (field.value == "0")
            field.value = "4";
        else
            field.value = field.value + "4";
        last_click = 0;
        return false;
    }
});
// обработчик события нажатия на кнопку "5"
document.getElementById("button-5").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_click > 0 && field.value == '-')
            field.value = field.value + "5";
        else if (last_click > 0)
            field.value = "5";
        else if (field.value == "0")
            field.value = "5";
        else
            field.value = field.value + "5";
        last_click = 0;
        return false;
    }
});
// обработчик события нажатия на кнопку "6"
document.getElementById("button-6").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_click > 0 && field.value == '-')
            field.value = field.value + "6";
        else if (last_click > 0)
            field.value = '6';
        else if (field.value == "0")
            field.value = "6";
        else
            field.value = field.value + "6";
        last_click = 0;
        return false;
    }
});
// обработчик события нажатия на кнопку "7"
document.getElementById("button-7").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_click > 0 && field.value == '-')
            field.value = field.value + "7";
        else if (last_click > 0)
            field.value = '7';
        else if (field.value == "0")
            field.value = "7";
        else
            field.value = field.value + "7";
        last_click = 0;
        return false;
    }
});
// обработчик события нажатия на кнопку "8"
document.getElementById("button-8").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_click > 0 && field.value == '-')
            field.value = field.value + "8";
        else if (last_click > 0)
            field.value = '8';
        else if (field.value == "0")
            field.value = "8";
        else
            field.value = field.value + "8";
        last_click = 0;
        return false;
    }
});
// обработчик события нажатия на кнопку "9"
document.getElementById("button-9").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_click > 0 && field.value == '-')
            field.value = field.value + "9";
        else if (last_click > 0)
            field.value = '9';
        else if (field.value == "0")
            field.value = "9";
        else
            field.value = field.value + "9";
        last_click = 0;
        return false;
    }
});
// обработчик события нажатия на кнопку "."

document.getElementById("button-point").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if ((String(field.value).indexOf('.') == -1) || (last_click == 1)) {
            if (last_click > 0 && field.value == '-')
                field.value = field.value + "0.";
            else if (last_click > 0)
                field.value = '0.';
            else if (field.value == "0")
                field.value = "0.";
            else
                field.value = field.value + ".";
            last_click = 0;
            return false;
        }
    }
});
// обработчик события нажатия на кнопку "+"
document.getElementById("button-plus").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_operation() == false)
            a = field.value;
        operation = "+";
        last_click = 1;
        return false;
    }
});
// обработчик события нажатия на кнопку "-"
document.getElementById("button-minus").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_operation() == false)
            a = field.value;
        operation = "-";
        last_click = 1;
        return false;
    }
});
// обработчик события нажатия на кнопку "*"
document.getElementById("button-mult").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_operation() == false)
            a = field.value;
        operation = "*";
        last_click = 1;
        return false;
    }
});
// обработчик события нажатия на кнопку "/"
document.getElementById("button-div").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_operation() == false)
            a = field.value;
        operation = "/";
        last_click = 1;
        return false;
    }
});
// обработчик события нажатия на кнопку "procent"
document.getElementById("button-procent").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_operation() == false)
            a = field.value;
        operation = "%";
        last_click = 1;
        return false;
    }
});
// обработчик события нажатия на кнопку "="
document.getElementById("button-calc").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        b = field.value;
        switch (last_click) {
            case 0:
            case 1:
                if (operation == "+") {
                    newP = document.createElement("p");
                    r = Number(a) + Number(b);
                    newP.innerText += (a + "+" + b + "=" + r);
                    document.getElementById("output").appendChild(newP);
                    field.value = r;
                    a = r;
                }
                if (operation == "-") {
                    newP = document.createElement("p");
                    r = Number(a) - Number(b);
                    newP.innerText += (a + "-" + b + "=" + r);
                    document.getElementById("output").appendChild(newP);
                    a = r;
                    field.value = a;
                }
                if (operation == "*") {
                    newP = document.createElement("p");
                    r = Number(a) * Number(b);
                    newP.innerText += (a + "*" + b + "=" + r);
                    document.getElementById("output").appendChild(newP);
                    a = r;
                    field.value = a;
                }
                if (operation == "/") {
                    newP = document.createElement("p");
                    r = Number(a) / Number(b);
                    newP.innerText += (a + "/" + b + "=");
                    
                    a = r;
                    if (non_normal()){
                        field.value = a;
                    }
                        newP.innerText+=field.value;

                    document.getElementById("output").appendChild(newP);
                    
                }
                if (operation == "%") {
                    newP = document.createElement("p");
                    r = Number(a) * Number(b) / 100;
                    newP.innerText += (a + " percent " + b + "=" + r);
                    document.getElementById("output").appendChild(newP);
                    a = r;
                    field.value = a;
                }
                break;
            default:
        }
        operation = "";
        last_click = 2;
        return false;
    }
});
// обработчик события нажатия на кнопку "C"
document.getElementById("button-clear").addEventListener("click", function () {
    last_click = 3;
    operation = "";
    field.value = "0";
    a = "0";
    return false;
});

// обработчик события нажатия на кнопку "CE"
document.getElementById("button-CE").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        field.value = "0";
        return false;
    }
});
// обработчик события нажатия на кнопку "+-"
document.getElementById("button-sign").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_click == 1 && field.value == "-") {
            field.value = '0';
            return false;
        }
        if (last_click == 1) {
            field.value = '-';
            return false;
        }
        if (field.value == "0") {
            field.value = '-';
            return false;
        }
        if (field.value == "-") {
            field.value = '0';
            return false;
        }
        field.value = -Number(field.value);
        return false;
    }
});
// обработчик события нажатия на кнопку "sqrt"
document.getElementById("button-sqrt").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_operation() == true) {
            r = a;
            a = Math.sqrt(a);
            if (non_normal())
                field.value = a;
            newP = document.createElement("p");
            newP.innerText += ("sqrt " + r + " = " + field.value);
            document.getElementById("output").appendChild(newP);
            return false;
        }
        else {
            r =field.value;
            a = Math.sqrt(Number(field.value));
            if (non_normal())
                field.value = a;
            newP = document.createElement("p");
            newP.innerText += ("sqrt " + r + " = " + field.value);
            document.getElementById("output").appendChild(newP);
            return false;
        }
    }
});
// обработчик события нажатия на кнопку "1/x"
document.getElementById("button-one_x").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (last_operation() == true) {
            r = a;
            a = 1 / a;
            if (non_normal())
                field.value = a;
            newP = document.createElement("p");
            newP.innerText += ("1/" + r + "=" + field.value);
            document.getElementById("output").appendChild(newP);
            return false;
        }
        else {
            r = field.value;
            a = 1 / Number(field.value);
            if (non_normal()) {
                field.value = a;
            }
            newP = document.createElement("p");
            newP.innerText += ("1/" + r + "=" + field.value);
            document.getElementById("output").appendChild(newP);
            return false;
        }
    }
});

// обработчик события нажатия на кнопку "->"
document.getElementById("button-d").addEventListener("click", function () {
    if (String(field.value).indexOf("E") == -1) {
        if (field.value.length > 1) {
            field.value = field.value.substring(0, field.value.length - 1);
        }
        else {
            field.value = "0";
        }
        return false;
    }
});
