let upload = document.getElementById('upload');
upload.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    fr.onload = function() {

        let Arr = fr.result.split(/\r?\n|\n/).map(e => {
            return e.split(',');
        });
        Window.valNo = 0;
        let invalNo = 0;
        Window.valMail = [];
        Arr.forEach(e => {
            let em = String(e);
            let m = e.map(e => {
                return `<td>${e}</td>`;
            });
            let creEle = document.createElement("tr");
            creEle.innerHTML = m;
            if (em !== "") {

                if (em.charAt(em.length - 4) === '.') {
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo + 1;
                    return false;
                } else if (em.charAt(em.length - 3) === '.') {
                    document.querySelector("table#val ").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo + 1;
                    return false;
                } else {
                    document.querySelector("table#inval ").appendChild(creEle);
                    invalNo = invalNo + 1;
                    return false;
                }
            }
        });
        document.querySelector('#valCount').innerHTML = Window.valNo;
        document.querySelector('#invalCount').innerHTML = invalNo;
    };
});

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "vishveshrajakumar@gmail.com",
        Password: "Rv@04032006",
        To: "crkrajkumarbsc@gmail.com",
        From: "vishveshrajakumar@gmail.com",
        Subject: document.queryselector('#subject').value,
        Body: document.getElementById('msg').value
    }).then(
        message => alert(Window.valNo + "mails has been sent successfully")
    );

    console.log(document.getElementById(' msg ').value);
    console.log(document.getElementById(' msg ').innerHTML);
    console.log(document.getElementById(' msg ').innerText);
}

indow.addEventListener("scroll", function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var scrollButton = document.getElementById("scroll-top-btn");
    if (scrollPosition > 300) {
        scrollButton.style.disp1ay = "block";
    } else {
        scrollButton.style.disp1ay = "none";
    }
});
document.getElementById("scroll-top-btn").addEventListener("click", function(e) {
    e.preventDefault();
    Window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function showPopup() {
    alert(Window.valNo + "MAILS HAS BEEN SENT SUCCESSFULLY");
}