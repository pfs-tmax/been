
Top.Controller.create('AccountLayoutLogic', {
	cancelButton : function(event, widget) {
	
		Top.Dom.selectById("AccountDialog").close();
	
	}, confirmButton : function(event, widget) {
		
		aa=Top.Dom.selectById("AccountListTable");
		
		//체크된 행의 ACC4의 코드와 이름을 던져주자
		//InsertSO를 하자
		/*
		$.ajax({
	        url: 'http://192.168.156.164:18088/common/common_sg/ShowACC4List?action=SO',
	        type: 'POST',
	        dataType: 'json',
	        contentType: 'application/json; charset=UTF-8',
	        data: JSON.stringify({
	          "dto": {
	        	  	"ACC4_CODE":aa.getCheckedData()[0].ACC4_CODE,
	        	  	"ACC4_NAME":aa.getCheckedData()[0].ACC4_NAME	        	  
				    }
	        }),
	        success: function(result) {
	          console.log("Ajax success");
	          dto = result["dto"];
	          console.log(dto);
	          
	          		         
	          drHelpAccount.diAccountHelp=dto.AccountDOList;
	          tv = Top.Dom.selectById("AccountListTable");
	          tv.update();         	          
	          
	        },
	        error: function(error) {
	          alert("Ajax failed");
	        }
	      })
		*/
		Top.Dom.selectById("AccountDialog").close();
		
	}
	
});
