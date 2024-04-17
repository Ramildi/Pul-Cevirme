function Cevir() {
    var manat = parseFloat(document.getElementById('manat').value);
    var dolarNetice = 1.70;
    var euroNetice = 1.81;
    var dolar = manat * dolarNetice;
    var euro = manat * euroNetice;

    document.getElementById('dolarCavab').innerText = dolar.toFixed(2) + " $";
    document.getElementById('euroCavab').innerText = euro.toFixed(2) + " €";
}