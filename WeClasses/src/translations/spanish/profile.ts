import { profile } from "../../types/translationTypes"


const profiles: profile = {
    home: {
        title: 'Clases Recomendadas',
        hoursTaken: 'Horas de clase tomadas',
        classesTaken: 'Cantidad de clases tomadas',
        storiesTime: 'Tiempo de stories leídas',

    },
    messages: {
        all: 'Todos',
        unread: 'No Leidos',
        archived: 'Archivados'
    },
    student: {

        lesson: 'Mis Clases'
    },
    teacher: {


        home: 'Resumen',
        classes: {
            add: 'Agregar clase', title: 'Mis Clases',
            table: {
                created: 'Creado',
                date: 'Fecha',
                duration: 'Duración',
                language: 'Idioma',
                level: 'Nivel',
                name: 'Nombre'

            }, options: { edit: 'Editar', cancel: 'Cancelar' }
        },
        purchase: 'Clases Adquiridas',
        form: {
            name: 'Nombre', back: 'Cancelar',
            button: 'Crear Clase',
            capacity: 'Capacidad',
            date: 'Fecha',
            description: 'Descripción',
            duration: 'Duración',
            language: 'Idioma',
            level: 'Nivel',
            link: 'Enlace de reunion',
            price: 'Precio'
        }
    }

}

export default profiles