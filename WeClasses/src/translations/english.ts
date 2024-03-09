
import { translationType } from "../types/translationTypes";

const english: translationType = {
    languages: {
        english: 'English',
        spanish: 'Spanish',
        french: 'French',
        german: 'German'
    },
    nav: {
        home: 'Home',
        about: 'About us',
        contact: 'Contact',
        language: 'English',
        login: 'Log In',
        register: 'Sign up',
        help: 'Help'


    }
    , carousel: {
        slide1: {
            title: 'Learn a new language with our expert teachers.',
            button: 'Get started'

        },
        slide2: {
            title: 'Join our platform and start your personalized classes with native teachers.',
            button: 'Get started'

        }
        , slide3: {
            title: 'Join our platform and start your personalized classes with native teachers.',
            button: 'Get started'

        }
    },
    flags: {
        text: 'We have teachers in over 3 languages!'
    },
    discount: {
        title: 'La oportunidad de aprender idiomas con un 30% de descuento',
        subtitle: 'No dejes que esta oferta exclusiva pase. Inscríbete hoy y amplía tus horizontes',
        button: 'Más Información'
    },
    banner: {
        title: 'Break language barriers and connect with the world',
        subtitle: 'Join us and learn from multicultural teachers would make every class a great experience.',
        button: 'Find your ideal teacher'
    },

    stats: {
        first: {
            bold: '+200',
            text: 'Students',
        },
        second: {
            bold: '3 Years',
            text: 'Teaching languages',
        },
        third: {
            bold: '+5',
            text: 'Reached countries',
        },
    },
    footer: {
        title: 'Our Company',
        contact: {
            title: 'Contact',
            content: ['Become a teacher']
        },
        about: {
            title: 'About Us',
        },
        legal: {
            title: 'Legal',
            content: ['Políticas de privacidad', 'Términos y condiciones', 'Política de devoluciones', 'Accesibilidad']

        },
        follow: {
            title: 'Follow Us',
            content: ['Instagram', 'Facebook', 'TikTok', 'Youtube', 'LinkedIn']
        }
    },
    register: {
        title: 'Regístrate Gratis',
        form: {
            name: 'Nombre',
            lastName: 'Apellido',
            email: 'Correo Electrónico',
            nativeLanguage: 'Seleccione su idioma nativo',
            countryCode: 'Indicativo',
            phone: 'Número Celular ',
            languageToLearn: 'Seleccione lenguaje a aprender',
            submit: 'Registrarse'
        },
        complement: {
            title: ' Estudia el idioma que deseas en WeClasses',
            text: 'Estás a punto de sumergirte en la experiencia de nuestra plataforma WeClasses. Fácil para aprender. Fácil para hablar.',
            subtitle: 'Contáctanos',
            contact: '+1 (479) 812-0999'
            ,
        }
    }


}

export default english


