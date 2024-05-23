import { profile } from "../../types/translationTypes"

const profiles: profile = {
    home: {
        title: 'Recommended Classes',
        hoursTaken: 'Hours of Classes Taken',
        classesTaken: 'Number of Classes Taken',
        storiesTime: 'Time of Stories Read',
    },
    messages: {
        all: 'All',
        unread: 'Unread',
        archived: 'Archived'
    },
    student: {
        lesson: 'My Classes'
    },
    teacher: {
        home: 'Summary',
        classes: {
            add: 'Add Class',
            title: 'My Classes',
            table: {
                created: 'Created',
                date: 'Date',
                duration: 'Duration',
                language: 'Language',
                level: 'Level',
                name: 'Name'
            },
            options: {
                edit: 'Edit',
                cancel: 'Cancel'
            }
        },
        purchase: 'Purchased Classes',
        form: {
            name: 'Name',
            back: 'Cancel',
            button: 'Create Class',
            capacity: 'Capacity',
            date: 'Date',
            description: 'Description',
            duration: 'Duration',
            language: 'Language',
            level: 'Level',
            link: 'Meeting Link',
            price: 'Price'
        }
    }
}

export default profiles