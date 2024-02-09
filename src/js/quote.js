import { getAccess } from "./helper/get-access";
import { format } from 'date-fns';

function getQuote() {
    const quotePage = document.querySelector('.js-quote');
    const authorPage = document.querySelector('.js-author');

    const date = new Date();
    const formattedDate = format(date, 'dd.MM.yyyy');
    const getDate = localStorage.getItem('dateNow');

    if (getDate === formattedDate) {
        const localInfo = JSON.parse(localStorage.getItem('quoteDay'))
        const { author, quote } = localInfo;
        quotePage.textContent = quote;
        authorPage.textContent = author;

        return;
    }

    if (!getDate || getDate !== formattedDate) {
        localStorage.setItem('dateNow', formattedDate);

        getAccess({
            typeFilter: 'quote',
        })
            .then(({ data }) => {
                const { author, quote } = data;

                const quoteOfTheDay = {
                    author: author,
                    quote: quote
                };
                localStorage.setItem('quoteDay', JSON.stringify(quoteOfTheDay));

                quotePage.textContent = quote;
                authorPage.textContent = author;

            })
            .catch(() => { console.log(err); })
    }

}

getQuote();