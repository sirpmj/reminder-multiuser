let currentUID = null;

auth.onAuthStateChanged(user => {
  if (!user) {
    location.href = "login.html";
  } else {
    currentUID = user.uid;
    loadFollowups();
  }
});
