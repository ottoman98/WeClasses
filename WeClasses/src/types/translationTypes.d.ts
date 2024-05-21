

type languages = {

    spanish: string,
    english: string,
    french: string,
    german: string

}

type main = {
    nav: {
        find: string,
        become: string,
        language: string,
        login: string
        register: string
        help: string


    }

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

    },
}
type classes = {
    title: string;
    filters: {
        language: string[];
        levels: string[];
        dayTime: string[];
        reset: string;
    };
    body: {
        title: string;
        notMatch: {
            title: string;
            info: string;
        };

    };
    card: {
        book: string;
        details: string;
    };
};


type register = {


    teacher: {
        title: string;
        privacy: string;
        button: string,
        inputs: string[];
    },

    student: {

        title: string,
        subtitle: string,
        privacy: string,
        button: string,
        aside: {
            title: string,
            items: Array<string>
        }
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

    },
    login: {
        title: string,
        registerTeacher: string,
        registerStudent: string,
        or: string
        form: {
            email: string,
            password: string,
            forgot: string,
            remember: string
        }
        button: string
    },
    recover: {
        email: string,
        button: string
    }

}

type description = {
    class: {
        items: Array<string>,
        buttons: Array<string>
    }, teacher: {
        titles: Array<string>,
        buttons: Array<string>
    }

}



type translationType = {
    languages: languages,
    main: main,
    classes: classes,
    descriptions: description,
    forms: register

}




export { translationType, description, register }