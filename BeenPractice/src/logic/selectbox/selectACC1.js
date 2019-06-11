
Top.Controller.create('AccountLayoutLogic', {
	filterbyACC1 : function(event, widget) {
		
		ab=Top.Dom.selectById("ACC1SelectBox");
		
		
		if(ab.getSelectedText()=="전체"){
			$.ajax({
		        url: 'http://192.168.156.164:18088/common/common_sg/ShowACC4List?action=SO',
		        type: 'POST',
		        dataType: 'json',
		        contentType: 'application/json; charset=UTF-8',
		        data: JSON.stringify({
		          "dto": {
					    }
		        }),
		        success: function(result) {
		          console.log("Ajax success");
		          dto= result["dto"];
		          console.log(dto);
		          
		          		         
		          drHelpAccount.diAccountHelp=dto.AccountDOList;
		          tv = Top.Dom.selectById("AccountListTable");
		          tv.update();         	          
		          
		        },
		        error: function(error) {
		          alert("Ajax failed");
		        }
		      }) 
		}
		
		else{
		$.ajax({
	        url: 'http://192.168.156.164:18088/common/common_sg/ShowACC4ByACC1?action=SO',
	        type: 'POST',
	        dataType: 'json',
	        contentType: 'application/json; charset=UTF-8',
	        data: JSON.stringify({
	          "dto": {
	        	  		"ACC1_NAME": ab.getSelectedText()
				    }
	        }),
	        success: function(result) {
	          console.log("Ajax success");
	          dto= result["dto"];
	          console.log(dto);
	          
	          		         
	          drHelpAccount.diAccountHelp=dto.AccountDOList;
	          tv = Top.Dom.selectById("AccountListTable");
	          tv.update();         	          
	          
	        },
	        error: function(error) {
	          alert("Ajax failed");
	        }
	      })
		}
		tv = Top.Dom.selectById("AccountListTable");
		tv.check(0,false);
		
	}
});
