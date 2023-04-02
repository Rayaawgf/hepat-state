from django.db import models

# Create your models here.


class Response(models.Model):
    age = models.IntegerField()
    sexe = models.CharField(max_length=200)
    wilaya = models.CharField(max_length=200)
    commune = models.CharField(max_length=200)
    a_fait_un_test = models.CharField(max_length=200)
    frequence_a_boire_alcool = models.CharField(max_length=200)
    frequence_a_utiliser_drogue = models.CharField(max_length=200)
    a_des_rapports_sexuels_non_proteges = models.CharField(max_length=200)
    a_ete_vaccine = models.CharField(max_length=200)
    a_remarquer_jaunisse = models.CharField(max_length=200)
    avez_vous_etes_diagnostiquer = models.CharField(max_length=200)
    avez_vous_voyager = models.CharField(max_length=200)
    avez_vous_ressenti_fatigue = models.CharField(max_length=200)

    def getPorsentageForPersonne(self):
        porcentagePersonne = 0

        if (self.a_fait_un_test == 'Non'):
                    porcentagePersonne += 1

        if(self.frequence_a_boire_alcool == 'Occasionnellement') : 
            porcentagePersonne+=0.5
        elif(self.frequence_a_boire_alcool == 'Quotidiennement') : 
            porcentagePersonne+=1

        if(self.frequence_a_utiliser_drogue == 'Occasionnellement') : 
            porcentagePersonne+=0.5
        elif(self.frequence_a_utiliser_drogue == 'Quotidiennement') : 
            porcentagePersonne+=1

        if(self.a_des_rapports_sexuels_non_proteges == 'Oui'):
            porcentagePersonne+=1

        if(self.a_ete_vaccine == 'Non'):
            porcentagePersonne+=1
        
        if(self.a_remarquer_jaunisse == 'Oui'):
            porcentagePersonne+=1

        if(self.avez_vous_etes_diagnostiquer == 'Oui'):
            porcentagePersonne+=1
        
        if(self.avez_vous_voyager == 'Oui'):
            porcentagePersonne+=1
        
        if(self.avez_vous_ressenti_fatigue == 'Oui'):
            porcentagePersonne+=1
        
        porcentagePersonne = (porcentagePersonne/9) * 100
        return porcentagePersonne 

