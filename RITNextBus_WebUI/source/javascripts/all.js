/*jslint browser: true*//*global $, jQuery*///= require_tree .function updateNextBusses(day, currentTime) {    //day is an int 0-6 representing the day. Follows how the JS Date object orders them Sun-Sat    //int in format HHMM where HH is hours 00-23 and MM is mins 00-59    "use strict";    switch (day) {    case 0://sunday        var startingTime = -1;        var times = [1215, 1327, 1509, 1621, 1723, 1835, 1947, 2129, 2243, 2305, 2327, 2349];        for (var time in times) {//for each bus time stop @ this station (province -> campus)            if (currentTime > time)                continue;//skip, bus has already left            else {//this is the next bus (first one not passed)                var now = new Date();                var timeLeft = time - (now.getHours()*100 + now.getMinutes() + now.getSeconds()/100);                var $list = $("province");//province home list TODO add other locations                $list.html("");//clear list                var timeString = time.toString();                $list.append("<li>" + timeString.slice(2) + ":" + timeString.slice(-2) + "</li>");                //add still available times for 'today'            }        }        break;    case 1://monday        break;    case 2://tuesday        break;    case 3://wednesday        break;    case 4://thursday        var times = [733, 748, 803, 819, 833, 848, 913, 929, 948, 1003,                     1019, 1033, 1048, 1103, 1118, 1133, 1148, 1203, 1219, 1233,                     1248, 1303, 1319, 1333, 1348, 1419, 1433, 1448, 1503, 1519,                     1533, 1548, 1603, 1619, 1635, 1651, 1707, 1723, 1739, 1756,                     1813, 1819, 1844, 1909, 1939, 2009, 2039, 2109, 2139, 2209,                     2239, 2304, 2329,2349];        for (var time in times) {//for each bus time stop @ this station (province -> campus)            if (currentTime > time)                continue;//skip, bus has already left            else {//this is the next bus (first one not passed)                var now = new Date();                var timeLeft = time - (now.getHours()*100 + now.getMinutes() + now.getSeconds()/100);                var $list = $("province");//province home list TODO add other locations                $list.html("");//clear list                var timeString = time.toString();                $list.append("<li>" + timeString.slice(2) + ":" + timeString.slice(-2) + "</li>");            }        }        break;    case 5://friday        break;    case 6://saturday        break;    }};window.setInterval(function() {    "use strict";    var d = new Date()    updateNextBusses(d.getDay(), d.getHours()*100 + d.getMinutes())}, 1000);//run once a second