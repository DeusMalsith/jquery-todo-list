$(document).ready(function(){
	$('#add').click(function(){
		var newListItem = $('#addToList').val();
		if (newListItem.length > 0) {
			$('#toDoList').append('<li>' + newListItem + '</li>');
			$('#addToList').val('');
		}
	});
});

$('#toDoList').click(function(e){
	e.stopPropagation();
	$('li').remove();
});