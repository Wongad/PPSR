$(document).ready(function() {
	$('#btnAdd-a').click( function() {
		$('#btnDel-a').removeAttr('disabled').button('enable'); 
		var num = $('.clonedInput-a').length;
        var newNum	= new Number(num + 1);		
        var newElem = $('#input-a' + num ).clone().attr('id', 'input-a' + newNum);
		newElem.children(':first').attr( 'id', 'name' + newNum ).attr('name', 'name_label[]');
		$('#input-a' + num).after(newElem);
        if (newNum == 10) {
			$('#btnAdd-a' ).attr('disabled', 'disabled').button('disable');
			$('#btnAdd-a').parent().find('.ui-btn-text').text('maximum fields reached');
        }
	});
    $( '#btnDel-a' ).click( function() {       
        var num = $( '.clonedInput-a' ).length;
        $('#input-a' + num ).remove();	
        $('#btnAdd-a').removeAttr('disabled').button('enable');	
        $('#btnAdd-a').parent().find('.ui-btn-text').text('Add another VIN');
        if ( num-1 == 1 )
        $('#btnDel-a' ).attr('disabled', 'disabled').button('disable');
    }); 
	$('#btnAdd-b').click( function() {
		$('#btnDel-b').removeAttr('disabled').button('enable'); 
		var num = $('.clonedInput-b').length;
        var newNum	= new Number(num + 1);		
        var newElem = $('#input-b' + num ).clone().attr('id', 'input-b' + newNum);
		newElem.children(':first').attr( 'id', 'name' + newNum ).attr('name', 'name_label[]');
		$('#input-b' + num).after(newElem);
        if (newNum == 10) {
			$('#btnAdd-b' ).attr('disabled', 'disabled').button('disable');
			$('#btnAdd-b').parent().find('.ui-btn-text').text('maximum fields reached');
        }
	});
    $('#btnDel-b').click( function() {       
        var num = $('.clonedInput-b').length;
        $('#input-b' + num ).remove();	
        $('#btnAdd-b').removeAttr('disabled').button('enable');	
        $('#btnAdd-b').parent().find('.ui-btn-text').text('Add another PIN');
        if ( num-1 == 1 )
        $('#btnDel-b' ).attr('disabled', 'disabled').button('disable');
    }); 
	
	$('#btnAdd-c').click( function() {
		$('#btnDel-c').removeAttr('disabled').button('enable'); 
		var num = $('.clonedInput-c').length;
        var newNum	= new Number(num + 1);		
        var newElem = $('#input-c' + num ).clone().attr('id', 'input-c' + newNum);
		newElem.children(':first').attr( 'id', 'name' + newNum ).attr('name', 'name_label[]');
		$('#input-c' + num).after(newElem);
        if (newNum == 10) {
			$('#btnAdd-c' ).attr('disabled', 'disabled').button('disable');
			$('#btnAdd-c').parent().find('.ui-btn-text').text('maximum fields reached');
        }
	});
    $( '#btnDel-c' ).click( function() {       
        var num = $( '.clonedInput-c' ).length;
        $('#input-c' + num ).remove();	
        $('#btnAdd-c').removeAttr('disabled').button('enable');	
        $('#btnAdd-c').parent().find('.ui-btn-text').text('Add another VIN');
        if ( num-1 == 1 )
        $('#btnDel-c' ).attr('disabled', 'disabled').button('disable');
    }); 
	$('#btnAdd-d').click( function() {
		$('#btnDel-d').removeAttr('disabled').button('enable'); 
		var num = $('.clonedInput-d').length;
        var newNum	= new Number(num + 1);		
        var newElem = $('#input-d' + num ).clone().attr('id', 'input-d' + newNum);
		newElem.children(':first').attr( 'id', 'name' + newNum ).attr('name', 'name_label[]');
		$('#input-d' + num).after(newElem);
        if (newNum == 10) {
			$('#btnAdd-d' ).attr('disabled', 'disabled').button('disable');
			$('#btnAdd-d').parent().find('.ui-btn-text').text('maximum fields reached');
        }
	});
    $('#btnDel-d').click( function() {       
        var num = $('.clonedInput-d').length;
        $('#input-d' + num ).remove();	
        $('#btnAdd-d').removeAttr('disabled').button('enable');	
        $('#btnAdd-d').parent().find('.ui-btn-text').text('Add another PIN');
        if ( num-1 == 1 )
        $('#btnDel-d').attr('disabled', 'disabled').button('disable');
    }); 
	$('#btnAdd-e').click( function() {
		$('#btnDel-e').removeAttr('disabled').button('enable'); 
		var num = $('.clonedInput-e').length;
        var newNum	= new Number(num + 1);		
        var newElem = $('#input-e' + num ).clone().attr('id', 'input-e' + newNum);
		newElem.children(':first').attr( 'id', 'name' + newNum ).attr('name', 'name_label[]');
		$('#input-e' + num).after(newElem);
        if (newNum == 10) {
			$('#btnAdd-e' ).attr('disabled', 'disabled').button('disable');
			$('#btnAdd-e').parent().find('.ui-btn-text').text('maximum fields reached');
        }
	});
    $('#btnDel-e').click( function() {       
        var num = $('.clonedInput-e').length;
        $('#input-e' + num ).remove();	
        $('#btnAdd-e').removeAttr('disabled').button('enable');	
        $('#btnAdd-e').parent().find('.ui-btn-text').text('Add another identification number');
        if ( num-1 == 1 )
        $('#btnDel-e').attr('disabled', 'disabled').button('disable');
    }); 
	$('#btnAdd-f').click( function() {
		$('#btnDel-f').removeAttr('disabled').button('enable'); 
		var num = $('.clonedInput-f').length;
        var newNum	= new Number(num + 1);		
        var newElem = $('#input-f' + num ).clone().attr('id', 'input-f' + newNum);
		newElem.children(':first').attr( 'id', 'name' + newNum ).attr('name', 'name_label[]');
		$('#input-f' + num).after(newElem);
        if (newNum == 10) {
			$('#btnAdd-f' ).attr('disabled', 'disabled').button('disable');
			$('#btnAdd-f').parent().find('.ui-btn-text').text('maximum fields reached');
        }
	});
    $('#btnDel-f').click( function() {       
        var num = $('.clonedInput-f').length;
        $('#input-f' + num ).remove();	
        $('#btnAdd-f').removeAttr('disabled').button('enable');	
        $('#btnAdd-f').parent().find('.ui-btn-text').text('Add another identification number');
        if ( num-1 == 1 )
        $('#btnDel-f').attr('disabled', 'disabled').button('disable');
    }); 
var timedate = new Date();
$('.time-date').html("This search certificate reflects the data contained in the PPS Register at <strong>" + timedate + "</strong>");

$('#home-btn').click(function() {
    location.reload();
});
    $(function () {
		
    $('.reg-IG-grantor,.VIN-fields,.PIN-fields,.info-allpaap,.reg-IG-coll,.vin-pin-notes,.verified').hide();
		$('#SP-GONI').keyup(function() {
			var value = $(this).val();
			$('#SP-GONI-IG,#SP-GONI-OG').val(value).addClass('grey');
		});
		$('#SP-num').keyup(function() {
			var value = $(this).val();
			var spgd = "";
			spgd += "<h3>Secured party and Grantor details:</h3><p><strong>Secured party group number: </strong></p><p style='padding:0.5em;border:1px solid #DDD;border-radius:0.4em;background-color:#EDEDED;margin:-0.5em 0;'>" + value + "</p>";
			$('.SPG-details').html(spgd);
		});
		$('#SP-name').keyup(function() {
			var value = $(this).val();
			var spgd = "";
			spgd += "<p><strong>Secured party name: </strong></p><p style='padding:0.5em;border:1px solid #DDD;border-radius:0.4em;background-color:#EDEDED;margin:-0.5em 0 0;'>" + value + "</p>";
			$('.SPG-details2').html(spgd);
		});
		$('#GO-ident').change(function() {
			var selct = $('#GO-ident').val();
			if (selct === 'None') {
				$('.GO-name,.GO-ident-no').hide();
			}
			else if (selct === 'ABN') {
				$('.GO-name,.verify-abr,.GO-ident-no').show();
				$('.verify-asic').hide();
			}
			else {
				$('.GO-name,.verify-asic,.GO-ident-no').show();
				$('.verify-abr').hide();
			}
			var str = "";
			var str2 = "";
			$('#GO-ident option:selected').each(function() {
				str += $(this).text() + " Test Organisation";
				str2 += $(this).text() + " 123 456 789";
			});
		$('#GO-name').val(str).addClass('grey');
		$('#GO-ident-no,#GO-ident-OG').val(str2).addClass('grey');
		}).trigger( "change" );
		$('.verify-btn').click(function () {
            $('.verified').show();
        });

        $('#checkbox-PAAP').click(function () {
            $('.reg-IG-grantor,.info-allpaap').toggle();
			$('.reg-IG-PIN,.reg-IG-VIN').toggle();
        });
		$('#checkbox-Asset').click(function () {
					$('.reg-IG-coll').toggle();
        });
		$('#checkbox-VIN,#checkbox-PIN,#checkbox-Asset').click(function() {
			if( $('#checkbox-PIN').is(':checked')) {
				$('#individual .ui-checkbox:first').hide();
				} 
			else if ($('#checkbox-VIN').is(':checked')) {
				$('#individual .ui-checkbox:first').hide();
				}
			else if ($('#checkbox-Asset').is(':checked')) {
				$('#individual .ui-checkbox:first').hide();
				}
			else {
				$('#individual .ui-checkbox:first').show();
				}
		}); 
		$('#checkbox-VIN,#checkbox-VIN-OG,#checkbox-PIN,#checkbox-PIN-OG').click(function() {
			if( $('#checkbox-PIN,#checkbox-PIN-OG').is(':checked')) {
				$('#reg-IG-duration,#reg-OG-duration').val('7').prop('disabled',true).addClass('grey');
				$('.vin-pin-notes').show();
				} 
			else if ($('#checkbox-VIN,#checkbox-VIN-OG').is(':checked')) {
				$('#reg-IG-duration,#reg-OG-duration').val('7').prop('disabled',true).addClass('grey');
				$('.vin-pin-notes').show();
				}
			else {
				$('#reg-IG-duration,#reg-OG-duration').val('').prop('disabled',false).removeClass('grey');
				$('.vin-pin-notes').hide();
				}
		}); 
		$('#checkbox-PIN').click(function () {$('.PIN-fields').toggle();});
		$('#checkbox-VIN').click(function () {$('.VIN-fields').toggle();});
        $('#checkbox-Asset').click(function () {$('.reg-IG-grantor').toggle();});
        $('#checkbox-PAAP,#checkbox-Asset').change(function () {
            $('.textContainer').toggle(!this.checked);
        }).change();

		
    $('.reg-OG-grantor,.VIN-fields-OG,.PIN-fields-OG,.reg-OG-coll').hide();
		
        $('#checkbox-PAAP-OG').click(function () {
			$('.reg-OG-grantor,.reg-OG-PIN,.reg-OG-VIN').toggle();
        });
		$('#checkbox-VIN-OG,#checkbox-PIN-OG,#checkbox-Asset-OG').click(function() {
			if( $('#checkbox-PIN-OG').is(':checked')) {
				$('#organisation .ui-checkbox:first').hide();
				} 
			else if ($('#checkbox-VIN-OG').is(':checked')) {
				$('#organisation .ui-checkbox:first').hide();
				}
			else if ($('#checkbox-Asset-OG').is(':checked')) {
				$('#organisation .ui-checkbox:first').hide();
				}
			else {
				$('#organisation .ui-checkbox:first').show();
				}
		}); 
		$('#checkbox-Asset-OG').click(function () {
					$('.reg-OG-coll').toggle();
        });
		$('#checkbox-PIN-OG').click(function () {$('.PIN-fields-OG').toggle();});
		$('#checkbox-VIN-OG').click(function () {$('.VIN-fields-OG').toggle();});
        $('#checkbox-Asset-OG').click(function () {$('.reg-OG-grantor').toggle();});
        $('#checkbox-PAAP-OG,#checkbox-Asset-OG').change(function () {
            $('.textContainer-OG').toggle(!this.checked);
        }).change();
		
		
	$('#complete-search,.textinput-pin-body,.textinput-vin-body,.textinput-IGS-body,.textinput-OGS-body').hide();
		
		$('#textinput-vin').keyup(function() {
			var value = $(this).val();
			$('.textinput-vin').text(value);
		});
		$('#search-VIN-next').click(function () {
            $('#search-IGS,#search-OGS,#search-PIN,#search-VIN-next,#textinput-vin').hide();
			$('#complete-search,.textinput-vin-body').show();
        });
		$('#textinput-pin').keyup(function() {
			var value = $(this).val();
			$('.textinput-pin').text(value);
		});
		$('#search-PIN-next').click(function () {
            $('#search-IGS,#search-OGS,#search-VIN,#search-PIN-next,#textinput-pin').hide();
			$('#complete-search,.textinput-pin-body').show();
        });
		
		$('#textinput-IGS-given').keyup(function() {
			var value = $(this).val();
			$('.textinput-IGS-given').text(value);
		});
		$('#textinput-IGS-family').keyup(function() {
			var value = $(this).val();
			$('.textinput-IGS-family').text(value);
		});
		$('#textinput-IGS-identifier').keyup(function() {
			var value = $(this).val();
			$('.textinput-IGS-identifier').text(value);
		});
		$('#search-IGS-next').click(function () {
            $('#search-PIN,#search-OGS,#search-VIN,#search-IGS,.textinput-OGS-body').hide();
			$('#complete-search,.textinput-IGS-body').show();
        });

		$('#textinput-OGS-organisation').keyup(function() {
			var value = $(this).val();
			$('.textinput-OGS-organisation').text(value);
		});
		$('#textinput-OGS-asset').keyup(function() {
			var value = $(this).val();
			$('.textinput-OGS-asset').text(value);
		});
		$('#search-OGS-next').click(function () {
            $('#search-PIN,#search-OGS,#search-VIN,#search-IGS,.textinput-IGS-body').hide();
			$('#complete-search,.textinput-OGS-body').show();
        });
    }); 
});
