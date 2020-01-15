var counter
var result = []
document.getElementById("button-1").addEventListener("click",function(){rollDie(rollDie);})
document.getElementById("button-2").addEventListener("click",function(){openResults(openResults);})
document.getElementById("button-3").addEventListener("click",function(){checkAll(checkAll);})
document.getElementById("button-4").addEventListener("click",function(){uncheckAll(uncheckAll);})
document.getElementById("button-5").addEventListener("click",function(){closeResults(closeResults);})

function rollDie()
{   
    //Throw a dice logic (first roll)
     if (typeof counter === 'undefined')
    { 
        for (var i=1;i<=5;i++)
        {
            result.push(Math.floor(Math.random() * 6) + 1);    
        }
        document.getElementById("button-1").disabled=true;
        unhideButtons();
    }

    //Throw a dice logic (rolls: 2 and 3)
    else
    {   
        dicesToExchange = exchangeDices()
        if(dicesToExchange.diceToExchange !== 0)
        {
            for(var i=0;i<=dicesToExchange.diceToExchange;i++)
            {
                result[dicesToExchange.dicePosition[i]] = Math.floor(Math.random() * 6) + 1;  
            }
            uncheckAll();
        }

    }
    pasteResults(result)
    countRoll(counter)
}

function countRoll()
{   
    if (typeof counter === 'undefined')
    {   
        counter = 1
        document.getElementById("span-counter").innerHTML = "Roll number: " + counter
        counter++;
    }
    else
    {
        document.getElementById("span-counter").innerHTML = "Roll number: " + counter
        counter++;
        if(counter == 4)
        {
            lastRoll();
        }
    }
    return counter;
}

function pasteResults(result)
{
    document.getElementById("span-1").innerHTML = result[0]
    document.getElementById("span-2").innerHTML = result[1]
    document.getElementById("span-3").innerHTML = result[2]
    document.getElementById("span-4").innerHTML = result[3]
    document.getElementById("span-5").innerHTML = result[4];
}

function unhideButtons()
{
    document.getElementById("span-counter").hidden=false
    document.getElementById("form-1").hidden=false
    document.getElementById("span-space").hidden=false
    document.getElementById("button-3").hidden=false
    document.getElementById("button-4").hidden=false
}

function uncheckAll()
{
    let uncheckBox = document.getElementsByTagName("input")
    for (var i=0;i<=uncheckBox.length-1;i++)
    {
        uncheckBox[i].checked=false;
    }
    document.getElementById("button-1").disabled=true
}

function exchangeDices()
{
    let dices = {
        diceToExchange:Number,
        dicePosition:[]
    }
    if(document.getElementById("checkbox-1").checked){dices.dicePosition.push(0);}
    if(document.getElementById("checkbox-2").checked){dices.dicePosition.push(1);}
    if(document.getElementById("checkbox-3").checked){dices.dicePosition.push(2);}
    if(document.getElementById("checkbox-4").checked){dices.dicePosition.push(3);}
    if(document.getElementById("checkbox-5").checked){dices.dicePosition.push(4);}

    dices.diceToExchange = dices.dicePosition.length
    return dices;
}

function lastRoll()
{
    document.getElementById("button-1").hidden=true
    document.getElementById("span-space").hidden=true
    document.getElementById("button-3").disabled=true
    document.getElementById("button-4").disabled=true
}

function checkAll()
{
    let checkBox = document.getElementsByTagName("input")
    for (var i=0;i<=checkBox.length-1;i++)
    {
        checkBox[i].checked=true;
    }
    document.getElementById("button-1").disabled=false
}

function checkIfChecked()
{
    let boolTest = document.getElementsByClassName("check");
    for (var i=0;i<=boolTest.length-1;i++)
    {
        if(boolTest[i].checked)
        {
            document.getElementById("button-1").disabled=false
            {break;}
        }
        else
        {
            document.getElementById("button-1").disabled=true;
        }
    }
}

function openResults()
{
    document.getElementById("div-scoreForm").style.display = "block"
    document.getElementById("button-2").disabled=true;
}

function closeResults()
{
    document.getElementById("div-scoreForm").style.display = "none"
    document.getElementById("button-2").disabled=false;
}


function countPoints()
{
    //for(var i=0;i<=dicesToExchange.diceToExchange;i++)
      //  {
            alert("dzida")
        //}
}