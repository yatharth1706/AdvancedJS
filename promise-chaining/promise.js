
// load script dynamically to index.html

function load(source){

	return new Promise((resolve, reject)=>{
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
.then((result)=>{ return load('script2.js');})
.then((result)=>{ return load('script3.js'); })
.then((result)=>{
	hello();
	script2();
	script3();
	throw(new Error('sorry errorr!'));
})
.catch((error)=>{
	alert(error);
})

function handle(error){
	alert(error);
}



// new Promise((resolve, reject) => {
// 	// asynchronous function

// 	setTimeout(()=>{
// 		resolve(1);
// 	},1000);
// })
// .then((result)=>{
// 	alert(result);
// 	return result*4;
// })
// .then((result)=>{
// 	alert(result);
// 	return result*4;
// })
// .then((result)=>{
// 	alert(result);
// })










