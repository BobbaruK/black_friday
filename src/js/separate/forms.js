/*!
	* forms.js
	*
	* Tiberiu @FXORO
  */
var countriesOptions = [{"country_name" : "Afghanistan", "country_code" : "AF", "prefix":"93"},  {"country_name" : "Albania", "country_code" : "AL", "prefix":"355"},  {"country_name" : "Algeria", "country_code" : "DZ", "prefix":"213"},  {"country_name" : "American Samoa", "country_code" : "AS", "prefix":"1684"},  {"country_name" : "Andorra", "country_code" : "AD", "prefix":"376"},  {"country_name" : "Angola", "country_code" : "AO", "prefix":"244"},   {"country_name" : "Anguilla", "country_code" : "AI", "prefix":"1264"},  {"country_name" : "Antarctica", "country_code" : "AQ", "prefix":"672"},  {"country_name" : "Antigua and Barbuda", "country_code" : "AG", "prefix":"1268"},  {"country_name" : "Argentina", "country_code" : "AR", "prefix":"54"},  {"country_name" : "Armenia", "country_code" : "AM", "prefix":"374"},  {"country_name" : "Aruba", "country_code" : "AW", "prefix":"297"},  {"country_name" : "Australia", "country_code" : "AU", "prefix":"61"},  {"country_name" : "Austria", "country_code" : "AT", "prefix":"43"}, {"country_name" : "Azerbaijan", "country_code" : "AZ", "prefix":"994"}, {"country_name" : "Bahamas", "country_code" : "BS", "prefix":"1242"}, {"country_name" : "Bahrain", "country_code" : "BH", "prefix":"973"},  {"country_name" : "Bangladesh", "country_code" : "BD", "prefix":"880"},  {"country_name" : "Barbados", "country_code" : "BB", "prefix":"1246"},  {"country_name" : "Belarus", "country_code" : "BY", "prefix":"375"},  {"country_name" : "Belgium", "country_code" : "BE", "prefix":"32"}, {"country_name" : "Belize", "country_code" : "BZ", "prefix":"501"},  {"country_name" : "Benin", "country_code" : "BJ", "prefix":"229"},  {"country_name" : "Bermuda", "country_code" : "BM", "prefix":"1441"}, {"country_name" : "Bhutan", "country_code" : "BT", "prefix":"975"},  {"country_name" : "Bolivia", "country_code" : "BO", "prefix":"591"},  {"country_name" : "Bosnia and Herzegovina", "country_code" : "BA", "prefix":"387"}, {"country_name" : "Botswana", "country_code" : "BW", "prefix":"267"}, {"country_name" : "Brazil", "country_code" : "BR", "prefix":"55"}, {"country_name" : "British Virgin Islands", "country_code" : "VG", "prefix":"1284"}, {"country_name" : "Brunei", "country_code" : "BN", "prefix":"673"},  {"country_name" : "Bulgaria", "country_code" : "BG", "prefix":"359"},  {"country_name" : "Burkina Faso", "country_code" : "BF", "prefix":"226"},  {"country_name" : "Burma (Myanmar)", "country_code" : "MM", "prefix":"95"},  {"country_name" : "Burundi", "country_code" : "BI", "prefix":"257"},  {"country_name" : "Cambodia", "country_code" : "KH", "prefix":"855"},  {"country_name" : "Cameroon", "country_code" : "CM", "prefix":"237"},  {"country_name" : "Canada", "country_code" : "CA", "prefix":"1"},  {"country_name" : "Cape Verde", "country_code" : "CV", "prefix":"238"},  {"country_name" : "Cayman Islands", "country_code" : "KY", "prefix":"1345"},  {"country_name" : "Central African Republic", "country_code" : "CF", "prefix":"236"},  {"country_name" : "Chad", "country_code" : "TD", "prefix":"235"},  {"country_name" : "Chile", "country_code" : "CL", "prefix":"56"},  {"country_name" : "China", "country_code" : "CN", "prefix":"86"},  {"country_name" : "Christmas Island", "country_code" : "CX", "prefix":"61"},  {"country_name" : "Cocos (keeling) Islands", "country_code" : "CC", "prefix":"61"},  {"country_name" : "Colombia", "country_code" : "CO", "prefix":"57"},  {"country_name" : "Comoros", "country_code" : "KM", "prefix":"269"},  {"country_name" : "Cook Islands", "country_code" : "CK", "prefix":"682"}, {"country_name" : "Costa Rica", "country_code" : "CR", "prefix":"506"}, {"country_name" : "Croatia", "country_code" : "HR", "prefix":"385"}, {"country_name" : "Cuba", "country_code" : "CU", "prefix":"53"}, {"country_name" : "Cyprus", "country_code" : "CY", "prefix":"357"}, {"country_name" : "Czech Republic", "country_code" : "CZ", "prefix":"420"}, {"country_name" : "Democratic Republic of the Congo", "country_code" : "CD", "prefix":"243"}, {"country_name" : "Denmark", "country_code" : "DK", "prefix":"45"}, {"country_name" : "Djibouti", "country_code" : "DJ", "prefix":"253"}, {"country_name" : "Dominica", "country_code" : "DM", "prefix":"1767"}, {"country_name" : "Dominican Republic", "country_code" : "DO", "prefix":"1809"}, {"country_name" : "Ecuador", "country_code" : "EC", "prefix":"593"}, {"country_name" : "Egypt", "country_code" : "EG", "prefix":"20"}, {"country_name" : "El Salvador", "country_code" : "SV", "prefix":"503"}, {"country_name" : "Equatorial Guinea", "country_code" : "GQ", "prefix":"240"}, {"country_name" : "Eritrea", "country_code" : "ER", "prefix":"291"}, {"country_name" : "Estonia", "country_code" : "EE", "prefix":"372"}, {"country_name" : "Ethiopia", "country_code" : "ET", "prefix":"251"}, {"country_name" : "Falkland Islands", "country_code" : "FK", "prefix":"500"}, {"country_name" : "Faroe Islands", "country_code" : "FO", "prefix":"298"}, {"country_name" : "Fiji", "country_code" : "FJ", "prefix":"679"}, {"country_name" : "Finland", "country_code" : "FI", "prefix":"358"}, {"country_name" : "France", "country_code" : "FR", "prefix":"33"}, {"country_name" : "French Polynesia", "country_code" : "PF", "prefix":"689"}, {"country_name" : "Gabon", "country_code" : "GA", "prefix":"241"}, {"country_name" : "Gambia", "country_code" : "GM", "prefix":"220"}, {"country_name" : "Georgia", "country_code" : "GE", "prefix":"995"}, {"country_name" : "Germany", "country_code" : "DE", "prefix":"49"}, {"country_name" : "Ghana", "country_code" : "GH", "prefix":"233"}, {"country_name" : "Gibraltar", "country_code" : "GI", "prefix":"350"}, {"country_name" : "Greece", "country_code" : "GR", "prefix":"30"}, {"country_name" : "Greenland", "country_code" : "GL", "prefix":"299"}, {"country_name" : "Grenada", "country_code" : "GD", "prefix":"1473"}, {"country_name" : "Guadeloupe", "country_code" : "GP", "prefix":"590"}, {"country_name" : "Guam", "country_code" : "GU", "prefix":"1671"}, {"country_name" : "Guatemala", "country_code" : "GT", "prefix":"502"}, {"country_name" : "Guinea", "country_code" : "GN", "prefix":"224"}, {"country_name" : "Guinea-bissau", "country_code" : "GW", "prefix":"245"}, {"country_name" : "Guyana", "country_code" : "GY", "prefix":"592"}, {"country_name" : "Haiti", "country_code" : "HT", "prefix":"509"}, {"country_name" : "Holy See (Vatican City)", "country_code" : "VA", "prefix":"39"}, {"country_name" : "Honduras", "country_code" : "HN", "prefix":"504"}, {"country_name" : "Hong Kong", "country_code" : "HK", "prefix":"852"}, {"country_name" : "Hungary", "country_code" : "HU", "prefix":"36"}, {"country_name" : "Iceland", "country_code" : "IS", "prefix":"354"}, {"country_name" : "India", "country_code" : "IN", "prefix":"91"}, {"country_name" : "Indonesia", "country_code" : "ID", "prefix":"62"}, {"country_name" : "Iran", "country_code" : "IR", "prefix":"98"}, {"country_name" : "Iraq", "country_code" : "IQ", "prefix":"964"}, {"country_name" : "Ireland", "country_code" : "IE", "prefix":"353"}, {"country_name" : "Isle Of Man", "country_code" : "IM", "prefix":"44"}, {"country_name" : "Israel", "country_code" : "IL", "prefix":"972"}, {"country_name" : "Italy", "country_code" : "IT", "prefix":"39"}, {"country_name" : "Ivory Coast", "country_code" : "CI", "prefix":"225"}, {"country_name" : "Jamaica", "country_code" : "JM", "prefix":"1876"}, {"country_name" : "Japan", "country_code" : "JP", "prefix":"81"}, {"country_name" : "Jordan", "country_code" : "JO", "prefix":"962"}, {"country_name" : "Kazakhstan", "country_code" : "KZ", "prefix":"7"}, {"country_name" : "Kenya", "country_code" : "KE", "prefix":"254"}, {"country_name" : "Kiribati", "country_code" : "KI", "prefix":"686"}, {"country_name" : "Kuwait", "country_code" : "KW", "prefix":"965"}, {"country_name" : "Kyrgyzstan", "country_code" : "KG", "prefix":"996"}, {"country_name" : "Laos", "country_code" : "LA", "prefix":"856"}, {"country_name" : "Latvia", "country_code" : "LV", "prefix":"371"}, {"country_name" : "Lebanon", "country_code" : "LB", "prefix":"961"}, {"country_name" : "Lesotho", "country_code" : "LS", "prefix":"266"}, {"country_name" : "Liberia", "country_code" : "LR", "prefix":"231"}, {"country_name" : "Libya", "country_code" : "LY", "prefix":"218"}, {"country_name" : "Liechtenstein", "country_code" : "LI", "prefix":"423"}, {"country_name" : "Lithuania", "country_code" : "LT", "prefix":"370"}, {"country_name" : "Luxembourg", "country_code" : "LU", "prefix":"352"}, {"country_name" : "Macao", "country_code" : "MO", "prefix":"853"}, {"country_name" : "Macedonia", "country_code" : "MK", "prefix":"389"}, {"country_name" : "Madagascar", "country_code" : "MG", "prefix":"261"}, {"country_name" : "Malawi", "country_code" : "MW", "prefix":"265"}, {"country_name" : "Malaysia", "country_code" : "MY", "prefix":"60"}, {"country_name" : "Maldives", "country_code" : "MV", "prefix":"960"}, {"country_name" : "Mali", "country_code" : "ML", "prefix":"223"}, {"country_name" : "Malta", "country_code" : "MT", "prefix":"356"}, {"country_name" : "Marshall Islands", "country_code" : "MH", "prefix":"692"}, {"country_name" : "Mauritania", "country_code" : "MR", "prefix":"222"}, {"country_name" : "Mauritius", "country_code" : "MU", "prefix":"230"}, {"country_name" : "Mayotte", "country_code" : "YT", "prefix":"262"}, {"country_name" : "Mexico", "country_code" : "MX", "prefix":"52"}, {"country_name" : "Micronesia, Federated States Of", "country_code" : "FM", "prefix":"691"}, {"country_name" : "Moldova, Republic Of", "country_code" : "MD", "prefix":"373"}, {"country_name" : "Monaco", "country_code" : "MC", "prefix":"377"}, {"country_name" : "Mongolia", "country_code" : "MN", "prefix":"976"}, {"country_name" : "Montenegro", "country_code" : "ME", "prefix":"382"}, {"country_name" : "Montserrat", "country_code" : "MS", "prefix":"1664"}, {"country_name" : "Morocco", "country_code" : "MA", "prefix":"212"}, {"country_name" : "Mozambique", "country_code" : "MZ", "prefix":"258"}, {"country_name" : "Namibia", "country_code" : "NA", "prefix":"264"}, {"country_name" : "Nauru", "country_code" : "NR", "prefix":"674"}, {"country_name" : "Nepal", "country_code" : "NP", "prefix":"977"}, {"country_name" : "Netherlands", "country_code" : "NL", "prefix":"31"}, {"country_name" : "Netherlands Antilles", "country_code" : "AN", "prefix":"599"}, {"country_name" : "New Caledonia", "country_code" : "NC", "prefix":"687"}, {"country_name" : "New Zealand", "country_code" : "NZ", "prefix":"64"}, {"country_name" : "Nicaragua", "country_code" : "NI", "prefix":"505"}, {"country_name" : "Niger", "country_code" : "NE", "prefix":"227"}, {"country_name" : "Nigeria", "country_code" : "NG", "prefix":"234"}, {"country_name" : "Niue", "country_code" : "NU", "prefix":"683"}, {"country_name" : "North Korea", "country_code" : "KP", "prefix":"850"}, {"country_name" : "Northern Mariana Islands", "country_code" : "MP", "prefix":"1670"}, {"country_name" : "Norway", "country_code" : "NO", "prefix":"47"}, {"country_name" : "Oman", "country_code" : "OM", "prefix":"968"}, {"country_name" : "Pakistan", "country_code" : "PK", "prefix":"92"}, {"country_name" : "Palau", "country_code" : "PW", "prefix":"680"}, {"country_name" : "Panama", "country_code" : "PA", "prefix":"507"}, {"country_name" : "Papua New Guinea", "country_code" : "PG", "prefix":"675"}, {"country_name" : "Paraguay", "country_code" : "PY", "prefix":"595"}, {"country_name" : "Peru", "country_code" : "PE", "prefix":"51"}, {"country_name" : "Philippines", "country_code" : "PH", "prefix":"63"}, {"country_name" : "Pitcairn Islands", "country_code" : "PN", "prefix":"870"}, {"country_name" : "Poland", "country_code" : "PL", "prefix":"48"}, {"country_name" : "Portugal", "country_code" : "PT", "prefix":"351"}, {"country_name" : "Puerto Rico", "country_code" : "PR", "prefix":"1"}, {"country_name" : "Qatar", "country_code" : "QA", "prefix":"974"}, {"country_name" : "Republic of the Congo", "country_code" : "CG", "prefix":"242"}, {"country_name" : "Romania", "country_code" : "RO", "prefix":"40"}, {"country_name" : "Russian Federation", "country_code" : "RU", "prefix":"7"}, {"country_name" : "Rwanda", "country_code" : "RW", "prefix":"250"}, {"country_name" : "Saint BarthÃ©lemy", "country_code" : "BL", "prefix":"590"}, {"country_name" : "Saint Helena", "country_code" : "SH", "prefix":"290"}, {"country_name" : "Saint Kitts and Nevis", "country_code" : "KN", "prefix":"1869"}, {"country_name" : "Saint Lucia", "country_code" : "LC", "prefix":"1758"}, {"country_name" : "Saint Martin", "country_code" : "MF", "prefix":"1599"}, {"country_name" : "Saint Pierre and Miquelon", "country_code" : "PM", "prefix":"508"}, {"country_name" : "Saint Vincent and the Grenadines", "country_code" : "VC", "prefix":"1784"}, {"country_name" : "Samoa", "country_code" : "WS", "prefix":"685"}, {"country_name" : "San Marino", "country_code" : "SM", "prefix":"378"}, {"country_name" : "Sao Tome And Principe", "country_code" : "ST", "prefix":"239"}, {"country_name" : "Saudi Arabia", "country_code" : "SA", "prefix":"966"}, {"country_name" : "Senegal", "country_code" : "SN", "prefix":"221"}, {"country_name" : "Serbia", "country_code" : "RS", "prefix":"381"}, {"country_name" : "Seychelles", "country_code" : "SC", "prefix":"248"}, {"country_name" : "Sierra Leone", "country_code" : "SL", "prefix":"232"}, {"country_name" : "Singapore", "country_code" : "SG", "prefix":"65"}, {"country_name" : "Slovakia", "country_code" : "SK", "prefix":"421"}, {"country_name" : "Slovenia", "country_code" : "SI", "prefix":"386"}, {"country_name" : "Solomon Islands", "country_code" : "SB", "prefix":"677"}, {"country_name" : "Somalia", "country_code" : "SO", "prefix":"252"}, {"country_name" : "South Africa", "country_code" : "ZA", "prefix":"27"}, {"country_name" : "South Korea", "country_code" : "KR", "prefix":"82"}, {"country_name" : "Spain", "country_code" : "ES", "prefix":"34"}, {"country_name" : "Sri Lanka", "country_code" : "LK", "prefix":"94"}, {"country_name" : "Sudan", "country_code" : "SD", "prefix":"249"}, {"country_name" : "Suriname", "country_code" : "SR", "prefix":"597"}, {"country_name" : "Swaziland", "country_code" : "SZ", "prefix":"268"}, {"country_name" : "Sweden", "country_code" : "SE", "prefix":"46"}, {"country_name" : "Switzerland", "country_code" : "CH", "prefix":"41"}, {"country_name" : "Syria", "country_code" : "SY", "prefix":"963"}, {"country_name" : "Taiwan", "country_code" : "TW", "prefix":"886"}, {"country_name" : "Tajikistan", "country_code" : "TJ", "prefix":"992"}, {"country_name" : "Tanzania", "country_code" : "TZ", "prefix":"255"}, {"country_name" : "Thailand", "country_code" : "TH", "prefix":"66"}, {"country_name" : "Timor-Leste", "country_code" : "TL", "prefix":"670"}, {"country_name" : "Togo", "country_code" : "TG", "prefix":"228"}, {"country_name" : "Tokelau", "country_code" : "TK", "prefix":"690"}, {"country_name" : "Tonga", "country_code" : "TO", "prefix":"676"}, {"country_name" : "Trinidad and Tobago", "country_code" : "TT", "prefix":"1868"}, {"country_name" : "Tunisia", "country_code" : "TN", "prefix":"216"}, {"country_name" : "Turkey", "country_code" : "TR", "prefix":"90"}, {"country_name" : "Turkmenistan", "country_code" : "TM", "prefix":"993"}, {"country_name" : "Turks and Caicos Islands", "country_code" : "TC", "prefix":"1649"}, {"country_name" : "Tuvalu", "country_code" : "TV", "prefix":"688"}, {"country_name" : "Uganda", "country_code" : "UG", "prefix":"256"}, {"country_name" : "Ukraine", "country_code" : "UA", "prefix":"380"}, {"country_name" : "United Arab Emirates", "country_code" : "AE", "prefix":"971"}, {"country_name" : "United Kingdom", "country_code" : "GB", "prefix":"44"}, {"country_name" : "United States of America", "country_code" : "US", "prefix":"1"}, {"country_name" : "Uruguay", "country_code" : "UY", "prefix":"598"}, {"country_name" : "US Virgin Islands", "country_code" : "VI", "prefix":"1340"}, {"country_name" : "Uzbekistan", "country_code" : "UZ", "prefix":"998"}, {"country_name" : "Vanuatu", "country_code" : "VU", "prefix":"678"}, {"country_name" : "Venezuela", "country_code" : "VE", "prefix":"58"}, {"country_name" : "Viet Nam", "country_code" : "VN", "prefix":"84"}, {"country_name" : "Wallis And Futuna", "country_code" : "WF", "prefix":"681"}, {"country_name" : "Yemen", "country_code" : "YE", "prefix":"967"}, {"country_name" : "Zambia", "country_code" : "ZM", "prefix":"260"}, {"country_name" : "Zimbabwe", "country_code" : "ZW", "prefix":"263"}];

