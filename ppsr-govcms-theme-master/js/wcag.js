$jq(document).ready(function(){
	var titleacc = "<span>" + $(".node-announcements .node__title").text() + $(".node-type-announcements .page__title").text() + "</span>";
	$(".announce h3 > a").append(titleacc); $(".announce h3 > a > span").addClass("element-invisible");
	var newwin = $("<span>(opens new window)</span>").addClass("element-invisible");
	var extwin = $("<span>(opens new window)</span>").addClass("ext ui-icon-extlink ui-icon");
	$("body a[href^='https://transact.ppsr.gov.au']").attr("target","_blank").append(newwin);
	$("a:not(#main-content):not(.mobile-content):not('[name]'):not('[id]'):not([href*='@']):not([href*='youtube']):not([href^='http://news.ppsr.gov.au']):not([href^='https://www.ppsr.gov.au']):not([href^='https://ppsr']):not([href^='http://ppsr']):not([href^='https://transact']):not([href^='#']):not([href^='/'])").attr("target","_blank").append(extwin);
});
