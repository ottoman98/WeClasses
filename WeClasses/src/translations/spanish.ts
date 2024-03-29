
import { translationType } from "../types/translationTypes";

const spanish: translationType = {
    languages: {
        english: 'Inglés',
        spanish: 'Español',
        french: 'Francés',
        german: 'Alemán'
    },
    nav: {
        home: 'Inicio',
        about: 'Quienes Somos',
        contact: 'Contacto',
        language: 'Español',
        login: 'Ingresar',
        register: 'Regístrate Gratis ',
        help: 'Ayuda'


    }
    , carousel: {
        slide1: {
            title: 'Aprende un nuevo idioma con nuestros profesores expertos.',
            button: 'Comenzar'

        },
        slide2: {
            title: 'Únete a nuestra plataforma y comienza tus lecciones personalizadas con profesores nativos.',
            button: 'Comenzar'

        }
        , slide3: {
            title: 'Conviértete en un ciudadano del mundo hablando diferentes idiomas.',
            button: 'Comenzar'

        }
    },
    flags: {
        text: 'Tenemos profesores en más de 4 idiomas!'
    },
    discount: {
        title: 'La oportunidad de aprender idiomas con un 30% de descuento',
        subtitle: 'No dejes que esta oferta exclusiva pase. Inscríbete hoy y amplía tus horizontes',
        button: 'Más Información'
    },
    banner: {
        title: 'Rompe las barreras del idioma y conecta con el mundo',
        subtitle: 'Únete y aprender de profesores multiculturales que harán de cada clase una gran experiencia.'
        ,
        button: 'Encuentra tu profesor ideal'
    },
    stats: {
        first: {
            bold: '+200',
            text: 'Estudiantes Impactados',
        },
        second: {
            bold: '3 Años',
            text: 'de Experiencia del Proyecto',
        },
        third: {
            bold: '+5',
            text: 'Países Alcanzados',
        },
    },
    footer: {
        title: 'Nuestra Empresa',
        contact: {
            title: 'Contacto',
            content: [''],
        },
        about: {
            title: 'Nosotros'
        },
        legal: {
            title: 'Legal',
            content: ['Políticas de privacidad', 'Términos y condiciones', 'Política de devoluciones', 'Accesibilidad']

        },
        follow: {
            title: 'Síguenos',
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

export default spanish