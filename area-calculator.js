function calculateArea() {
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);

  if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) {
    const area = length * width;
    document.getElementById('result').textContent = `The area is ${area.toFixed(2)} square meters.`;
  } else {
    document.getElementById('result').textContent = 'Please enter valid positive numbers for length and width.';
  }
}

function clearInputs() {
  document.getElementById('length').value = '';
  document.getElementById('width').value = '';
  document.getElementById('result').textContent = '';
}

function goBack() {
  window.location.href = 'index.html'; // Adjust to match your main menu page
}
