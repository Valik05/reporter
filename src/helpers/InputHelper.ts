export const strictPasswordValidation = {
    validate: {
        validateLength: (str: string) => str.length >= 8 || "Пароль должен содержать минимум 8 символов",
        validateDigit: (str: string) => /\d/.test(str) || "Пароль должен содержать хотя бы одну цифру",
        validateUpperCase: (str: string) => /[A-ZА-ЯЁ]/.test(str) || "Пароль должен содержать хотя бы одну заглавную букву",
        validateLowerCase: (str: string) => /[a-zа-яё]/.test(str) || "Пароль должен содержать хотя бы одну строчную букву",
        validateSpecialSymbols: (str: string) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/.test(str) || "Пароль должен содержать хотя бы один специальный символ",
    }
}

export const notStrictPasswordValidation = {
    validate: {
        validateLength: (str: string) => str.length >= 8 || "Пароль должен содержать минимум 8 символов",
        validateUpperCase: (str: string) => /[A-ZА-ЯЁ]/.test(str) || "Пароль должен содержать хотя бы одну заглавную букву",
        validateLowerCase: (str: string) => /[a-zа-яё]/.test(str) || "Пароль должен содержать хотя бы одну строчную букву"
    }
}

export const emailValidation = {
    pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Введите корректный email"
    }
}

export const validationLength = {
    maxLength: {
        value: 256,
        message: "Длина не должна превышать 256 символов"
    }
}

export const latinValidation = {
    pattern: {
        value: /^[a-zA-Z0-9_-](?:[a-zA-Z0-9 _-]{1,18}[a-zA-Z0-9_-])?$/,
        message: "Введите только латинские буквы"
    }
}

export const aliasValidation = {
    maxLength: {
        value: 32,
        message: "Длина не должна превышать 32 символов"
    },
    pattern: {
        value: /^[a-zA-Z0-9_-](?:[a-zA-Z0-9 _-]*)$/,
        message: "Разрешены только латинские буквы и цыфры"
    }
}

export const domainValidation = {
    pattern: {
        value: /^(?!:\/\/)([a-zA-Z0-9-_]{1,63}\.)+[a-zA-Z]{2,}$/,
        message: "Введите валидный домен"
    }
}

export const requiredValidation = {
    required: {
        value: true,
        message: "Это поле обязательно для заполнения"
    }
}