var matricPercentage = prompt("Enter your Matriculation percentage:");
        matricPercentage = parseFloat(matricPercentage); 

        
        var entryTestPercentage = prompt("Enter your Entry Test percentage:");
        entryTestPercentage = parseFloat(entryTestPercentage); 

      
        var averagePercentage = (matricPercentage + entryTestPercentage) / 2;

      
        if (averagePercentage < 70) {
            alert("You are not eligible. Your average percentage is " + averagePercentage + "%.");
        } else {
            alert("Congratulations! You are eligible. Your average percentage is " + averagePercentage + "%.");
        }