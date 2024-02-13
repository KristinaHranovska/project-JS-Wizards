import { postAccess } from './helper/get-access';
import { iziToastFunctions } from './helper/helpers';

const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const footerForm = document.querySelector('.footer-subscription-form');
const footerInput = document.querySelector('.footer-subscription-input');
const feedbackForm = "feedback-subscribe-state";

const subscribeValidity = async (event) => {
    event.preventDefault();

    const email = footerInput.value.trim();

    if (!emailPattern.test(email)) {
        iziToastFunctions.getErrorInfo('Enter the correct email!');
    } else {
        try {
            await postAccess({ userEmail: { email }, typeFilter: 'subscription' });
            iziToastFunctions.getSuccessInfo('Successful subscription!');
        } catch (error) {
            iziToastFunctions.getErrorInfo('The user with this address is already subscribed!');
        }




        localStorage.removeItem(feedbackForm);
        footerForm.reset();
    }
};

footerForm.addEventListener('submit', subscribeValidity);

footerForm.addEventListener('input', (event) => {
    const footerEmail = footerInput.value.trim();
    const formData = JSON.stringify({ footerEmail });
    localStorage.setItem(feedbackForm, formData);
});