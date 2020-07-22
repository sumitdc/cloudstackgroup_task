


        $(document).ready(function(){
            $('#firstcheck').hide();
            $('#lastcheck').hide();
            $('#passcheck').hide();
            $('#conpasscheck').hide();
            $('#emailcheck').hide();
            $('#filecheck').hide();

            var first_err = true;
            var last_err = true;
            var pass_err = true;
            var conpass_err = true;
            var email_err = true;
            var file_err = true

            $('#firstnames').keyup(function(){
                firstname_check();
            });



            function firstname_check(){
                var first_val = $('#firstnames').val();
                if(first_val.length == ''){
                    $('#firstcheck').show();
                    $('#firstcheck').html("Please Fill the Username");
                    $('#firstcheck').focus();
                    $('#firstcheck').css("color","red");
                    first_err = false;
                    return false;
                }else{
                    $('#firstcheck').hide();
                }

                if((first_val.length < 3) || (first_val.length > 15)) {
                    $('#firstcheck').show();
                    $('#firstcheck').html("Firstname Must Be 3 to 15");
                    $('#firstcheck').focus();
                    $('#firstcheck').css("color","red");
                    first_err = false;
                    return false;
                }else{
                    $('#firstcheck').hide();
                }
           }



            $('#lastnames').keyup(function(){
                lastname_check();
            });

            function lastname_check(){
                var last_val = $('#lastnames').val();
                if(last_val.length == ''){
                    $('#lastcheck').show();
                    $('#lastcheck').html("Please Fill the Last Name");
                    $('#lastcheck').focus();
                    $('#lastcheck').css("color","red");
                    last_err = false;
                    return false;
                }else{
                    $('#lastcheck').hide();
                }

                if((last_val.length < 3) || (last_val.length > 15)) {
                    $('#lastcheck').show();
                    $('#lastcheck').html("Last Must Be 3 to 15");
                    $('#lastcheck').focus();
                    $('#lastcheck').css("color","red");
                    last_err = false;
                    return false;
                }else{
                    $('#lastcheck').hide();
                }
           }

            $('#password').keyup(function(){
                password_check();
            });

            function password_check(){
                var passwrdstr = $('#password').val();
                if(passwrdstr.length == ''){
                    $('#passcheck').show();
                    $('#passcheck').html("Please Fill Password");
                    $('#passcheck').focus();
                    $('#passcheck').css("color","red");
                    conpass_err = false;
                    return false;
                }else{
                    $('#passcheck').hide();
                }


                if((passwrdstr.length < 3) || (passwrdstr.length > 15)){
                    $('#passcheck').show();
                    $('#passcheck').html("Password Must Be 3 to 15");
                    $('#passcheck').focus();
                    $('#passcheck').css("color","red");
                    user_err = false;
                    return false;
                }else{
                    $('#passcheck').hide();
                 }
            }


            $('#conpassword').keyup(function(){
                con_password();
            });

            function con_password(){
                var conpass = $('#conpassword').val();
                var passwrdstr = $('#password').val();

                if(passwrdstr != conpass){
                    $('#conpasscheck').show();
                    $('#conpasscheck').html("Password Not Match");
                    $('#conpasscheck').focus();
                    $('#conpasscheck').css("color","red");
                    conpass_err = false;
                    return false;
                }else{
                    $('#conpasscheck').hide();
                 }
            }

            $('#emailids').keyup(function(){
                email_check();
            });

            function email_check(){
                var email_val = $('#emailids').val();
                if(email_val.length == ''){
                    $('#emailcheck').show();
                    $('#emailcheck').html("Please Fill Email Id");
                    $('#emailcheck').focus();
                    $('#emailcheck').css("color","red");
                    email_err = false;
                    return false;
                }else{
                    $('#emailcheck').hide();
                }



                var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
		 		if(reg.test(email_val)){
		 			$('#emailcheck').hide();
		 		}else{
		 			$('#emailcheck').show();
		 			$('#emailcheck').html("Invalid Email Id");
		 			$('#emailcheck').focus();
		 			$('#emailcheck').css("color","red");
		 			email_err = false;
		 			return false;
		 		}





<!--                if((email_val.indexOf('@')<=0) && (email_val!='@') && (email_val.charAt(email_val.length-4)!=".") && (email_val.charAt(email_val.length-3)!=".")){-->
<!--                    $('#emailcheck').show();-->
<!--                    $('#emailcheck').html("Invalid Email Id");-->
<!--                    $('#emailcheck').focus();-->
<!--                    $('#emailcheck').css("color","red");-->
<!--                    email_err = false;-->
<!--                    return false;-->
<!--                }else{-->
<!--                    $('#emailcheck').hide();-->
<!--                }-->
            }
            $('#fileid').keyup(function(){
                file_check();
            });

            function file_check(){
                var fileinput = document.getElementId('fileid');
                var filepath = fileinput.value;
                var allowedext = /(\.jpg|\.png|\.jpeg)$/i;
                if(!allowedext.exec(filepath)){
                    $('#filecheck').show()
                    $('#filecheck').html("Please Upload .jpg,.jpeg,.png  file only")
                    $('#filecheck').focus()
                    $('#filecheck').css("color","red")
                    fileinput.value="";

                    file_err = false
                    return false;

                }else{
                $('#filecheck').hide();
                }
            }

            $('#submitbtn').click(function(){
                 first_err = true;
                 last_err = true;
                 pass_err = true;
                 conpass_err = true;
                 email_err = true;
//                 file_err = true;

                firstname_check();
                lastname_check();
                password_check();
                con_password();
                email_check();
//                file_check();


                if((first_err == true) && (last_err == true) && (pass_err == true) && (conpass_err == true ) && (email_err == true) && ( file_err == true) ){
                    return true;
                }else{
                    return false;
                }
            });

        });




