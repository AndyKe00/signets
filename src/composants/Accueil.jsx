import './Accueil.scss';
import firebase from 'firebase/app';
import { instanceFirebaseUI } from '../services/firebase-initialisation';
import 'firebaseui/dist/firebaseui.css';
import { useEffect } from 'react';

export default function Accueil()
{

    useEffect(
        () => instanceFirebaseUI.start('#fbui', {
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID
            ],
            signInFlow: 'popup'
        })
        , []);

    return (
        <div className="Accueil">
            <h3 className="logo">Signets <span>(beta)</span></h3>
            <h2 className="ammorce">Organiser vos signets Web, <br/>Facile !</h2>
            <div id="fbui"></div>
        </div>
    );
}