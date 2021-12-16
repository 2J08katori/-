function lesson03(){
    document.getElementById('pra1').innerHTML = '出来ました'
}

function practice02(){
    document.getElementById('cat1').src = "./img/dog.jpg"
}

function practice03()
{
    document.getElementById('bulu01').style="color:blue;"
}

function syakyou(){
    var color = document.getElementById("syakyouZone").style.color;
    if(color == "red"){
        document.getElementById("syakyouZone").style.color = 'blue';
    }else{
        document.getElementById("syakyouZone").style.color = 'red';
    }


    }
