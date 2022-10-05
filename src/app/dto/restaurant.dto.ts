export interface Restaurant {

  id: number;
  nom: string;
  adresse: string;
  moyenne: number;
  evaluations: Evalutation[];

}

export interface Evalutation {

  id: number;
  commentaire: string;
  nom_evaluteur: string;
  nb_etoile: number;

}
