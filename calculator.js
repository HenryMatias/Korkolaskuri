document.addEventListener("click", calculator => {
    document.getElementById('ctabutton').addEventListener("click", calcLoan => {
        document.getElementById('lastmonth').value <= 0 ? withoutDownpayment() : withDownpayment();
    })
})
    


const withoutDownpayment = () => {

    const CARVALUE = document.getElementById("car").value;
    const CASHAMOUNT = document.getElementById("money").value;
    const MONTHSAMOUNT = document.getElementById("month").value;
    const LASTMONTH = document.getElementById("lastmonth").value;
    const OPENING = parseInt(document.getElementById("opening").value);
    const ACCOUNTFEE = parseInt(document.getElementById("accountfee").value);
    const RATE = document.getElementById("rate").value.replace(/,/,".");
    let FINALPRICE = 0;

    // Financed Price
    CASHAMOUNT <= 0 ? FINALPRICE =+ CARVALUE + OPENING : FINALPRICE =+ CARVALUE - CASHAMOUNT + OPENING;

    // Monthly payment
    const MONTHLYPAYMENT = (ACCOUNTFEE+((((Math.pow(((RATE/(100*12))+1),MONTHSAMOUNT))*(RATE/(100*12)))/((Math.pow(((RATE/(100*12))+1),MONTHSAMOUNT))-1))*FINALPRICE)).toFixed(2);

    document.getElementById("result").value = MONTHLYPAYMENT + " €";

}

const withDownpayment = () => {

    const CARVALUE = document.getElementById("car").value;
    const CASHAMOUNT = document.getElementById("money").value;
    const MONTHSAMOUNT = document.getElementById("month").value;
    const LASTMONTH = document.getElementById("lastmonth").value;
    const OPENING = parseInt(document.getElementById("opening").value);
    const ACCOUNTFEE = parseInt(document.getElementById("accountfee").value);
    const RATE = document.getElementById("rate").value.replace(/,/,".");

    // Financed part
    const PAYEDAMOUNT = CARVALUE-CASHAMOUNT-(LASTMONTH/Math.pow((((RATE/1000)+1).toFixed(6)),MONTHSAMOUNT)-ACCOUNTFEE)+OPENING;

    // Monthly payment
    const MONTHLYPAYMENT = ((Math.pow((((RATE/1000)+1).toFixed(6)),MONTHSAMOUNT-1)*((RATE/1000).toFixed(6)))/(Math.pow((((RATE/1000)+1).toFixed(6)),MONTHSAMOUNT-1)-1)*PAYEDAMOUNT+ACCOUNTFEE).toFixed(2);

    document.getElementById("result").value = MONTHLYPAYMENT + " €";

}