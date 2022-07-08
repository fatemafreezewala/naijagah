import * as $ from 'jquery'
$(document).ready(function(){
    $(".image-checkbox").each(function () {
        if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
            $(this).addClass('image-checkbox-checked');
        }
        else {
            $(this).removeClass('image-checkbox-checked');
        }
      });
      
      // sync the state to the input
      $(".image-checkbox").on("click", function (e) {
        $(this).toggleClass('image-checkbox-checked');
        $(this).children('img').toggleClass('filter-green')
        $(this).children('p').toggleClass('green-amenities-text')
        
        
        var $checkbox = $(this).find('input[type="checkbox"]');
        $checkbox.prop("checked",!$checkbox.prop("checked"))
      
        e.preventDefault();
      });
    
     
    
});