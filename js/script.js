(d => {
  const ls = localStorage;
  const $switch = d.querySelector('.slider');
  const $itemsDark = d.querySelectorAll('[data-dark]');
  const $itemsDarkCard = d.querySelectorAll('[data-dark-card]');
  const $inputCheck = d.querySelector('input[type="checkbox"]');
  let darkTheme = false;
  d.addEventListener('DOMContentLoaded', e => {
    
    if(ls.getItem('theme') === null) ls.setItem('theme', 'light');
    if(ls.getItem('theme') === 'dark'){
      darkMode();
      darkTheme = true;
      $inputCheck.checked = true;
    }else{
      lightMode();
      darkTheme = false;
    }
  })

  $switch.addEventListener('click', cambiarModo);

  function cambiarModo() {
    if(!darkTheme){
      darkMode();
      darkTheme = true;
    }else{
      lightMode();
      darkTheme = false;
    }
  }
  function lightMode() {
    $itemsDark.forEach(item => item.classList.remove('dark-mode-class'))
    $itemsDarkCard.forEach(item => item.classList.remove('dark-mode-card'));
    ls.setItem('theme','light');
  }
  function darkMode() {
    $itemsDark.forEach(item => item.classList.add('dark-mode-class'))
    $itemsDarkCard.forEach(item => item.classList.add('dark-mode-card'))
    ls.setItem('theme', 'dark');
  }
})(document);