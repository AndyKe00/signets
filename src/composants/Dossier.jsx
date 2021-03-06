import './Dossier.scss'; 
import { IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Dossier({titre, couleur, modification, couverture}) {
  return (
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton className="deplacer" aria-label="déplacer" disableRipple={true}>
          <SortIcon />
        </IconButton>
        <img src={couverture} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié : {obtenirDateFormatee(modification)}</p>
      </div>
      <IconButton className="modifier" aria-label="modifier" size="small">
        <MoreVertIcon />
      </IconButton>
    </article>
  );
}

function obtenirDateFormatee(objetDateFb)
{
  let dateJS = (objetDateFb) ? new Date(objetDateFb.seconds * 1000) : new Date();
  let titreDesMois = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
  let jour = dateJS.getDate();
  let mois = titreDesMois[dateJS.getMonth()];
  let annee = dateJS.getFullYear();

  return `${jour} ${mois} ${annee}`;
}