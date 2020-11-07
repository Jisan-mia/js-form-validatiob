const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')
const form = document.getElementById('form')


function showErrorMsg(input, msg){
	const parent = input.parentNode;
	const small = parent.querySelector('small');
	small.innerText = msg;
	parent.className = 'form-group error';
}

function showSuccesMsg(input){
	const parent = input.parentNode;
	parent.className = 'form-group success';
}


//validate username
function validateUserName(userNameValue){
	if(userNameValue == ""){
		showErrorMsg(userName, 'Field cannot be empty')
	} else if (!isNaN(userNameValue)){
		showErrorMsg(userName, 'Enter only characters');
	} else if (userNameValue.length < 3 || userNameValue.length > 15){
		showErrorMsg(userName, 'Name should be 3-15 char');
	} else {
		showSuccesMsg(userName);
	}

}

//check email
function isEmail(emailValue){
	const atChar = emailValue.indexOf('@');
	const dotChar = emailValue.lastIndexOf('.');

	const lastAtPos = emailValue.lastIndexOf('@');
    const lastDotPos = emailValue.lastIndexOf('.');
    if (lastAtPos < lastDotPos && lastAtPos > 0 && emailValue.indexOf('@@') == -1 && lastDotPos > 2 && (emailValue.length - lastDotPos) > 2){
    	return true;
    }
    return false;

}

//validate email
function validateEmail(emailValue){
	if(emailValue == ""){
		showErrorMsg(email, 'Field cannot be empty');
	} else if (isEmail(emailValue)){
		showSuccesMsg(email);
	} else {
		showErrorMsg(email, 'Not a valid email')
	}
}


//validate password
function validatePassword(passwrodValue){
	if(passwrodValue== ""){
		showErrorMsg(password, 'Field cannot be emtpy');
	} else if( passwrodValue.length < 8){
		showErrorMsg(password, 'Password should be min 8 char');
	} else {
		showSuccesMsg(password);
	}
}


//validate confirm password
function validateConfirmPass(cpasswordValue){
	if(cpasswordValue == ""){
		showErrorMsg(cpassword, 'Field cannot be emtpy');
	} else if( cpasswordValue.length < 8){
		showErrorMsg(cpassword, 'Password should be min 8 char');
	} else if ( cpasswordValue != password.value){
		showErrorMsg(cpassword, "Password didn't match");
	}
	 else {
		showSuccesMsg(cpassword);
	}
}

const validate = () => {
	console.log('validate')

	const userNameValue = userName.value.trim();
	const emailValue = email.value.trim();
	const passwrodValue =password.value.trim();
	const cpasswordValue = cpassword.value.trim();
	
	//username validation
	validateUserName(userNameValue)

	//email validation
	validateEmail(emailValue);

	// password validation
	validatePassword(passwrodValue);

	//confirm password validation
	validateConfirmPass(cpasswordValue);


	const successClass = document.querySelectorAll('.success');
	setTimeout(function(){
		if(successClass.length == 4){
			formSuccessMsg();
		}
	}, 400)
	
}


function formSuccessMsg(){
	document.getElementById('main-page').style.display = 'none';
	document.getElementById('submitted-msg').style.display = 'block';

	document.getElementById('msg-name').innerText = username.value;

}

function previewForm(){
	document.getElementById('main-page').style.display = 'block';
	document.getElementById('submitted-msg').style.display = 'none';

	const submitBtn =document.getElementById('submit-btn');

	username.readOnly = true;
	email.readOnly = true;
	password.readOnly = true;
	cpassword.readOnly = true;
	
	submitBtn.classList.remove('btn');
	submitBtn.classList.add('disabled-btn');
	submitBtn.disabled = true;
}

form.addEventListener('submit', function(e){
	e.preventDefault();

	//validation functin
	validate();
})


