package mx.com.actinver.portal.operations;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.ResourceBundle;
import java.util.TreeMap;

import mx.com.actinver.portal.vo.ActiveNeto;
import mx.com.actinver.portal.vo.EmisoraPeso;
import mx.com.actinver.portal.vo.Graphics;
import mx.com.actinver.portal.vo.RetornoSmrt;
import mx.com.actinver.portal.vo.TracsTopTen;

import org.apache.poi.util.SystemOutLogger;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PortalOperMap {

	private static final Logger logger = LoggerFactory.getLogger(PortalOperMap.class);
	
	public static TreeMap<String, Double> readFileXlsPortal(){
		TreeMap<String, Double> chartTreeMap = new TreeMap<String, Double>();
		try {
			ResourceBundle rb = ResourceBundle.getBundle("portalTrac");
			String uriS = rb.getString("SERVER_FILEXLS_TRACK");
			InputStream inStream = new URL(uriS).openStream();
			XSSFWorkbook workBook = new XSSFWorkbook(inStream);
			XSSFSheet workSheet = workBook.getSheet(rb.getString("FILEXLS_SHEET"));
			String a1Val = "";
			double b1Val = 0;
			for (int i = 1; i < 8; i++) {
				XSSFRow row1 = workSheet.getRow(i);
				XSSFCell cellA1 = row1.getCell(9);
				a1Val = cellA1.getStringCellValue();
				XSSFCell cellB1 = row1.getCell(10);
				b1Val = cellB1.getNumericCellValue();
				chartTreeMap.put( a1Val, (b1Val * 100) );			
			}
			inStream.close();
		} catch (IOException e) {
			logger.info("[Operation]	::	"+e.getMessage()+"	-	[IOException]");
		}
		return chartTreeMap;
	}
	
	public static List<TracsTopTen> readFileXlsPortalTopTen(){
		TracsTopTen objTopTen = new TracsTopTen();
		List<TracsTopTen> ListobjTopTen = new ArrayList<TracsTopTen>();
		try {
			ResourceBundle rb = ResourceBundle.getBundle("portalTrac");
			String uriS = rb.getString("SERVER_FILEXLS_TRACK");
			InputStream inStream = new URL(uriS).openStream();
			XSSFWorkbook workBook = new XSSFWorkbook(inStream);
			XSSFSheet workSheet = workBook.getSheet(rb.getString("FILEXLS_SHEET"));
			for (int i = 3; i < 13; i++) {
				objTopTen = new TracsTopTen();
				XSSFRow row1 = workSheet.getRow(i);
				XSSFCell cellA1 = row1.getCell(5);
				objTopTen.setEmisora(cellA1.getStringCellValue());				
				XSSFCell cellB1 = row1.getCell(6);
				objTopTen.setRazonsocial(cellB1.getStringCellValue());
				XSSFCell cellC1 = row1.getCell(7);
				double primOper = cellC1.getNumericCellValue() * 100;
				String roundPercent = String.format("%.2f", primOper);
				objTopTen.setPorcenttrac(roundPercent);
				ListobjTopTen.add(objTopTen);
			}
			inStream.close();
		} catch (IOException e) {
			logger.info("[Operation]	::	"+e.getMessage()+"	-	[Method]");
		}
		return ListobjTopTen;
	}
	
	public static List<ActiveNeto> readFileXlsPortalActiveNeto(){
		ActiveNeto objActiveNeto = new ActiveNeto();
		List<ActiveNeto> ListobjActiveNeto = new ArrayList<ActiveNeto>();
		try {
			ResourceBundle rb = ResourceBundle.getBundle("portalTrac");
			String uriS = rb.getString("SERVER_FILEXLS_TRACK");
			InputStream inStream = new URL(uriS).openStream();
			XSSFWorkbook workBook = new XSSFWorkbook(inStream);
			XSSFSheet workSheet = workBook.getSheet("Activos Netos");
			DecimalFormat formatter = new DecimalFormat("#,###.00");
			String value = "";
			String dateS = "";
			String dateSa = "";
			
			for (int i = workSheet.getLastRowNum(); i < workSheet.getLastRowNum()+1; i++) {
				objActiveNeto = new ActiveNeto();
				XSSFRow row1 = workSheet.getRow(i);
				//Angel				
				objActiveNeto.setEmisora("ANGEL 10");
				XSSFCell cellA1 = row1.getCell(0);
				dateS = new SimpleDateFormat("dd-MM-yyyy").format(cellA1.getDateCellValue());
				objActiveNeto.setFecha(dateS);
				XSSFCell cellB1 = row1.getCell(1);
				value = formatter.format(cellB1.getNumericCellValue());				
				objActiveNeto.setValor(value);
				ListobjActiveNeto.add(objActiveNeto);
				//Diablo				
				objActiveNeto = new ActiveNeto();
				objActiveNeto.setEmisora("DIABLOI 10");
				XSSFCell cellA2 = row1.getCell(0);
				dateS = new SimpleDateFormat("dd-MM-yyyy").format(cellA2.getDateCellValue());
				objActiveNeto.setFecha(dateS);
				XSSFCell cellB2 = row1.getCell(2);
				value = formatter.format(cellB2.getNumericCellValue());	
				objActiveNeto.setValor(value);	
				ListobjActiveNeto.add(objActiveNeto);
				//Smartrac		
				objActiveNeto = new ActiveNeto();
				objActiveNeto.setEmisora("SMARTRC 14");
				XSSFCell cellA3 = row1.getCell(0);
				dateS = new SimpleDateFormat("dd-MM-yyyy").format(cellA3.getDateCellValue());
				objActiveNeto.setFecha(dateS);
				XSSFCell cellB3 = row1.getCell(3);
				value = formatter.format(cellB3.getNumericCellValue());	
				objActiveNeto.setValor(value);	
				ListobjActiveNeto.add(objActiveNeto);
			}
			inStream.close();
		} catch (IOException e) {
			logger.info("[Operation]	::	"+e.getMessage()+"	-	[Method]");
		}
		return ListobjActiveNeto;
	}
	
	public static List<Graphics> readFileXlsPortalGraficaSmartrc(){
		Graphics objGraphics = new Graphics();
		List<Graphics> ListobjGraphics = new ArrayList<Graphics>();
		try {
			ResourceBundle rb = ResourceBundle.getBundle("portalTrac");
			String uriS = rb.getString("SERVER_FILEXLS_TRACK");
			InputStream inStream = new URL(uriS).openStream();
			XSSFWorkbook workBook = new XSSFWorkbook(inStream);
			XSSFSheet workSheet = workBook.getSheet("Smart vs BO");
			String dateS = "";
			int value = workSheet.getLastRowNum();
			for (int i = 1762; i < value+1; i++) {
				objGraphics = new Graphics();
				XSSFRow row1 = workSheet.getRow(i);
				XSSFRow row2 = workSheet.getRow(1760);		
				if (row1.getCell(6)!=null){
					XSSFCell cellA1 = row1.getCell(6);
					dateS = new SimpleDateFormat("dd/MMM/yyyy").format(cellA1.getDateCellValue());					
					objGraphics.setFecha(dateS);
					XSSFCell cellB1 = row1.getCell(8);		
					objGraphics.setValorX2(cellB1.getNumericCellValue());
					XSSFCell cellc1 = row1.getCell(10);		
					objGraphics.setValor(cellc1.getNumericCellValue());
					ListobjGraphics.add(objGraphics);		
				}
			}
			inStream.close();
		} catch (IOException e) {
			logger.info("[Operation]	::	readFileXlsPortalGraficaSmartrc	-	[Method]");
		}
		return ListobjGraphics;
	}	
	
	public static List<Graphics> readFileXlsPortalGraficaAngel(){
		Graphics objGraphics = new Graphics();
		List<Graphics> ListobjGraphics = new ArrayList<Graphics>();
		try {
			ResourceBundle rb = ResourceBundle.getBundle("portalTrac");
			String uriS = rb.getString("SERVER_FILEXLS_TRACK");
			InputStream inStream = new URL(uriS).openStream();
			XSSFWorkbook workBook = new XSSFWorkbook(inStream);
			XSSFSheet workSheet = workBook.getSheet("ANGEL");
			String dateS = "";
			int value = workSheet.getLastRowNum();
			for (int i = 2; i < value+1; i++) {
				objGraphics = new Graphics();
				XSSFRow row1 = workSheet.getRow(i);
				if (row1.getCell(0)!=null & row1.getCell(2)!=null & row1.getCell(6)!=null & row1.getCell(8)!=null){
					XSSFCell cellA1 = row1.getCell(0);
					dateS = new SimpleDateFormat("dd/MM/yyyy").format(cellA1.getDateCellValue());					
					objGraphics.setFecha(dateS);
					//Diablo
					XSSFCell cellB1 = row1.getCell(2);		
					objGraphics.setValTrac(cellB1.getNumericCellValue());
					//IPC
					XSSFCell cellC1 = row1.getCell(6);		
					objGraphics.setValor(cellC1.getNumericCellValue());
					//IPC X2
					XSSFCell cellD1 = row1.getCell(8);		
					objGraphics.setValorX2(cellD1.getNumericCellValue());
					ListobjGraphics.add(objGraphics);	
				}
			}
			inStream.close();
		} catch (IOException e) {
			logger.info("[Operation]	::	readFileXlsPortalGraficaAngel	-	[Method]");
		}
		return ListobjGraphics;
	}		
	
	public static List<Graphics> readFileXlsPortalGraficaDiablo(){
		Graphics objGraphics = new Graphics();
		List<Graphics> ListobjGraphics = new ArrayList<Graphics>();
		try {
			ResourceBundle rb = ResourceBundle.getBundle("portalTrac");
			String uriS = rb.getString("SERVER_FILEXLS_TRACK");
			InputStream inStream = new URL(uriS).openStream();
			XSSFWorkbook workBook = new XSSFWorkbook(inStream);
			XSSFSheet workSheet = workBook.getSheet("DIABLO");
			String dateS = "";
			int value = workSheet.getLastRowNum();
			for (int i = 2; i < value+1; i++) {
				objGraphics = new Graphics();
				XSSFRow row1 = workSheet.getRow(i);
				if (row1.getCell(4)!=null & row1.getCell(6)!=null & row1.getCell(8)!=null){
					XSSFCell cellA1 = row1.getCell(4);
					dateS = new SimpleDateFormat("dd/MM/yyyy").format(cellA1.getDateCellValue());					
					objGraphics.setFecha(dateS);					
					//tRAC			
					XSSFCell cellB1 = row1.getCell(2);		
					objGraphics.setValTrac(cellB1.getNumericCellValue());
					//IPC
					XSSFCell cellC1 = row1.getCell(6);		
					objGraphics.setValor(cellC1.getNumericCellValue());
					//IPC INVERSO
					XSSFCell cellD1 = row1.getCell(8);		
					objGraphics.setValorX2(cellD1.getNumericCellValue());					
					ListobjGraphics.add(objGraphics);
				}
			}
			inStream.close();
		} catch (IOException e) {
			logger.info("[Operation]	::	readFileXlsPortalGraficaDiablo	-	[Method]");
		}
		return ListobjGraphics;
	}		
	
	public static List<EmisoraPeso> readFileXlsPortalETF(){
		EmisoraPeso objEmisoraPeso = new EmisoraPeso();
		List<EmisoraPeso> ListobjEmisoraPeso = new ArrayList<EmisoraPeso>();
		try {
			ResourceBundle rb = ResourceBundle.getBundle("portalTrac");
			String uriS = rb.getString("SERVER_FILEXLS_TRACK");
			InputStream inStream = new URL(uriS).openStream();
			XSSFWorkbook workBook = new XSSFWorkbook(inStream);
			XSSFSheet workSheet = workBook.getSheet("Muestra Smart Pie");
			for (int i = 2; i < 32; i++) {
				objEmisoraPeso = new EmisoraPeso();
				XSSFRow row1 = workSheet.getRow(i);
				XSSFRow row2 = workSheet.getRow(0);
				if (row1.getCell(1)!=null & row1.getCell(2)!=null & row1.getCell(3)!=null){
					NumberFormat formatter = new DecimalFormat("#0");
					NumberFormat formatter1 = new DecimalFormat("#0.00");
					XSSFCell cellQ1 = row2.getCell(1);					
					objEmisoraPeso.setFecha(cellQ1.getStringCellValue());					
					XSSFCell cellA1 = row1.getCell(1);
					objEmisoraPeso.setValor(formatter.format(cellA1.getNumericCellValue()));				
					XSSFCell cellB1 = row1.getCell(2);
					objEmisoraPeso.setEmisora(cellB1.getStringCellValue());
					XSSFCell cellC1 = row1.getCell(3);
					objEmisoraPeso.setPeso(formatter1.format(cellC1.getNumericCellValue()*100));				
					ListobjEmisoraPeso.add(objEmisoraPeso);
				}
			}
			inStream.close();
		} catch (IOException e) {
			logger.info("[Operation]	::	readFileXlsPortalETF	-	[Method]");
		}
		return ListobjEmisoraPeso;			
	}
	
	public static List<RetornoSmrt> readFileXlsPortalSmartrcRetorno(){
		RetornoSmrt objRetornoSmrt = new RetornoSmrt();
		List<RetornoSmrt> ListobjSmrt = new ArrayList<RetornoSmrt>();
		try {
			ResourceBundle rb = ResourceBundle.getBundle("portalTrac");
			String uriS = rb.getString("SERVER_FILEXLS_TRACK");
			InputStream inStream = new URL(uriS).openStream();
			XSSFWorkbook workBook = new XSSFWorkbook(inStream);
			XSSFSheet workSheet = workBook.getSheet("DesempeñoSmart");
			NumberFormat formatter1 = new DecimalFormat("#0.00");
			for (int i = 2; i < 5; i++) {
				objRetornoSmrt = new RetornoSmrt();
				XSSFRow row1 = workSheet.getRow(i);
				XSSFRow row2 = workSheet.getRow(1);
				if (row1.getCell(0)!=null){
					XSSFCell cellff = row2.getCell(0);		
					objRetornoSmrt.setFecha(cellff.getStringCellValue());	
					//Titulo
					XSSFCell cellA = row1.getCell(0);		
					objRetornoSmrt.setTitulo(cellA.getStringCellValue());				
					//Indice
					XSSFCell cellB = row1.getCell(1);		
					objRetornoSmrt.setIndice(cellB.getStringCellValue());						
					//Inicio
					XSSFCell cellA1 = row1.getCell(3);	
					objRetornoSmrt.setInicio(formatter1.format(cellA1.getNumericCellValue()*100));
					//YTD
					XSSFCell cellB1 = row1.getCell(4);		
					objRetornoSmrt.setYtd(formatter1.format(cellB1.getNumericCellValue()*100));				
					//Mes anterior
					XSSFCell cellC1 = row1.getCell(5);		
					objRetornoSmrt.setMesanterior(formatter1.format(cellC1.getNumericCellValue()*100));		
					//1 Y
					XSSFCell cellD1 = row1.getCell(8);		
					objRetornoSmrt.setOney(formatter1.format(cellD1.getNumericCellValue()*100));						
					ListobjSmrt.add(objRetornoSmrt);		
				}
			}
			inStream.close();
		} catch (IOException e) {
			logger.info("[Operation]	::	readFileXlsPortalSmartrcRetorno	-	[Method]");
		}
		return ListobjSmrt;
	}		
	
	public static List<RetornoSmrt> readFileXlsPortalAYDRetorno(){
		RetornoSmrt objRetornoSmrt = new RetornoSmrt();
		List<RetornoSmrt> ListobjSmrt = new ArrayList<RetornoSmrt>();
		try {
			ResourceBundle rb = ResourceBundle.getBundle("portalTrac");
			String uriS = rb.getString("SERVER_FILEXLS_TRACK");
			InputStream inStream = new URL(uriS).openStream();
			XSSFWorkbook workBook = new XSSFWorkbook(inStream);
			XSSFSheet workSheet = workBook.getSheet("Retorno AyD");
			String dateS="";
			NumberFormat formatter1 = new DecimalFormat("#0.00"); 
			for (int i = 2; i < 6; i++) {
				objRetornoSmrt = new RetornoSmrt();
				XSSFRow row1 = workSheet.getRow(i);
				XSSFRow row2 = workSheet.getRow(8);
				if (row1 !=null){
					if(row1.getCell(0)!=null & row1.getCell(1)!=null & row1.getCell(5)!=null & row1.getCell(6)!=null & row1.getCell(7)!=null){
						//Titulo
						XSSFCell cellA1 = row1.getCell(0);		
						objRetornoSmrt.setTitulo(cellA1.getStringCellValue());
						//Indice
						XSSFCell cellB1 = row1.getCell(1);		
						objRetornoSmrt.setIndice(cellB1.getStringCellValue());
						//Cambio porcentual
						XSSFCell cellG1 = row1.getCell(3);		
						objRetornoSmrt.setCambioPorc(formatter1.format(cellG1.getNumericCellValue()*100));						
						//Acumulado al mes
						XSSFCell cellC1 = row1.getCell(5);		
						objRetornoSmrt.setInicio(formatter1.format(cellC1.getNumericCellValue()*100));
						//60 dias
						XSSFCell cellD1 = row1.getCell(6);		
						objRetornoSmrt.setYtd(formatter1.format(cellD1.getNumericCellValue()*100));
						//90 dias
						XSSFCell cellE1 = row1.getCell(7);		
						objRetornoSmrt.setMesanterior(formatter1.format(cellE1.getNumericCellValue()*100));
						//Titulo
						XSSFCell cellF1 = row2.getCell(0);
						objRetornoSmrt.setFecha(cellF1.getStringCellValue());
						ListobjSmrt.add(objRetornoSmrt);
					}
				}
			}
			inStream.close();
		} catch (IOException e) {
			logger.info("[Operation]	::	ListobjGraphics	-	[Method]");
		}
		return ListobjSmrt;
	}		
	
	public static List<RetornoSmrt> readFileXlsPortalDRetorno(){
		RetornoSmrt objRetornoSmrt = new RetornoSmrt();
		List<RetornoSmrt> ListobjSmrt = new ArrayList<RetornoSmrt>();
		try {
			ResourceBundle rb = ResourceBundle.getBundle("portalTrac");
			String uriS = rb.getString("SERVER_FILEXLS_TRACK");
			InputStream inStream = new URL(uriS).openStream();
			XSSFWorkbook workBook = new XSSFWorkbook(inStream);
			XSSFSheet workSheet = workBook.getSheet("Retorno AyD");
			String dateS="";
			NumberFormat formatter1 = new DecimalFormat("#0.00"); 
			for (int i = 9; i < 13; i++) {
				objRetornoSmrt = new RetornoSmrt();
				XSSFRow row1 = workSheet.getRow(i);
				XSSFRow row2 = workSheet.getRow(8);
				if (row1 !=null){
					if(row1.getCell(0)!=null & row1.getCell(1)!=null & row1.getCell(5)!=null & row1.getCell(6)!=null & row1.getCell(7)!=null){
						//Titulo
						XSSFCell cellA1 = row1.getCell(0);		
						objRetornoSmrt.setTitulo(cellA1.getStringCellValue());				
						//Indice
						XSSFCell cellB1 = row1.getCell(1);		
						objRetornoSmrt.setIndice(cellB1.getStringCellValue());
						//Cambio porcentual
						XSSFCell cellG1 = row1.getCell(3);		
						objRetornoSmrt.setCambioPorc(formatter1.format(cellG1.getNumericCellValue()*100));							
						//Acumulado al mes
						XSSFCell cellC1 = row1.getCell(5);		
						objRetornoSmrt.setInicio(formatter1.format(cellC1.getNumericCellValue()*100));
						//60 dias
						XSSFCell cellD1 = row1.getCell(6);		
						objRetornoSmrt.setYtd(formatter1.format(cellD1.getNumericCellValue()*100));				
						//90 dias
						XSSFCell cellE1 = row1.getCell(7);		
						objRetornoSmrt.setMesanterior(formatter1.format(cellE1.getNumericCellValue()*100));		
						//Titulo
						XSSFCell cellF1 = row2.getCell(0);
						objRetornoSmrt.setFecha(cellF1.getStringCellValue());	
						ListobjSmrt.add(objRetornoSmrt);
					}
				}
			}
			inStream.close();
		} catch (IOException e) {
			logger.info("[Operation]	::	readFileXlsPortalAYDRetorno	-	[Method]");
		}
		return ListobjSmrt;
	}		
	
}
