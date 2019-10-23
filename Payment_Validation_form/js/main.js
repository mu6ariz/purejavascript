// It is our database, we will use these infos to validate form //

let info = {

    element: {
        value: '1234123412341234',
        cvc: '866',
        end: '12/20',
        pay: '1000',
    }

}


for (let f in info) {

    let value = info[f].value;
    let cvc = info[f].cvc;
    let end = info[f].end;
    let pay = info[f].pay;

    let card_num = document.getElementById('card-num');
    let card_num_span = document.getElementById('card_num_error');

    let cvc_num = document.getElementById('cvc-num');
    let cvc_num_span = document.getElementById('cvc_num_error');

    let end_num = document.getElementById('end-num');
    let end_num_span = document.getElementById('end_num_error');

    let pay_num = document.getElementById('pay-num');
    let pay_num_error = document.getElementById('pay_num_error');

    let succes = document.getElementById('success');





    let btn = document.getElementById('btn');
    btn.addEventListener('click', validate);

    function validate() {

        if (card_num.value == 0 || cvc_num.value == 0 || end_num.value == 0 || pay_num.value == 0){
            alert('Please fill in theall blanks');
        }

        let done = true;

        if (card_num.value == value) {
            card_num_span.innerText = '';
            done = true;
        } else if (card_num.value.length < 16) {
            done = false;
            card_num_span.innerText = 'Card number should not be under 16';
            done = false;
        } else {
            card_num_span.innerText = 'Card number is not valid';
            done = false;
        }

        //////////////////////////////////////////////////////////////////////////

        if (cvc_num.value == cvc) {
            cvc_num_span.innerText = '';
            done = true;
        } else if (cvc_num.value.length < 3) {
            cvc_num_span.innerText = 'Cvc number should not be under 3';
            done = false;
        } else {
            cvc_num_span.innerText = 'Cvc number is not valid';
            done = false;
        }

        //////////////////////////////////////////////////////////////////////////

        if (end_num.value == end) {
            end_num_span.innerText = '';
            done = true;
        } else if (end_num.value.length < 3) {
            end_num_span.innerText = 'End date not valid';
            done = false;
        } else {
            end_num_span.innerText = 'End date is not valid';
            done = false;
        }
        //////////////////////////////////////////////////////////////////////////

        if (pay_num.value == pay) {
            pay_num_error.innerText = '';
            done = true;
        }
        else {
            pay_num_error.innerText = 'Payment is not enough for payment';
            done = false;
        }

        if(done){
            succes.innerHTML = 'Your payment Succesfully';
            succes.className = 'show';
            succes.style.backgroundColor = '#4cd137';
            succes.style.height = '70px';
        }

        if(!done){
            succes.innerHTML = 'Please check Errors & Try Again';
            succes.style.backgroundColor = '#e84118';
            succes.style.height = '70px';
            
        }

    }

    
}