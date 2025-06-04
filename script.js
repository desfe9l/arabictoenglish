
document.getElementById('francoInput').addEventListener('input', function () {
  let text = this.value.toLowerCase();
  text = text.replace(/3/g, 'ع')
             .replace(/2/g, 'أ')
             .replace(/7/g, 'ح')
             .replace(/5/g, 'خ')
             .replace(/6/g, 'ط')
             .replace(/8/g, 'ق')
             .replace(/9/g, 'ص')
             .replace(/sh/g, 'ش')
             .replace(/th/g, 'ث');
  document.getElementById('francoOutput').textContent = text;
});

document.getElementById('nameInput').addEventListener('input', function () {
  let name = this.value;
  let decorations = [
    `★ ${name} ★`,
    `『${name}』`,
    `◥${name}◤`,
    `⟦${name}⟧`,
    `-=${name}=-`
  ];
  document.getElementById('nameOutput').innerHTML = decorations.join('<br>');
});
