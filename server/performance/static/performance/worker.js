
function doSomething() {
  for (var i = 0; i < 9999999; i++) {
    var x = 100000*100000;
  }
}

function doWorker() {
  console.log('Método no worker iniciado');
  for (var i  = 0; i < 2000; i++) {
    doSomething();
  }
  console.log('Método no worker finalizado');
}

doWorker();
