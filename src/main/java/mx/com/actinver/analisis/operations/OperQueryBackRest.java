package mx.com.actinver.analisis.operations;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import java.util.ResourceBundle;


import mx.com.actinver.analisis.bo.BlogUserCatAlias;
import mx.com.actinver.analisis.bo.CommentAnalisis;
import mx.com.actinver.analisis.bo.Emisora;
import mx.com.actinver.analisis.bo.InfoFinanciera;
import mx.com.actinver.analisis.bo.InfoFinancieraFib;
import mx.com.actinver.analisis.bo.Operatividad;
import mx.com.actinver.analisis.bo.OperatividadFib;
import mx.com.actinver.analisis.bo.PostAnalisis;
import mx.com.actinver.analisis.bo.UserBlog;
import mx.com.actinver.analisis.bo.Variaciones;
import mx.com.actinver.analisis.bo.VariacionesList;
import mx.com.actinver.analisis.bo.WhishList;
import mx.com.actinver.analisis.utils.ReadPropertiesFile;

import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;

public class OperQueryBackRest {

	
	public static int delateAdmCal(String value){
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/ActividadInfoRest/deleteEvent/"+value+"?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		int response = restTemplate.getForObject(urlRest, Integer.class);
		return response;
	}
	
	public static int updateAdmCal(String value1,String value2 ){
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/ActividadInfoRest/updateEvent/"+value1+"/"+value2+"?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		int response = restTemplate.getForObject(urlRest, Integer.class);
		return response;
	}
	
