if(window.snake)snake.wall_every_apple = function() {
  const scripts = document.getElementsByTagName('script');
  for(let script of scripts) {
    if(script.src === '' || script.src.includes('apis.google.com'))continue;
    const req = new XMLHttpRequest();
    req.open('GET', script.src)
    req.onload = function() {
      if(this.responseText.indexOf('trophy') === -1)
        return;
      
      eval(
        this.responseText.match(
          /[a-zA-Z0-9_$]{1,8}\.prototype\.update=function\(\){[^]*?}}}}/
        )[0].replace(
          /1===this\.[a-zA-Z0-9_$]{1,8}%2&&/,
          ''
        )
      );
    };
    req.send();
  }
};
