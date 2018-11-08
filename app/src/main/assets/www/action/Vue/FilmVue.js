var FilmVue = (function(cadeau)
{
	var pageFilm = document.getElementById("page-film").innerHTML;
	return function(film)
	{
		var filmNom;
		var filmRealisateur;
		var filmDescription;

		var  filmModification;

		this.afficher = function()
		{
			document.getElementsByTagName("body")[0].innerHTML = pageFilm;

			filmNom = document.getElementById("film-nom");
			filmNom.innerHTML = film.nom;

			filmRealisateur = document.getElementById("film-realisateur");
			filmRealisateur.innerHTML = film.realisateur;

			filmDescription = document.getElementById("film-description");
			filmDescription.innerHTML = film.description;

			filmModification = document.getElementById("modifier-film");
			filmModification.href = '#modifier-film/' + film.id;
		}
	};
})();