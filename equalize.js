
//Seeking a higher height of the items, and setting a default height for all.
function equalizeHeight(element)
{
	var maxHeight = 0;
    $(element).each(function(){
    	if ($(this).outerHeight() > maxHeight)
    	{
    		maxHeight = $(this).outerHeight();
    	}
    });
    $(element).height(maxHeight);
}