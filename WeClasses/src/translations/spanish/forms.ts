import { register } from "../../types/translationTypes"

const forms: register = {

    teacher: {

        title: 'Regístrate para descubrir cómo podemos ayudarte.',
        privacy: 'Si, he leído y comprendido cómo WeClasses procesa mis datos personales tal y como establece la política de privacidad',
        inputs: ['Nombre', 'Apellido', 'Correo Electrónico', 'Indicativo', 'Teléfono', 'Fecha de Nacimiento', 'País', 'Idiomas', 'Escoja un lenguaje', 'Escoja su nivel', 'Borrar', 'Agregar otro idioma',],
        button: 'Registrarse'

    },
    student: {
        title: 'La plataforma de idiomas más eficaz del mundo.',
        subtitle: 'Improve your skills.',
        privacy: 'Si, he leído y comprendido cómo WeClasses procesa mis datos personales tal y como establece la política de privacidad*',
        aside: {
            title: 'WeClasses',
            items: [
                "Practica con tu profesor de forma dinámica.",
                "Recibe comentarios sobre tu pronunciación y gramática.",
                "Elabora ejercicios de escritura y actividades de comprensión auditiva.",
                "Utiliza recursos como libros y vídeos recomendados por tu profesor.",
                "Participa en actividades interactivas durante las clases."
            ]

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
        },



    },
    login: {
        title: 'Iniciar Sesión',
        registerStudent: 'Regístrate como Estudiante',
        registerTeacher: 'Regístrate como Profesor',
        button: 'Iniciar sesión',
        or: 'o',
        form: {
            email: 'Correo Electrónico',
            password: 'Contraseña',
            forgot: 'Olvidaste tu Contraseña?',
            remember: 'Mantener Sesión'
        }

    },
    recover: { email: 'Correo Electrónico', button: 'Recuperar Contraseña' }


}

export default forms