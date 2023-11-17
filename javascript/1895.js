var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, 'dark', {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: [ 'Temperaturas bajo 0º Centígrados', 'Temperaturas sobre 0º Centígrados']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'value'
    }
  ],
  yAxis: [
    {
      type: 'category',
      axisTick: {
        show: false
      },
      data: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre', 'Noviembre', 'Diciembre']
    }
  ],
  series: [
    
    {
      name: 'Temperaturas sobre 0º Centígrados',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'right',
        formatter: function (params) {
          return `${params.value}ºC`;
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [,, , , , , , , , , , ]
    },
    {
      name: 'Temperaturas bajo 0º Centígrados',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'left',
        formatter: function (params) {
          return `${params.value}ºC`;
        }
      },
      emphasis: {
        focus: 'series'
      },
    
      data: [-40 , -42 , -32,  -22,  -27 , -21 , -16  ,-17 , -12,  -10,  -16 , -13]
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
var chartContainer = document.getElementById('chart-container');
var screenWidth = window.innerWidth;

chartContainer.style.width = screenWidth * 0.8;




// Crea un array de tonos que corresponda a cada mes
// Crea un array de tonos que corresponda a cada mes
const tonos = [ -40 , -42 , -32,  -22,  -27 , -21 , -16  ,-17 , -12,  -10,  -16 , -13];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre', 'Noviembre', 'Diciembre'];

// Genera los botones dinámicamente
const box = document.querySelector('.box');

// ... Tu código JavaScript existente ...

for (let i = 0; i < 12; i++) {
  const boton = document.createElement('button');
  
  const nombreMes = meses[i % meses.length];

  boton.innerText = `${nombreMes}`;
  boton.classList.add('boton-tono');

  // Agrega una imagen como fondo solo para los botones con la clase boton-tono
  const imagen = document.createElement('div');
  imagen.classList.add('boton-imagen');
  imagen.style.backgroundImage = 'url(./cl.png)';  // Reemplaza 'tu-imagen.jpg' con la ruta de tu imagen
  boton.appendChild(imagen);

  box.appendChild(boton);

  const tono = tonos[i];
  boton.addEventListener('click', () => reproducirTono(tono));
}




// Función para reproducir tono usando Tone.js
function reproducirTono(valor) {
  const synth = new Tone.Synth().toDestination();
  // Mapea el valor al rango MIDI
  const frecuencia = Tone.Frequency(valor + 60, "midi");

  // Reproduce el tono durante al menos 2 segundos
  synth.triggerAttackRelease(frecuencia, "2n");
}


const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});









