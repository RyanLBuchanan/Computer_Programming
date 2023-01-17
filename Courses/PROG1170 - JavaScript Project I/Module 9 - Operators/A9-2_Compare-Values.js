function do_check()
{
  var str1 = $("#textbox1").val();
  var str2 = $("#textbox2").val();

  if (str1 == str2)
  {
    $(":text").removeClass("incorrect");
    alert("equal");
    document.write("The two values are equal.");
  }
  else
  {
    $(":text").addClass("incorrect");
    alert("not equal");
    document.write("The two values are not equal.");
  }
}