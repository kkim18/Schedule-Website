function showNone(){
$('#ifPriority1').hide();
$('#ifPriority2').hide();
}

function showFixed(){
  $('#ifPriority1').show();
  $('#ifPriority2').hide();
}

function showPreferred(){
  $('#ifPriority2').show();
  $('#ifPriority1').hide();
}

$(function() {
  $('#ifPriority1').hide();
  $('#ifPriority2').hide();
});

events = [];

$('#createEventButton').click(function(){
  var event = {};
  event.name = $('[type="name"]').val();
  event.duration = $('[type="Duration"]').val();
  event.restDuration = $('[type="restDuration"]').val();
  event.multitasking = $('[name="multitask"]:checked').val();

  events.push(event);
});

function displayEvent() {
    var x = document.getElementById("eventName").value;
    if(x !== "") {
      var node = document.createElement("li");
      var textnode = document.createTextNode(x);
      node.appendChild(textnode);
      document.getElementById("madeEvents").appendChild(node);
    }
    else {
      alert("Please enter an event name.");
    }
}

function createSchedule (){
  //function to create the schedule
}

document.getElementById("createEventButton").addEventListener('click', function() {displayEvent();});
document.getElementById("createScheduleButton").addEventListener('click', function() {createSchedule();});
