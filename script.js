var S=[["Andhra Pradesh","ஆந்திரப் பிரதேசம்","ap.gov.in"],["Arunachal Pradesh","அருணாசலப் பிரதேசம்","arunachalpradesh.gov.in"],["Assam","அசாம்","assam.gov.in"],["Bihar","பிகார்","state.bihar.gov.in"],["Chhattisgarh","சத்தீஸ்கர்","cg.gov.in"],["Goa","கோவா","goa.gov.in"],["Gujarat","குஜராத்","gujaratindia.gov.in"],["Haryana","ஹரியானா","haryana.gov.in"],["Himachal Pradesh","இமாசலப் பிரதேசம்","himachal.nic.in"],["Jharkhand","ஜார்க்கண்ட்","jharkhand.gov.in"],["Karnataka","கர்நாடகா","karnataka.gov.in"],["Kerala","கேரளா","kerala.gov.in"],["Madhya Pradesh","மத்தியப் பிரதேசம்","mp.gov.in"],["Maharashtra","மகாராஷ்டிரா","maharashtra.gov.in"],["Manipur","மணிப்பூர்","manipur.gov.in"],["Meghalaya","மேகாலயா","meghalaya.gov.in"],["Mizoram","மிசோரம்","mizoram.gov.in"],["Nagaland","நாகாலாந்து","nagaland.gov.in"],["Odisha","ஒடிசா","odisha.gov.in"],["Punjab","பஞ்சாப்","punjab.gov.in"],["Rajasthan","ராஜஸ்தான்","rajasthan.gov.in"],["Sikkim","சிக்கிம்","sikkim.gov.in"],["Tamil Nadu","தமிழ்நாடு","tn.gov.in"],["Telangana","தெலங்கானா","telangana.gov.in"],["Tripura","திரிபுரா","tripura.gov.in"],["Uttar Pradesh","உத்தரப் பிரதேசம்","up.gov.in"],["Uttarakhand","உத்தராகண்ட்","uk.gov.in"],["West Bengal","மேற்கு வங்காளம்","wb.gov.in"]];
var T={
ta:{loginTitle:"உள்நுழைவு",loginSub:"பயனர் பெயர் மற்றும் கைபேசி எண்ணை உள்ளிடுக",user:"பயனர் பெயர்",phone:"கைபேசி எண்",send:"OTP அனுப்பு",otp:"OTP உள்ளிடுக",verify:"சரிபார்",logout:"வெளியேறு",greet:"நீங்கள் அதிர்ஷ்டசாலி, ",open:"அரசு இணையதளம் திற",next:"அடுத்த மாநிலம் ↓",bad:"பெயர் மற்றும் 10 இலக்க கைபேசி எண் தேவை",sent:"டெமோ OTP: ",wrong:"OTP தவறு"},
en:{loginTitle:"Login",loginSub:"Enter your username and mobile number",user:"Username",phone:"Mobile number",send:"Send OTP",otp:"Enter OTP",verify:"Verify",logout:"Logout",greet:"You are lucky, ",open:"Open government website",next:"Next state ↓",bad:"Enter a name and a 10-digit mobile number",sent:"Demo OTP: ",wrong:"Wrong OTP"},
hi:{loginTitle:"लॉगिन",loginSub:"उपयोगकर्ता नाम और मोबाइल नंबर दर्ज करें",user:"उपयोगकर्ता नाम",phone:"मोबाइल नंबर",send:"OTP भेजें",otp:"OTP दर्ज करें",verify:"सत्यापित करें",logout:"लॉगआउट",greet:"आप भाग्यशाली हैं, ",open:"सरकारी वेबसाइट खोलें",next:"अगला राज्य ↓",bad:"नाम और 10 अंकों का मोबाइल नंबर दर्ज करें",sent:"डेमो OTP: ",wrong:"गलत OTP"},
te:{loginTitle:"లాగిన్",loginSub:"మీ వినియోగదారు పేరు మరియు మొబైల్ నంబర్ నమోదు చేయండి",user:"వినియోగదారు పేరు",phone:"మొబైల్ నంబర్",send:"OTP పంపండి",otp:"OTP నమోదు చేయండి",verify:"ధృవీకరించండి",logout:"లాగ్అవుట్",greet:"మీరు అదృష్టవంతులు, ",open:"ప్రభుత్వ వెబ్‌సైట్ తెరవండి",next:"తదుపరి రాష్ట్రం ↓",bad:"పేరు మరియు 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి",sent:"డెమో OTP: ",wrong:"OTP తప్పు"},
kn:{loginTitle:"ಲಾಗಿನ್",loginSub:"ನಿಮ್ಮ ಬಳಕೆದಾರ ಹೆಸರು ಮತ್ತು ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",user:"ಬಳಕೆದಾರ ಹೆಸರು",phone:"ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",send:"OTP ಕಳುಹಿಸಿ",otp:"OTP ನಮೂದಿಸಿ",verify:"ಪರಿಶೀಲಿಸಿ",logout:"ಲಾಗ್ ಔಟ್",greet:"ನೀವು ಅದೃಷ್ಟವಂತರು, ",open:"ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ ತೆರೆಯಿರಿ",next:"ಮುಂದಿನ ರಾಜ್ಯ ↓",bad:"ಹೆಸರು ಮತ್ತು 10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",sent:"ಡೆಮೊ OTP: ",wrong:"OTP ತಪ್ಪಾಗಿದೆ"},
ml:{loginTitle:"ലോഗിൻ",loginSub:"നിങ്ങളുടെ ഉപയോക്തൃനാമവും മൊബൈൽ നമ്പറും നൽകുക",user:"ഉപയോക്തൃനാമം",phone:"മൊബൈൽ നമ്പർ",send:"OTP അയയ്ക്കുക",otp:"OTP നൽകുക",verify:"സ്ഥിരീകരിക്കുക",logout:"ലോഗൗട്ട്",greet:"നിങ്ങൾ ഭാഗ്യവാനാണ്, ",open:"സർക്കാർ വെബ്‌സൈറ്റ് തുറക്കുക",next:"അടുത്ത സംസ്ഥാനം ↓",bad:"പേരും 10 അക്ക മൊബൈൽ നമ്പറും നൽകുക",sent:"ഡെമോ OTP: ",wrong:"OTP തെറ്റാണ്"},
bn:{loginTitle:"লগইন",loginSub:"আপনার ব্যবহারকারীর নাম ও মোবাইল নম্বর দিন",user:"ব্যবহারকারীর নাম",phone:"মোবাইল নম্বর",send:"OTP পাঠান",otp:"OTP দিন",verify:"যাচাই করুন",logout:"লগআউট",greet:"আপনি ভাগ্যবান, ",open:"সরকারি ওয়েবসাইট খুলুন",next:"পরবর্তী রাজ্য ↓",bad:"নাম ও 10 সংখ্যার মোবাইল নম্বর দিন",sent:"ডেমো OTP: ",wrong:"OTP ভুল"},
mr:{loginTitle:"लॉगिन",loginSub:"तुमचे वापरकर्ता नाव आणि मोबाइल क्रमांक टाका",user:"वापरकर्ता नाव",phone:"मोबाइल क्रमांक",send:"OTP पाठवा",otp:"OTP टाका",verify:"सत्यापित करा",logout:"लॉगआउट",greet:"तुम्ही भाग्यवान आहात, ",open:"सरकारी संकेतस्थळ उघडा",next:"पुढील राज्य ↓",bad:"नाव आणि 10 अंकी मोबाइल क्रमांक टाका",sent:"डेमो OTP: ",wrong:"OTP चुकीचा आहे"},
gu:{loginTitle:"લૉગિન",loginSub:"તમારું વપરાશકર્તા નામ અને મોબાઇલ નંબર દાખલ કરો",user:"વપરાશકર્તા નામ",phone:"મોબાઇલ નંબર",send:"OTP મોકલો",otp:"OTP દાખલ કરો",verify:"ચકાસો",logout:"લૉગઆઉટ",greet:"તમે ભાગ્યશાળી છો, ",open:"સરકારી વેબસાઇટ ખોલો",next:"આગળનું રાજ્ય ↓",bad:"નામ અને 10 અંકનો મોબાઇલ નંબર દાખલ કરો",sent:"ડેમો OTP: ",wrong:"OTP ખોટો છે"}
};
var L=[["ta","தமிழ்"],["en","English"],["hi","हिन्दी"],["te","తెలుగు"],["kn","ಕನ್ನಡ"],["ml","മലയാളം"],["bn","বাংলা"],["mr","मराठी"],["gu","ગુજરાતી"]];
var lang="ta",idx=0,user="",code="";
var $=function(i){return document.getElementById(i)};

