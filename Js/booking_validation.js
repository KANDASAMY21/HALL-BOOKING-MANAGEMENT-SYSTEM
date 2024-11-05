document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.querySelector(".booking-form");
    const errorMessage = document.getElementById("error-message") || createErrorMessageElement();

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();


        let eventName = document.getElementById("eventName").value.trim();
        let eventDate = document.getElementById("eventDate").value;
        let eventTime = document.getElementById("eventTime").value;
        let guestCount = document.getElementById("guestCount").value.trim();
        let price = document.getElementById("price").value.trim();
        let contactName = document.getElementById("contactName").value.trim();
        let contactPhone = document.getElementById("contactPhone").value.trim();
        let contactEmail = document.getElementById("contactEmail").value.trim();


        errorMessage.textContent = '';


        if (!validateEventName(eventName)) {
            errorMessage.textContent = 'Please enter a valid event name.';
            return;
        }
        if (!validateEventDate(eventDate)) {
            errorMessage.textContent = 'Please enter a valid event date.';
            return;
        }
        if (!validateEventTime(eventTime)) {
            errorMessage.textContent = 'Please enter a valid event time.';
            return;
        }
        if (!validateGuestCount(guestCount)) {
            errorMessage.textContent = 'Please enter a valid guest count.';
            return;
        }
        if (!validatePrice(price)) {
            errorMessage.textContent = 'Please enter a valid price.';
            return;
        }
        if (!validateContactName(contactName)) {
            errorMessage.textContent = 'Please enter your name.';
            return;
        }
        if (!validateContactPhone(contactPhone)) {
            errorMessage.textContent = 'Please enter a valid phone number.';
            return;
        }
        if (!validateContactEmail(contactEmail)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            return;
        }

     
        window.location.href = "../Html/payment.html"; 
    });

 
    function createErrorMessageElement() {
        const errorDiv = document.createElement('div');
        errorDiv.id = "error-message";
        errorDiv.style.color = "red";
        errorDiv.style.marginTop = "10px";
        bookingForm.appendChild(errorDiv);
        return errorDiv;
    }

 
    function validateEventName(name) {
        return name.length > 0; 
    }

    function validateEventDate(date) {
        return date !== ''; 
    }

    function validateEventTime(time) {
        return time !== ''; 
    }

    function validateGuestCount(count) {
        return Number.isInteger(+count) && +count > 0;
    }

    function validatePrice(price) {
        return /^\d+(\.\d{1,2})?$/.test(price);
    }

    function validateContactName(name) {
        return name.length > 0; 
    }

    function validateContactPhone(phone) {
        return /^\+?\d{10,15}$/.test(phone); 
    }

    function validateContactEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    document.getElementById("eventName").addEventListener("input", function () {
        if (!validateEventName(this.value.trim())) {
            errorMessage.textContent = 'Please enter a valid event name.';
        } else {
            errorMessage.textContent = '';
        }
    });

    document.getElementById("eventDate").addEventListener("input", function () {
        if (!validateEventDate(this.value)) {
            errorMessage.textContent = 'Please enter a valid event date.';
        } else {
            errorMessage.textContent = '';
        }
    });

    document.getElementById("eventTime").addEventListener("input", function () {
        if (!validateEventTime(this.value)) {
            errorMessage.textContent = 'Please enter a valid event time.';
        } else {
            errorMessage.textContent = '';
        }
    });

    document.getElementById("guestCount").addEventListener("input", function () {
        if (!validateGuestCount(this.value.trim())) {
            errorMessage.textContent = 'Please enter a valid guest count.';
        } else {
            errorMessage.textContent = '';
        }
    });

    document.getElementById("price").addEventListener("input", function () {
        if (!validatePrice(this.value.trim())) {
            errorMessage.textContent = 'Please enter a valid price.';
        } else {
            errorMessage.textContent = '';
        }
    });

    document.getElementById("contactName").addEventListener("input", function () {
        if (!validateContactName(this.value.trim())) {
            errorMessage.textContent = 'Please enter your name.';
        } else {
            errorMessage.textContent = '';
        }
    });

    document.getElementById("contactPhone").addEventListener("input", function () {
        if (!validateContactPhone(this.value.trim())) {
            errorMessage.textContent = 'Please enter a valid phone number.';
        } else {
            errorMessage.textContent = '';
        }
    });

    document.getElementById("contactEmail").addEventListener("input", function () {
        if (!validateContactEmail(this.value.trim())) {
            errorMessage.textContent = 'Please enter a valid email address.';
        } else {
            errorMessage.textContent = '';
        }
    });
});