//Change prefix when selected country is changed
function form1SelectPrefix(){
	for(i=0; i<countriesOptions.length; i++){
		if($('.form-1-select-country').val() == countriesOptions[i].country_code){
			$('.form-1-prefix').val('+' + countriesOptions[i].prefix);
			$('.form-2-prefix').val('+' + countriesOptions[i].prefix);
			$('.form-2-select-country').val($('.form-1-select-country').val());
		}
	};
}

function form2SelectPrefix(){
	for(i=0; i<countriesOptions.length; i++){
		if($('.form-2-select-country').val() == countriesOptions[i].country_code){
			$('.form-2-prefix').val('+' + countriesOptions[i].prefix);
			$('.form-1-prefix').val('+' + countriesOptions[i].prefix);
			$('.form-1-select-country').val($('.form-2-select-country').val());
		}
	};
}

$(document).ready(function(){
	
	var counter = 0;

	function createCountryList(selectClass){
		$(selectClass).append('<option value="" selected>Selezionare il Paese</option>');
		for(i=0; i<countriesOptions.length; i++){
			$(selectClass).append('<option value="' + countriesOptions[i].country_code + '">' + countriesOptions[i].country_name + '</option>');
			if(selectClass == '.form-2-select-country' && i == countriesOptions.length-1){
				findCountry();			
			}
		}
	}
	createCountryList('.form-1-select-country');
	createCountryList('.form-2-select-country');

	var selectedOption;
	function findCountry(){
		selectedOption = $('#country-selector').find(':selected').val();
		if(!selectedOption && counter <= 600){
			setTimeout(findCountry, 5);
			counter++;
		}else{
			assignOptions('.form-1-select-country', '.form-1-prefix');
			assignOptions('.form-2-select-country', '.form-2-prefix');
		}
	}

	//Get country through JSON
	// function assignOptions(selectClass, prefixClass){
	// 	$(selectClass).append('<option value="" selected>Selezionare il Paese</option>');
	// 	for(i=0; i<countriesOptions.length; i++){
	// 		$(selectClass).append('<option value="' + countriesOptions[i].country_code + '">' + countriesOptions[i].country_name + '</option>');
	// 	}
	// 		$.getJSON("http://ip-api.com/json", function(data){
	// 		var mycountrycode = data.countryCode;
	// 		for(i=0; i<countriesOptions.length; i++){
	// 			if(mycountrycode == countriesOptions[i].country_code){
	// 				$(selectClass).append('<option value="' + countriesOptions[i].country_code + '" selected>' + countriesOptions[i].country_name + '</option>');
	// 				$(prefixClass).val('+' + countriesOptions[i].prefix);
	// 			}else{
	// 				$(selectClass).append('<option value="' + countriesOptions[i].country_code + '">' + countriesOptions[i].country_name + '</option>');
	// 			}
	// 		};
	// 	});
	// }

	function assignOptions(selectClass, prefixClass){
		for(i=0; i<countriesOptions.length; i++){
			if(selectedOption == countriesOptions[i].country_code){
				$(selectClass).append('<option value="' + countriesOptions[i].country_code + '" selected>' + countriesOptions[i].country_name + '</option>');
				$(prefixClass).val('+' + countriesOptions[i].prefix);
			}else{
				$(selectClass).append('<option value="' + countriesOptions[i].country_code + '">' + countriesOptions[i].country_name + '</option>');
			}
		};
	}

	//Assign options to forms
	//Call functions when JSON is used
	// assignOptions('.form-1-select-country', '.form-1-prefix');
	// assignOptions('.form-2-select-country', '.form-2-prefix');

	//Display erros
	var checkForm1 = [{'check' : '.fnameerror', 'display' : '.form-1-first-name-error'}, {'check' : '.lnameerror', 'display' : '.form-1-last-name-error'}, {'check' : '.emailerrorclass', 'display' : '.form-1-email-error'},	{'check' : '#phoneerror', 'display' : '.form-1-phone-error'}, {'check' : '.countryerrorclass', 'display' : '.form-1-select-country-error'}, {'check' : '.agreementerror', 'display' : '.form-1-checkbox-error'}, {'check' : '.submiterror', 'display' : '.form-1-submit-button-error'}];
	var checkForm2 = [{'check' : '.fnameerror', 'display' : '.form-2-first-name-error'}, {'check' : '.lnameerror', 'display' : '.form-2-last-name-error'}, {'check' : '.emailerrorclass', 'display' : '.form-2-email-error'},	{'check' : '#phoneerror', 'display' : '.form-2-phone-error'}, {'check' : '.countryerrorclass', 'display' : '.form-2-select-country-error'}, {'check' : '.agreementerror', 'display' : '.form-2-checkbox-error'}, {'check' : '.submiterror', 'display' : '.form-2-submit-button-error'}];

	function formSubmitted(checkArray){
		function checkEach(check, display){
			if($(check).html() != ''){
				$(display).html($(check).html());
				$(display).css('display', 'block');
			}
		}
		function checkErrors(checkArray){
			for(i=0; i<checkArray.length; i++){
				checkEach(checkArray[i].check, checkArray[i].display)
			}
		}
		function triggerSubmit(){
			$('.submitformmain').trigger('submit');
			setTimeout(function(){checkErrors(checkArray)}, 200)
		}
		function assignValues(formFirstName, formLastName, formEmail, formPrefix, formPhone, formSelect, formCheckbox, formFirstNameSecond, formLastNameSecond, formEmailSecond, formPrefixSecond, formPhoneSecond, formSelectSecond, formCheckboxSecond){
			$('.fnameclass').val($(formFirstName).val());
			$(formFirstNameSecond).val($(formFirstName).val());
			$('.lnameclass').val($(formLastName).val());
			$(formLastNameSecond).val($(formLastName).val());
			$('.useremailclass').val($(formEmail).val());
			$(formEmailSecond).val($(formEmail).val());
			$('.phoneprefixclass').val($(formPrefix).val());
			$(formPrefixSecond).val($(formPrefix).val());
			$('.phonenumberclass').val($(formPhone).val());
			$(formPhoneSecond).val($(formPhone).val());
			$('.counteryselectorclass').val($(formSelect).val());
			$(formSelectSecond).val($(formSelect).val());
			$('.agreeinputclass').prop('checked', $(formCheckbox).is(':checked'));
			$(formCheckboxSecond).prop('checked', $(formCheckbox).is(':checked'));
			setTimeout(triggerSubmit, 100);
		}
		if(checkArray == checkForm1){
			assignValues('.form-1-first-name', '.form-1-last-name', '.form-1-email', '.form-1-prefix', '.form-1-phone', '.form-1-select-country', '.form-1-checkbox', '.form-2-first-name', '.form-2-last-name', '.form-2-email', '.form-2-prefix', '.form-2-phone', '.form-2-select-country', '.form-2-checkbox');		
		}else if(checkArray == checkForm2){
			assignValues('.form-2-first-name', '.form-2-last-name', '.form-2-email', '.form-2-prefix', '.form-2-phone', '.form-2-select-country', '.form-2-checkbox', '.form-1-first-name', '.form-1-last-name', '.form-1-email', '.form-1-prefix', '.form-1-phone', '.form-1-select-country', '.form-1-checkbox');		
		};
	}

	//Form-1 submit
    $(".form-1").submit(function(event){ 
		event.preventDefault();
		formSubmitted(checkForm1);
	});

	//Form-2 submit
 	$(".form-2").submit(function(event){ 
		event.preventDefault();
		formSubmitted(checkForm2);
	});

});