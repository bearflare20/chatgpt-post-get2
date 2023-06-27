// Function to send the web request
function sendRequest() {
  var url = document.getElementById('url').value;
  var method = document.getElementById('method').value;
  var params = document.getElementById('params').value;

  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('response').textContent = xhr.responseText;
    }
  };
  xhr.send(params);
}

// Attach click event listener to the send button
document.getElementById('send').addEventListener('click', sendRequest);

// Attach click event listener to the copy button
document.getElementById('copy').addEventListener('click', function() {
  var responseText = document.getElementById('response').textContent;
  navigator.clipboard.writeText(responseText)
    .then(function() {
      alert('Response text copied to clipboard!');
    })
    .catch(function() {
      alert('Failed to copy response text.');
    });
});
