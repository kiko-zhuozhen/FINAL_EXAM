document.addEventListener('DOMContentLoaded', function(){
    loadXMLDoc();
})

function loadXMLDoc() {
    const url='https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496';
    //const url = "./xml/sample-1.xml";

    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let xmlDoc = this.responseXML;
            printData(xmlDoc);
        }
    }

    xmlhttp.open("GET", url);
    xmlhttp.send();
};

function printData(xmlDoc){
    let objectData = xmlDoc.querySelectorAll("spatialUnit");

    //这里的Element就是objectData[0] 
    objectData.forEach((element, index) => {
        //list
        let listValue = document.createElement('li');
        document.getElementById('myList').appendChild(listValue);
        listValue.innerHTML = element.children[0].children[0].innerHTML;

        //table
        let newRow = document.createElement('tr');
        newRow.id = 'row' + index;
        document.getElementById('myTableBody').appendChild(newRow);

        //column in table
        let newCol1 = document.createElement('td');
        newCol1.innerHTML = element.children[0].children[0].innerHTML;
        document.getElementById('row'+index).appendChild(newCol1);

        //repeat column
        let newCol2 = document.createElement('td');
        newCol2.innerHTML = element.children[4].children[6].children[1].innerHTML;
        document.getElementById('row'+index).appendChild(newCol2);  
    })
};