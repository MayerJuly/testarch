$(function(){
 $(window).on("load", function(){
  let range = $("#range").attr("value");
  $("#demo").html(range);
  $(".slide").css("width", "45%");
  $(document).on('input change', '#range', function() {
   $('#demo').html( $(this).val() );
   let slideWidth = $(this).val() * 100 / 2000;

   $(".slide").css("width", slideWidth + "%");
  });
 });
 let quizHeight = ["717px","792px","857px","772px","972px"],
     i = 0,
     page = 1;
 let quiz = $('.quiz');
 let inputs = $('.quiz input[required]')

 quiz.find('.page').fadeOut(0);
 
 inputs.removeAttr("required");
 function checkInputs(page) {
  if(page===1){
  }
  if ($('.page'+page+' input[type=radio]:checked').length > 0 && page!==3 && page!==2 && page!==6 && page!==5)
   return true;
  else if (page === 2 && checkInputsText(page) && $('.page' + page + ' input[type=radio]:checked').length > 0)
   return true;
  else if (page === 3 && $('.page' + page + ' input[type=radio]:checked').length > 0 && $('.page'+ page +' input[type=checkbox]:checked').length >0)
   return true;
  else if (page === 5 && $('.page' + page + ' input[type=radio]:checked').length === 3)
   return true;
  else if(page ===6 && checkInputsText(page) && $('.page'+ page +' input[type=radio]:checked').length >0 && $('.page'+ page +' input[type=checkbox]:checked').length >0 )
   return true;
  else{
 return false;
  }
 }

 function checkInputsText(page){
  let flag = 0;
  $('.page' +page + ' input[type=text]').each(function() {
   if($(this).val() === ""){
   flag = 1;
   }
  })
  if(flag === 1) return false;
  else{ return true;}
  }
 $('.page1').fadeIn(0);

 $('.button-next').on('click', function(e){
  e.preventDefault();
  if(!$(e.target).hasClass('button-end') && !$(e.target).parent().hasClass('button-end') && checkInputs(page)){
   $(e.target).closest('.page').fadeOut(600);
  quiz.css('min-height', quizHeight[i]);
   i++;
   page++;
   console.log(page)
   $(e.target).closest('.page').next().fadeIn(600);
  }
  else if($(e.target).hasClass('button-end') || $(e.target).parent().hasClass('button-end')){
   e.preventDefault();
   if(checkInputs(page)){
    quiz.submit();
    alert('Отправлено')
   }
  }

 })

 $('.button-prev').on('click', function(e) {
  e.preventDefault();

  i=0;
  quiz.css('min-height', '588px');
  $(e.target).closest('.page').fadeOut(600);
  page=1;
  $('.page1').fadeIn(600);

 });

 $('.button-skip').on('click', function(e) {
  e.preventDefault();

  $(e.target).closest('.page').fadeOut(600);
  quiz.css('min-height', quizHeight[i]);
  i++;
  page++;
  $(e.target).closest('.page').next().fadeIn(600);

 });
});



