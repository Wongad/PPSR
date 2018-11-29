jQuery( document ).ready(function( $ ) {
	$(".gifplayer").gifplayer();
$("#business-day .date-info").hide();
$("<h2>Step 1</h2><p>Please select the number of business days to calculate.</p><p>Calculate <select id='selection-days' name='Business Days' size='1'><option selected='selected'> </option><option>5</option><option>10</option><option>15</option><option>20</option></select> business days.</p>").appendTo(".days-select");

	$("#selection-days").change(function () {
    var str = "";
    $("#selection-days option:selected").each(function() {
      str = $(this).val();  });
    $(".biz-days").text(str);
	var nume = +str +1;
	$(".test").text(nume);
}).change;

$("<div class='previousnext'><button id='prev' role='button' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only'><span class='ui-icon ui-icon-triangle-1-w'></span>Previous</button><button id='next' role='button' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only' style='float:right'>Next<span class='ui-icon ui-icon-triangle-1-e'></span></button></div>").appendTo("#business-day");
$(".previousnext").hide();

	$("#selection-days").change(function () {
	$("#calendar").multiDatesPicker({
		pickableRange: $(".test").text(),	
		minDate: '4/1/2016',
		maxDate: '11/30/2020',
		adjustRangeToDisabled: true,
		numberOfMonths: [1,3],
		addDisabledDates: [
		'6/4/2016','6/5/2016','6/6/2016','6/11/2016','6/12/2016','6/13/2016','6/18/2016','6/19/2016','6/25/2016','6/26/2016',
		'7/3/2016','7/10/2016','7/17/2016','7/24/2016','7/2/2016','7/9/2016','7/16/2016','7/23/2016','7/30/2016','7/31/2016',
		'8/1/2016','8/6/2016','8/7/2016','8/13/2016','8/14/2016','8/20/2016','8/21/2016','8/27/2016','8/28/2016',
		'9/3/2016','9/4/2016','9/10/2016','9/11/2016','9/17/2016','9/18/2016','9/24/2016','9/25/2016','9/26/2016','9/30/2016',
		'10/1/2016','10/2/2016','10/3/2016','10/8/2016','10/9/2016','10/15/2016','10/16/2016','10/22/2016','10/23/2016','10/29/2016','10/30/2016',
		'11/1/2016','11/6/2016','11/13/2016','11/20/2016','11/27/2016','11/5/2016','11/12/2016','11/19/2016','11/26/2016',
		'12/4/2016','12/11/2016','12/18/2016','12/25/2016','12/3/2016','12/10/2016','12/17/2016','12/24/2016','12/25/2016','12/26/2016','12/27/2016','12/28/2016','12/29/2016','12/30/2016','12/31/2016',
		'1/1/2017','1/2/2017','1/7/2017','1/8/2017','1/14/2017','1/15/2017','1/21/2017','1/22/2017','1/26/2017','1/28/2017','1/29/2017',
		'2/4/2017','2/5/2017','2/11/2017','2/12/2017','2/18/2017','2/19/2017','2/25/2017','2/26/2017',
		'3/4/2017','3/5/2017','3/6/2017','3/11/2017','3/12/2017','3/13/2017','3/18/2017','3/19/2017','3/25/2017','3/26/2017',
		'4/1/2017','4/2/2017','4/8/2017','4/9/2017','4/14/2017','4/15/2017','4/16/2017','4/17/2017','4/18/2017','4/22/2017','4/23/2017','4/25/2017','4/29/2017','4/30/2017',
		'5/1/2017','5/6/2017','5/7/2017','5/13/2017','5/14/2017','5/20/2017','5/21/2017','5/27/2017','5/28/2017',
		'6/3/2017','6/4/2017','6/5/2017','6/10/2017','6/11/2017','6/12/2017','6/17/2017','6/18/2017','6/24/2017','6/25/2017','7/31/2017',
		'7/1/2017','7/2/2017','7/8/2017','7/9/2017','7/15/2017','7/16/2017','7/22/2017','7/23/2017','7/29/2017','7/30/2017',
		'8/5/2017','8/6/2017','8/7/2017','8/12/2017','8/13/2017','8/19/2017','8/20/2017','8/26/2017','8/27/2017',
		'9/2/2017','9/3/2017','9/9/2017','9/10/2017','9/16/2017','9/17/2017','9/23/2017','9/24/2017','9/25/2017','9/29/2017','9/30/2017',
		'10/1/2017','10/2/2017','10/7/2017','10/8/2017','10/14/2017','10/15/2017','10/21/2017','10/22/2017','10/28/2017','10/29/2017',
		'11/4/2017','11/5/2017','11/7/2017','11/11/2017','11/12/2017','11/18/2017','11/19/2017','11/25/2017','11/26/2017',
		'12/2/2017','12/3/2017','12/9/2017','12/10/2017','12/16/2017','12/17/2017','12/23/2017','12/24/2017','12/25/2017','12/26/2017','12/27/2017','12/28/2017','12/29/2017','12/30/2017','12/31/2017',
		'1/1/2018','1/6/2018','1/7/2018','1/13/2018','1/14/2018','1/20/2018','1/21/2018','1/26/2018','1/27/2018','1/28/2018',
		'2/3/2018','2/4/2018','2/10/2018','2/11/2018','2/17/2018','2/18/2018','2/24/2018','2/25/2018',
		'3/3/2018','3/4/2018','3/10/2018','3/11/2018','3/12/2018','3/17/2018','3/18/2018','3/24/2018','3/25/2018','3/30/2018','3/31/2018',
		'4/1/2018','4/2/2018','4/7/2018','4/8/2018','4/14/2018','4/15/2018','4/21/2018','4/22/2018','4/25/2018','4/28/2018','4/29/2018',
		'5/5/2018','5/6/2018','5/12/2018','5/13/2018','5/19/2018','5/20/2018','5/26/2018','5/27/2018',
		'6/2/2018','6/3/2018','6/9/2018','6/10/2018','6/11/2018','6/16/2018','6/17/2018','6/23/2018','6/24/2018','6/30/2018',
		'7/1/2018','7/7/2018','7/8/2018','7/14/2018','7/15/2018','7/21/2018','7/22/2018','7/28/2018','7/29/2018',
		'8/4/2018','8/5/2018','8/11/2018','8/12/2018','8/18/2018','8/19/2018','8/25/2018','8/26/2018',
		'9/1/2018','9/2/2018','9/8/2018','9/9/2018','9/15/2018','9/16/2018','9/22/2018','9/23/2018','9/29/2018','9/30/2018',
		'10/1/2018','10/6/2018','10/7/2018','10/8/2018','10/13/2018','10/14/2018','10/20/2018','10/21/2018','10/27/2018','10/28/2018',
		'11/3/2018','11/4/2018','11/10/2018','11/11/2018','11/17/2018','11/18/2018','11/24/2018','11/25/2018',
		'12/1/2018','12/2/2018','12/8/2018','12/9/2018','12/15/2018','12/16/2018','12/22/2018','12/23/2018','12/25/2018','12/26/2018','12/27/2018','12/28/2018','12/29/2018','12/30/2018','12/31/2018',
		'1/1/2019','1/5/2019','1/6/2019','1/12/2019','1/13/2019','1/19/2019','1/20/2019','1/26/2019','1/27/2019','1/28/2019',
		'2/2/2019','2/3/2019','2/9/2019','2/10/2019','2/16/2019','2/17/2019','2/23/2019','2/24/2019',
		'3/2/2019','3/3/2019','3/9/2019','3/10/2019','3/11/2019','3/16/2019','3/17/2019','3/23/2019','3/24/2019','3/30/2019','3/31/2019',
		'4/6/2019','4/7/2019','4/13/2019','4/14/2019','4/19/2019','4/20/2019','4/21/2019','4/22/2019','4/25/2019','4/27/2019','4/28/2019',
		'5/4/2019','5/5/2019','5/11/2019','5/12/2019','5/18/2019','5/19/2019','5/25/2019','5/26/2019',
		'6/1/2019','6/2/2019','6/8/2019','6/9/2019','6/10/2019','6/15/2019','6/16/2019','6/22/2019','6/23/2019',
		'7/6/2019','7/7/2019','7/13/2019','7/14/2019','7/20/2019','7/21/2019','7/27/2019','7/28/2019',
		'8/3/2019','8/4/2019','8/10/2019','8/11/2019','8/17/2019','8/18/2019','8/24/2019','8/25/2019','8/31/2019',
		'9/1/2019','9/7/2019','9/8/2019','9/14/2019','9/15/2019','9/21/2019','9/22/2019','9/28/2019','9/29/2019','9/30/2019',
		'10/5/2019','10/6/2019','10/7/2019','10/12/2019','10/13/2019','10/19/2019','10/20/2019','10/26/2019','10/27/2019',
		'11/2/2019','11/3/2019','11/9/2019','11/10/2019','11/16/2019','11/17/2019','11/23/2019','11/24/2019','11/30/2019',
		'12/1/2019','12/7/2019','12/8/2019','12/14/2019','12/15/2019','12/21/2019','12/22/2019','12/25/2019','12/26/2019','12/27/2019','12/28/2019','12/29/2019','12/30/2019','12/31/2019',
		'1/1/2020','1/4/2020','1/5/2020','1/11/2020','1/12/2020','1/18/2020','1/19/2020','1/25/2020','1/26/2020','1/27/2020',
		'2/1/2020','2/2/2020','2/8/2020','2/9/2020','2/15/2020','2/16/2020','2/22/2020','2/23/2020','2/29/2020',
		'3/1/2020','3/7/2020','3/8/2020','3/9/2020','3/12/2020','3/14/2020','3/15/2020','3/21/2020','3/22/2020','3/28/2020','3/29/2020',
		'4/4/2020','4/5/2020','4/11/2020','4/12/2020','4/18/2020','4/19/2020','4/25/2020','4/26/2020',
		'5/2/2020','5/3/2020','5/9/2020','5/10/2020','5/16/2020','5/17/2020','5/23/2020','5/24/2020','5/30/2020','5/31/2020',
		'6/6/2020','6/7/2020','6/13/2020','6/14/2020','6/20/2020','6/21/2020','6/27/2020','6/28/2020',
		'7/4/2020','7/5/2020','7/11/2020','7/12/2020','7/18/2020','7/19/2020','7/25/2020','7/26/2020',
		'8/1/2020','8/2/2020','8/8/2020','8/9/2020','8/15/2020','8/16/2020','8/22/2020','8/23/2020','8/29/2020','8/30/2020',
		'9/5/2020','9/6/2020','9/12/2020','9/13/2020','9/14/2020','9/19/2020','9/20/2020','9/26/2020','9/27/2020',
		'10/3/2020','10/4/2020','10/10/2020','10/11/2020','10/17/2020','10/18/2020','10/24/2020','10/25/2020','10/31/2020',
		'11/1/2020','11/7/2020','11/8/2020','11/14/2020','11/15/2020','11/21/2020','11/22/2020','11/28/2020','11/29/2020'
		],
		altField: ".alternate",
		altFormat: "d MM yy"
}).change;

$("#business-day a").remove(".ui-datepicker-next, .ui-datepicker-prev").removeClass("ui-state-active ui-state-hover");
$(".test").hide();
$(".previousnext").show();
var ratees = $("#selection-days option:selected").text();
$("<h2>Step 2</h2><p>Please select a business day in the calendar.</br> " +ratees.bold()+ " business days will be calculated from this date.<br/><br/><button role='button' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only' id='button'><span class='ui-icon ui-icon-power'></span>Reset calendar to choose the number of business days to calculate</button></p>").prependTo(".calculate-days");
$("#business-day #button").click(function() {location.reload();});
$(".calculate-days p").hide();
$(".calculate-days p").first().show();
$(".days-select").hide();

$(".ui-datepicker-multi").css({'display':'block;','width':'auto'});


$("#business-day td a.ui-state-default").click(function() {	
		setTimeout(function () {
		$("#business-day .ui-datepicker-next,#business-day .ui-datepicker-prev,#business-day .information").remove();
		$("#business-day td a").addClass("ui-state-active ui-state-highlight").removeClass("ui-state-default").removeAttr("href");
		$("#business-day a.ui-state-highlight:first").addClass("blue-bkg");
		var firstdate = $("#business-day .blue-bkg").text()+" "+$("#business-day .ui-datepicker-title:first").text();
		$("#business-day .date-first").html(firstdate.bold());
					$("#business-day .ui-datepicker-group-middle").each(function(i) {
						if($(this).find("a").length > 0) {
							$(".ui-datepicker-group-middle .ui-datepicker-title").addClass("displayed");
						} 
						else {
							$(".ui-datepicker-group-first .ui-datepicker-title").addClass("displayed");
						}
					});
					$("#business-day .ui-datepicker-group-last").each(function(i) {
						if($(this).find("a").length > 0) {
							$(".ui-datepicker-group-last .ui-datepicker-title").addClass("displayed");
						} 
						else {
							$(".ui-datepicker-group-middle .ui-datepicker-title").addClass("displayed");
						}
					});
					$("#business-day .ui-datepicker-group-middle").each(function(i) {
						if($(this).find("a").length == 0) {
							$(".ui-datepicker-group-middle .ui-datepicker-title").removeClass("displayed");
						}
					});			
		var lastdate = $("#business-day a:last").text()+" "+$("#business-day .displayed:last").text();
		
		$("#business-day .date-last").html(lastdate.bold());
					$("#business-day .ui-datepicker-group-first").each(function(i) {
						if($(this).find("a").length > 1) {
							$(".ui-datepicker-group-first .ui-datepicker-title").addClass("sec-display");
						} else {
							$(".ui-datepicker-group-middle .ui-datepicker-title").addClass("sec-display");
						}
					});
				$("#business-day .ui-datepicker-multi").find("a").eq(1).addClass("sec");
		var seconddate = $("#business-day .sec").text()+" "+$("#business-day .sec-display").text();	
		$(".ui-datepicker-multi").css({'display':'block;','width':'auto'});
		$("<p><button role='button' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only' id='button'><span class='ui-icon ui-icon-power'></span>Reset Calendar</button></p>").appendTo(".date-info");	
		$(".previousnext").hide();	
		$("#business-day #button").click(function() {location.reload();});
		$("#business-day .date-second").html(seconddate.bold());
		$("#business-day .date-info").show();
		$(".date-first").prepend("The date selected is ").append(".");
		var ratees = $(".test").text();
		$(".date-second").prepend("The range shown is ").append(" - "+lastdate.bold()+".");
		$(".date-last").append(" is <b>" +(ratees-1)+ "</b> business days after the date selected.");
		}, 0);
});
	
$('#business-day #next').click(function() {
    var date = $('#calendar').datepicker('getDate');
    var next = date.setMonth(date.getMonth()+1);
	$('#calendar').datepicker('setDate', date);
	$("#business-day a").removeClass("ui-state-active ui-state-hover");
	$("#business-day .ui-datepicker-next,#business-day .ui-datepicker-prev").hide();
	$(".ui-datepicker-multi").css({'display':'block;','width':'auto'});	
	$("#business-day td a.ui-state-default").click(function() {	
		setTimeout(function () {
		$("#business-day .ui-datepicker-next,#business-day .ui-datepicker-prev,#business-day .information").remove();
		$("#business-day td a").addClass("ui-state-active ui-state-highlight").removeClass("ui-state-default").removeAttr("href");
		$("#business-day a.ui-state-highlight:first").addClass("blue-bkg");
		var firstdate = $("#business-day .blue-bkg").text()+" "+$("#business-day .ui-datepicker-title:first").text();
		$("#business-day .date-first").html(firstdate.bold());
					$("#business-day .ui-datepicker-group-middle").each(function(i) {
						if($(this).find("a").length > 0) {
							$(".ui-datepicker-group-middle .ui-datepicker-title").addClass("displayed");
						} 
						else {
							$(".ui-datepicker-group-first .ui-datepicker-title").addClass("displayed");
						}
					});
					$("#business-day .ui-datepicker-group-last").each(function(i) {
						if($(this).find("a").length > 0) {
							$(".ui-datepicker-group-last .ui-datepicker-title").addClass("displayed");
						} 
						else {
							$(".ui-datepicker-group-middle .ui-datepicker-title").addClass("displayed");
						}
					});
					$("#business-day .ui-datepicker-group-middle").each(function(i) {
						if($(this).find("a").length == 0) {
							$(".ui-datepicker-group-middle .ui-datepicker-title").removeClass("displayed");
						}
					});
		var lastdate = $("#business-day a:last").text()+" "+$("#business-day .displayed:last").text();
		
		$("#business-day .date-last").html(lastdate.bold());
					$("#business-day .ui-datepicker-group-first").each(function(i) {
						if($(this).find("a").length > 1) {
							$(".ui-datepicker-group-first .ui-datepicker-title").addClass("sec-display");
						} else {
							$(".ui-datepicker-group-middle .ui-datepicker-title").addClass("sec-display");
						}
					});
				$("#business-day .ui-datepicker-multi").find("a").eq(1).addClass("sec");
		var seconddate = $("#business-day .sec").text()+" "+$("#business-day .sec-display").text();	
		$(".ui-datepicker-multi").css({'display':'block;','width':'auto'});	
		$("<p><button role='button' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only' id='button'><span class='ui-icon ui-icon-power'></span>Reset Calendar</button></p>").appendTo(".date-info");	
		$(".previousnext").hide();	
		$("#business-day #button").click(function() {location.reload();});
		$("#business-day .date-second").html(seconddate.bold());
		$("#business-day .date-info").show();
		$(".date-first").prepend("The date selected is ").append(".");
		var ratees = $(".test").text();
		$(".date-second").prepend("The range shown is ").append(" - "+lastdate.bold()+".");
		$(".date-last").append(" is <b>" +(ratees-1)+ "</b> business days after the date selected.");
		}, 0);
});
});	

$('#business-day #prev').click(function() {
    var date = $('#calendar').datepicker('getDate');
    var prev = date.setMonth(date.getMonth()-1);
	$('#calendar').datepicker('setDate', date);
	$("#business-day a").removeClass("ui-state-active ui-state-hover");
	$("#business-day .ui-datepicker-next,#business-day .ui-datepicker-prev").hide();
	$(".ui-datepicker-multi").css({'display':'block;','width':'auto'});	
	$("#business-day td a.ui-state-default").click(function() {	
		setTimeout(function () {
		$("#business-day .ui-datepicker-next,#business-day .ui-datepicker-prev,#business-day .information").remove();
		$("#business-day td a").addClass("ui-state-active ui-state-highlight").removeClass("ui-state-default").removeAttr("href");
		$("#business-day a.ui-state-highlight:first").addClass("blue-bkg");
		var firstdate = $("#business-day .blue-bkg").text()+" "+$("#business-day .ui-datepicker-title:first").text();
		$("#business-day .date-first").html(firstdate.bold());
					$("#business-day .ui-datepicker-group-middle").each(function(i) {
						if($(this).find("a").length > 0) {
							$(".ui-datepicker-group-middle .ui-datepicker-title").addClass("displayed");
						} 
						else {
							$(".ui-datepicker-group-first .ui-datepicker-title").addClass("displayed");
						}
					});
					$("#business-day .ui-datepicker-group-last").each(function(i) {
						if($(this).find("a").length > 0) {
							$(".ui-datepicker-group-last .ui-datepicker-title").addClass("displayed");
						} 
						else {
							$(".ui-datepicker-group-middle .ui-datepicker-title").addClass("displayed");
						}
					});
					$("#business-day .ui-datepicker-group-middle").each(function(i) {
						if($(this).find("a").length == 0) {
							$(".ui-datepicker-group-middle .ui-datepicker-title").removeClass("displayed");
						}
					});
		var lastdate = $("#business-day a:last").text()+" "+$("#business-day .displayed:last").text();
		
		$("#business-day .date-last").html(lastdate.bold());
					$("#business-day .ui-datepicker-group-first").each(function(i) {
						if($(this).find("a").length > 1) {
							$(".ui-datepicker-group-first .ui-datepicker-title").addClass("sec-display");
						} else {
							$(".ui-datepicker-group-middle .ui-datepicker-title").addClass("sec-display");
						}
					});
				$("#business-day .ui-datepicker-multi").find("a").eq(1).addClass("sec");
		var seconddate = $("#business-day .sec").text()+" "+$("#business-day .sec-display").text();	
		$(".ui-datepicker-multi").css({'display':'block;','width':'auto'});	
		$("<p><button role='button' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only' id='button'><span class='ui-icon ui-icon-power'></span>Reset Calendar</button></p>").appendTo(".date-info");	
		$(".previousnext").hide();	
		$("#business-day #button").click(function() {location.reload();});
		$("#business-day .date-second").html(seconddate.bold());
		$("#business-day .date-info").show();
		$(".date-first").prepend("The date selected is ").append(".");
		var ratees = $(".test").text();
		$(".date-second").prepend("The range shown is ").append(" - "+lastdate.bold()+".");
		$(".date-last").append(" is <b>" +(ratees-1)+ "</b> business days after the date selected.");
		}, 0);
});
});	
});
});
