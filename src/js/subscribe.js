import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
    emailPattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    footerForm: document.querySelector('.footer-subscription-form'),
    footerInput: document.querySelector('.footer-subscription-input'),
    feedbackForm: "feedback-subscribe-state",
}

const subscribeEmail = async (email) => {
    try {
        const response = await axios.post('https://energyflow.b.goit.study/api/subscription', { email });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const subscribeValidity = async (event) => {
    event.preventDefault();

    const email = refs.footerInput.value.trim();

    if (!refs.emailPattern.test(email)) {
        iziToast.error({
            message: 'Enter the correct email!'
        });
    } else {
        try {
            await subscribeEmail(email);
            iziToast.success({
                message: 'Successful subscription!'
            });
        } catch (error) {
            iziToast.error({
                message: 'The user with this address is already subscribed!'
            });
        }

        localStorage.removeItem(refs.feedbackForm);
        refs.footerForm.reset();
    }
};

refs.footerForm.addEventListener('submit', subscribeValidity);

refs.footerForm.addEventListener('input', () => {
    const footerEmail = refs.footerInput.value.trim();
    const formData = JSON.stringify({ footerEmail });
    localStorage.setItem(refs.feedbackForm, formData);
});