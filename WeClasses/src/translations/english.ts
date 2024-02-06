
import { translationType } from "../types/translationTypes";

const english: translationType = {
    languages: {
        english: 'Inglés',
        spanish: 'Español',
        french: 'Francés',
        german: 'Alemán'
    },
    nav: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        language: 'Language',
        login: 'Login',
        register: 'Free Register'


    }
    , carousel: {
        slide1: {
            title: 'Aprende un nuevo idioma con nuestros profesores expertos',
            button: 'Conoce Más'

        },
        slide2: {
            title: 'Únete a nuestra plataforma y comienza tus lecciones personalizadas con profesores nativos',
            button: 'Conoce Más'

        }
        , slide3: {
            title: 'Conviértete en un ciudadano del mundo hablando diferentes idiomas',
            button: 'Conoce Más'

        }
    },
    flags: {
        text: 'asd'
    },
    discount: {
        title: 'La oportunidad de aprender idiomas con un 30% de descuento',
        subtitle: 'No dejes que esta oferta exclusiva pase. Inscríbete hoy y amplía tus horizontes',
        button: 'Más Información'
    },
    banner: {
        title: 'Rompe las barreras del idioma y conecta con el mundo',
        subtitle: 'Únete a nosotros y aprende de profesores multiculturales que harán que cada clase sea una experiencia enriquecedora.',
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
        contact: {
            title: 'Contacto'
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
    }

}

export default english