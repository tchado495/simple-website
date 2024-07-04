const data = [100, 120, 150, 180, 200, 220, 280, 300, 320, 370]
//const chartWrapper = document.querySelector('.chart-wrapper')
const addBarGraph = document.querySelector('#add-bar-graph')
const addHistograph = document.querySelector('#add-histograph')
const addCircleGraph = document.querySelector('#add-circle-graph')
const chartHisto = document.querySelector('.chart-histo')
const chartCircle = document.querySelector('.chart-circle')

const arraycolor = ['lightyellow','lightgreen','lightblue','pink','orange','lightpink','brown','lightgray','lightyellow','lightgreen'];
var wh = 50; var wcir = 0; var mr = 5; var ht = 60; var tp = 300; var magincir = 0; var quot = 1; let active = false;

document.getElementById('output_image0').onclick = function() {
	window.location.replace("Principale.html");
}
alert('window : ' +window.innerWidth);
if(window.innerWidth <= 800){
	chartCircle.innerHTML = ''; chartHisto.innerHTML = '';
	//chartWrapper.style.display = "grid"; chartWrapper.style.gap = "20px"; chartWrapper.style.marginLeft = "5px";
	chartHisto.style.height = "220px"; chartHisto.style.width = "200px"; //chartHisto.style.display = "flex";
        chartHisto.style.left = "5px";
	chartCircle.style.height = "220px"; chartCircle.style.width = "200px"; chartCircle.style.left = "5px";
	//chartCircle.style.display = "grid";
	chartCircle.style.top = "50%"; //chartHisto.style.marginTop = "10px"; chartWrapper.style.top = "10px";
	wh = 22; mr = 2; ht = 90; wcir = 0; tp = 230; quot = 4; active = true; //alert('resizing 0 !');
}

const createBarGraph = data => {
  let div
  data.forEach(number => {
    div = document.createElement('div')
    div.textContent = number
    div.classList.add('bar', 'bar-graph')
    Object.assign(div.style, {
      width: (number / 500) * 100 + '%',
      backgroundColor: `rgba(255, 165, 0,${number / 500})`
    })
    chartWrapper.appendChild(div)
  })
}
//createBarGraph(data)

const createHistograph = data => {
  let div;
  let a = 0;
  data.forEach(number => {
    div = document.createElement('div')
	if(active == false){
		div.textContent = number
	}else{
		quot = 1.3;
	}
    div.classList.add('bar', 'histograph')
    //rgb(255, 165, 0)
    Object.assign(div.style, {
      width: wh + 'px',
      height: number/quot - ht + 'px', 
      marginRight: mr + 'px',
      backgroundColor: arraycolor[a]
    })
    //backgroundColor: `rgba(255, 165, 0,${number / 300})`
    a++;
    chartHisto.appendChild(div)
    //chartWrapper.appendChild(div)
  })
}
const createCircleGraph = data => {
  let div
if(active == false){
	data.forEach(number => {
    div = document.createElement('div')
    if(active == false){
	margincir = 200 - number / 5.1
	// marginTop: margincir + 'px',  marginLeft: 8 + 'px',
    }else{
	margincir = 0
    }
    div.textContent = number
    Object.assign(div.style, {
      width: number / 5.1 + 'px',
      height: number / 5.1 + 'px',
      borderRadius: number / 5.1 + 'px',
      textAlign: 'center',
      lineHeight: number / 5.1 + 'px',
      fontFamily: 'Lato',
      fontWeight: 200,      
      fontSize: number / 20 + 'px',   
      marginLeft: 4 + 'px',  
      backgroundColor: `rgba(255, 165, 0,${number / 300})`
    })
     //marginTop: 100 - number / 6.5 + 'px',
     //display: 'inline-block',
     chartCircle.appendChild(div);
    //chartWrapper.appendChild(div)
  })
}else{
    div = document.createElement('div')
    //div.textContent = 500
    Object.assign(div.style, {
      width: 150 + 'px',
      height: 150 + 'px',
      borderRadius: '50%',
      textAlign: 'center',
      fontFamily: 'Lato',
      fontWeight: 200,
      marginTop: '40px',
      marginLeft: '20px',
      fontSize: '50' + 'px',
      background: `conic-gradient(
		yellow 0% 30%,
		red 30% 30%
	)`
    })
    chartCircle.appendChild(div);
}

}

