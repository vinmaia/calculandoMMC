let num1 = "";
let num2 = "";
let mmcresult;

console.log("Escolha um número: ");

process.stdin.on("data", function (data) {
    if (!num1) {
        num1 = Number(data.toString().trim());
        console.log("Escolha mais um número: ");
    } else if (!num2) {
        num2 = Number(data.toString().trim());
        tamanhodenum();
        process.exit();
    }
});

function calcularMMCnum1(num1, num2) {
    while (true) {
        if (num1 % num2 === 0) {
            return num1;
        } else {
            num1 += num2;
        }
        break;
    }
}

function calcularMMCnum2(num2, num1) {
    while (true) {
        if (num2 % num1 === 0) {
            return num2;
        } else {
            num2 += num1;
        }
        break;
    }
}

function tamanhodenum() {
    while (true) {
        if (num1 > num2) {
            console.log("o MMC é: ", calcularMMCnum1(num1, num2));
        } else if (num1 < num2) {
            console.log("o MMC é: ",calcularMMCnum2(num2, num1));
        }
        break;
    }}
