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

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.textContent = "🌸";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = Math.random() * 24 + 10 + "px";
  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

// Add to unlockDiary()
for (let i = 0; i < 30; i++) {
  setTimeout(createPetal, i * 500); // 🌸 slowly appears
}



function unlockDiary() {
  const input = document.getElementById("password").value;
  if (input === PASSWORD) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("diary-app").style.display = "block";

    const music = document.getElementById("bg-music");
    music.volume = 0.3; // soft volume
    music.play(); // 🎵 starts
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
