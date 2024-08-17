import { register } from "../../types/translationTypes"

const forms: register = {

    teacher: {

        title: 'Sign up to find out how we can help you.',
        privacy: 'Yes, I have read and understood how EF processes my personal data as established in the privacy policy.',
        inputs: ['Name', 'Last Name', 'Email', 'Country Code', 'Phone Number', 'Birthday', 'Country', 'Languages', 'Choose one', 'Choose one', 'Delete', 'Add another language',]
        , button: 'Register'
    },
    student: {
        title: 'The most effective language platform in the world.',
        subtitle: 'Improve your skills.',
        privacy: 'Yes, I have read and understood how EF processes my personal data as established in the privacy policy.',
        aside: {
            title: 'WeClasses',
            items: ['Practice regular conversation with your teacher.', 'Ask for feedback on your pronunciation and grammar.', 'Do writing exercises and listening comprehension.', 'Use resources such as books and videos recommended by your teacher.', 'Engage in interactive activities during the classes.'],

        },
        button: 'Register',
        form: {
            name: 'Name',
            lastName: 'Last Name',
            email: 'Email',
            nativeLanguage: 'Native Language',
            countryCode: 'Country Code',
            phone: 'Phone',
            languageToLearn: 'Language to Learn',
            submit: 'Register'
        }



    },
    login: {
        title: 'Log in to your account',
        registerStudent: 'Sign Up as a student',
        registerTeacher: 'Sign Up as a tutor',
        button: 'Login',
        or: 'or',
        form: {
            email: 'Email',
            password: 'Password',
            forgot: 'Forgot Password?',
            remember: 'Remember me'
        }

    },
    recover: { email: 'Email', button: 'Recover Password' }

}

export default forms