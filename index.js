class product{
	constructor(id, name, price){
		this.id = id;
		this.name = name;
		this.price = price;

	}
	set pdetails(productid, productname, productprice){
		this.id = productid;
		this.name = productname;
		this.price = productprice;
	}
	get pdetails(){
		return (
			this.id,
			this.name,
			this.price
			)

	}

}

class customer {
	constructor(name){
		
		this.name = name;
	}
}

class sale {
	constructor(saleid, salesnumber,grandtotal, discountamount, totalafterdiscount){

		this.saleid = saleid;
		this.salesnumber = salesnumber;
		this.grandtotal = grandtotal;
		this.discountamount = discountamount;
		this.totalafterdiscount = totalafterdiscount;


	}
	set sdetails(salesnumber,grandtotal, discountamount, totalafterdiscount){
		this.salesnumber = salesnumber;
		this.grandtotal = grandtotal;
		this.discountamount = discountamount;
		this.totalafterdiscount = totalafterdiscount;
	}

	get sdetails(salesnumber,grandtotal, discountamount, totalafterdiscount){
		return (
				this.salesnumber,
				this.grandtotal,
				this.discountamount,
				this.totalafterdiscount
			)
	}
}

//function to be fired after the click event 


function detailsdisplay() {

var productname = document.getElementById('itemname').value;
var productid = document.getElementById('itemid').value;
var productprice = document.getElementById('itemprice').value;
var customername = document.getElementById('customername').value;
var salesnumber = document.getElementById('salesnumber').value;
var discountamount = document.getElementById('discountamount').value;
var saleid = document.getElementById('saleid').value;

//if discount determinant statements

if (salesnumber>10 && salesnumber<26) {
	discountamount == 0.1;
}else if( salesnumber>25 && salesnumber<51){
	discountamount == 0.25;
}else if (salesnumber>50) {
	discountamount == 0.5;
}else {
	discountamount == 0;
}


//objects 
productname = new product(productname);
customername = new customer(customername);
saleid = new sale(saleid);


//logic calculations

var grandtotal = salesnumber * productprice ;
var totalafterdiscount = grandtotal - (discountamount * salesnumber);
var totaldiscounts = discountamount * salesnumber;

	
	document.getElementById('div').innerHTML = " The grandtotal =" + grandtotal + " " + "Total discounts ="+ totaldiscounts + " Total after discount="+" " + totalafterdiscount;





}