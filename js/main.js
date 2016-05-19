function loadUsers(){
	var jsonplaceholderAPI = "json/users.json";
	$.getJSON(jsonplaceholderAPI, function (data) {
	    console.log("Users");
	    console.log(data);
	    var users = [];
	    for (var i=0;i<data.length;i++) {
	    		$('#collectionUsers').append(getUserContent(data[i].id, data[i].name, data[i].company.name));
	    		// console.log(data[i].id)
	    		// console.log(JSON.stringify(data[i]))
	    		users[data[i].id] = data[i];
	    }
	    localStorage.users = JSON.stringify(users);
	});
}

function redirectToIndex(){
	window.location = "index.html";
}

function checkId(){
	if(isNaN(getUrlVars()["id"])){
		redirectToIndex();
	}
}

function getSingleUserInfo(){
	checkId();
	var users = JSON.parse(localStorage.users);
	// console.log(users)
	console.log(users[getUrlVars()["id"]])
	var user = users[getUrlVars()["id"]];

	$('#name').text(user.name);
	$('#email').text(user.email);
	$('#phone').text(user.phone);
	$('#website').text(user.website);
}

function getUserContent(id, name, company){
	// console.log(name, company)
	return '<a class="collection-item avatar" href="profile.html?id='+
		id+
		'">'+
		'<i class="material-icons circle indigo darken-4" style="margin-top: 15px">perm_identity</i>'+
		'<p class="title">'+
		name+
		'</p>'+
		'<p class="desc">'+
		company+
		'</p>'+
	'</a>';
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
	function(m,key,value) {
	  vars[key] = value;
	});
	return vars;
}

function showContent(value){
	console.log(value)
	if(value == "post"){
		$('#albumButton').addClass('waves-effect waves-light btn indigo lighten-2');
		$('#postButton').removeClass('waves-effect waves-light btn indigo lighten-2');
		$('#postButton').addClass('waves-effect waves-light btn indigo');	
	}else if(value == "album"){
		$('#postButton').addClass('waves-effect waves-light btn indigo lighten-2');
		$('#albumButton').removeClass('waves-effect waves-light btn indigo lighten-2');
		$('#albumButton').addClass('waves-effect waves-light btn indigo');	
	}
	
}
