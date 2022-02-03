
function testExpression() {
    const usrTxt = document.getElementById("usrstr").value;
    const regTxt = new RegExp(document.getElementById("regexp").value);

    console.log(regTxt);
    //Test the regular expression
    check = regTxt.test(String(usrTxt));
    console.log(check);
    document.getElementById("check").innerHTML = check;
    
}