$(() => {
  $('#btn_translate').click(() => {
    const $url =
			'https://fourtonfish.com/hellosalut/?lang=' + $('#language_code').val();
    $.get($url, (data, textStatus) => {
      textStatus === 'success' && data.code !== '' && data.code !== 'none'
        ? $('#hello').text(data.hello)
        : $('#hello').text('');
    });
  });
});
