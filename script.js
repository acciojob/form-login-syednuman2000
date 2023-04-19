function getFormvalue() {
    //Write your code here
	let form = document.getElementById("form1");
	let childList = form.children;
	alert(childList[0].value+" "+childList[2].value);
}
