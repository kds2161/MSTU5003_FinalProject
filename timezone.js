// Local time and date counter
const dateToday = document.querySelector("#dateToday");
var date = new Date();
var year = date.getFullYear();
var day = ("0" + date.getDate()).slice(-2);
var month = ("0" + (date.getMonth() + 1)).slice(-2);

dateToday.textContent = `${day}-` + `${month}-` + `${year}`;

const timeNow = document.querySelector("#timeNow");

function startTime() {
  var today = new Date();
  var hours = today.getHours();
  var mins = today.getMinutes();
  var secs = today.getSeconds();
  mins = checkTime(mins);
  secs = checkTime(secs);
  document.getElementById("timeNow").innerHTML =
    hours + ":" + mins + ":" + secs;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startTime();

// Calculate local time and date
function calculateDateTime(offset) {
  // get current local time in milliseconds
  var date = new Date();
  var localTime = date.getTime();

  // get local timezone offset and convert to milliseconds
  var localOffset = date.getTimezoneOffset() * 60000;

  // obtain the UTC time in milliseconds
  var utc = localTime + localOffset;

  var newDateTime = utc + 3600000 * offset;

  var convertedDateTime = new Date(newDateTime);
  return convertedDateTime.toLocaleString();
}

// Get user input for locations
function getLocationValue1(event) {
  var locationOne = document.querySelector("#userLocationSet1");
  return locationOne.value;
}

function getLocationValue2(event) {
  var locationTwo = document.querySelector("#userLocationSet2");
  return locationTwo.value;
}

function printLocation() {
  var Loc1 = getLocationValue1();
  var Loc2 = getLocationValue2();

  document.querySelector(".tag1").innerHTML = Loc1;
  document.querySelector(".tag2").innerHTML = Loc2;

  if (Loc1 === "Singapore") {
    document.querySelector(".time1").innerHTML = calculateDateTime(8);
    document.querySelector(".utc1").textContent = "UTC+8";
  } else if (Loc1 === "New York") {
    document.querySelector(".time1").innerHTML = calculateDateTime(-4);
    document.querySelector(".utc1").textContent = "UTC-4";
  } else if (Loc1 === "San Francisco") {
    document.querySelector(".time1").innerHTML = calculateDateTime(-7);
    document.querySelector(".utc1").textContent = "UTC-7";
  } else if (Loc1 === "Tokyo") {
    document.querySelector(".time1").innerHTML = calculateDateTime(9);
    document.querySelector(".utc1").textContent = "UTC+9";
  } else if (Loc1 === "London") {
    document.querySelector(".time1").innerHTML = calculateDateTime(1);
    document.querySelector(".utc1").textContent = "UTC+1";
  } else {
    document.querySelector(".time1").textContent = "Location not valid";
    document.querySelector(".utc1").textContent = "Not applicable";
  }

  if (Loc2 === "Singapore") {
    document.querySelector(".time2").innerHTML = calculateDateTime(8);
    document.querySelector(".utc2").textContent = "UTC+8";
  } else if (Loc2 === "New York") {
    document.querySelector(".time2").innerHTML = calculateDateTime(-4);
    document.querySelector(".utc2").textContent = "UTC-4";
  } else if (Loc2 === "San Francisco") {
    document.querySelector(".time2").innerHTML = calculateDateTime(-7);
    document.querySelector(".utc2").textContent = "UTC-7";
  } else if (Loc2 === "Tokyo") {
    document.querySelector(".time2").innerHTML = calculateDateTime(9);
    document.querySelector(".utc2").textContent = "UTC+9";
  } else if (Loc2 === "London") {
    document.querySelector(".time2").innerHTML = calculateDateTime(1);
    document.querySelector(".utc2").textContent = "UTC+1";
  } else {
    document.querySelector(".time2").textContent = "Location not valid";
    document.querySelector(".utc2").textContent = "Not applicable";
  }
}

function showBestTime() {
  showPanel();
  printLocation();
  timezonesTableResults();
}

function timezonesTableResults() {
  var timezoneLocation1 = getLocationValue1();
  var timezoneLocation2 = getLocationValue2();

  if (document.querySelector("#userLocationSet1").value != 1) {
    document.querySelector(".locationSet1").innerHTML = timezoneLocation1;
  } else
    document.querySelector(".locationSet1").innerHTML =
      "Please choose location";

  if (document.querySelector("#userLocationSet2").value != 2) {
    document.querySelector(".locationSet2").innerHTML = timezoneLocation2;
  } else
    document.querySelector(".locationSet2").innerHTML =
      "Please choose location";

  var sel2 = getLocationValue2();

  if (sel2 === "New York") {
    singaporeNYC();
  } else if (sel2 === "Tokyo") {
    singaporeTKY();
  } else if (sel2 === "London") {
    singaporeLDO();
  } else if (sel2 === "San Francisco") {
    singaporeSFO();
  } else {
    ("Please choose location");
  }
}

function showPanel() {
  document.getElementById("panel").style.display = "block";
}

function singaporeNYC() {
  var hours = 24;

  let table = document.querySelector("#sgNYC");

  for (i = 0; i <= hours - 1; i++) {
    var row = table.insertRow(i);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = i + ":00";

    // Build the table
    if (i < 12) {
      cell2.innerHTML = i + 12 + ":00";
    } else {
      cell2.innerHTML = i - 12 + ":00";
    }

    // First case yellow if 6:00am - 8:00am
    if ((i >= 0) & (i <= 8)) {
      row.style.backgroundColor = "#F8D347";
    }

    // green if 9:00am - 9pm
    if (i >= 9 && i <= 21) {
      row.style.backgroundColor = "#99C262";
    }

    // if 10:00pm
    if (i >= 22) {
      row.style.backgroundColor = "#FF6C60";
    }
  }
}

//green #99C262
//yellow #F8D347
//red #FF6C60

function singaporeTKY() {
  var hours = 24;

  let table = document.querySelector("#sgTKY");

  for (i = 0; i <= hours - 1; i++) {
    var row = table.insertRow(i);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = i + ":00";
    cell2.innerHTML = i + 1 + ":00";

    // Early morning
    if ((i >= 0) & (i <= 8)) {
      row.style.backgroundColor = "#F8D347";
    }

    //
    if (i >= 9 && i <= 21) {
      row.style.backgroundColor = "#99C262";
    }

    // if 10:00pm
    if (i > 21) {
      row.style.backgroundColor = "#FF6C60";
    }
  }
}

function singaporeLDO() {
  var hours = 24;

  let table = document.querySelector("#sgLDO");

  for (i = 0; i <= hours - 1; i++) {
    var row = table.insertRow(i);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = i + ":00";

    // Build the table
    if (i < 8) {
      cell2.innerHTML = i + 17 + ":00";
    } else if (i >= 8) {
      cell2.innerHTML = i - 7 + ":00";
    } else {
      cell2.innerHTML = i + ":00";
    }

    // Early morning
    if ((i >= 0) & (i <= 14)) {
      row.style.backgroundColor = "#F8D347";
    }

    //green
    if (i >= 15 && i <= 21) {
      row.style.backgroundColor = "#99C262";
    }

    // red
    if (i > 21) {
      row.style.backgroundColor = "#FF6C60";
    }
  }
}

function singaporeSFO() {
  var hours = 24;

  let table = document.querySelector("#sgSFO");

  for (i = 0; i <= hours - 1; i++) {
    var row = table.insertRow(i);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = i + ":00";

    // Build the table
    if (i < 15) {
      cell2.innerHTML = i + 9 + ":00";
    } else {
      cell2.innerHTML = i - 15 + ":00";
    }

    // Early morning
    if ((i >= 0) & (i <= 7)) {
      row.style.backgroundColor = "#F8D347";
    }

    //green
    if (i >= 8 && i <= 13) {
      row.style.backgroundColor = "#99C262";
    }

    // red
    if (i > 13) {
      row.style.backgroundColor = "#FF6C60";
    }
  }
}

function hidePanel() {
  document.getElementById("panel").style.display = "none";
}

function clearPage(event) {
  var selectLoc1 = document.querySelector("#userLocationSet1");
  selectLoc1.value = 1;

  var selectLoc2 = document.querySelector("#userLocationSet2");
  selectLoc2.value = 2;

  var selectDate = document.querySelectorAll("#meetingDateSet");
  document.querySelector('input[type="date"]').value = "";

  document.querySelector(".tag1").innerHTML = "1";
  document.querySelector(".tag2").innerHTML = "2";
  document.querySelector(".time1").innerHTML = "Select Location";
  document.querySelector(".time2").innerHTML = "Select Location";
  document.querySelector(".utc1").innerHTML = "Select Location";
  document.querySelector(".utc2").innerHTML = "Select Location";
  document.querySelector(".locationSet1").innerHTML = "Select Location";
  document.querySelector(".locationSet2").innerHTML = "Select Location";
  document.querySelector("#sgNYC").innerHTML = "";
  document.querySelector("#sgTKY").innerHTML = "";
  document.querySelector("#sgSFO").innerHTML = "";
  document.querySelector("#sgLDO").innerHTML = "";
  hidePanel();
}
