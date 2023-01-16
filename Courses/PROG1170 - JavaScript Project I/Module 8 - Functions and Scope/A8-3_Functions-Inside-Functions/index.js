// Step One
function print_sentences() {
  var sentence1 = "I love Paris in the springtime, ";
  var sentence2 = "I love Paris in the fall.";
  var result = document.write(sentence1 + "<br><br>" + sentence2 + "<br><br>");
  return result;
}

print_sentences();

// Step Two
function call_print_sentences() {
  document.write("<strong>***** First function call from inside second function *****</strong>" + "<br><br>")
  print_sentences();
  var alerttext = "But I love Arizona most of all.";
  window.alert(alerttext);
}

call_print_sentences();