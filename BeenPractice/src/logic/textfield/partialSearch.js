
Top.Controller.create('AccountLayoutLogic', {
	partSearch : function(event, widget) {
		
		 $("#PartialSearchField").keyup(function() {
            
			    var k = $(this).val();
				drHelpAccount.diAccountHelp.hide();
				//var temp=$("#AccountListTable.ACC4_NAME:contains('"+ k + "')");
				//$(temp).parent().show();
			 
         });				
	      
	      
	}
});
