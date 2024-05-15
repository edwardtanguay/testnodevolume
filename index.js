import {promises as fs} from 'fs';
import path from 'path';

const dataPath = path.join(process.env.DATA_PATH || "./data.txt");

(async()=>{
	try {
		const buffer = await fs.readFile(dataPath);
		const data = buffer.toString();
		const newCount = +data + 1;
		console.log(newCount);
		writeTo(newCount);
	}
  catch(e){
		writeTo(0);
		console.log("File not found, wrote '0' to a new file.");
	}
})();

const writeTo = data => {
	  fs.writeFile(dataPath, data.toString()).catch(console.error);
};
