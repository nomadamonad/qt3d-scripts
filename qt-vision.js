(function(){

function initQtVision(){

  const modal = document.querySelector('#qt-vision');
  if(!modal) return false;

  if(modal.dataset.qtBound === "1") return true;
  modal.dataset.qtBound = "1";

  const form = modal.querySelector('#qtVisionForm');
  const steps = Array.from(modal.querySelectorAll('.qt-step'));
  const btnNext = modal.querySelector('#qtNext');
  const btnBack = modal.querySelector('#qtBack');
  const btnReset = modal.querySelector('#qtReset');
  const btnSubmit = modal.querySelector('#qtSubmit');

  if(!form || steps.length === 0) return false;

  let i = 0;

  function showStep(n){
    i = Math.max(0, Math.min(n, steps.length - 1));
    steps.forEach(s => s.classList.remove('active'));
    steps[i].classList.add('active');

    btnBack.disabled = (i === 0);
    btnNext.style.display = (i === steps.length - 1) ? 'none' : 'inline-flex';
    btnSubmit.style.display = (i === steps.length - 1) ? 'inline-flex' : 'none';
  }

  btnNext.addEventListener('click', () => showStep(i + 1));
  btnBack.addEventListener('click', () => showStep(i - 1));
  btnReset.addEventListener('click', () =>
