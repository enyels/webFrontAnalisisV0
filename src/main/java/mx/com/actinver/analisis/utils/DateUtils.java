package mx.com.actinver.analisis.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeConstants;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

public class DateUtils {
	public static String dateToString(Date date){
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String result = sdf.format(date);
		
		return result;		
	}
	
	public static XMLGregorianCalendar asXMLGregorianCalendar(String type) {
		try {
			GregorianCalendar now = new GregorianCalendar();
			if (type.equals("DATE")) {
				return DatatypeFactory.newInstance()
						.newXMLGregorianCalendarDate(now.get(Calendar.YEAR),
								now.get(Calendar.MONTH)+1,
								now.get(Calendar.DAY_OF_MONTH),
								DatatypeConstants.FIELD_UNDEFINED);
			} else if (type.equals("TIME")) {
				return DatatypeFactory.newInstance()
						.newXMLGregorianCalendarTime(now.get(Calendar.HOUR_OF_DAY),
								now.get(Calendar.MINUTE),
								now.get(Calendar.SECOND),
								DatatypeConstants.FIELD_UNDEFINED);
			} else {
				return DatatypeFactory.newInstance()
						.newXMLGregorianCalendar(now);
			}
		} catch (DatatypeConfigurationException dce) {
			return null;
		}
	}
	
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
	
	public static XMLGregorianCalendar stringAsXMLGregorianCalendarAux(String sDate) {
		XMLGregorianCalendar xgc = null;
		try {			
			//System.out.println("sDate:"+sDate);
			SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyy");
			GregorianCalendar now = new GregorianCalendar();
			now.setTime(sdf.parse(sDate));
			xgc = DatatypeFactory.newInstance().newXMLGregorianCalendar(now);
			//System.out.println("xgc:"+xgc.toGregorianCalendar().getTime());
		} catch (DatatypeConfigurationException dce) {
			dce.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return xgc;
	}
	
	public static XMLGregorianCalendar longAsXMLGregorianCalendar(Long lDate) {
		try {
			GregorianCalendar now = new GregorianCalendar();
			now.setTime(new Date(lDate));
			return DatatypeFactory.newInstance().newXMLGregorianCalendar(now);
			
		} catch (DatatypeConfigurationException dce) {
			return null;
		}
	}
	
	public static XMLGregorianCalendar dateAsXMLGregorianCalendar(Date date) {
		try {
			GregorianCalendar now = new GregorianCalendar();
			now.setTime(date);
			return DatatypeFactory.newInstance().newXMLGregorianCalendar(now);
			
		} catch (DatatypeConfigurationException dce) {
			return null;
		}
	}

	public static String getDateDiff(Calendar endDate) {
		Calendar startDate = Calendar.getInstance();
		long mili1 = startDate.getTimeInMillis();
		long mili2 = endDate.getTimeInMillis();
		long diff = mili1 - mili2;
		long diffDays = diff / (24 * 60 * 60 * 1000);
//		int MILLIS_IN_DAY = 1000 * 60 * 60 * 24;
//		
//		long endInstant = endDate.getTimeInMillis();
//		int presumedDays = (int) ((endInstant - startDate.getTimeInMillis()) / MILLIS_IN_DAY);
//		Calendar cursor = (Calendar) startDate.clone();
//		cursor.add(Calendar.DAY_OF_YEAR, presumedDays);
//		long instant = cursor.getTimeInMillis();
//		if (instant == endInstant)
//			return "" + presumedDays;
//		final int step = instant < endInstant ? 1 : -1;
//		do {
//			cursor.add(Calendar.DAY_OF_MONTH, step);
//			presumedDays += step;
//		} while (cursor.getTimeInMillis() != endInstant);
//		return "" + presumedDays;
		return "" + diffDays;
	}
	
	public static String getStringFromXMLGregorianCalendar(XMLGregorianCalendar date){
		String res = "";
		if(date != null){
			res = dateToString(date.toGregorianCalendar().getTime());
		}
		return res;
	}

	public static String singleDateToString(Date date) {
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		String result = sdf.format(date);
		return result;	
	}

	public static String singleHourToString(Date date) {
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
		String result = sdf.format(date);
		
		return result;	
	}
	
}
