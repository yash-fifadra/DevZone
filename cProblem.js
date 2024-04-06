function fetchCurrentTime() {
    fetch('https://worldtimeapi.org/api/ip')
      .then(response => response.json())
      .then(data => {
        const currentTime = new Date(data.datetime);
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        updateTimer(hours, minutes, seconds);
      })
      .catch(error => console.error('Error fetching time:', error));
  }
  
  // Function to update the timer element
  function updateTimer(hours, minutes, seconds) {
    const timerElement = document.getElementById('timer');
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    timerElement.textContent = formattedTime;
  }
  
  // Helper function to add a leading zero if the value is less than 10
  function padZero(value) {
    return value < 10 ? '0' + value : value;
  }
  
  // Call the fetchCurrentTime function every second
  setInterval(fetchCurrentTime, 1000);