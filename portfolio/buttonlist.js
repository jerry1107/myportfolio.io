function show1() {
        document.getElementById("abihide1").style.display = "flex";
    document.getElementById("abi1open").href = "javascript:hide1()";
}
function hide1() {
    document.getElementById("abihide1").style.display = "none";
    document.getElementById("abi1open").href = "javascript:show1()";
}
function show2() {
    document.getElementById("abihide2").style.display = "flex";
    document.getElementById("abi2open").href = "javascript:hide2()";
}
function hide2() {
    document.getElementById("abihide2").style.display = "none";
    document.getElementById("abi2open").href = "javascript:show2()";
}
function show3() {
    document.getElementById("abihide3").style.display = "flex";
    document.getElementById("abi3open").href = "javascript:hide3()";
}
function hide3() {
    document.getElementById("abihide3").style.display = "none";
    document.getElementById("abi3open").href = "javascript:show3()";
}
function show4() {
    document.getElementById("abihide4").style.display = "flex";
    document.getElementById("abi4open").href = "javascript:hide4()";
}
function hide4() {
    document.getElementById("abihide4").style.display = "none";
    document.getElementById("abi4open").href = "javascript:show4()";
}
function show5() {
    document.getElementById("abihide5").style.display = "flex";
    document.getElementById("abi5open").href = "javascript:hide5()";
}
function hide5() {
    document.getElementById("abihide5").style.display = "none";
    document.getElementById("abi5open").href = "javascript:show5()";
}
function showiframe(){
    document.getElementById("hideframe").style.display = "block";
    document.getElementById("openframe").href = "javascript:hideiframe()";
}
function hideiframe(){
    document.getElementById("hideframe").style.display = "none";
    document.getElementById("openframe").href = "javascript:showiframe()";
}
function changetohere1() {
    document.getElementById("colorchange").style.width = "7%";
    document.getElementsByClassName("timespot")[0].style.borderColor = "rgb(3,56,5)";
    for (j = 5; j >= 1; j--) { document.getElementsByClassName("timespot")[j].style.borderColor = "#77d196"; }

}
function changetohere2() {
    document.getElementById("colorchange").style.width = "25%";
    for (i = 0; i < 2; i++) { document.getElementsByClassName("timespot")[i].style.borderColor = "rgb(3,56,5)"; }
    for (j = 5; j >= 2; j--) { document.getElementsByClassName("timespot")[j].style.borderColor = "#77d196"; }

}
function changetohere3() {
    document.getElementById("colorchange").style.width = "43%";
    for (i = 0; i < 3; i++) { document.getElementsByClassName("timespot")[i].style.borderColor = "rgb(3,56,5)"; }
    for (j = 5; j >= 3; j--) { document.getElementsByClassName("timespot")[j].style.borderColor = "#77d196"; }
}
function changetohere4() {
    document.getElementById("colorchange").style.width = "59%";
    for (i = 0; i < 4; i++) { document.getElementsByClassName("timespot")[i].style.borderColor = "rgb(3,56,5)"; }
    for (j = 5; j >= 4; j--) { document.getElementsByClassName("timespot")[j].style.borderColor = "#77d196"; }

}
function changetohere5() {
    document.getElementById("colorchange").style.width = "75%";
    for (i = 0; i < 5; i++) { document.getElementsByClassName("timespot")[i].style.borderColor = "rgb(3,56,5)"; }
    for (j = 5; j >= 5; j--) { document.getElementsByClassName("timespot")[j].style.borderColor = "#77d196"; }

}
function changetohere6() {
    document.getElementById("colorchange").style.width = "91%";
    for (i = 0; i < 6; i++) { document.getElementsByClassName("timespot")[i].style.borderColor = "rgb(3,56,5)"; }

}