<html>
    <script>
        function addition(){
            if(txt1.value==""){
                alert("First number is missing")
            }
            else{
                if(txt2.value==""){
                    alert("You have missed the second number")
                }
                else{
                    let A=txt1.value
                    let B=txt2.value
                    let C=parseInt(A)+parseInt(B)
                    txt3.value=C
                }
            }
        }
    </script>

    Number 1:<input id="txt1" type="text">
    <br>
    Number 2:<input id="txt2" type="text">
    <br>
    
    <input
    id="plus"
    type="button"
    value="+"
    onClick="add()"
    >
    <br>
    <font color="red">
        Sum:
    </font>
    <input 
    id="txt3" 
    type="text" 
    color= "blue"
    
    >
    <br>
</html>