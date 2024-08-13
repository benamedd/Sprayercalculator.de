document.getElementById('calculateButton').addEventListener('click', function() {
  const productRate = parseFloat(document.getElementById('productRate').value);
  const sprayerRate = parseFloat(document.getElementById('sprayerRate').value);
  const area = parseFloat(document.getElementById('area').value);

  if (isNaN(productRate) || isNaN(sprayerRate) || isNaN(area)) {
    alert('Please enter valid numbers in all fields.');
    return;
  }

  const totalProduct = productRate * area;
  const totalWater = sprayerRate * area;

  document.getElementById('totalProduct').value = totalProduct.toFixed(2) + '(kg,L)';
  document.getElementById('totalWater').value = totalWater.toFixed(2) + ' L';
});

document.getElementById('refreshButton').addEventListener('click', function() {
  document.getElementById('productRate').value = '';
  document.getElementById('sprayerRate').value = '';
  document.getElementById('area').value = '';
  document.getElementById('totalProduct').value = '';
  document.getElementById('totalWater').value = '';
});

document.getElementById('backButton').addEventListener('click', function() {
  window.history.back();
});
