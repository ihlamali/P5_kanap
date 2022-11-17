const orderId = getCommande()
displayCommande(orderId)


function getCommande(){
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    console.log(queryString)
    const orderId = urlParams.get("orderId")
    console.log(orderId)
    return orderId
}
function displayCommande(orderId){
    const orderIdElement=document.getElementById("orderId")
    orderIdElement.textContent= orderId
    
}
