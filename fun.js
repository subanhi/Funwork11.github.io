SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'
});


$(document).ready(function()   {
  SC.stream('/tracks/571200702', function(sound) {
  $('#start').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

  SC.stream('/tracks/496210638', function(sound) {
  $('#start1').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop1').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

 SC.stream('/tracks/362416091', function(sound) {
  $('#start2').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stopp2').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

 SC.stream('/tracks/316859203', function(sound) {
  $('#start3').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop3').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

SC.stream('/tracks/470135838', function(sound) {
 $('#start4').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop4').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/307052563', function(sound) {
 $('#start5').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop5').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/311984836', function(sound) {
 $('#start6').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop6').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/312893594', function(sound) {
 $('#start7').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop7').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/316858445', function(sound) {
 $('#start8').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop8').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});
SC.stream('/tracks/316859203', function(sound) {
 $('#start9').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop9').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});
SC.stream('/tracks/317201599', function(sound) {
 $('#start10').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop10').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});
SC.stream('/tracks/383531648', function(sound) {
 $('#start11').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop11').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});
});
