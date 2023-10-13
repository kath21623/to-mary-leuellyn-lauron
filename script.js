document.addEventListener("DOMContentLoaded", function() {
    const acceptButton = document.getElementById("acceptButton");

    acceptButton.addEventListener("click", function() {
        alert("Thank you for saying 'Yes'! You mean the world to me. Redirecting...");
        window.location.href = "https://m.me/mickie.carcasona";
    });
});
