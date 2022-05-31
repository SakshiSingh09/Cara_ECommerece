$(".menu").click(function(){
  $("#sidebar").toggleClass("show");
})

$(".card").click(function(){
  const id = $(this).attr("id");
  const card = document.getElementById(id);
  const image = card.getElementsByTagName("img");
  const source = image[0].getAttribute("src");
  const priceTag = card.getElementsByClassName("price");
  const price = priceTag[0].innerHTML;
  sessionStorage.setItem("src",source);
  sessionStorage.setItem("price",price);
});
let src = sessionStorage.getItem("src");
$("#sproductImg").attr("src",src);
if(document.getElementById("sproduct-price")!==null){
  document.getElementById("sproduct-price").innerHTML = sessionStorage.getItem("price")
};

$(".expand").click(function(){
  href = $(this).attr("href");
  $(this).toggleClass("hide");
  $(href +" .lastChild").toggleClass("show");
  $(href+" .less").click(()=>{
    $(href +" .lastChild").toggleClass("show");
    $(href+" .expand").toggleClass("hide");
  })
});

$("a[href='#sidebar']").click(function(){
  $("#sidebar").toggleClass("show");
})


$("#tableBody input").on("input",function(){
  let quant = $(this).val();
  let id = $(this).attr("class");
  let tr = document.getElementById(id);
  let priceTag = tr.getElementsByClassName("price");
  let price = priceTag[0].innerHTML;
  let subtotal = quant * price.substring(1);
  tr.getElementsByClassName("subtotal")[0].innerHTML = "$"+subtotal;
  trList = $("#tableBody tr");
  let sum = 0;
  for(let i=0;i<trList.length;i++){
    let priceTags = trList[i].getElementsByClassName("subtotal");
    let prices = priceTags[0].innerHTML;
    sum = sum + Number(prices.substring(1));
  }
  $("#cartSubtotal")[0].innerHTML = sum;
  $("#total")[0].innerHTML = sum;
})
