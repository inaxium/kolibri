import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import App from './App.jsx';
import { createServer } from "miragejs"

createServer({
    routes() {
        this.get("/benrrs-basis/v1/benutzer", () => [
            {
                "id": "46112d14-3e66-4d42-9219-f8cf13301cc1",
                "benutzerkennung": "bjoern",
                "vorname": "Björn",
                "nachname": "Knuth",
                "email": "bjoern.knuth@nortal.com",
                "telefonnummer": "45567",
                "aktenzeichen": "4711-13"
            },
            {
                "id": "5c329e5e-d347-402c-951c-b117f799fba4",
                "benutzerkennung": "denis",
                "vorname": "Denis",
                "nachname": "Velkovski",
                "email": "denis.velkovski@zrb.bund.de",
                "aktenzeichen": "4711-14"
            },
            {
                "id": "6216dd1d-fd35-441f-b111-8a08b608366c",
                "benutzerkennung": "frank",
                "vorname": "Frank",
                "nachname": "von Schrenk",
                "email": "frank.von.schrenk@ibm.com",
                "aktenzeichen": "4711-12"
            },
            {
                "id": "56183c76-e508-4fff-b549-eac1a43eb5cf",
                "benutzerkennung": "test100",
                "vorname": "Test100",
                "nachname": "100Test",
                "email": "test100@bund.de"
            }
        ])
    },
})

ReactDOM.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById('root'),
 );
