'use strict';

(function() {
    const form = document.querySelector('[data-todo-form]');
    const todoItemsContainer = document.querySelector('#todoItems');


    const createTodoItem = ({title, description}) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-4';
        wrapper.innerHTML = `
            <div class="taskWrapper">
                <div class="taskHeading">${title}</div>
                <div class="taskDescription">${description}</div>
            </div>`;
        return wrapper;
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const inputs = event.target.querySelectorAll('input, textarea');
        const data = Array.from(inputs).reduce((acc, {name, value}) => {
            acc[name] = value;
            return acc;
        }, {});

        const isValid = validateData(data);

        if (isValid) {
            const todoItemElement = createTodoItem(data);
            todoItemsContainer.prepend(todoItemElement);
            event.target.reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    }

    const inputHandler = () => {
        const formSubmitBtn = form.querySelector('button[type=submit]');
        const inputs = form.querySelectorAll('input, textarea');
        let isFormValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            formSubmitBtn.removeAttribute('disabled');
        } else {
            formSubmitBtn.setAttribute('disabled', '');
        }
    }

    const validateData = (data) => {
        for (let key in data) {
            if (data[key].trim() === '') {
                return false;
            }
        }
        return true;
    }

    form.addEventListener('submit', submitHandler);
    form.addEventListener('input', inputHandler);
})();