document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    const refreshButton = document.getElementById('refreshButton');
    const backButton = document.getElementById('backButton');
    const distanceInput = document.getElementById('distance');
    const timeInput = document.getElementById('time');
    const speedDisplay = document.getElementById('speed');

    calculateButton.addEventListener('click', function() {
        const distance = parseFloat(distanceInput.value);
        const time = parseFloat(timeInput.value);

        if (!isNaN(distance) && !isNaN(time) && time > 0) {
            const speed = (distance / time) * 3.6; // km/h
            speedDisplay.textContent = speed.toFixed(2);
        } else {
            speedDisplay.textContent = 'Invalid input';
        }
    });

    refreshButton.addEventListener('click', function() {
        distanceInput.value = '';
        timeInput.value = '';
        speedDisplay.textContent = '0';
    });

    backButton.addEventListener('click', function() {
        window.history.back();
    });
});
