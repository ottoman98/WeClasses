import { register } from "../../types/translationTypes"

const forms: register = {

    teacher: {

        title: 'Regístrate para descubrir cómo podemos ayudarte.',
        privacy: 'Si, he leído y comprendido cómo WeClasses procesa mis datos personales tal y como establece la política de privacidad',
        inputs: ['Nombre', 'Apellido', 'Correo Electrónico', 'Indicativo', 'Teléfono', 'Fecha de Nacimiento', 'País', 'Idiomas', 'Escoja un lenguaje', 'Escoja su nivel', 'Borrar', 'Agregar otro idioma',],
        button: 'Registrarse'

    },
    student: {
        title: 'The most effective language platform in the world.',
        subtitle: 'Improve your skills.',
        privacy: 'Si, he leído y comprendido cómo WeClasses procesa mis datos personales tal y como establece la política de privacidad*',
        aside: {
            title: '',
            items: ['Practice regular conversation with your teacher.', 'Ask for feedback on your pronunciation and grammar.', 'Do writing exercises and listening comprehension.', 'Use resources such as books and videos recommended by your teacher.', 'Engage in interactive activities during the classes.', ''],

        },
        button: 'Register',
        form: {
            name: 'Nombre',
            lastName: 'Apellido',
            email: 'Correo Electrónico',
            nativeLanguage: 'Idioma Nativo',
            countryCode: 'Indicativo',
            phone: 'Teléfono',
            languageToLearn: 'Idioma de interés',
            submit: 'Registrarse'
        }


    }


}

export default forms