	public static Variaciones getVariationCalcu(String value1, String value2 ){
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CalculadoraInfoRest/getVariacion"+value1+"/"+value2+"/?language=SPA";
		Variaciones response= new Variaciones();
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, Variaciones.class);
		return response;
	}
	
	public static int getCompanyName(String value1){
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CapitalMarketRest/bpc06wew/"+value1+"/"+"?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		int response = restTemplate.getForObject(urlRest, Integer.class);
		return response;
	}
	
	public static Object[] CompanyNameCalcu() {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CalculadoraInfoRest/getCompanyName?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		Object[] response =restTemplate.getForObject(urlRest,Object[].class);
		return response;
	}
	
	public static Operatividad getOperatividadCalcu(String value1,String value2) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");		
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CalculadoraInfoRest/getOperatividad"+value1+"/"+value2+"/?language=SPA";
				Operatividad response= new Operatividad();
				RestTemplate restTemplate = new RestTemplate();
				response = restTemplate.getForObject(urlRest, Operatividad.class);
				return response;
	}
	
	public static InfoFinanciera getInfoFinancieraCalcu(String value1,
			String value2) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CalculadoraInfoRest/getInfofinanciera"+value1+"/"+value2+"/?language=SPA";
		InfoFinanciera response= new InfoFinanciera();
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, InfoFinanciera.class);
		return response;
	}
	public   String  getActivityClientFromBack() throws UnsupportedEncodingException {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/ActividadInfoRest/actividad?language=SPA";
		String event=null;
    	RestTemplate restTemplate = new RestTemplate();
    	event = restTemplate.getForObject(urlRest, String.class);
		if(event==null){
			event="ERROR";
		}
    	return event;
    }
	public static String  getIpfront() {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = rb.getString("SERVER_POR_IP")+"/";

    	return urlRest;
    }
	
	public  static String  getIpBack() {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/";
		return urlRest;
    }

	public static WhishList getMessageWhish(String value) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/WhishListInfoRest/getMessage/"+value+"?language=SPA";		
		System.out.println(urlRest);
		WhishList response;
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, WhishList.class);
		return response;
	}
	
	/*public static WhishList getValidaDataWhish(String value, String value2) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		//String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CalculadoraInfoRest/getInfofinanciera"+value1+"/"+value2+"/?language=SPA";
		//InfoFinanciera response= new InfoFinanciera();
		System.out.println("***********mensaje"+value2);
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/WhishListInfoRest/validaMessageBack12/"+value+"/"+value2+"/?language=SPA";		
		System.out.println(urlRest);
		WhishList response;
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, WhishList.class);
		return response;
	}*/
	public static Object[]  getPostBlogAnalisis() {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getPostAnalisis";		
		System.out.println(urlRest);
		Object[] response;
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, Object[].class);
		return response;
	}

	public static Object[] getCommentByPost(String idPost) {
		// TODO Auto-generated method stub
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String value1="122";
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getComennetByPost"+value1+"/"+idPost+"/?language=SPA";		
		Object[] response;
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, Object[].class);
		return response;
	}

	public static Integer setComment(Integer value1,String value2, String value3,String value4) {
		// TODO Auto-generated method stub
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/setComennetByPostParameter/"+value1+"/"+value2+"/"+value3+"/"+value4+"/?language=SPA";		
		Integer response;
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, Integer.class);
		return response;
	}

	public static int getLikePost(String value1) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getLikeidPost3434/"+value1+"?language=SPA";		
		Integer response;
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, Integer.class);
		return response;
	}

	public static int getCountComment(String value1) {
ResourceBundle rb = ResourceBundle.getBundle("configprop");
		
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getCountComment3434/"+value1+"?language=SPA";		
		Integer response;
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, Integer.class);
		return response;
	}

	public static Integer setLikePost(Integer value1, String value2) {
		// TODO Auto-generated method stub
		///setLike{tkn}/{idPost}/{user}/"
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/setLike3434/"+value1+"/"+value2+"/?language=SPA";		
		Integer response;
		
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, Integer.class);
		return response;
	}

	public static Object[] getPostByDate(String date) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getPostByDateBack457/"+date+"/?language=SPA";		
		Object[] response;
		
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, Object[].class);
		return response;
	}

	public static Object[] getPostByPage(Integer value1) {
				ResourceBundle rb = ResourceBundle.getBundle("configprop");
				String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getPostByPage232/"+value1+"/?language=SPA";
				RestTemplate restTemplate = new RestTemplate();
				Object[] response = restTemplate.getForObject(urlRest, Object[].class);
				return response;
	}

	public static UserBlog getStatusByUser(String user) {
		// TODO Auto-generated method stub
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/validateBlogUser2423/"+user+"/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		UserBlog response = restTemplate.getForObject(urlRest, UserBlog.class);
		return response;
	}

	public static int setAlias(String user, String alias,  int estatus, String nombreUsuario, int show,String imguser) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/setUserAnalist/"+user+"/"+alias+"/"+nombreUsuario+"/"+show+"/"+imguser+"/"+estatus+"/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		int response = restTemplate.getForObject(urlRest, Integer.class);
		return response;
	}
	
	public static UserBlog setAlias2(String user, String alias,  int estatus, String nombreUsuario, int show,String imguser) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/setAlias/"+user+"/"+alias+"/"+nombreUsuario+"/"+show+"/"+imguser+"/"+estatus+"/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		UserBlog response = restTemplate.getForObject(urlRest, UserBlog.class);
		return response;
	}

	public static Object[] getPostLastFive() {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getPostLastFive232/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		Object[] response = restTemplate.getForObject(urlRest, Object[].class);
		return response;
	}

	public static Object[] getPostByword(String word) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getPostByWord122/"+word+"/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		Object[] response = restTemplate.getForObject(urlRest, Object[].class);
		return response;
	}

	public static Integer setPost(String articulo) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		
		MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
		map.add("articulo", articulo);
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/actionSetPost";
		RestTemplate restTemplate = new RestTemplate();
		Integer response;
		response = restTemplate.postForObject(urlRest,map,Integer.class);
		System.out.print("*********************************");
		System.out.print(response);
		return response;
	}
	/*
	 * calculadora financiara
	 */
	public static Variaciones getVariationCalcuFin(String value1, String value2 ){
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CalculadoraInfoRest/getVariacionFin"+value1+"/"+value2+"/?language=SPA";
		Variaciones response= new Variaciones();
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, Variaciones.class);
		return response;
	}
	
	
	
	public static Object[] CompanyNameCalcuFin() {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CalculadoraInfoRest/getCompanyNameFin?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		Object[] response =restTemplate.getForObject(urlRest,Object[].class);
		return response;
	}
	
	public static Operatividad getOperatividadCalcuFin(String value1,String value2) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");		
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CalculadoraInfoRest/getOperatividadFin"+value1+"/"+value2+"/?language=SPA";
				Operatividad response= new Operatividad();
				RestTemplate restTemplate = new RestTemplate();
				response = restTemplate.getForObject(urlRest, Operatividad.class);
				return response;
	}
	
	public static InfoFinanciera getInfoFinancieraCalcuFin(String value1,
			String value2) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CalculadoraInfoRest/getInfofinancieraFin"+value1+"/"+value2+"/?language=SPA";
		InfoFinanciera response= new InfoFinanciera();
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, InfoFinanciera.class);
		return response;
	}

	public static int setPostDos(String word,String title, String userid) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/setPostbig"+word+"/"+title+"/"+userid+"/?language=SPA";		
		Integer response;
		
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, Integer.class);
		return response;
	}

	public static Object[] getUserLikeIdPost(Integer idPost) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		//String urlRest =""
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getUserLikes/"+idPost+"/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		Object[] response =restTemplate.getForObject(urlRest,Object[].class);
		return response;
	}

	public static Integer modPostbyIdpost(Integer idPost) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		//String urlRest =""
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/modPostById122/"+idPost+"/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		int response =restTemplate.getForObject(urlRest,Integer.class);
		return response;
	}

	public static Object[] getPostByUser(String user) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		//String urlRest =""
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getPostbyUser123/"+user+"/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		Object[] response =restTemplate.getForObject(urlRest,Object[].class);
		return response;
	}

	public static int updatePostbig(String word, String title, String idPost) {
		// TODO Auto-generated method stub
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		//String urlRest =""
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/updatePostbig"+word+"/"+title+"/"+idPost+"/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		int response =restTemplate.getForObject(urlRest,Integer.class);
		return response;
	}

	public static Object[] getUserCat() {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		//String urlRest =""
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getUserCat/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		Object[] response =restTemplate.getForObject(urlRest,Object[].class);
		return response;
	}

	public static Integer modCommentbyIdComment(Integer value1,Integer value2 ) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		//String urlRest =""
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/modCommentById/"+value1+"/"+value2+"/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		int response =restTemplate.getForObject(urlRest,Integer.class);
		return response;
	}

	public static Object[] getUserAnalista() {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		//String urlRest =""
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getUserAnalista/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		Object[] response =restTemplate.getForObject(urlRest,Object[].class);
		return response;
	}

	public static Integer modUserAnalistaByUser(String value1) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		//String urlRest =""
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/modUserAnalistaByUser/"+value1+"/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		int response =restTemplate.getForObject(urlRest,Integer.class);
		return response;
	}
	//updateUserAnalistaByUser{tkn}/{idUser}/{name}/{newUser}/
	public static Integer updateUserAnalistaByUser(String idUser, String name,
			String newUser) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/updateUserAnalistaByUser/"+idUser+"/"+name+"/"+newUser+"/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		int response =restTemplate.getForObject(urlRest,Integer.class);
		return response;
	}

	public static Object[]  getPostdate(String date) {
		// TODO Auto-generated method stub
		//getPostdate
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getPostdate/"+date+"/?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		Object[] response =restTemplate.getForObject(urlRest,Object[].class);
		return response;
	
	}

	public static OperatividadFib getOperatividadCalcuFib(String value1,
			String value2) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");		
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CalculadoraInfoRest/getOperatividadFib"+value1+"/"+value2+"/?language=SPA";
		OperatividadFib response= new OperatividadFib();
				RestTemplate restTemplate = new RestTemplate();
				response = restTemplate.getForObject(urlRest, OperatividadFib.class);
				return response;
	}

	public static Object[] CompanyNameCalcuFib() {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		//String urlRest =""
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CalculadoraInfoRest/getCompanyNameFib?language=SPA";
		RestTemplate restTemplate = new RestTemplate();
		Object[] response =restTemplate.getForObject(urlRest,Object[].class);
		return response;
	}

	public static Variaciones getVariationsCalcuFib(String value1, String value2) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest = "http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CalculadoraInfoRest/getVariacionFib"+value1+"/"+value2+"/?language=SPA";
		Variaciones response= new Variaciones();
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, Variaciones.class);
		return response;
	}

	public static InfoFinancieraFib getInfofinancieraFib(String value1,
			String value2) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/CalculadoraInfoRest/getInfofinancieraFib"+value1+"/"+value2+"/?language=SPA";
		InfoFinancieraFib response= new InfoFinancieraFib();
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, InfoFinancieraFib.class);
		return response;
	}

	public static UserBlog getAlias(String user) {
		// TODO Auto-generated method stub
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getAliasByUser/"+user+"/?language=SPA";
		UserBlog response= new UserBlog();
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, UserBlog.class);
		return response;
	}

