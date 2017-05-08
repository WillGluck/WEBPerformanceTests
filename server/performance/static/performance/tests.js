function hideItemOriginal(element) {
    $(element).hide(300, function() {
        element.remove();
    });
}

function hideItemFLIP(element) {

  var items = document.getElementsByClassName('item');

  var startList = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    startList[i] = items[i].getBoundingClientRect();
  }

  element.classList.add('remove');

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var end = items[i].getBoundingClientRect();
    var x = startList[i].left - end.left;
    var y = startList[i].top - end.top;
    items[i].style.transform = `translate(${x}px, ${y}px)`;

  }

  requestAnimationFrame(function() {
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      items[i].style.transform = '';
      items[i].classList.add('anima')
    }
  });

  element.addEventListener('transitionend', function() {
      var items = document.getElementsByClassName('item');
      for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('anima');
      }
      element.remove();
  });
}

// function hoverInOriginal() {
//   $(this).addClass('anima');
// }
//
// function hoverOutOriginal() {
//   $(this).removeClass('anima');
// }
//
// function hoverInGPU() {
//   $(this).addClass('animaGPU');
// }
//
// function hoverOutGPU() {
//   $(this).removeClass('animaGPU');
// }

function doOriginal() {
  console.log('Método original iniciando');
  for (var i  = 0; i < 2000; i++) {
    doSomething();
  }
  console.log('Método original finalizando');
}

function doWithSetTimeout() {
  console.log('Método com setTimeout iniciando');
  for (var i  = 0; i < 2000; i++) {
    setTimeout(doSomething, 0);
  }
  console.log('Método com setTimeout finalizando');
}

function doWithWorkers(workerPath) {
  //Quem avisa do início e finalização é o worker
  worker = new Worker(workerPath);
}

function doSomething() {
  for (var i = 0; i < 9999999; i++) {
    var x = 100000*100000;
  }
}
