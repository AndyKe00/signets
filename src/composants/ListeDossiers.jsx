import './ListeDossiers.scss';
// import dossTab from '../data/liste-dossiers.json';
import Dossier from './Dossier';
import { useState, useEffect } from 'react';
import * as crudDossiers from '../services/crud-dossiers';


// 3) Exécuter une requête sur la collection 'dossier-temp' pour lire l'info des dossiers disponibles
// Comme le code suivant fait appel a une source externe, il est asynchrone
// Donc il n'y a pas de garantie que le tableau daiisers soit remplis avant l'affichage du composant
/*
useEffect(
  () => dbFirestore.collection('dossier-temp').get().then(
          reponse => reponse.forEach(
            doc => dossiers.push(doc.data())
          )
        )
  , []
);
*/ 

export default function ListeDossiers(props) {
const utilisateur = props.utilisateur;

  const [dossiers, setDossiers] = useState([]);

  useEffect(
    () => crudDossiers.lireTout(utilisateur.uid).then(
      lesDossiers => setDossiers(lesDossiers)
    )
    , []
  );

  return (
    <ul className="ListeDossiers">
      {
        dossiers.map( 
          dossier =>  <li key={dossier.id}><Dossier {...dossier} /></li>
        )
      }
    </ul>
  );
}