public static Integer setUserAlias(String user, String alias, int estatus,
			String nombreUsuario, int show, int contrato) {
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/" +
		"BlogAnalisisRest/setUserAlias/"+user+"/"+alias+"/"+nombreUsuario+"/"+show+"/"+estatus+"/"+contrato+"/?language=SPA";
		Integer response;
		RestTemplate restTemplate = new RestTemplate();
		response = restTemplate.getForObject(urlRest, Integer.class);
		return response;
	}

public static Object[]  getUserCatAlias() {
	// TODO Auto-generated method stub
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/" +
	"BlogAnalisisRest/getUserCatAlias/?language=SPA";
	Object[]  response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Object[] .class);
	return response;
}

public static Object[] getPostLikebyUser(String user) {
	// TODO Auto-generated method stub
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/" +
	"BlogAnalisisRest/getPostLikebyUser/"+user+"/?language=SPA";
	Object[]  response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Object[] .class);
	return response;
}

public static Object[] getValidateuserPost(String user, int idPost, int idComent) {
	// TODO Auto-generated method stub
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	//getValidateuserPost{tkn}/{user}/"
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/" +
	"BlogAnalisisRest/getValidateuserPost/"+user+"/"+idPost+"/"+idComent+"?language=SPA";
	Object[]  response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Object[] .class);
	return response;
}
///setUserPostComent{tkn}/{user}/{idpost}/{idcoment}/
public static Integer setUserPostComent(String user, int idpost, int idcoment) {
	// TODO Auto-generated method stub
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/" +
	"BlogAnalisisRest/setUserPostComent/"+user+"/"+idpost+"/"+idcoment+"/?language=SPA";
	Integer  response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Integer.class);
	return response;
}

