import JustValidate from 'just-validate';

function createFormValidation(form) {

    const validator = new JustValidate(form);
    console.log(validator)

    validator
        .addField('[name="user-name"]', [
            {
                rule: 'required',
                errorMessage: 'This field is required',
            },
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'The name must have at least 3 letters',
            }
        ])
        .addField('[name="user-email"]', [
            {
                rule: 'email',
                errorMessage: 'Email has invalid format',
            },
            {
                rule: 'required',
                value: /[a-z, A-Z, 0-9]/gi,
                errorMessage: 'This field is required',
            }
        ]);
}

export default createFormValidation;
