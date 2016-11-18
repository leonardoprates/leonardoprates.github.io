(function() {
  // $(document).ready(function() {
  //   $('body').fadeIn(3000);
  // });
  var wakeUpLeo = 'Wake up, Leo...\nThe Matrix has you...\nFollow the white rabbit.\nKnock, knock, Leo.';

  function typeOut(c, t) {
    setTimeout(function() {
      document.getElementById('white-rabbit').innerHTML += c;
    }, t * 50);
  }

  function start() {
    for (var i = 0; i < wakeUpLeo.length; i++) {
      typeOut(wakeUpLeo[i], i);
    }
    $('#matrix').hide(wakeUpLeo.length * 125);
  }
  start();
  console.log(["         ##################################          ",               "          #                                #          ",               "          # 037                         5  #          ",               "          #                             4  #          ",               "          #     ###                     2  #          ",               "          #     ###                     5  #          ",               "          #     ###                     4  #          ",               "          #     ###       ###########   3  #          ",               "          #     ###       ###       ##     #          ",               "          #     ###       ###       ##     #          ",               "          #     #####################      #          ",               "          #               ###              #          ",               "          #               ###              #          ",               "          #               ###              #          ",               "          #                                #          ",               "          #        53662736-772837         #          ",               "          #                                #          ",               "          ##################################          ",               "======================================================",               "  GitHub          https://github.com/odran037         ",               " CodePen          http://codepen.io/odran037          ",               "LinkedIn          https://www.linkedin.com/in/odran037",               "======================================================"].join('\n'));
  console.log(["         ##################################          ",               "          #                                #          ",               "          # 037                         5  #          ",               "          #                             4  #          ",               "          #     ###                     2  #          ",               "          #     ###                     5  #          ",               "          #     ###                     4  #          ",               "          #     ###       ###########   3  #          ",               "          #     ###       ###       ##     #          ",               "          #     ###       ###       ##     #          ",               "          #     #####################      #          ",               "          #               ###              #          ",               "          #               ###              #          ",               "          #               ###              #          ",               "          #                                #          ",               "          #        53662736-772837         #          ",               "          #                                #          ",               "          ##################################          ",               "======================================================",               "  GitHub          https://github.com/odran037         ",               " CodePen          http://codepen.io/odran037          ",               "LinkedIn          https://www.linkedin.com/in/odran037",               "======================================================"].join('\n'));
}).call(this);
