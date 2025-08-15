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

// Fungsi update waktu
function updateTime() {
  document.getElementById("currentTime").textContent =
    new Date().toLocaleString();
}
// Update awal + setiap 1 detik
updateTime();
setInterval(updateTime, 1000);

// Fungsi untuk kirim data dari form ke preview
function sendMessage() {
  const nama = document.getElementById("nama").value;
  const tanggalLahir = document.getElementById("tanggalLahir").value;
  const gender =
    document.querySelector('input[name="gender"]:checked')?.value || "";
  const pesan = document.getElementById("user-message").value;

  document.getElementById("prevNama").textContent = nama;
  document.getElementById("prevTanggal").textContent = tanggalLahir;
  document.getElementById("prevGender").textContent = gender;
  document.getElementById("prevPesan").textContent = pesan;
}