/*addBarGraph.addEventListener('click', () => {
  chartWrapper.innerHTML = ''
  addHistograph.classList.remove('active')
  addCircleGraph.classList.remove('active')
  addBarGraph.className = 'active'
  createBarGraph(data)
})

addHistograph.addEventListener('click', () => {
  chartWrapper.innerHTML = ''
  if (window.innerWidth < 525) {
    addHistograph.classList.remove('active')
    addCircleGraph.classList.remove('active')
    addBarGraph.className = 'active'
    createBarGraph(data)
  } else {
    addBarGraph.classList.remove('active')
    addCircleGraph.classList.remove('active')
    addHistograph.className = 'active'
    createHistograph(data)
  }
})

addCircleGraph.addEventListener('click', () => {
  chartWrapper.innerHTML = ''
  addHistograph.classList.remove('active')
  addBarGraph.classList.remove('active')
  addCircleGraph.className = 'active'
  createCircleGraph(data)
})

window.addEventListener('resize', e => {
  chartWrapper.innerHTML = ''
  if (e.currentTarget.innerWidth <= 525) {
    addHistograph.classList.remove('active')
    addBarGraph.className = 'active'
    createBarGraph(data)
  } else {
    addBarGraph.classList.remove('active')
    addHistograph.className = 'active'
    createHistograph(data)
  }
})*/

window.addEventListener('resize', e => {
  //chartWrapper.innerHTML = ''  

  //if (e.currentTarget.innerWidth >= 600 ) {
	//active = false;
  //}
  if (e.currentTarget.innerWidth <= 800 && active == false) {
    //addBarGraph.classList.remove('active')
    //addHistograph.className = 'active'
	chartCircle.innerHTML = ''; chartHisto.innerHTML = '';
        //chartWrapper.style.display = "grid"; chartWrapper.style.gap = "20px"; chartWrapper.style.marginLeft = "5px";
	chartHisto.style.height = "220px"; chartHisto.style.width = "200px"; //chartHisto.style.display = "flex";
        chartHisto.style.left = "5px";
	chartCircle.style.height = "220px"; chartCircle.style.width = "200px"; chartCircle.style.left = "5px";
	//chartCircle.style.display = "grid";
	chartCircle.style.top = "50%"; //chartHisto.style.marginTop = "10px"; chartWrapper.style.top = "10px";
	wh = 10; mr = 2; ht = 90; wcir = 0; tp = 250; quot = 4; active = true; //alert('resizing 000 !');

    createHistograph(data)
    createCircleGraph(data) 
  }
  if (e.currentTarget.innerWidth > 800 && active == true) {
    //addBarGraph.classList.remove('active')
    //addHistograph.className = 'active'
	chartCircle.innerHTML = ''; chartHisto.innerHTML = '';
        //chartWrapper.style.display = "grid"; chartWrapper.style.gap = "20px"; chartWrapper.style.marginLeft = "5px";
	chartHisto.style.height = "330px"; chartHisto.style.width = "600px"; //chartHisto.style.display = "flex";
        chartHisto.style.left = "70px";
	chartCircle.style.height = "330px"; chartCircle.style.width = "600px"; chartCircle.style.left = "700px";
	//chartCircle.style.display = "grid";
	chartCircle.style.top = "12%"; //chartHisto.style.marginTop = "10px"; chartWrapper.style.top = "10px";
	wh = 50; mr = 5; ht = 60; wcir = 0; tp = 300; quot = 1; active = false; //alert('resizing 000 !');

    createHistograph(data)
    createCircleGraph(data) 
  }
//alert('resizing !');

})

const createDouble = data => {

    //addHistograph.className = 'active'
    createHistograph(data)

  //addCircleGraph.className = 'active'
  createCircleGraph(data)   

}

 createDouble(data)
