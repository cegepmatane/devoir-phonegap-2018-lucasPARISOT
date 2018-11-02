var Film = function(nom,realisateur,description,id)
{
	this.id = id;
	this.nom=nom;
	this.realisateur=realisateur;
	this.description=description; // Le this rend publique
}