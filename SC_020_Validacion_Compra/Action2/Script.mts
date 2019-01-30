'Ingresa a la seccion de Historial
Browser("GetBeautyFull").Page("Miembros").WebElement("Historial").Click
Bandera = False

'Valida el Numero de Filas
Filas = Browser("GetBeautyFull").Page("Miembros").WebTable("Fecha").RowCount

'Realiza focus en la tabla
Browser("GetBeautyFull").Page("Miembros").WebTable("Fecha").Click 

'Inicia el recorrido y comparativo de la tabla
For x = 2 To Filas
	Fecha = Browser("GetBeautyFull").Page("Miembros").WebTable("Fecha").GetCellData (x,1)
	If Fecha = DataTable("p_Fecha") Then
		Hora = Browser("GetBeautyFull").Page("Miembros").WebTable("Fecha").GetCellData (x,2)
		If Hora = DataTable("p_Hora") Then
			Bandera = True
			Monto = Browser("GetBeautyFull").Page("Miembros").WebTable("Fecha").GetCellData (x,4)
			If Monto = DataTable("p_Monto") Then
				CapturaImagen micPass,"Validacion de Montos","El Monto del dia:" & Fecha & vbCrLf & "En el Horario:" & Hora & vbCrLf & "Es de:" & Monto
			Else
				CapturaImagen micFail,"Validacion de Montos","El Monto del dia: " & Fecha & vbCrLf & "En el Horario: " & Hora & vbCrLf & "Es de: " & Monto	& vbCrLf & "Monto esperado: " & DataTable("p_Monto")
			End  If
			Exit For
		End If
	End If
Next

If Bandera = False Then
	CapturaImagen micFail,"Validacion de Montos","No existen Registros en la Fecha u Hora Indicada"
End If
