﻿var AjouterFilmVue = (function(){
    var pageAjouterFilm = document.getElementById("page-ajouter-film").innerHTML;

    return function(actionEnregistrerFilm)
    {

        this.afficher = function()
        {
            document.getElementsByTagName("body")[0].innerHTML = pageAjouterFilm;

            var formulaireAjouter = document.getElementById("formulaire-ajouter");
            formulaireAjouter.addEventListener("submit",enregistrerFilm);

        }

        var enregistrerFilm = function(evenement)
        {
            //alert("enregistrerCadeau");
            evenement.preventDefault(); // Cancel l'execution du formulaire

            var nom = document.getElementById("nom").value;
            var realisateur = document.getElementById("realisateur").value;
            var description = document.getElementById("description").value;

            var film = new Film(nom, realisateur, description, null);

            actionEnregistrerFilm(film); // Callback
        }

    };
})();