$(document).ready( function () {

    fetch()

    function fetch(){
        let url = "https://covid19.mathdro.id/api"

        let data = ''

        $.get(url, function (data){

            console.log(data.confirmed);
            console.log(data.recovered);
            console.log(data.deaths);

            data = `
            <td>${data.confirmed.value}</td>
            <td>${data.recovered.value}</td>
            <td>${data.deaths.value}</td>

            `

            $("#data").html(data)
        })
    }

    fetch1()

    function fetch1(){
        let url = "https://covid19.mathdro.id/api/countries/Indonesia"

        let dataindonesia = ''

        $.get(url, function (dataindonesia){

            console.log(dataindonesia.confirmed);
            console.log(dataindonesia.recovered);
            console.log(dataindonesia.deaths);

            dataindonesia = `
            <td>${dataindonesia.confirmed.value}</td>
            <td>${dataindonesia.recovered.value}</td>
            <td>${dataindonesia.deaths.value}</td>

            `

            $("#dataindonesia").html(dataindonesia)
        })
    }

    fetch2()

    function fetch2(){
        let url = "https://covid19.mathdro.id/api/countries/Malaysia"

        let datamalaysia = ''

        $.get(url, function (datamalaysia){

            console.log(datamalaysia.confirmed);
            console.log(datamalaysia.recovered);
            console.log(datamalaysia.deaths);

            datamalaysia = `
            <td>${datamalaysia.confirmed.value}</td>
            <td>${datamalaysia.recovered.value}</td>
            <td>${datamalaysia.deaths.value}</td>

            `

            $("#datamalaysia").html(datamalaysia)
        })
    }

    fetch3()

    function fetch3(){
        let url = "https://covid19.mathdro.id/api/countries/Singapore"

        let datasingapore = ''

        $.get(url, function (datasingapore){

            console.log(datasingapore.confirmed);
            console.log(datasingapore.recovered);
            console.log(datasingapore.deaths);

            datasingapore = `
            <td>${datasingapore.confirmed.value}</td>
            <td>${datasingapore.recovered.value}</td>
            <td>${datasingapore.deaths.value}</td>

            `

            $("#datasingapore").html(datasingapore)
        })
    }
    
    fetch4()

    function fetch4(){
        let url = "https://covid19.mathdro.id/api/countries/Burma"

        let datamyanmar = ''

        $.get(url, function (datamyanmar){

            console.log(datamyanmar.confirmed);
            console.log(datamyanmar.recovered);
            console.log(datamyanmar.deaths);

            datamyanmar = `
            <td>${datamyanmar.confirmed.value}</td>
            <td>${datamyanmar.recovered.value}</td>
            <td>${datamyanmar.deaths.value}</td>

            `

            $("#datamyanmar").html(datamyanmar)
        })
    }

    fetch5()

    function fetch5(){
        let url = "https://covid19.mathdro.id/api/countries/Thailand"

        let datathailand = ''

        $.get(url, function (datathailand){

            console.log(datathailand.confirmed);
            console.log(datathailand.recovered);
            console.log(datathailand.deaths);

            datathailand = `
            <td>${datathailand.confirmed.value}</td>
            <td>${datathailand.recovered.value}</td>
            <td>${datathailand.deaths.value}</td>

            `

            $("#datathailand").html(datathailand)
        })
    }

    fetch6()

    function fetch6(){
        let url = "https://covid19.mathdro.id/api/countries/Cambodia"

        let datakamboja = ''

        $.get(url, function (datakamboja){

            console.log(datakamboja.confirmed);
            console.log(datakamboja.recovered);
            console.log(datakamboja.deaths);

            datakamboja = `
            <td>${datakamboja.confirmed.value}</td>
            <td>${datakamboja.recovered.value}</td>
            <td>${datakamboja.deaths.value}</td>

            `

            $("#datakamboja").html(datakamboja)
        })
    }

    fetch7()

    function fetch7(){
        let url = "https://covid19.mathdro.id/api/countries/Laos"

        let datalaos = ''

        $.get(url, function (datalaos){

            console.log(datalaos.confirmed);
            console.log(datalaos.recovered);
            console.log(datalaos.deaths);

            datalaos = `
            <td>${datalaos.confirmed.value}</td>
            <td>${datalaos.recovered.value}</td>
            <td>${datalaos.deaths.value}</td>

            `

            $("#datalaos").html(datalaos)
        })
    }

    fetch8()

    function fetch8(){
        let url = "https://covid19.mathdro.id/api/countries/Brunei"

        let databrunei = ''

        $.get(url, function (databrunei){

            console.log(databrunei.confirmed);
            console.log(databrunei.recovered);
            console.log(databrunei.deaths);

            databrunei = `
            <td>${databrunei.confirmed.value}</td>
            <td>${databrunei.recovered.value}</td>
            <td>${databrunei.deaths.value}</td>

            `

            $("#databrunei").html(databrunei)
        })
    }
    
    fetch9()

    function fetch9(){
        let url = "https://covid19.mathdro.id/api/countries/Vietnam"

        let datavietnam = ''

        $.get(url, function (datavietnam){

            console.log(datavietnam.confirmed);
            console.log(datavietnam.recovered);
            console.log(datavietnam.deaths);

            datavietnam = `
            <td>${datavietnam.confirmed.value}</td>
            <td>${datavietnam.recovered.value}</td>
            <td>${datavietnam.deaths.value}</td>

            `

            $("#datavietnam").html(datavietnam)
        })
    }

    fetch10()

    function fetch10(){
        let url = "https://covid19.mathdro.id/api/countries/Timor-Leste"

        let datatimorleste = ''

        $.get(url, function (datatimorleste){

            console.log(datatimorleste.confirmed);
            console.log(datatimorleste.recovered);
            console.log(datatimorleste.deaths);

            datatimorleste = `
            <td>${datatimorleste.confirmed.value}</td>
            <td>${datatimorleste.recovered.value}</td>
            <td>${datatimorleste.deaths.value}</td>

            `

            $("#datatimorleste").html(datatimorleste)
        })
    }

    fetch11()

    function fetch11(){
        let url = "https://covid19.mathdro.id/api/countries/Philippines"

        let datafilipina = ''

        $.get(url, function (datafilipina){

            console.log(datafilipina.confirmed);
            console.log(datafilipina.recovered);
            console.log(datafilipina.deaths);

            datafilipina = `
            <td>${datafilipina.confirmed.value}</td>
            <td>${datafilipina.recovered.value}</td>
            <td>${datafilipina.deaths.value}</td>

            `

            $("#datafilipina").html(datafilipina)
        })
    }
})