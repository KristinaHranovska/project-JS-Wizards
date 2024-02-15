import { getAccess } from "./helper/get-access";
import { format } from 'date-fns';

const quoteOfTheDayHelps = {
    author: `Bruce Lee`,
    quote: `It doesn't matter how slowly you progress. The main thing is that you don't stop.`,
}
const refs = {
    quotePage: document.querySelector('.js-quote'),
    authorPage: document.querySelector('.js-author'),
    getDate: localStorage.getItem('dateNow'),
    storedQuote: JSON.parse(localStorage.getItem('quoteDay')),
}

function getQuote() {
    const date = new Date();
    const formattedDate = format(date, 'dd.MM.yyyy');

    setTimeout(() => {
        if (refs.getDate === formattedDate) {
            const localInfo = JSON.parse(localStorage.getItem('quoteDay'))
            const { author, quote } = localInfo;
            refs.quotePage.textContent = quote;
            refs.authorPage.textContent = author;
        }
    }, 500)

    if (!refs.getDate || refs.getDate !== formattedDate || !!refs.storedQuote) {
        localStorage.setItem('dateNow', formattedDate);

        try {
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

                    refs.quotePage.textContent = quote;
                    refs.authorPage.textContent = author;
                })
                .catch((err) => {
                    console.error("Помилка при отриманні цитати:", err);

                    refs.quotePage.textContent = quoteOfTheDayHelps.quote;
                    refs.authorPage.textContent = quoteOfTheDayHelps.author;
                    localStorage.setItem('quoteDay', JSON.stringify(quoteOfTheDayHelps));
                })
        } catch (error) {
            console.error("Помилка при виконанні запиту:", error);
        }
    }

}

getQuote();