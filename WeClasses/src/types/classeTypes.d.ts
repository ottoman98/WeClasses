type classe = {
    _id: string
    name: string,
    description: string,
    duration: number,
    language: 'en' | 'es',
    link: string,
    level: string,
    createdAt?: Date,
    date: Date | string,
    price: number,
    teacherName?: string,
    payment?: string,
    user?: string,
    capacity: number
    photo: string
}

export { classe }