var xhr = new XMLHttpRequest();
xhr.open('GET', "http://54.39.188.42/", false);
xhr.send();

if (xhr.status != 200) {
	alert( xhr.status + ': ' + xhr.statusText );

} else {
	const objects = JSON.parse(atob(xhr.responseText)); 
	
	for (var i = 0; i < 5; i++) {
		createCardElementNode(objects[i]);	
	}

}		

function createHeaderNode(jsonData) {
	const header = document.createElement("div");
	header.classList.add("header");

	const jsonObjects = ['id','title','sku'];

	const titleList = document.createElement("ul");
	for (var i = 0; i < 3; i++) {
		var listItem = document.createElement("li");
		if (i == 0) {
			listItem.innerHTML = "#" + jsonData[jsonObjects[i]];
		} else {
			listItem.innerHTML = jsonData[jsonObjects[i]];
		}
		titleList.appendChild(listItem);
	}

	header.appendChild(titleList);
	return header;
}

function createPictureNode(jsonData) {
	//image (там будет урла)
	const picture = document.createElement("div");
	picture.classList.add("picture");

	const img = document.createElement("div");
	img.classList.add("mock");
	img.innerHTML = "<img src=" + jsonData['image'] + ">";

	picture.appendChild(img);
	return picture;
}

function createDescriptionNode(jsonData) {
	//options[0]
	// 	gemstone_color
	// 	metal_color
	//	metal_type
	//	stone_shape
	const jsonObjects = [
		{	
			label: "Metal type: ",
			value: 'gemstone_color'
		},
		{
			label: "Metal color: ",
			value: 'metal_color'
		},
		{
			label: "Stone shape: ",
			value: 'metal_type'
		},
		{
			label: "Gemstone color: ",
			value:'stone_shape'
		}
	];

	const description = document.createElement("div");
	description.classList.add("description");

	const productOptions = document.createElement("b");
	productOptions.classList.add("uppercase");
	productOptions.innerHTML = "product options:";

	const titleList = document.createElement("ul");
	titleList.classList.add("details");

	for (var i = 0; i < 4; i++) {
		var listItem = document.createElement("li");
		listItem.innerHTML = jsonObjects[i].label + jsonData.options[0][jsonObjects[i].value];
		titleList.appendChild(listItem);
	}

	description.appendChild(productOptions);
	description.appendChild(titleList);
	return description;
}

function createPriceNode(jsonData) {
	//price
	//currency
	const price = document.createElement("div");
	price.classList.add("price");

	const fatPrice = document.createElement("b");
	fatPrice.innerHTML = parseFloat(jsonData['price']).toPrecision(5) + jsonData['currency'];

	price.appendChild(fatPrice);
	return price;
}

function createCardElementNode(jsonObject) {
	const card = document.createElement("div");
	card.classList.add("card");

	card.appendChild(createHeaderNode(jsonObject));
	card.appendChild(createPictureNode(jsonObject));
	card.appendChild(createDescriptionNode(jsonObject));
	card.appendChild(createPriceNode(jsonObject));
	document.body.appendChild(card);
}