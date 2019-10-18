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


event.preventDefault()
var tBody=$("<tbody>")
var tData=$("<td>")
console.log(trainName)
// tData.html(trainName)
// tData.append(destination)
// tData.append(firstTrainTime)
// tData.append(frequency)
// tBody.append(tData)



var newTrain = {
  trainName1: trainName,
  destination1: destination,
  firstTrainTime1: firstTrainTime,
  frequency1: frequency
};

database.ref().push(newTrain);

// $("#name-display").text(snapshot.val().name);
// $("#email-display").text(snapshot.val().email);
// $("#age-display").text(snapshot.val().age);
// $("#comment-display").text(snapshot.val().comment);
var currentTime=moment();
var trainTimeConversion=moment(firstTrainTime, "HH:mm").subtract(1, "years");
var newArrival=moment().diff(moment(trainTimeConversion), "minutes")
var timeRemaining=newArrival % frequency;
var minutesTillNextTrain=frequency-timeRemaining;
var nextTrain=moment(moment().add(minutesTillNextTrain, "minutes")).format("HH:mm");
console.log(nextTrain)
// console.log(newArrival)
// console.log(trainTimeConversion)
// console.log(currentTime)
})

