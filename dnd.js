$(function() {
 $('#dropzone').on('drop', function(event) {
  var file = event.originalEvent.dataTransfer.files[0];
  var formData = new FormData();
  formData.append('file', file);
  
  /*
  $.ajax('./upload.php', {
   method: 'POST',
   contentType: false,
   processData: false,
   data:formData,
   error: function(xhr, error) {
    console.log('アップデートに失敗しました');
    console.log(error);
   },
   success: function(response) {
    console.log('アップロードに成功しました');
    console.log(response);
    
    
   }
  });
  */


    var fr = new FileReader();
    fr.onload = function() {
	$("#howto").css('display', 'none');
        $('#preview').attr('src', fr.result).css('display', 'block');   // 読み込んだ画像データをsrcにセット

        
    }
    fr.readAsDataURL(file);  // 画像読み込み


  return false;
    
 }).on('dragover', function(event) {
  return false;
 });


 var settedIndex = 1;
 $("#setImage").click(function(){
	var prevImage = $('#preview').attr('src');
	var prevComment = $('#comment').val();

	$('#preview' + settedIndex).attr('src', prevImage);
	$('#comment' + settedIndex).val(prevComment);

	$("#howto").css('display', 'block');
        $('#preview').attr('src', '').css('display', 'none');   // 読み込んだ画像データをsrcにセット
	$('#comment').val('');

	settedIndex++;

 });

});