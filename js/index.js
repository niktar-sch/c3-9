// 1. Ваш город — Владивосток?
//
const cityInp = document.getElementById('city');

// возвращает куки с указанным name,
// или undefined, если ничего не найдено      
 function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
 return matches ? decodeURIComponent(matches[1]) : undefined;
}

qky = getCookie('city');

if (qky) {
	document.getElementById('cityform').outerHTML = `<p>Ваш город - ${qky}</p><a href="" id="del_city">Удалить запись</a>`
	document.getElementById('del_city').addEventListener('click', (e)  => {
		document.cookie = `city=${encodeURIComponent(qky)}; max-age=0`;
	});

}

cityInp.addEventListener('input', (e)  => {document.cookie = `city=${encodeURIComponent(e.target.value)}; max-age=3600`});


// 2. Галочки предпочтений
//
const btnSave = document.getElementById('save');

const checksInps = document.querySelectorAll('input[type="checkbox"]');

const checksJSON = localStorage.getItem('checks');
// Отключаем кнопку "Сохранить", если данные были сохранены
if (checksJSON) {
	btnSave.disabled = true;
	const checksDict = JSON.parse(checksJSON);
	for (let check of checksInps) {
		check.checked = checksDict[check.id];
		check.disabled = true;
	}
}

btnSave.addEventListener('click', () => {
	const checksDict = {};
	for (let check of checksInps) {
		checksDict[check.id] = check.checked;
		check.disabled = true;
	}
	const checksJ = JSON.stringify(checksDict);
	localStorage.setItem('checks', checksJ);
	btnSave.disabled = true;
});
