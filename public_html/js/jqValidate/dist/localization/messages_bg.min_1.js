/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.validator.messages,{required:"Полето е задължително.",remote:"Моля, въведете правилната стойност.",email:"Моля, въведете валиден email.",url:"Моля, въведете валидно URL.",date:"Моля, въведете валидна дата.",dateISO:"Моля, въведете валидна дата (ISO).",number:"Моля, въведете валиден номер.",digits:"Моля, въведете само цифри.",creditcard:"Моля, въведете валиден номер на кредитна карта.",equalTo:"Моля, въведете същата стойност отново.",extension:"Моля, въведете стойност с валидно разширение.",maxlength:a.validator.format("Моля, въведете повече от {0} символа."),minlength:a.validator.format("Моля, въведете поне {0} символа."),rangelength:a.validator.format("Моля, въведете стойност с дължина между {0} и {1} символа."),range:a.validator.format("Моля, въведете стойност между {0} и {1}."),max:a.validator.format("Моля, въведете стойност по-малка или равна на {0}."),min:a.validator.format("Моля, въведете стойност по-голяма или равна на {0}.")})});