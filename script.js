const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "YAY";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();

  // Date Ideas
  const dateIdeas = [
    "Make A Survival World with Roary? ^-^",
    "Explore the City Together",
    "We do anything you want to do for a day :0",
    "picnic?",
    "exhibition?",
    "take super cool awesome pictures of eachother",
    "GIFTSSSS",
    "go to a concert together",
    "Visit London",
    "im too broke to think of a idea for here :(",
    "amusment park?",
    "irl geoguesser (we travel somewhere random)",
    "BEACH",
    "SM ACTIVITES IDK",
    "cook meals for eachover? (i cant cook)",
    
    // Add more date ideas as needed
  ];

# Updating script.js content with the webhook integration and confirmation logic

webhook_url_placeholder = "https://discord.com/api/webhooks/1047243100013203536/Rsq7rQ43CD5iP7GsV7AiEseDYpLSA59apsKIyDwOQ38tLxXpw49JIkKVjZd5a7QHH2Lv"  # Placeholder for the Discord webhook URL

# New JavaScript code to send a message via Discord webhook
discord_webhook_code = f"""
// Function to send a message to a Discord webhook
const sendToDiscord = (message) => {
  fetch("https://discord.com/api/webhooks/1047243100013203536/Rsq7rQ43CD5iP7GsV7AiEseDYpLSA59apsKIyDwOQ38tLxXpw49JIkKVjZd5a7QHH2Lv"  # Placeholder for the Discord webhook URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Your date idea has been sent successfully!");
      } else {
        alert("Failed to send the date idea. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while sending the date idea.");
    });
};


  // Create and style a button
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "TY POOKIE <3";
  letsGoBtn.classList.add("letsgo-btn"); // You can add a class for styling if needed
  letsGoBtn.style.position = "absolute";

  // Adjust the left position based on screen width
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px"; // Adjust the width as needed

  // Add a click event listener to prompt the user with random romantic date ideas
  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];

    alert(`sooo how about we  ${selectedDateIdea}`);
  });

  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
