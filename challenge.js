function addItemToCart(i){
	var li = document.createElement("li");
	var textnode = document.createTextNode(i);
	li.appendChild(textnode);
	document.getElementById("list").appendChild(li);

}
	var n = document.getElementsByClassName("product");

	for(let i=0; i < n.length; i++){
	let c = n[i].getAttribute("name");
	n[i].addEventListener("click", function(){addItemToCart(c)}, false);
	}


function removeElement(i) {

var element = document. getElementById(i);
element. parentNode. removeChild(i);
}