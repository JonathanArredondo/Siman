'Se abre el navegador
SystemUtil.Run DataTable("p_explorador") & ".exe", "https://simantestlanding.puntosleal.com/"
Wait 5
'Selecciona el boton Inciar Sesion
Browser("GetBeautyFull").Page("Pagina Principal").Link("INICIA SESION").Click @@ script infofile_;_ZIP::ssf2.xml_;_

'Ingresa Usuario y OCntraseña
Browser("GetBeautyFull").Page("Login").WebEdit("Usuario").Set "00998801"
Browser("GetBeautyFull").Page("Login").WebEdit("Password").Set "Test123*"
Browser("GetBeautyFull").Page("Login").WebElement("Iniciar Sesión").Click
