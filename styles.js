document.addEventListener("input", formStyles => {
    document.getElementById('car').addEventListener("input", updateInputOne => {
        const el = document.getElementById('car').value;
        const el2 = document.getElementById('carborder');
        const el3 = document.getElementById('carlabel');
    
        el.length > 3 ? el2.classList.add("bordergreen") : el2.classList.remove("bordergreen");
        el.length > 0 ? el3.classList.add("labelactive") : el3.classList.remove("labelactive");
    });
    
    document.getElementById('lastmonth').addEventListener("input", updateInputTwo => {
        const el = document.getElementById('lastmonth').value;
        const el2 = document.getElementById('lastmonthborder');
        const el3 = document.getElementById('lastmonthlabel');
    
        el.length >= 1 ? el2.classList.add("bordergreen") : el2.classList.remove("bordergreen");
        el.length > 0 ? el3.classList.add("labelactive") : el3.classList.remove("labelactive");
    });
    
    
    document.getElementById('money').addEventListener("input", updateInputThree => {
        const el = document.getElementById('money').value;
        const el2 = document.getElementById('moneyborder');
        const el3 = document.getElementById('moneylabel');
    
        el.length > 3 ? el2.classList.add("bordergreen") : el2.classList.remove("bordergreen");
        el.length > 0 ? el3.classList.add("labelactive") : el3.classList.remove("labelactive");
    });
    
    
    document.getElementById('month').addEventListener("input", updateInputFour => {
        const el = document.getElementById('month').value;
        const el2 = document.getElementById('monthborder');
        const el3 = document.getElementById('monthlabel');
    
        el.length >= 1 ? el2.classList.add("bordergreen") : el2.classList.remove("bordergreen");
        el.length > 0 ? el3.classList.add("labelactive") : el3.classList.remove("labelactive");
    });
    
    
    document.getElementById('rate').addEventListener("input", updateInputFive => {
        const el = document.getElementById('rate').value;
        const el2 = document.getElementById('rateborder');
        const el3 = document.getElementById('ratelabel');
    
        el.length >= 1 ? el2.classList.add("borderblue") : el2.classList.remove("borderblue");
        el.length > 0 ? el3.classList.add("labelactive") : el3.classList.remove("labelactive");
    });
    
    document.getElementById('opening').addEventListener("input", updateInputFive => {
        const el = document.getElementById('opening').value;
        const el2 = document.getElementById('openingborder');
        const el3 = document.getElementById('openinglabel');
    
        el.length >= 1 ? el2.classList.add("borderblue") : el2.classList.remove("borderblue");
        el.length > 0 ? el3.classList.add("labelactive") : el3.classList.remove("labelactive");
    });
    
    document.getElementById('accountfee').addEventListener("input", updateInputFive => {
        const el = document.getElementById('accountfee').value;
        const el2 = document.getElementById('accountfeeborder');
        const el3 = document.getElementById('accountfeelabel');
    
        el.length >= 1 ? el2.classList.add("borderblue") : el2.classList.remove("borderblue");
        el.length > 0 ? el3.classList.add("labelactive") : el3.classList.remove("labelactive");
    });
    
    
    document.addEventListener("input", buttonActive => {
        
        const el = document.getElementById('ctabutton');
        const el1 = document.getElementById('car').value;
        const el2 = document.getElementById('lastmonth').value;
        const el3 = document.getElementById('money').value;
        const el4 = document.getElementById('month').value;
        const el5 = document.getElementById('rate').value;
        const el6 = document.getElementById('opening').value;
        const el7 = document.getElementById('accountfee').value;

    
        el1.length > 3 && el2.length >= 1 && el3.length > 3 && el4.length >= 1 && el5.length >= 1 && el6.length >= 1 && el7.length >= 1 ? el.classList.add("active") : el.classList.remove("active");
    });
})
    
