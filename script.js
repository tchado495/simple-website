var list1 = []; var list2 = [];
var list3 = []; var list4 = [];
var list5 = [];
var n = 1; var x = 0; var b = 0;
var prod = [['0','0','0']]; var pro = [['0','0','0']];
const arrayprod = ['Pizza', 'Hamburger', 'Panini', 'Poisson frite', 'Tarte au fruit', 'Fondant chocolat', 'Pain Americain', 'Croissant', 'Pain Chocolat','Brioche'];
const arraysearch = new Array(10); let bp = false;

document.getElementById('output_image0').onclick = function() {
	window.location.replace("Principale.html");
}

let hasTouchScreen = false;
const UA = navigator.userAgent;
hasTouchScreen =  /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);

if (hasTouchScreen) {
	let header = document.querySelector('.table__header');
	let searchimg = document.getElementById('search_img');
	header.style.gap = "10px"; searchimg.style.marginRight = "50%";
}

function addTable(row,prod,name) {

const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

	var AddRown = document.getElementById('xtable');
			var NewRow = AddRown.insertRow(row+1); list3[x] = NewRow;
			let varim = document.createElement('img'); varim.src = "image/img1.png";
			let varin = document.createElement('input'); //let varlb = document.createElement('label');
			
			//varim.style.borderRadius = "50px"; varim.style.width = "25px"; varim.style.height = "25px";
			varin.style.borderRadius = "10px"; varin.style.width = "90px"; varin.style.height = "30px";
			varin.style.textAlign = "center";
			//varlb.style.borderRadius = "5px"; varlb.style.width = "80px"; varlb.style.height = "40px";	
			 

			list1[x] = row;	list2[x] = varim;
			//list3[x] = "firstname"; list4[x] = "lastname";
			list5[x] = varin; //prod[0][0] = "testprod00"; prod[0][1] = "testprod10";
			

			var cel1 = NewRow.insertCell(0); var cel2 = NewRow.insertCell(1); var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3); var cel5 = NewRow.insertCell(4); var cel6 = NewRow.insertCell(5);

			for(let i = 0; i < arrayprod.length; i++){
				if(arrayprod[i] == name){
					list1[0]= i+1; break;
				}
			}

			cel1.innerHTML = list1[0];
			cel2.innerHTML = name; //prod[row][0]; //cel2.innerHTML = prod[i][0]; cel2.appendChild(varim);
			cel3.appendChild(varim);
			cel4.innerHTML = prod[row][1]; //list3[x];
			cel5.appendChild(varin); //list4[x];
			//cel6.backgroundColor = "Tomato"; cel6.innerHTML = "en attente ..."; //cel5.appendChild(varlb); 
			cel6.innerHTML = prod[row][2];			
			
			document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        			visible_row.style.backgroundColor = (i % 2 == 0) ? 'rgba(211,240,240,0.6)' : 'rgba(255,255,255,0.9)';
    				//visible_row.addEventListener('click', () => {
  					//visible_row.style.backgroundColor = 'rgba(0,0,0,1)';
					//var DeleteRown = document.getElementById('xtable');
					//DeleteRown.deleteRow(0);
				//})
			});

			//list3[x].addEventListener('click', () => {
  				//list3[0].style.backgroundColor = 'rgba(0,0,0,1)';
			//})

			//n++; x++;

}

function createTable() {
	
	for(let i = 0; i<arrayprod.length; i++){
		prod[i][0] = arrayprod[i]; prod[i][1] = '0'; prod[i][2] = 'kmf0'; prod.push(['0','0','0']);
		addTable(i,prod,prod[i][0]); n++; x++;
		arraysearch[i] = '' + i.toString() + prod[i][0] + ' ' + prod[i][1] + prod[i][2];
	}

}

createTable();


const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');
	

let btn = document.querySelector('.add-group');
btn.onclick = function() {
	btn.style.transform = 'rotate(180deg)';
}