function langBars(){
  ["langL","langA"].forEach(function(id){
    var el=$(id);el.innerHTML="";
    var cur=L.filter(function(l){return l[0]===lang})[0];
    var w=document.createElement("div");w.className="lw";
    var b=document.createElement("button");b.type="button";b.className="langbtn";
    b.textContent="🌐 "+cur[1]+" ▾";b.setAttribute("aria-expanded","false");
    var m=document.createElement("ul");m.className="menu hidden";
    L.forEach(function(l){
      var li=document.createElement("li"),x=document.createElement("button");
      x.type="button";x.textContent=l[1];
      if(l[0]===lang)x.setAttribute("aria-current","true");
      x.onclick=function(){lang=l[0];document.documentElement.lang=lang;paint()};
      li.appendChild(x);m.appendChild(li);
    });
    b.onclick=function(e){e.stopPropagation();var o=m.classList.toggle("hidden");b.setAttribute("aria-expanded",String(!o))};
    w.appendChild(b);w.appendChild(m);el.appendChild(w);
  });
}
document.addEventListener("click",function(){document.querySelectorAll(".menu").forEach(function(m){m.classList.add("hidden")})});
function nm(s){return lang==="ta"?s[1]:s[0]}
function paint(){
  var t=T[lang];
  document.querySelectorAll("[data-t]").forEach(function(e){e.textContent=t[e.dataset.t]});
  langBars();
  $("greet").textContent=user?t.greet+user:t.greet.replace(/[,\s]+$/,"")+"!";
  $("who").textContent=user;
  $("open").textContent=t.open;
  $("next").textContent=t.next;
  var sel=$("sel"),ls=$("list");
  sel.innerHTML="";ls.innerHTML="";
  S.forEach(function(s,i){
    var o=document.createElement("option");o.value=i;o.textContent=nm(s);sel.appendChild(o);
    var li=document.createElement("li"),b=document.createElement("button");
    b.type="button";b.textContent=nm(s);b.onclick=function(){go(i)};
    li.appendChild(b);ls.appendChild(li);
  });
  show();
}
function show(){
  var s=S[idx];
  $("sel").value=idx;
  $("sname").textContent=nm(s);
  $("sen").textContent=lang==="ta"?s[0]:"";
  $("surl").textContent="https://"+s[2];
  $("open").href="https://"+s[2];
  $("count").textContent=(idx+1)+" / "+S.length;
  var bs=$("list").querySelectorAll("button");
  bs.forEach(function(b,i){
    if(i===idx){b.setAttribute("aria-current","true");b.scrollIntoView({block:"nearest"})}
    else b.removeAttribute("aria-current");
  });
}
function go(i){idx=(i+S.length)%S.length;show()}
$("sel").onchange=function(){go(+this.value)};
$("next").onclick=function(){go(idx+1)};

