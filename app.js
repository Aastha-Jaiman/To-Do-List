var inpbox = document.getElementById("inpbox");
var itembox = document.getElementById("item-box");


inpbox.addEventListener(
    "keyup",
    function(e){
        if(e.key == "Enter")
            addItem();
    }
)

function addItem(){
    //  var item =inpbox.value;
    if(inpbox.value != ""){
        var li = document.createElement("li");
        li.innerText =  inpbox.value;
        li.innerHTML = ` ${inpbox.value} <span>X</span>` ;

        // console.log(li.children[0]);
        li.children[0].addEventListener(
            "click",
            function (){
                li.remove();
            }
        )
        

        //dynamic event binding
        li.addEventListener(
            "click",    //event
            function (){        //callback function
                li.classList.toggle("done")
            }
        )

        li.addEventListener(
            "contextmenu",  //rightclick
            function (e){
                e.preventDefault();  //prevent default  (right click close)
                li.remove();
            }
        )

        inpbox.value = "";
        inpbox.focus();
        itembox.append(li);  //append - last , prepend - first
    } 
}