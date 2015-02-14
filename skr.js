
var dict_plus = {
	'q11': ["Układ graficzny jest odpowiedni dla konwencji maila. ", "Wiadomość zachowuje odpowiedni ukłąd graficzny. ", 
	"Układ graficzny jest odpowiedni. ", "Mail napisany jest z zachowaniem stosownego układu graficznego. ", "Graficznie mail wygląda bardzo dobrze. "],
	
	'q12': ["Tekst ma początek, część główną i zakończenie. ", "Przekaz jest łatwy do zrozumienia, ma początek, część główną i zakończenie. ", "Tekst jest odpowiednio podzielony na części. ", 
	"Przekaz ma odpowiednie części składowe. ", "Części skłądowe wypowiedzi (początek, część główną i zakończenie) są odpowiednie. "],
	
    'q13': ["Stosowane są zwroty grzecznościowe. ", "Zwroty grzecznościowe są prawidłowo stosowane. ", "Występują odpowiednie zwroty grzecznościowe. ", 
    "Mail zawiera odpowiednie dla swojej konwencji zwroty grzecznościowe. ", "Są obecne zwroty grzecznościowe. "],
    
	'q14': ["Zachowany jest rejetr formalny. ", "Język użyty w wypowiedzi jest formalny. ", "Rejestr wypowiedzi jest formalny, tak jak wymaga tego konwencja. ", 
	"Wiadomość ma rejestr odpowiednio formalny. ", "Tekst napisany jest w formalny sposób. " ],
	
	'q15': ["Słownictwo i gramatyka stoją na wysokim poziomie. ", "Gramatyka jest stosowana prawidłowo, a słownictwo jest odpowiednie. ", "Gramatyka jest prawidłowa, a słownictwo szerokie. ",
	"Mail zawiera odpowiednie słownictwo i dość poprawną gramatykę. ", "Mail jest napisany gramatycznie, z dobrym słownictwem. "],
	
	'q16': ["Wypowiedź ma odpowiednią długość. ", "Wiadomość komunikuje wszystko w sposób zrozumiały i przystępny. ", "Tekst ma odpowiednią długość. ",
	"Tekst napisany jest w sposób komunikatywny. ", "Wypowiedź jest odpowiedniej długości. "]
};

var connect = ["Jednakże ", "Jednak ", "Jakkolwiek ", "Niemniej jednak ", "Z drugiej strony "];

var dict_minus = {
	'q11': ["Układ graficzny nie jest odpowiedni dla konwencji maila. ", "Mail nie zachowuje odpowiedniego ukłądu graficznego. ", 
	"Układ graficzny nie jest odpowiedni. ", "Mail napisany jest bes zachowania stosownego układu graficznego. ", "Nie jest zachowany odpowiedni układ graficzny. "],
	
	'q12': ["Tekst nie ma początku, części głównej i zakończenia. ", "Przekaz nie jest przejrzysty; nie ma wyraźnego początku, części głównej i zakończenia. ", "Tekst nie jest podzielony na odpowiednie części. ", 
	"Przekaz nie ma odpowiednich części składowych. ", "Wiadomości brakuje podziału na wyraźne części składowe. "],
	
    'q13': ["Nie są stosowane zwroty grzecznościowe. ", "Zwroty grzecznościowe nie są prawidłowo zastosowane. ", "Nie występują odpowiednie zwroty grzecznościowe. ", 
    "Mail nie zawiera odpowiednich dla konwencji zwrotów grzecznościowych. ", "W mailu zabrakło odpowiednich zwrotów grzecznościowych. "],
    
	'q14': ["Nie jest zachowany rejetr formalny. ", "Język użyty w wypowiedzi jest nieformalny. ", "Rejestr wypowiedzi jest nieformalny, wbrew wymaganej konwencji. ", 
	"Wypowiedź nie ma rejestru wystarczająco formalnego. ", "Tekst napisany jest w nieformalny sposób. " ],
	
	'q15': ["Słownictwo i gramatyka stoją na niskim poziomie. ", "Gramatyka nie jest stosowana prawidłowo, a słownictwo jest bardzo proste. ", "Gramatyka nie jest prawidłowa, a słownictwo raczej podstawowe. ",
	"Mailowi brakuje odpowiedniego słownictwa i gramatyki. ", "Mail jest napisany dość niegramatycznie, z ubogim słownictwem. "],
	
	'q16': ["Wypowiedź nie ma odpowiedniej długości. ", "Wypowiedź komunikuje wszystko w sposób nie do końca zrozumiały i przystępny. ", "Tekst nie ma odpowiedniej długości. ",
	"Tekst napisany jest w sposób mało komunikatywny. ", "Długość nie jest wystarczająca. "]
};


