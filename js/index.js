var clipTitle = $('.clip-text'),
    target;

$('button').on('click', function(){
  target = $(this).attr('class');
  clipTitle.each(function(){
    var current = $(this);
    if (current.hasClass(target)) {
      current.toggleClass('reveal');  
    }
  });
});