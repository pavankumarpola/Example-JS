// function submit5() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.open('get','demo_get.asap',true);
//     xhttp.send();
//      xhttp.onreadystatechange = function () {
//          // this is referring to xhttp
//          if (this.readyState == 2) {
//           document.getElementById('displayy').innerHTML = 'processing'

//          }
//          else if (this.readyState == 4 && this.status == 200) {
//              console.log(this.status);
//              console.log(this.readyState);
//              console.log(this.responseText);//capture the response
//              console.log(this.statusText);
//              document.getElementById('displayy').innerHTML = this.responseText;
//          }
//      };
//     };
     // making a get request
 
     //method, url, boolean(asyn or sync)
     // xhttp.open('GET', 'demo_get.asp', true);
     // xhttp.send();
 
     //to send information with url
     // xhttp.open('GET', 'demo_get.asp?moviename='bandersnatch', true);
     // xhttp.send();
 
     // json
//      xhttp.open('GET', 'data.json', true);
//      xhttp.send();
 
//  }
 
 // this keyword - refers to owner object
 
 //alone
//  console.log(this);//refer to window object
 
//  var person = {
//      firstName: 'alina',
//      age: 45,
//      lastName: this.age,//this is refering to person
//      fullName: function () {
//          //this will refer to person
//          console.log(this.firstName + this.lastName);//refer to the owner where function is residing
//      }
//  }
 
//  console.log(person.firstName);
 
 
 // <!-- task 
 // create a get request and get the json data and display employee data in UI. (hint: for employee)
 // Sample data json
 // "Employees" : [
 // {
 // "userId":"rirani",
 // "jobTitleName":"Developer",
 // "firstName":"Romin",
 // "lastName":"Irani",
 // "preferredFullName":"Romin Irani",
 // "employeeCode":"E1",
 // "region":"CA",
 // "phoneNumber":"408-1234567",
 // "emailAddress":"romin.k.irani@gmail.com"
 // },
 // {
 // "userId":"nirani",
 // "jobTitleName":"Developer",
 // "firstName":"Neil",
 // "lastName":"Irani",
 // "preferredFullName":"Neil Irani",
 // "employeeCode":"E2",
 // "region":"CA",
 // "phoneNumber":"408-1111111",
 // "emailAddress":"neilrirani@gmail.com"
 // },
 // {
 // "userId":"thanks",
 // "jobTitleName":"Program Directory",
 // "firstName":"Tom",
 // "lastName":"Hanks",
 // "preferredFullName":"Tom Hanks",
 // "employeeCode":"E3",
 // "region":"CA",
 // "phoneNumber":"408-2222222",
 // "emailAddress":"tomhanks@gmail.com"
 // }
 // ]
 // }-->






//  function submit() {
  
//     var xhttp= new XMLHttpRequest();
//    xhttp.onreadystatechange=function(){
//      if(this.readystate==2){
//        alert('processing');
//      }else if(this.readyState==4 && this.status==200) {
//         var data=JSON.parse(this.responseText);
//        console.log(this.responseText);
//        console.log(data);
//        document.getElementById('displayy').innerHTML=this.responseText;
      
//               }
//  }





//  xhttp.open('GET','data12.json',true);
//  xhttp.send();

//  }

// function submit(){
//   var xhttp=new XMLHttpRequest();
//   xhttp.onreadystatechange=function submit(){
// if(xhttp.readyState==4&& xhttp.status==200){
//   var data= JSON.parse(xhttp.responseText);
//   document.getElementById('header').innerHTML=xhttp.responseText;
//   console.log(data);
// }else{
//   document.getElementById('header').innerHTML='connection error'
// };
//   }
//   xhttp.open('GET','demo_get.asap',true);
//   xhttp.send();
// };

// var btn=document.getElementById('buton');
// var disp=document.getElementById('displayy');



// function submit5(){

//   var xhr=new XMLHttpRequest;

// xhr.open('get','demo_get.asap',true);
// xhr.send();

// xhr.onreadystatechange=function(){
//   var reslt=xhr.responseText;
//   console.log(reslt);
//   disp.innerHTML=reslt;
// }

// };

// function submit5() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.open('get','demo_get.asap',true);
//     xhttp.send();
//      xhttp.onreadystatechange = function () {
//          // this is referring to xhttp
//          if (this.readyState == 4) {
//           document.getElementById('displayy').innerHTML = 'processing'

//          }
//          else if (this.readyState == 4 && this.status == 200) {
//              console.log(this.status);
//              console.log(this.readyState);
//              console.log(this.responseText);//capture the response
//              console.log(this.statusText);
//              document.getElementById('displayy').innerHTML = this.responseText;
//          }
//      };
//     };

function submit(){
var xhttp = new XMLHttpRequest();
xhttp.open('get','data2.json',true);
xhttp.send();
xhttp.onreadystatechange = function(){
    if(xhttp.readyState == 4){
        if(xhttp.status == 200){
            var data = JSON.parse(xhttp.responseText);
            document.getElementById('pavan').innerHTML = data.name;
        }
        else{
            document.getElementById('pavan').innerHTML = 'error';
        }
    }
}
}

function submit1(){
    var xhttp = new XMLHttpRequest();
    xhttp.open('get','data2.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4){
            if(xhttp.status == 200){
                var data = JSON.parse(xhttp.responseText);
                document.getElementById('pavan').innerHTML = data.group;
            }
            else{
                document.getElementById('pavan').innerHTML = 'error';
            }
        }
    }
    }

    function submit2(){
        var xhttp = new XMLHttpRequest();
        xhttp.open('get','data2.json',true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(xhttp.readyState == 4){
                if(xhttp.status == 200){
                    var data = JSON.parse(xhttp.responseText);
                    document.getElementById('pavan').innerHTML = data.age;
                }
                else{
                    document.getElementById('pavan').innerHTML = 'error';
                }
            }
        }
        }