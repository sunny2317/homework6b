//user js profiles

const profile = {
  firstName: "Sunny",
  lastName: "Sun",
  email: "sunnysun@andrew.cmu.edu",
}

//document.getElementById('get_email').text = profile.email;

function getEmail(){
    document.getElementById('get_email').innerHTML = profile.email;
}
