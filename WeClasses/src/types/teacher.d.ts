type teacherData = {
    name: string,
    lastName: string,
    email: string,
    country: string,
    phone: string,
    countryCode: string,
    birthDay: string,
    languages: Array<{ language: string, level: string }>
    password?: string,
    password2?: string,
    video?: string,
    photo?: object,
    payment?: string


}

type tutorInfo = {
    photo: FileList;
    video: string;
    payment: string;
    password: string;
    password2: string;
}


export { teacherData, tutorInfo }