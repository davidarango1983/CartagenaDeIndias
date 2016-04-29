/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.validator.messages,{required:"Ovo polje je obavezno.",remote:"Ovo polje treba popraviti.",email:"Unesite ispravnu e-mail adresu.",url:"Unesite ispravan URL.",date:"Unesite ispravan datum.",dateISO:"Unesite ispravan datum (ISO).",number:"Unesite ispravan broj.",digits:"Unesite samo brojeve.",creditcard:"Unesite ispravan broj kreditne kartice.",equalTo:"Unesite ponovo istu vrijednost.",extension:"Unesite vrijednost sa ispravnom ekstenzijom.",maxlength:a.validator.format("Maksimalni broj znakova je {0} ."),minlength:a.validator.format("Minimalni broj znakova je {0} ."),rangelength:a.validator.format("Unesite vrijednost između {0} i {1} znakova."),range:a.validator.format("Unesite vrijednost između {0} i {1}."),max:a.validator.format("Unesite vrijednost manju ili jednaku {0}."),min:a.validator.format("Unesite vrijednost veću ili jednaku {0}.")})});