var ListeFilmVue = (function()
{
    var pageListeFilm = document.getElementById("page-liste-film").innerHTML;

    return function(listeFilmDonnee)
    {
        this.afficher = function()
        {
            document.getElementsByTagName("body")[0].innerHTML = pageListeFilm;

            var listeFilm = document.getElementById("liste-film");

            var li="";
            for(var numeroFilm in listeFilmDonnee)
            {
                li += '<li><a href="#film/'+
                numeroFilm +
                '">' +
                listeFilmDonnee[numeroFilm].nom+
                "</a></li>";
            }
            listeFilm.innerHTML = li;
        }
    };

})();