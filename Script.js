

const UserField = document.getElementById("username")

 const users = [
  { name: "John Doe", password: "john123" },
  { name: "Jane Smith", password: "jane456" },
  { name: "Bob Johnson", password: "bob789" },
  { name: "Alice Brown", password: "alice012" },
  { name: "Mike Davis", password: "mike345" },
    { name: "Samuel Imafidon", password: "sam345" },
  { name: "Osimi Godsgift", password: "gift345" }
];
let matchfound=false

const button = document.getElementById("button")

button.addEventListener("click",function(event){
  event.preventDefault()
  const Username = document.getElementById("name").value
const password = document.getElementById("password").value
const confirm = document.getElementById("confirm").value
const message= document.getElementById("msg")
  if(Username===""&& password===""){
    message.innerText="Field cannot be empty"
  }
  else if(Username!=="" && password!== ""&& password===confirm){
    for(let i = 0; i < users.length; i++) {
  if (users[i].name === Username && users[i].password === password) {
    message.setAttribute("style","color:green")
    matchfound=true
    message.innerText="Login successful"
    const loader = document.getElementById("load")
    loader.innerHTML=`<div class="loader">
  <div class="spinner"></div>
  <p>Loading...</p>
</div> 
<style>
.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<script>
setTimeout(function() {
  document.querySelector(".loader").style.display = "none";
}, 5000);
</script>
`
    setTimeout(relocateuser,5000)
    
    break;
  }
}

if (!matchfound) {
  message.innerText="Invalid username or password"
  // Add code to handle invalid login
}
  }
  else if(Username!=="" && password!== ""&& password!==confirm){
    message.innerText="confirm password must be the same as password"
  }else{
    message.innerText="One of the field is still empty"
  }
})
const login = document.getElementById("myform")
function relocateuser(){
  const Name = document.getElementById("name").value
  const random = Math.floor(Math.random()*1001)
  const registration = "CBS-LTS"+"∆"+random;
  const dashboard = document.getElementById("user")
  const login = document.getElementById("myform")
  login.setAttribute("style","background-color:white;");
  login.remove()
  dashboard.innerHTML=`
 
  <link rel="stylesheet" href="Style.css">
  <div id="big-container"class="container">
    <div  id="bag"class="user-info">

      <h2>User Dashboard</h2>
   <strong>  <p style="font-size:20px;" id="username">${Name}</p></strong>  
      <p><strong>Registration Number:</strong> ${registration}</p>
      <p><strong id="describe">Description:</strong> Products & Services </p>
    </div>
    <div class="complaint-form">
      <h3>Lay Complaint</h3>
      <section id="complaintForm">
        <div class="form-group">
          <label for="laptopDetails">Laptop Details:</label>
          <input type="text" id="laptopDetails" name="laptopDetails" required>
        </div>
        <div class="form-group">
          <label for="laptopIssues">Laptop Issues:</label>
          <textarea id="laptopIssues" name="laptopIssues" rows="4" required></textarea>
        </div>
                <div class="form-group">
          <label for="laptopDetails">Address</label>
          <input type="text" id="destination" name="laptopDetails" required>
        </div>
                        <div class="form-group">
          <label for="laptopDetails">Pick up Point</label>
          <input type="text" id="pickup" name="laptopDetails" required>
        </div>
                <div class="form-group">
          <label for="laptopDetails">Select Pickup Agent</label>
          <select type="text" id="laptopDetail" name="laptopDetails" >
          <option id="agent1" select >Peace Iwema</option>
           <option id="agent2">Christopher James</option>
                      <option id="agent3"> Chioma Ebuka</option>
          </select>
        </div>
                <div class="form-group">
          <label for="laptopDetails">Pick up Time </label>
          <input type="text" id="agentlocation" name="laptopDetails" required>
        </div>
        <button id="Detail" onclick="agentalert()"type="submit">Submit</button>
      </section>
<script src="Script.js">
      `
  
}

