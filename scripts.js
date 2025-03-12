let sections;
let mostVisible;

window.onload = function () {
  sections = $('.track-vis');
  refresh();
};

$(window).scroll(function () {
  refresh();
});

function refresh() {
  const newMostVisible = getMostVisible();
  if (newMostVisible != mostVisible) {
    mostVisible = newMostVisible;
    console.log(mostVisible);
    $('.active-link').removeClass('active-link');
    $(`#link-${mostVisible}`).addClass('active-link');
  }
}

function getMostVisible() {
  let maxHeight = 0;
  let maxSection = sections[0];
  sections.each(function () {
    const section = $(this);
    const rect = this.getBoundingClientRect();
    const visibleHeight = Math.max(0, Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top));
    if (visibleHeight > maxHeight) {
      maxHeight = visibleHeight;
      maxSection = section;
    }
  });
  return maxSection[0].id;
}