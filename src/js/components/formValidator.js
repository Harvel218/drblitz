class FormValidate {
    constructor(form, options = { classError: 'error' }) {
        this.options = options;
        this.form = form;
        this.errorMsg = form.querySelector('.ErrorMsg');
    }

    getFields() {
        const inputs = [
            ...this.form.querySelectorAll(
                'input:not(:disabled):not([type="submit"]), select:not(:disabled), textarea:not(:disabled)'
            ),
        ];
        const result = [];

        for (const el of inputs) {
            if (el.willValidate) {
                result.push(el);
            }
        }

        return result;
    }

    prepareElements() {
        const elements = this.getFields();

        for (const el of elements) {
            let eventName = 'change';
            el.addEventListener(eventName, (e) => this.testInput(e.target));
        }
    }

    testInput(input) {
        const valid = input.checkValidity();
        this.markFieldAsError(input, !valid);
        return valid;
    }

    markFieldAsError(field, show) {
        if (show) {
            field.closest('.input__container').classList.add('error');
            field.closest('.input__container').classList.remove('valid');
        } else {
            field.closest('.input__container').classList.remove('error');
            field.closest('.input__container').classList.add('valid');
        }
    }

    bindSubmit() {
        this.form.querySelector('.js-submit').addEventListener('click', (e) => {
            e.preventDefault();

            const elements = this.getFields();

            for (const el of elements) {
                this.markFieldAsError(el, !el.checkValidity());
            }

            if (this.checkFormErrors()) {
                // this.sendData(this.form);
                console.log('sending data somewhere...')
            }
        });
    }

    checkFormErrors() {
        const fields = this.getFields();
        const errors = [];
        for (const field of fields) {
            const error = field.closest('.error');
            errors.push(error);
        }

        return errors.every((el) => el === null);
    }

    async sendData(form) {
        const url = '';
        const data = this.getEnteredData();
        data.resources = form.name;
        this.form.querySelector('.js-submit').disabled = true;
        try {
            const data = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
        } catch (error) {
            console.error(error);
        }
        this.form.querySelector('.js-submit').disabled = false;
    }

    getEnteredData() {
        const elements = this.getFields();

        const result = {};
        for (const el of elements) {
            result[el.name] = el.value;
        }
        return result;
    }

    init() {
        this.prepareElements();
        this.bindSubmit();
    }
}

function runValidator() {
    const willBeValidated = document.querySelectorAll('.js-contact-form');
    if (willBeValidated) {
        for (const formEl of willBeValidated) {
            const cfg = {};
            const form = new FormValidate(formEl, cfg);

            form.init();
        }
    }
}

runValidator();
