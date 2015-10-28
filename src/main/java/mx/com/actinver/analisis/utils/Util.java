package mx.com.actinver.analisis.utils;

import java.lang.reflect.Method;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeConstants;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

public class Util {
	
	private static final String CLIENT_ID ="BANCA ELECTRONICA";
	
	public static XMLGregorianCalendar getDate() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(new Date());
		XMLGregorianCalendar xmlCal = null;
		try {
			xmlCal = DatatypeFactory.newInstance().newXMLGregorianCalendar(date);
		} catch (DatatypeConfigurationException e) {
			System.out.println("Hubo un error al generar la fecha");
			e.printStackTrace();
		}
		return xmlCal;
	}
	
	public static XMLGregorianCalendar getTime() {
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
		String date = sdf.format(new Date());
		XMLGregorianCalendar xmlCal = null;
		try {
			xmlCal = DatatypeFactory.newInstance().newXMLGregorianCalendar(date);
			
		} catch (DatatypeConfigurationException e) {
			System.out.println("Hubo un error al generar la hora");
			e.printStackTrace();
		}
		return xmlCal;
		
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Object createHeader(String language, String ipAddress, String operation, String classType) {
		
		Object inCommonHeader = null;
		try {
			Class classs = Class.forName(classType);
		
			inCommonHeader = classs.newInstance();
			
			Method method = classs.getDeclaredMethod("setDate", XMLGregorianCalendar.class);
			method.invoke(inCommonHeader, Util.getDate());
			
			method = classs.getDeclaredMethod("setTime", XMLGregorianCalendar.class);
			method.invoke(inCommonHeader, Util.getTime());
			
			method = classs.getDeclaredMethod("setOperationName", String.class);
			method.invoke(inCommonHeader, operation);
			
			method = classs.getDeclaredMethod("setLanguage", String.class);
			method.invoke(inCommonHeader, language);
			
			method = classs.getDeclaredMethod("setIPAddress", String.class);
			method.invoke(inCommonHeader, ipAddress);
			
			method = classs.getDeclaredMethod("setClientID", String.class);
			method.invoke(inCommonHeader, CLIENT_ID);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return inCommonHeader;
	}
	
	@SuppressWarnings("static-access")
	public static XMLGregorianCalendar stringAsXMLGregorianCalendar(String sDate) {
		XMLGregorianCalendar xgc = null;
		try {			
			//System.out.println("sDate:"+sDate);
			SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyy");
			Calendar now = new GregorianCalendar();
			now.setTime(sdf.parse(sDate));
			//xgc = DatatypeFactory.newInstance().newXMLGregorianCalendar(now);
			xgc = DatatypeFactory.newInstance()
			.newXMLGregorianCalendarDate(now.get(now.YEAR),
					now.get(now.MONTH)+1,
					now.get(now.DAY_OF_MONTH),
					DatatypeConstants.FIELD_UNDEFINED);
			//System.out.println("xgc:"+xgc.toGregorianCalendar().getTime());
		} catch (DatatypeConfigurationException dce) {
			dce.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return xgc;
	}
	
	public static String dateToString(Date date){
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String result = sdf.format(date);
		
		return result;		
	}

	public static String singleHourToString(Date date) {
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
		String result = sdf.format(date);
		
		return result;	
	}

	public static String singleDateToString(Date date) {
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		String result = sdf.format(date);
		return result;	
	}
}
