
document.addEventListener("DOMContentLoaded", function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../Public/footer.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("footer-placeholder").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});
