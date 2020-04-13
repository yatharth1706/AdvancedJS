
// load script dynamically to index.html

function load(source){

	return new Promise((resolve,reject)=>{
		const script = document.createElement('script');
		script.src = source;

		// when script is fully loaded we want to notify by returning callback function
		script.onload = () => {
			return resolve(script);
		}

		// if there is error we will return callback with error

		script.onerror = () => {
			return reject(new Error("Sorry there is some error! Script is not loaded!"))
		}


		document.head.append(script);
	})
}

// asynchronous function
load('dynamicScript.js')
.then((result)=>{
	hello();
})
.catch((error)=>{
	handle(error);
})


function handle(error){
	alert(error);
}


