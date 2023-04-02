import { Commune } from './commune.model';
import { Question } from './question.model';
import { Wilaya } from './wilaya.model';
export class Data {
  public questionsList: Question[] = [];
  wilayas: Wilaya[] = [];
  communes: Commune[] = [];

  question1 = new Question(1, 'age', 'Votre âge', []);
  question2 = new Question(2, 'sexe', 'Votre sexe', ['Homme', 'Femme']);
  question3 = new Question(3, 'wilaya', 'Votre wilaya de résidence', []);
  question4 = new Question(4, 'commune', 'Votre commune de résidence', []);
  question5 = new Question(
    5,
    'a_fait_test',
    "Avez-vous déjà fait un test de dépistage de l'hépatite ?",
    ['Oui', 'Non']
  );
  question6 = new Question(
    6,
    'frequence_a_boire_alcool',
    "À quelle fréquence buvez-vous de l'alcool ?",
    ['Jamais', 'Occasionnellement', 'Quotidiennement']
  );
  question7 = new Question(
    7,
    'frequence_a_utiliser_drogue',
    'À quelle fréquence utilisez-vous des drogues ?',
    ['Jamais', 'Occasionnellement', 'Quotidiennement']
  );
  question8 = new Question(
    8,
    'a_des_rapports_sexuels_non_proteges',
    'Avez-vous des rapports sexuels non protégés ?',
    ['Oui', 'Non']
  );
  question9 = new Question(
    9,
    'a_ete_vaccine',
    "Avez-vous été vacciné(e) contre l'hépatite B ?",
    ['Oui', 'Non']
  );
  question10 = new Question(
    10,
    'a_remarquer_jaunisse',
    'Avez-vous remarque une jaunisse ou une urine foncée récemment?',
    ['Oui', 'Non']
  );
  question11 = new Question(
    11,
    'avez_vous_etes_diagnostiquer',
    'Avez-vous été diagnostiquer auparavant avec une hépatite ou une maladie du foie?',
    ['Oui', 'Non']
  );
  question12 = new Question(
    12,
    'avez_vous_voyager',
    "Avez-vous voyager dans une région au haute risque d'hépatite?",
    ['Oui', 'Non']
  );
  question13 = new Question(
    13,
    'avez_vous_ressenti_fatigue',
    'Avez-vous ressenti de la fatigue, des nausées, des vomissements ou des douleurs abdominales récemment?',
    ['Oui', 'Non']
  );

  baseData = `1,Hodh-Ech-Charghi,get-communes-Hodh-Ech-Charghi/,Néma,Bassikounou,Djiguenni,Oualata,Timbedra,
  2,Hodh-El-Gharbi,get-communes-Hodh-El-Gharbi/,Aïoun El Atrouss,Kobenni,Tamchekett,Tintane
  3,Assaba,get-communes-Assaba/,Barkewol (Aftout),Boumdeid,Guerou,Kankossa,Kiffa
  4,Gorgol,get-communes-Gorgol/,Kaédi,Lexeiba,M'Bout,Maghama,Monguel
  5,Brakna,get-communes-Brakna/,Aleg,Bababé,Boghé,M'Bagne,Magta-Lahjar
  6,Trarza,get-communes-Trarza/,Boutilimit,Keur Macène,Mederdra,Ouad Naga,R'Kiz,Rosso
  7,Adrar,get-communes-Adrar/,Atar,Aoujeft,Chinguetti
  8,Dakhlet Nouadhibou,get-communes-Dakhlet-Nouadhibou/,Nouadhibou
  9,Taganet,get-communes-Taganet/,Tidjikdja,Moudjeria,Tichitt
  10,Guidimagha,get-communes-Guidimagha/,Ould Yengé,Sélibabi,Ghabou,Wompou
  11,Tiris Zemmour,get-communes-Tiris-Zemmour/,Zouerate ,Bir Mogrein,F'Derick,Ain Ben Tili
  12,Inchiri,get-communes-Inchiri/,Akjoujt
  13,Nouakchott-Nord,get-communes-Nouakchott-Nord/,Dar Naim,Toujounine ,Teyareth
  14,Nouakchott-Ouest,get-communes-Nouakchott-Ouest/,Tevragh-Zeina,Ksar,Sebkha
  15,Nouakchott-Sud,get-communes-Nouakchott-Sud/,Araffat,El Mina,Riyad`


  constructor() {
    this.setListQuestions();
  }

  private setListQuestions() {
    this.questionsList.push(this.question1);
    this.questionsList.push(this.question2);
    this.questionsList.push(this.question3);
    this.questionsList.push(this.question4);
    this.questionsList.push(this.question5);
    this.questionsList.push(this.question6);
    this.questionsList.push(this.question7);
    this.questionsList.push(this.question8);
    this.questionsList.push(this.question9);
    this.questionsList.push(this.question10);
    this.questionsList.push(this.question11);
    this.questionsList.push(this.question12);
    this.questionsList.push(this.question13);

    this.baseData.split('\n').forEach((wilaya) => {
      const line = wilaya.split(',');
      const code = line[0];
      const nom = line[1];
      const urlForBack = line[2];
      const communes_names = line.slice(3, line.length - 1);
      const communes: Commune[] = [];
      communes_names.forEach((name)=>{
        communes.push(new Commune(name));
        this.communes.push(new Commune(name));
      });
      this.wilayas.push(new Wilaya(code, nom,urlForBack,communes));
    });
  }
}
