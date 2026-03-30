function checkHealth() {
  let symptom = document.getElementById("symptom").value.toLowerCase();
  let result = "";
  let severity = "";

  if (symptom.includes("fever") && symptom.includes("cough") && symptom.includes("headache")) {
    result = "High chance of viral infection. Consult doctor.";
    severity = "🔴 High Risk";
  } 
  else if (symptom.includes("fever") && symptom.includes("cough")) {
    result = "Possible Flu. Stay hydrated and rest.";
    severity = "🟡 Medium Risk";
  } 
  else if (symptom.includes("headache") && symptom.includes("dizziness")) {
    result = "Could be migraine or fatigue.";
    severity = "🟡 Medium Risk";
  }
  else if (symptom.includes("stomach") || symptom.includes("pain")) {
    result = "Possible digestion issue.";
    severity = "🟢 Low Risk";
  } 
  else if (symptom.includes("cold") || symptom.includes("cough")) {
    result = "Common cold detected.";
    severity = "🟢 Low Risk";
  }
  else {
    result = "Symptoms unclear. Please consult a doctor.";
    severity = "⚪ Unknown";
  }

  document.getElementById("result").innerText = result;
  document.getElementById("severity").innerText = severity;
}

// 🎤 Voice input
function startVoice() {
  let recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";

  recognition.onresult = function(event) {
    document.getElementById("symptom").value = event.results[0][0].transcript;
  };

  recognition.start();
}
// 💬 Chatbot Function
function sendMessage() {
  let input = document.getElementById("userInput").value.toLowerCase();
  let chat = document.getElementById("chat");

  // Show user message
  chat.innerHTML += "<p><b>You:</b> " + input + "</p>";

  let reply = "";

  // Smart replies
  if (input.includes("fever") && input.includes("headache")) {
    reply = "You may have a viral infection. Stay hydrated and consult a doctor.";
  } 
  else if (input.includes("cough")) {
    reply = "It might be a cold. Drink warm fluids.";
  } 
  else if (input.includes("stomach")) {
    reply = "Possible digestion issue. Avoid oily food.";
  } 
  else if (input.includes("hello") || input.includes("hi")) {
    reply = "Hello! Tell me your symptoms.";
  } 
  else {
    reply = "I'm not fully sure. Please consult a doctor.";
  }

  // Show bot reply
  chat.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

  // Auto scroll
  chat.scrollTop = chat.scrollHeight;

  document.getElementById("userInput").value = "";
}