document.getElementById('buttonMain').addEventListener('click',getLocation)



async function getLocation(){
  let weatherLocation =  document.getElementById('input').value 
  let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b60121d8d80c49b5918195837231504&q=${weatherLocation}`)
   data = await response.json();
           
            document.getElementById('date').innerText = data.current.last_updated.slice(0,10);
            document.getElementById('location').innerText = data.location.name;
            document.getElementById('region').innerText = data.location.region;
            document.getElementById('cond').innerText = data.current.condition.text;
            document.getElementById('temps').innerText = data.current.temp_c + "°C";
            


            let tempC = document.createElement('button')
            let tempF = document.createElement('button')


           tempC.setAttribute('id','tempC')
           tempF.setAttribute('id','tempF') 
        //    document.getElementById('weatherCard').appendChild(tempC)
        //    document.getElementById('weatherCard').appendChild(tempF)
           
           if(document.getElementById('tempF') !== null) {
            console.log('Buttons are there')
           } else {
            console.log('ran else statement')
            document.getElementById('weatherCard').appendChild(tempF)
            
         }
           if(document.getElementById('tempC') !== null) {
            console.log('Buttons are there')
            
           } else {
            console.log('ran else statement')
            document.getElementById('weatherCard').appendChild(tempC)
            
          }
          document.getElementById('tempF').innerText = "°F"
          document.getElementById('tempC').innerText = "°C"

        
 
           
            
        document.getElementById('tempF').addEventListener('click',getF)

        document.getElementById('tempC').addEventListener('click',getC)
            
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
            return data
            
        }

        function getF(){
            document.getElementById('temps').innerText = data.current.temp_f + "°F"
        }

        function getC(){
            document.getElementById('temps').innerText = data.current.temp_c + "°C"
        }
        // .catch(err =>{
        //     console.log(`error ${err}`)
        // })



        





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