//let btn = document.getElementById('btn');
//let xbody = document.getElementById('xbody');
//btn.onclick = function() {*********
function buttonclick() {
        //table_row = document.querySelectorAll('tbody tr'); //row2 = document.getElementById('xtr2');
	//let xtr = document.createElement('tr'); xtr.style.heigth = "150px"; xtr.style.width = "200px"; xtr.style.backgroundColor = "#000";
	//const xtr= new xtrclass();
	//xbody.appendChild(xtr); alert('clicked !');
	 //var email = $("#email").val();
                //$(".table tbody tr").last().after(
                    //'<tr class="fadetext">'+
                        //'<td><input type="checkbox" id="select-row"></td>'+
                        //'<td> <img src="images/Alex Gonley.jpg" alt="">firstname and lastname</td>'+
                        //'<td> Seoul </td>'+
                        //'<td> 17 Dec, 2022 </td>'+
                    //'</tr>'
                //);
		var AddRown = document.getElementById('xtable');		

			if(b==0){
				var NewRow = AddRown.insertRow(1); 
			let varim = document.createElement('img'); varim.src = "images/Alex Gonley.jpg";
			let varin = document.createElement('button'); varin.style.width = "30px"; varin.style.height = "30px"; 

			list1[x] = "1";//document.getElementById("fname").value;
			list2[x] = varim; //document.getElementById("lname").value;
			list3[x] = "firstname"; //document.getElementById("lname").value;
			list4[x] = "lastname"; //document.getElementById("email").value;
			list5[x] = varin; //document.getElementById("age").value;
			prod[0][0] = "testprod00"; prod[0][1] = "testprod10";

				var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);
			var cel5 = NewRow.insertCell(4);

			cel1.innerHTML = list1[x];
			cel2.style.display = "flex"; cel2.innerHTML = "name"; cel2.appendChild(varim);
			cel3.innerHTML = prod[0][0]; //list3[x];
			cel4.innerHTML = prod[0][1]; //list4[x];
			cel5.appendChild(varin);
			}else{
				AddRown.deleteRow(1);
			}

			n++; x++; b++;
}

// 1. Searching for specific data of HTML table
search.addEventListener('input', searchTable);

function searchTable() {
    /*table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();
	    //alert(table_data); // 0pizza 0kmf0

        //row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })*/
   
    let a = 1; let n2 = 0; b=0; search_data = search.value.toLowerCase(); bp = false; //n = 1; //alert('search : ' + search_data.length);
    //var pro = [['0','0','0']];

    if(search_data.length >= 0) {
	for(let i = arraysearch.length - 1; i >= 0; i--) {
		let table_data = arraysearch[i].toLowerCase(); //alert('table_data 000 : ' +table_data);
		if(table_data.indexOf(search_data) >= 0) {
			prod[i][0] = arrayprod[i]; prod[i][1] = '0'; prod[i][2] = 'kmf1'; //prod.push(['0','0','0']);
			addTable(0,prod,prod[i][0]); a=a+1; //alert('table_data : ' +table_data + ' a : ' + a);
		}
		//b++;
    	} //);
	n2=n+a; bp = true;
	for(let i = a; i < n2; i++) { //table_rows.forEach((row, i) => {
		//arraysearch[i] = row.textContent.toLowerCase();
		if(bp == true) {
			var DeleteRown = document.getElementById('xtable'); //alert('row : ' +i);
			DeleteRown.deleteRow(a); n=a-1;
		}else{
			break;
		}
    	} //);    	
    }else{
	alert('table_data 0 ');
	//arrayprod.forEach((row, i) => {
		//addTable(a); a++;
    	//});
	for(let i = 0; i < arrayprod.length; i++) {
		//let table_data = arraysearch[b].toLowerCase(); //alert('table_data 000 : ' +table_data);
		prod[b][0] = arrayprod[b] + ' '; prod[b][1] = '0'; prod[b][2] = 'kmf1'; //prod.push(['0','0','0']);
		addTable(0,prod,prod[b][0]); b++;
    	}
    }

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        //visible_row.style.backgroundColor = (i % 2 == 0) ? 'rgba(211,240,240,0.6)' : 'rgba(255,255,255,0.9)';
    });
}

// 2. Sorting | Ordering data of HTML table

table_headings.forEach((head, i) => {
    let sort_asc = true;
    head.onclick = () => {
        table_headings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
        table_rows.forEach(row => {
            row.querySelectorAll('td')[i].classList.add('active');
        })

        head.classList.toggle('asc', sort_asc);
        sort_asc = head.classList.contains('asc') ? false : true;

        sortTable(i, sort_asc);
    }
})


function sortTable(column, sort_asc) {
    [...table_rows].sort((a, b) => {
        let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
            second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

        return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
    })
        .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}

// 3. Converting HTML table to PDF

