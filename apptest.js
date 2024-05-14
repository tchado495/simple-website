let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let sendBtn = document.querySelector('.btn')
let testBtn = document.querySelector('.add')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}

sendBtn.onclick = function() {
    //sendMessage()
	fetchBlob("https://tchado495.github.io/testwebsocket/img1.png")
	//fetchBlob("https://storage.googleapis.com/DSC_0139.JPG")
}

testBtn.onclick = function() {
    //testMessage(event)
	//fetchBlob("http://localhost:49724/image/img1.png")
	sendRequest()
}

/*var my_file = document.getElementById('my_file');
	my_file.addEventListener('change',()=>{
		alert('form submitted');
});*/


/*function testform(){

	var my_file = document.getElementById('my_file');
	my_file.addEventListener('change',()=>{
		alert('form submitted');
	}	

	
		$('#my_file').change(function(){
		$('#my_form').submit();
		});

		$('#my_form').submit(function(event){
		alert('form submitted');
		});
	
});*/


/*function sendRequest() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:49724/img1.png");
	xhr.responseType = "blob";
	xhr.onload = response;
	xhr.send();
}

function response(e) {
	var urlCreator = window.URL || window.webkitURL;
	var imageUrl = urlCreator.createObjectURL(this.response);
	document.getElementById('output_image').src = imageUrl;
}*/


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    let textarea = document.getElementById('output_image')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
	textarea.Text ="First Text"
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
	textarea.Text ="Second Text"
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

function sendMessage() {
	//let thumbnailItems = document.querySelectorAll('.thumbnail .item')
	let picture = document.querySelectorAll('.thumbnail .item')

	const link = document.createElement("a");
	const content = document.getElementById('output_image');
	const file = new Blob([content], { type: "text/plain;charset=utf-8", });
	link.href = URL.createObjectURL(file);
	link.download = "sample.txt"; link.click();
	URL.revokeObjectURL(link.href);

	var reader = new FileReader();
	reader.onload = function () {
    	//var output = document.getElementById('output_image');
    	res = reader.result;

	let spt = res.split("base64,")[1];
            // This line creates an object called "obj" with three properties: "base64", "type", and "name"
            let obj = {
                base64:spt,
                type:'.png',
                name:'img1'
            }
	
	const scriptURL = 'https://script.google.com/macros/s/AKfycbz2_p0Egs0PvAg4VXlfDVd-7__1l1omoz1LnIQknxl6SdNT4L48ZDxP1J9a6IEmZPXaag/exec';
	fetch(scriptURL, { method: 'POST', body: JSON.stringify(obj) })
                .then(response => alert('Message envoyé !'))
                .catch(error => console.error('Error!', error.message))
	}
	reader.readAsDataURL(file);

	//let file = document.querySelector("input");
    // This line declares a variable called "img" and assigns it the value of the first image element on the page
    //let img = document.querySelector("img");
    // This line adds an event listener to the "change" event of the "file" input element
    //file.addEventListener('change',()=>{
        // This line creates a new FileReader object called "fr"
        //let fr = new FileReader();
        // This line adds an event listener to the "loadend" event of the FileReader object
        //fr.addEventListener('loadend',()=>{
            // This line declares a variable called "res" and assigns it the result of the FileReader object
            //let res = fr.result;
            // This line sets the "src" attribute of the "img" element to the value of "res"
            //img.src=res;
            // This line splits the "res" variable into an array, using the string "base64," as the separator, and assigns the second element to a variable called "spt"
            /*let spt = res.split("base64,")[1];
            // This line creates an object called "obj" with three properties: "base64", "type", and "name"
            let obj = {
                base64:spt,
                type:'.png',
                name:'img1'
            }
            // This line sends a POST request to the URL specified in the "url" variable, with the "obj" object as the request body

	const scriptURL = 'https://script.google.com/macros/s/AKfycbz2_p0Egs0PvAg4VXlfDVd-7__1l1omoz1LnIQknxl6SdNT4L48ZDxP1J9a6IEmZPXaag/exec';
            //const FD = new FormData(); //console.log('Success!', response) ... { Date: '123456', Email: 'test@email.com', Name: 'tchado2' }
            fetch(scriptURL, { method: 'POST', body: JSON.stringify(obj) })
                .then(response => alert('Message envoyé !'))
                .catch(error => console.error('Error!', error.message))*/
}

