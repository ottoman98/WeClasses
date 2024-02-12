type translationType = {
    nav: {
        home: string,
        about: string,
        contact: string,
        language: string,
        login: string
        register: string
        help: string


    }, languages: {
        spanish: string,
        english: string,
        french: string,
        german: string
    },
    carousel: {
        slide1: {
            title: string,
            button: string

        },
        slide2: {
            title: string,
            button: string

        }
        slide3: {
            title: string,
            button: string

        },

    },
    flags: {
        text: string
    }
    discount: {
        title: string,
        subtitle: string,
        button: string
    },
    banner: {
        title: string,
        subtitle: string,
        button: string

    },
    stats: {
        first: {
            bold: string,
            text: string
        },
        second: {
            bold: string,
            text: string
        },
        third: {
            bold: string,
            text: string
        }
    }
    footer: {
        title: string,
        contact: {
            title: string,
            content: Array<string>

        }

        about: {
            title: string
        },
        legal: {
            title: string,
            content: Array<string>
        },
        follow: {
            title: string,
            content: Array<string>
        },

    }, register: {
        title: string,
        form: {
            name: string,
            lastName: string,
            email: string,
            nativeLanguage: string,
            countryCode: string,
            phone: string,
            languageToLearn: string,
            submit: string
        }
        complement: {
            title: string,
            text: string,
            subtitle: string,
            contact: string
        }

    }

}

export { translationType }