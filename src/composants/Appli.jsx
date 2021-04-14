import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Accueil from './Accueil';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { instanceFirestore, instanceFirebaseAuth } from '../services/firebase-initialisation';
import { collUtil } from '../services/config';

export default function Appli() {
  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(
    () => {
      instanceFirebaseAuth.onAuthStateChanged(
        util => {
          // Changer l'etat de l'utilisateur
          setUtilisateur(util);

          // Si l'utilisateur vient de se loguer, creer son profil
          // dans Firestore si c'est un nouveau utilisateur
          // ou rien faire s'il existe deja.
          if (util !== null)
          {
            instanceFirestore.collection(collUtil).doc(util.uid).set(
              {nom: util.displayName, courriel: util.email},
              {merge: true}
            );
          }
        }
      )
    }
  , []);

  return (
    <div className="Appli">
      {
        utilisateur ?
        <>
          <Entete utilisateur={utilisateur} />
          <section className="contenu-principal">
            <ListeDossiers utilisateur={utilisateur} />
            <Fab className="ajoutRessource" color="primary" aria-label="Ajouter dossier">
              <AddIcon />
            </Fab>
          </section>
        </>
        :

        <Accueil />
      }
    </div>
  );
}
