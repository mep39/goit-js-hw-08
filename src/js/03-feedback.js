import { throttle } from "lodash";


const form = document.querySelector('.feedback-form')
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');
const KEY_STORAGE_INPUT = "feedback-form-state";

form.addEventListener('input', throttle(saveCurrentValue, 500));

const feedbackUser = {};

getDateFeedback();

function getDateFeedback() {
    const getFeedbackUser = localStorage.getItem(KEY_STORAGE_INPUT);
    const feedbackUserParseJSON = JSON.parse(getFeedbackUser);
    if (getFeedbackUser) {
        inputEmail.value = feedbackUserParseJSON.email;
        textareaMessage.value = feedbackUserParseJSON.message;
    };
}

function saveCurrentValue(evt) {
    if (inputEmail.value !== "" || textareaMessage.value !== "") {
        feedbackUser.email = inputEmail.value;
        feedbackUser.message = textareaMessage.value;
        const feedbackUserJSON = JSON.stringify(feedbackUser);

        localStorage.setItem(KEY_STORAGE_INPUT, feedbackUserJSON);
    }
};

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (inputEmail.value === '' || textareaMessage.value === '') {
        return alert('Please fill in all fields!');
    } else {
        showObjectfeedback();
        inputEmail.value = '';
        textareaMessage.value = '';
        localStorage.removeItem(KEY_STORAGE_INPUT);
    }
};
function showObjectfeedback() {
    const checkfeedbackUser = localStorage.getItem(KEY_STORAGE_INPUT);
    const feedbackParseJSON = JSON.parse(checkfeedbackUser);
    if (checkfeedbackUser) {
        console.log(feedbackParseJSON);
    }
}
