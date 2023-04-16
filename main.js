document.querySelector('button').addEventListener('click',getLocation)

function getLocation(){
    console.log('click')
  let weatherLocation =  document.querySelector('input').value 
    fetch(`https://api.weatherapi.com/v1/current.json?key=b60121d8d80c49b5918195837231504&q=${weatherLocation}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.location.name + "  " + data.location.region
            document.querySelector('h3').innerText = data.current.condition.text
            document.getElementById('temps').innerText = data.current.temp_c + "°C"

            if (data.current.condition.code === 1000){
                document.getElementById('weatherCard').style.backgroundImage = "url('images/sun.png')"
            } else if([1063,1150,1153,1168,1171,1180,1183,1186,1189,1192,1195,1198,1201,1240,1243,1246].includes(data.current.condition.code)) {
                document.getElementById('weatherCard').style.backgroundImage = "url('images/rain.png')"
            } else if([1003,1006,1009].includes(data.current.condition.code)){
                document.getElementById('weatherCard').style.backgroundImage = "url('images/cloud.png')"
            }else if([1066,1114,1117,1210,1213,1216,1219,1222,1225,1255,1258,1279,1282].includes(data.current.condition.code)){
                document.getElementById('weatherCard').style.backgroundImage = "url('images/snow.png')"
            }else if([1069,1072,1207,1237,1249,1252,1261,1264].includes(data.current.condition.code)){
                document.getElementById('weatherCard').style.backgroundImage = "url('images/ice.png')"
            }else if([1030,1335,1147].includes(data.current.condition.code)){
                document.getElementById('weatherCard').style.backgroundImage = "url('images/fog')"
            } else if([1087,1273,1276].includes(data.current.condition.code)){
                document.getElementById('weatherCard').style.backgroundImage = "url('images/storm.png')"
            } 
        })
        .catch(err =>{
            console.log(`error ${err}`)
        })
}





// SUNNY 1000

// RaIN  1063 1150 1153 1168 1171 1180 1183 1186 1189 1192 1195 1198 1201 1240 1243 1246

// CLOUDS 1003 1006 1009

// SNOW 1066,1114,1117,1210,1213,1216,1219,1222,1225,1255,1258,1279,1282

// ICE 1069,1072,1207,1237,1249,1252,1261,1264 

// MIST/FOG 1030 1135 1147

// THUNDER 1087,1273,1276 

// f/c toggle 
// example text for form input


//  css styling
