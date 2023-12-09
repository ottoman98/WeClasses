import { story } from "./storyTypes"

type postResponse = {
    saved: story,
    message: string

}
type dataBaseWarning = {
    index: number,
    code: number,
    keyPattern: { email: number },
    keyValue: { email: string }


}

type valid = {
    message: string,
    valid: boolean
}

export { postResponse, dataBaseWarning, valid }

