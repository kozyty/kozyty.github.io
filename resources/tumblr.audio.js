$(function(){
  var audio = $(this).find('a.audio-download');
  if (audio.size() > 0) {
    $(this).find('.audio-wrap').html('<audio preload="none" controls src="' + audio.attr('href') + '"></audio>');
  }
});
