
document.body.append("Hello I am Dynamic Script");

function hello(){

	const h1 = document.createElement('h1');

	const text = document.createTextNode('Hello I am dynamically written');

	h1.appendChild(text);

	document.body.appendChild(h1);
}