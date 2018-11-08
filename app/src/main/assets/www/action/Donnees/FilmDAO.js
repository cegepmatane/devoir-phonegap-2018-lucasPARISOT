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

    this.chercherAvecId = function(id)
    {
        return listeFilm[id];
    }

    this.ajouter = function(film)
    {
        // il faut ici attribuer un id au film
        if(listeFilm.length > 0)
            film.id = listeFilm[listeFilm.length-1].id + 1;
        else
            film.id = 0;

        listeFilm[film.id] = film;
        localStorage['film'] = JSON.stringify(listeFilm);
        console.log("JSON.stringify(listeFilm) : " + JSON.stringify(listeFilm));
    }

    this.modifier = function(film)
    {
        listeFilm[film.id] = film;
        localStorage['film'] = JSON.stringify(listeFilm);
        console.log("JSON.stringify(listeFilm[position]) : " + JSON.stringify(listeFilm));
        // Le cadeau est bon, mais n'est pas modifier dans les local storage
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