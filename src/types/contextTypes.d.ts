import { Dispatch, SetStateAction } from 'react'

import { translationType } from './translationTypes';

type dataContextUser = {
    cookie: string | undefined,
    setCookie: Dispatch<SetStateAction<string | undefined>>,

}

type dataContextLanguage = {
    setTranslation: Dispatch<SetStateAction<language>>,
    translation: translationType


}

export { dataContextUser, dataContextLanguage }