function sendMail(contactForm) {
    emailjs.send("gmail", "premier_league_tickets", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "premier_league": contactForm.matchticket.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; 
}

