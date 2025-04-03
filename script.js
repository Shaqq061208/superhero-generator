function generateHero() {
    // Get the name from the input box
    let name = document.getElementById("nameInput").value;

    // Lists of superhero name parts and powers
    let prefixes = ["Captain", "Mighty", "Thunder", "Shadow", "Cosmic"];
    let suffixes = ["Blaster", "Rider", "Strike", "Phantom", "Fury"];
    let powers = ["Laser Vision", "Super Speed", "Invisibility", "Mind Control", "Flight"];

    // Pick random items from each list
    let randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    let randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    let randomPower = powers[Math.floor(Math.random() * powers.length)];

    // Combine them with the user's name
    let heroName = `${randomPrefix} ${name} ${randomSuffix}`;
    let result = `${heroName} with the power of ${randomPower}!`;

    // Show the result on the page
    document.getElementById("result").innerText = result;
}