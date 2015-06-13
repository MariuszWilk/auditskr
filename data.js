
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
  "Układ graficzny nie jest odpowiedni. ", "Mail napisany jest bez zachowania stosownego układu graficznego. ", "Nie jest zachowany odpowiedni układ graficzny. "],
  
  'q12': ["Tekst nie ma początku, części głównej i zakończenia. ", "Przekaz nie jest przejrzysty; nie ma wyraźnego początku, części głównej i zakończenia. ", "Tekst nie jest podzielony na odpowiednie części. ", 
  "Przekaz nie ma odpowiednich części składowych. ", "Wiadomości brakuje podziału na wyraźne części składowe. "],
  
  'q13': ["Nie są stosowane zwroty grzecznościowe. ", "Zwroty grzecznościowe nie są prawidłowo zastosowane. ", "Nie występują odpowiednie zwroty grzecznościowe. ", 
  "Mail nie zawiera odpowiednich dla konwencji zwrotów grzecznościowych. ", "W mailu zabrakło odpowiednich zwrotów grzecznościowych. "],
    
  'q14': ["Nie jest zachowany rejestr formalny. ", "Język użyty w wypowiedzi jest nieformalny. ", "Rejestr wypowiedzi jest nieformalny, wbrew wymaganej konwencji. ", 
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

var dict_gram_pos = ["Nie ma problemów z ", "Dobra kontrola nad ", "Nie ma większych kłopotów z "];

var dict_gram_neg = ["Są pewne problemy z ", "Występują trudności z ", "Największy kłopot jest z "];



var listening_easy = {
0 : ["x nie jest w stanie udzielić żadnej poprawnej odpowiedzi na pytania dotyczące rozumienia ze słuchu.",
    "x nie potrafi udzielić odpowiedzi na żadne z zadanych pytań sprawdzających rozumienie ze słuchu."],
1 : ["x bardzo słabo radzi sobie z rozumieniem krótkich, nieskomplikowanych komunikatów i dialogów sytuacyjnych z życia codziennego oraz dopasowaniem ich do konkretnego miejsca.", 
    "x nie potrafi zbyt poprawnie zrozumieć krótkich, nieskomplikowanych komunikatów i dialogów sytuacyjnych z życia codziennego oraz dopasować ich do konkretnego miejsca."],
2 : ["x słabo radzi sobie z rozumieniem krótkich, nieskomplikowanych komunikatów i dialogów sytuacyjnych z życia codziennego oraz dopasowaniem ich do konkretnego miejsca.",
    "x nie potrafi zbyt poprawnie zrozumieć krótkich, nieskomplikowanych komunikatów i dialogów sytuacyjnych z życia codziennego oraz dopasować ich do konkretnego miejsca."],
3 : ["x dość dobrze potrafi zrozumieć krótkie, nieskomplikowane komunikaty i dialogi sytuacyjne z życia codziennego oraz dopasować je do konkretnego miejsca.",
    "Krótkie, nieskomplikowane komunikaty i dialogi sytuacyjne są dobrze rozumiane. x potrafi dopasować je do konkretnego miejsca."],
4 : ["x dość dobrze potrafi zrozumieć krótkie, nieskomplikowane komunikaty i dialogi sytuacyjne z życia codziennego oraz dopasować je do konkretnego miejsca.",
    "Krótkie, nieskomplikowane komunikaty i dialogi sytuacyjne są dość dobrze rozumiane. x potrafi dopasować je do konkretnego miejsca."],
5 : ["x potrafi zrozumieć krótkie, nieskomplikowane komunikaty i dialogi sytuacyjne z życia codziennego oraz dopasować je do konkretnego miejsca.", 
    "x rozumie nieskomplikowane i krótkie komunikaty oraz dialogi sytuacyjne występujące w codzinnych sytuacjach. Nie ma problemów z dopasowaniem ich do konkretnego miejsca."] };

var listening_hard = {
0 : ["Nie jest w stanie udzielić żadnej poprawnej odpowiedzi na pytania dotyczące rozumienia złożonej wypowiedzi ze słuchu.",
    "Nie potrafi udzielić odpowiedzi na żadne z zadanych pytań sprawdzających rozumienie złożonej wypowiedzi ze słuchu."],
1 : ["Ma bardzo duże kłopoty ze zrozumieniem dłuższej i bardziej złożonej wypowiedzi ustnej oraz określeniem prawdziwości zdań które jej dotyczą.",
     "Nie potrafi zrozumieć złożonej i dłuższej wypowiedzi ustnej oraz określić czy zdania na niej oparte są prawdziwe czy fałszywe."],
2 : ["Ma kłopoty ze zrozumieniem dłuższej i bardziej złożonej wypowiedzi ustnej oraz określeniem prawdziwości zdań które jej dotyczą",
     "Nie potrafi zrozumieć skomplikowanej i dłuższej wypowiedzi ustnej oraz określić czy zdania na niej oparte są prawdziwe czy fałszywe."],
3 : ["Ma pewne kłopoty ze zrozumieniem dłuższej i bardziej złożonej wypowiedzi ustnej oraz określeniem prawdziwości zdań które jej dotyczą",
     "Niezbyt dobrze potrafi zrozumieć złożoną i dłuższą wypowiedź ustną oraz określić czy zdania na niej oparte są prawdziwe czy fałszywe."],
4 : ["Ma pewne kłopoty ze zrozumieniem dłuższej i bardziej złożonej wypowiedzi ustnej oraz określeniem prawdziwości zdań które jej dotyczą.",
     "Niezbyt dobrze potrafi zrozumieć złożoną i dłuższą wypowiedź ustną oraz określić czy zdania na niej oparte są prawdziwe czy nie."],
5 : ["Zrozumienie dłuższej i bardziej złożonej wypowiedzi stoi na średnim poziomie, podobnie jak określenie czy oparte na niej zdania są prawdziwe.",
     "Rozumienie złożonej i długiej wypowiedzi ustnej oraz określenie czy zdania na niej oparte są prawdziwe czy nie stoi na średnio-zaawansowanym poziomie."],
6 : ["Zrozumienie dłuższej i bardziej złożonej wypowiedzi stoi na średnim poziomie, podobnie jak określenie czy oparte na niej zdania są prawdziwe.",
     "Rozumienie złożonej i dłuższej wypowiedzi ustnej oraz określenie czy zdania na niej oparte są prawdziwe czy fałszywe stoi na średnim poziomie."],
7 : ["Słuchając bardziej złożonej i długiej wypowiedzi x dość dobrze rozumie wszystkie zdania i potrafi określić czy oparte na tej wypowiedzi twierdzenia są prawdziwe.",
     "Rozumienie złożonej i dłuższej wypowiedzi ustnej oraz określenie czy zdania na niej oparte są prawdziwe czy fałszywe stoi na dobrym poziomie."],
8 : ["Słuchając bardziej złożonej i długiej wypowiedzi x prawie bezbłędnie rozumie wszystkie zdania i potrafi określić czy oparte na niej twierdzenia są prawdziwe.",
     "Rozumienie złożonej i dłuższej wypowiedzi ustnej oraz określenie czy zdania na niej oparte są prawdziwe czy fałszywe stoi na dobrym poziomie."],
9 : ["Potrafi zrozumieć dłuższą i bardziej złożoną wypowiedź ustną oraz określić czy zdania na niej oparte są prawdziwe czy nie.",
     "Rozumienie złożonej i dłuższej wypowiedzi ustnej oraz określenie czy zdania na niej oparte są prawdziwe czy fałszywe stoi na bardzo dobrym poziomie."],
10 : ["Potrafi zrozumieć dłuższą i bardziej złożoną wypowiedź ustną oraz określić czy zdania na niej oparte są prawdziwe czy fałszywe.",
     "Rozumienie złożonej i dłuższej wypowiedzi ustnej oraz określenie czy zdania na niej oparte są prawdziwe czy fałszywe stoi na doskonałym poziomie."] };

var reading_easy = {
0 : ["x nie jest w stanie udzielić żadnej poprawnej odpowiedzi na pytania dotyczące", "x nie jest w stanie udzielić żadnej poprawnej odpowiedzi na pytania dotyczące", 
     "przeczytanych tekstów."],
1 : ["x słabo radzi sobie ze zrozumieniem prostszej wypowiedzi pisemnej.",  "x potrafi raczej słabo zrozumieć przeczytany tekst na tematy ogólne.",  
    "Ma trudności z określeniem czy zdania oparte na tekście są prawdziwe czy fałszywe."],
2 : ["x słabo radzi sobie ze zrozumieniem prostszej wypowiedzi pisemnej.",  "x potrafi raczej słabo zrozumieć przeczytany tekst na tematy ogólne.",  
    "Ma kłopoty z określeniem czy zdania oparte na tekście są prawdziwe czy fałszywe."],
3 : ["x średnio radzi sobie ze zrozumieniem prostszej wypowiedzi pisemnej.", "x potrafi średnio dobrze zrozumieć przeczytany tekst na tematy ogólne.",
  "Ma kłopoty z określeniem czy zdania oparte na tekście są prawdziwe czy fałszywe."],
4 : ["x średnio radzi sobie ze zrozumieniem prostszej wypowiedzi pisemnej.", "x potrafi średnio dobrze zrozumieć przeczytany tekst na tematy ogólne.",
  "Ma kłopoty z określeniem czy zdania oparte na tekście są prawdziwe czy fałszywe."],
5 : ["x dość dobrze radzi sobie ze zrozumieniem prostszej wypowiedzi pisemnej.", "x potrafi zrozumieć przeczytany tekst na tematy ogólne.",
  "Nie ma większych trudności z określeniem czy zdania oparte na tekście są prawdziwe czy fałszywe."],
6 : ["x dość dobrze radzi sobie ze zrozumieniem prostszej wypowiedzi pisemnej.", "x potrafi zrozumieć przeczytany tekst na tematy ogólne.",
  "Nie ma dużych kłopotów z określeniem czy zdania oparte na tekście są prawdziwe czy fałszywe."],
7 : ["x bardzo dobrze radzi sobie ze zrozumieniem prostszej wypowiedzi pisemnej.", "x potrafi bardzo dobrze zrozumieć przeczytany tekst na tematy ogólne.",
    "Nie ma kłopotów z określeniem czy zdania oparte na tekście są prawdziwe czy fałszywe."],
8 : ["x bardzo dobrze radzi sobie ze zrozumieniem prostszej wypowiedzi pisemnej.", "x bardzo dobrze rozumie przeczytany tekst na tematy ogólne.",
    "Nie ma kłopotów z określeniem czy zdania oparte na tekście są prawdziwe czy fałszywe."] };

var reading_hard = {
0 : ["Nie jest w stanie udzielić żadnej poprawnej odpowiedzi na pytania dotyczące", "Nie jest w stanie udzielić żadnej poprawnej odpowiedzi na pytania dotyczące", 
     "bardziej zaawansowanych tekstów."],
1 : ["x niezbyt dobrze radzi sobie z rozumieniem dłuższego i bardziej złożonego tekstu oraz", "Nie potrafi zbyt dobrze zrozumieć ogólnego sensu dłuższej i bardziej złożonej leksykalnie wypowiedzi pisemnej oraz",
  "potrafi jedynie częściowo wyszukać w tekście konkretne informacje i wyciągnąć z nich wnioski."],
2 : ["x niezbyt dobrze radzi sobie z rozumieniem dłuższego i bardziej złożonego tekstu.", "x nie potrafi zbyt dobrze zrozumieć ogólnego sensu dłuższej i bardziej złożonej leksykalnie wypowiedzi pisemnej.",
  "Potrafi jedynie częściowo wyszukać w tekście konkretne informacje i wyciągnąć z nich wnioski."],
3 : ["Średnio radzi sobie z rozumieniem dłuższego i bardziej złożonego tekstu.", "x  potrafi w pewnym stopniu zrozumieć ogólny sens dłuższej i bardziej złożonej leksykalnie wypowiedzi pisemnej.",
  "Potrafi jedynie częściowo wyszukać w tekście konkretne informacje i wyciągnąć z nich wnioski."],
4 : ["Bardzo dobrze radzi sobie z rozumieniem dłuższego i bardziej złożonego tekstu.", "x potrafi zrozumieć ogólny sens dłuższej i bardziej złożonej leksykalnie wypowiedzi pisemnej.",
  "Potrafi wyszukać w tekście konkretne informacje i wyciągnąć z nich wnioski."],
5 : ["x bardzo dobrze radzi sobie z rozumieniem dłuższego i bardziej złożonego tekstu oraz", "x potrafi zrozumieć ogólny sens dłuższej i bardziej złożonej leksykalnie wypowiedzi pisemnej oraz",
  "potrafi wyszukać w tekście konkretne informacje i wyciągnąć z nich wnioski."] };






var dict_gen10_gram = ["popracować nad najbardziej podstawowymi zagadnieniami gramatycznymi oraz ", 
                "skupić się na przyswojeniu sobie bardzo podstawowej gramatyki i ", 
                "przede wszystkim przyswoić sobie gramatykę na bardzo podstawowym poziomie oraz "];                                           
var dict_gen20_gram = ["popracować nad gramatycznością swoich wypowiedzi oraz ", 
                "skupić się na przyswojeniu podstawowych zagadnień gramatycznych oraz ", 
                "przede wszystkim przyswoić sobie najczęściej używane struktury gramatyczne i "];               
var dict_gen30_gram = ["popracować nad udoskonaleniem gramatyki oraz ", 
                "skupić się na przyswojeniu sobie bardziej zaawansowanych zagadnień gramatycznych oraz ", 
                "przyswoić sobie nieco rzadziej używane struktury gramatyczne i "];
       
        
var dict_gen10_slow = ["zaznajomić się z prostym słownictwem i popularnymi wyrażeniami. ", 
                "nakierować swoją uwagę na najczęsciej używane słownioctwo. ",
                "uzupełnić braki w najbardziej fundamentalnym słownictwie. "];              
var dict_gen20_slow = ["zaznajomić się z średnio zaawansowanym słownictwem i często występującymi wyrażeniami. ", 
                "nakierować swoją uwagę na słownictwo które często pojawia się w codziennych rozmowach. ", 
                "uzupełnić braki w słownictwie o poziomie ponad-podstawowym. "];              
var dict_gen30_slow = ["zaznajomić się z trudniejszym słownictwem i mniej popularnymi wyrażeniami. ", 
                "nakierować swoją uwagę na bardziej specjalistyczne słownictwo. ",
                "jeszcze udoskonalić słownictwo, już w tej chwili na dobrym poziomie. "];
                

var dict_gen_polite_plus = ["W pisowni są używane zwroty grzecznościowe tam gdzie wymaga tego konwencja. ", 
                 "Pisemna korespondancja zawiara formy grzecznościowe i zwroty formalne. ", 
                 "W piśmie występują odpowiednie zwroty grzecznościowe. "];
var dict_gen_polite_minus = ["Warto byłoby przyswoić sobie więcej zwrotów grzecznościowych oraz bardziej formalny język. ", 
                 "Przyswojenie sobie większej ilości zwrotów grzecznościowych znacznie poprawiłoby poziom korespondencji. ", 
                 "Pisemne wypowiedzi wymagają dopracowania; doradzam poznanie nowych i często używanych form grzecznościowych. "];

