
$("#report, #refresh").click(function() {




                   //~~~~~~~~~~~~~~ WRITING ~~~~~~~~~~~~~~~~~~//
                   

var total = 0;
var count = 0;
var mail_adv = "no";

$('input[class="radio_points"]:checked').each(function() {   // suma pkt za sekcję WRITING
  var lab_val = parseInt($(this).prev().text());
  total += lab_val;
});

var comment = "";

$('input[name="check_p1"]:checked').each(function() {  // dodaj pozytywny komantarz zgodnie z odznaczonymi inputami sekcji COMMENTS
   var random_nr =  Math.floor((Math.random() * 5));
   var dict_prop = $(this).attr('id');
   var sent = dict_plus[dict_prop][random_nr];
   comment += sent;
   mail_adv = "pos";
});


$('input[name="check_p1"]:not(:checked)').each(function() {  // dodaj negatywny komantarz zgodnie z nie odznaczonymi inputami sekcji COMMENTS
   if (mail_adv === "pos") {                                 // dodaj łącznik typu 'Jednak'
     var random = Math.floor((Math.random() * 5));
     comment += connect[random];
     mail_adv = "con";
   }
   var random_nr =  Math.floor((Math.random() * 5));
   var dict_prop = $(this).attr('id');
   var sent = dict_minus[dict_prop][random_nr];
   if ((count === 0) && (mail_adv === "con")){
    comment += sent.toLowerCase();
   } else {
   comment += sent;
   }
   count += 1;
});

var writing_final = comment;





                        //~~~~~~~~~~~~~~ SPEAKING ~~~~~~~~~~~~~~~~~~//
                        



var randoming = Math.floor((Math.random() * 3));
var flag = "positive";
var comment2 = "";

$('.gram_plus').each(function() {  // dodaj pozytywny komantarz zgodnie z odznaczonymi inputami sekcji SKILLS/MOCNE STRONY
  if ($(this).is(":selected")) {
    if (flag === "positive") {
      comment2 += dict_gram_pos[randoming];
    }
    comment2 += $(this).attr('value');
    comment2 += ", ";
    flag = "negative";
  }
});

if (flag === "negative") {
  comment2 = comment2.slice(0, -2);
  comment2 += ". ";
}


var randoming2 = Math.floor((Math.random() * 3));
var flag2 = "positive";

$('.gram_minus').each(function() {  // dodaj negatywny komantarz zgodnie z odznaczonymi inputami sekcji SKILLS/SŁABE STRONY
  if ($(this).is(":selected")) {
    if (flag2 === "positive") {
      comment2 += dict_gram_neg[randoming2];
    }
    comment2 += $(this).attr('value');
    comment2 += ", ";
    flag2 = "negative";
  }
});

if (flag2 === "negative") {
  comment2 = comment2.slice(0, -2);
  comment2 += ". ";
}

$('input[name="check_p2"]').each(function() {  // dodaj komantarz zgodnie z odznaczonymi inputami sekcji COMMENTS
   var random_nr =  Math.floor((Math.random() * 3));
   var dict_prop = $(this).attr('id');
  
   if ($(this).is(':checked')) {
       comment2 += dict_plus_sp[dict_prop][random_nr];
   } else {
       comment2 += dict_minus_sp[dict_prop][random_nr];
   }
});



var speaking_final = comment2;




                       //~~~~~~~~~~~~~~ LISTENING AND READING~~~~~~~~~~~~~~~~~~//


var mister = "";

if ($('#radio1').is(':checked')) {    // Deklaruje zmienną mister według sekcji płeć
  mister = "Pan " + $("#name_field").val();
} else if ($('#radio2').is(':checked')) {
  mister = "Pani " + $("#name_field").val();
} else {
  mister = "< ZDEKLARUJ PŁAĆ W SEKCJI DATA >";
}

var mister_replace = /x/gi;

var random_numberI = Math.floor((Math.random() * 2));
var random_numberII = Math.floor((Math.random() * 2));

var l_easy = $('#range2').val();
var l_hard = $('#range3').val();

var comment_list = listening_easy[l_easy][random_numberI] + " " + listening_hard[l_hard][random_numberII];

if ((l_easy === "0") && (l_hard === "0")) {
  comment_list = listening_easy[l_easy][random_numberI];
}

var listening_final = comment_list.replace(mister_replace, mister);



var r_easy = $('#range4').val();
var r_hard = $('#range5').val();

var random_number1 = Math.floor((Math.random() * 2));
var random_number2 = Math.floor((Math.random() * 2));

var comment_read = reading_easy[r_easy][random_number1] + " " + reading_easy[r_easy][2] + " " + reading_hard[r_hard][random_number2] + " " + reading_hard[r_hard][2];

if ((r_easy === "0") && (r_hard === "0")) {
  comment_read = reading_easy[r_easy][random_number1] + " " + reading_easy[r_easy][2];
}


var reading_final = comment_read.replace(mister_replace, mister);



                       //~~~~~~~~~~~~~~ GENERAL ~~~~~~~~~~~~~~~~~~//
 

var rand1 = Math.floor((Math.random() * 3));
var rand2 = Math.floor((Math.random() * 3));
var rand3 = Math.floor((Math.random() * 3));

var comment3 = "";

if ($('#radio1').is(':checked')) { // Rozpoczyna ogólny opis zgodnie z inputem sekcji PŁEĆ
  comment3 = "Pan " + $("#name_field").val() + " powinien " ;
} else if ($('#radio2').is(':checked')) {
  comment3 = "Pani " + $("#name_field").val() +  " powinna " ;
} else {
  comment3 = "< ZDEKLARUJ PŁAĆ W SEKCJI DATA > ";
}

if ($('#range1').val() < 11) {  // Kontynuuje ogólny opis zgodnie z inputem sekcji SPEAKING/POINTS
    comment3 += dict_gen10_gram[rand1];
    comment3 += dict_gen10_slow[rand2];
} else if ($('#range1').val() > 20) {
  comment3 += dict_gen30_gram[rand1];
    comment3 += dict_gen30_slow[rand2];
} else {
  comment3 += dict_gen20_gram[rand1];
    comment3 += dict_gen20_slow[rand2];
}

if ($("#q13").is(':checked')) {  // Kontynuuje ogólny opis zgodnie z inputem sekcji COMMENTS/ZWROTY GRZECZN
  comment3 += dict_gen_polite_plus[rand3];
} else {
  comment3 += dict_gen_polite_minus[rand3];
}

if ($('#range1').val() < 8) { // Kończy ogólny opis zgodnie z inputem sekcji SPEAKING/POINTS
    comment3 += "Z powodu bardzo słabej znajomości języka zalecam naukę na poziomie A1.";
} else if ($('#range1').val() < 13) {
    comment3 += "Zalecam kontynuację nauki na poziomie A2."; 
} else if ($('#range1').val() < 18) {
    comment3 += "Wskazana jest dalsza nauka na poziomie B1."; 
} else if ($('#range1').val() < 24) {
    comment3 += "Poziom B2 jest najbardziej wskazany na tym etapie nauki."; 
} else {
    comment3 += "Nauka na poziomie C1 pozwoli poprawić wszelkie niedociągłości."; 
}

var general_final = comment3;

document.getElementById('wr_label').innerHTML = "Writing: " + total;
document.getElementById('wr_label').innerHTML += " pkt";
document.getElementById('sp_label').innerHTML = "Speaking: " + $('#range1').val();
document.getElementById('sp_label').innerHTML += " pkt";

document.getElementById('ls_label').innerHTML = "Listening: " + (parseInt($('#range2').val()) + parseInt($('#range3').val()));
document.getElementById('ls_label').innerHTML += " pkt";
document.getElementById('rd_label').innerHTML = "Reading: " + (parseInt($('#range4').val()) + parseInt($('#range5').val()));
document.getElementById('rd_label').innerHTML += " pkt";

$('#name_final').text($("#name_field").val() + " " + $("#surname_field").val());
$('#date_final').text($('#date_field').val());
$('#wr_field').val(writing_final);
$('#sp_field').val(speaking_final);
$('#ls_field').val(listening_final);
$('#rd_field').val(reading_final);
$('#gen_field').val(general_final);

});


$("#clear").click(function() {  // Wraca do pierwszej strony po kliknięciu NEW STUDENT
    window.location.hash = 'p0';  
    document.location.reload(true);
});





