export class ListPage {

}

export default function initPage() {
	var table = document.createElement('table');

	fetch('http://193.111.63.76:3000/api/v1/Users')
		.then(function(response) {
		  return response.json();
	})
			.then(function(data) {
			  // console.log(data);
			  for (var i = 0; i < data.length; i++) {
			    var row = table.insertRow(-1);
			    for (var key in data[i]) {
			      var cell = row.insertCell(-1);
			      cell.innerHTML = data[i][key]; 
			    }
				    document.body.appendChild(table);
				}
			});
}
