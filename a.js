var rawFile = new XMLHttpRequest();
    rawFile.open("GET","a.txt", false);
    rawFile.onreadystatechange = function ()
    {
        
            
                var allText = rawFile.responseText;
                document.write(allText);
            
        
    }
    rawFile.send(null);