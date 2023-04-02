from .serializers import ResponseSerializer
from .models import Response
from django.http import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
import pandas as pd

@api_view(['POST'])
def SubmitForm(request):
    if request.method == 'POST':
        response_data = JSONParser().parse(request)
        response_serilaizer = ResponseSerializer(data=response_data)
        if response_serilaizer.is_valid():
            response_serilaizer.save()
            return JsonResponse({'message': 'Reponse ajouter avec succés'}, status=status.HTTP_201_CREATED)
        return JsonResponse({'message': 'Erreuuuuur'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def import_reponses(request):
        chem = "../RTH.xlsx"
        try:
            responses = Response.objects.all()
            if(len(responses)==0):
                strexceldata = pd.read_excel(chem)
                dbframe = strexceldata
                for dbframe in dbframe.itertuples():
                    obj = Response.objects.create(age=dbframe.age, sexe=dbframe.sexe,wilaya=dbframe.wilaya,commune=dbframe.commune,a_fait_un_test=dbframe.a_fait_un_test,
                                                frequence_a_boire_alcool=dbframe.frequence_a_boire_alcool,frequence_a_utiliser_drogue=dbframe.frequence_a_utiliser_drogue,
                                                a_des_rapports_sexuels_non_proteges=dbframe.a_des_rapports_sexuels_Non_proteges,a_ete_vaccine=dbframe.a_ete_vaccine,
                                                a_remarquer_jaunisse=dbframe.a_remarquer_jaunisse
                                                ,avez_vous_etes_diagnostiquer=dbframe.avez_vous_etes_diagnostiquer,avez_vous_voyager=dbframe.avez_vous_voyager
                                                ,avez_vous_ressenti_fatigue=dbframe.avez_vous_ressenti_fatigue)
                    obj.save()
                return JsonResponse({"message": "Les données ont été importées avec succès."}, status=status.HTTP_200_OK)
            else :
                return JsonResponse({"message": "Les données sont déjà importées."}, status=status.HTTP_200_OK)
        except Exception as identifier:
            print(identifier)
            return JsonResponse({"message": "Erreur."}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getStatForWilayas(request) : 
    if request.method == 'GET' :
        statsData = []
        distinct_wilayas = Response.objects.values_list('wilaya', flat=True).distinct()
        for wilaya in distinct_wilayas :
            responseForWilaya = Response.objects.filter(wilaya=wilaya)
            porcentageWilaya = 0
            for response in responseForWilaya :
                porcentageWilaya += response.getPorsentageForPersonne()
            porcentageWilaya = porcentageWilaya/len(responseForWilaya)
            statsData.append(
                {
                'wilaya' : wilaya,
                'pourcentage' : porcentageWilaya}
                )

        return JsonResponse(statsData, safe=False)
    

@api_view(['GET'])
def getStatForWilayasHommeFemme(request) : 
    if request.method == 'GET' :
        statsData = []
        distinct_wilayas = Response.objects.values_list('wilaya', flat=True).distinct()
        for wilaya in distinct_wilayas :
            responseForWilaya = Response.objects.filter(wilaya=wilaya)
            porcentageWilayaHomme = 0
            porcentageWilayaFemme = 0
            countHomme = 0
            countFemme = 0
            for response in responseForWilaya :
                if(response.sexe == 'Homme'): 
                    porcentageWilayaHomme += response.getPorsentageForPersonne()
                    countHomme+=1
                else :
                    porcentageWilayaFemme += response.getPorsentageForPersonne()
                    countFemme+=1
            if(countHomme != 0):
                porcentageWilayaHomme = porcentageWilayaHomme/countHomme
            if(countFemme != 0) :
                porcentageWilayaFemme = porcentageWilayaFemme/countFemme
            statsData.append(
                {
                'wilaya' : wilaya,
                'pourcentageHomme' : porcentageWilayaHomme,
                'pourcentageFemme' : porcentageWilayaFemme,
                }
                )

        return JsonResponse(statsData, safe=False)

@api_view(["GET"])
def getStatsForWilaya(request, wilaya):
    if request.method == "GET":
        statsData = []
        responses = Response.objects.filter(wilaya=wilaya)
        communes = responses.values_list('commune', flat=True).distinct()
        for commune in communes :
            responseForCommune = Response.objects.filter(commune=commune)
            porcentageCommune = 0
            for response in responseForCommune :
                porcentageCommune += response.getPorsentageForPersonne()
            porcentageCommune = porcentageCommune/len(responseForCommune)
            statsData.append(
                {
                'commune' : commune,
                'pourcentage' : porcentageCommune}
                )

        return JsonResponse(statsData, safe=False, status=status.HTTP_200_OK)

@api_view(['GET'])
def getStatsForWilaya1(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Hodh-Ech-Charghi')

@api_view(['GET'])
def getStatsForWilaya2(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Hodh-El-Gharbi')
    
@api_view(['GET'])
def getStatsForWilaya3(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Assaba')

@api_view(['GET'])
def getStatsForWilaya4(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Gorgol')

@api_view(['GET'])
def getStatsForWilaya5(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Brakna')

@api_view(['GET'])
def getStatsForWilaya6(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Trarza')

@api_view(['GET'])
def getStatsForWilaya7(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Adrar')

@api_view(['GET'])
def getStatsForWilaya8(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Dakhlet Nouadhibou')

@api_view(['GET'])
def getStatsForWilaya9(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Taganet')

@api_view(['GET'])
def getStatsForWilaya10(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Guidimagha')

@api_view(['GET'])
def getStatsForWilaya11(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Tiris Zemmour')

@api_view(['GET'])
def getStatsForWilaya12(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Inchiri')

@api_view(['GET'])
def getStatsForWilaya13(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Nouakchott-Nord')

@api_view(['GET'])
def getStatsForWilaya14(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Nouakchott-Ouest')

@api_view(['GET'])
def getStatsForWilaya15(request):
    if(request.method == 'GET'):
        return getStatsForAnyWilaya('Nouakchott-Sud')


def getStatsForAnyWilaya(wilaya):
        statsData = []
        responses = Response.objects.filter(wilaya=wilaya)
        communes = responses.values_list('commune', flat=True).distinct()
        for commune in communes :
            responseForCommune = Response.objects.filter(commune=commune)
            porcentageCommune = 0
            for response in responseForCommune :
                porcentageCommune += response.getPorsentageForPersonne()
            porcentageCommune = porcentageCommune/len(responseForCommune)
            statsData.append(
                {
                'commune' : commune,
                'pourcentage' : porcentageCommune}
                )

        return JsonResponse(statsData, safe=False, status=status.HTTP_200_OK)