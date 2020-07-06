const cityInp = document.getElementById('city');

console.log(document.coockie);
console.log(decodeURIComponent(document.coockie));

cityInp.addEventListener('input', (e)  => {
	document.coockie = `city=${encodeURIComponent(e.target.value)}; Max-Age=3600`;
	console.log(e.target.value);
});