var dict_plus_sp = {
	'q17': ["Wypowiedź ustna jest płynna, bez dłuższych przerw. ", "Płynny sposób mówienia, raczej szybkie tempo. ", "Nie ma dłuższych przerw między pojedyńczymi zdaniami. ",
    "Płynność i tempo wypowiedzi na dobrym poziomie. ", "Nie ma większych problemów z płynnością wypowiedzi. Tempo jest szybkie. "],
    
    'q18': ["Zdania są stosunkowo długie. ", "Całość pojedyńczych wypowiedzi robi wrażenie przemyślanych. ", "Myśli wyrażane są dłuższymi, pełnymi zdaniami. ", 
    "Przekaz jest klarowny i przemyślany", "Zdania budowane są tak by w pełni wyrazić zamierzony przekaz. "],
    
    'q19': ["Zdania są raczej gramatyczne i zawierają zadowalające słownictwo. ", "Słownictwo jest na dobrym poziomie, podobnie gramatyka. ", 
    "Wypowiedzi nie zawierają wielu błędów gramatycznych. Słownictwo jest dość szerokie. ", "Słowa są dobrze dobrane, a gramatyka wypowiedzi raczej poprawna. ", 
    "Gramatyka i słownictwo dość dobrze się uzupełniają w tworzeniu spójnego przekazu. "]
};
	
