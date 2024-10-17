type login = {
    email: string,
    password: string
    keepSession: boolean

}

type contact = {
    _id: string,
    name: string,
    lastName: string,
    email: string,
    phone: string,
    countryCode: string,
    nativeLanguage: string,
    languageToLearn: string,
    photo?: string,
    createdAt?: string,
    birthDay?: string

}

type fullContact = contact & {

    country: string,
    languageLevel: string,
    password: string
    password2?: string,
    active: boolean,
    description?: string

}



export { login, contact, fullContact }