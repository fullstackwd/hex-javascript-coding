$(() => {
  $("#btn_translate").click(() => fetchGreeding());
  $("#language_code").on("keypress", (e) => {
    if (e.charCode === 13) fetchGreeding();
  });
});

const fetchGreeding = () => {
  const $url =
    "https://fourtonfish.com/hellosalut/?lang=" + $("#language_code").val();
  $.get($url, (data, textStatus) => {
    textStatus === "success" && data.code !== "" && data.code !== "none"
      ? $("#hello").text(data.hello)
      : $("#hello").text("Invalid Language");
  });
};
