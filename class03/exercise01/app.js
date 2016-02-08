<!doctype html>

<head>
</head>

<body>
  <h1>"javascript practice"</h1>
  <script>
  //1
  function farToCel(fTemp) {
        //code
        var cTemp = 5/9 * (fTemp - 32);
        cTemp = Math.floor(cTemp);
    console.log(cTemp);
    if (cTemp <= 10) {
        //code
        console.log("It is cold")
    }
    else if (cTemp <= 25) {
        console.log ("It is fair");
    }
    else {
        console.log("It is hot");
    }
        
    }
    
    farToCel (20);
    
   //2
   var exArray = [10, 20, 100, 2, 5];
    function sum(arr) {
        //code
        var length = arr.length;
        var actualSum = 0;
        for (var i in arr) {
            actualSum += arr[i];
        
        }
        return actualSum;
    }
    var total = sum(exArray);
    console.log(total);
    
    //3
    var newArray = [10, 20, 100, 2, 5];
    function findLarge(arr) {
        //code
        var largest = arr[0];
        for (var i in arr) {
            var currentNumber = arr[i];
            if (currentNumber > largest) {
                largest = currentNumber
            }
        }
        return currentNumber
    }
    var greatest = findLarge(newArray);
    console.log(greatest);
    
    
    //4
    var myString = "Lets go to school today!!!"
    
    function charFreq(phrase) {
        //code
        var answer = {};
        for (var i = 0; i < phrase.length; i++) {
            var letter = phrase.charAt(i);
            
            if (answer[letter] === undefined) {
                answer[letter] === 0
            }
            answer[letter]++;
        }
        return answer
        
    
    }
    var frequency = charFreq(myString)
    
    for(var j in frequency){
console.log(j + " : " + frequency[j]);
    }


  </script>
  
</body>
</html>