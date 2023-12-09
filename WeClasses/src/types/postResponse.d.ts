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

export { postResponse, dataBaseWarning }

