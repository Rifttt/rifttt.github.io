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
    "Make A Minecraft Survival World with Roary? ^-^",
    "Explore the City Together",
    "We do anything you want to do for a day :0",
    "we have a picnic?",
    "we go to a cool exhibition?",
    "WE CAN take super cool awesome pictures of eachother",
    "GIVE GIFTSSSS TO EACHOVER",
    "We can go to a concert together",
    "we can Visit London",
    "You can teach me, or tell me something ^-^",
    "sorry im too broke and busy to think of a idea for here :(",
    "we can go to a amusment park?",
    "we can do irl geoguesser (we travel somewhere random)",
    "WE CAN GO TO THE BEACH",
    "SM ACTIVITES IDK",
    "we can cook meals for eachover? (i cant cook)",
    "Make A Minecrarft world for eachover? ^-^",
    "sorry im too broke and busy to think of a idea for here :(",
    "sorry im too broke and busy to think of a idea for here :(",
    "sorry im too broke and busy to think of a idea for here :(",
    // Add more date ideas as needed
  ];

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

    alert(`sooo how about-${selectedDateIdea}`);
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
