    

         document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
         function myFunction() {
            let input = Number(document.getElementById('input').value);
            let input2 = Number(document.getElementById("input2").value);
            let result = "";
            let i = 1;
            let exponenet = 1;
            do{
                exponenet *= input;
                console.log(exponenet);
                i++;
            } while(i<=input2)
           result = `Your Entered Base ${input} and Power ${input2} and Their Exponent Value is ${exponenet}`
            document.getElementById('output').style.display = "flex";
            document.getElementById("output").style.background = "black";
            document.getElementById('output').innerHTML = result;
}   
   