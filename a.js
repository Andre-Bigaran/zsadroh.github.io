var rawFile = new XMLHttpRequest();
    rawFile.open("GET","https://raw.githubusercontent.com/The0And/the0and.github.io/master/a.txt", false);
    rawFile.onreadystatechange = function ()
    {
        
            
                var allText = rawFile.responseText;
                document.write(allText);
            
        
    }
    rawFile.send(null);
