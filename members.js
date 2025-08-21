document.addEventListener("DOMContentLoaded", () => {
  const members = document.querySelectorAll(".member-card");

  members.forEach(member => {
    member.addEventListener("click", () => {
      alert(`คุณกำลังกดที่: ${member.querySelector("h2").innerText}`);
    });
  });
});
