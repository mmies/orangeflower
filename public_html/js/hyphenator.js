/*
 *  Hyphenator 5.3.0 - client side hyphenation for webbrowsers
 *  Copyright (C) 2017  Mathias Nater, Zürich (mathiasnater at gmail dot com)
 *  https://github.com/mnater/Hyphenator
 *
 *  Released under the MIT license
 *  http://mnater.github.io/Hyphenator/LICENSE.txt
 */

var Hyphenator;
Hyphenator=(function(window){
"use strict";
var contextWindow=window;
var supportedLangs=(function(){
var r={},
o=function(code,file,script,prompt){
r[code]={"file":file,"script":script,"prompt":prompt};
};
o("be","be.js",1,"Мова гэтага сайта не можа быць вызначаны аўтаматычна. Калі ласка пакажыце мову:");
o("ca","ca.js",0,"");
o("cs","cs.js",0,"Jazyk této internetové stránky nebyl automaticky rozpoznán. Určete prosím její jazyk:");
o("cu","cu.js",1,"Ꙗ҆зы́къ сегѡ̀ са́йта не мо́жетъ ѡ҆предѣле́нъ бы́ти. Прошꙋ́ тѧ ᲂу҆каза́ти ꙗ҆зы́къ:");
o("da","da.js",0,"Denne websides sprog kunne ikke bestemmes. Angiv venligst sprog:");
o("bn","bn.js",4,"");
o("de","de.js",0,"Die Sprache dieser Webseite konnte nicht automatisch bestimmt werden. Bitte Sprache angeben:");
o("el","el-monoton.js",6,"");
o("el-monoton","el-monoton.js",6,"");
o("el-polyton","el-polyton.js",6,"");
o("en","en-us.js",0,"The language of this website could not be determined automatically. Please indicate the main language:");
o("en-gb","en-gb.js",0,"The language of this website could not be determined automatically. Please indicate the main language:");
o("en-us","en-us.js",0,"The language of this website could not be determined automatically. Please indicate the main language:");
o("eo","eo.js",0,"La lingvo de ĉi tiu retpaĝo ne rekoneblas aŭtomate. Bonvolu indiki ĝian ĉeflingvon:");
o("es","es.js",0,"El idioma del sitio no pudo determinarse autom%E1ticamente. Por favor, indique el idioma principal:");
o("et","et.js",0,"Veebilehe keele tuvastamine ebaõnnestus, palun valige kasutatud keel:");
o("fi","fi.js",0,"Sivun kielt%E4 ei tunnistettu automaattisesti. M%E4%E4rit%E4 sivun p%E4%E4kieli:");
o("fr","fr.js",0,"La langue de ce site n%u2019a pas pu %EAtre d%E9termin%E9e automatiquement. Veuillez indiquer une langue, s.v.p.%A0:");
o("ga","ga.js",0,"Níorbh fhéidir teanga an tsuímh a fháil go huathoibríoch. Cuir isteach príomhtheanga an tsuímh:");
o("grc","grc.js",6,"");
o("gu","gu.js",7,"");
o("hi","hi.js",5,"");
o("hu","hu.js",0,"A weboldal nyelvét nem sikerült automatikusan megállapítani. Kérem adja meg a nyelvet:");
o("hy","hy.js",3,"Չհաջողվեց հայտնաբերել այս կայքի լեզուն։ Խնդրում ենք նշեք հիմնական լեզուն՝");
o("it","it.js",0,"Lingua del sito sconosciuta. Indicare una lingua, per favore:");
o("ka","ka.js",16,"");
o("kn","kn.js",8,"ಜಾಲ ತಾಣದ ಭಾಷೆಯನ್ನು ನಿರ್ಧರಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಮುಖ್ಯ ಭಾಷೆಯನ್ನು ಸೂಚಿಸಿ:");
o("la","la.js",0,"");
o("lt","lt.js",0,"Nepavyko automatiškai nustatyti šios svetainės kalbos. Prašome įvesti kalbą:");
o("lv","lv.js",0,"Šīs lapas valodu nevarēja noteikt automātiski. Lūdzu norādiet pamata valodu:");
o("ml","ml.js",10,"ഈ വെ%u0D2C%u0D4D%u200Cസൈറ്റിന്റെ ഭാഷ കണ്ടുപിടിയ്ക്കാ%u0D28%u0D4D%u200D കഴിഞ്ഞില്ല. ഭാഷ ഏതാണെന്നു തിരഞ്ഞെടുക്കുക:");
o("nb","nb-no.js",0,"Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:");
o("no","nb-no.js",0,"Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:");
o("nb-no","nb-no.js",0,"Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:");
o("nl","nl.js",0,"De taal van deze website kan niet automatisch worden bepaald. Geef de hoofdtaal op:");
o("or","or.js",11,"");
o("pa","pa.js",13,"");
o("pl","pl.js",0,"Języka tej strony nie można ustalić automatycznie. Proszę wskazać język:");
o("pt","pt.js",0,"A língua deste site não pôde ser determinada automaticamente. Por favor indique a língua principal:");
o("ru","ru.js",1,"Язык этого сайта не может быть определен автоматически. Пожалуйста укажите язык:");
o("sk","sk.js",0,"");
o("sl","sl.js",0,"Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:");
o("sr-cyrl","sr-cyrl.js",1,"Језик овог сајта није детектован аутоматски. Молим вас наведите језик:");
o("sr-latn","sr-latn.js",0,"Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:");
o("sv","sv.js",0,"Spr%E5ket p%E5 den h%E4r webbplatsen kunde inte avg%F6ras automatiskt. V%E4nligen ange:");
o("ta","ta.js",14,"");
o("te","te.js",15,"");
o("tr","tr.js",0,"Bu web sitesinin dili otomatik olarak tespit edilememiştir. Lütfen dökümanın dilini seçiniz%A0:");
o("uk","uk.js",1,"Мова цього веб-сайту не може бути визначена автоматично. Будь ласка, вкажіть головну мову:");
o("ro","ro.js",0,"Limba acestui sit nu a putut fi determinată automat. Alege limba principală:");
return r;
}());
var locality=(function getLocality(){
var r={
isBookmarklet:false,
basePath:"//mnater.github.io/Hyphenator/",
isLocal:false
};
var fullPath;
function getBasePath(path){
if(!path){
return r.basePath;
}
return path.substring(0,path.lastIndexOf("/")+1);
}
function findCurrentScript(){
var scripts=contextWindow.document.getElementsByTagName("script");
var num=scripts.length-1;
var currScript;
var src;
while(num>=0){
currScript=scripts[num];
if((currScript.src||currScript.hasAttribute("src"))&&currScript.src.indexOf("Hyphenator")!==-1){
src=currScript.src;
break;
}
num-=1;
}
return src;
}
if(!!document.currentScript){
fullPath=document.currentScript.src;
}else{
fullPath=findCurrentScript();
}
r.basePath=getBasePath(fullPath);
if(fullPath&&fullPath.indexOf("bm=true")!==-1){
r.isBookmarklet=true;
}
if(window.location.href.indexOf(r.basePath)!==-1){
r.isLocal=true;
}
return r;
}());
var basePath=locality.basePath;
var isLocal=locality.isLocal;
var documentLoaded=false;
var persistentConfig=false;
var doFrames=false;
var dontHyphenate={"video":true,"audio":true,"script":true,"code":true,"pre":true,"img":true,"br":true,"samp":true,"kbd":true,"var":true,"abbr":true,"acronym":true,"sub":true,"sup":true,"button":true,"option":true,"label":true,"textarea":true,"input":true,"math":true,"svg":true,"style":true};
var enableCache=true;
var storageType="local";
var storage;
var enableReducedPatternSet=false;
var enableRemoteLoading=true;
var displayToggleBox=false;
var onError=function(e){
window.alert("Hyphenator.js says:\n\nAn Error occurred:\n"+e.message);
};
var onWarning=function(e){
window.console.log(e.message);
};
function createElem(tagname,context){
context=context||contextWindow;
var el;
if(window.document.createElementNS){
el=context.document.createElementNS("http://www.w3.org/1999/xhtml",tagname);
}else if(window.document.createElement){
el=context.document.createElement(tagname);
}
return el;
}
function forEachKey(o,f){
var k;
if(Object.hasOwnProperty("keys")){
Object.keys(o).forEach(f);
}else{
for(k in o){
if(o.hasOwnProperty(k)){
f(k);
}
}
}
}
var css3=false;
function css3_gethsupport(){
var support=false,
supportedBrowserLangs={},
property="",
checkLangSupport,
createLangSupportChecker=function(prefix){
var testStrings=[
"aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz",
"абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
"أبتثجحخدذرزسشصضطظعغفقكلمنهوي",
"աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆ",
"ঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ",
"ँंःअआइईउऊऋऌएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहऽािीुूृॄेैोौ्॒॑ॠॡॢॣ",
"αβγδεζηθικλμνξοπρσςτυφχψω",
"બહઅઆઇઈઉઊઋૠએઐઓઔાિીુૂૃૄૢૣેૈોૌકખગઘઙચછજઝઞટઠડઢણતથદધનપફસભમયરલળવશષ",
"ಂಃಅಆಇಈಉಊಋಌಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಱಲಳವಶಷಸಹಽಾಿೀುೂೃೄೆೇೈೊೋೌ್ೕೖೞೠೡ",
"ກຂຄງຈຊຍດຕຖທນບປຜຝພຟມຢຣລວສຫອຮະັາິີຶືຸູົຼເແໂໃໄ່້໊໋ໜໝ",
"ംഃഅആഇഈഉഊഋഌഎഏഐഒഓഔകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരറലളഴവശഷസഹാിീുൂൃെേൈൊോൌ്ൗൠൡൺൻർൽൾൿ",
"ଁଂଃଅଆଇଈଉଊଋଌଏଐଓଔକଖଗଘଙଚଛଜଝଞଟଠଡଢଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହାିୀୁୂୃେୈୋୌ୍ୗୠୡ",
"أبتثجحخدذرزسشصضطظعغفقكلمنهوي",
"ਁਂਃਅਆਇਈਉਊਏਐਓਔਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਲ਼ਵਸ਼ਸਹਾਿੀੁੂੇੈੋੌ੍ੰੱ",
"ஃஅஆஇஈஉஊஎஏஐஒஓஔகஙசஜஞடணதநனபமயரறலளழவஷஸஹாிீுூெேைொோௌ்ௗ",
"ఁంఃఅఆఇఈఉఊఋఌఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరఱలళవశషసహాిీుూృౄెేైొోౌ్ౕౖౠౡ",
"აიერთხტუფბლდნვკწსგზმქყშჩცძჭჯოღპჟჰ"
],
f=function(lang){
var shadow,
computedHeight,
bdy,
r=false;
if(supportedBrowserLangs.hasOwnProperty(lang)){
r=supportedBrowserLangs[lang];
}else if(supportedLangs.hasOwnProperty(lang)){
bdy=window.document.getElementsByTagName("body")[0];
shadow=createElem("div",window);
shadow.id="Hyphenator_LanguageChecker";
shadow.style.width="5em";
shadow.style.padding="0";
shadow.style.border="none";
shadow.style[prefix]="auto";
shadow.style.hyphens="auto";
shadow.style.fontSize="12px";
shadow.style.lineHeight="12px";
shadow.style.wordWrap="normal";
shadow.style.wordBreak="normal";
shadow.style.visibility="hidden";
shadow.lang=lang;
shadow.style["-webkit-locale"]="\""+lang+"\"";
shadow.innerHTML=testStrings[supportedLangs[lang].script];
bdy.appendChild(shadow);
computedHeight=shadow.offsetHeight;
bdy.removeChild(shadow);
r=!!(computedHeight>12);
supportedBrowserLangs[lang]=r;
}else{
r=false;
}
return r;
};
return f;
},
s;
if(window.getComputedStyle){
s=window.getComputedStyle(window.document.getElementsByTagName("body")[0],null);
if(s.hyphens!==undefined){
support=true;
property="hyphens";
checkLangSupport=createLangSupportChecker("hyphens");
}else if(s["-webkit-hyphens"]!==undefined){
support=true;
property="-webkit-hyphens";
checkLangSupport=createLangSupportChecker("-webkit-hyphens");
}else if(s.MozHyphens!==undefined){
support=true;
property="-moz-hyphens";
checkLangSupport=createLangSupportChecker("MozHyphens");
}else if(s["-ms-hyphens"]!==undefined){
support=true;
property="-ms-hyphens";
checkLangSupport=createLangSupportChecker("-ms-hyphens");
}
}
return{
support:support,
property:property,
supportedBrowserLangs:supportedBrowserLangs,
checkLangSupport:checkLangSupport
};
}
var css3_h9n;
var hyphenateClass="hyphenate";
var urlHyphenateClass="urlhyphenate";
var classPrefix="Hyphenator"+Math.round(Math.random()*1000);
var hideClass=classPrefix+"hide";
var hideClassRegExp=new RegExp("\\s?\\b"+hideClass+"\\b","g");
var unhideClass=classPrefix+"unhide";
var unhideClassRegExp=new RegExp("\\s?\\b"+unhideClass+"\\b","g");
var css3hyphenateClass=classPrefix+"css3hyphenate";
var css3hyphenateClassHandle;
var dontHyphenateClass="donthyphenate";
var min=6;
var leftmin=0;
var rightmin=0;
var compound="auto";
var orphanControl=1;
var isBookmarklet=locality.isBookmarklet;
var mainLanguage=null;
var defaultLanguage="";
var elements=(function(){
var makeElement=function(element){
return{
element:element,
hyphenated:false,
treated:false
};
},
makeElementCollection=function(){
var counters=[0,0],
list={},
add=function(el,lang){
var elo=makeElement(el);
if(!list.hasOwnProperty(lang)){
list[lang]=[];
}
list[lang].push(elo);
counters[0]+=1;
return elo;
},
each=function(fn){
forEachKey(list,function(k){
if(fn.length===2){
fn(k,list[k]);
}else{
fn(list[k]);
}
});
};
return{
counters:counters,
list:list,
add:add,
each:each
};
};
return makeElementCollection();
}());
var exceptions={};
var docLanguages={};
var url="(?:\\w*:\/\/)?(?:(?:\\w*:)?(?:\\w*)@)?(?:(?:(?:[\\d]{1,3}\\.){3}(?:[\\d]{1,3}))|(?:(?:www\\.|[a-zA-Z]\\.)?[a-zA-Z0-9\\-]+(?:\\.[a-z]{2,})+))(?::\\d*)?(?:\/[\\w#!:\\.?\\+=&%@!\\-]*)*";
var mail="[\\w-\\.]+@[\\w\\.]+";
var zeroWidthSpace=(function(){
var zws,ua=window.navigator.userAgent.toLowerCase();
zws=String.fromCharCode(8203);
if(ua.indexOf("msie 6")!==-1){
zws="";
}
if(ua.indexOf("opera")!==-1&&ua.indexOf("version/10.00")!==-1){
zws="";
}
return zws;
}());
var onBeforeWordHyphenation=function(word){
return word;
};
var onAfterWordHyphenation=function(word){
return word;
};
var onHyphenationDone=function(context){
return context;
};
var selectorFunction=false;
function flattenNodeList(nl){
var parentElements=[],
i=1,
j=0,
isParent=true;
parentElements.push(nl[0]);
while(i<nl.length){
while(j<parentElements.length){
if(parentElements[j].contains(nl[i])){
isParent=false;
break;
}
j+=1;
}
if(isParent){
parentElements.push(nl[i]);
}
isParent=true;
i+=1;
}
return parentElements;
}
function mySelectorFunction(hyphenateClass){
var tmp,
el=[],
i=0;
if(window.document.getElementsByClassName){
el=contextWindow.document.getElementsByClassName(hyphenateClass);
}else if(window.document.querySelectorAll){
el=contextWindow.document.querySelectorAll("."+hyphenateClass);
}else{
tmp=contextWindow.document.getElementsByTagName("*");
while(i<tmp.length){
if(tmp[i].className.indexOf(hyphenateClass)!==-1&&tmp[i].className.indexOf(dontHyphenateClass)===-1){
el.push(tmp[i]);
}
i+=1;
}
}
return el;
}
function selectElements(){
var elems;
if(selectorFunction){
elems=selectorFunction();
}else{
elems=mySelectorFunction(hyphenateClass);
}
if(elems.length!==0){
elems=flattenNodeList(elems);
}
return elems;
}
var intermediateState="hidden";
var unhide="wait";
var CSSEditors=[];
function makeCSSEdit(w){
w=w||window;
var doc=w.document,
sheet=(function(){
var i=0,
l=doc.styleSheets.length,
s,
element,
r=false;
while(i<l){
s=doc.styleSheets[i];
try{
if(!!s.cssRules){
r=s;
break;
}
}catch(ignore){}
i+=1;
}
if(r===false){
element=doc.createElement("style");
element.type="text/css";
doc.getElementsByTagName("head")[0].appendChild(element);
r=doc.styleSheets[doc.styleSheets.length-1];
}
return r;
}()),
changes=[],
findRule=function(sel){
var s,
rule,
sheets=w.document.styleSheets,
rules,
i=0,
j=0,
r=false;
while(i<sheets.length){
s=sheets[i];
try{
if(!!s.cssRules){
rules=s.cssRules;
}else if(!!s.rules){
rules=s.rules;
}
}catch(ignore){}
if(!!rules&&!!rules.length){
while(j<rules.length){
rule=rules[j];
if(rule.selectorText===sel){
r={
index:j,
rule:rule
};
}
j+=1;
}
}
i+=1;
}
return r;
},
addRule=function(sel,rulesStr){
var i,r;
if(!!sheet.insertRule){
if(!!sheet.cssRules){
i=sheet.cssRules.length;
}else{
i=0;
}
r=sheet.insertRule(sel+"{"+rulesStr+"}",i);
}else if(!!sheet.addRule){
if(!!sheet.rules){
i=sheet.rules.length;
}else{
i=0;
}
sheet.addRule(sel,rulesStr,i);
r=i;
}
return r;
},
removeRule=function(sheet,index){
if(sheet.deleteRule){
sheet.deleteRule(index);
}else{
sheet.removeRule(index);
}
};
return{
setRule:function(sel,rulesString){
var i,existingRule,cssText;
existingRule=findRule(sel);
if(!!existingRule){
if(!!existingRule.rule.cssText){
cssText=existingRule.rule.cssText;
}else{
cssText=existingRule.rule.style.cssText.toLowerCase();
}
if(cssText!==sel+" { "+rulesString+" }"){
if(cssText.indexOf(rulesString)!==-1){
existingRule.rule.style.visibility="";
}
i=addRule(sel,rulesString);
changes.push({sheet:sheet,index:i});
}
}else{
i=addRule(sel,rulesString);
changes.push({sheet:sheet,index:i});
}
},
clearChanges:function(){
var change=changes.pop();
while(!!change){
removeRule(change.sheet,change.index);
change=changes.pop();
}
}
};
}
var hyphen=String.fromCharCode(173);
var urlhyphen=zeroWidthSpace;
function hyphenateURL(url){
var tmp=url.replace(/([:\/.?#&\-_,;!@]+)/gi,"$&"+urlhyphen),
parts=tmp.split(urlhyphen),
i=0;
while(i<parts.length){
if(parts[i].length>(2*min)){
parts[i]=parts[i].replace(/(\w{3})(\w)/gi,"$1"+urlhyphen+"$2");
}
i+=1;
}
if(parts[parts.length-1]===""){
parts.pop();
}
return parts.join(urlhyphen);
}
var safeCopy=true;
var zeroTimeOut=(function(){
if(window.postMessage&&window.addEventListener){
return(function(){
var timeouts=[],
msg="Hyphenator_zeroTimeOut_message",
setZeroTimeOut=function(fn){
timeouts.push(fn);
window.postMessage(msg,"*");
},
handleMessage=function(event){
if(event.source===window&&event.data===msg){
event.stopPropagation();
if(timeouts.length>0){
timeouts.shift()();
}
}
};
window.addEventListener("message",handleMessage,true);
return setZeroTimeOut;
}());
}
return function(fn){
window.setTimeout(fn,0);
};
}());
var hyphRunFor={};
function removeHyphenationFromElement(el){
var h,u,i=0,n;
if(".\\+*?[^]$(){}=!<>|:-".indexOf(hyphen)!==-1){
h="\\"+hyphen;
}else{
h=hyphen;
}
if(".\\+*?[^]$(){}=!<>|:-".indexOf(urlhyphen)!==-1){
u="\\"+urlhyphen;
}else{
u=urlhyphen;
}
n=el.childNodes[i];
while(!!n){
if(n.nodeType===3){
n.data=n.data.replace(new RegExp(h,"g"),"");
n.data=n.data.replace(new RegExp(u,"g"),"");
}else if(n.nodeType===1){
removeHyphenationFromElement(n);
}
i+=1;
n=el.childNodes[i];
}
}
var copy=(function(){
var factory=function(){
var registeredElements=[];
var oncopyHandler=function(e){
e=e||window.event;
var shadow,
selection,
range,
rangeShadow,
restore,
target=e.target||e.srcElement,
currDoc=target.ownerDocument,
bdy=currDoc.getElementsByTagName("body")[0],
targetWindow=currDoc.defaultView||currDoc.parentWindow;
if(target.tagName&&dontHyphenate[target.tagName.toLowerCase()]){
return;
}
shadow=currDoc.createElement("div");
shadow.style.color=window.getComputedStyle
?targetWindow.getComputedStyle(bdy,null).backgroundColor
:"#FFFFFF";
shadow.style.fontSize="0px";
bdy.appendChild(shadow);
if(!!window.getSelection){
selection=targetWindow.getSelection();
range=selection.getRangeAt(0);
shadow.appendChild(range.cloneContents());
removeHyphenationFromElement(shadow);
selection.selectAllChildren(shadow);
restore=function(){
shadow.parentNode.removeChild(shadow);
selection.removeAllRanges();
selection.addRange(range);
};
}else{
selection=targetWindow.document.selection;
range=selection.createRange();
shadow.innerHTML=range.htmlText;
removeHyphenationFromElement(shadow);
rangeShadow=bdy.createTextRange();
rangeShadow.moveToElementText(shadow);
rangeShadow.select();
restore=function(){
shadow.parentNode.removeChild(shadow);
if(range.text!==""){
range.select();
}
};
}
zeroTimeOut(restore);
};
var removeOnCopy=function(){
var i=registeredElements.length-1;
while(i>=0){
if(window.removeEventListener){
registeredElements[i].removeEventListener("copy",oncopyHandler,true);
}else{
registeredElements[i].detachEvent("oncopy",oncopyHandler);
}
i-=1;
}
};
var reactivateOnCopy=function(){
var i=registeredElements.length-1;
while(i>=0){
if(window.addEventListener){
registeredElements[i].addEventListener("copy",oncopyHandler,true);
}else{
registeredElements[i].attachEvent("oncopy",oncopyHandler);
}
i-=1;
}
};
var registerOnCopy=function(el){
registeredElements.push(el);
if(window.addEventListener){
el.addEventListener("copy",oncopyHandler,true);
}else{
el.attachEvent("oncopy",oncopyHandler);
}
};
return{
oncopyHandler:oncopyHandler,
removeOnCopy:removeOnCopy,
registerOnCopy:registerOnCopy,
reactivateOnCopy:reactivateOnCopy
};
};
return(safeCopy
?factory()
:false);
}());
function runWhenLoaded(w,f){
var toplevel,
add=window.document.addEventListener
?"addEventListener"
:"attachEvent",
rem=window.document.addEventListener
?"removeEventListener"
:"detachEvent",
pre=window.document.addEventListener
?""
:"on";
function init(context){
if(hyphRunFor[context.location.href]){
onWarning(new Error("Warning: multiple execution of Hyphenator.run() – This may slow down the script!"));
}
contextWindow=context||window;
f();
hyphRunFor[contextWindow.location.href]=true;
}
function doScrollCheck(){
try{
w.document.documentElement.doScroll("left");
}catch(ignore){
window.setTimeout(doScrollCheck,1);
return;
}
if(!hyphRunFor[w.location.href]){
documentLoaded=true;
init(w);
}
}
function doOnEvent(e){
var i=0,
fl,
haveAccess;
if(!!e&&e.type==="readystatechange"&&w.document.readyState!=="interactive"&&w.document.readyState!=="complete"){
return;
}
w.document[rem](pre+"DOMContentLoaded",doOnEvent,false);
w.document[rem](pre+"readystatechange",doOnEvent,false);
fl=w.frames.length;
if(fl===0||!doFrames){
w[rem](pre+"load",doOnEvent,false);
documentLoaded=true;
init(w);
}else if(doFrames&&fl>0){
if(!!e&&e.type==="load"){
w[rem](pre+"load",doOnEvent,false);
while(i<fl){
haveAccess=undefined;
try{
haveAccess=w.frames[i].document.toString();
}catch(ignore){
haveAccess=undefined;
}
if(!!haveAccess){
runWhenLoaded(w.frames[i],f);
}
i+=1;
}
init(w);
}
}
}
if(documentLoaded||w.document.readyState==="complete"){
documentLoaded=true;
doOnEvent({type:"load"});
}else{
w.document[add](pre+"DOMContentLoaded",doOnEvent,false);
w.document[add](pre+"readystatechange",doOnEvent,false);
w[add](pre+"load",doOnEvent,false);
toplevel=false;
try{
toplevel=!window.frameElement;
}catch(ignore){}
if(toplevel&&w.document.documentElement.doScroll){
doScrollCheck();
}
}
}
function getLang(el,fallback){
try{
return!!el.getAttribute("lang")
?el.getAttribute("lang").toLowerCase()
:!!el.getAttribute("xml:lang")
?el.getAttribute("xml:lang").toLowerCase()
:el.tagName.toLowerCase()!=="html"
?getLang(el.parentNode,fallback)
:fallback
?mainLanguage
:null;
}catch(ignore){
return fallback
?mainLanguage
:null;
}
}
function autoSetMainLanguage(w){
w=w||contextWindow;
var el=w.document.getElementsByTagName("html")[0],
m=w.document.getElementsByTagName("meta"),
i=0,
getLangFromUser=function(){
var text="";
var ul="";
var languageHint=(function(){
var r="";
forEachKey(supportedLangs,function(k){
r+=k+", ";
});
r=r.substring(0,r.length-2);
return r;
}());
ul=window.navigator.language||window.navigator.userLanguage;
ul=ul.substring(0,2);
if(!!supportedLangs[ul]&&supportedLangs[ul].prompt!==""){
text=supportedLangs[ul].prompt;
}else{
text=supportedLangs.en.prompt;
}
text+=" (ISO 639-1)\n\n"+languageHint;
return window.prompt(window.unescape(text),ul).toLowerCase();
};
mainLanguage=getLang(el,false);
if(!mainLanguage){
while(i<m.length){
if(!!m[i].getAttribute("http-equiv")&&(m[i].getAttribute("http-equiv").toLowerCase()==="content-language")){
mainLanguage=m[i].getAttribute("content").toLowerCase();
}
if(!!m[i].getAttribute("name")&&(m[i].getAttribute("name").toLowerCase()==="dc.language")){
mainLanguage=m[i].getAttribute("content").toLowerCase();
}
if(!!m[i].getAttribute("name")&&(m[i].getAttribute("name").toLowerCase()==="language")){
mainLanguage=m[i].getAttribute("content").toLowerCase();
}
i+=1;
}
}
if(!mainLanguage&&doFrames&&(!!contextWindow.frameElement)){
autoSetMainLanguage(window.parent);
}
if(!mainLanguage&&defaultLanguage!==""){
mainLanguage=defaultLanguage;
}
if(!mainLanguage){
mainLanguage=getLangFromUser();
}
el.lang=mainLanguage;
}
function gatherDocumentInfos(){
var elToProcess,
urlhyphenEls,
tmp,
i=0;
function process(el,pLang,isChild){
var n,
j=0,
hyphenate=true,
eLang,
useCSS3=function(){
css3hyphenateClassHandle=makeCSSEdit(contextWindow);
css3hyphenateClassHandle.setRule("."+css3hyphenateClass,css3_h9n.property+": auto;");
css3hyphenateClassHandle.setRule("."+dontHyphenateClass,css3_h9n.property+": manual;");
if((eLang!==pLang)&&css3_h9n.property.indexOf("webkit")!==-1){
css3hyphenateClassHandle.setRule("."+css3hyphenateClass,"-webkit-locale : "+eLang+";");
}
el.className=el.className+" "+css3hyphenateClass;
},
useHyphenator=function(){
if(isBookmarklet&&eLang!==mainLanguage){
return;
}
if(supportedLangs.hasOwnProperty(eLang)){
docLanguages[eLang]=true;
}else{
if(supportedLangs.hasOwnProperty(eLang.split("-")[0])){
eLang=eLang.split("-")[0];
docLanguages[eLang]=true;
}else if(!isBookmarklet){
hyphenate=false;
onError(new Error("Language \""+eLang+"\" is not yet supported."));
}
}
if(hyphenate){
if(intermediateState==="hidden"){
el.className=el.className+" "+hideClass;
}
elements.add(el,eLang);
}
};
isChild=isChild||false;
if(el.lang&&typeof el.lang==="string"){
eLang=el.lang.toLowerCase();
}else if(!!pLang&&pLang!==""){
eLang=pLang.toLowerCase();
}else{
eLang=getLang(el,true);
}
if(!isChild){
if(css3&&css3_h9n.support&&!!css3_h9n.checkLangSupport(eLang)){
useCSS3();
}else{
if(safeCopy){
copy.registerOnCopy(el);
}
useHyphenator();
}
}else{
if(eLang!==pLang){
if(css3&&css3_h9n.support&&!!css3_h9n.checkLangSupport(eLang)){
useCSS3();
}else{
useHyphenator();
}
}else{
if(!css3||!css3_h9n.support||!css3_h9n.checkLangSupport(eLang)){
useHyphenator();
}
}
}
n=el.childNodes[j];
while(!!n){
if(
n.nodeType===1&&!dontHyphenate[n.nodeName.toLowerCase()]&&
n.className.indexOf(dontHyphenateClass)===-1&&
n.className.indexOf(urlHyphenateClass)===-1&&!elToProcess[n]
){
process(n,eLang,true);
}
j+=1;
n=el.childNodes[j];
}
}
function processUrlStyled(el){
var n,j=0;
n=el.childNodes[j];
while(!!n){
if(
n.nodeType===1&&!dontHyphenate[n.nodeName.toLowerCase()]&&
n.className.indexOf(dontHyphenateClass)===-1&&
n.className.indexOf(hyphenateClass)===-1&&!urlhyphenEls[n]
){
processUrlStyled(n);
}else if(n.nodeType===3){
if(safeCopy){
copy.registerOnCopy(n.parentNode);
}
elements.add(n.parentNode,"urlstyled");
}
j+=1;
n=el.childNodes[j];
}
}
if(css3){
css3_h9n=css3_gethsupport();
}
if(isBookmarklet){
elToProcess=contextWindow.document.getElementsByTagName("body")[0];
process(elToProcess,mainLanguage,false);
}else{
if(!css3&&intermediateState==="hidden"){
CSSEditors.push(makeCSSEdit(contextWindow));
CSSEditors[CSSEditors.length-1].setRule("."+hyphenateClass,"visibility: hidden;");
CSSEditors[CSSEditors.length-1].setRule("."+hideClass,"visibility: hidden;");
CSSEditors[CSSEditors.length-1].setRule("."+unhideClass,"visibility: visible;");
}
elToProcess=selectElements();
tmp=elToProcess[i];
while(!!tmp){
process(tmp,"",false);
i+=1;
tmp=elToProcess[i];
}
urlhyphenEls=mySelectorFunction(urlHyphenateClass);
i=0;
tmp=urlhyphenEls[i];
while(!!tmp){
processUrlStyled(tmp);
i+=1;
tmp=urlhyphenEls[i];
}
}
if(elements.counters[0]===0){
i=0;
while(i<CSSEditors.length){
CSSEditors[i].clearChanges();
i+=1;
}
onHyphenationDone(contextWindow.location.href);
}
}
function makeCharMap(){
var int2code=[],
code2int={},
add=function(newValue){
if(!code2int[newValue]){
int2code.push(newValue);
code2int[newValue]=int2code.length-1;
}
};
return{
int2code:int2code,
code2int:code2int,
add:add
};
}
function makeValueStore(len){
var indexes=(function(){
var arr;
if(Object.prototype.hasOwnProperty.call(window,"Uint32Array")){
arr=new window.Uint32Array(3);
arr[0]=1;
arr[1]=1;
arr[2]=1;
}else{
arr=[1,1,1];
}
return arr;
}()),
keys=(function(){
var i,r;
if(Object.prototype.hasOwnProperty.call(window,"Uint8Array")){
return new window.Uint8Array(len);
}
r=[];
r.length=len;
i=r.length-1;
while(i>=0){
r[i]=0;
i-=1;
}
return r;
}()),
add=function(p){
keys[indexes[1]]=p;
indexes[2]=indexes[1];
indexes[1]+=1;
},
add0=function(){
indexes[1]+=1;
},
finalize=function(){
var start=indexes[0];
keys[indexes[2]+1]=255;
indexes[0]=indexes[2]+2;
indexes[1]=indexes[0];
return start;
};
return{
keys:keys,
add:add,
add0:add0,
finalize:finalize
};
}
function convertPatternsToArray(lo){
var trieNextEmptyRow=0,
i,
charMapc2i,
valueStore,
indexedTrie,
trieRowLength,
extract=function(patternSizeInt,patterns){
var charPos=0,
charCode=0,
mappedCharCode=0,
rowStart=0,
nextRowStart=0,
prevWasDigit=false;
while(charPos<patterns.length){
charCode=patterns.charCodeAt(charPos);
if((charPos+1)%patternSizeInt!==0){
if(charCode<=57&&charCode>=49){
valueStore.add(charCode-48);
prevWasDigit=true;
}else{
if(!prevWasDigit){
valueStore.add0();
}
prevWasDigit=false;
if(nextRowStart===-1){
nextRowStart=trieNextEmptyRow+trieRowLength;
trieNextEmptyRow=nextRowStart;
indexedTrie[rowStart+mappedCharCode*2]=nextRowStart;
}
mappedCharCode=charMapc2i[charCode];
rowStart=nextRowStart;
nextRowStart=indexedTrie[rowStart+mappedCharCode*2];
if(nextRowStart===0){
indexedTrie[rowStart+mappedCharCode*2]=-1;
nextRowStart=-1;
}
}
}else{
if(charCode<=57&&charCode>=49){
valueStore.add(charCode-48);
indexedTrie[rowStart+mappedCharCode*2+1]=valueStore.finalize();
}else{
if(!prevWasDigit){
valueStore.add0();
}
valueStore.add0();
if(nextRowStart===-1){
nextRowStart=trieNextEmptyRow+trieRowLength;
trieNextEmptyRow=nextRowStart;
indexedTrie[rowStart+mappedCharCode*2]=nextRowStart;
}
mappedCharCode=charMapc2i[charCode];
rowStart=nextRowStart;
if(indexedTrie[rowStart+mappedCharCode*2]===0){
indexedTrie[rowStart+mappedCharCode*2]=-1;
}
indexedTrie[rowStart+mappedCharCode*2+1]=valueStore.finalize();
}
rowStart=0;
nextRowStart=0;
prevWasDigit=false;
}
charPos+=1;
}
};
lo.charMap=makeCharMap();
i=0;
while(i<lo.patternChars.length){
lo.charMap.add(lo.patternChars.charCodeAt(i));
i+=1;
}
charMapc2i=lo.charMap.code2int;
valueStore=makeValueStore(lo.valueStoreLength);
lo.valueStore=valueStore;
if(Object.prototype.hasOwnProperty.call(window,"Int32Array")){
lo.indexedTrie=new window.Int32Array(lo.patternArrayLength*2);
}else{
lo.indexedTrie=[];
lo.indexedTrie.length=lo.patternArrayLength*2;
i=lo.indexedTrie.length-1;
while(i>=0){
lo.indexedTrie[i]=0;
i-=1;
}
}
indexedTrie=lo.indexedTrie;
trieRowLength=lo.charMap.int2code.length*2;
forEachKey(lo.patterns,function(i){
extract(parseInt(i,10),lo.patterns[i]);
});
}
function recreatePattern(pattern,nodePoints){
var r=[],
c=pattern.split(""),
i=0;
while(i<=c.length){
if(nodePoints[i]&&nodePoints[i]!==0){
r.push(nodePoints[i]);
}
if(c[i]){
r.push(c[i]);
}
i+=1;
}
return r.join("");
}
function convertExceptionsToObject(exc){
var w=exc.split(", "),
r={},
i=0,
l=w.length,
key;
while(i<l){
key=w[i].replace(/-/g,"");
if(!r.hasOwnProperty(key)){
r[key]=w[i];
}
i+=1;
}
return r;
}
function loadPatterns(lang,cb){
var location,xhr,head,script,done=false;
function getXHRforIElt6(){
try{
xhr=new window.ActiveXObject("Msxml2.XMLHTTP");
}catch(ignore){
xhr=null;
}
}
function getXHRforIElt10(){
try{
xhr=new window.ActiveXObject("Microsoft.XMLHTTP");
}catch(ignore){
getXHRforIElt6();
}
}
if(supportedLangs.hasOwnProperty(lang)&&!Hyphenator.languages[lang]){
location=basePath+"patterns/"+supportedLangs[lang].file;
}else{
return;
}
if(isLocal&&!isBookmarklet){
xhr=null;
try{
xhr=new window.XMLHttpRequest();
}catch(ignore){
getXHRforIElt10();
}
if(xhr){
xhr.open("HEAD",location,true);
xhr.setRequestHeader("Cache-Control","no-cache");
xhr.onreadystatechange=function(){
if(xhr.readyState===2){
if(xhr.status>=400){
onError(new Error("Could not load\n"+location));
delete docLanguages[lang];
return;
}
xhr.abort();
}
};
xhr.send(null);
}
}
if(createElem){
head=window.document.getElementsByTagName("head").item(0);
script=createElem("script",window);
script.src=location;
script.type="text/javascript";
script.charset="utf8";
script.onreadystatechange=function(){
if(!done&&(!script.readyState||script.readyState==="loaded"||script.readyState==="complete")){
done=true;
cb();
script.onreadystatechange=null;
script.onload=null;
if(head&&script.parentNode){
head.removeChild(script);
}
}
};
script.onload=script.onreadystatechange;
head.appendChild(script);
}
}
function createWordRegExp(lang){
var lo=Hyphenator.languages[lang],
wrd="";
if(String.prototype.normalize){
wrd="[\\w"+lo.specialChars+lo.specialChars.normalize("NFD")+hyphen+String.fromCharCode(8204)+"-]{"+min+",}(?!:\\/\\/)";
}else{
wrd="[\\w"+lo.specialChars+hyphen+String.fromCharCode(8204)+"-]{"+min+",}(?!:\\/\\/)";
}
return wrd;
}
function prepareLanguagesObj(lang){
var lo=Hyphenator.languages[lang];
if(!lo.prepared){
if(enableCache){
lo.cache={};
}
if(enableReducedPatternSet){
lo.redPatSet={};
}
if(leftmin>lo.leftmin){
lo.leftmin=leftmin;
}
if(rightmin>lo.rightmin){
lo.rightmin=rightmin;
}
if(lo.hasOwnProperty("exceptions")){
Hyphenator.addExceptions(lang,lo.exceptions);
delete lo.exceptions;
}
if(exceptions.hasOwnProperty("global")){
if(exceptions.hasOwnProperty(lang)){
exceptions[lang]+=", "+exceptions.global;
}else{
exceptions[lang]=exceptions.global;
}
}
if(exceptions.hasOwnProperty(lang)){
lo.exceptions=convertExceptionsToObject(exceptions[lang]);
delete exceptions[lang];
}else{
lo.exceptions={};
}
convertPatternsToArray(lo);
lo.genRegExp=new RegExp("("+createWordRegExp(lang)+")|("+url+")|("+mail+")","gi");
lo.prepared=true;
}
}
function prepare(callback){
var tmp1;
function languagesLoaded(){
forEachKey(docLanguages,function(l){
if(Hyphenator.languages.hasOwnProperty(l)){
delete docLanguages[l];
if(!!storage){
storage.setItem(l,window.JSON.stringify(Hyphenator.languages[l]));
}
prepareLanguagesObj(l);
callback(l);
}
});
}
if(!enableRemoteLoading){
forEachKey(Hyphenator.languages,function(lang){
prepareLanguagesObj(lang);
});
callback("*");
return;
}
callback("urlstyled");
forEachKey(docLanguages,function(lang){
if(!!storage&&storage.test(lang)){
Hyphenator.languages[lang]=window.JSON.parse(storage.getItem(lang));
prepareLanguagesObj(lang);
if(exceptions.hasOwnProperty("global")){
tmp1=convertExceptionsToObject(exceptions.global);
forEachKey(tmp1,function(tmp2){
Hyphenator.languages[lang].exceptions[tmp2]=tmp1[tmp2];
});
}
if(exceptions.hasOwnProperty(lang)){
tmp1=convertExceptionsToObject(exceptions[lang]);
forEachKey(tmp1,function(tmp2){
Hyphenator.languages[lang].exceptions[tmp2]=tmp1[tmp2];
});
delete exceptions[lang];
}
Hyphenator.languages[lang].genRegExp=new RegExp("("+createWordRegExp(lang)+")|("+url+")|("+mail+")","gi");
if(enableCache){
if(!Hyphenator.languages[lang].cache){
Hyphenator.languages[lang].cache={};
}
}
delete docLanguages[lang];
callback(lang);
}else{
loadPatterns(lang,languagesLoaded);
}
});
languagesLoaded();
}
var toggleBox=function(){
var bdy,
myTextNode,
text=(Hyphenator.doHyphenation
?"Hy-phen-a-tion"
:"Hyphenation"),
myBox=contextWindow.document.getElementById("HyphenatorToggleBox");
if(!!myBox){
myBox.firstChild.data=text;
}else{
bdy=contextWindow.document.getElementsByTagName("body")[0];
myBox=createElem("div",contextWindow);
myBox.setAttribute("id","HyphenatorToggleBox");
myBox.setAttribute("class",dontHyphenateClass);
myTextNode=contextWindow.document.createTextNode(text);
myBox.appendChild(myTextNode);
myBox.onclick=Hyphenator.toggleHyphenation;
myBox.style.position="absolute";
myBox.style.top="0px";
myBox.style.right="0px";
myBox.style.zIndex="1000";
myBox.style.margin="0";
myBox.style.backgroundColor="#AAAAAA";
myBox.style.color="#FFFFFF";
myBox.style.font="6pt Arial";
myBox.style.letterSpacing="0.2em";
myBox.style.padding="3px";
myBox.style.cursor="pointer";
myBox.style.WebkitBorderBottomLeftRadius="4px";
myBox.style.MozBorderRadiusBottomleft="4px";
myBox.style.borderBottomLeftRadius="4px";
bdy.appendChild(myBox);
}
};
function doCharSubst(loCharSubst,w){
var r=w;
forEachKey(loCharSubst,function(subst){
r=r.replace(new RegExp(subst,"g"),loCharSubst[subst]);
});
return r;
}
var wwAsMappedCharCodeStore=(function(){
if(Object.prototype.hasOwnProperty.call(window,"Int32Array")){
return new window.Int32Array(64);
}
return[];
}());
var wwhpStore=(function(){
var r;
if(Object.prototype.hasOwnProperty.call(window,"Uint8Array")){
r=new window.Uint8Array(64);
}else{
r=[];
}
return r;
}());
function hyphenateCompound(lo,lang,word){
var hw,parts,i=0;
switch(compound){
case"auto":
parts=word.split("-");
while(i<parts.length){
if(parts[i].length>=min){
parts[i]=hyphenateWord(lo,lang,parts[i]);
}
i+=1;
}
hw=parts.join("-");
break;
case"all":
parts=word.split("-");
while(i<parts.length){
if(parts[i].length>=min){
parts[i]=hyphenateWord(lo,lang,parts[i]);
}
i+=1;
}
hw=parts.join("-"+zeroWidthSpace);
break;
case"hyphen":
hw=word.replace("-","-"+zeroWidthSpace);
break;
default:
onError(new Error("Hyphenator.settings: compound setting \""+compound+"\" not known."));
}
return hw;
}
function hyphenateWord(lo,lang,word){
var pattern="",
ww,
wwlen,
wwhp=wwhpStore,
pstart=0,
plen,
hp,
hpc,
wordLength=word.length,
hw="",
charMap=lo.charMap.code2int,
charCode,
mappedCharCode,
row=0,
link=0,
value=0,
values,
indexedTrie=lo.indexedTrie,
valueStore=lo.valueStore.keys,
wwAsMappedCharCode=wwAsMappedCharCodeStore;
word=onBeforeWordHyphenation(word,lang);
if(word===""){
hw="";
}else if(enableCache&&lo.cache&&lo.cache.hasOwnProperty(word)){
hw=lo.cache[word];
}else if(word.indexOf(hyphen)!==-1){
hw=word;
}else if(lo.exceptions.hasOwnProperty(word)){
hw=lo.exceptions[word].replace(/-/g,hyphen);
}else if(word.indexOf("-")!==-1){
hw=hyphenateCompound(lo,lang,word);
}else{
ww=word.toLowerCase();
if(String.prototype.normalize){
ww=ww.normalize("NFC");
}
if(lo.hasOwnProperty("charSubstitution")){
ww=doCharSubst(lo.charSubstitution,ww);
}
if(word.indexOf("'")!==-1){
ww=ww.replace(/'/g,"’");
}
ww="_"+ww+"_";
wwlen=ww.length;
while(pstart<wwlen){
wwhp[pstart]=0;
charCode=ww.charCodeAt(pstart);
wwAsMappedCharCode[pstart]=charMap.hasOwnProperty(charCode)
?charMap[charCode]
:-1;
pstart+=1;
}
pstart=0;
while(pstart<wwlen){
row=0;
pattern="";
plen=pstart;
while(plen<wwlen){
mappedCharCode=wwAsMappedCharCode[plen];
if(mappedCharCode===-1){
break;
}
if(enableReducedPatternSet){
pattern+=ww.charAt(plen);
}
link=indexedTrie[row+mappedCharCode*2];
value=indexedTrie[row+mappedCharCode*2+1];
if(value>0){
hpc=0;
hp=valueStore[value+hpc];
while(hp!==255){
if(hp>wwhp[pstart+hpc]){
wwhp[pstart+hpc]=hp;
}
hpc+=1;
hp=valueStore[value+hpc];
}
if(enableReducedPatternSet){
if(!lo.redPatSet){
lo.redPatSet={};
}
if(valueStore.subarray){
values=valueStore.subarray(value,value+hpc);
}else{
values=valueStore.slice(value,value+hpc);
}
lo.redPatSet[pattern]=recreatePattern(pattern,values);
}
}
if(link>0){
row=link;
}else{
break;
}
plen+=1;
}
pstart+=1;
}
hp=0;
while(hp<wordLength){
if(hp>=lo.leftmin&&hp<=(wordLength-lo.rightmin)&&(wwhp[hp+1]%2)!==0){
hw+=hyphen+word.charAt(hp);
}else{
hw+=word.charAt(hp);
}
hp+=1;
}
}
hw=onAfterWordHyphenation(hw,lang);
if(enableCache){
lo.cache[word]=hw;
}
return hw;
}
function checkIfAllDone(){
var allDone=true,
i=0,
doclist={};
elements.each(function(ellist){
var j=0,
l=ellist.length;
while(j<l){
allDone=allDone&&ellist[j].hyphenated;
if(!doclist.hasOwnProperty(ellist[j].element.baseURI)){
doclist[ellist[j].element.ownerDocument.location.href]=true;
}
doclist[ellist[j].element.ownerDocument.location.href]=doclist[ellist[j].element.ownerDocument.location.href]&&ellist[j].hyphenated;
j+=1;
}
});
if(allDone){
if(intermediateState==="hidden"&&unhide==="progressive"){
elements.each(function(ellist){
var j=0,
l=ellist.length,
el;
while(j<l){
el=ellist[j].element;
el.className=el.className.replace(unhideClassRegExp,"");
if(el.className===""){
el.removeAttribute("class");
}
j+=1;
}
});
}
while(i<CSSEditors.length){
CSSEditors[i].clearChanges();
i+=1;
}
forEachKey(doclist,function(doc){
onHyphenationDone(doc);
});
if(!!storage&&storage.deferred.length>0){
i=0;
while(i<storage.deferred.length){
storage.deferred[i].call();
i+=1;
}
storage.deferred=[];
}
}
}
function controlOrphans(ignore,leadingWhiteSpace,lastWord,trailingWhiteSpace){
var h=hyphen;
if(".\\+*?[^]$(){}=!<>|:-".indexOf(hyphen)!==-1){
h="\\"+hyphen;
}else{
h=hyphen;
}
if(orphanControl===3&&leadingWhiteSpace===" "){
leadingWhiteSpace=String.fromCharCode(160);
}
return leadingWhiteSpace+lastWord.replace(new RegExp(h+"|"+zeroWidthSpace,"g"),"")+trailingWhiteSpace;
}
function hyphenateElement(lang,elo){
var el=elo.element,
hyphenate,
n,
i,
lo;
if(lang==="urlstyled"&&Hyphenator.doHyphenation){
i=0;
n=el.childNodes[i];
while(!!n){
if(
n.nodeType===3
&&(/\S/).test(n.data)
){
n.data=hyphenateURL(n.data);
}
i+=1;
n=el.childNodes[i];
}
}else if(Hyphenator.languages.hasOwnProperty(lang)&&Hyphenator.doHyphenation){
lo=Hyphenator.languages[lang];
hyphenate=function(match,word,url,mail){
var r;
if(!!url||!!mail){
r=hyphenateURL(match);
}else{
r=hyphenateWord(lo,lang,word);
}
return r;
};
i=0;
n=el.childNodes[i];
while(!!n){
if(
n.nodeType===3
&&(/\S/).test(n.data)
&&n.data.length>=min
){
n.data=n.data.replace(lo.genRegExp,hyphenate);
if(orphanControl!==1){
n.data=n.data.replace(/(\u0020*)(\S+)(\s*)$/,controlOrphans);
}
}
i+=1;
n=el.childNodes[i];
}
}
if(intermediateState==="hidden"&&unhide==="wait"){
el.className=el.className.replace(hideClassRegExp,"");
if(el.className===""){
el.removeAttribute("class");
}
}
if(intermediateState==="hidden"&&unhide==="progressive"){
el.className=el.className.replace(hideClassRegExp," "+unhideClass);
}
elo.hyphenated=true;
elements.counters[1]+=1;
if(elements.counters[0]<=elements.counters[1]){
checkIfAllDone();
}
}
function hyphenateLanguageElements(lang){
var i=0,
l;
if(lang==="*"){
elements.each(function(lang,ellist){
var j=0,
le=ellist.length;
while(j<le){
hyphenateElement(lang,ellist[j]);
j+=1;
}
});
}else{
if(elements.list.hasOwnProperty(lang)){
l=elements.list[lang].length;
while(i<l){
hyphenateElement(lang,elements.list[lang][i]);
i+=1;
}
}
}
}
function removeHyphenationFromDocument(){
elements.each(function(ellist){
var i=0,
l=ellist.length;
while(i<l){
removeHyphenationFromElement(ellist[i].element);
ellist[i].hyphenated=false;
i+=1;
}
});
}
function createStorage(){
var s;
function makeStorage(s){
var store=s,
prefix="Hyphenator_"+Hyphenator.version+"_",
deferred=[],
test=function(name){
var val=store.getItem(prefix+name);
return!!val;
},
getItem=function(name){
return store.getItem(prefix+name);
},
setItem=function(name,value){
try{
store.setItem(prefix+name,value);
}catch(e){
onError(e);
}
};
return{
deferred:deferred,
test:test,
getItem:getItem,
setItem:setItem
};
}
try{
if(
storageType!=="none"&&
window.JSON!==undefined&&
window.localStorage!==undefined&&
window.sessionStorage!==undefined&&
window.JSON.stringify!==undefined&&
window.JSON.parse!==undefined
){
switch(storageType){
case"session":
s=window.sessionStorage;
break;
case"local":
s=window.localStorage;
break;
default:
s=undefined;
}
s.setItem("storageTest","1");
s.removeItem("storageTest");
}
}catch(ignore){
s=undefined;
}
if(s){
storage=makeStorage(s);
}else{
storage=undefined;
}
}
function storeConfiguration(){
if(!storage){
return;
}
var settings={
"STORED":true,
"classname":hyphenateClass,
"urlclassname":urlHyphenateClass,
"donthyphenateclassname":dontHyphenateClass,
"minwordlength":min,
"hyphenchar":hyphen,
"urlhyphenchar":urlhyphen,
"togglebox":toggleBox,
"displaytogglebox":displayToggleBox,
"remoteloading":enableRemoteLoading,
"enablecache":enableCache,
"enablereducedpatternset":enableReducedPatternSet,
"onhyphenationdonecallback":onHyphenationDone,
"onerrorhandler":onError,
"onwarninghandler":onWarning,
"intermediatestate":intermediateState,
"selectorfunction":selectorFunction||mySelectorFunction,
"safecopy":safeCopy,
"doframes":doFrames,
"storagetype":storageType,
"orphancontrol":orphanControl,
"dohyphenation":Hyphenator.doHyphenation,
"persistentconfig":persistentConfig,
"defaultlanguage":defaultLanguage,
"useCSS3hyphenation":css3,
"unhide":unhide,
"onbeforewordhyphenation":onBeforeWordHyphenation,
"onafterwordhyphenation":onAfterWordHyphenation,
"leftmin":leftmin,
"rightmin":rightmin,
"compound":compound
};
storage.setItem("config",window.JSON.stringify(settings));
}
function restoreConfiguration(){
var settings;
if(storage.test("config")){
settings=window.JSON.parse(storage.getItem("config"));
Hyphenator.config(settings);
}
}
var version='5.3.0';
var doHyphenation=true;
var languages={};
function config(obj){
var assert=function(name,type){
var r,
t;
t=typeof obj[name];
if(t===type){
r=true;
}else{
onError(new Error("Config onError: "+name+" must be of type "+type));
r=false;
}
return r;
};
if(obj.hasOwnProperty("storagetype")){
if(assert("storagetype","string")){
storageType=obj.storagetype;
}
if(!storage){
createStorage();
}
}
if(!obj.hasOwnProperty("STORED")&&storage&&obj.hasOwnProperty("persistentconfig")&&obj.persistentconfig===true){
restoreConfiguration();
}
forEachKey(obj,function(key){
switch(key){
case"STORED":
break;
case"classname":
if(assert("classname","string")){
hyphenateClass=obj[key];
}
break;
case"urlclassname":
if(assert("urlclassname","string")){
urlHyphenateClass=obj[key];
}
break;
case"donthyphenateclassname":
if(assert("donthyphenateclassname","string")){
dontHyphenateClass=obj[key];
}
break;
case"minwordlength":
if(assert("minwordlength","number")){
min=obj[key];
}
break;
case"hyphenchar":
if(assert("hyphenchar","string")){
if(obj.hyphenchar==="&shy;"){
obj.hyphenchar=String.fromCharCode(173);
}
hyphen=obj[key];
}
break;
case"urlhyphenchar":
if(obj.hasOwnProperty("urlhyphenchar")){
if(assert("urlhyphenchar","string")){
urlhyphen=obj[key];
}
}
break;
case"togglebox":
if(assert("togglebox","function")){
toggleBox=obj[key];
}
break;
case"displaytogglebox":
if(assert("displaytogglebox","boolean")){
displayToggleBox=obj[key];
}
break;
case"remoteloading":
if(assert("remoteloading","boolean")){
enableRemoteLoading=obj[key];
}
break;
case"enablecache":
if(assert("enablecache","boolean")){
enableCache=obj[key];
}
break;
case"enablereducedpatternset":
if(assert("enablereducedpatternset","boolean")){
enableReducedPatternSet=obj[key];
}
break;
case"onhyphenationdonecallback":
if(assert("onhyphenationdonecallback","function")){
onHyphenationDone=obj[key];
}
break;
case"onerrorhandler":
if(assert("onerrorhandler","function")){
onError=obj[key];
}
break;
case"onwarninghandler":
if(assert("onwarninghandler","function")){
onWarning=obj[key];
}
break;
case"intermediatestate":
if(assert("intermediatestate","string")){
intermediateState=obj[key];
}
break;
case"selectorfunction":
if(assert("selectorfunction","function")){
selectorFunction=obj[key];
}
break;
case"safecopy":
if(assert("safecopy","boolean")){
safeCopy=obj[key];
}
break;
case"doframes":
if(assert("doframes","boolean")){
doFrames=obj[key];
}
break;
case"storagetype":
if(assert("storagetype","string")){
storageType=obj[key];
}
break;
case"orphancontrol":
if(assert("orphancontrol","number")){
orphanControl=obj[key];
}
break;
case"dohyphenation":
if(assert("dohyphenation","boolean")){
Hyphenator.doHyphenation=obj[key];
}
break;
case"persistentconfig":
if(assert("persistentconfig","boolean")){
persistentConfig=obj[key];
}
break;
case"defaultlanguage":
if(assert("defaultlanguage","string")){
defaultLanguage=obj[key];
}
break;
case"useCSS3hyphenation":
if(assert("useCSS3hyphenation","boolean")){
css3=obj[key];
}
break;
case"unhide":
if(assert("unhide","string")){
unhide=obj[key];
}
break;
case"onbeforewordhyphenation":
if(assert("onbeforewordhyphenation","function")){
onBeforeWordHyphenation=obj[key];
}
break;
case"onafterwordhyphenation":
if(assert("onafterwordhyphenation","function")){
onAfterWordHyphenation=obj[key];
}
break;
case"leftmin":
if(assert("leftmin","number")){
leftmin=obj[key];
}
break;
case"rightmin":
if(assert("rightmin","number")){
rightmin=obj[key];
}
break;
case"compound":
if(assert("compound","string")){
compound=obj[key];
}
break;
default:
onError(new Error("Hyphenator.config: property "+key+" not known."));
}
});
if(storage&&persistentConfig){
storeConfiguration();
}
}
function run(){
var process=function(){
try{
if(contextWindow.document.getElementsByTagName("frameset").length>0){
return;
}
autoSetMainLanguage(undefined);
gatherDocumentInfos();
if(displayToggleBox){
toggleBox();
}
prepare(hyphenateLanguageElements);
}catch(e){
onError(e);
}
};
if(!storage){
createStorage();
}
runWhenLoaded(window,process);
}
function addExceptions(lang,words){
if(lang===""){
lang="global";
}
if(exceptions.hasOwnProperty(lang)){
exceptions[lang]+=", "+words;
}else{
exceptions[lang]=words;
}
}
function hyphenate(target,lang){
var turnout,n,i,lo;
lo=Hyphenator.languages[lang];
if(Hyphenator.languages.hasOwnProperty(lang)){
if(!lo.prepared){
prepareLanguagesObj(lang);
}
turnout=function(match,word,url,mail){
var r;
if(!!url||!!mail){
r=hyphenateURL(match);
}else{
r=hyphenateWord(lo,lang,word);
}
return r;
};
if(typeof target==="object"&&!(typeof target==="string"||target.constructor===String)){
i=0;
n=target.childNodes[i];
while(!!n){
if(
n.nodeType===3
&&(/\S/).test(n.data)
&&n.data.length>=min
){
n.data=n.data.replace(lo.genRegExp,turnout);
}else if(n.nodeType===1){
if(n.lang!==""){
Hyphenator.hyphenate(n,n.lang);
}else{
Hyphenator.hyphenate(n,lang);
}
}
i+=1;
n=target.childNodes[i];
}
}else if(typeof target==="string"||target.constructor===String){
return target.replace(lo.genRegExp,turnout);
}
}else{
onError(new Error("Language \""+lang+"\" is not loaded."));
}
}
function getRedPatternSet(lang){
return Hyphenator.languages[lang].redPatSet;
}
function getConfigFromURI(){
var loc=null,
re={},
jsArray=contextWindow.document.getElementsByTagName("script"),
i=0,
j=0,
l=jsArray.length,
s,
gp,
option;
while(i<l){
if(!!jsArray[i].getAttribute("src")){
loc=jsArray[i].getAttribute("src");
}
if(loc&&(loc.indexOf("Hyphenator.js?")!==-1)){
s=loc.indexOf("Hyphenator.js?");
gp=loc.substring(s+14).split("&");
while(j<gp.length){
option=gp[j].split("=");
if(option[0]!=="bm"){
if(option[1]==="true"){
option[1]=true;
}else if(option[1]==="false"){
option[1]=false;
}else if(isFinite(option[1])){
option[1]=parseInt(option[1],10);
}
if(
option[0]==="togglebox"||
option[0]==="onhyphenationdonecallback"||
option[0]==="onerrorhandler"||
option[0]==="selectorfunction"||
option[0]==="onbeforewordhyphenation"||
option[0]==="onafterwordhyphenation"
){
option[1]=new Function("",option[1]);
}
re[option[0]]=option[1];
}
j+=1;
}
break;
}
i+=1;
}
return re;
}
function toggleHyphenation(){
if(Hyphenator.doHyphenation){
if(!!css3hyphenateClassHandle){
css3hyphenateClassHandle.setRule("."+css3hyphenateClass,css3_h9n.property+": none;");
}
removeHyphenationFromDocument();
if(safeCopy){
copy.removeOnCopy();
}
Hyphenator.doHyphenation=false;
storeConfiguration();
if(displayToggleBox){
toggleBox();
}
}else{
if(!!css3hyphenateClassHandle){
css3hyphenateClassHandle.setRule("."+css3hyphenateClass,css3_h9n.property+": auto;");
}
Hyphenator.doHyphenation=true;
hyphenateLanguageElements("*");
if(safeCopy){
copy.reactivateOnCopy();
}
storeConfiguration();
if(displayToggleBox){
toggleBox();
}
}
}
return{
version:version,
doHyphenation:doHyphenation,
languages:languages,
config:config,
run:run,
addExceptions:addExceptions,
hyphenate:hyphenate,
getRedPatternSet:getRedPatternSet,
isBookmarklet:isBookmarklet,
getConfigFromURI:getConfigFromURI,
toggleHyphenation:toggleHyphenation
};
}(window));
if(Hyphenator.isBookmarklet){
Hyphenator.config({displaytogglebox:true,intermediatestate:"visible",storagetype:"local",doframes:true,useCSS3hyphenation:true});
Hyphenator.config(Hyphenator.getConfigFromURI());
Hyphenator.run();
}
Hyphenator.languages['nl']={
leftmin:2,
rightmin:2,
specialChars:"",
patterns:{
2:"1b1çè1ê13ëî31ï3ñ1q1ü1z",
3:"_a4_b4_c4_d4_e4_é2_f4_g4_h2_i4_j4_k4_l4_m4_n4_o4_p4_r4_s4_t4_u4_w4_y2_z44a_4aea2ë2aha2qa1ta4üä3hä3r4b_3ba4bbb4o4bvby34bz4c_1ca2cbc4d1ce1céc3g3cic3j1coc3w1cy4d_1da2db1de3dè1di1do2ds2dt1du2dv2dw1dy2dz4e_4eae1de4ee2ie3oé3aé1dé1gé3hé3jé3né3pé3ré1t4ècè2lè2sè5tê2pê5t4ë_ë2bë3cë3dëe2ë3jë1l5ënë3pë2së1t4f_1fa4fbf1c4fd1fe1fé3fè3fê1fif1jf1n1fo3föfr44ft1fu4fv2fz4g_1ga4gd1ge1gé3gè1gigl41go4gs4gt1gu4gv1gy2gz4h_4hb2hdh4eh3hh3j2hlh1n2hr4hs2ht4i_i1a4ic4iei1è4ifi1hi3ii2j4ik4is4iti5w4izît42ï_ï5aï1cï1dï3oï1tï5z4j_j3bj1cj1gj3hj3j2jkj3r2jsj3vj1w4k_1ka1ke1kik1j1ko2ks4kt1ku2kû2kvky32kz4l_4ld1li2lm4lp4lsl1w1ly4lz4m_1ma4mb1me3mé3mè3mê1mi1mo2ms2mt1mu2mv1my2mz4n_1na2nb4nd1ne3né2ng1nin3n2ns2nt2nvnx31ny2nz4o_4oao4e2oë4oio3ï2oko1ö2oso2v4owo4xö3lö1pö4rös44p_1pé3pêpr42ps2pv5qequ44r_r1cr1gr3hr3lr1mr1p4rs4rtr1wr3x4rz4s_1sc3se3sé3sès1h1sisj2s1ms4qs2t1sus4y4t_1te1tétè33titr44ts4tv4tzu1a4ucu1du3èu1hu2i2uk4up4uzü4bü1n1v22v_v4bv4e3viv3j3vlv3tvy32w_2wbw1cw1gw1hw1j2wnw1p2ws2wtwu2w1wx1cx4ex1fx1hx3lx1mx1px3rx1tx3wxy3y1ay1cy1ey3èy1fy1gy1hy1iy1oy1py1rys3y1t4z_4zb4zc4zdz4e4zf4zgz2i4zm2zs2zvz4w5zy",
4:"_af3_es3_eu3_ik3_in1_om1_os5_st4_ts4_ui2_xe3a4a44aad4aag2abr4ac_4ace4ack2acl2acr4acu4ad_2add2adh4adk2adl2adp2adsad3w2adyae3ra3eua4ër4afa4afe4afiaf3l4afoaf1r2afy4ag_a2gr2agta1hiah3la3hoah5ra3hua3hyai1ea1ijai5ka2inaio4aiu4aïn42a1jaka2a2kr2aksak1wa1la4alda1lea3lèa1lo2alpa1lu4am_am4i4amm2anca1no4ans2a1oao4gao2la4oma3os4ap_a1paa1peap1j2apl4apr2apt2apu4ar_a1raa1rea1riark2a1roar2sa3ru4arwa1ry4asaa2sc2asea4sjas3kas3las3mas3n4asoas1pa2st2atg2atm2atnat3waua41augaup2aur44aus4auz4avia2vo4avy2a1way2a4b1cb5de3b4ebe1abee4be5gbet24b3f2b1g4b3h3b2i5bilbir34b1j4b1k3b4l2b1m4b1nbo2kbo4sbo3v4b1p3br4b5scb3sibs5s4bt4b3tab1trbts53b4u2b3w3ca_ca3bcae3cau3ca3v4c1ccca3c5do3cedcee43celceo4ce2s4ch_2chc1ché4chn2chp4cht4chw1chy5cij5cilci3o5circ3ky1c4l5clu2c1nco3dco4i5com2cooco5vc3p4c3soc3sp2c1tct5c1c2uça4o3da_3dae3dag3daida3ïd4am2d5cd5do3de_de3g2dei5dekde4ode2s2dex2d1f2d3gdg4l2d1hd5hedi2a3dig5dildi2o5div2d1j4d3l2d1md5ne3do_do3a3doi2dop5dou2dov2d3p1dr43dra2dredse2d2shds4ld2smds3nds5sdst4d1syd1tad1thd2tjd1tod1trd1tu5duedu4ndu2od1wed1wid3wre3aae1abe3ace1ade1afe1age3aie1ale3ane5ape3aqe1are1ase1ate1ave3boe5br3ecde3ce4eck4ect3eczed1seea4ee5bee2fee3iee2kee2l4eemee2nee2ree2tee5vee5zeën3e5ër4efie1fle1fr4e1ge2gle1h4e5haei5a4eidei1ee3ijei3o4eize1j2e3jee3koeku4e1lae1lee3lé2eli2ema4enf3enqe1nueny4eo3de5oee5one5ooe4ote1pae1pee1piep1je1ple1poe1prep2se1ree3rie3röe1rues4ee3sles2me1sne1soe1spe3sue3sye1tae3tee1the1toe1tre1tu1euceu3ee1ume3uu2euw4e1we5wae5weew2he5wi4ex_4exi1expeys4e5zae3zoezz4édi3èta5ëen3ën4eëns2ënt2ë1raë1reë1rië1roë3siës3tët4sëve54ëzu3fab2fadfa3gfa3mfa3vf3dafe2af4er4f1ff5fef5fiffs2f3fuf3g2fge34f5h3fib5fie5figfi3ofi4rfi4sf3kef2l24f1m3fob5foc5fokfoo4f4orfo3t4f1sf3scfse2f2shf2sifs2mfs2pfs4tf3syf1taft3hf1tof1trf1tu3fus2fuufva23fy13ga_3ganga4s3gat2g5b2g1cg3deg3drg3du3ge_ge3age3c4gex4g1fg5geg5gig5gl2g1hght4gi2f2gijgi2m5gir3gis4g1j4g1k4g1m2g1ng3nagn4e4gnu3go_3gob2goc2gofg4og4gohgo2kg2oogos12g5p1gr43grag2scgse4gs1jgs3lgs3ngs3pgs5qgs5wg5syg1tag3teg1tog3trg1tu5gu_3gueg5vo4g1wg5wa4gypha3gha3v2heahe2fhe4i2h3f4h5ghi5dh3la2h2mh3mah3meh2nahno32ho_ho3aho2fho3v2h1phpi4h4rehri4h3sah3sph3stht3w4h1w3hypi3aai4abi4aci3aei3aii2ami3ania3oi3ati3cei2drid3wieë2i2ekieo4i4epie2uie3vie3zi3ési1éti4ëgif3lif3rig4ai3geigs4i5ieii2ni5is4ij_ij5a4ijd4ijeij3i4ijnij5ui3kei3kli4krik1wi1lai3léil5fi3liil2mi1loi1lu4im_4imfi3mu1infi1noi1nu4i1oio5aio5bio3fi3oli3oni5ooio4si3oxi2ozi1pai1pei1piip1ji1pli1poi1pri4psi3rai3réi1rii1roir2si1rui1sai4sci4shi4skis3lis3pis5qi5syi1tait2ii4tji1toi3tuit3wiu4miu3ri3veiwi2i3zeïn3uï3riï3ro4ïs_ïs3aï4scïs3lï3soïs3tja3b2jaf1jag1jar3jawjaz4jda2j3drjd3wjea4jel4j1en5jepje2t5jeu2jewj3exjf3ljf3rjf2sjft2j3gejif3j3igj3kaj2krjk3wj1laj1lejl5fj1loj3luj3mijm3sjnt44joij3omj3opj4oujoy3j3paj1pejp1jj1pojps4js1ajs3nj2suj3syjt1hj3trjt1sj1tu1j4uju3d4jumjus32kafk3ahka3i3kamkao3ka4s2k3b2k1ck3ca2k5dk4eb2kefke2sk2et2k1f2k3gk3ho2kiëki3ok3jo2k1mk3makni2k4ockoo42k3p1kr43krak4siks1jkso4ks5sks4tk1syk1tak3tekt1hkt3jk1tok1trk3tuku5kku2rkut3k3ve2lac2laf2lall4anla3q2laula3v5lawl4az2lb42l1cl3drl3duld1wle2alee4le5ole2sl4folft42l1g4l1h3lid3lièl4ig2lixl3kel3kil3kolk2sl3kwl3ky2l1ll5lal3lol3mel3mil3mo2l3nlo3alog42lorlo3vl1pal1pel3pilp3jl1pll1pol1pr4l3rl3sils4jl1sll1spl1stl2sul3sy4l1tl3trl3tuly5im4agmaï4ma3qma3vm5blmb4r2m1c2m1dm5dam3dom3drm3dwme1cme4im2el3menm4es2mex2m1fmf4lm5fo2m5g2m1h3midm2is2m1j2m3l2m1m2m1nm5na5mo_mo3amog24mok3mom2mop5mosmo3vm3ox2m1pm3plmp2r2m1rms2cms2jm1slm1snmso4ms4tm3sym1tam1thm1tom3trm1tumue42muk5mut3muu5muzmve42m1wmy3emze43na_2nac5naen3aëna1h3nai3naï3nam2napnas22n1cn3cen5con3dend1wn3dy3ne_nee43nemne2n3nesne2u2nex2n3fng4ln3grng2s4n3h3nilni3o3nisn1j4n3je4n1knk2jn4kw2n3lnn4i3no_1noc3noï1nom1nos1notno3v3nox3noz2n1pn3ps2n3rn5ren5rin3sin1slns3mn1snn1sons5qns5sns4tn3syn3tan3ten3tèn3ton1trn3tu3nu_3nuc3nue4nuf2nui3numnu2n1nus4nuu2n1wn3xenxo4o3aao2ado3afo1ago3aho3aio1aloa2mo3auo3avo3ax2o3b4ob_3obj4obr4ocaod3woe3e2oep4oerof3l4ofoof1r4oftog1lo3gy2o1h3ohmoi1eoi3joi5k2o1joku4ok1wo1la4oldo1leo3lo4ols4oma4omeom2i4omm4omo3omz2onco4o24oo_oo3c4oofoo4goo4l4oonoo4soo4t2opa4opfo1piop3l1opno1poop1ro4ps2opto1rao1reo1ri4orpor1uo3ryos3fo3sio4sjo4skos3los4no3suo5syo3teo1tho4tjo1to2otro1tuot5w4ou_ou5aou1cou1e4ous2ovi4ovl4ovrovu3o1wao1weow3ho1wiow2no3woow3roys4öpe1ös5tö5su3pabpa3e1pag3pakpa4m1pap5paz2pb42p1c1ped3pegp4el3pes2p1f2p1g4pho2pidpi5op3jip1jo2p1kp2l22p1m2p1np3na3po_3poë1pol1pom1pospo3v4p3pp5pap5pep4psp2ra4psep3sip1slp1sp3psy4p1tp3tep5tipt3jp3tr1p2u3pubpu3e3pun2p1w1py12p5z5quor2aa2racra3ora3q2raur3cer3co2r1drd5lr3dor3du3re_r4ef1reg4reqre2ur3fer1flr1frr4igr5j4r3knrk2rrk1sr3mo2r1nr3narns4r3nuro1ar4oc3roë1roïro3v3royr3pa2r5rr1slrs4mr1snr1sor1spr3sur3syr1tart5cr3tor1trr1turt3wru1e4rufru2gru2kr2umru4r4rut4ruur4whr3yu5sa_s1aa1sab3sah3sai3saj2saks2alsa2p1sat1sax4s3bs5bas5bes5bo2sca4sce5scè2sci4scl2sco2scr2scu2scy4s1ds5des4dhs3dos5drs3dw5se_se2as4ebs4ees2els4ems4ens4esse4t4sez2s1f4sfi4sfu4s5g4shesh3l4shm5si_5sicsi5è3sirsi4s3sit3siu3siz4sj_s1jesjt4s5jusk4is3ko4skus2l4s2n43so_so1c1soe5soi3soï3soks2ols2om3soosos4s4ot2sov4sp_sp4asp4o4spt4s5rs5ses5sis5sls5sus5sy4st_2stb2std2stf4stg4sth2stk4stl2stm2stn2stp1stu2stv2stz5su_5sua5suc5sud3sug2sui5suk3sul5sum5supsu4s4s5v4s1ws5wo3sy_4syc3syn4s5z2tac4tadt2alta3ota3q3tas3tau3tax4t3b4t3ct4ch3tea3tectee2t4ef3teht4elt4emt4ent2er3test4ev2tex4t3ft5ge4th_4thm3thr2thu5ti_5tia5tibt4ilt2is1tj22tjo2tju4t3l4t3m4t3n5to_toa23toc3todt4oeto2f3toit2olto3vts2jt1slts5qts5st1sy4t3tt5te3tua3tub4tukt4umtu1ot3ve4t1w1ty13typtys4t3zat3zit5zwu3acu3anua3puat42u2bu5biu3bouda2ud1wu3ecu3efu3eiu1elu1eru1euu3ezu1fluf2su5gaug1lu2goui3e4uig4uik4uim4uisui3v4u3juk1wu1lau1leu1lou3lu2umeun2cun3gun4ou3olu3onu3oou1oru3osu1pau1peu3phu3piu1plu1pou1pru1ra4urfu1ri4urku1rou3ru4urvu4scu4sju4smuso2u1taut5cut2hu2tju1toutt4u1tuut5wu4u44uutuw1au1weu1wiuw1ouw1ruw3uuxa3u3yaü3riüs3lva2nva1pva3z4v3c3ve_5veb3vek5vel5vemve2rvi3ovje45vo_3voe3vog3voi3voovos33vot3vouvu2lw2adw4ag4wam3wapw4ar3way2w1dwe2a3wed3wegwe2mwe2n2wex2w1fw4ijwi4k3wil2w1k2w1l4w1mw3new3niw3now3obw2oewo4lw3scw1slw3spw1tow1trwva2xaf4xa3gxan3xi3gxi5ox4opx3sox3spy3aty3coy1d4y5dryes3y3ésygu2y4iny5isy3lay3ley3loy3nay3noyn1ty3ony3osyo3typo3yp3sy5riys4iy3syyto3yu5ay3uiy1w4ze5k2z3h3zifzi4t4z3k4z3lzoi4zo1pzo2tzo3v4z3p4z3r4z5tzus32z3z",
5:"_aan5_aat5_ab5l_adi5_af5l_af5s_al3f_alk4_ar5d_as5h_as5l_as3t_as3u_at4a_bos1_coo5_cus5_da2k_dan2_de2k_di4a_di3o_do3v_du4w_ede2_ed3w_ee4n_eet3_ei3l_ei5t_en5s_ep4a_er2f_ert4_es5c_et4h_eus5_ge3s_gid4_go4m_ij4s_ink2_is5c_jor5_ka3d_ka5g_ke4s_ko3v_kun2_lof5_lu3e_lu4s_ma5d_ma5ï_me2s_mo4s_na3d_na3n_ne2p_ne4s_no5v_ol3f_on3a_on3d_on1e_on5g_on3i_on5k_on1o_opi5_op5l_op3r_op5s_org4_ove4_pu2t_re5o_ro4l_ro5v_sap3_sa5v_sci3_see3_set3_se5v_sno2_te4a_te4f_tek2_te4s_ti2n_to4p_to5v_tsa3_ty2r_ui5s_uit1_uke5_ur4a_zes5_zit5aad1aaad1oaad1raaf5aaag1aaag3eaag3oaag5raags4aai3laak1aaak1oaak5raal1eaal1iaal5kaal5maal1uaam1aaam3oaan1aaan5gaan5i3aanj3aannaan3oaant43aanvaap1aaap3iaap3raar3aaar1i4aarnaar3uaas3eaas3i4aastaat3aaat5eaat3haat3iaat1oaat5raba4la2bonab3rua3cala3car4ach_a3chaach3la1choa3chr4achsa1chuac3kl2a3co4actaa5da_ad3acada2dada4ladas5a5de_ad3eia5desa3det4ad4i4ado_a3dooad5sead3soad3uiaege4ae5k4a3e2pae2s3af3aaaf4asaf4atafd4iafd2rafee4a5fo_a2foeaf3opaf3s4afs2caf5se3afsl3afspaft4aaf5traf3uiag3afag3arag3dia5ge_ag3exa4gil4ag1lag3ofag4raag3ruag3slags2pag1stagu5a4a1ha4a5heah5t2ai5a2ai4drail3mai2loai3ovai3s4ai5scai5snai1soai1stai5tjai3traïns5ak3afak3agake2tak3idak5is1akkoa2k3nak5neak4nia3kofak3onak5ruak4soak1stak5toak3wia3lala5le_2alegalf3lalfu4al2gla3liealk3sal5leal5mealo2nal3ouals5jal2slals5mal4sna2luiama4f4amag5ambta2meu3ampèam2plam4sma3nad4anda2andja4nema3nen4aner4ang_an2granij4ani5t4aniv4ank_ano3sano5van1stan3th2antiant3w4a1nua5nufan3uian3uran3uua2op2aor5taos3paos5ta4paka4pas4a1piap3leap3liap3loa1pluapon5ap3ooapo3p1appaap3raa3preap3ruap2saap4siap3snap3tjar2daardo4ar4duard3wa3rega3remar4ena3revar3ghar2glarm3ua3roka3rotarpi4ars2ear3siars3lars5mar4soar4spar4su4artear2th4artoar3uias3adas4agas3akas1apas5cea4secas5haasis1as5jaas3jias5kaas5kias4luas5mias4neas4nias3obaso2laso4ras3pla4s5qas5sa4assm3assuas3teas3tèas1to4astras4tuat1acata3s2atekate2nat4euat3hua2t3jat4jea2tooat5ruatsi4ats5mats3nat2stau3chau3coau5deaud4jau3naaun3tau5reau3soau3t44aut_1autoauw3aave3cavee4a5vooa5voraxis44azifämme3ba4dabad3sba3gl5b2akbale4ba3lobals4ba4meba3saba4stba2trbbe2n4b1d4bdi5abe3asbe2aube3chbeet1beie4bei3sbe5kibe1kwbe3lebel5fbe3libel3kbel4obelt4be5otbe1raber4ibe3rube3rybe1s4be4shbe3sobe5spbes5sbe3twbid3sbi2dubi4enbij5dbij3fbij1pbik4abi3lobi5obbi3okbi5ombi5owbi4stbi1trb5ledbles3b5lidbli2kblu2sbody3boes4bolk4bo5nabond23bonebo3nobo3p2bos3abo5sibo5sobos5pbot3jbo4tobot3rbo2tubove4bri4lbro2nbru2l4b1s4b2s5absi3dbs5jeb2s5mbul4kbu4lub5urbbu5ribus5cbus3obut4abut3jbu2tobut4sca1ch5cadaca3doca3drca3g2ca3loca3nacant4ca2ofca1prca3racar4uca5secas3tca3tacces53ceelcel3dce5licel5k2cenece3no5centce3racer2nce5roce5scce3taceto43chaï5chao3chas1chau1chef5cheq5ches5chirci5abci3amcie3kci1euci5lecil3m4cindci5omci3t2ci5tac2k3ack3efck3idc2k3lck4lec2k3nc4k3rck5seck3sock5stcla2ncle3uco3adcoin5co3k4co3la5condcon1g5cons3copa4copico5ricor2o5corrcors4co3ruco5scco5seco5spco3thco3tr5coun2cout1c4r23crascre5d2crip3criscro5fcro5kcroo3cro5vcrus5c3stect3adc2t1hc2t3jc3tolct4orct3slct3spcu5d4cu3encu3éscui5scui2tcu3k4cu3racus3o3daagd4aald3aap5daat4daboda4ce4dadr2d1afda3geda2guda3ke2dakk4dalad3alcda3le4dalfda3li2dalmdam4a2d1ap5dapud3arb3dare3dari3darodar3s3das35dasa3d4atda3tadat5j5daue3dauwdbei54d3d4dde2nddi3addo3pde2alde1chdee4ldee4rd3eied3eigd3eild1eisd3eiwde3kedek3wdel3kdel2s2demh5demid2en_de3nude5oldeo3vder2edes3mdes3ndes3pde3stde3t4de5twdeve44dexpd4gafdge2tdi5aedi4ak5dichdi4dodie2fdie2tdi1eudi2gadi3jo2dinfdi4oldio1s3di4sdi5sedi5sidis5pdis1tdi3thdit3jdit3r2d3k2d5le_dli4n2d3n2dni3s2dobj3d4oe5doe_doe5d4doef5doek5doen5doetd4ole5domid3omr5domud3omv4domz5don_d4ona5donedo5nido3nudo5ny5donzdo3pad3opbd3opd5dopj3dopod3opsd3opzd3orkdo3spdot3j3dovl3dovo5dra_d4rac5draf4drap4drasd1redd2ree4dretd3ric3dris5drop2drou2drozd4saadsa4bd3salds2chd4sefd4seid5send4setds3hods2imds5isd4s3jds4jod1slads5mods4ned3snuds1o4ds3obds3omd4sonds2oods3opd4spad1spid1stad3steds3thd1stods5tyd2su4ds3uu2ducadu3endu3et5duid5duif5duikd3uil2duit5duivdun5idu4ol3durf3durv5du1sdut3jdvee3d3wacd3wasd3watd3wekd3wetd3wez4d1wod3wor4d3yody4spea3boea4caeac5tea3daea3doea3lae3alie4alsea5mie4an_eang3ean4sea3prear2ce2ascea3soe4at_eat3se1chee1chie3chuec5le4ecorec3taed4age3damede3aedem4ede5oed4ere5die4edired3ove3d2red5seed2sled4soed5sped3sue4d2wee5caee5deee5doeed3wee3faee3fieef3leef3reeg3lee3kaeek1eee3kiee3kleek3neek3weel3aee3leee3lieema4een3aeen5gee3nieen5kee5o2ee2paee3pleepo4eer1aee3reeer5kee2s3ee3sjee3snee5teeet5hee3tjee3toee3tref3adefa4zef3doef3eie5feref3lie3fluef3ome3fooef3opef3sfegas4e3g4iegip4e4go_e2goseg3s4eg5soegut4ehit4ei3do4eienei3f4ei3gl4eigneik4lei3knei5kreiks44eil_4eileeil5mein5kei2noei2saeis4p4eit2eive4e5kamek4eeek1eie3kemekes3e3kete5kice4kile5kisek4nie5kofe5koreks4eek3toek3urek1uuel1acel1ale3lane3lapel1aue3lazel4drel4due3le_e4lele3lere3lesel1flel3gue5liee5lig3elixelk3sel4kw4e1loe3lokel3ole3looe5loue5lozelp4oel4ps4e1luemes3e5mokem3opem3saem5scem4smem1stem3suemut4en1acen5afe2nale2nane3naten1avenci4en3daen3dre3neee3neuen5gaen3gleng4rengs4e3niee3niveno3sen3ouen3su3entèent4ren3twe2nunen3uren3uueodo3eoes3e5offeo3freo5nieo3paeo3peeo3ple5opseor5de5orge5orieo3roeo3s4eo5steo5tee3paaep3ace4pafepa4ke3pale3pape3pare5pe_e5per3epide3potepou4ep4rae3prieps3leps5neps3pep2tjep4tr4equae3ra_e1raae3rader3afe1raierd4o4erecer3efere2oerg2le5rife5rige5rike5rioe5riser2kner5moer5nue1ro_e3rober3ocer3ofero2ge3roker3omer1oner1ove3rozer3sjer5teer3tre3rube2ruie2rune3ruser5uu3erwte4safe3same5sanes3ape5sece5seles5exes2fees5hee4shie3side3siees1ine4sires5kres4laes4lee3soles4ooeso4pe3sples4sme3styesu4re3ta_et3acet3ade3take2tape5tate4taue2tave5teae5tek4etele5teset3haet5hue5tiee4tiqe5tise4tjae5toce3toee3toleto4pet4slets3nets4uetu4ret3weet2wi1eua4eu5dreu4lie3um_e2umdeu2naeun3t1eu1oeu2poeur5keus4peu4steu3tjeu1treu4wa4everewo3vex3af4exco3exeg3exemex3inex5ope3y4oey3ste3zeeédee4égee5ê3perënce3ën5scën5thën5twëro3sëven4f4aatfa2bof3accface4f1ach2f1affal3sf3angfant2f4armfa2tofda4gf5danfd1arfde4kfd3offd4rafd5sefd3sifd3sofd3spf4d2wfd3wofede3f3een5fees3felife3no3fes32f3exff3shff3sifge5tfi5acfi4alfi3amfia4sfi1chf3ijs3f2ilfi3lo4find3finif3inj4fink2finrfi5sef5isofjes54f1k4f1laff4lamf3leif4lesfle2t4flevf4lexf3lez2flie2flijf4likf4lipf4litf3lokfoe5d2f3of2fomsfo5nafo1no4fontfooi5f3oom5foon2fo4pfo5ri5formfo1ru4f1ov4f5p45fracf3radf2ras5frauf1recf3rek5freqf4rikf4rodfrus3f2sa4fs3adfs3anfs3arf5schf4scrf4seifs4fefs5hef3siefs3imfs1infs3mafs4mifs3mofs3mufs3obfs3omfs4oof3stef3stif3stof3strf3stuft1acfta4pft4smfts3nft4softs3pftu4r2fuitfu4ma3f2unfur4ofval34f1w4fzet5g4aat2g1acg4af_g3afdga3fr4gal_ga3lagal3s4gambgan5d5ganega3pl3gar_ga3reg1arm3garsgas5cgas3igas3ogas3pgat5jgat3s4gautga5veg1avog5dacg5daggd3atgd3img2ding5drugd3sagd5spgea3qge5au2gebbge3d4ge5drge5dw3gee4ge3f4ge5g44geig5geitge3kege5kige3krgek4ugel5fgel5kge5ma4gembge5mogems3g4en_3genigen5kge1no5genwge5omge5osge5otge5p4ge1rager4ige3sage3scge5sege3sige5slge3snge3soge5swge3tage2thget4oge3trge5tuge3ui5g4ev5g4ezgédi44g3g4g4g5hg2hetgh5teg2humgi1eugif5rgi3gag3ijs4gijzgi3na5ginggin3o2ginrgi4ocgi2odgi2org5lab3glaig5lat3gle_g3leng3lesg5lev3gliëg2lifg2limg2lob3glofg5log3glomg3lopg5loz3g2lygne5ggne5m3go2ag1och4goefgoe1r5gom_go2mag3oml4gomzgo5no3goot2g1opgo3pag4oprg4oragor2sgo3tr2g3ovgpes35gra_g5rakgra2m5gravgre4sg4reug3rev5griagrof5g3rok2grougro5vg3rupgs1a2gsa4ggs3eigs3engs3etgs3evgs5heg3siegs5isgs4lags1legs4logs4lug4snag5solgs3opgs4pigs5psgs5scgst2ag1stegs3thg3stugs5tygtes4gu4eu2guitgu4nigu2s3h3afdha5ge5hals5halz2hamp4han_hap2shat5jhat3she2ar3hechhe3co4hee_hee4kheis4he2klhek3whe3lehe3lihelo4he5mohe5ne4he5ohe2prhe1rahert4he2ruhe5sehe2sphi3kwhil3mhin5dh3ins2hir2his5phi3trh4lagh3leph3loch4merhoa3nho3chhoe4shoe3thof5dhof3eho3g2ho2kaho5mohon3ghoni4ho1no4hoom2hootho3paho1pehop3r5horlho3roho3ruho3sahot3jho3tr2ho4whow3ohra4bh5reahro2kht3ach3talh3te_ht5emh3tenh4tevht3exh2t5hh2t1jht1o4ht5oph4t1rhtse4ht2siht4slht1u2hu4ba3huizhut3jhy4lahypo1i5abii3adyi5ae_i3agri5ak_ia3klia3kri3al_i3alii5am_i3amiian4oia5pai5apiia3scia5seia3soiave4i5blei1chai1chei1chii1choi3chrick5licos4i3damide3aides4idi3ai3dokid3ruid2s1ids5iids5jids5lid4smid3uuidu3wie1a2ie3deied3wi1ee4ie3fiie2flie4frie3geie4klie2knie2kuiel4eiel5kie3mai3ennierk4ie3ruie3sfie2siie4slies3mie3tji3etyieu3ki1euri1eusi1euzi4ëvaif3aaif3adif4raif3uiig3aaig5aci5galige2sig3ijigi3oig5noig4opig3skig3slig3spig3unija4dij3efij3eiij3elij1erij3o4i3jou4ijso4ijsp4ijstij5teij4tr4ijvo4ijzoi4kamik3efiket3i2kijik3lai2k4ni3komi2kooiko2pik3reik3riik3roik5seik5siiks3nik3spik1sti3la_il4aail3acil3adil3afi3lakil3alil2dailds44i3leile3lile4tile3uilk4l1illuilme2il4moi3looil1orils5jil2thi2magim5auimee4im3exim3opim5paim1stin1aci2nau1induinek4ineo2i5neuin2goin4gr4ini_i3nie4inkjin2kn3innoi3noci3nodin1onin3ov1inri4ins_in5sein3slin3soin1spin5tein3thioas5i3o1ci3odeioes3io3g2i5ol_i5ongi2op4io3paio3pri3optio3rai3oriio3rui3os_ios3cio5shio5siio5soio5spi3osyi3otiiot3jio3tri2o3vip3afi3papip3luipo4gi2priip3ruipse4ip4siira3ki1r2eires4irk4siro3piro5vir4scir3spirt3ri2saais3apise2dis5hoisi2di2sijis3jais3kais3keis5lei4s5mi4s3nis5no5isoli4sooiso3si2sotis2piis5plis5sais5soi2s3tis1tais4this1toi3stri3styisu2mit3acita5di3teni3terites4ite4tit1hoit1huit1ruit1sp4i3u2ium3eium3oiwie2iwit3ize3tïe4n3ï2n3aïns5mïn3sp1jaarja3knja3mija3plja1pojare41jas3jas5pjba4ljd3anjdes4jdi3aj2do4j3domjd5onjd3opjd1stj2d3u3jebaje3ch2j1eeje3laje3rojers4je4s33jesajes5ljes5mjeso23jesr3jevrj2f1ajf5lejfs3ajf4scjfs5fjfs3ljfs5mjfs3njfs3pjf3stjf5tijf5twj2g3ljg3snjg2stjin3gj4kaaj4karj4kauj4kavj2kijj2k4lj4klejk5lij2knaj4krajk3rejk3roj3laaj2loejm3opj4naajn5acjn3akjn2amj2nefjne4njn3gljn3k4jn4sijn2spjn1stjn3trjoet3jol4e1j4onjone2jo3pejo3rajo3ru1jourjp3ijj1pinj3pioj1plajp3lij4prejp3rij4sefj2s1ijs5injs4irjs4lejs3lijs4mej5soejs3olj3spejs3plj4spoj1stajs3thjt1acj1tagj3takj3tanj3te_j3toejt3rajt3rijuve5jve2njve3tkabe2ka3bo2k1acka3dok3advk3afdk4affka3flka4gaka3le5kalfkal2k4kalt5kalv4kambkan5d4kang5kap_ka3pekap3lka1poka3prkap3sk3arckart4kas5ckati4kat5jk3atlkato4ka5trkat3s2kavokdi3a2k3ecke4dikee4r4keffk4ei_k4eiek2eilkei5tkel5f2kemm2kempken5kke3toket3w3k2euke4vl4k1ex2k1h42ki2d4kiedk3ijs4kijvki3loki3na4kinb5kingki5sekit4s2k3jak3jew2k3ju4k5k41k2l45klack4las5klemk3lesk5lic4klidk3ligk4limk5lob4klod3klok5klos4kluc1k2n44knamk4nap5kneck5nemknip13knol2knumko4bl5koekkoes3koge43k4okko5ko2kolm5koloko4ly4komgkom5p4komzk4onikoot3ko3pa4kopbko1pe4kopg5kopjko2pl2kops4kopz2kordko3rukos4jkoso44koss4k1ov4k3oxkpi3skra4bk3refk2regk4rit2krolk4ron2krou3k4ruk5rubkru4lk3salks3anks3apks1arks3asks2e2k5secks3edks3epks3etkse3vk5silks1ink5sisk5sitk1slaks3leks3lik4smoks3naks3noks3nuks3omk1spek3spik3spuk1stak1steks3thk3stik3stokt3ackte2ck4texk5tijkt3imkt3ink5titkt3omkto4pkt4orku5bekui2f2kuitku5me5kunsku3raku3rekur3s3ku2sk2wadk1wag4kwat2kwegk1wei5kwelk2wiek4wik2kwil2kwin4k1wo2laanla4cal4aci2ladj4ladmlad5sla2du4ladv3lae3la2fala3fllafo2la2golag3rlags4la4kila3kr3laldlal4o3land4lannlan2sla3pilap3l2larmlase4la2sila3telat5j5laufl2auwlava3la4vo4lazildak4l2dauldi3ald1ovld1reld3sald3slld5spld3uule3atleeg3lee5lleem33leen4leep2leeu2leffleg3lle4goleg5s4leig4leks5leldle2le5lelil3elp3lenele2no4lep_le4sale3scles3mle4sples3tlet4ileus45leuz4lexc4lexpl2faclfa3sl2faulfe4nlf3lilf3lul5foelf1opl5foul1fral3frulf4sllf4solf5talf5twlf3uul4gapl3glal3gogl3goolg3s4lgse5li3agli3am5lid_5lidmli3eu3liftli3go5lijn4lijp4lijtli5krli4kwlim4ali3mi2limp4linfli5ni3linn2linrl3inv4linzli3obli5omli3otli2pali3pi2lisol5iswlit3r4l1j2lk3afl5koel5korl5koul5kral2krelk4selk4solk3willa3dlle3kll4ellleo4l3l4illo5fl5lonll3shl3maalm3aflma5ïl3maklm3aul4medlme2sl5moglm3orlm5sclm3shlm3sulni4s2lobj4loeg4loesl3oeu5loevlog5llo3go5logrlo4krlo2ku2lo2llo3lal3omll3omtl3omv4lomz3lon_4lond5longlon3o2lont3looklo3pa4lopbl3opdlo1pe2lopn4loptlo3relo3rilo3rulost4lo2talot3jlot3rlou3s2love3lo5zl3paalp3aml3parl3paslpe2nl2pexlp3ofl3pomlp3onl3posl3potlrus5l4saal1samls3anl3sapls3asl2satls4cul4sefl5senl4sinls5jal3slal3slols3nal3snel3snol3socls3ofl3solls3opls1ovl2spals4pel3spil2sprl3stal3stels4til3stol3stuls5tyl3surls3uslt4aalt1acl4taml3thulto4llt3sllt3splu4b1lub5elub5llu1en3lui_5luia5luid2luitluk2slu3na3lunclu3talut3jlu3wily3stmaas3m3actm3aflma3frma3glma5goma3grma5kama5kema3kwma5noma5pama3prma1so5massma5tamat5jma3trmdi3amdis5mdo3pme5demee5g5meesm5eg_m5egdm5eggm5egtmei2n5melome4mim4en_me3namen5k4menqme5nume1ra5merkmes3mme3some4sp3metime5trmeve4mfa3tmf3limger44mid_5middmi3kn5milimi3lom3imp2minf5ming4minhmi5numis5fmi4stmi1tr2m3k25moda5mode2moef5moeimoe2s5mogemo3gl5mole2moli4moltmo5no5mons3mooimo3pam1opem4oppmop4smo3ramo3romo5scmot3j5mouwm5panm5penm4plum5ponm4ps2mp5scmp3shmp5sum3samms3apms3coms3cum3sjem2slem3s2mms3mam3solms3orm3s2pm3stam1stem1stim1stomst5smtes4mu5da2muitmul3pmu2m3mu3nomu3samut3jmuts2mvee3mzet53naal2naap5naatn3abd5nabena2can2aci3naconad4e3nadi4n1afn2akena3krn3albn3alm2naly4nambn4amin3ampn3ank3nantnap3s3naro4narsna1spn4at_nat5jna3tonats45nau_5naus2na3v3navinbe5tn3chencht2nch3un5da_n4dapn2darn4dasn4davndi3andi3on5do_n5docn4donnd3ovnd1rend4smnd3spnd3sune5acne3am3neckne2clne3don3edune5dw4neednee5k3neemne3g24n1ein2eigne2la4nelf5nenbne4ni5nenpne5ocne5okne5omneo5pne5osne5otne3pene1ra2nergner3une3ry4neumng3afn2garn3gavn5genng3ijng2lin3goeng3ofn3goïng5opn3gotng4senhek5n4i2d3nieunij3fnij3kni5krnik4s3nim_5nimfn3impn3inb2ninfn3inj2ninrni5ornip3lni4slnis5nni1trnits4njes4nje3tnk3afn3kefn3kennk3idn3knenk4rank5senk5sink3slnk3snnk1spnk1stnk3wi2n3m4n5n2enno5v1no3d2noefnoes3n5ogi1nogrno3klno2li1nolon2oman3omln1omsn3omv2nomz3nonc4nont3noodno1pen1opg2nops2nordno3re1norm4norr3nors3norzno3sfno3snno3sp3nota5notinot3jnot3r3nou_3novano4ven3sagn1saln1samns3ann1sapns4cin4scon4sefnse4gn2sinn1sjon4slen4smun2snan5snen2sofn3soln2sonns4orns1ovn1spens4pins1pon1sprn1stan3sten1stin1stons5tyn5tabnt1adnt4asn5tecn5temnt3han4thon5tignt4jont4ognt4oln5tonnt4oon4topn5trynts3ant1snnt1spnt1stntu4nnu3ennu3etnu2lo5numm3nuncn3uni2nu4rnu5ronu3tr5nuutnuw5a4n3yi4n3yoo1a2nobal4o3chao1cheo3chio3choo3chrocke44o3cooco3aoc3t4od5acoda3godes4odi3ao5druod5scod2slods4toe5anoe3asoe4droed3woe5er1oefeoe2fioe2floeg1loeii4oei3noe2kuoek1woel5foelo4oen3ooe4ploe4psoe1raoer4eoero24oes_oe3sioe2tjoet3wof3arof3ato4favofd3wo4flio4floof3omo3fooof3opo3forof3oxof5seof4slof2spof4tuof3uiog5acoga4log5deog3dioge4d2ogemo3ger2og5h1ogigog5neog3opog3spog3uioi3doo3ingoi3o4oi3s4oi5scois2poist2o3ka_o3kaaok3abok3ago3kalok3efo2k4lo4kliok5luo2k3nokos5o2k3rok4raok1saok3snok5teok3urok3uuok2wiol3aco3lalo3le_ole5gol1eio3leno5leroleu2ol2faolf3lol3frol2glo3liao3lico5lido3liko3lino3litol5keol2krolk4solk2vo5locolo3kol4omo4lopol5seol5siol1sjol3sool3sp4o1luolu4rom2aaom1acom1afo3manome5tomo5lomo3s5omroom3slom3uion1acon4agon4anon3apon2dro5ne_o3nebon3eiong2rongs4on5ido5nigon3knon5kwono3lon1onon3scons4eons2fon1st4ont_3ontvon1uion3ur4oo4dood1aood1oood1roo3fioog1aoog3eoo5gioog1roogs4ook3aoo3keook5loole2ool5fool5gool3kool1uoo3meoom3ioon5aoon1ooo4p1oopa2oop3roor3aoor5ioor5koor5moor1o4oortoos3aoo5seoos5noot1aoot3hoot5ooot3rop3adop3amo3pan3opdro3pe_op3eeop3eio1pelo5pico5pis4op1jopoe3op1ofo5pogo5poio5polo4pruop5seop5siops4mop3snop3soop3spop3su4opt_op5trop3uior1afora4gor4door3drord3w4orecoree4or2glo5ria3oriëork2aor3klor5knor3kwor3nior3oeo3rolor1onor1ooor3oro3rosor5ovor5scor5seor3soor3spor2too4saco5saso3sauosca4o4scios3cuo5sedos4elo5seros4feo4shao3shios2hoos5koo4s3mos5noo3s2oos3paos1pio4spro2s3tos4taos4thos4toos1tuo3sty4o1taot1acot3afo3tagotas4o5tato5tegot3eio5teno5terote4tot3huotli2o5tomoto3sot3ruot2slot3snot3spot3uio3tulou2doou3k4ou3saous5coust4ou2taout3hout1jout1rouw3a2o3vao5ve_o5ves4o3voo5wenozet54paan5paasp3acc2pachp4aci5pacu3pad_pa4da4padvpag2apa3ghpa4ki3palepal3fpa3lipa3na4pank5papipap3lpa3popa3pr4par_p3arbpard43park3parl4parmpa5ro4parrpa5rupa5sapas5cpa5sepa5sopa5te1pathp3atl2paut5pauzpa4vl2p3d2pe4al4pecipe3depe3dop4ee43pee_3peeë4peen5pees4peispek5spe3lepe3napen5k5pennpent4pep3opep5sp4er_pe1ra3perc1periper1o3persp2ertpe3sa3pet_pe5ta3petipetu53peuk5peutpge5s2p1h44p3hap4hispi3ampi5anpi4at5pieppi3gl3pij_pij3k3pijn5pijp2pijz2pind4pinr2pinspis5npi3thpit3jpit3r2p1japjes5p3la_p3lapp4lecp3lepp4lex4plijp4lompoda53poei3poezp2ofa3pogipo5grpol4s5ponypoo3d3poolpoot34popd2popepop5hpo3rop4ortpo3rupo1sapo3sfpo5tepot1jpot3r3poul3pra_p5rad4pram3praop4ratp4rax1prem3pres3pret4pric1prij3prik5priv1proj3promp4roq3pros4proypru2tp3sabp3sakps3arp4sinp5sisps3leps2meps5mip4sofp3solpso4rps2plp1s4tp3steps5thp3stups5ty5psycp3syspt3adp2t1hpu3ch4pun_3put_put1jput3rpvan4que4s2raan3raarra4cara3ce5raclrad4a3radbra3di4radm4radv2rafdr4affra5gira5gorag4s3raisrak5rr3altra3mir2amp4rana4ranj4rap_ra3pora4skra4slra1sora2spr4atirat5j3rausr1aut5ravrrces3r3chirda2mr3danrd3eirdi3ardi5or5docrdo3vrd2rurd3sard3sord1sprds4trd3surd2wird5wo1reac4reakre3co3recr3reda3redd3redure5dwree4kree2pree4s4refb2reff3reflre3fu4reg_4regd4regg3regire3gl4regt4reie4reil5reizre4kore4kure1kwrel5k3rem_2rempre2nar4end5renfr4enn4renqre4ofre5parer4s2rerwre3sare5sere4slres3mres3tret4i2retn3revo2r3exrf3alr3fasrf2s2rf3smrf3sprf3uurg3eir3glorg1s4rg2smrg5sori4agri2akri5anrias4ri4avri4bl4riceri3cori3diri1euri3flri3frri3glr4ijlrij5o4rijvrik5nril5mri3ma4rindri5ner4ingr3inl4rins4rintri5onri3scrit3j3rittr5ka_rk3afr2kahrke4nrke4sr2klor4kner2kobrk4rirk5sirks4prkt3hrk4tirkt3orkt1rr1kwar1kwirmes3rmi2sr5moer4moprm1strmun4rnes3r2ninr5notrn3smrn3sprn1strn3thrn5tjrn5tornu5rro5acro1ch3roe_4roef4roeg3roem4roevr4ofiro3flro3kl3rokmr4ol_2roliro5maro3mo4romzr2on_r2oner2onir2onkr2onnr2onsro3nu4ronv3roof2roog4roonro3pa4ropbro1pe4ropnr4oporo4puror5dro3roro3saro5sero3sfro3shro3spro5terot3jro3trr1oudro4ve4roxir5peerpi3sr2p3jrp4lorp4ror3psarp4sirp2slrre5orreu2r3salr3sanrs3aprs3arrs3asrs2crrs4etr4sj4r5sjtr3smers5mur5solr2sorrs1ovr3sper4spur1s4tr3ster3stir3stor3strr3styr5ta_rt1adrt3amr2tarr4taur2tavrtes4r4thart1hert3hir1thort3hurt3hyrt4ijr5tokr3trart3rirts5mrt1sprt2wi5rubrru4grruk3iru2lirul5sru2mi3run_r2undru5rar2u4srus3erut3jru3warves41saagsa3bo2s1acsa2ca3sacrs1adv2s1af3safe3safosa3frs5agg3sagnsa3go3sakss1akt5sal_3sald5salhs3all4salms3aln5sammsam5ps4ancs4ant3sap_sa3pasa4prsa3ras1arb3sardsa2res1armsaro4s4ars4sas_3sasasa3sc5satis3aud1saurs1aut3sauz4sch_sch4as2chi3scoosdi5asdis5se3akse3alsear4se3ause3cr5sect4secz5seeisee4t4seevs1effse3geseg2rs4ein2seis5seizse1kwse3le4selfsel5k5selmselo45selp5selts5emm5sen_5senhsen5ks4ergser4ise3roser2sse3ruse5scse3sf5sessse5tase5tise3tjset3rset3wse3um4s1exse2ze4sfeds5fei4s5frsfu5msgue4s4ha_sha4gs5hies3hoes3hoos2hot3shows5hul5s4iasi5acsi3amsi5ansici4si3co3sie_3sieësiep4sies4si1f45s2igs3ijv5sile3simu5sinas3inb2sinfsing4s3inhs4inn4sinr2sint5siros3irrsis3isi5tosi3trsi5tu5sjab4sj3ds5jeb3sjee1sjers3jes3sjew5sjofsj3s22s1k2s5kads5ken3skiës2k3js5kres3k4w4slabs4lac3slap4slaws3leds4leps5less3li_4slid2slies3lifs5ligsli2ms4lip3slofs3lols3los3slot4slun4s3ly3smad3smals5mapsmie2s4mijs5min5smoks3mons5nams4nar3snau3snees5negs3nies5nim4snods3nog2snoosno5v3snufs4nui2snumso4bls3oce2soef3soepsoes33soft2so2gs1ogeso3gl3sogy5sol_so3laso3le5sols5somms3omv2somz3sonas3onb2song3sonns4onss3onw2s1opso3prs2orbs3ordsor4oso3sfs3oudsou2lsou3ts1ove3so5z2spad2spaks4pans3paus4peks5pep4sper4spess3pezs3pids3piss3plos3plus2poe4spoë4spog4spols2poos3pop4spou4s3pss2p4u4spub4spuns4pur5spuwsro5v4s3s4s4scosseo4s4spa3stad2stafs4tags4taks4tap2stas4staus4tav4staz2st5c4stea4stecs4thast1hi2stia2stibs4tim2stiv2stob2stocs4tols4tops4tov1s4tr3strust3scst5sest3sfst3skst3slst3sost5spst5st4stub4stuc5stuk4stus2st3w2s4ty1styls5typsuba4sub5esu5bl5suik5survsus3esuur5sve4r1sys5t4aalt3aap3tabe3tablta2cata4de5tadot3adr2taf_4tafft4afr4tafztag3r5taka5takgta3kl5takn5takp5taks4talbta3li4talt4tamb4tamp5tan_t4ape5tapita3pl5tapota3ra5tari3tarw5tasa5tasj5tasota3sy4tatatat5j3tatr4tautt3a2ztba2lt5chat5chet5chit5chu4t3d2tdo3v4tecot3edutee4g4teekteem13teertee4tt5eff3tefl4teigt4ein5teit4tekk3teko3tekste3kwtel3ftel5ktels42temb4temmtene23tenh3tent5tenu3terj3termtes3mte3sote3tate5tr5tevl3tevr3tex_4texp4t3g2tger42t1hat3haat4hadt3hakt5hamt3hart3hav5theat3heb5theo3thes3thett4hint1hoet2hogt3hokt1hoot1hul4thumt4hurti5abti5aeti3ap5tica5tice5tici5ticuti3d45tie_5tiep5tiesti1euti3feti3frti2ga4tigm5tijdtije45tijntij5pti3koti5kr4tils5timm5timo4tinft3inht3inq4tinrti3nu4tinwti5omti5sati3slti3so5titeti3th5tiviti4vo2t1jat5jaat5jeet5jekt3jent5jet4tjeut1jou4t3k2t5le_5tlebt5lestli4ntmos5tne4rtnes4to3acto3arto5bl1tochto3da3toejtoe5k5toen3toer3toev5toeztof5dto4fr3togn5togrtok3sto3lato5let3olf2toli5tolot3oly4tom_t3omlto3mo5ton_4tondto3no5tonstoo4m5toont4op_to3pi2topmto4pot4oppto4pu5tor_to3rat3ordt4oritor3ktoro45torr3tors3tos4to3sato1sl5totato3tr3tourto3w44t3p4tpi3s3tra_3trag5trau4trea2trec3tref4trelt4reutrig22trij3trogt4roï5trojt4ros3troutro5v5truf4trugt3rukt4rumtsa4gts1amt3sapts3astse4dt2sijts3ja3tsjits2mets4nots3nuts3obtso2lts3omts1onts1ovt3spit3stat3stets3tht1stots5tyt4su4ts3urts3usts3uut5t4atte2nttop2t5t4rt5tumtt3uu3tuch3tu3e5tueutu3és3tuig5tuin4tuip2tuit5tune5tunn5turbtu3ritut3jtu3wat2winua5neu5ar_uar5tua3saub3acub5emub5oru1cheuc4kiucle3u5da_ud5amud3eiudi4oudoe2ud3ooud3ovu4d1ruds4mud1stue2cou1ee4u4eneue3stu5eulu1f4rug2doug4drug3ijug3oru2g1rugs4pui5acuid4suid3uui2fauif1luif5rui2fuuig1lui4guui2koui2kuui2lauil5muin5gui2nouis5cui4sluis5pui4st1uitguit1j3uitl3uitw3uitzuk3asu2k3lu2k3nu2k3ou3kocuko2pu4k3rul3aculam4ula4pul3flul5foul3frul5keu3losul2paul4piul2poul3saul3soum3afum3ar3umdaumee4umes4um3omum3opum3soum3stun3acund4sune4t1univuno3gun2tjuo3ruuota3upe3ku3polup3omup3opup4trur1acuras3urd4ou1r2eu4remure4nu3resur2faur3giur3oruro5sur5prur2slur2snur4spur3taur3uiu1r4y4usaaus3adus1apu5sieu4s5lu2s5nus3oïus3osu2s3pus5pius5puus4tau4stiustu4ut1acut3afu3tanu4tekut3emut3exut3houto5futo5suts2mut1snut3sput2stut5suuur5iuur3kuut3auut3ru3waguw3aruw3ecuwe5duwes4u3woeuzie2ût3s4va3deva3g4va2kiva4klva2koval5mva3lovalu5vand4va3nova3reva5seva3suva3tevat5jvee4lvees4ve3level3kvem4ave4na5vendven5k2venrver1aver3over5pver1uve3ryve2s3ve2tj5ve5zvi3euvijf5vik4sving4vi5omvi1sovis5pvi4stvi1trvjet1v3larv3lovvoge4vo2levo2livol5pvoo5dvo3ravot3jvous53v4r2vrei5vues4vul5pwaad3w2aarwa4b3wa2bawa5blwa3drwa2law5arc5wardwa2si1watewat5jwa3trw4doo2we2cwede4weg3lwei3swe3liwe2lowel3swem3awe3mewena4we3niwen3ower2f4wergwer4swe2s33wet_we2thwie4t3wijdwij4sw4ing2winrwin2swit3jwit3rwn3acwoes3wol3aws3a2w3somws2plw4sprw1s4twtes3xan5txen4dxe3roxie4txo3noxo3s4xpre2x2takxtie2ya3s4ycho3ydi3aydro3yl3alylo3lym5payn3ery3p4hypot4yp5siy3r4ey1s4ay3s4cy5s4eyse5ty3s4fy3s4hy3s4oy3s4pys5plys4tays5tryt3huy2tofytop4y3u2rza3f2zak3rzan2dza3poza3s4zee3kze5gezen5kze3rozer2sze4s3zes5ezes5lze4tizeve2zik2wzin4szi3o5zipi3zit3ezit3jzodi5zo3f2zo5iezo3lazome4zo2nazot3hzo3trzz3inzz3orz4z5w",
6:"_ac5re_al3ee_al5ko_al5ma_al3om_al4st_ana3s_an3d2_an3en_an3gl_an5th_ar5tr_ave5n_be3la_be5ra_be5ri_co3ro_daar5_da4gi_dag5r_debe4_dek5l_dek5s_de5od_de3ro_die4p_doet3_eest3_ei5sc_ei3sp_el4s5_en5th_ere5s_erf3l_er3in_erts3_es5pe_es5tr_eten4_fel4s_gaat5_gea5v_ge5le_ge5ne_ge5no_ge3ra_ge5sk_ge5ta_ge5tj_ge5to_goot3_ho4lo_ide5o_ijs5l_ijs3p_ijs3t_in5d4_in3g4_in5gr_in5kr_in5kw_in3s4_in5sl_in5st_in5ta_koot5_ko5pe_kop5l_le4b5_leg3o_le5r4_le4s3_le5th_lin5d_loot3_lo4s1_me5la_me5ni_me4st_moot3_naat5_na3s4_nee5s_nep3a_ne5te_noot5_nos5t_oe4r5_oe4s5_oeve4_omme3_ono5v_on2t3_ont5s_op5ee_peri5_po4st_puit4_ran4d_ren4o_ro4st_se5re_side3_sneu3_so2k3_song5_ste4m_te3le_te3no_te3ra_ter5s_tin3a_tin3e_to4lo_ve4r3_ves5p_vet3j_vie4r_vol5s_we4l3_win4s_zooi5aag3saaag5soaag3spaak3e2aak3spaal5a2aal1o2aal3slaal5soaand4raan1e2aan5k4aan3sp3aantaaap3o2aar3e4aar1o2aas5trabat4sab5eunab3ijzabot4jace3st2a1che4a1chiac5resada2r3ade5rea5detaadi3aladi4ocadi4odad3reia3d4riad3rolad1s4tad5staae4s5ta2f3acaf5d4wafon4daf5orgag1a2dag3a2magee5tager4sag3indagi5ota4g3orag4o3vag5rapag4sleag5sluag3speag3spiag3staag5stra2g3uiag3u4ra2g3uuahe5riai4s5laïs3o4a4k3ara4k3edak3emiak3ink4a2k3lak3o2pak5speak5t4wa2k3u4al3adra3l4aga5lapral3artal3effa2l3elale5roale4tjal4fenal5fonal3intalk5eial5kleal4kuial4maca4l3olal3sanal3scrals5lial3thaalt4stal3uital3u4ralu2s5a4m3acam3adram3artame5tjam3oliam4pleam4s3oam4spra2m3uian3algan4a3nan3arcanda4dan4dexan4domanen3ian3estane3usan4gananga5pang5leaniet33animaan5ionan4kaaanka4nan2k3jan4kluank3ofan2k3ran3ochan3orkano3t4a4n3ouan3sanans3cran4segan4sidan2so4ans5orans3pian4tacante4nant5slanze5sap3as_ap3assap3ijzap3o4v4appena4premap2s3lara3s4ard3acard3akar2d1rar4draard3re5a2reaare4noare3sparij3sar3insark3acar3k4lar4mapa2r3obar3ogearo4koar3oogar5schar3scrar5seear4slaar3sniar5spoars3taar4strart4aaar4tanar4tapar3tarar4teiar5tij4ar4tjar5tofar2t3rar4troart5ruart4slarwe3sa4s3egaser5aase5tjaseve44as3taa4sta_as5tagas4tasas4tata3steka3stemas5tenas3tobast3opat3adeat3af_at3anka5tellate3noati5niatjes5at3oogatos5fato3stat3racat3reiat3ribat4roeat2s3lat4sloat4sneats3pra2t3uiaure3uau4s5pau3stoauto3p2auts3avast4aver3aave3re1a4vonbad3arba4d3rba3g4hbak4spba3lanba4larbal3dwbal3evba3liëbal4klbal3sfba5n2aban4klban4krbank3wba3trobben3abe5dwebe5dwibe5dwobei5tjbe3k4lbe3larbel5drbe4lexbel3scbel3spbe3nepbe5n4ober4glber4grbe1r4obero5vbes5acbe4sjebe3t4hbe5tonbe5twibe3undbeur4sbie4libij3g4bij5k4bij1s2bil3s2bin4drbin4stbi3osobit4se2b5lapble2t3blijs44b5loiblok5lboe4knboe4koboe3stbo3f4lbok3anbokje5bok4stbo2m3oboot3jbo5scobos5tobot4spbot4stbou5tabouw5sbrie4tb2s5lab4stijbuit4jbune5tcal4l3came5rca4praca5prica3s2pcas5trcate4nca3t4hcau4stceles5ce4l3oce3s2ace3s2hce3stacesu5rce4t3jcet3ogcet3oo5chauf5chef_5chefs5chemiche5riche3ruche3usc4k3edcke5rec5k4etc2k3o42co1no2co1p2cor4drco4relct3actctee5tcte2n3c4t3ofc2t1onct3rapc4t3recuit5ecula5p5cur3sdaar5e2d3accda5denda4g3rda4kerda4k1rd3alarda2l3uda5macdames3dam4pl2da2nadan3asdank3ldan4sidan4smdan4stda2r3adar4modar5stda3stu4d5atl4d5atmda2t3r4d1autddags4dden5addera4ddere4dder3od5dles5dedirde4ditdee4g3deel3i4d3een4d3eff4d5eg_4d5egg2d5egydek3ludel4aadel5dadel5dr4delemde4levdels3idel4soden4acden3eiden3evde4nocden3sh5denvlde5ofodeo4lide3rabde3rakde3ramde3rande3rapde3rasde4repde4retde5rijder3k4der3ondero4rder5thder5twde2r3ude3rupde3savde3spede4spldes5smde4stide3us_deu4tj4d1exadge3ladgeto4dge4trdheer43d4hi_di4anodia3s4di4atrdi3esrdie3stdiet3rdig5aadiges5dijk3r2d3ijz2d3impdi5n2a2d3ind4d3inj2d5inr2d3ins4d3int2d3inv2d3inw2d3inzdi4onedi4onidio5sc2d3irrdis5agdis4krdis5trdlot4s4d3obsd5oefe4d5oev2do2lid4olindolk5s5dol5s3d4om_dom4sn5d4onndo3pee4d1opl4d5orgdo4riëdors5mdo3stadpren4d3raamd3raapd5race5drachd3rad_d3rada5d4ragd4ramad3rame4d3raz4d1recd5reco4drendd4ress3d2rev5drevedries45d2rifdri5gad3rijdd3rijkd3rijmd3rijs5d4rin4d3ritd3roer5d2rog4d3rokd3romad3rond3droog4droosdrug4sd3ruimd3ruit4d3rusd2s1a2ds4ated5schids3ecod4s3edd4s5eeds3eisds3elfdse4lid4s3esd2s1i2d4s5iddsig5ads4ingds5jonds5lasds5licds5limd3slinds4makd3smijds5neud5spand5specd4s3pld5spoed5spokd5spord4stabds3takds4tand5stavds4te_d5steed4stekds4terd4stevd3s4tid4stitds3ure4duit_d3uitd5duite4duitgd3uitvdu5wendvaat5dve5nadvies53d2weidy2s4te5ademead3s2ead5shea5s4eease5tec4taae3d4ane4d4ased3ei_ede5leedi3aledi3ame3d4ooed3opved3roded3roled3uite5dwanee5cheee2d3aeed4aceed5aseed3rueed3sieef3acee4gapee5kaaeek3akee5keteek3reee3krieek3roeek5stee3ladeel4eeee5lijeel5k4ee3lobeel3ogee3lu4eel3ureel3uueena4reen3e2een5ieeep3aneep3rueer3aaee4radeera4lee3ramee3ranee4reeee5reiee4r3iee5riceer3ogee3rotee5schees5etees5loee3s4pees5plee3stueet5aaee3talee3taneetna4eet3ogeet3ooeeto4ree4troeet3spefde5lefie4tef3inse3fis5ef3looef3rije5froneg3as_ega5skeg3ebbe4ge4ceg3eigege4raege4roeg3ijzeg3orgeg3oude5grafeg5slee4g3uueheis5eid4sceien5seie5re4eild4eil5drei4levei2l3oein4doein5grein5slei5shaei3sloei4tooeit4s3eits5ceits5nek3aanekaat4ek3af_ek3al_ek3altek3ange5ker_e5kersekes4tekla4mek3leve5klime4k3obek3oliek3opzek5os_ek5osse5kranek3rozek5setek4strek5t4eek3uitek3winel3aanel4adeel3adjel3admel3adrel3advel1a4fel5anae5lap_e4lappel3arbel3arcel3armel3artel3asie4lautel5aziel4decel3eeuel5effe5leidel3eig3e2lemel3empe5l4eneler4sel3erveles4tele4trel3excelfi4delf3s4eli5kwel3impe3lingel5inzel4keee5loepel3oesel3omsel5ondel5onte5loode5loosel3opsel5optel5opvel3o2rel5orgelot4jel4s3kel5tweel3uiteluks5e4manaema3scema5toemees5emer4sem3oliem3orge4mo4vem4sliem3uiten3aape3naare2n1aken3al_en3alsen3amben4ameen1a2pe5narien3arsenas3p3ency_en5daaen3d4oenede4en3eedenee5ten5eg_en5eggen3elaen3elfen3emae2ne2pen3epoe5nere5energe4nerven3etaen3eteen5grieng5seeng3sme5nijde2n3imen3k2aen3offe2n1onenoot5e3nor_en3orde2n1oven5sceen4seiensek53ensemens4feen4sinen1s2pen4tacen5teeen5teien1t2hen5tomen3treent4slents3me4n1uie4o3k4eop4laeo3p2rep3aakep5akeep3aspep5eenep3ijsep3ijzep3insepit4sep3lede5ploeep3luseprot4ep4sereps3taeps5toeps3trep4takept3raep5troep3uite5raader3aane5raate4r1ace5rac_e5racee5racoe5rad_er3adoe3raffer3amaer3anae5raneer3arce3raree3rarie1rat4er3azier3d2aer3d4ier3d2rer3d4wer5eater3eene5reeper3eeter5effer5eg_er3egder5egger5egter3eieer3eiger3eilere3kler3elker3empe3rendere4nee3renme3rentere4oger3epier3e2qer3erie3res_er3eske3ressere4ster3etne4r5exeri5aberig5aer3ijler3ijser3ijver5inder3inser3inter3m4ier3oefe5roeper3oeve1ro2le5rol_er3olie5rolle3ron_e3roneer3onver3ooger3oore5roose4r3operop3ae2r3orer3oxier4pluer3screr3t2her5t4ier5t4oert5seerts5ler3t4uer3t4we3rug5er3uite3runse4r3ur3ervares3arre3sa3se3scope3s2cres5eenes5enees5je_es5jese3s4joes5jone4s3kae5sla_e5slages3lakes5lates5leges4muie3s4nees3orees5pases4pele3stake3stapes4tares4teaes3tenes3teres5teses4tete3steues4tice4stiee3stotest4sces4turet3aanet3afz3e2tage5tak_et4anae5tande4tappet3edie5tel_e5telset5embet5emmete3roet3hore5toevet3opeet3opleto3sfet3rece3troee5trone5trooetros4e4t3ruet5sluet3speets3pret3spuet4steet5stiet5suueudi5oeugd3reu3g2reu4lereu4radeu4receu3reneu4reseu4rijeuro5veur4sueu5scheu3spaeu5streu5wineval4sevari5eve4loeve3raewen4s2ex3aa4e3zenezers5ëro1g2ëts3tef3aanb2f3a2p3fa5sefbe5dwfdek3lfde4s3fdes5efdes5lfde5smfdes5tf2d3inf3d4rufec4trfe4delfel5drfe4lomfel3spfe3rabfe3ranfe3romfe3ronfe4t3jfetu5rfge5r4fi3apafi3apo2f1ijzfik4st4f3laaflet3j3f4lorflu4t3foe5tafon5tefop5s43fo5re2f3oudfraam5frie4sfrie4t4f3rolf4rolof3romaf4s3ecf4s5eef5slaaf5slacf5slagfs3lapf2s1o4fs4prefst3asfs5tecf5stiff4stonfta4klft3artf5tondf4tontft2s3lfum3ac4g3adm4g3afs4g3afw2g3a4hga5lerg4a3mi4g3arb2g3artgar5tjga3sliga5slogas3trgd3artgd5ateg5der_gd3ervg4d3idgea3drgea5nage4ari4g3eb_gedi3age4ditgeet3a2g3effgege4s2g3eikgeit3jge3k4age5k4lgek4stge3k4wge3lauge3l4egel5sigel3slgel3sp4g3emf2g3empge3m4uge3nakgen4az3ge3nege4noggeo5pegera4pge5regge3remge1r2oger4ofge5rolger4spge3r4u3ge1s44ge3skge5spoge3strget4aage5tamge5t4ige3t4jge5trage5troge5truge5tsjge5t4wgge3lagie5ragier4s4g3inb4g3infg5infeg5infr2g3inhgip4st1gla4sglas3e3g4lazg5leerglee5t2g5lep4g5ler3gle4tglet3jg5liceg5lichg5lijs3g4lio4g3long3loon3g2losgo4d3agod4s3gods5tgo3f2r2g3ong2g1ont2g3oor4go4rego5re_5g4orig4ram_gram3ag3rampgra4s32g3rec2g3red5gredig5redug3reekg3reelg4reepg3reis4g3rek2g3remgren4sg5rijdg5rijkg5rijmg5ring5g4risgrit5s2g3rivg3rookg3room2g3rugg3ruimgs3altgs3ecog4s3edgs5eengs5enegs3ervg2s1i2gs5lamgs5lasg3slepg4sleugs5liegs4lings5loggs5lokgs5long4s5mag3snijg4s1o4g5som_gs5onsg3specg3spieg3spilgs5pirgs5polgs5tacg5stadg5statg5stedg5steeg3steigs3tekg5stelg3steng3sterg5stofg5stopg5storg4strug2s1u4gsver3g2t3apgte3rogte3stgut4sthal2f1han4drhan3gahang5lhang5shan3sohan4sthap4sehar4tahart3jha2t3r4have_hee3g4heek3aheek5lheep4shei5tjhe2k3ahek4sthel3smhen4krhe3n4ohe4pijhe2p3lher4aahe4r3ihe3roshero5v3hersthe2s5theu5lehie4f3hie4r3hier5uhie4trhiet5shij4slhik4s5him4plhim4prhi2p5lhit4sthoes5lhon3drhond4shool3ehoort4ho2p3ohor5dehor4sthot4sthrok3ohroot3h4t1a2ht3alah5tansh4t3echt4ecoh2t3eeh2t3efh2t3eihter3aht5eveh5tevoht5oefht5rooht4sapht4serht5slaht3smeht4s3oht3spehts3plht3sprht4stihur4t5huur5si2a3f4i2a3g2i3ake4ia4kemi4a3lai2a1p4ia3staia3t2hi5atriiboot4i4dee_idi5abi2di5oid4makid3ranid4s3aid4serids5maid4s3oids3taid4stiids5trid3u4rie4droie3fleie3fonie4gasiek3liie5kluiek4spie3kwaie5lanie5lapiel5doiel3sciem3ovien4drien3ijien5spie5peniepou5iep3s4iep5stiep5trie4puiie3ramie3rapier3asie4ratie3r2oie4rofier4slier4uiie5sleies3liie2s3nie2so4ie3staie3stoie4taaie5talie5tenie3to4ie4tooie4topie4toriet3uriet3uuie3twiieu3spif4taaif4tarif4treiftu5ri4g5avig3eski4gindi3g4omig3stoik3aarike4rai4k3loi4k3lui4k5naik5o2gik3opeik3ordik3s4lik3snoik4spaik5staik5waril5aanil4acti5landil4d3ril3eenilet5rilie5gilie5til3inkilk3s2illa3sil4minilo4geil3ondi5loonil3oorilo4reilo4veil3s2hil4stii4magoim3eeni4m3emim3enci2m3ofim3orgind4aaind3scin3ediin3eedinet4sin2ga4ing3aaing3aging3al3inganing5loing4stini5onini5sl3inkomin4kriin4o2gino5pein5schin3smiin5spoin5swiintes51int4rinuut3i5oleni5olusion4s3ions5ci3o5sei3o5sfi5osi_io5s4ti5o5sui2p1aci4perwip4sleire3stir5stei4s3adis3a2gi2s1ari2s3asi5schai5schris5coli5scooi4s3eiis3ellis5engise3stiset3jis4feeis4feri2s3imis5lagis5lasis5nedis5nijis4ooris3ottis5pasi3stakist3apis4tatis5triit3eenite3stit3hieit5oefit3oogi3t2oui4to4vit3redit3sjeit3sliit3sopits4teit4tooium3a4iven5sive3reï3n4urï5schejan4stj2d3aaj4d3arj2d3eejden4sjde3spjde5stj4d3rej4d1rij4d3roj4d3rujd5seijd3spojec4taje2na2je3n4ojer3sp5jesalje5sch3jesknjes5pajes4prjes5tr5jesvo3jeswa3jeswijet3erjeto4vjet5stj2f3eij4f3ijjf3inkj2f3o4j3f4raj3f4rojfs5pajf4stajf4stijg4s5eji5t2jjk3arbj3klaajk5lakjk5lapjk5lasj5kledjk5lesj3klonjk5lopjk5lucj2k3ofj2k3onj2ko4pjk3opbjk3opejk3oplj3kopsjk3raaj5kranj4k5rujk3slojks3pljk4staj2k3uijl5anaj2l3efj2l3eljl3inkj2m3afj5m4arj2n1a4j3na5gjna5mej3n4anjn5d2rj4n3imj2n1o4jn2s3ljn3slujns5orjns3pljo5lijjou5rej4p3acjp3armj2p3emj2p3orjp3rokj5selij4s5emjs3leejs5liejs5meljs5metj4s1o4js3pacjs3parjs3pooj5sporj4starj2s3tej3steejs4tijj4stoojs3touj3taaljt3aarjt3optj5tredj5treejt3reij5trekj5trokjt3rotjver4sjvie5sk3aanbk3aanl5kaart4k3adm3k4aft2k3albka3l4ikalk3akamen4kam4pakam4plkam4prka5naakan4slkan4st4kappak4a3rokar3tr4k3asika3strka4tan2k1aut2k3eenkeer4skei3s4ke4lapkel5dakel5drke5lel4kelemke4lomkel3sp5k4emake4nauke5nenke2n1o4k3e4qke3ramker3klker4knker4kuker4kwker4noker3o4ke3rosker4sm4kerva4kerwtke3s4pke3stake3sto5ketelke2t3jke2t3r2k3e2zkie4spkie4tjkieze4kijk5l4k1ijzkilo5v4kindukin3en2k3inhkinie4k3inko4k1inr2k1ins2k3int4k3invki2p3lki3s4pkker4skke3stk3ladikla2p15klas_5klassk3lastk3lat_k3latt3k4lav3k4led5kledi5kleed4k5leg4k5lenk3ler_4klerak3lers2k3lij4klijskli4me3k4lin5klok_k5lokak3lokek3lood5kloofk3lope2k5loz4kluih3k4nar5knie_4k5nivk3note2k5oct4k1oefkoe3tj5ko5grkol2e2kolen3ko2m3ak3omslkonge4k3ontb2k1oogkoot4j4k3opd3ko5pikor5do2k1org2k3orkkor4takor4tr4k3os_kot4stk4plamkpren4k5raad4k5radk5rand2k1rea2k3reck4ree4k5reepkreet32k3rel2k1rick3rijkk3rijpkrij4tk5ritmkron3t5kroonkrop3akro4tok3ro5v5kruiskrul5aks3almks5ei_k4servks3labk4slank5songk2s3pak4sparks3pook5sporks3potks3pruks5teck3stenkste4rks5tonk5stook4stopk5stotks3trik3stuekt3aank3taarktaat5kt3artkt3ecokt5ordkt5orgkt5orikt3o4vkt3resktro3s3k4u2n4k5uni2k3wac5k2wal5k2wam3k4wark5warek3weer4k1wer5kwetsk3wijzk3wind4laandl3aanhlaa5rel3abon5lach_la4cha5lachela2d5ala4detla2d3o4la2dr4l3afsla2g3alag5sala2k3a4la2nalan3aclan4dalanel5lang5llank3wla4norlans3llan4stlap3aclap3o4la5prela2p3ular3da4larm_lar5stlas3a4las3to5lastt4lats4lat3sllau4stla4zijlber4tlboot4lce4l5ldaat5l2d3acld3alfl4da4rld3arcld3arild3artld3ecoldeks5ld5oefld3olil2d3oml2d3onld3oogl4do4pld3opild3ordld3ramld3ratl5dreeld3rijld3roeld3rolld3romld3ruild3smald5steld3uitle4aneleba4lleege4leeg5i4leekhleep3olees5elees5llega5sleg3ecle5go_3leidi4leierlei5tjleit5sle4ko4len5kwlen3oplen3sflen3sm3le1rale5reiler5g4le3r4ole4ronler4slles5etle3s4hle3speles4tale3strle4s3ule4t4hle3thale5tinle4tople2t3rlet4stle2t3uleu3koleum3aleur4ol3f4aglf3enel2fe2zl3f4lolf3o4llf5ordlf5orglfs5eilfs3lelf2s3ml5gaarl3g4oelid3s4lie4grlie3kalie4splie4tolijk3a4lijmv3lij2s4l3ijzlik5spli3kwilin4da4l3inhl3inna2l3insli2p3lli5seeli1t2hlit4salit4sllit4stlk3armlk3artl4k3eil4k3emlken5elken4sl4k3eplking4lk3laalk3lagl5klasl5klimlk3ontlkooi5lk3opblk3replk3reslk3rijl2k3rolk3sonlks3oolk3stelks5trl4k3uulla3g4lla5trll3eiglle5thlmaat5lm3arclm3artlma3s2lm3edil4m3eplme5telm3olilmro4zlo4booloed3rloe4grlo4faalof5d2lof4s4log2s3lon4grloo5pi3looshloot3e2l3oph2l3opllop4lalo3p2r4l3opv4l3opw3l4or_4l1org3l4orslo3spelos5tolo5s2ulo4tetlo2t3hlo4toflp3aanlp3a4gl5pinglp3insl3p4lal4plamlp3opelp3ramls1a2dls3a2gls4corls3ecol3s2hil4s3imls3injls3inkls3intl3s2kil2s4lels5ledls5leels5legls5lenl2s3lils4linls4medls4meel3smidls3norls3o4rls3pacl3spanls3parls3plil3spool3sporls3pral4stafl4stakl4stekl4stevl5tamel5t4anlt4hanl4t3hil2t3holt3oliltra3slt3rugluids35luie_luks3tlu3stalut4stlven5slvera4lzooi52m3adv2m3afs4m3afwma3l4ama5lacmal5st5m4an_man3acm3analman5daman5domand4s5m4ann5man2sman4seman4somans3pman4thmant4rm4a5ri5m4arkmar3shmar5tima4stema3str5materma4tommat4stmbo5st5media5mediumee3lomee5remee5rime3g2amega5smei5tjmel5drmel4komel4krmen4asme5norment3wme3p2j2m3e2qme4rapme3raume4ravmer3eimer4klmer4knmer4kwmer5ocme3roome3rotmer4simer4slmers5mme2ru4me3s4hme4s4lmes5lime5slomes3pame5spemesto4me3stume3t4hmf5liemie5klmie3st4m3ijs4m3ijzmimie4mi5nar2m5inr2m3ins4m3inwmi2s3imi3t4amit4stmoed4smoes3pmo4lie4m3omvmond3rmon4somon5tamo3r4emor4spmor4stmo4s5lmo3stamo3t2hmot3olmot4st2m3oudmou4wimp3achm4p3afmp3armm4p3ecmp3insmp3lamm5planmp3legmp3leimp3levmp3liempon4gmp3opemp3recmp3redm5presm5p4sems3anams3lenms3liems3neems5tecm5stelm5stenms5tocmte5remunt3jmus5tamvari5mver3e5n4aam4n1aann4aar_5naars5naast4n3actna5d4a3nade_3nades4n3admna5dra2n1advn2a3g4na3k4l3n4ale5nalen4n3alf4nalysn3a2na5nant_5nantenap3acna3p4rnap5st2n1arb5nares2n3arg2n1armnar4st4n1art3na3sana1s4lna3stana3stu3n4ati4n3atlnat3sp5naven3nazifna4zijnbe5stnces4tnch5trnd3aannd5aasnd3abond3actnd3adrnd3alfnd3almnd3artnd3assnda3stn4d1ein5den_ndera4n4dijsn3d2jin4d5ofnd3olind3omdn5donand5ondn5donsnd3ontnd3oognd3opend3oppnd5rapnd3ratnd4rekn4dresnd3rotnd3rugnd4secnd5setnd3s4ind3sjond4spond3uitnd5uren4d3uunebe4sne4ditneel5dneel3o4n1eennee5rinee5seneet3aneet5oneet3rneet5s4n1effne4gel5neienn5eier5neigd5nei5tne4k3r4nelem4n3emb5n4eme4n3emm4n3emp3n4en_nen5done5nignen5k4nen1o4nep3agnepi3snera4dn3erfene3rosner4slner4spner4stness5aness5tne3stanes3tene4ternet3onnet4sine3umsng3anan4ga4pnga5slnge4adng3embn4gigsn4gindng3inkng5ladng5lamng5lanng5ledng5leung5linng5lopn2g1onng5oorng3oreng3orgng3racng3radng3rain4grasng4redn4g4ring5rieng3rijn5gronng3ruings5lung3uitni3erinie4trnig3ra2n3ijzniks3p2n3in_2n1indning3r2n3inh2n1ins2n1int2n3invni4on_ni4oneni4sauni4selni3sfeni2s3ini3sotnis5toni3t2hnje5spnje5stnk3aann5k4amnkar5snk3effnk3empnken4enk3ladnk3lodnk3lucnk3lusn2k3nan4ko4gnk3ogenkoot5n4krimnk3rolnk3s4mnk4s5onk3waank3weznnee5tnne3nennepo4nne5tennet4jnnoot5noen5snoet5sn5offin3o2geno3k2w4n3om_2n3omw3n2on_3n4onb4n5ondn4o5ni4n5oof4n1oog3noot3noot4j3no3pa4n3opbno4poono4por2n3opz2n1orgnpi4s5npoor4ns3a4dns3alpn3sancn5schonsee5tns5egens3eisns5empns3idin5singns3injns3inkns3intn5sla_n5slagn5slepns4letn5sleun5slibns3lien5slimn5slipns5macn3s4men3smijn3smolns3nodn4snoon4snotn2s3obns3ongns3onzns4oppn2s3ouns3padn5speen5spelns3pern4spetns3poln4spotn3stalns5tecns5tesns3then3stign4stonn3storns3uiln5taalnt3achnt4actnt3agan5t4atn4t3einte4lon5te2nn5tholnt3inwnt5oognt3oplnt3opmnt3optnt3recnt3reint3relntre4snt5rijnt4rount3rusnt5slunt4snont4sprnt5ste4n3uilnu2m3anu4s3onut4stnu2w3inve5nanzet5sobalt31o4bliob5oorocaat55o2ceaoco3s4ode4moode5reod5seiod3s4iod3sliod4s3ood3spood4sprod5staod4steoe2d3aoeda4doede4noed3reoed3rioed3rooe2d3uoe4f1aoef3laoef5leoef3looe2f3roege3loeg5ijoe4gouoei5s4oei5tjoei3troe4kaaoeke4toe2k3loe4k3roe4lapoe4laroel5droe3lemoe5loeoelo5poel3spoem3o4oen3aloe5n4eoen5groen4snoe5plooe4p3roe3praoeps3eoe2p3uoe4raaoe3roeoer3ogoer5omoer4sloer4spoe3sfeoe4slioes4taoes4thoe3stooe4taaoe2t3hoe5t4ioe5toeofd3eiof2d3oof2d3ro3f2raof5slaofs3leof3speofs3plof3spoofs3profs3troft3uroft3uuog3al_oge4roog3staog3stoog4strois5tjok3ankok5letok3o2lok3op_o2k3ouok3s4lok1st4o3l4abol3a2pol3armol3d4ool3d2wol3eksol3emmole3umol3exaolf5slol2g1ool4greol2g3uo5lingol3intol3kafollie4ol3op_ol3oppolo4veol4praol4s5hol3s4lol3s4nol3uito4m3efom3elaomen4some5spo4n3amona3thon5derond3reond3roond5sjon3d4uon4duron3erfon3ervone3st4onet_on1e3vong3ap4ongenong5leong5seong3spong3ston3k2ionnes4o4n3ofo2n1ovon5seion3s4mon2s3nons5opon3soron1s2pons4peon3splon5stron4taa3ont1hon4tidont5sp1ont3wood1e4oo5de_ood3slood3spoog3shoog3slook3s4ook5stoo4k5wool5a2ool3edoo5ligool3ijool1o4oom5a4oom1o4oon5duoon5k4oon5taoop5eeoop3o4oop4spoor1e4oor3g4oor3smoor4thoot3esoot4slo4p3aco4p3afo4p3akop3andop3at_op3att3opbreop5eeto3pen_o5per_o4peraop3e4vop3i2dopie5top3ijzop3in_o5pinaop5losop3ondo5poniop3ontop3ordop3o4vop3ricop5s2c3ops4lop3smaop3staor3achor3actor3admor3anao5rateor4daaord3orore5adore4noo5rig_or3insor5k4eor4masor3ontor1o2por3sagor3slior3smior4sonor5spuor4tofort5sporzet54o3s2co5s4clos5li4os3peros4piros4s5mosta3cos5tanos5taro3staso3statos5te_os4temos5touost3reost3rio3stroot3aarot3aktot3appot3artot3e2do5tee_o5teesote4stot3etao2t1hoot3offot3olvot3ontot3opmoto5poot3opro5t4oro1t4root5s4iot3slaots3liot3smoot4stuou4d1aou4desoue2t3ou4renou2t3oout5spouw5do2o5veeovi5so4p3afdpa4genp4a5gipa2k3a4p4akepa4k5l2p3albpalle4pal4mo5panee5panelpan5sppan4tr3pa3rapar3dapar4kapar5ta3partipart3j3partnparu5r1pa4s3pas4thpas5topas5tr3pa3trp3e2co3pectupee5li1p4eilpek5eepe2k3lpe2k3npel5drpe3l4ipel5sipel3sopel3sp2p3emmpe4nakpe4nappe4naupe4nazp3encypenge5pen3sapen5slpen3smpen5sppen5to2p3epiper4atpe5reqperi3spe3ronpe5rosper4sm3p4hecpie4tjpi2g5apij5kepij4lipi4k3lpilo5gpi5nam3pinda3p4ing5ping_pin4ga4p3injpink3rpink5spin4tapis5tapit4sp2p3ladpla3dip4lant1p4las3p4lat5p4layp3leid3p4len2p3ligp3lonep5loodp3loonp3luie3pneumpoe2s3poes5tpo4kolpo5l4opolo3p2p3oml3pondspon4smpon4stpon5tapoo5de4poog_4poor_po4p3a2p3org2p3orkpor4topo4taappe5nippie5kppij5pp5raad3praktp5rand4p3rapp3remm3prentp3resopret3r4priet3princ5prins3p4rio3p4riu5p4rob3p2roc1p2rodp3roed3proef3proev5p4rof5p2rogpro3lap3roodprooi5pro5papro5sc3proto3pro5vps3a2gps3assps3erkp4s3etp4s3naps3neups3optps3plep3statps5tesps3torpt3albpt3ricpuil3opul4stpunt3jpu2t3oput4stpvari54raand5raar_5raarsra5den5radia3radio4r3adr3rad3sra3fra3ragezra3g2nraket3ra3k4l4r3alfra4manr5ameuran4drran4grra4nimran4klrank3wran4saran4str3antw4rappa2r3arbr4a5re4rarit2r1arm4r3arr2r1artra5seiras3pora4tomra4trara5trirat3sprat4stra3t4ura4zijrbe4tird3alkrd5amar2d3arrde5o4r4d3olrd3ontrd3oosrdo3perd3rasrd3resrd3s4crd5stard5stere4adere3amb4re5atrec5ta2r1eenr5eenhreeps54reersr3eerwree5shrege4s4reindrei5tjre4kapre2k3lre2k5nrek3sprel4direld3rre4mai3r4en_re4naare3nalre5ne_re4nel2r1enire4nocren4ogre3nov5r4enpren4slr4entor3entwre4op43repetre4piere3qua4r1erf2r1ergre3r2o2r3ert4r5ervres5lere2s1pre4temre3t4hre4tikre5tinreus4t3revisr4f3aarf3actrf3levr2f3lirf3lusr4f3opr4f3rer5frear4g3abrg3ambrg4eisr5gen_rge4rar5glasr4g3lurg4o3vr5grijrg3ritr3g4roridde4ri4dolri4doorie5drrie5klrie3kwrie4larie4rorie4tariet3ori4gaar5ijldr5ijltrij3plrij3prrij3spri4k5lri3k4orim4pr4r3inb4r5infring5l4r3inhri4nitr3inko4rinkt4r1inrr3inst4r1invri3o5sri4samri3sotris5torit3ovrit4strk3adrrk3angr2k3eirken4srk5ieprk3ijvrk3inbrkjes5rk3lagrk3loork3lusrk3olmrk3omgrkoot5rk3opgrk3ordrk5os_rk5ossr5krisr5kronrk3s4frk3uitrk3waark5watrk3weerk3winrlofs5rmaf4rr2m3ebr2m5egrm3inhrm3opmrmos5frm3s4arm3uitr5n4amr4n3aprn3arsrnee5trne5ter2n5idr2n1onrn3oorr5nootrn3opsrn3overn3staro3d4oroens4roep3lroet4jr5offiroges5rok3spro2l3arol3g2rol3ovron4daron4kar2o1no4ron2tront3jront3r2r1oorro4paaro4panro5peero4pinrop3shr4opter4o5siro3t2hro5tonrp3aanrp3advrp3ankrp3eisrp5lodrp3ricrp3slirp5sperrie4trron5krrot4jrs3a2drs3a2grs3almrs3ambrs3anarsa4ter5schirseve3r2s3ezrs4ferrs4halr3s2hirs3hotrs3inirs3intr5sjacr5sjour4slanr5slecr5slepr5sleur5slibrs4liers3lobrs5makr3smijrs5misr5smitr2s3nars3neur2s3nors3ongr3spaars3padr5specr5speer5spekr5spitr5spoer5spogr5sponr5spoors3potr5spulrs3putrs5tasr5statr5stesr4stitr4stonrs3usar4t1acrt3af_rt3affr5tansrt3artr5tecort3eigrt3eilrt5embr5ten_rte3norte3ror3therrt3holrtij3krt3offr5tofort3om_rt3ondr4t3opr5torirt4raprt3recr2t4rurt5rukrt5rusrt5seirt2s3lrt3slerts5lirt4slurts5nort4soorude3rr5uitr4ru3kerul3aarul3apru3linrunet3ru3nivru5re_ru5resrus5trrut4strvaat5rve3sprw2t3j5s2aaisaai4s3s2aal3s4aats4a3gi3sa3lasal5ma3s2ame4sa2nasa3nats2a3ne2s3apesa5prosar3ol4s1art3s4ast3sa3te2s3atl2s1att3s2aus5scena3s4ch25schak5schap4schau5sche_s5chec4schef5schen4scheq5scher5schev5schew4schir5schol5schoo5schotsch5ta3scope5scopi3scout4scris4s3ech4s5eed4s1eens5eenhsee5ts4s3ei_4s3eig5sein_5seineseis4tsei5tjsek4st5s4el_sel3adse4lakse4lassel3el5s4elssel3spse2l3usem3oose5nanse4net5sengrse4n3o4s5enqsen5tw5s4er_se1r4aser5ause4reese5ren5sergls5ergo5sergrse5rij4s3ernse5ropsers3pser3stsert5w2s5esk4s3eteset5st4s5etuse4vens5hal_3shampsheid45s4hir3s4hops3hotesie5frsie5klsie5slsie3sosie3stsie5tasie5tosi5go54s1ijz4s3inc4s1ind3sing_s3ingasin3gl4si2nisin5kr4s3inm2s1ins4s5inv4s3inzsis3e4sis5eesis5trsito5vsi4tru3s4ja_2s3je_3s2jeisje4ri3s4jez4sj5k44s3jons4kele3s2kes3s2ki_3skiedskie3sski5scsk3ste3s4la_5slaap4s3lad3s4lag5slagmsla4me3slang5slapesla3pl4s3las2s3lat3s4laz5sleeps4leet4s3leg2s5leis5lengs3leni3slent4s5ler3s4leus5leugs5leus5sleut2s5lev4s3lics5lieds3lief5slijps4li4kslim5as5lini4slinn4s3litslo4b52s3loc3s4loe4s3logs3loods5loons5loosslo4tr4s3lou4s5loz4s5luc1s4lui4sluid5sluit5sluiz2s5lus3smak_2s5mans4mart4s5mat4s5mec3smeed4s5mei4smelo4s5men5smid_smies55s4nap3s4nav3s4nedsnee5t5s4nel2s5nes4s5netsneus4s5neuz1s4nij3s4nip4s5niv3s4noes4nor_s3norm3s4o3d2s1off3so3gaso3lissolo5v3s4om_2s3oms5s4on_so5nar2s1ond3so3no4s3onv4s5oog4s3ooks3oord5soort3s4op_4s5opeso3phis2o5posop4re4s5orkso3rorsor4st3s2ort5spaaks3paal5spaan5spaat5spake3spann4s5pap5spar_s4pari5sparr2spas55spatt5s4pea3s4peespeet34s3pei5spell4s3pens5pen_spe4nas4per_s5peris4perm1s4pie4spijn4spijps5ping5s2pio2s1p4l4s5plas4plets2pli45splin3splits3poes2s3poms4pon_s4ponns4pori4s3pos5spots5sprays5pred5spreis4prek4sprem4spres5spreu4sprik4sprob4sproc4sprof4sprogs4proo4spros5s4puissa1s2s4s5cussei3ss5spaass5pas5staafs4taatst3abo5stads5staf_sta4fo5staki4stakkst3akt5stam_5stamm3stampstan4s4stapo4starist3aut4stavo4s5tax5steaks5tech5steco3s4ted4stedu3steek3steens5teerstee5t5stein5stekk3stell5stem_5stemd5stemm4stemo4stent4stenu4sterms5teru4ste4sst3hedst3heks5thems3thers4t1hos4t1hus4t3hy4sticus4t3ids5tiev4stijdst3ijs3stilsst3impsti5ni4stins4stitest3ivo4s4t1j4stoef3stoel4stoen4stoer4stoes4stoez3s4tof5s4toksto5li4stoma4stomzs4tong3s4too4stora4stordsto5ri4s5tos4stra_s5trag4strais5tref4streg5strel3strepst3rifs5trisst4rom4stroz4st1s42st5t25s4tud4stuin2s4tunst3uni5su4b14s1uit5suit_s5uitl4s1u2nsvaat5svari5sve5risy4n3e3taak_t3aankt3aanw4t3aas3t4acit3adertad4s3t3adve2t3afd5ta3fet3afhata3fro4t1afs2t3afwta4gaa5tagee5tak3rta3laa5tale_5taligtalm3ata4makt3amba5tament3amputa3nagta3nat4t3arb4t1armta2ro4tar5spt3artita3s2pta3stata3str4tatio4t3atl2t1avote3akt5tea4mte4dit4tee4n4t3eeutei4lot5eindtei5tj2t3eiw4tekerte4laptel5da4telec5telef5telegte5lel5televte4loetelo4r4telsetel3sotel5sute4mortem3ov5tempote3nakte4nauten3edten3eltene4tten5k44t5enqten3snten3sptensu45tentaten5tot3entwte4radter3agte3ralte4ranter3apter3as5terecte4reite4relte4rem4terfdter3fr4terk_4terkt5term_5termiter5octe3rodte3rofte3rog5terontero4rte3rostes3tatest3u4t3euvteve4r4t3exetgaat5tge3lat4haant4hans5thee_4t3hei4t3hel3t2hen1t2her4t1hout3houd5thous4t3hovtie5d45tiefstie3knti3enctie5tatie5totie5twtig5aati4gu4tig3urtij5katij4klt3ijs_tij3sttij3t2tij5trtij5tw4t1ijztina4dtin3as4t1indti4nit4t3injt3inko4t3inl4t3ins4t3invti3s4jti4sonti3s4pti3stati1t2rtkars3toe5d4toe5letoe5pl5toeri5toerntoe5sttoe3tj3toetstof5artof3thto4kan5tolaa5tolet5tolicto4lietolk5stolp3r5tomaa3t2one5toneeto5ner3t4ong5tong_3t4oni5t4onnton3sktoom3etop3asto3pento3petto5posto5pust3opvato5rec4t1orgt5orga3toriato4riëto3romto3r2uto1s2ptos5te2t3oudtpe4t35tracé3t4rai5train5trakat3rake3trakt3trans5trap_4t3raz3t4re_5tred_4treda4tredu4t5reg4treizt3reset3resutre2t3t3rib_5tribu5trico5t4riltri5nit3risit3rit_5trodyt3roedt3roes5trofy4trol_5trola5trolo5tromm5tron_5tronat5rond3trone5tronn5trono5tronst3rood5troont4roostro5pi5trotu5truc_5trui_5truiet3ruimts3a2dts5eent4s3eits3intt3sjents4laat3slacts3lamt2s3let5slibt5sloet3s4luts4moets3neuts5norts5notts3olits4oppts1o4rts3padt3spant5spect3spoet3spoots3pott4sprots4prut4start4stast5stedt5steet5stemt5steut1s4tit3stijt5stilts5tints5t4jt3stritte5rit5tlettt3oogtuit4jtu4k3itul5pi3tu4s3tvaat5ube4liuc4t3auc4tinud3essu4de4zud3ezeudi3omud3onduds5louds5maud3smeud3smiud4staud4stiuer3ilu4f3anug4da2ug4derug5sceug4secugs5paug1s4tui2d3aui2d1ouid3spuien4tui2g3oui4g3rui2k3aui4k3luil5aaui4loouil3ovui2m3aui3magui4n1auin5oguin3oruin5toui2p3lui2p3rui2s3aui5sluuit5aauit5alui5tarui2t1o1uit5ruit3sluit3snuit5spu2k3alu3klasuk3s2muk3spauk3spluk4stiul4d3aul5dopul4d3uule5spul3in_u5lingul3innul3k2aul2k3lul3o2pulp3acul2p3lul4p3rul2s3pume3stu2m3uiunch3run4draun4k3run5o2punst3aunst3oun4tagun4t3uupe4rour3aanur3adaur3advur3echur3eenuree5sure5luur3embur3essure3stur3etauri4glur3ijzur3indur3intur4kieur3k4lur5opburs5liur4s5murs5paurs5thur4stiur4trous3a2mu5s2cruse5tjus5tagust3alu2s3teust3oous5trous5truust3urust3uuut3aanutaar5uta3s4ut3eksut5emmut3ooguto3peutop4luto5poutop4rut3saaut3s2cut4spaut4spout3struur3a4uur3e4uur1o2uvel4suve5nauw5artuw3eenu2w3eiu2w3ijuw5ijzu4windu3wingu4winsuw3inzuwo4geuze3t4va2l3ava4loeval5sivan3acvang3avan4grva4nocva3s4ovast3rva2t3hveel5evee3p4ve3g4hvei3s4vei5tjve2n3oven4slven4spve4radvera4gver5dove3recver3edve3regve3reiver5k4ve3romvero5vver5twves5tive2to4vet3ogvet3oove3torve2t3rvid5stvie4s3vies5nvie4tjvings3vis5otvis5trvlot5svol3ijvond5uvooi5tvoorn4vorm3avrie4svrijs4vuur5swaar5ewa3lanwan4grwa2n1owan3s4war4stwart3jwar4towa4s5lwa4s5pwas5trwd3oomwe2d3iwe4d3rwee4kiwee3lowe4g1awe2g3owe4g5rwei5tjwe4k3rwe4le24welemwen3adwe3ne4we4nemwen5tower4kawer4knwer4prwe3spowe2t3jwet4stwe2t3uwie4lawij4kawijs3lwijs3pwind3awi4t3hw2s3lew5spraw4stijxi3staxi3stoxi4t3ixpres5ya4s5pyba2l3yksge4y4l3etym2f5lyvari5zaar5tzags4tza2k3azan3dizan4drzang3szeel5dzeer5szee3s4zeg4slzei3spzel5drze3lemzel2f1zel4soze4ninzen3o4zen4ogze3nonze4r3aze5schze5steze2t3aze2t3hze2t3jze2t3rzeven3ziek3lziek3wziel4szie5slzi2g5azij5klzij3pozij5s4zings3zins3tzit3u4zoet3jzon3sfzon5tazor4glzor4grzui4dr",
7:"_aarts5_alko5v_as5tra_de5sta_edel5a_eesto4_gang5s_ge3l4a_gelo5v_ge3n4a_gena5z_ge5r4e_ge5r4o_her5in_hits5t_houd5s_ka4taa_kerk5l_kerk5r_kerk5u_le4g3r_len4s3_meel5d_merk5l_met5ee_ne4t3j_onde4r_on4tee_on4ter_ooi5tj_pee5tj_piet5j_pui5tj_rand5a_re4men_reno5v_rie4t3_rij5sp_roe5tj_ro4t3h_ski3s4_tan4da_ten5ac_toe5pr_tri3s4_tuit5j_uit4je_vaat5j_wee4ko_wee4t3_west5raad5sapaal5f4oaalfo5laal5speaal5steaam4staaam4ste5aandeeaans4poaarts5labak4s5aboot4jach5tecachuut5ad3e4te4a5gen_a4g3insajaars5a4l3achale5stea4l3o4val3s4agal4s3ooal4stemal5stenals5toualtaar5al4t3roament4jame4rana2m3o4vams5te_and5ankan5d4riand5rooands5loan4d3ulange5stang5snaangs4tea4n5islan4k3asa4n3ooran4servans5piran5struap5etenapo5staa5p4risap4ste_araat5ja4r3appar4d3omar4d3opar4d3ovarie4tja2r1o2pars5talar4t3akart5ankart5oogart5steast5remas5tro_ater5adater5slat5jesbat5jeshat5jesmat5jespat4s3a2at4s3ecat4s3idat4staaat4ste_at5stenat5stijats5tolat4t3u4ave4n3iaven5spave3r4ubaar5tjba4k3o4ban4k3aban4k3obe5l4asbe4l3ecbe3lo5vbemen4sbere5s4bes5te_be5stiebet5renbie4t3jbin4t3jbit4s3pblad5ijble5spebloot5jbo4d3ecboe4g3aboet5stbo2m3a4bond4s5bon4t3jbor4staborst5obraad5sbran4dabra5strbrei5s4bron3o4buts5tebuur4tj2ce3n4acen4t3jcer4t3rce3s4ti5chromocier4s53con5t4da2g3a4da4g3edda4g3ondag4s3td3a4matd2a5me4danoot5dan4s3pdans5ta4d3antw4d3a2pedarm5onddag5spddel5evdder5aldder5eedder5epd4e5dendel5eekdel4s3edem5ondden5ateden3e4p4d3engtden3o4rden5strde4r3adder3a4gder5ededer5egdde4r3eide4r3emde5re4nde4r3im4d3erosder4s3ader5steder5sto4d3ertsde5speldes5takde5stalde4s3tede5sticdes5topdget5ondget5ovdie4r3odi2k3o43d4ing_4d3inkodintel5di5ofon2d3i2rodo4m3o45do3n4odover5s4d3rand4d3reek4d3roei2d3ro5v5d4ru4kd4s5lieds5patid5s4peld4s3petd5staatd4s3tald3s4tatd4sterrds5tramea4k3o4eau3s4techt5ecechts5oede5nacede5rogedoe5tjeek5allee4k3loeel4as_eel5d4ueelo4geee4p3reeer5oomeer5stree4s5emees5potees5teneeto4geeet5rokeet5steefiet5jege4netegen5ofeger5onegiste4e2g3u4reil5antei4n3abei3n4aceind5ooein4d3rei3s4laei3s4taeits5tre4k3a4gekes5trek5etereklam5aek5looseks5erveks5trael5aande4l3as_e4l3aspe4l3assel5eierel3ei5sele5r4ae4l3etae4l3etue4l3indel3o4veel4s5emel5smedemie4tje4n3aase5n4acce4n3ange2n3a2sena4tele4n3atte2n3a2zend5amaen5dreke2n3e2cene4tenen4g5lee4ningae4n3inke4n3oche4n3olie4n3oore2n1o2pens5einen5slaken4s3onens5poten5stanen5stenen4stinente5reen4tervent5rolent4s3p5enveloe5o3t4he4p3appep5ingre4p3lodepoot4j3e4pos_ep5rodeep4s5eeeps5taaeps5taleps5troe4raak_er5aanpe4raap_era4gene4r3alle5randae5ra3pler3a4trer5eerser5einde4r3emmeren5eger5enthe5rentoeren5twere4t3je4r3etse4rijs_e4r3ijze4r3inier5inkte4r3oederoe5tjero5pener5slager5spaners4poter5steme4s3a2ge4s5enges5oor_e4spriee3s4tale4s3te_es4teelest5ei_e4stekae3s4temes5temoe4sten_es5tenbes5tra_es5traces5trake5stralest5rapes5treie4t5elfetens5ueten5tjete5r4aeter5sme4t5i4de4t3ince4t3orke4t5resets5lapet4s3ooets5teket5stenet5su5retui5tjeur4staeuw4strevel5opewest5rfan4t3jfant4s5feest5rfe4l3eefe4l3opfe4r3etfil4m3afilm5onflen4stfond5enfonds5lfon5engfor4t3jf4raak_friet5jf4s3ethf5stellfste4m3f4sterrf4st3ocfter5shgaar5tjga4l3apgan4s5tga5sla_gas5trag4d3elfgeest5rgei4l5a4ge4lem5ge3l4ogel5stege4n3edge4nend4g3engtge4n4ofgen5sfegen5stugeorke5ger5aalger5apeger5as_ge5ren_ger5iniger4sli4g3ertsge5sperge5stanges5te_gges5tiggings5gids5te5gigere5gigstegi4onetgmaat5jgne4t3jgnie4tjgo4n3azgraat5jgroet5jgroot5jgs5alarg3s4ke_gs5laagg5slinggs5pandg3s4pelg3s4petg5spin_g5spinng3s4pongs5taalg5s4tang4st3apg5s4te_g5ster_gs5terrg5stersg5s4ticg3s4tiggs5tijggst3o4vg4s3trags5tradgs5trakgst5ramgs5trapg5stratgst5resgs5troegs5trong5struchaar5slhaar5sphaar5tjhaf4t3uhal4stohand5slhan4s3lharte5lhar5trehart5slhee4l3oheeps5chee5stoheids5phe4l3eehel4m3ahel4p3ahe4r3adhe3r4auhie5renhie4t5ohin4t3jhoboot4hoe4kerhoor5trhop4strhor4t3jho4t3reh4ten5tht5entwhte4r5oh4t3eskh4t3intht5slotht5smijhul4deria4s5po5i4cepaichee4tic4t3opict4s5cider4spider4stids5takids5tekid4stemie4d3aciek3e4viek5ondiek4s5niel5d4riel5ei_i5enne_ien3s4mien4staien4striepiet5iep5oogiep5reliepro4sie5r4adier3a4lier5el_ier5elsie5ren_ie5ringier5sluie4s3plies5te_ie5steliet5antie4t3ogieto5reie4t3ovie5troeieu5r4eiezel5aij5e4n3iks5te_i4l3ervil3e4veilevin4i4l3e2zim4s3ooin4deneind5stein3e4deini5staino3s4tin5stenin4t3apioneel4i5othekipe4t3jips5te_ip5steni5scopei4s3ervi4s5tasis5terdis5tereist5ongi5stro_ite5reiitie5stit4ste_ïe5nen_jaar5tjjagers5jan4s3ljbe4l3ijde4n3ejdens5pj4d3ervj3d4wanjepiet5j2f1en5j3f4latjf4s3erjfs5takjf5stanjf4steljf4s5tojger5sljg3s4tejk5aardj4k3o4ljks5takjk5stanj3k4wasj4n3erkj4n3ervj4n3inkjns5lacjn4ste_jraads5j4s3elaj4s3e4rj3s4tekj3s4telj5stondjst5ranj5strokjvers5pjze4r5okade4t5k3a4genkalf4s5kame4rekan4t3j4k3artikast3o4kast5raka5strokas3u4rkat5aalka4t5ioka4t3ogkee4p5lke4l3opke4n3anken4ei_kens5pokepie5tker4kleker4k3rker4n3aker5speker4sprker4staker4sti4k3ertskes5ten4k3e2tukeviet5khoud5skie4s4tkie5stekings5lkits5tekke5neik5leer_5k4le4ukoe4ketkoers5pkom4strkon4t3jkon4t3rkooi5tjko5pen_3k4o4s3kraads54k3redekrijt5jkroet5jksges5tks5pandk5staank5staatk4st3edks5tentkster5ak4sterrks5trekkst5uitk5trollkven4t35k4waalkwen4st5k2wes1kwes5trlaar5tjlach5telacht4sla4gentlam4p3jlam4p5llam4po4lam4s3pland5aalan4d3rla4n3ec5lange_lang5splan4k3alan4k3llan4t3jla4t3hela4t3rolbert5jl4d3e4zl5dradeld5ranglees5polek5strlen3a4kler5spo4l3erts4l3essales5taale3t4releu5steleven4sl4f3endlge4n5alie4g3alie3s4tlij4m3alijst5alim4p3jlin4k3alin4t3jli5o5s4l4k3ankl4k3levlks5taalks5telller5onlle3s4mllevie5lm3a4caloe4d5aloen4stlo4k3arlo2k3o2lom4p3jlom4p3llon4gaalon4g3olon4t3jlo4s5trlot3a4llraads5l4s3e2dl4s3e2plsge4stl3s4kells4maakls5tak_l5straals5trakl5stratl2t3o4vlts5te_2l3u2nimaat5stma5esto5ma3k4rmans5eeman4s3tmans5tamariet5mar4s5tma3s4pomboot4jmee3k4rmee5lasmee5strme4l4asmel5as_mel3s4mmeng5ramen4t3jme4r4amme5rong4m3erosmers5tame5spotme5stelmest5ovme5ta5nm3e4venmi3s4lami5stramis5tromoers5tmoes4temogen4smol4m3amp5artsm4p3ervmp5oliem4s5tonmte5stamuts5te4n3aardnaar5tjnacee5tna3f4luname5stnan4t3j3na3p4lnarie5tnd5adelndags5pn4d3anan4d3a4zn4d3edinde5laan4d3emmnder5alnder5ognde4tenndie4tjnd5ijs_n4d3inknd3s4cund4spran2d3u4rnege4re5n4end_nen5t4a3n2e5rene4r3idners5tenes4teineu5stengaat5jn2g1a2dn4g3eennge4rapnge4rasn4gigern4g3insng5rassngs5lopng4s5neng5strinie5klenie4s3pni4g3eeni5o5s4ni4s3evni5stelnk5aardn4k3arbn4k3aspnker5kunning5rnooi5tjno4p3asnot5a4pn3s4caln3s4laans5laagns5lap_ns5lappns5lot_n4s3paanst3a4gn4st3eins5teksn5sten_ns5tentn5ster_n4stijvnst5oefn5streens5troens5trogn4t3artnte5radnte4rofn4t5olint5ribbn5troosnts5pren4t3uitn5twijfn5t4wis3n4u5rioa4tievo4b5o4rods5lamod5slanod5smakods5te_od5stekod5stenoe2d3o2oe4f5o4oek5erkoe4k3opoe4l3eioe4m3acoep5indoer5aaloer5ei_oer5eieoer4staoe4s3o4oe4t3o4oe4t3raoet4s3pof4d1a4ofs5traoge5laaogel5eioger5onoge4s3tog4stonogs5troo4k3aaso4k3a4zok3o4peok5sprioks5te_ok5stenok4s5trokter4sola3s4molg5rapol4g3riolo3s4tol5sterome5renomer5klo4m3intom4p5eiom4ste_on4d3acon5d4asond5eteon4d3idond5ijsond5om_ond5sloo2n1e2cong5aanong5aapon4k3apon4k3loonne5ston5sten3ont1s4oon3in5oord5aaoor5dopoor5steoor5sto3o4peniop3e4teop3o4reo2p3u2no4r3algor4d3asor4denvord5ondord3o4vor4drado4r3inkor4m3acor4m3eior4n3acorno3s4or4p3acorp4s5cor5s4paor4t3akort5eenor4t3ooor4tredort5steos5jer_os5taalos5taarost3a4gos5toliost3o4vos5tra_os5traaos5trumote4lanoter5spotje5spot4s3paot4ste_ots5tekot5stenou5ren_ou5rennou2r3o2out5steouw5ins3o4vergover5sppaar5dupaar5tjpacht5spalm5acpa4pe4tpar4k5lpei4l3ape3l4aape4l3akpe4l3eepe3l4orpen5d4rpera3s4pe4r5egper5stiper4str5pe5terpe4t3rapets5tepiek5lapie4r3opie4s3ppij4p3apin5griplaat5j4p3lamp4p3langpla4t3rplee5tjpleu5ropmans5tpo2k3i2poo5lenpoor4tj5portefpo4t3aspotes5tppe4l3opraat5j4preekupre4t3j4p3riekproet5jpro4s5tpro3t4aprut3o4p4s3i2dps5tentps5tronp4t3o4v4r3aardraar5tjraf5ond4r3a2lara4l3eer3a4limran4g3oran4t3jrap5roerast5rir4d3actrden5drr4dervarde5s4trd5olierd5roosrede4s3ree3n4erege5ne5rekenire4k3rerel4d3ore4l3eire4lu4rre5mo5vren5aarre5nadere4n3anren3a4r5rendeere5nen_ren5enkren3e4pre5ner_ren5erfren5erv5r4enklren4oplre4t3ooreur5esreu5ster2f3a4gr4f3engr4f3lagr4f3u4rr4g3eenrgel5drrge5rapr4g3insrg4s5prri5abelriel5aarie4lei5rigste4r5ijl_rij4strrin4k3l4r3innarjaars5r4k3artrker4slr4k3ervr4k3inkr4k3latrk5leidr5k4ranrle4g3rrlink4srlui5t4r4m3artrme4t3jrmet5str4n3enerne4t3jroe4g3rroen5smroe4reirole5stron3a4d5r4onalron4d3oron4d3rron4d5uron4stero3p4larop5rakros4s5tro5stelros5trarot4ste3rou5t4ro5verir4p3o4vr4p3recrp4s5torre4l3urren5s4rri5er_rs4asser4s3eisr3s4hocr3s4katr5slingrs5loepr4s3loor5sluisr5smaakrs5maalr4s3parrs4parers4pener4s3petr5spraar4s3te_r5ster_r5sterkrs5termr5stersrste5str4stevars5tomarst5orars5traprs5treir5strenrs5trogrst5rozr4t3aanrt5aandrt5aanvrte4leirte5star2t5e2vr4t3inir4t3inkrt5jescr4t3rasr3t4rekr4t3resr4t3rolrt4s3prrts5tenrt3ui4tru4l3ij4r5u2nirval4strvloot5rwen4strzet5st3s4a3losan4t3jsart5se3s4cola2s5e2go4se4lemse5ling4s3elitse4m3ac5se3r4ese5t4rasheids5s3in5gr4s3inkosk5ruim5s4laan4s5laars5lamp_s5lampe4s5land3s4la5v3s4lee_4s5leerslee5tjslen4stsle4t3j3s4lier4s3lijf4s5lijs4s5lui_5sluis_sluis4t4s5maat5smeden5s4meet4s5mes3s5muile5smuiltsneu5st4s3oor_4s3oorl3s4opra2s1or3g4spectu5s4perrspie5tjspi5sto5s4pore4sprakt5spriet4s5prij4s5prod5s4pron5staan_4staang4staanwstaat5j2s4t1ac4s3tali3s4tands4t3arcstasie45statio4steenh5stekar5steldhste4leest5elemste5ranster5og4s4t3exs4t3e2zst5heer5stiefe3s4tijg5s4tijl4s5tint5stoel_5stoelest3o4ge4st3oogstoot5jst3o5pest5optosto4rat4st4rad3stra4f5straf_4st3rec4s3treist5rijp4s3troes5troep5strook5stroom4stroos4s5trou4strui_5struikstui5tjst5uitkstu4nie5suits_t5aandotaan4sttaar5sptaat4st5ta5g4l5takkenta5lact5talentt5allia4t3a2natan4d3rtan4k5rtar5taatdor5st4t3echttee4k3lt5eenhetee5rin4t3eier5tekene5tekenste4k3omte4k3witel5ant5telecot5electtel5eentel5ei_tel5eietel5eit5te5lextel5oogte4l3opte4l3uu5temperten4achten3a4gte5narete5noreten5scrtens5uuter3a4btera5catera4dete4r5after5eikte5ren_4t4erf_4t4erftter3k4wte5ronstero5pe5terrei5terreu5terrorter4sprte3s4apte5steltes5tentest5optest5rit5e4van5the3ra4t3heretie4kontien5sttie5s4l5tieven4t3incutin4g3iting4sati3o4p5tmen4sttna4m3o5toelicto5ende5toe1s45toets_5toetsetomaat5tom4p3j4t3om5s5to5nentop5artto4r3ag5torenstor4m3atou4r3etove5nato4vens4toverg4t3raad5trafo_4tragez5transat5redes4t3reistrie5ta5t4rio45t4rititront5j4t5routtrui5t4ts5eindt4s5enet4s3engt4s3ergts5erget4s3e2vt4s3inkt5slag_t4s3pett4s3pilt5s4port4staakts5tantts5tekot5stellt5stelst5ster_t4sterrt5sterst5stijgts5toepts5tongt4storets5tradts5treits5troette5loe3t4wijfucht5sluds5takuge4l5ougs5traui4g5aaui4l3emui4l3ogui4p3o4ui4t3a4ukkers5uk4o3pluld5erkuls5te_uls5telunds5taund5steun4ste_un4st5runst5uiunt5eenun4t5o4unt3s4muper5stu4p3leiu2r3a4ru4r3a2zurelu5rurken5surk4s5tur4servur4s3evur3s4feurs5laaur5spelur5sporurs5tikur5troeus4t3eius5tra_us5tre_u4t3eesuter5anuts5enguts5takut4ste_ut5stenuur5steuur5stiuwe4nenvaar4tavaart5rval4s5pvel4d3ove5nareven4s3evens5lover5aasve4randver5eisve5ren_ve5rendver3e4tver5ijdver5ijlver5ijsve5ringver5spever5staver5stovet4roevet5ste4vicepavie4r3avil4t3jvi4s3anvlei3s4vlie4s5voe4t3avoe4t3rvoet5spvol4g3avol4gravon4detvoor5navrij5k4wan4d5rwang5slwars5tewee4k3rwee3s4twee5stewe4gervwe5nen_wen5enkwen4k3awer4k5lwer4k3ower4k3rwerk5ruwer4k3wwer4p3awer4p3lwer5stewes4t5owijs5tawin4d3rwinst5rwi2t3o4woest5awolf4s5woon5sfwor4g3ewren4stwtje5spxamen5tyber4t3zand5a4zee3r4ozeero5vzen4d3azer4s5ezie4k3ozi4n3a4zin4k3lzins5tazin5strzooi5tjzor4g3azui4d3i",
8:"_aftu5re_den4k5r_eer5ste_ets5te__gerst5a_leid5st_lui5t4j_mij4n5i_neu4t5j_nie4t5j_oot5jes_poort5j_ring5s4_seks5te_taart5j_ten4t5j_ter4p5a_ven4t5j_wen4s5taar4d5asaar5spelaar4t5onan4d3e4dan4s5te_apij4t5jar4s5tekart5jesvart5o4gear4t3o4vataart5jaten4t5rat4s5takats5top_ats5trekbaar5stebbe4l5agbbe4l5eebe4l5intber4g5afber4g5etbes5ten_bis5trooblij5stebon4t5o4bor4st5rda4g3e4tdbou4w5i4d3e4lek4d3e4lit4d3e4maiden4k5ofde4r5as_de4r5assder4s5omder5stra4d3e4tapdeu4r3o44d5ingelds5trekkdtaart5je4d5ernsedors5teeer5stonegel5ei_ege4l5oveger5engeits5te_eit5stenekaart5je4l5inktel4k3u4remens5te5endertie4n3en5te4n3i4voenst5ijven4stu4repits5tee4p5o4geepoort5jerd5uit_er5editie5rendeler5enen_erkeers5errie5tjerui5t4je5smuil_esp5riemes5tatiees5tekamestere5oeters5laeurs5taaeurs5te_eur4s5trevaar5tjeve5n4aafdors5tegast5rolgel4d3a4gen5stongenstu5rger5aap_ge4r3a4lger5slangers5lijge5spendges5ten_gge4r5ongou4d5eegrie4t5jgst5aangguts5te_haams5tahaars5tehar4t3o4hee5tjesheks5te_hek5stenherm5engher4p5aaherts5tehets5te_hits5te_hit5stenhors5te_hor5stenhots5te_hts5taalht4s5takht4s5tekhts5torehuts5te_idde4r5aid5s4meeie4g5insien4st5oienst5uries5tereiets5te_itper5stjks5taakjks5taalj5s4tengkeers5toke4l5intke4r5enkker5ste_ke5straakets5te_4k5indelkors5te_kor4t3o4ko5sjerekots5te_laat5stalan4d5oolang5stalecht5stle4n3a4dle4n3e4m4l3en5thle4r3a4kle4r3e4vle5s4tellets5te_levink5jlicht5stlits5te_lit5stenl4o1r2o3l4s5pootluts5te_ma4l5entmats5te_meest5almee5stovmen4s5uume4r5aakme4r3a4kmer5antemets5te_mits5te_mit5stenmkaart5jmors5te_mots5te_5muilde_naars5tr5n4a5denn5antennnars5te_nar5stennder5aalnde4r5annder5in_nds5taalnegen5en4n3e4migne4n5enkne5s4tekngs5tak_ngs5takengs5treknkaart5jnne4p5olnpoort5jnraads5ln5s4liepnst5aangnst5aansn4s5tekonst5radens5trekknst5roosn4t5aardntaar5tjnte5nachode4m5aroe4r3a4loers5takoers5te_og4st5eionke5lapooms5te_o5rigereor4t5ijlo5steroïover5stepaling5spa4n3a4dpats5te_pe4l3e4tpkaart5jplooi5tjpols5te_pons5te_por4t5rapper5stepren4t5jprie4t5jpring5s4puter5inputs5te_r5angst_rats5te_4re4ditiree5r4adreer5steremie5tjr5endertr5enveerre4t3o4grets5te_rie4k5aprij5ster4r5inganr5ingenirits5te_rit5stenrkaart5jrk4t5e4vrme4r3a4rmors5terons5te_root5sterots5te_rpoort5jrsek5stersorkes5r4s5taakrst5aangr4st5redrte5nachrt4s5ecoruts5te_3s4co5reseks5tense4l3a4g4s3e4lekse4n3a4g4s5impers5ingeniskaart5j5s4loot3slui5ste3so5l4o32s1on4t3sraads5lstaart5jst5e4ros5sterrenstraat5jst5roos_taats5tatament5jte4l3o4g5tenten_teraads5te4r5aakte4r5enkte4r5envte4r5in_ter5ste_ter5stonthoof5ditmens5te5toe3l4atoemaat5to4r5olitors5te_t4s5tankt5s4tes_tte5l4optten4t5jtuurs5lauid5spreuid5ste_uin4s5louits5te_urs5takevals5tekve4l3a4gvens5lanvens5tekven4s3u4vors5te_vor5stenvrij5stewaar5stewer4k3u4wezen4s5winst5aawoor4d5rzoet5ste",
9:"_acht5end_handels5_ker5sten_laat5ste_mor5sten_pers5te__pits5te__raads5le_spoor5tj_wals5te_asting5spboots5te_brie5tje_ebots5te_ekwet5steemor5stenepers5te_espit5steewens5te_flens5te_fpers5te_fpits5te_gfijn5stehaats5te_heers5takhielsges5hts5trekki5otorensjspoort5jkaart5jeskaats5te_ka4t5a4leketting5skinds5te_kkers5tenklots5te_koets5te_kwens5te_lands5te_loens5te_nbots5te_n4d5e4recngels5te_n5opleidinpers5te_ntene5tenomen5ste_poets5te_r4d5e4lasrke5streerke5strerrlaat5sterlinks5ter5treden_rvals5te_rvers5te_rwens5te_slens5te_5smuildenteeds5te_toets5te_udi5ologevens5taakvens5takewrens5te_zwets5te_"
},
patternChars:"_abcdefghijklmnopqrstuvwxyzäçèéêëîïñöûü",
patternArrayLength:299326,
valueStoreLength:51296
};
Hyphenator.config({
useCSS3hyphenation:true
});
Hyphenator.run();