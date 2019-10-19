var firebaseConfig = {
    apiKey: "AIzaSyAW28aiCOrJMk_W8gRqe4VOLVNrbXR_CYY",
    authDomain: "train-schedule-6183d.firebaseapp.com",
    databaseURL: "https://train-schedule-6183d.firebaseio.com",
    projectId: "train-schedule-6183d",
    storageBucket: "train-schedule-6183d.appspot.com",
    messagingSenderId: "277963663150",
    appId: "1:277963663150:web:da95837f8e6969d976bcbf",
    measurementId: "G-RPNP2WZ775"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();


$("#add-button").on("click", function(event){  
var trainName= $("#train-name").val().trim();
var destination= $("#destination").val().trim();
var firstTrainTime= $("#first-train-time").val().trim();
var frequency= $("#frequency").val().trim();
// var addButton= $("#add-button");
// var newTrain



event.preventDefault()


var currentTime=moment();
var trainTimeConversion=moment(firstTrainTime, "HH:mm").subtract(1, "years");
var newArrival=moment().diff(moment(trainTimeConversion), "minutes")
var timeRemaining=newArrival % frequency;
var minutesTillNextTrain=frequency-timeRemaining;
var nextTrain=moment(moment().add(minutesTillNextTrain, "minutes")).format("HH:mm");
console.log(nextTrain)
console.log(minutesTillNextTrain)
// console.log(newArrival)
// console.log(trainTimeConversion)
// console.log(currentTime)
var newTrain = {
  trainName1: trainName,
  destination1: destination,
  frequency1: frequency,
  firstTrainTime1: nextTrain,  
  minutesNextTrain:minutesTillNextTrain

};

$("#train-name").val("")
$("#destination").val("")
$("#first-train-time").val("")
$("#frequency").val("")

database.ref().push(newTrain);
console.log(newTrain)




database.ref().on("child_added", function(childSnapshot) {
console.log(childSnapshot.val());
var tBody=$("<tbody>")
tBody.append("<tr>" + "<td>" +childSnapshot.val().trainName1+"</td>" + "<td>"+childSnapshot.val().destination1+"</td>" + "<td>"+childSnapshot.val().frequency1+"</td>" + "<td>"+ childSnapshot.val().firstTrainTime1+"</td>"+ "<td>"+childSnapshot.val().minutesNextTrain+"</td>"+ "</tr>");
$("#train-schedule").append(tBody)
})


})

