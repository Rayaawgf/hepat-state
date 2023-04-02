import pandas as pd
from projet_hepatite.myapp.models import Response

class Utile_import:

    def import_reponses():
        print("utile")
        chem = "./RTH.xlsx"
        try:
            responses = Response.objects.all()
            if(len(responses)==0):
                strexceldata = pd.read_excel(chem)
                dbframe = strexceldata
                for dbframe in dbframe.itertuples():
                    obj = Response.objects.create(age=dbframe.age, sexe=dbframe.sexe,wilaya=dbframe.wilaya,commune=dbframe.commune,a_fait_un_test=dbframe.a_fait_un_test,
                                                frequence_a_boire_alcool=dbframe.frequence_a_boire_alcool,frequence_a_utiliser_drogue=dbframe.frequence_a_utiliser_drogue,
                                                a_des_rapports_sexuels_non_proteges=dbframe.a_des_rapports_sexuels_non_proteges,a_ete_vaccine=dbframe.a_ete_vaccine,
                                                a_remarquer_jaunisse=dbframe.a_remarquer_jaunisse
                                                ,avez_vous_etes_diagnostiquer=dbframe.avez_vous_etes_diagnostiquer,avez_vous_voyager=dbframe.avez_vous_voyager
                                                ,avez_vous_ressenti_fatigue=dbframe.avez_vous_ressenti_fatigue)
                    obj.save()
                    print("Reponse ajouter avec succés.")
        except Exception as identifier:
            print(identifier)
