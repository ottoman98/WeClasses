
import classes from "./classes";
import descriptions from "./descriptions";



import forms from "./forms";
import languages from "./languages";
import main from "./main";

const spanish = {
    languages,
    main,

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
        },

    },
    descriptions,
    classes,
    forms
}

export default spanish