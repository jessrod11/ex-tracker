$.expr[':'].icontains = $.expr.createPseudo(function (text) {
  return function (e) {
    return $(e).text().toUpperCase().indexOf(text.toUpperCase()) >= 0;
  };
});

const searchKeypress = () => {
  $('#search-field').keypress(function (e) {
    const input = $('#search-field').val();
    if (e.which === 13) {
      $(`#location-container .card:not(:icontains(${input}))`).hide();
    }
  });
};

const searchClick = () => {
  $('#submitBtn').click(function (e) {
    const input = $('#searchBar').val();
    $(`#location-container .card:not(:icontains(${input}))`).hide();
  });
};

const refresh = () => {
  $('.card').removeClass('hide');
};

const filterMorning = () => {
  $('.time').not('.morning').closest('.card').addClass('hide');
  $('.time').filter('.morning').closest('.card').removeClass('hide');
};

const filterAfternoon = () => {
  $('.time').not('.afternoon').closest('.card').addClass('hide');
  $('.time').filter('.afternoon').closest('.card').removeClass('hide');
};

const filterEvening = () => {
  $('.time').not('.evening').closest('.card').addClass('hide');
  $('.time').filter('.evening').closest('.card').removeClass('hide');
};

const filterAfterDark = () => {
  $('.time').not('.dark').closest('.card').addClass('hide');
  $('.time').filter('.dark').closest('.card').removeClass('hide');
};

const bindEvents = () => {
  $('#clear-btn').on('click', refresh);
  $('#morning-btn').on('click', filterMorning);
  $('#afternoon-btn').on('click', filterAfternoon);
  $('#evening-btn').on('click', filterEvening);
  $('#dark-btn').on('click', filterAfterDark);
  searchKeypress();
  searchClick();
};

module.exports = bindEvents;
