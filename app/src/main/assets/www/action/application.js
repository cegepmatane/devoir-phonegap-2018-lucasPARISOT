(function()
{
    var instance = this;
        console.log("1");
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
        else
        {
            var navigation = hash.match(/^#film\/([0-9]+)/);
            //alert(navigation);
            var idFilm = navigation[1];
            //alert(idCadeau);
            var filmVue = new FilmVue(instance.listeFilmDonnee[idFilm]);
            filmVue.afficher();
        }
    }
    initialiser();
})();