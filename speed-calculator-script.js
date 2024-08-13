document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for the back button
  document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Adjust this path if needed
  });
});

function calculateSpeed() {
  const distance = parseFloat(document.getElementById('distance').value);
  const time = parseFloat(document.getElementById('time').value);

  if (isNaN(distance) || isNaN(time) || time <= 0) {
    alert('Please enter valid distance and time values.');
    return;
  }

  // Speed in km/h = (Distance in meters / Time in seconds) * 3.6
  const speed = (distance / time) * 3.6;
  document.getElementById('speed').textContent = speed.toFixed(2);
}
