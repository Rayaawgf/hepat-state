from django.urls import re_path
from .views import *

urlpatterns=[
    re_path(r'^import-data/$',import_reponses),
    re_path(r'^save-response/$',SubmitForm),
    re_path(r'^get-stats-wilayas/$',getStatForWilayas),
    re_path(r'^get-stats-wilayas-homme-femme/$',getStatForWilayasHommeFemme),
    re_path(r'^get-communes-Hodh-Ech-Charghi/$',getStatsForWilaya1),
    re_path(r'^get-communes-Hodh-El-Gharbi/$',getStatsForWilaya2),
    re_path(r'^get-communes-Assaba/$',getStatsForWilaya3),
    re_path(r'^get-communes-Gorgol/$',getStatsForWilaya4),
    re_path(r'^get-communes-Brakna/$',getStatsForWilaya5),
    re_path(r'^get-communes-Trarza/$',getStatsForWilaya6),
    re_path(r'^get-communes-Adrar/$',getStatsForWilaya7),
    re_path(r'^get-communes-Dakhlet-Nouadhibou/$',getStatsForWilaya8),
    re_path(r'^get-communes-Taganet/$',getStatsForWilaya9),
    re_path(r'^get-communes-Guidimagha/$',getStatsForWilaya10),
    re_path(r'^get-communes-Tiris-Zemmour/$',getStatsForWilaya11),
    re_path(r'^get-communes-Inchiri/$',getStatsForWilaya12),
    re_path(r'^get-communes-Nouakchott-Nord/$',getStatsForWilaya13),
    re_path(r'^get-communes-Nouakchott-Ouest/$',getStatsForWilaya14),
    re_path(r'^get-communes-Nouakchott-Sud/$',getStatsForWilaya15),
    
]