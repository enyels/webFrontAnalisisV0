package mx.com.actinver.analisis.bo.impl;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import mx.com.actinver.analisis.front.controller.HomeController;
import mx.com.actinver.analisis.utils.ReadPropertiesFile;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.client.RestTemplate;
 
 
public class ActividadBOImpl  {
	private static final Logger logger = LoggerFactory.getLogger(ActividadBOImpl.class);
	    //public static final String SERVER_URI = ReadPropertiesFile.getUrlWs()+"/appsBackAnalisis/jaxrs/ActividadInfoRest/actividad?language=SPA";
	    
	//public static final String SERVER_URI = "http://mxl43935lm.actinver.com.mx:9085/appsBackAnalisis/jaxrs/ActividadInfoRest/actividad?language=SPA";
	//public static final String SERVER_URI = "http://10.10.115.7:9083/appsBackAnalisis/jaxrs/ActividadInfoRest/actividad?language=SPA";

	    //http://10.10.115.7:9083/
	   /* public   String  getActivityClientFromBack() {
	    	String event=null;
	    	RestTemplate restTemplate = new RestTemplate();
	    	logger.info("[BO]	::	ActividadBOImpl	-	[Client]"+SERVER_URI);
	    	event = restTemplate.getForObject(SERVER_URI, String.class);
			if(event==null){
				event="ERROR";
			}
	    	return event;
	    }*/
	   
	}
	

