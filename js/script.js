'use strict';

(function () {
    const todoFormElement = document.querySelector('[data-todo-form]');
    const todoListElement = document.querySelector('#todoItems');

    const createTodoCard = ({title, description}) => {
        const card = document.createElement('div');
        card.className = 'col-4';
        card.innerHTML = `
            <div class="taskWrapper">
                <div class="taskHeading">${title}</div>
                <div class="taskDescription">${description}</div>
            </div>`;
        return card;
    }

    const configureFormHandlers = (formElement) => {
        let isFormInvalid = true;
        const formFieldValidity = {};

        const initializeFormFieldValidity = () => {
            formElement.querySelectorAll('input, textarea').forEach(({name}) => {
                formFieldValidity[name] = false;
            })
        }
        initializeFormFieldValidity();
        console.log(formFieldValidity);

        const handleSubmit = (event) => {
            event.preventDefault();
            if (isFormInvalid) return;
            const inputs = event.target.querySelectorAll('input, textarea');
            const formData = Array.from(inputs).reduce((acc, {name, value}) => {
                acc[name] = value;
                return acc;
            }, {});
            const todoCardElement = createTodoCard(formData);
            todoListElement.prepend(todoCardElement);
            event.target.reset();
        }

        const handleInput = ({target}) => {
            const submitButtonElement = formElement.querySelector('button[type=submit]');

            if (target.value.trim().length) {
                if (!formFieldValidity[target.name]) formFieldValidity[target.name] = true;
            } else {
                if (formFieldValidity[target.name]) formFieldValidity[target.name] = false;
            }

            isFormInvalid = !Object.values(formFieldValidity).every((field) => field);

            if (!isFormInvalid) {
                submitButtonElement.removeAttribute('disabled');
            } else {
                submitButtonElement.setAttribute('disabled', '');
            }
        }

        return {
            handleInput,
            handleSubmit
        }
    }

    const {handleSubmit, handleInput} = configureFormHandlers(todoFormElement);
    todoFormElement.addEventListener('submit', handleSubmit);
    todoFormElement.addEventListener('input', handleInput);
})();
