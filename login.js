function login(email, password){
  auth.signInWithEmailAndPassword(email, password)
    .then(()=> location.href = "index.html")
    .catch(err => alert(err.message));
}

function signup(email, password){
  auth.createUserWithEmailAndPassword(email, password)
    .then(()=> location.href = "index.html")
    .catch(err => alert(err.message));
}
