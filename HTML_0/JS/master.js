
var Body = {
    bodySetColor : function(color)
    {
      $('body').css('color', color);
      // document.querySelector('body').style.color = color;
    },
  
    bodyBgSetColor : function(color)
    {
      $('body').css('background-color', color);
      // document.querySelector('body').style.backgroundColor = color;
    }
  }
  
  var Link = {
    linkSetColor : function(color)
    {
      $('a').css('color', color);
      /*
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) 
      {
        alist[i].style.color = color;
        i = i + 1;
      }
      */
    }
  }
  
  function nightDayHandler(self)
  {
    if(self.value == 'day'){
      Body.bodyBgSetColor('white');
      Body.bodySetColor('black');            
      Link.linkSetColor('blue');
      self.value = 'night';
    } 
    else {
      Body.bodyBgSetColor('black');
      Body.bodySetColor('white');        
      Link.linkSetColor('powderblue');
      self.value = 'day';
    }  
  }