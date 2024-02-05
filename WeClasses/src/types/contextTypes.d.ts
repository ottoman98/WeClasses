import { Dispatch, SetStateAction } from 'react'
import { fullContact } from './userTypes';
import { language } from './language';

type dataContextUser = {
    cookie: string | undefined,
    setCookie: Dispatch<SetStateAction<string | undefined>>,
    decodedToken?: {
        user: fullContact,
        iat: number,
        exp: number
    } | unknown
}

type dataContextLanguage = {
    setLanguage: Dispatch<SetStateAction<string>>,
    translation: language

}

export { dataContextUser, dataContextLanguage }