function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell1name").textContent = "Mediter-ranean Avenue";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;Si se posee un servicio, el alquiler es 4 veces la suma de los dados.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;Si se poseen ambos servicios, el alquiler es 10 veces la suma de los dados.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Alquiler<span style="float: right;">$25.</span><br />Si se poseen 2 ferrocarriles<span style="float: right;">50.</span><br />Si se poseen 3<span style="float: right;">100.</span><br />Si se poseen 4<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " pagó $100 por caer en Impuesto de lujo.");
	player[turn].pay(100, 0);

	$("#landed").show().text("Caíste en Impuesto de lujo. Paga $100.");
}

function citytax() {
	addAlert(player[turn].name + " pagó $200 por caer en Impuesto municipal.");
	player[turn].pay(200, 0);

	$("#landed").show().text("Caíste en Impuesto municipal. Paga $200.");
}

var square = [];

square[0] = new Square("GO", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF");
square[1] = new Square("Mediterranean Avenue", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[3] = new Square("Baltic Avenue", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("City Tax", "Pay $200", "#FFFFFF");
square[5] = new Square("Reading Railroad", "$200", "#FFFFFF", 200, 1);
square[6] = new Square("Oriental Avenue", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[8] = new Square("Vermont Avenue", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Connecticut Avenue", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Just Visiting", "", "#FFFFFF");
square[11] = new Square("St. Charles Place", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Electric Company", "$150", "#FFFFFF", 150, 2);
square[13] = new Square("States Avenue", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Virginia Avenue", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Pennsylvania Railroad", "$200", "#FFFFFF", 200, 1);
square[16] = new Square("St. James Place", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[18] = new Square("Tennessee Avenue", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("New York Avenue", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Free Parking", "", "#FFFFFF");
square[21] = new Square("Kentucky Avenue", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[23] = new Square("Indiana Avenue", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Illinois Avenue", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("B&O Railroad", "$200", "#FFFFFF", 200, 1);
square[26] = new Square("Atlantic Avenue", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Ventnor Avenue", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Water Works", "$150", "#FFFFFF", 150, 2);
square[29] = new Square("Marvin Gardens", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect $200.", "#FFFFFF");
square[31] = new Square("Pacific Avenue", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("North Carolina Avenue", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[34] = new Square("Pennsylvania Avenue", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Short Line", "$200", "#FFFFFF", 200, 1);
square[36] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[37] = new Square("Park Place", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("LUXURY TAX", "Pay $100", "#FFFFFF");
square[39] = new Square("Boardwalk", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Sal gratis de la cárcel. Puedes conservar esta tarjeta hasta usarla o venderla.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Ganaste el segundo premio en un concurso de belleza. Cobra $10.", function() { addamount(10, 'Community Chest');});
communityChestCards[2] = new Card("Por venta de acciones recibes $50.", function() { addamount(50, 'Community Chest');});
communityChestCards[3] = new Card("Vence tu seguro de vida. Cobra $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[4] = new Card("Devolución de impuestos. Cobra $20.", function() { addamount(20, 'Community Chest');});
communityChestCards[5] = new Card("Vence tu fondo de vacaciones. Recibe $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[6] = new Card("Heredas $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[7] = new Card("Recibe $25 por honorarios de consultoría.", function() { addamount(25, 'Community Chest');});
communityChestCards[8] = new Card("Paga $100 de gastos hospitalarios.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[9] = new Card("Error bancario a tu favor. Cobra $200.", function() { addamount(200, 'Community Chest');});
communityChestCards[10] = new Card("Paga $50 de colegiatura.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[11] = new Card("Honorarios médicos. Paga $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("Es tu cumpleaños. Cobra $10 de cada jugador.", function() { collectfromeachplayer(10, 'Community Chest');});
communityChestCards[13] = new Card("Avanza a \"SALIDA\" (cobra $200).", function() { advance(0);});
communityChestCards[14] = new Card("Se te cobran reparaciones de calles. $40 por casa. $115 por hotel.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Ve a la cárcel. Ve directamente a la cárcel. No pases por \"SALIDA\". No cobres $200.", function() { gotojail();});


chanceCards[0] = new Card("SAL GRATIS DE LA CÁRCEL. Puedes conservar esta tarjeta hasta usarla o intercambiarla.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Haz reparaciones generales en todas tus propiedades. Paga $25 por casa y $100 por hotel.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Multa por exceso de velocidad: $15.", function() { subtractamount(15, 'Chance');});
chanceCards[3] = new Card("Has sido elegido presidente de la junta. Paga $50 a cada jugador.", function() { payeachplayer(50, 'Chance');});
chanceCards[4] = new Card("Retrocede tres casillas.", function() { gobackthreespaces();});
chanceCards[5] = new Card("AVANZA AL SERVICIO MÁS CERCANO. Si no tiene dueño, puedes comprárselo al banco. Si tiene dueño, lanza los dados y paga al propietario diez veces la suma obtenida.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("El banco te paga $50 de dividendos.", function() { addamount(50, 'Chance');});
chanceCards[7] = new Card("AVANZA AL FERROCARRIL MÁS CERCANO. Si no tiene dueño, puedes comprárselo al banco. Si tiene dueño, paga al propietario el doble del alquiler correspondiente.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Paga impuesto de pobreza de $15.", function() { subtractamount(15, 'Chance');});
chanceCards[9] = new Card("Viaja al Ferrocarril Reading. Si pasas por \"SALIDA\", cobra $200.", function() { advance(5);});
chanceCards[10] = new Card("AVANZA a Boardwalk.", function() { advance(39);});
chanceCards[11] = new Card("AVANZA a Illinois Avenue. Si pasas por \"SALIDA\", cobra $200.", function() { advance(24);});
chanceCards[12] = new Card("Vence tu préstamo de construcción. Cobra $150.", function() { addamount(150, 'Chance');});
chanceCards[13] = new Card("AVANZA AL FERROCARRIL MÁS CERCANO. Si no tiene dueño, puedes comprárselo al banco. Si tiene dueño, paga al propietario el doble del alquiler correspondiente.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("AVANZA a St. Charles Place. Si pasas por \"SALIDA\", cobra $200.", function() { advance(11);});
chanceCards[15] = new Card("Ve a la cárcel. Ve directamente a la cárcel. No pases por \"SALIDA\". No cobres $200.", function() { gotojail();});
