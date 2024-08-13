document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for the back button
  document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Adjust this path if needed
  });

  // Add event listener for the calculate button
  document.getElementById('calculateButton').addEventListener('click', calculateVolume);

  // Add event listener for the refresh button
  document.getElementById('refreshButton').addEventListener('click', refreshFields);
});

function calculateVolume() {
  const meanVolume = parseFloat(document.getElementById('meanVolume').value);
  const speed = parseFloat(document.getElementById('speed').value);
  const spacing = parseFloat(document.getElementById('spacing').value);

  if (isNaN(meanVolume) || isNaN(speed) || isNaN(spacing) || speed <= 0 || spacing <= 0) {
    alert('Please enter valid values for mean volume, speed, and spacing.');
    return;
  }

  // Volume (L/ha) = meanVolume * 600 / (speed * spacing)
  const volume = (meanVolume * 600) / (speed * spacing);
  document.getElementById('volume').textContent = volume.toFixed(2);
}

function refreshFields() {
  document.getElementById('meanVolume').value = '';
  document.getElementById('speed').value = '';
  document.getElementById('spacing').value = '';
  document.getElementById('volume').textContent = '0';
}
