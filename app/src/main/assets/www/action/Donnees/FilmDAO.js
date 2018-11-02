var FilmDAO = function()
{
    var listeFilm;
    var initialiser = function()
    {
        if(!listeFilm)
        {
            listeFilm = [];
        }
    }

    this.lister = function()
    {
        console.log("lister->listeFilm : " + listeFilm);
        console.log("lister->localStorage['film'] : " + localStorage['film']);
        if(localStorage['film'])
            listeFilm = JSON.parse(localStorage['film']);

        for(position in listeFilm)
        {

            var film = new Film(listeFilm[position].nom,
                                    listeFilm[position].realisateur,
                                    listeFilm[position].description,
                                    listeFilm[position].id);
            listeFilm[position] = film;
        }
        return listeFilm;

    }
    initialiser();
}