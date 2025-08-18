// Example clubs
const clubs = [
  {name: "Coding Club", current: 12, capacity: 25},
  {name: "TTRPG Club", current: 7, capacity: 15},
];

// Get the container
const clubInfoDiv = document.getElementById("club-info");

// Build HTML for each club
clubs.forEach(club => {
  const seatsLeft = club.capacity - club.current;
  const clubCard = document.createElement("div");
  clubCard.className = "club-card";
  clubCard.textContent = `${club.name}: ${club.current}/${club.capacity}, Seats Remaining: ${seatsLeft}`;
  clubInfoDiv.appendChild(clubCard);
});