/**
 * script.js
 *
 * This script handles user interactions for greeting and message sending on the web page.
 *
 * Functions:
 * - welcomeSpeech(): Prompts the user for their name and displays it in the element with id "user-greeting".
 * - sendMessage(): Sends the user's message entered in the element with id "user-message" and shows an alert.
 *
 * Usage:
 * - welcomeSpeech() is called on page load to greet the user.
 * - sendMessage() should be called when the user clicks the "Send" button.
 */

welcomeSpeech();

/**
 * Prompts the user for their name and displays it in the greeting element.
 */
function welcomeSpeech() {
  let userName = prompt("Please enter your name:");
  if (userName != "") {
    document.getElementById("user-greeting").textContent = userName;
  }
}

/**
 * Sends the user's message and displays an alert.
 * If the message input is empty, prompts the user to enter a message.
 */
function sendMessage() {
  let message = document.getElementById("user-message").value;
  if (message != "") {
    alert("Message sent: " + message);
  } else {
    alert("Please enter a message before sending.");
  }
}
