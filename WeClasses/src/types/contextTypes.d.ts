import { Dispatch, SetStateAction } from 'react'
import { fullContact } from './userTypes';
import { translationType } from './translationTypes';

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
    setTranslation: Dispatch<SetStateAction<language>>,
    translation: translationType


}

export { dataContextUser, dataContextLanguage }