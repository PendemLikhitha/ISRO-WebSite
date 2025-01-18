function validateForm()
	{
		var un =document.registration.username.value;
		var letters=/^[a-zA-Z0-9@#_\s]+$/;
		if(un=="" || un=="null")
		{
			alert("Plz enter your user name");
			document.registration.username.focus();
			return false;
		}
		if(un.length<6)
		{
			alert("Plz enter minimum 6 characters");
			document.registration.username.focus();
			return false;
		}
		if(!un.match(letters))
		{
			alert("Plz enter valid user name");
			document.registration.uname.focus();
			return false;
		}

		alert("Successful");
        var pass = document.registration.password.value;
				var checkSpecial = /[*@!#%&]+/.test(pass);
				var checkUpper = /[A-Z]+/.test(pass);
				var checkLower = /[a-z]+/.test(pass);
				if(pass=="" || pass=="null")
				{
					alert("please enter ur password");
					document.registration.password.focus();
					return false;
				}
				if(checkSpecial &&checkLower && checkUpper)
				{
					flag=1;
				}

				if(flag==0)
				{
					alert("Password should be the combination of atleast one lowercase letter, uppercase letter & special symbols like ($, & #)");
					document.registration.password.focus();
					return false;
				}
				alert("Successful");
	}
