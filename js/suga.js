function dateCalculator() {
    const j_hope = new Date(2025, 5, 21, 15, 30, 20, 0);
    const now = new Date();
    const difference1 = j_hope - now;

    document.getElementById("sm").innerHTML = Math.floor((difference1 / (1000 * 60 * 60 * 24 * 30)));
    document.getElementById("sd").innerHTML = Math.floor((difference1 % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    document.getElementById("sh").innerHTML = Math.floor((difference1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("smi").innerHTML = Math.floor((difference1 % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("ss").innerHTML = Math.floor((difference1 % (1000 * 60)) / 1000);
}

setInterval(dateCalculator, 1000);