(function()
{
    var instance = this;

    var initialiser = function()
    {
        this.cadeauDAO = new CadeauDAO();

        window.addEventListener("hashchange",naviguer);

        naviguer();

    }

    var naviguer = function()
    {
        var hash = window.location.hash;

        if(!hash)
        {
            this.listeCadeauDonnee = this.cadeauDAO.lister();
            var listeCadeauVue = new ListeCadeauVue(instance.listeCadeauDonnee);
            listeCadeauVue.afficher();
        }
        else if(hash.match(/^#ajouter-cadeau/))
        {
            var ajouterCadeauVue = new AjouterCadeauVue(actionEnregistrerCadeau);
            ajouterCadeauVue.afficher();
        }
        else
        {
            var navigation = hash.match(/^#cadeau\/([0-9]+)/);
            //alert(navigation);
            var idCadeau = navigation[1];
            //alert(idCadeau);
            var cadeauVue = new CadeauVue(instance.listeCadeauDonnee[idCadeau]);
            cadeauVue.afficher();
        }

    }