var dict_minus_sp = {
	'q17': ["Wypowiedź nie jest zbyt płynna, z pewnymi przerwami. ", "Mało płynny sposób mówienia, raczej wolne tempo. ", "Występują znaczące przerwy między pojedyńczymi zdaniami. ",
    "Płynność i tempo wypowiedzi są na niskim poziomie. ", "Są pewne problemy z płynnością wypowiedzi. Tempo jest dość wolne. "],
    
    'q18': ["Zdania są stosunkowo krótkie. ", "Całość pojedyńczych wypowiedzi robi wrażenie mało przemyślanych. ", "Myśli wyrażane są krótkimi, zdawkowymi zdaniami. ", 
    "Przekaz jest mało klarowny, raczej krótki", "Występuje znacząca trudność w przekazywaniu szczegółowych informacji. "],
    
    'q19': ["Zdania są raczej mało gramatyczne i zawierają wąskie słownictwo. ", "Słownictwo jest na niskim poziomie, podobnie gramatyka. ", 
    "Zdania zawierają dość sporo błędów gramatycznych. Słownictwo jest dość wąskie. ", "Słowa są raczej podstawowe, a gramatyka wypowiedzi przeważnie błędna"]
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



$("#report, #refresh").click(function() {


                   //~~~~~~~~~~~~~~ WRITING ~~~~~~~~~~~~~~~~~~//
                   

var total = 0;
var count = 0;
var mail_adv = "no";

$('input[class="radio_points"]:checked').each(function() {
  var lab_val = parseInt($(this).prev().text());
  total += lab_val;
});

var comment = "";

$('input[name="check_p1"]:checked').each(function() {
   var random_nr =	Math.floor((Math.random() * 5));
   var dict_prop = $(this).attr('id');
   var sent = dict_plus[dict_prop][random_nr];
   comment += sent;
   mail_adv = "yes";
});

if (mail_adv === "yes") {
	var random = Math.floor((Math.random() * 5));
	comment += connect[random];
};

$('input[name="check_p1"]:not(:checked)').each(function() {
   var random_nr =	Math.floor((Math.random() * 5));
   var dict_prop = $(this).attr('id');
   var sent = dict_minus[dict_prop][random_nr];
   if ((count === 0) && (mail_adv === "yes")){
   	comment += sent.toLowerCase();
   } else {
   comment += sent;
   }
   count += 1;
});

var writing_final = comment;




                        //~~~~~~~~~~~~~~ SPEAKING ~~~~~~~~~~~~~~~~~~//
                        

var dict_gram_pos = ["Nie ma problemów z ", "Dobra kontrola nad ", "Nie ma większych kłopotów z "];

var randoming = Math.floor((Math.random() * 3));
var flag = "positive";
var comment2 = "";

$('.gram_plus').each(function() {
	if ($(this).is(":selected")) {
		if (flag === "positive") {
			comment2 += dict_gram_pos[randoming];
		};
		comment2 += $(this).attr('value');
		comment2 += ", ";
		flag = "negative";
	};
});

if (flag === "negative") {
	comment2 = comment2.slice(0, -2);
	comment2 += ". ";
}

var dict_gram_neg = ["Są pewne problemy z ", "Występują trudności z ", "Największy kłopot jest z "];

var randoming2 = Math.floor((Math.random() * 3));
var flag2 = "positive";

$('.gram_minus').each(function() {
	if ($(this).is(":selected")) {
		if (flag2 === "positive") {
			comment2 += dict_gram_neg[randoming2];
		};
		comment2 += $(this).attr('value');
		comment2 += ", ";
		flag2 = "negative";
	};
});

if (flag2 === "negative") {
	comment2 = comment2.slice(0, -2);
	comment2 += ". ";
}

$('input[name="check_p2"]').each(function() {
   var random_nr =	Math.floor((Math.random() * 3));
   var dict_prop = $(this).attr('id');

   if ($(this).is(':checked')) {
   	   var sent = dict_plus_sp[dict_prop][random_nr];
   } else {
   	   var sent = dict_minus_sp[dict_prop][random_nr];
   }
   comment2 += sent;
});



var speaking_final = comment2;


                       //~~~~~~~~~~~~~~ GENERAL ~~~~~~~~~~~~~~~~~~//
 
var dict_gen10_gram = ["popracować nad najbardziej podstawowymi zagadnieniami gramatycznymi oraz ", "skupić się na przyswojeniu sobie bardzo podstawowej gramatyki i ", 
                "przede wszystkim przyswoić sobie gramatykę na bardzo podstawowym poziomie oraz "];                      
                       
var dict_gen20_gram = ["popracować nad gramatycznością swoich wypowiedzi oraz ", "skupić się na przyswojeniu podstawowych zagadnień gramatycznych oraz ", 
                "przede wszystkim przyswoić sobie najczęściej używane struktury gramatyczne i "];
                
var dict_gen30_gram = ["popracować nad udoskonaleniem gramatyki oraz ", "skupić się na przyswojeniu sobie bardziej zaawansowanych zagadnień gramatycznych oraz ", 
                "przyswoić sobie nieco rzadziej używane struktury gramatyczne i "];
       
        
var dict_gen10_slow = ["zaznajomić się z prostym słownictwem i popularnymi wyrażeniami. ", "nakierować swoją uwagę na najczęsciej używane słownioctwo. ",
                "uzupełnić braki w najbardziej fundamentalnym słownictwie. "];
                
var dict_gen20_slow = ["zaznajomić się z średnio zaawansowanym słownictwem i często występującymi wyrażeniami. ", 
                "nakierować swoją uwagę na słownictwo które często pojawia się w codziennych rozmowach. ", "uzupełnić braki w słownictwie o poziomie ponad-podstawowym. "];
                
var dict_gen30_slow = ["zaznajomić się z trudniejszym słownictwem i mniej popularnymi wyrażeniami. ", "nakierować swoją uwagę na bardziej specjalistyczne słownictwo. ",
                "jeszcze udoskonalić słownictwo, już w tej chwili na dobrym poziomie. "];
                

var dict_gen_polite_plus = ["W pisowni są używane zwroty grzecznościowe tam gdzie wymaga tego konwencja. ", "Pisemna korespondancja zawiara formy grzecznościowe i zwroty formalne. ", 
                 "W piśmie występują odpowiednie zwroty grzecznościowe. "];
var dict_gen_polite_minus = ["Warto byłoby przyswoić sobie więcej zwrotów grzecznościowych oraz bardziej formalny język. ", 
                 "Przyswojenie sobie większej ilości zwrotów grzecznościowych znacznie poprawiłoby poziom korespondencji. ", "Pisemne wypowiedzi wymagają dopracowania; doradzam poznanie nowych i często używanych form grzecznościowych. "];


var rand1 =	Math.floor((Math.random() * 3));
var rand2 =	Math.floor((Math.random() * 3));
var rand3 =	Math.floor((Math.random() * 3));


if ($('#radio1').is(':checked')) {
	comment3 = "Pan " + $("#name_field").val() + " " + $("#surname_field").val() + " powinien " ;
} else if ($('#radio2').is(':checked')) {
	comment3 = "Pani " + $("#name_field").val() + " " + $("#surname_field").val() + " powinna " ;
} else {
	comment3 = "< PLEASE DECLARE SEX IN DATA > ";
}

if ($('#range1').val() < 11) {
    comment3 += dict_gen10_gram[rand1];
    comment3 += dict_gen10_slow[rand2];
} else if ($('#range1').val() > 20) {
	comment3 += dict_gen30_gram[rand1];
    comment3 += dict_gen30_slow[rand2];
} else {
	comment3 += dict_gen20_gram[rand1];
    comment3 += dict_gen20_slow[rand2];
};

if ($("#q13").is(':checked')) {
	comment3 += dict_gen_polite_plus[rand3];
} else {
	comment3 += dict_gen_polite_minus[rand3];
};

if ($('#range1').val() < 8) {
    comment3 += "Z powodu bardzo słabej znajomości języka zalecam naukę na poziomie A1.";
} else if ($('#range1').val() < 13) {
    comment3 += "Zalecam kontynuację nauki na poziomie A2."; 
} else if ($('#range1').val() < 18) {
    comment3 += "Wskazana jest dalsza nauka na poziomie B1."; 
} else if ($('#range1').val() < 24) {
    comment3 += "Poziom B2 jest najbardziej wskazany na tym etapie nauki."; 
} else {
    comment3 += "Nauka na poziomie C1 pozwoli poprawić wszelkie niedociągłości."; 
};

var general_final = comment3;

document.getElementById('wr_label').innerHTML = "Writing: " + total;
document.getElementById('wr_label').innerHTML += " pkt";
document.getElementById('sp_label').innerHTML = "Speaking: " + document.getElementById("range1").value;
document.getElementById('sp_label').innerHTML += " pkt";

$('#name_final').text($("#name_field").val() + " " + $("#surname_field").val());
$('#date_final').text($('#date_field').val());
$('#wr_field').val(writing_final);
$('#sp_field').val(speaking_final);
$('#gen_field').val(general_final);

});



$("#clear").click(function() {
   location.reload();
});



