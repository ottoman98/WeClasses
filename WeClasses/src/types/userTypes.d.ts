type login = {
    email: string,
    password: string
    keepSession: boolean

}

type contact = {
    name: string,
    lastName: string,
    email: string,
    phone: string,
    countryCode: string,
    nativeLanguage: string,
    languageToLearn: string,
    photo?: string

}

type fullContact = contact & {

    country: string,
    languageLevel: string,
    password: string
    password2?: string

}



export { login, contact, fullContact }