document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("paymentForm");
    const errorMessage = document.getElementById("error-message");
    
    paymentForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

     
        let cardName = document.getElementById("card-name").value.trim();
        let cardNumber = document.getElementById("card-number").value.trim();
        let expiryDate = document.getElementById("expiry-date").value.trim();
        let cvv = document.getElementById("cvv").value.trim();
        
    
        errorMessage.textContent = '';

  
        if (!validateCardName(cardName)) {
            errorMessage.textContent = 'Please enter a valid name on the card.';
            return;
        }
        if (!validateCardNumber(cardNumber)) {
            errorMessage.textContent = 'Please enter a valid 16-digit card number.';
            return;
        }
        if (!validateExpiryDate(expiryDate)) {
            errorMessage.textContent = 'Please enter a valid expiry date (MM/YY).';
            return;
        }
        if (!validateCVV(cvv)) {
            errorMessage.textContent = 'Please enter a valid CVV.';
            return;
        }


        window.location.href = "../Html/thankyou.html";
    });

    
    function validateCardName(name) {
        return name.length > 0; 
    }

    function validateCardNumber(number) {
        return /^\d{16}$/.test(number); 
    }

    function validateExpiryDate(date) {
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(date); 
    }

    function validateCVV(cvv) {
        return /^\d{3}$/.test(cvv); 
    }


    document.getElementById("card-name").addEventListener("input", function () {
        if (!validateCardName(this.value.trim())) {
            errorMessage.textContent = 'Please enter a valid name on the card.';
        } else {
            errorMessage.textContent = '';
        }
    });

    document.getElementById("card-number").addEventListener("input", function () {
        if (!validateCardNumber(this.value.trim())) {
            errorMessage.textContent = 'Please enter a valid 16-digit card number.';
        } else {
            errorMessage.textContent = '';
        }
    });

    document.getElementById("expiry-date").addEventListener("input", function () {
        if (!validateExpiryDate(this.value.trim())) {
            errorMessage.textContent = 'Please enter a valid expiry date (MM/YY).';
        } else {
            errorMessage.textContent = '';
        }
    });

    document.getElementById("cvv").addEventListener("input", function () {
        if (!validateCVV(this.value.trim())) {
            errorMessage.textContent = 'Please enter a valid CVV.';
        } else {
            errorMessage.textContent = '';
        }
    });
});
