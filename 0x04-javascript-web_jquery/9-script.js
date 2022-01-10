const $url = 'https://fourtonfish.com/hellosalut/?lang=fr';
$.get($url, (data) => $('#hello').text(data.hello));
