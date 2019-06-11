
Top.Controller.create('MainBeenPracticeLayoutLogic', {
	maketreeview : function(event, widget) {
		
		//account 1,2,3 SO로 호출
		$.ajax({
		        url: 'http://192.168.156.156:14000/FS/HB/ReadAccountTree?action=SO',
		        type: 'POST',
		        dataType: 'json',
		        contentType: 'application/json; charset=UTF-8',
		        data: JSON.stringify({
		          "dto": {
		        	  	"COMPANY_CODE":null
					    }
		        }),
		        success: function(result) {
		          console.log("Ajax success");
		          dto = result["dto"];
		          console.log(dto);
		          
		          		         
		          drHelpAccount.diAccountHelp=dto.AccountDOList;
		          tv = Top.Dom.selectById("TreeView16");
		          tv.updateData();         	          
		          
		        },
		        error: function(error) {
		          alert("Ajax failed");
		        }
		      }) //end of Ajax
		
	}
});
