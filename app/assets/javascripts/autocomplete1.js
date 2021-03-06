// JavaScript Document
(function($) {
	$(document).ready(function() {

		$( '#s' ).each( function(){
		$(this).attr( 'title', $(this).val() )
		  .focus( function(){
			if ( $(this).val() == $(this).attr('title') ) {
			  $(this).val( '' );
			}
		  } ).blur( function(){
			if ( $(this).val() == '' || $(this).val() == ' ' ) {
			  $(this).val( $(this).attr('title') );
			}
		  } );
		} );

		$('input#s').result(function(event, data, formatted) {
			$('#result').html( !data ? "No match!" : "Selected: " + formatted);
		}).blur(function(){		
		});
		
		$(function() {		
		function format(mail) {
			return "<a href='"+mail.permalink+"'><img src='" + mail.image + "' /><div class='title'>" + mail.title +"</div><span class='text'>" + mail.text +"</span></a>";			
		}
		
		function link(mail) {
			return mail.permalink
		}

		function title(mail) {
			return mail.title
		}
		
		$("#s").autocomplete(completeResults, {
			width: $("#s").outerWidth()-2,			
			max: 4,			
			scroll: false,
			dataType: "json",
			matchContains: "word",
			parse: function(data) {
				return $.map(data, function(row) {
					return {
						data: row,
						value: row.title,
						result: $("#s").val()
					}
				});
			},
			formatItem: function(item) {				
				return format(item);
			}
			}).result(function(e, item) {
				$("#s").val(title(item));
				//location.href = link(item);
			});						
		});
		
		///////////////////////////////////////////////////////////
		$( '#s1' ).each( function(){
		$(this).attr( 'title', $(this).val() )
		  .focus( function(){
			if ( $(this).val() == $(this).attr('title') ) {
			  $(this).val( '' );
			}
		  } ).blur( function(){
			if ( $(this).val() == '' || $(this).val() == ' ' ) {
			  $(this).val( $(this).attr('title') );
			}
		  } );
		} );

		$('input#s1').result(function(event, data, formatted) {
			$('#result').html( !data ? "No match!" : "Selected: " + formatted);
		}).blur(function(){		
		});
		
		$(function() {		
		function format(mail) {
			return "<a href='"+mail.permalink+"'><img src='" + mail.image + "' /><div class='title'>" + mail.title +"</div><span class='text'>" + mail.text +"</span></a>";			
		}
		
		function link(mail) {
			return mail.permalink
		}

		function title(mail) {
			return mail.title
		}
		
		$("#s1").autocomplete(completeResults, {
			width: $("#s").outerWidth()-2,			
			max: 4,			
			scroll: false,
			dataType: "json",
			matchContains: "word",
			parse: function(data) {
				return $.map(data, function(row) {
					return {
						data: row,
						value: row.title,
						result: $("#s1").val()
					}
				});
			},
			formatItem: function(item) {				
				return format(item);
			}
			}).result(function(e, item) {
				$("#s1").val(title(item));
				//location.href = link(item);
			});						
		});
				
	});
})(jQuery);