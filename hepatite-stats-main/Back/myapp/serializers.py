from myapp.models import Response
from rest_framework import serializers

class ResponseSerializer(serializers.ModelSerializer):
    class Meta : 
        model = Response
        fields = (
            "age",
            "sexe",
            "wilaya",
            "commune",
            "a_fait_un_test",
            "frequence_a_boire_alcool",
            "frequence_a_utiliser_drogue",
            "a_des_rapports_sexuels_non_proteges",
            "a_ete_vaccine",
            "a_remarquer_jaunisse",
            "avez_vous_etes_diagnostiquer",
            "avez_vous_voyager",
            "avez_vous_ressenti_fatigue", 
        )