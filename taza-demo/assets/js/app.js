(function () {
  const form = document.getElementById('calc-form');
  const panels = Array.from(document.querySelectorAll('.step-panel'));
  const progress = Array.from(document.querySelectorAll('.progress span'));
  const stepHeading = document.getElementById('step-heading');
  const stepCount = document.getElementById('step-count');
  const areaInput = document.getElementById('area');
  const headings = {1:'Что нужно убрать?',2:'Уточните параметры',3:'Ваш предварительный расчёт'};
  const serviceLabels = {regular:'Поддерживающая уборка',general:'Генеральная уборка',repair:'Уборка после ремонта',office:'Уборка офиса'};
  const rates = {
    regular:{low:260,high:340,baseLow:12000,baseHigh:15000},
    general:{low:400,high:520,baseLow:18000,baseHigh:23000},
    repair:{low:520,high:690,baseLow:24000,baseHigh:31000},
    office:{low:280,high:390,baseLow:15000,baseHigh:20000}
  };
  let step = 1;
  let estimate = {low:15000,high:19000,service:'regular',area:55,rooms:'2',extras:0};
  function showStep(next) {
    step = next;
    panels.forEach(panel => { panel.hidden = Number(panel.dataset.step) !== step; });
    progress.forEach((bar,index) => bar.classList.toggle('active', index < step));
    stepHeading.textContent = headings[step];
    stepCount.textContent = `Шаг ${step} из 3`;
    if (step === 3) calculate();
  }
  function calculate() {
    const service = form.querySelector('input[name="service"]:checked').value;
    const area = Math.min(1000, Math.max(10, Number(areaInput.value) || 10));
    areaInput.value = area;
    const extra = Number(document.getElementById('extras').value) || 0;
    const rate = rates[service];
    const low = Math.max(rate.baseLow, Math.round(area * rate.low / 500) * 500) + extra;
    const high = Math.max(rate.baseHigh, Math.round(area * rate.high / 500) * 500) + extra;
    estimate = {low,high,service,area,rooms:document.getElementById('rooms').value,extras:extra};
    document.getElementById('result-price').textContent = `от ${low.toLocaleString('ru-RU')} до ${high.toLocaleString('ru-RU')} ₸`;
    document.getElementById('result-description').textContent = `${serviceLabels[service]}, ${area} м², комнат: ${estimate.rooms}${extra ? ', с дополнительной услугой' : ''}.`;
  }
  form.querySelectorAll('[data-next]').forEach(button => button.addEventListener('click', () => {
    if (step === 2 && !areaInput.reportValidity()) return;
    showStep(Math.min(3, step + 1));
  }));
  form.querySelectorAll('[data-back]').forEach(button => button.addEventListener('click', () => showStep(Math.max(1, step - 1))));
  form.addEventListener('change', () => { if (step === 3) calculate(); });
  document.getElementById('send-estimate').addEventListener('click', () => {
    const message = `Здравствуйте! Хочу уточнить стоимость уборки в Алматы. Услуга: ${serviceLabels[estimate.service]}. Площадь: ${estimate.area} м². Комнат: ${estimate.rooms}. Ориентировочная цена из демо-калькулятора: ${estimate.low.toLocaleString('ru-RU')}–${estimate.high.toLocaleString('ru-RU')} ₸. Понимаю, что стоимость требует подтверждения.`;
    openContact('whatsapp', message);
  });
  function openContact(channel, message) {
    const target = channel === 'telegram'
      ? `https://t.me/share/url?url=${encodeURIComponent(/^https?:$/.test(window.location.protocol) ? window.location.href : '')}&text=${encodeURIComponent(message)}`
      : `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(target, '_blank', 'noopener,noreferrer');
  }
  document.querySelectorAll('.contact-link').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const channel = link.dataset.channel || 'whatsapp';
    const message = `Здравствуйте! Интересует ${channel === 'telegram' ? 'консультация в Telegram' : 'уборка в Алматы'}. Подскажите, пожалуйста, условия и актуальную стоимость. Это демо-лендинг Taza, контакты нужно заменить.`;
    openContact(channel, message);
  }));
  showStep(1);
})();
