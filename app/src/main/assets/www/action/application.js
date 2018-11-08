(function()
{
    var instance = this;

    var initialiser = function()
    {
        this.filmDAO = new FilmDAO();

        window.addEventListener("hashchange",naviguer);

        naviguer();

    }

    var naviguer = function()
    {
        var hash = window.location.hash;

        if(!hash)
        {
            this.listeFilmDonnee = this.filmDAO.lister();
            var listeFilmVue = new ListeFilmVue(instance.listeFilmDonnee);
            listeFilmVue.afficher();
        }
        else if(hash.match(/^#ajouter-film/)) // ^ -> commence
        {
            var ajouterFilmVue = new AjouterFilmVue(actionEnregistrerFilm);
            ajouterFilmVue.afficher();
        }
        else if(hash.match(/^#modifier-film\/([0-9]+)/)) // ^ -> commence
        {
        	var navigation = hash.match(/^#modifier-film\/([0-9]+)/);
        	var idFilm = navigation[1];
            var modifierFilmVue = new ModifierFilmVue(actionModifierFilm, filmDAO.chercherAvecId(idFilm));
            modifierFilmVue.afficher();
        }
        else
        {
            var navigation = hash.match(/^#film\/([0-9]+)/);
            //alert(navigation);
            var idFilm = navigation[1];
            //alert(idFilm);
            var filmVue = new FilmVue(instance.listeFilmDonnee[idFilm]);
            filmVue.afficher();
        }

    }

    var actionEnregistrerFilm = function(film)
    {
        this.filmDAO.ajouter(film);
        naviguerAccueil();
    }

    var actionModifierFilm = function(film)
    {
        this.filmDAO.modifier(film);
        naviguerAccueil();
    }

    var naviguerAccueil = function()
    {
        window.location.hash = "";
    }

    initialiser();

})();

// Main auto-executant avec (function()
//                          {
//	
//                          })();