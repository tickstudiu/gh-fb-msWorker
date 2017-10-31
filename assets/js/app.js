// Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyA4Fe17bDqwpMWzjNBJXqgxZ0Rr6bUj1vs",
	    authDomain: "msworker-d2a7a.firebaseapp.com",
	    databaseURL: "https://msworker-d2a7a.firebaseio.com",
	    projectId: "msworker-d2a7a",
	    storageBucket: "msworker-d2a7a.appspot.com",
	    messagingSenderId: "1014741265235"
	  };
	  firebase.initializeApp(config);

	var rootRet = firebase.database().ref().child("OnQueue");
	rootRet.once('value', function(snapshot) {
	  	snapshot.forEach(function(childSnapshot) {
		    var childKey = childSnapshot.key;
		    var childData = childSnapshot.val();
		    // get data

		    var idby = childData.idBy;
		  	var worker = childData.worker;
		  	var level = childData.level;
		  	var status = childData.status;
		  	var goal = childData.goal;
		  	$("#tableBodyQueue").append("<tr><td>" + idby +"</td><td>"+ worker +"</td><td>" +status+ "</td><td>"+level+ "</td><td>" + goal+"</td></tr>");
	  	});
	});

	var rootRet = firebase.database().ref().child("bankAccount");
	rootRet.once('value', function(snapshot) {
	  	snapshot.forEach(function(childSnapshot) {
		    var childKey = childSnapshot.key;
		    var childData = childSnapshot.val();
		    // get data

		    var bank = childData.bank;
		  	var branch = childData.branch;
		  	var name = childData.name;
		  	var number = childData.number;
		  	$("#tableBodyBank").append("<tr><td>" + bank +"</td><td>"+ branch +"</td><td>" + name + "</td><td>"+ number +"</td></tr>");
	  	});
	});

	function saveData(){
		// get value
		var date = document.getElementById('date');
		var time = document.getElementById('time');
		var piece = document.getElementById('piece');

		var firebaseRefPayment = firebase.database().ref("paymentMsg");
		firebaseRefPayment.push({
			data:date.value,
			time:time.value,
			piece:piece.value
		});
		alert("Complete the submission.");
	}