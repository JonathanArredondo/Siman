'Se abre el navegador
SystemUtil.Run "firefox.exe", "https://simantestlanding.puntosleal.com/"
Wait 9
'Se presiona el boton Aqui
Browser("GetBeautyFull").Page("Pagina Principal").Link("AQUÍ").Click


Browser("GetBeautyFull").Page("Registro").WebEdit("Nombre").Set DataTable("p_Nombre")
Browser("GetBeautyFull").Page("Registro").WebEdit("Apellido").Set DataTable("p_Apellido")
Browser("GetBeautyFull").Page("Registro").WebEdit("Email").Set DataTable("p_Email")
Browser("GetBeautyFull").Page("Registro").WebList("Pais").Select DataTable ("p_Pais")
Wait 1
Browser("GetBeautyFull").Page("Registro").WebList("Ciudad").Select DataTable ("p_Ciudad")
Browser("GetBeautyFull").Page("Registro").WebEdit("Telefono").Set DataTable ("p_Telefono")
Browser("GetBeautyFull").Page("Registro").WebEdit("Fecha").Click 
Browser("GetBeautyFull").Page("Registro").WebEdit("Year").Set DataTable("p_FechaA")
For x = 1 To DataTable("p_Mes") - 1
	Browser("GetBeautyFull").Page("Registro").WebElement("Mes+").Click
Next

Browser("GetBeautyFull").Page("Registro").WebElement("Dia").Click
Browser("GetBeautyFull").Page("Registro").WebElement("Hombre").Click @@ script infofile_;_ZIP::ssf19.xml_;_

Browser("GetBeautyFull").Page("Registro").WebEdit("NumeroIdentificacion").Set "035302885" @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("GetBeautyFull").Page("Registro").WebElement("Aceptar terminos y condiciones").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("GetBeautyFull").Page("Registro").WebButton("Continuar").Click @@ script infofile_;_ZIP::ssf22.xml_;_

Dim myDeviceReplay
Set myDeviceReplay = CreateObject("Mercury.DeviceReplay")
myDeviceReplay.PressKey 28 @@ hightlight id_;_593594_;_script infofile_;_ZIP::ssf24.xml_;_

If Browser("GetBeautyFull").Page("Registro").WebElement("Usuario existente").Exist(4) Then
	CapturaImagen micPass,"Validacion de Mensjae","Se visualiza el mensaje: " & DataTable("p_Mensaje")
Else
	CapturaImagen micFail,"Validacion de Mensjae","No Se visualiza el mensaje: " & DataTable("p_Mensaje") 
End  If

Browser("GetBeautyFull").Close 
