type translationType = {
    nav: {
        find: string,
        become: string,
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
    },
    offer: {

        title: string,
        content: Array<{
            title: string,
            body: string,
            link: string
        }>
    }
    ,
    becomeTutor: {
        title: string,
        description: string,
        items: Array<string>,
        button: string,
        link: string
    },
    mobileBanner: {
        title: string
    },
    frequentlyQuestions: {
        title: string,
        QA: Array<{ question: string, answer: string }>
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