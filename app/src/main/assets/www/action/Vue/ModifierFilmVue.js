var ModifierFilmVue = (function(){
    var pageModifierFilm = document.getElementById("page-modifier-film").innerHTML;

    return function(actionModifierFilm,film)
    {

        this.afficher = function()
        {
            document.getElementsByTagName("body")[0].innerHTML = pageModifierFilm;

            var formulaireModifier = document.getElementById("formulaire-modifier");
            formulaireModifier.addEventListener("submit",modifierFilm);

            document.getElementById("nom").value = film.nom;

            document.getElementById("realisateur").value = film.realisateur;

            document.getElementById("description").value = film.description;

        }

        var modifierFilm = function(evenement)
        {
            evenement.preventDefault(); // Cancel l'execution du formulaire

            var nom = document.getElementById("nom").value;
            var realisateur = document.getElementById("realisateur").value;
            var description = document.getElementById("description").value;

            var filmModifie = new Film(nom, realisateur, description, film.id);

            actionModifierFilm(filmModifie); // Callback
        }

    };
})();