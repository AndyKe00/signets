import './Entete.scss';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/app';


export default function Entete(props) {
  const utilisateur = props.utilisateur;
  return (
    <header className="Entete">
      <div className="logo">
        Signets
        <Button
        variant="outlined"
        size="small"
        className="btnDeconnexion"
        onClick={() => firebase.auth().signOut()}
        >Deconnexion </ Button>
      
      
      </div>
      <div className="utilisateur">{utilisateur.displayName} <Avatar className="avatar" alt={utilisateur.displayName} src={utilisateur.photoURL} /></div>
    </header>
  );
}