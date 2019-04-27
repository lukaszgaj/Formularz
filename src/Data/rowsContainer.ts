import {RowModel} from "../Models/rowModel";

export const rowsContainer: RowModel[] = [
    {
        name: 'Imię',
        type: 'text-input',
        regex: /^[A-ZĄĆĘŁŃŚÓŹŻ][a-ząćęłńóśźż]+([ ][A-ZĄĆĘŁŃŚÓŹŻ][a-ząćęłńóśźż]+)?$/,
    },
    {
        name: 'Nazwisko',
        type: 'text-input',
        regex: /^[A-ZĄĆĘŁŃŚÓŹŻ][a-ząćęłńóśźż]+([ -][A-ZĄĆĘŁŃŚÓŹŻ][a-ząćęłńóśźż]+)?$/,
    },
    {
        name: 'Miasto',
        type: 'text-input',
        regex: /^[A-ZĄĆĘŁŃŚÓŹŻ]+([a-ząćęłńśóźż]+)?(([ -][A-ZĄĆĘŁŃŚÓŹŻ][a-ząćęłńśóźż]+)?){0,5}$/,
    },
    {
        name: 'Ulica',
        type: 'text-input',
        regex: /^[A-ZĄĆĘŁŃŚÓŹŻ]+([a-ząćęłńśóźż]+)?([0-9]+)?(([ ](([A-ZĄĆĘŁŃŚÓŹŻ]+)?([a-ząćęłńśóźż]+)?)?([0-9]+)?)?){0,4}$/,
    },
    {
        name: 'Numer domu',
        type: 'text-input',
        regex: /^\d+([a-z|A-Z]+)?$/
    },
    {
        name: 'Numer mieszkania',
        type: 'text-input',
        regex: /^\d+$/,
    },
    {
        name: 'Data urodzenia (dd-mm-rrrr)',
        type: 'text-input',
        regex: /^([0-2][0-9]|[3][0-1])[.-]([0][1-9]|[1][0-2])[.-]19[0-9][0-9]|20[0-9][0-9]$/,
    },
    {
        name: 'Numer telefonu',
        type: 'text-input',
        regex: /^([+]{1}[\d]{2}[ ]?)?\d{3}([- ]?)\d{3}([- ]?)\d{3}$/
    },
    {
        name: 'Adres email',
        type: 'text-input',
        regex: /[A-Za-z0-9._%+-]+@[A-Za-z0-9._-]+\.[a-z]{2,}$/,
    },
    {
        name: 'Płeć',
        type: 'select',
    },
    {
        name: 'Prawo jazdy',
        type: 'checkbox',
    },
    {
        name: 'Uwagi',
        type: 'text-input',
        optional: true,
    }
];