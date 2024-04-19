const url = 'https://esportapi1.p.rapidapi.com/api/esport/search/ATK';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bb1db79da4msh64e4610ec62a309p189e3cjsnd6d816829983',
		'X-RapidAPI-Host': 'esportapi1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
