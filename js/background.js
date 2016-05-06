console.log("Evil Censor");
var REDIR_RULES = {

  //
  // Ruska propaganda
  //

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'ac24.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'aeronet.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'afinabul.blog.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'alternews.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'auria.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'badatel.net': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'badatel.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'beo.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'bezpolitickekorektnosti.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'cez-okno.net': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'czech.ruvr.ru': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'czechfreepress.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'dolezite.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'eiaktivity.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'freepub.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'hlavnespravy.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'inespravy.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'magnificat.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'nadhlad.com': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'nazorobcana.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'neskutocne.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'nwoo.org': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'obcianskytribunal.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'orgo-net.blogspot.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'osud.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'panobcan.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'parlamentnelisty.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'parlamentnilisty.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'pravdive.eu': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'protiprudu.org': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'rodinajezaklad.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'sho.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'slobodnyvysielac.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'slovak.ruvr.ru': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'slovenskeslovo.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'spolocnostsbm.com': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'svetkolemnas.info': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'svobodnenoviny.eu': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'vaseforum.sk/blog': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'vkpatriarhat.org.ua': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'vlastnihlavou.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'voxvictims.com': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'ze-sveta.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'zemavek.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // http://echo24.cz/a/isYwV/42-ceskych-a-slovenskych-webu-ktere-siri-ruske-lzi
  'zvedavec.org': 'http://moralizer.github.io/ruska_propaganda.html',

  // https://www.konspiratori.sk/zoznam-stranok.php
  'badatel.net': 'http://moralizer.github.io/ruska_propaganda.html',

  // https://www.konspiratori.sk/zoznam-stranok.php
  'conspi.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // https://www.konspiratori.sk/zoznam-stranok.php
  'prvopodstata.com': 'http://moralizer.github.io/ruska_propaganda.html',

  // https://www.konspiratori.sk/zoznam-stranok.php
  'stalo-se.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // https://www.konspiratori.sk/zoznam-stranok.php
  'nekorektni-tv.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // https://www.konspiratori.sk/zoznam-stranok.php
  'zemejas.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // https://www.konspiratori.sk/zoznam-stranok.php
  'freeglobe.parlamentnilisty.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // https://www.konspiratori.sk/zoznam-stranok.php
  'nemesis.sk': 'http://moralizer.github.io/ruska_propaganda.html',

  // https://www.konspiratori.sk/zoznam-stranok.php
  'novarepublika.cz': 'http://moralizer.github.io/ruska_propaganda.html',

  // https://www.konspiratori.sk/zoznam-stranok.php
  'vlasteneckenoviny.cz': 'http://moralizer.github.io/ruska_propaganda.html',

};

var intendedState = 0;
var actualState = 0;

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  if (actualState == 1) {
    for (var k in REDIR_RULES) {
      if (REDIR_RULES.hasOwnProperty(k) && details.url.indexOf(k) != -1) {
        console.log(JSON.stringify(details));
        console.log("Redirecting to " + REDIR_RULES[k]);
        return {redirectUrl: REDIR_RULES[k]};
      }
    }
  }
},{urls: ["<all_urls>"]},["blocking"]);
chrome.webRequest.handlerBehaviorChanged(function() {});

chrome.browserAction.onClicked.addListener(function() {
  if (intendedState == 0) {
    console.log("Button clicked. State transition from off => on");
    intendedState = 1;
    chrome.browserAction.setIcon({path: 'img/sun36.png'});
  } else {
    console.log("Button clicked. State transition from on => off");
    intendedState = 0;
    chrome.browserAction.setIcon({path: 'img/block.png'});
  }
});

//Check proxy settings every second and turn blocking off if set
function checkProxy() {
  console.log('Checking proxy settings');
  var uproxyOn;
  chrome.proxy.settings.get({'incognito': false}, function(config) {
    if (config && config.value && config.value.mode &&
        (config.value.mode == 'pac_script' || config.value.mode == 'fixed_servers')) {
      uproxyOn = true;
    } else {
      uproxyOn = false;
    }
    if (uproxyOn && actualState == 1) {
      console.log("Chrome Proxy Settings are set. Turning censorship off");
      actualState = 0;
    } else if (!uproxyOn && intendedState == 1 && actualState == 0) {
      console.log("Chrome Proxy Settings are not set. Devil's on");
      actualState = 1;
    } else if (!uproxyOn && intendedState == 0 && actualState == 1) {
      console.log("Chrome Proxy Settings are not set. Alien's on");
      actualState = 0;
    }
  });
  setTimeout(checkProxy, 1000);
};
setTimeout(checkProxy, 1000);
