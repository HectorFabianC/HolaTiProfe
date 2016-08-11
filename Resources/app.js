if (Titanium.Platform.osname == 'android') {
	var ventana = Titanium.UI.createWindow({
		backgroundImage : '/images/fondo_chica.png',
		theme: 'materialThemeNoAB',
		layout : 'vertical'
	});
};

if (Titanium.Platform.osname == 'iphone') {
	var ventana = Titanium.UI.createWindow({
		backgroundImage : 'fondo_chica.png',
		layout : 'vertical'
	});
};

/**
 * ------- VISTA SUPERIOR -------
 */
var view_sup = Titanium.UI.createView({
	//backgroundColor : 'red',
	//opacity : 0.0,
	width : Titanium.UI.FILL,
	height : '60%'
});

var view_mes_hora = Titanium.UI.createView({
	//backgroundColor : 'pink',
	//opacity : 0.0,
	width : Titanium.UI.SIZE,
	height : Titanium.UI.SIZE,
	top : '15%',
	layout : 'vertical'
});

var lb_mes = Titanium.UI.createLabel({
	text : 'Ago',
	color : '#FFFFFF',
	font : {
		fontSize : 20
	}
});

var lb_hora = Titanium.UI.createLabel({
	text : '21:30',
	color : '#FFFFFF',
	top : '-15dp',
	font : {
		fontFamily: 'TitilliumWeb-Light',
		fontSize : 45
	}
});

view_mes_hora.add(lb_mes);
view_mes_hora.add(lb_hora);

/**
 * ------- VISTA INFERIOR -------
 */
var view_inf = Titanium.UI.createView({
	//backgroundColor : 'blue',
	//opacity : 0.0,
	width : Titanium.UI.FILL,
	height : '40%',
	layout : 'vertical'
});

var view_dias = Titanium.UI.createView({
	backgroundColor : 'purple',
	opacity : 0.5,
	width : Titanium.UI.FILL,
	height : '25%',
	layout: 'horizontal'
});

var view_lunes = Titanium.UI.createView({	//view lunes
	width:'14.2%',
	height:'100%'
});
var LabelLun = Ti.UI.createLabel({	//label lunes
    color: '#FFFFFF',
    text: 'LUN',
    textAlign: 'center'
});
view_lunes.add(LabelLun);
view_dias.add(view_lunes);

var view_martes = Titanium.UI.createView({	//view martes
	width:'14.2%',
	height:'100%'
});
var LabelMar = Ti.UI.createLabel({	//label martes
    color: '#FFFFFF',
    text: 'MAR',
    textAlign: 'center'
});
view_martes.add(LabelMar);
view_dias.add(view_martes);

var view_miercoles = Titanium.UI.createView({	//view miercoles
	width:'14.2%',
	height:'100%'
});
var LabelMier = Ti.UI.createLabel({	//label miercoles
    color: '#FFFFFF',
    text: 'MIE',
    textAlign: 'center'
});
view_miercoles.add(LabelMier);
view_dias.add(view_miercoles);

var view_jueves = Titanium.UI.createView({	//view jueves
	width:'14.2%',
	height:'100%'
});
var LabelJue = Ti.UI.createLabel({	//label jueves
    color: '#FFFFFF',
    text: 'JUE',
    textAlign: 'center'
});
view_jueves.add(LabelJue);
view_dias.add(view_jueves);

var view_viernes = Titanium.UI.createView({	//view viernes
	width:'14.2%',
	height:'100%'
});
var LabelVie = Ti.UI.createLabel({	//label viernes
    color: '#FFFFFF',
    text: 'VIE',
    textAlign: 'center'
});
view_viernes.add(LabelVie);
view_dias.add(view_viernes);

var view_sabado = Titanium.UI.createView({	//view sabado
	width:'14.2%',
	height:'100%'
});
var LabelSab = Ti.UI.createLabel({	//label sabado
    color: '#FFFFFF',
    text: 'SAB',
    textAlign: 'center'
});
view_sabado.add(LabelSab);
view_dias.add(view_sabado);

var view_domingo = Titanium.UI.createView({	//view domingo
	width:'14.2%',
	height:'100%'
});
var LabelDom = Ti.UI.createLabel({	//label domingo
    color: '#FFFFFF',
    text: 'DOM',
    textAlign: 'center'
});
view_domingo.add(LabelDom);
view_dias.add(view_domingo);


var view_alarma_1 = Titanium.UI.createView({
	//backgroundColor : 'orange',
	//opacity : 0.5,
	width : Titanium.UI.FILL,
	layout:'horizontal',
	height : '25%'
});
view_alarma_1.add(view_domingo);
view_alarma_1.add(view_sabado);

var view_alarma_2 = Titanium.UI.createView({
	//backgroundColor : 'yellow',
	//opacity : 0.5,
	width : Titanium.UI.FILL,
	height : '25%'
});

var view_alarma_3 = Titanium.UI.createView({
	//backgroundColor : 'cyan',
	//opacity : 0.5,
	width : Titanium.UI.FILL,
	height : '25%'
});

view_sup.add(view_mes_hora);
ventana.add(view_sup);

view_inf.add(view_dias);
view_inf.add(view_alarma_1);
view_inf.add(view_alarma_2);
view_inf.add(view_alarma_3);
ventana.add(view_inf);
ventana.open();
