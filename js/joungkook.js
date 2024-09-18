function dateCalculator() {
    const j_hope = new Date(2025, 5, 11, 15, 30, 20, 0);
    const now = new Date();
    const difference1 = j_hope - now;

    document.getElementById("km").innerHTML = Math.floor((difference1 / (1000 * 60 * 60 * 24 * 30)));
    document.getElementById("kd").innerHTML = Math.floor((difference1 % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    document.getElementById("kh").innerHTML = Math.floor((difference1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("kmi").innerHTML = Math.floor((difference1 % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("ks").innerHTML = Math.floor((difference1 % (1000 * 60)) / 1000);
}

setInterval(dateCalculator, 1000);