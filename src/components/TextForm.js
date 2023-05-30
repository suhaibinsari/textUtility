import React, { useState } from 'react'

export default function TextForm(props) {

	const handleUpClick = ()=>{
		let newText = text.toUpperCase();
		setText(newText)
		// props.showAlert("Converted to uppercase!", "success");
}

const handleLoClick = ()=>{
		let newText = text.toLowerCase();
		setText(newText)
		// props.showAlert("Converted to lowercase!", "success");
}

const handleClearClick = ()=>{
		let newText = '';
		setText(newText);
		// props.showAlert("Text Cleared!", "success");
}

const handleOnChange = (event)=>{
		setText(event.target.value)
}

const handleCopy = () => {
		navigator.clipboard.writeText(text);
		// props.showAlert("Copied to Clipboard!", "success");
}

const handleExtraSpaces = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
		// props.showAlert("Extra spaces removed!", "success");
}

const [text, setText] = useState('');

	return (
		<>
		<div className='container px-3 mx-auto text-white'>
			<div className='flex flex-col space-y-3 items-center justify-center '>
				<h1 className='text-5xl max-w-xl text-center font-Leckerli mb-10'>{props.heading}</h1>
				<div className='md:w-4/5 w-3/4 pb-6'> <textarea id="txtid" name="txtname" rows="8" cols="50" value={text} onChange={handleOnChange} maxLength="1000" className='p-3 border-2 border-black rounded-xl w-full resize-none bg-gray-800' ></textarea> </div>
				<div className='grid grid-cold-1 md:grid-cols-3 gap-4'>
					<button onClick={handleUpClick} className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 py-2 px-4 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300  shadow-teal-500/50 rounded-lg font-bold"> Convert to Uppercase </button>
					<button onClick={handleLoClick} className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300  shadow-teal-500/50 rounded-lg font-bold"> Convert to Lowercase </button>
					<button onClick={handleExtraSpaces} className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 py-2 px-4 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300  shadow-teal-500/50 rounded-lg font-bold"> Remove Extra Spaces </button>
					<button onClick={handleClearClick} className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm py-2 px-4 text-center"> Clear Text </button>
					<button onClick={handleCopy} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-2 px-4 text-center"> Copy Text</button>
				</div>
			</div>
			<div class="flex justify-center items-center p-10">
					<div class="md:w-3/5 w-3/4 px-10 flex flex-col gap-2 p-5 bg-gray-800 text-white  rounded-lg">
							<h1 class="text-lg">{props.sheading}</h1>
							<div class="flex flex-wrap gap-2 w-full py-2">
									<span class="px-2 p-1  bg-gray-950 bg-opacity-30">Total Words {text.split(" ").filter((element) => { return element.length !== 0 }).length}</span>
									<span class="px-2 p-1  bg-gray-950 bg-opacity-30">Total Charachters {text.length}</span>
									<span class="px-2 p-1  bg-gray-950 bg-opacity-30">Time Duration to Read {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</span>
							</div>
							<div class="flex p-4 bg-gray-600 bg-opacity-20 border border-gray-200 rounded-md"> {text} </div>
					</div>
			</div>
			</div>
		</>
	)
}
