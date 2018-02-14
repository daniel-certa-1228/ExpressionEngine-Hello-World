/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
$(document).ready(function(){$("*[data-conditional-modal]").click(function(t){var e=$(this).data("conditional-modal"),i=$(this).data("confirm-ajax"),a=$(this).data("confirm-text"),n=$(this).data("confirm-input"),l=$("*[data-"+e+"]").eq(0);if($(l).prop($(l).data(e))){var o="."+$(l).attr("rel");$(o+" .checklist").html(""),"undefined"!=typeof a&&$(o+" .checklist").append("<li>"+a+"</li>");var c=$(this).parents("form").find("th input:checked, td input:checked, li input:checked");c=c.filter(function(t,e){return void 0!==$(e).attr("value")}),c.length<6?c.each(function(){$(o+" .checklist").append("<li>"+$(this).attr("data-confirm")+"</li>")}):$(o+" .checklist").append("<li>"+EE.lang.remove_confirm.replace("###",c.length)+"</li>"),c.each(function(){$(o+" .checklist li:last").append($("<input/>").attr({type:"hidden",name:$(this).attr("name"),value:$(this).val()}))}),"undefined"!=typeof n&&$("input[name='"+n+"']").each(function(){$(o+" .checklist li:last").append($("<input/>").attr({type:"hidden",name:$(this).attr("name"),value:$(this).val()}))}),$(o+" .checklist li:last").addClass("last"),"undefined"!=typeof i&&$.post(i,$(o+" form").serialize(),function(t){$(o+" .ajax").html(t),SelectField.renderFields()});var d=$(document).height();$(".overlay").fadeIn("slow").css("height",d),$(".modal-wrap"+o).fadeIn("slow"),$(".modal-wrap"+o).trigger("modal:open"),t.preventDefault(),$("#top").animate({scrollTop:0},100)}})}),EE.cp.Modal={openConfirmRemove:function(t,e,i,a){var n=$(".modal-default-confirm-remove"),l=n.find("form"),o=n.find('input[name="content_id"]');$(".checklist",n).html("").append("<li>"+e+"</li>"),o.val(i),l.attr("action",t),n.trigger("modal:open"),n.find("form").submit(function(){return $.post(this.action,$(this).serialize(),function(t){n.trigger("modal:close"),a(t)}),!1})}};