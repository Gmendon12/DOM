//1
//Write the code to access element which is having id as "text"

const element1=document.getElementById("text");
console.log(element1);
console.log(element1.innerText);
console.log(element1.innerHTML);

//2
//Write the code to access element which is having tag as "h1"

const element2=document.getElementsByTagName("h1")
console.log(element2[0]);
console.log(element2[0].innerText);

//3
//Write the code to access element which is having class as "box"
const element3=document.getElementsByClassName("box");
console.log(element3[0]);
console.log(element3[0].innerText);

//4
//"<h1>Hello </h1>

//Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
element2[0].innerText="Hello World";
console.log(element2[0].innerText);

//5
//Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
function ChangeFlexdirection(){
    const element4=document.getElementsByClassName("parent")
    element4[0].style.flexDirection="column"

}

//6
//What’s the difference between window vs document?

//window
//The Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window.

//The Window interface is home to a variety of functions, namespaces, objects, and constructors which are not necessarily directly associated with the concept of a user interface window.

//document
//The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

//The Document interface describes the common properties and methods for any kind of document.

//7
//"<h1>Hello </h1>

//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

element2[0].style.fontSize="55px";
element2[0].style.color="red";
element2[0].setAttribute("id","heading");

//8
//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function ReplaceText(){
    element2[0].innerText="Welcome to Elevation academy";

}

//9
//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function showRealTime(){
    const date=new Date();
    const hours=date.getHours();
    const mins=date.getMinutes();
    const secs=date.getSeconds();
    console.log(hours - 12,mins,secs);
    setTimeout(() => {
        showRealTime();
    },500)
}
showRealTime();

//10
//Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected



function changeYear() {
    let element5 = document.getElementById("selectYear").value;
    document.getElementById("year1").innerText = element5;
}




//11
//"Create a form having name ,email, phone no. , birth year 
//Add validations - phone no. should start with 91 , it should be 10 digits
//email should be domain prepbytes.com
//birth year should be > 95"

const input = document.getElementById('email');
const defaultEmail = '@prepbytes.com';
input.value = defaultEmail;