public static Object[] getAllBlogUser() {
	// TODO Auto-generated method stub
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/" +
	"BlogAnalisisRest/getAllBlogUser/?language=SPA";
	Object[]  response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Object[] .class);
	return response;
}

public static Integer getLikePost(Integer value1, String value2) {
	// TODO Auto-generated method stub
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/" +
	"BlogAnalisisRest/getLike/"+value1+"/"+value2+"/?language=SPA";
	Integer  response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Integer.class);
	return response;
}

public static Object[] getPostByDateLess(String date, Integer page) {
	// TODO Auto-generated method stub
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/" +
	"BlogAnalisisRest/getPostByDateLess/"+date+"/"+page+"/?language=SPA";
	Object[]  response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Object[].class);
	return response;
}

public static Object[] getCommentByPostAnalisis(String idPost) {
	// TODO Auto-generated method stub
			ResourceBundle rb = ResourceBundle.getBundle("configprop");
			String value1="122";
			String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getComennetByPostAnalista"+value1+"/"+idPost+"/?language=SPA";		
			Object[] response;
			RestTemplate restTemplate = new RestTemplate();
			response = restTemplate.getForObject(urlRest, Object[].class);
			return response;
}

public static Object[] getPostAnalisisAnalist(String user) {
	// TODO Auto-generated method stub
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	System.out.println("********getPostAnalisisAnalist"+user);
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/" +
	"BlogAnalisisRest/getPostAnalisisAnalist/"+user+"/?language=SPA";
	Object[]  response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Object[].class);
	return response;
}