function route(){
  const selectedvalue = document.getElementById("laptopDetail").value
const pickup = document.getElementById("pickup").value
const destination = document.getElementById("destination").value
const agentlocation = document.getElementById("agentlocation").value
  const Board = document.getElementById("big-container")
  Board.remove();
  
  const section = document.getElementById("route");
  section.innerHTML=`
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Route</title>
  <link rel="stylesheet" href="Style.css">
</head>
<style>
.dashboard {
  width: 80%;
  margin: 40px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.graphs {
  display: flex;
  justify-content: space-between;
}
#delivery-time-graph, #agent-location-graph {
  width: 45%;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#delivery-time-graph {
  background-color: #ff9800; /* Orange */
}

#agent-location-graph {
  background-color: #4CAF50; /* Green */
}

.data {
  margin-top: 20px;
}

.data h2 {
  color: #333;
}

.data p {
  font-size: 16px;
  color: #666;
}

.data span {
  font-weight: bold;
  color: #337ab7; /* Blue */
}
</style>
<body id="user">
  <div id="delivery"class="dashboard">
  <h1>PICK-UP ROUTE</h1>
  <div class="graphs">
    <div id="delivery-time-graph"></div>
    <div id="agent-location-graph"></div>
  </div>
  <div class="data">
    <h2>Delivery Information</h2>
    <p>Agent Name: <span id="agent-name"> </span></p>
    <p>Location of Pickup: <span id="pickup-location"></span></p>
    <p>Destination Address: <span id="destination-address"></span></p><br>
     <button id="send" onclick="send();"type="submit">Confirm</button>
  </div>
</div>
<script>
  // Sample data
const deliveryData = {
  agentName:${selectedvalue},
  pickupLocation: "New York",
  destinationAddress: "Los Angeles",
  deliveryTime: [10, 20, 30, 40, 50], // minutes
  agentLocations: ["New York", "Chicago", "Los Angeles", "Houston", "Phoenix"]
};

// Render graphs
const deliveryTimeGraph = document.getElementById("delivery-time-graph");
const agentLocationGraph = document.getElementById("agent-location-graph");

// Render delivery information
const agentNameElement = document.getElementById("laptopDetail");
const pickupLocationElement = document.getElementById("pickup-location");
const destinationAddressElement = document.getElementById("destination-address");

// Update dashboard with sample data
agentNameElement.textContent = deliveryData.agentName;
pickupLocationElement.textContent = deliveryData.pickupLocation;
destinationAddressElement.textContent = deliveryData.destinationAddress;

// Generate random graph data
const graphData = [];
for (let i = 0; i < 10; i++) {
  graphData.push(Math.floor(Math.random() * 100));
}

// Render random graph
deliveryTimeGraph.innerHTML = 
  <h3>Delivery Time Graph</h3>
  <canvas id="graph-canvas" width="200" height="200"></canvas>
;

const graphCanvas = document.getElementById("graph-canvas");
const ctx = graphCanvas.getContext("2d");

ctx.fillStyle = "rgba(255, 255, 255, 0.5");
ctx.fillRect(0, 0, 200, 200);

ctx.fillStyle = "rgba(255, 0, 0, 1)";
graphData.forEach((data, index) => {
  ctx.fillRect(index * 20, 200 - data * 2, 20, data * 2);
});
</script>
  <script src="Script.js"></script>
</body>
`
const deliveryData = {
  agentName:`${selectedvalue}`,
  pickupLocation: `${pickup}`,
  destinationAddress: `${destination}`,
  deliveryTime:`${destination}` , // minutes
  agentLocations: `${agentlocation}`
};

// Render graphs
const deliveryTimeGraph = document.getElementById("delivery-time-graph");
const agentLocationGraph = document.getElementById("agent-location-graph");

// Render delivery information
const agentNameElement = document.getElementById("agent-name");
const pickupLocationElement = document.getElementById("pickup-location");
const destinationAddressElement = document.getElementById("destination-address");

// Update dashboard with sample data
agentNameElement.textContent = deliveryData.agentName;
pickupLocationElement.textContent = deliveryData.pickupLocation;
destinationAddressElement.textContent = deliveryData.destinationAddress;

// Generate random graph data
const graphData = [];
for (let i = 0; i < 10; i++) {
  graphData.push(Math.floor(Math.random() * 100));
}

// Render random graph
deliveryTimeGraph.innerHTML = `
  <h3>Delivery Time Graph</h3>
  <canvas id="graph-canvas" width="200" height="200"></canvas>
`;

const graphCanvas = document.getElementById("graph-canvas");
const ctx = graphCanvas.getContext("2d");

ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
ctx.fillRect(0, 0, 200, 200);

ctx.fillStyle = "rgba(255, 0, 0, 1)";
graphData.forEach((data, index) => {
  ctx.fillRect(index * 20, 200 - data * 2, 20, data * 2);
});
}

function agentalert(){
const selectedvalue = document.getElementById("laptopDetail").value
//alert(selectedvalue)
route();
}

function send(){
  const delivery = document.getElementById("delivery")
  delivery.remove()
  const ordersent = document.createElement("div")
  ordersent.setAttribute("Id","ordersent")
  ordersent.innerHTML=`<html><div class="confirmation-message">
  <h2>Order Confirmation</h2>
  <p>Your order has been sent!</p>
  <p>Our agent will contact you soon.</p>
  <p>Thanks for choosing our services!</p>
  <button onclick="Alert()">OK</button>
</div>
<style>
.confirmation-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.confirmation-message h2 {
  color: #333;
  margin-bottom: 10px;
}

.confirmation-message p {
  color: #666;
  margin-bottom: 10px;
}

.confirmation-message button {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.confirmation-message button:hover {
  background-color: #3e8e41;
}
</style>
</html>
`
document.body.appendChild(ordersent);
}

function Alert(){
  const ORDER = document.getElementById("ordersent");
  
  ORDER.remove();
  document.body.appendChild(login)
  document.getElementById("load").innerHTML="";
}