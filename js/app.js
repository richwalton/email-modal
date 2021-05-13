window.onload = function() {
    let emailState = false;
    let emailModal = document.querySelector('.email-modal');
    let closeButton = document.querySelector('.email-modal__close-btn');
    let emailInput = document.querySelector('.email-modal__input');
    let emailButton = document.querySelector('.email-modal__button');
    let errorBorder = document.querySelector('.email-modal__form-group');
    let errorMsg = document.querySelector('.email-modal_error');
    let thankYouCont = document.querySelector('.email-thank');
    let declineOffer = document.querySelector('.email-modal__decline-offer');

    // *** -------- Trigger Modal -------- *** //
    document.body.addEventListener('mouseleave',  () => {
        showModal();
    }); 
    
    // *** -------- Email Modal -------- *** //
    let showModal = () => {
        if (emailState === false) {
            emailModal.classList.add('email-modal--visible');
            emailState = true
            }
    }
    
    let closeModal = () => {
        emailModal.classList.remove('email-modal--visible')
    };
    
    // *** -------- Validate email -------- *** //
    function emailIsValid (email) {
        return /\S+@\S+\.\S+/.test(email)
    };

    // *** -------- Collect Email -------- *** //
    function collectEmail(e){
        let emailVal = emailInput.value;
        console.log(emailIsValid(emailVal))
        // Valid Email ------ ***
        if (emailIsValid(emailVal)) {
            console.log(emailVal)
            errorMsg.style.display = 'none'
            
            thankYouCont.classList.add('email-thank-success')
            emailInput.value = ''
            setTimeout(() => {
                closeModal();
            }, 3000);
        } else {
           errorMsg.style.display = 'block'
           errorBorder.classList.add('error-border') 
        }
        emailInput.value = ''
    };
    emailInput.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            collectEmail()
        }
    });
    emailButton.addEventListener('click', collectEmail);

    // *** -------- Opt out of email and exit modal -------- *** //
    declineOffer.addEventListener('click', ()=> {
        closeModal();
    });

    closeButton.addEventListener('click', ()=> {
        closeModal();
    });

    // *** -------- Trigger Modal -------- *** //
    document.body.addEventListener('mouseleave',  () => {
        showModal();
    }); 
};