public static Integer setComennetByPostParameterAnalist(Integer value1,
		String value2, String value3, String value4) {
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/" +
	"BlogAnalisisRest/setComennetByPostParameterAnalist/"+value1+"/"+value2+"/"+value3+"/"+value4+"/?language=SPA";
	Integer  response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Integer.class);
	return response;
}

public static Integer setCommentAnalist(String idUser, Integer idUserComent) {
	// TODO Auto-generated method stub
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/" +
	"BlogAnalisisRest/setUserComentAnalist/"+idUser+"/"+idUserComent+"/?language=SPA";
	Integer  response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Integer.class);
	return response;
}

public static Integer deleteUser(Integer contrato, String idusuario, String mensaje) {
	// TODO Auto-generated method stub
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/" +
	"BlogAnalisisRest/deleteUser/"+contrato+"/"+idusuario+"/"+mensaje+"/?language=SPA";
	Integer  response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Integer.class);
	return response;
}

public static UserBlog setAliasCat(String user, String alias, int estatus,
		String nombreUsuario, int show, String imguser) {
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/setAliasCat/"+user+"/"+alias+"/"+nombreUsuario+"/"+show+"/"+imguser+"/"+estatus+"/?language=SPA";
	RestTemplate restTemplate = new RestTemplate();
	UserBlog response = restTemplate.getForObject(urlRest, UserBlog.class);
	return response;
}

public static UserBlog updPasswordUser(String user, String oldpass,
		String newpass) {
	// TODO Auto-generated method stub
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/updPasswordUser/"+user+"/"+oldpass+"/"+newpass+"/?language=SPA";
	RestTemplate restTemplate = new RestTemplate();
	UserBlog response = restTemplate.getForObject(urlRest, UserBlog.class);
	return response;
}

public static Object[] getCommentByPostIdAll(String idPost) {
	// TODO Auto-generated method stub
	// TODO Auto-generated method stub
			ResourceBundle rb = ResourceBundle.getBundle("configprop");
			String value1="122";
			String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getCommentByPostIdAll"+value1+"/"+idPost+"/?language=SPA";		
			Object[] response;
			RestTemplate restTemplate = new RestTemplate();
			response = restTemplate.getForObject(urlRest, Object[].class);
			return response;
}

public static Object[] getPostNoPublish(String user) {
	// TODO Auto-generated method stub
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	System.out.println("********getPostAnalisisAnalist"+user);
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/" +
	"BlogAnalisisRest/getPostNoPublish/?language=SPA";
	Object[]  response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Object[].class);
	return response;
}

public static Object[] getCommentByPostNoPublish(String idPost) {
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	String value1="122";
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getCommentByPostNoPublish"+value1+"/"+idPost+"/?language=SPA";		
	Object[] response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Object[].class);
	return response;
}

public static int getCountCommentNoPublish(String idPost) {
	// TODO Auto-generated method stub
	ResourceBundle rb = ResourceBundle.getBundle("configprop");
	
	String urlRest ="http://"+rb.getString("SERVER_IP")+":"+rb.getString("SERVER_PORT")+"/appsBackAnalisis/jaxrs/BlogAnalisisRest/getCountCommentNoPublish/"+idPost+"?language=SPA";		
	Integer response;
	RestTemplate restTemplate = new RestTemplate();
	response = restTemplate.getForObject(urlRest, Integer.class);
	return response;
}
	

	
}
