import { register } from "../../types/translationTypes"

const forms: register = {

    teacher: {

        title: 'Sign up to find out how we can help you.',
        privacy: 'Yes, I have read and understood how EF processes my personal data as established in the privacy policy.*',
        inputs: ['Name', 'Last Name', 'Email', 'Country Code', 'Phone Number', 'Birthday', 'Country', 'Languages', 'Choose one', 'Choose one', 'Delete', 'Add another language',]
        , button: 'Register'
    },
    student: {
        title: 'The most effective language platform in the world.',
        subtitle: 'Improve your skills.',
        privacy: 'Si, he leído y comprendido cómo WeClasses procesa mis datos personales tal y como establece la política de privacidad*',
        aside: {
            title: '',
            items: ['Practice regular conversation with your teacher.', 'Ask for feedback on your pronunciation and grammar.', 'Do writing exercises and listening comprehension.', 'Use resources such as books and videos recommended by your teacher.', 'Engage in interactive activities during the classes.', ''],
            button: 'Register'

        },

    }


}

export default forms