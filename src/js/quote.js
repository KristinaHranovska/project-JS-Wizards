import { getAccess } from "./helper/get-access";

function getQuote() {
    const quotePage = document.querySelector('.js-quote');
    const authorPage = document.querySelector('.js-author');

    getAccess({
        typeFilter: 'quote',
    })
        .then(({ data }) => {
            const { author, quote } = data;

            quotePage.textContent = quote;
            authorPage.textContent = author;
        })
        .catch(() => { console.log(err); })
}

getQuote();