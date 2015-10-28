package mx.com.actinver.analisis.operations;

import java.util.ResourceBundle;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import mx.com.actinver.analisis.vo.EmisorasNaList;

public class QuerysOperMap {
	
	public static EmisorasNaList defaultEmnaTicker() {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/EmisorasNaDefRest/emNaDefault?language=SPA";
//		String urlRest = "http://172.16.4.231:9081/appsBackAnalisis/jaxrs/EmisorasNaDefRest/emNaDefault?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		EmisorasNaList defListEmna = restTemplate.getForObject(urlRest, EmisorasNaList.class);
		return defListEmna;
	}

	public static EmisorasNaList selectedEmnaTicker() {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/EmisorasNaSelRest/emNaSelected?language=SPA";
//		String urlRest = "https://www.actinver.com/appsBackAnalisis/jaxrs/EmisorasNaSelRest/emNaSelected?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		EmisorasNaList selListEmna = restTemplate.getForObject(urlRest, EmisorasNaList.class);
		return selListEmna;
	}
	
	public static int updateEmiA(String key, String value){
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/EmisorasNaDefRest/upOneEmNaDefault/"+value+"/"+key+"?language=SPA";
//		String urlRest = "http://172.16.4.231:9081/appsBackAnalisis/jaxrs/EmisorasNaDefRest/upOneEmNaDefault/"+value+"/"+key+"?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		int response = restTemplate.getForObject(urlRest, Integer.class);
		return response;
	}
	
	public static int updateEmiB(String key, String value){
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/EmisorasNaSelRest/upOneEmNaSelected/"+value+"/"+key+"?language=SPA";
//		String urlRest = "http://172.16.4.231:9081/appsBackAnalisis/jaxrs/EmisorasNaSelRest/upOneEmNaSelected/"+value+"/"+key+"?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		int response = restTemplate.getForObject(urlRest, Integer.class);
		return response;
	}
	
	public static ResponseEntity<String> validateContract(String contractNum){
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/ValediteUserInfoRest/getNumCteByContrat/"+contractNum+"/?language=SPA";
//		String urlRest = "http://mxl43935lm.actinver.com.mx:9085/appsBackAnalisis/jaxrs/ValediteUserInfoRest/getNumCteByContrat/"+contractNum+"/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> response = restTemplate.getForEntity(urlRest, String.class);
		return response;
	}	
	
	public static ResponseEntity<String> createCountByCon(String numCont, String tuName, String tuEmail, String tuMovil){
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/NotificationsAndAlertsRest/sendDataRegister"+numCont+"/"+tuName+"/"+tuEmail+"/"+tuMovil+"/7/1?language=SPA";
//		String urlRest = "http://mxl43935lm.actinver.com.mx:9085/appsBackAnalisis/jaxrs/NotificationsAndAlertsRest/sendDataRegister"+numCont+"/"+tuName+"/"+tuEmail+"/"+tuMovil+"?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> response = restTemplate.getForEntity(urlRest, String.class);
		return response;
	}
	
	public static ResponseEntity<String> obtainAllEmNa(){
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/MarketInfoRest/bpc01wew/12121/1/5/0/0/1?language=SPA";
//		String urlRest = "https://www.actinver.com/appsBackAnalisis/jaxrs/MarketInfoRest/bpc01wew/12121/1/5/0/0/1?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> response = restTemplate.getForEntity(urlRest, String.class);
		return response;
	}	

	public static ResponseEntity<String> obtainAllEmNaOptDel(){
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/MarketInfoRest/upDateMk011212/00/00/1/5/true?language=SPA";
		//String urlRest = "http://10.10.111.10:7777/appsBackAnalisis/jaxrs/MarketInfoRest/upDateMk011212/00/00/00/00/true?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> response = restTemplate.getForEntity(urlRest, String.class);
		return response;
	}	

}
