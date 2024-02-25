const messages = {
    name: {
        required: 'El nombre es obligatorio',
        wrong: 'El nombre no es válido'
    }
}
const patterns = {
    onlyLetters: /^[a-z]+$/
}
export const FORM_VALIDATIONS = {
    NAME: {
        required: messages.name.required,
        pattern: {
            value: patterns.onlyLetters,
            messages: messages.name.wrong
        }
    }
}

/* 
                required: 'El nombre es obligatorio',
						pattern: { value: /^[a-z]+$/, message: 'El nombre no es válido' }
*/