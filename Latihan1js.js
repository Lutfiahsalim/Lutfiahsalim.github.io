
    function inputan(input){
        var x = parseFloat(document.getElementById("nilai1").value)
        var y = parseFloat(document.getElementById("nilai2").value)
        var z = parseFloat(document.getElementById("nilai3").value)
        var input = [x, y, z];
        return input;
    }

    function MinMax(){
        var datainput = inputan(datainput)
        var min = Math.min(...datainput);
        var max = Math.max(...datainput);
        
        document.getElementById("max").innerHTML = max;
        
        document.getElementById("min").innerHTML = min;
    }

    function Med() {
        var datainput = inputan(datainput)
        var Med = 0;
        datainput.sort() 

        if (
            datainput % 2 == 0
        ) {
            Med = (datainput[datainput.length / 2- 1] + datainput[datainput.length/2] / 2);
        } else {
            Med = datainput[(datainput.length - 1)/2];
        }

        document.getElementById("med").innerHTML = Med;
    }
           
        
    function Mean() {
        var datainput = inputan(datainput)
        var total = 0, i;
        for (i = 0; i < datainput.length; i += 1) {
            total += datainput[i];
        }

        document.getElementById("mean").innerHTML = total/datainput.length;
    }

function Hitung() {
    MinMax() 
    Med()
    Mean() 

}

function HapusData() {
    document.getElementById("nilai1").value = "";
    document.getElementById("nilai2").value = "";
    document.getElementById("nilai3").value = "";
    location.reload()
}