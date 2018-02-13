$(document).ready(function() {
	$("#new_comment_button").on("click", function(event) {
		event.preventDefault()
		$(this).hide()
		$("#new_comment_form").show()
	});


	$("#new_comment_form").on("submit", function(event) {
		event.preventDefault();
		if ($("#comment_text").val() === "") {
			console.log("Please enter some text")
		} else {
			if ($("#comment_text").text() === "") {
				var html_comment = "<li class='comment'><article><p>"+ $("#comment_text").val() +"</p><span class='author'>"+ $("#commenter_name").val() +"</span><button class='button delete-button'>Delete Comment</button></article></li>";
			} else {
				var html_comment = "<li class='comment'><article><p>"+ $("#comment_text").text() +"</p><span class='author'>"+ $("#commenter_name").text() +"</span><button class='button delete-button'>Delete Comment</button></article></li>";
			}

			$("#comment_list").append(html_comment);
		}
		$("#new_comment_button").show()
		$("#new_comment_form").hide()
	})

	$("article").on("click", "button.button.delete-button", function() {
		$(this).parent().parent().remove()
	})

});
