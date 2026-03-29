function saveContact() {
  // 🔥 Mobile-friendly open
  window.open("/api/contact", "_self");

  // ✅ UI feedback (your existing button styles will apply)
  const btn = document.getElementById("saveBtn");
  const label = document.getElementById("saveLabel");
  const value = document.getElementById("saveValue");
  const iconDefault = document.getElementById("iconDefault");
  const iconCheck = document.getElementById("iconCheck");

  btn.classList.add("saved");
  label.innerText = "Saved";
  value.innerText = "Opening Contacts...";
  iconDefault.style.display = "none";
  iconCheck.style.display = "block";
}
