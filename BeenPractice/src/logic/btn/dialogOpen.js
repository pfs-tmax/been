
Top.Controller.create('MainBeenPracticeLayoutLogic', {
	openAccountDialog : function(event, widget) {
		
		Top.Dom.selectById("AccountDialog").open();
		
		//전체 다 불러오는 SO 호출
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
		          dto = result["dto"];
		          console.log(dto);
		          
		          		         
		          drHelpAccount.diAccountHelp=dto.AccountDOList;
		          tv = Top.Dom.selectById("AccountListTable");
		          tv.update();         	          
		          
		        },
		        error: function(error) {
		          alert("Ajax failed");
		        }
		      }) //end of Ajax
		     
		      

		$.ajax({
		        url: 'http://192.168.156.164:18088/common/common_sg/ShowDistinctACC1?action=SO',
		        type: 'POST',
		        dataType: 'json',
		        contentType: 'application/json; charset=UTF-8',
		        data: JSON.stringify({
		          "dto": {
					    }
		        }),
		        success: function(result) {
		          console.log("Ajax success");
		          dto_1 = result["dto"];
		          console.log(dto_1);
		          
		          dto_1.AccountDOList.unshift( {
		                "ACC1_NAME": "전체",
		                "ACC2_NAME": "",
		                "ACC3_NAME": "",
		                "ACC4_ENG": "",
		                "ACC4_PRNAME": "",
		                "ACC4_STDFIN": "",
		                "ACC4_STDNUM": "",
		                "ACC4_ADMIN": "",
		                "ACC4_REL": 0,
		                "ACC4_USAGE": "",
		                "ACC4_TYPE": "",
		                "ACC4_NAME": "",
		                "ACC4_CODE": 0
		            });
		          drHelpAccount.diAccountHelpSelectBox=dto_1.AccountDOList;
		          sb=Top.Dom.selectById("AccountDialog");
		          sb.bindData({"this.template.dataModel":"drHelpAccount.diAccountHelpSelectBox"})	   	        
		           	              
		        },
		        error: function(error) {
		          alert("Ajax failed");
		        }
		      }) //end of Ajax
        
        
	}
});

Top.Controller.create('AccountLayoutLogic', {
	partialSearch : function(event, widget) {
		 if(event.keyCode==13){
	         var check = new Array();
	         for(var i = 0 ; i<dto.AccountDOList.length;i++){
	            if(dto.AccountDOList[i].ACC4_NAME.toString().includes(Top.Dom.selectById("PartialSearchField").getText())){
	               check.push(dto.AccountDOList[i]);
	            }
	         }
	         //alert("굳");
	         drHelpAccount.diAccountHelp=check;
	          tv = Top.Dom.selectById("AccountListTable");
	          tv.update();
	          tv.check(0,false);
		
	}
 
	   
	}, fastSearch : function(event, widget) {
		/*
		var check = new Array();
        for(var i = 0; i<dto.AccountDOList.length;i++){
           if(dto.AccountDOList[i].ACC4_NAME.toString().includes(Top.Dom.selectById("FastSearchField").getText())){
              check.push(dto.AccountDOList[i]);
           }
        }
              drHelpAccount.diAccountHelp=check;
	          tv = Top.Dom.selectById("AccountListTable");
	          tv.update();
	*/
	
		drHelpAccount.diAccountHelp=dto.AccountDOList;
		tv = Top.Dom.selectById("AccountListTable");
		var check = new Array();
		var a=0;
        for(var i = 0; i<dto.AccountDOList.length;i++){
           if(dto.AccountDOList[i].ACC4_NAME.toString().includes(Top.Dom.selectById("FastSearchField").getText())){
               a=i;
        	   break;
            }
        }

        tv.update();
        tv.selectData(a);
        aa=$("tv.getSelectedData");
        bb=$("#AccountListTable");
        bb.animate({scrollTop : aa.offset.Top}, 100);
        console.log("d먹힘");
        

        
//        for(var k=a; k<dto.AccountDOList.length; k++){
//        	check.push(dto.AccountDOList[k]);
//        }
        
        
              
	          
	          
	          
	        
	          
	          
	         
		
		
   }, dummyFun : function(event, widget) {
	}
	     
});



