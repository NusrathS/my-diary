const PASSWORD = "mysecret"; // Change this to your secret key

function unlockDiary() {
  const input = document.getElementById("password").value;
  if (input === PASSWORD) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("diary-app").style.display = "block";
  } else {
    alert("Wrong password! 🧚‍♀️ Try again.");
  }
}

function saveEntry() {
  const date = document.getElementById("entry-date").value;
  const text = document.getElementById("diary-text").value;

  if (!date) {
    alert("Pick a date to save your memory! 📅");
    return;
  }

  localStorage.setItem(`diary-${date}`, text);
  document.getElementById("status-msg").textContent = "✨ Entry saved!";
}

document.getElementById("entry-date").addEventListener("change", function () {
  const date = this.value;
  const saved = localStorage.getItem(`diary-${date}`);
  document.getElementById("diary-text").value = saved || "";
  document.getElementById("status-msg").textContent = saved ? "📖 Loaded saved entry!" : "";
});
