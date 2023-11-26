import { Dispatch, SetStateAction } from 'react'
import { fullContact } from './userTypes';

type dataContextUser = {
    cookie: string | undefined;
    setCookie: Dispatch<SetStateAction<string | undefined>>;
    decodedToken?: {
        user: fullContact,
        iat: number,
        exp: number
    } | unknown
}


export { dataContextUser }