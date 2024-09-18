function dateCalculator() {
    const j_hope = new Date(2024, 9, 17, 15, 30, 20, 0);
    const now = new Date();
    const difference1 = j_hope - now;

    document.getElementById("jm").innerHTML = Math.floor((difference1 / (1000 * 60 * 60 * 24 * 30)));
    document.getElementById("jd").innerHTML = Math.floor((difference1 % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    document.getElementById("jh").innerHTML = Math.floor((difference1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("jmi").innerHTML = Math.floor((difference1 % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("js").innerHTML = Math.floor((difference1 % (1000 * 60)) / 1000);
}

setInterval(dateCalculator, 1000);