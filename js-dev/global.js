$(document).ready(function(){




// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
//percent*****************************
var bar = new ProgressBar.Circle(percent, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 8,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#dfe8ed', width: 1 },
    to: { color: '#2fb9e7', width: 8 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "%");
      }
  
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '50px';
  bar.text.style.color = '#3c4761';
  
  bar.animate(0.9);  // Number from 0.0 to 1.0

  //percent2*************************
var bar = new ProgressBar.Circle(percent2, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 8,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#dfe8ed', width: 1 },
    to: { color: '#d7457f', width: 8 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "%");
      }
  
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '50px';
  bar.text.style.color = '#3c4761';
  
  bar.animate(0.75);  // Number from 0.0 to 1.0

    //percent3*************************
var bar = new ProgressBar.Circle(percent3, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 8,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#dfe8ed', width: 1 },
    to: { color: '#15c7a7', width: 8 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "%");
      }
  
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '50px';
  bar.text.style.color = '#3c4761';
  
  bar.animate(0.7);  // Number from 0.0 to 1.0

      //percent4*************************
var bar = new ProgressBar.Circle(percent4, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 8,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#dfe8ed', width: 1 },
    to: { color: '#eb7d4b', width: 8 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "%");
      }
  
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '50px';
  bar.text.style.color = '#3c4761';
  
  bar.animate(0.85);  // Number from 0.0 to 1.0

  load_reveal();

});

function load_reveal() {
  var notMobile = $( window ).width() > 767 ? true : false;
  if(notMobile){
    $('.reveal').waypoint({
        handler: function() {
          var delay_time = $(this.element).data('delay') || 0;
          var element = $(this.element);
              setTimeout(function() {
                  element.addClass("animated");
              }, delay_time);
        },
        offset: function() {
          var elemOffset = $(this.element).data('offset') || 0;
              if (Waypoint.viewportWidth() <= 480) {
                  return Waypoint.viewportHeight() - 180;
              }
              return Waypoint.viewportHeight() + elemOffset;
          }
    });
  } else {
    $('.reveal').addClass('animated');
  }
}




var uaDetect = new UAParser().getResult();
// console.log(uaDetect);

FastClick.attach(document.body);

