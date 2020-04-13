
// load script dynamically to index.html

function load(source , callback){

	const script = document.createElement('script');
	script.src = source;

	// when script is fully loaded we want to notify by returning callback function
	script.onload = () => {
		return callback(null,script);
	}

	// if there is error we will return callback with error

	script.onerror = () => {
		return callback(new Error("Sorry there is some error! Script is not loaded!"))
	}


	document.head.append(script);
}

// asynchronous function
load('dynamicScriptt.js' , (error,script) => {
	
	if(error){
		handle(error);
	}else{
		hello();
		load('script2.js', (error,script) => {

			if(error){
				handle(error);
			}else{
				// any function
				load('script3.js', (error, script) => {
					if(error){
						handle(error);
					}else{
						// call something
					}
				})
			}
		})
	}
});


function handle(error){
	alert(error);
}


