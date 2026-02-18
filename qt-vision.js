(function(){

function bindVision(){

  const modal = document.querySelector('#qt-vision');
  if(!modal) return false;

  if(modal.dataset.qtBound === "1") return true;
  modal.dataset.qtBound = "1";

  const steps = Array.from(modal.querySelectorAll('.qt-step'));
  const btnNext = modal.querySelector('#qtNext');
  const btnBack = modal.querySelector('#qtBack');
  const btnReset = modal.querySelector('#qtReset');
  const btnSubmit = modal.querySelector('#qtSubmit');

  if(!steps.length || !btnNext) return false;

  let i = 0;

  function showStep(n){
    i = Math.max(0, Math.min(n, steps.length - 1));

    steps.forEach(s => s.classList.remove('active'));
    steps[i].classList.add('active');

    if(btnBack) btnBack.disabled = (i === 0);

    if(btnNext){
      btnNext.style.display = (i === steps.length - 1) ? 'none' : 'inline-flex';
    }

    if(btnSubmit){
      btnSubmit.style.display = (i === steps.length - 1) ? 'inline-flex' : 'none';
    }
  }

  btnNext.addEventListener('click', () => showStep(i + 1));
  if(btnBack) btnBack.addEventListener('click', () => showStep(i - 1));
  if(btnReset) btnReset.addEventListener('click', () => showStep(0));

  showStep(0);

  return true;
}

document.addEventListener('DOMContentLoaded', bindVision);

})();