const pdf_btn = document.querySelector('#toPDF');
const customers_table = document.querySelector('#customers_table');


const toPDF = function (customers_table) {
    const html_code = `
    <!DOCTYPE html>
    <link rel="stylesheet" type="text/css" href="style.css">
    <main class="table" id="customers_table">${customers_table.innerHTML}</main>`;

    const new_window = window.open();
     new_window.document.write(html_code);

    setTimeout(() => {
        new_window.print();
        new_window.close();
    }, 400);
}

pdf_btn.onclick = () => {
    toPDF(customers_table);
}

// 4. Converting HTML table to JSON

const json_btn = document.querySelector('#toJSON');

const toJSON = function (table) {
    let table_data = [],
        t_head = [],

        t_headings = table.querySelectorAll('th'),
        t_rows = table.querySelectorAll('tbody tr');

    for (let t_heading of t_headings) {
        let actual_head = t_heading.textContent.trim().split(' ');

        t_head.push(actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase());
    }

    t_rows.forEach(row => {
        const row_object = {},
            t_cells = row.querySelectorAll('td');

        t_cells.forEach((t_cell, cell_index) => {
            const img = t_cell.querySelector('img');
            if (img) {
                row_object['customer image'] = decodeURIComponent(img.src);
            }
            row_object[t_head[cell_index]] = t_cell.textContent.trim();
        })
        table_data.push(row_object);
    })

    return JSON.stringify(table_data, null, 4);
}

json_btn.onclick = () => {
    const json = toJSON(customers_table);
    downloadFile(json, 'json')
}

// 5. Converting HTML table to CSV File

const csv_btn = document.querySelector('#toCSV');

const toCSV = function (table) {
    // Code For SIMPLE TABLE
    // const t_rows = table.querySelectorAll('tr');
    // return [...t_rows].map(row => {
    //     const cells = row.querySelectorAll('th, td');
    //     return [...cells].map(cell => cell.textContent.trim()).join(',');
    // }).join('\n');

    const t_heads = table.querySelectorAll('th'),
        tbody_rows = table.querySelectorAll('tbody tr');

    const headings = [...t_heads].map(head => {
        let actual_head = head.textContent.trim().split(' ');
        return actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase();
    }).join(',') + ',' + 'image name';

    const table_data = [...tbody_rows].map(row => {
        const cells = row.querySelectorAll('td'),
            img = decodeURIComponent(row.querySelector('img').src),
            data_without_img = [...cells].map(cell => cell.textContent.replace(/,/g, ".").trim()).join(',');

        return data_without_img + ',' + img;
    }).join('\n');

    return headings + '\n' + table_data;
}

csv_btn.onclick = () => {
    const csv = toCSV(customers_table);
    downloadFile(csv, 'csv', 'customer orders');
}

// 6. Converting HTML table to EXCEL File

const excel_btn = document.querySelector('#toEXCEL');

const toExcel = function (table) {
    // Code For SIMPLE TABLE
    // const t_rows = table.querySelectorAll('tr');
    // return [...t_rows].map(row => {
    //     const cells = row.querySelectorAll('th, td');
    //     return [...cells].map(cell => cell.textContent.trim()).join('\t');
    // }).join('\n');

    const t_heads = table.querySelectorAll('th'),
        tbody_rows = table.querySelectorAll('tbody tr');

    const headings = [...t_heads].map(head => {
        let actual_head = head.textContent.trim().split(' ');
        return actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase();
    }).join('\t') + '\t' + 'image name';

    const table_data = [...tbody_rows].map(row => {
        const cells = row.querySelectorAll('td'),
            img = decodeURIComponent(row.querySelector('img').src),
            data_without_img = [...cells].map(cell => cell.textContent.trim()).join('\t');

        return data_without_img + '\t' + img;
    }).join('\n');

    return headings + '\n' + table_data;
}

excel_btn.onclick = () => {
    const excel = toExcel(customers_table);
    downloadFile(excel, 'excel');
}

const downloadFile = function (data, fileType, fileName = '') {
    const a = document.createElement('a');
    a.download = fileName;
    const mime_types = {
        'json': 'application/json',
        'csv': 'text/csv',
        'excel': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    }
    a.href = `
        data:${mime_types[fileType]};charset=utf-8,${encodeURIComponent(data)}
    `;
    document.body.appendChild(a);
    a.click();
    a.remove();
}
