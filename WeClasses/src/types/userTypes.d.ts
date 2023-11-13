type login = {
    email: string,
    password: string

}

type contact = {
    name: string,
    lastName: string,
    email: string,
    phone: string,
    nativeLanguage: string,
    languageToLearn: string

}

type fullContact = contact & {

    country: string,
    languageLevel: string,
    password: string
    password2: string

}



export { login, contact, fullContact }