/*document.getElementById('btnadd').onclick = function() {
		src = 'http://localhost:49724/image/img1.png';
		let picture = document.querySelectorAll('.thumbnail .item');
		img=document.createElement('img');
		img.src = picture[1];
		document.body.appendChild(img); //testMessage(event);

	    //let picture = document.querySelectorAll('.thumbnail .item');
	    //let res = picture[0];
	    let url = "https://script.google.com/macros/s/AKfycbz2_p0Egs0PvAg4VXlfDVd-7__1l1omoz1LnIQknxl6SdNT4L48ZDxP1J9a6IEmZPXaag/exec";
            // This line splits the "res" variable into an array, using the string "base64," as the separator, and assigns the second element to a variable called "spt"
            //let spt = res.split("base64,")[1];
            // This line creates an object called "obj" with three properties: "base64", "type", and "name"
            //let obj = {
                //base64:spt,
                //type:'image/png',
                //name:'img1.png'
            //}
	    alert(picture[0])
	    //alert(file.files[0].type)
	    //alert(file.files[0].name)
            // This line sends a POST request to the URL specified in the "url" variable, with the "obj" object as the request body
            //fetch(url,{
                //method:"POST",
                //body:JSON.stringify(obj)
            //})
            // This line waits for the response from the server and converts it to text
            //.then(response => alert('Message envoyé !'))
            // This line logs the response data to the console
            //.then(data=>console.log(data))

}*/

async function fetchBlob(url)
{
                const Response = await fetch(url);

		let fr = new FileReader();
		let urlsheet = "https://script.google.com/macros/s/AKfycbz2_p0Egs0PvAg4VXlfDVd-7__1l1omoz1LnIQknxl6SdNT4L48ZDxP1J9a6IEmZPXaag/exec";
        // This line adds an event listener to the "loadend" event of the FileReader object
        fr.addEventListener('loadend',()=>{
            // This line declares a variable called "res" and assigns it the result of the FileReader object
            let res = fr.result; alert('Message envoyé 0 !')
            // This line sets the "src" attribute of the "img" element to the value of "res"
            //img.src=res;
            // This line splits the "res" variable into an array, using the string "base64," as the separator, and assigns the second element to a variable called "spt"
            let spt = res.split("base64,")[1];
            // This line creates an object called "obj" with three properties: "base64", "type", and "name"
            let obj = {
                base64:spt,
                type:'image/png',
                name:'img1.png'
            }
	    
            // This line sends a POST request to the URL specified in the "url" variable, with the "obj" object as the request body
            fetch(urlsheet,{
                method:"POST",
                body:JSON.stringify(obj)
            })
            // This line waits for the response from the server and converts it to text
            .then(response => alert('Message envoyé !'))
            // This line logs the response data to the console
            .then(data=>console.log(data))
 
        })
        // This line reads the selected file as a data URL
	const fileblob = await Response.blob();
        fr.readAsDataURL(fileblob)
                //return Response.blob();
}

function testMessage(event){

	// This line declares a variable called "url" and assigns it a value of "Api_Endpoint_Url"
    let url = "https://script.google.com/macros/s/AKfycbz2_p0Egs0PvAg4VXlfDVd-7__1l1omoz1LnIQknxl6SdNT4L48ZDxP1J9a6IEmZPXaag/exec";
    // This line declares a variable called "file" and assigns it the value of the first input element on the page
    //let file = document.querySelector("input");
	
	//var file = document.getElementById('output_image');
	//var parts = [new Blob([file], {type: 'image/png'}), new Uint16Array([33])];
	
	//var file = new File(parts,'img1.png',{lastModified: new Date(0)});
	
	alert('Message envoyé 000 !');
	//let file = document.querySelector('.form-button')
	//let file = document.querySelector('.form-control')
		//$('#output_image').load("http://localhost:49724/img1.png");
		//let file = document.getElementById('output_image');
		//const filetext = new Blob([file], { type: 'image/png' }); //let fileconv = new File();
		let file = document.getElementById('output_image');
		const filetext = new Blob([file], { type: 'image/png' });
		const myfile = new File([filetext], 'image.png',{type: Blob.png});
    // This line declares a variable called "img" and assigns it the value of the first image element on the page
    let img = document.querySelector("img");
    // This line adds an event listener to the "change" event of the "file" input element
    //file.addEventListener('change',()=>{
        // This line creates a new FileReader object called "fr"
        let fr = new FileReader();
        // This line adds an event listener to the "loadend" event of the FileReader object
        fr.addEventListener('loadend',()=>{
            // This line declares a variable called "res" and assigns it the result of the FileReader object
            let res = fr.result; alert('Message envoyé 0 !')
            // This line sets the "src" attribute of the "img" element to the value of "res"
            img.src=res;
            // This line splits the "res" variable into an array, using the string "base64," as the separator, and assigns the second element to a variable called "spt"
            let spt = res.split("base64,")[1];
            // This line creates an object called "obj" with three properties: "base64", "type", and "name"
            let obj = {
                base64:spt,
                type:'image/png',
                name:'img1.png'
            }
	    //alert(file.files[0].text)
	    //alert(file.files[0])
	    alert(myfile.type)
	    alert(myfile.name)
            // This line sends a POST request to the URL specified in the "url" variable, with the "obj" object as the request body
            fetch(url,{
                method:"POST",
                body:JSON.stringify(obj)
            })
            // This line waits for the response from the server and converts it to text
            .then(response => alert('Message envoyé !'))
            // This line logs the response data to the console
            .then(data=>console.log(data))
 
        })
        // This line reads the selected file as a data URL
	//file.files[0] = filetext;
        fr.readAsDataURL(myfile);
	//fr.readAsDataURL(file);
    //})

}