function say(txt,bad){var m=$("msg");m.textContent=txt;m.className="msg"+(bad?" err":"")}
$("send").onclick=function(){
  var n=$("uname").value.trim(),p=$("phone").value.trim();
  if(!n||!/^[6-9]\d{9}$/.test(p)){say(T[lang].bad,true);return}
  code=String(Math.floor(100000+Math.random()*900000));
  $("otpBox").classList.remove("hidden");
  say(T[lang].sent+code);
};
$("verify").onclick=function(){
  if($("otp").value.trim()!==code||!code){say(T[lang].wrong,true);return}
  user=$("uname").value.trim();
  $("login").classList.add("hidden");$("home").classList.remove("hidden");homePaint();
  paint();
};
$("out").onclick=function(){
  user="";code="";$("otp").value="";$("otpBox").classList.add("hidden");say("");
  $("app").classList.add("hidden");$("login").classList.remove("hidden");
};
var CODES='AP AR AS BR CG GA GJ HR HP JH KA KL MP MH MN ML MZ NL OD PB RJ SK TN TG TR UP UK WB'.split(' ');
var POS='4,4 8,0 7,1 5,1 4,2 2,4 0,2 3,1 3,0 5,2 3,4 3,5 3,2 2,3 8,2 7,2 8,3 8,1 5,3 2,0 1,1 6,1 4,5 3,3 7,3 4,1 4,0 6,2'.split(' ');
var TABS=[['news','செய்திகள்'],['jobs','வேலைவாய்ப்பு'],['biz','வணிகம்'],['cinema','சினிமா'],['weather','வானிலை']];
var tab='news',hs=22;
function card(t,f){return '<section class="blk" style="flex:'+f+'"><h4>'+t+'</h4><p>மாதிரி உள்ளடக்கம் 1</p><p>மாதிரி உள்ளடக்கம் 2</p><p>மாதிரி உள்ளடக்கம் 3</p></section>'}
function hbody(){$('hbody').innerHTML=tab==='news'?card('உலகச் செய்திகள்',3)+card('மாநிலச் செய்திகள் – '+S[hs][1],3)+card('சினிமா செய்திகள்',4):card(TABS.filter(function(x){return x[0]===tab})[0][1],1)}
function homePaint(){
  $('hw').textContent='வரவேற்பு, '+user;
  var tb=$('tabs');tb.innerHTML='';
  TABS.forEach(function(x){var b=document.createElement('button');b.type='button';b.textContent=x[1];if(x[0]===tab)b.setAttribute('aria-current','true');b.onclick=function(){tab=x[0];homePaint()};tb.appendChild(b)});
  var mp=$('map');mp.innerHTML='';
  S.forEach(function(s,i){var p=POS[i].split(','),a=document.createElement('a');a.href='https://'+s[2];a.target='_blank';a.rel='noopener noreferrer';a.title=s[1];a.textContent=CODES[i];a.style.cssText='grid-column:'+(+p[0]+1)+';grid-row:'+(+p[1]+1)+';background:hsl('+(i*47%360)+',65%,62%)';a.onmouseenter=function(){hs=i;if(tab==='news')hbody()};mp.appendChild(a)});
  hbody();
}
$('toState').onclick=function(){$('home').classList.add('hidden');$('app').classList.remove('hidden')};
$('toHome').onclick=function(){$('app').classList.add('hidden');$('home').classList.remove('hidden');homePaint()};
$('hout').onclick=function(){user='';code='';$('otp').value='';$('otpBox').classList.add('hidden');say('');$('home').classList.add('hidden');$('login').classList.remove('hidden')};
var tm;function wake(){document.body.classList.add("show");clearTimeout(tm);tm=setTimeout(function(){document.body.classList.remove("show")},1000)}
document.addEventListener("mousemove",wake);
document.addEventListener("touchstart",wake,{passive:true});
wake();
paint();
