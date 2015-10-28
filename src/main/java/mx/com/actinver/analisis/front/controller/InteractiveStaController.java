package mx.com.actinver.analisis.front.controller;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.Calendar;
import java.util.ResourceBundle;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.servlet.http.HttpServletRequest;

import mx.com.actinver.analisis.operations.OperSendEmail;
import mx.com.actinver.analisis.operations.QuerysOperMap;
import mx.com.actinver.analisis.vo.EmisorasNaList;
import mx.com.actinver.analisis.vo.TimesVo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/InteractiveStaController")
public class InteractiveStaController {
	
	private static final Logger logger = LoggerFactory.getLogger(InteractiveStaController.class);
	
	@RequestMapping(value="/formSendMail", method=RequestMethod.GET)
	public String appformSendMAil(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appformSendMAil	-	[Method]");
		String viewPage = "";
		viewPage = "/standAlone/formSendMail";
		return viewPage;
	}
	
	@RequestMapping(value="/actionSendMail", method=RequestMethod.POST)
	@ResponseBody
	public String appActionSendMAil(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appActionSendMAil	-	[Method]");
		String responseCad = "";		
		try {
			OperSendEmail.formSendMail(request.getParameter("valOrigen"), request.getParameter("valDestino"), request.getParameter("valAsunto"), request.getParameter("valMensaje"));
			responseCad = "Exito: Mensaje Enviado.";
		} catch (AddressException e) {
			responseCad = "La Direccion Es Invalida.";
			logger.info("AddressException::"+e.getMessage());
		} catch (MessagingException e) {
			responseCad = "Error: No se envio el mensaje.";
			logger.info("MessagingException::"+e.getMessage());
		}
		return responseCad;
	}
	
	@RequestMapping(value="/actionReadFile", method=RequestMethod.GET)
	@ResponseBody
	public String appActionReadFile(HttpServletRequest request, Model model) {
		logger.info("[Controller]	::	appActionReadFile	-	[Method]");
		String responseCad = "";
		try {
			ResourceBundle rb = ResourceBundle.getBundle("configprop");
			String uriS = rb.getString("FILE_CSV");
//			String uriS = "https://www.actinver.com/cab/graficas/AMLINE/bigipc.csv";
			URL url = new URL(uriS);
			URLConnection urlConn = url.openConnection();
			InputStreamReader inStream = new InputStreamReader(urlConn.getInputStream());
			BufferedReader buff = new BufferedReader(inStream);
			String nextLine;
			while (true) {
				nextLine = buff.readLine();
				if (nextLine != null) {
					responseCad = responseCad+"\n"+nextLine;
				}else{
					break;
				}
			}
		} catch (FileNotFoundException e) {
			responseCad = "File ::bigipc.csv:: Not Found."+e.getMessage();
			logger.info("File ::bigipc.csv:: Not Found."+e.getMessage());
		} catch (IOException e) {
			responseCad = "File ::IOException:: Not Found."+e.getMessage();
			logger.info("File ::IOException:: Not Found."+e.getMessage());
		}
		return responseCad;
	}
	
	@RequestMapping(value="/actionGetEmnaSel", method=RequestMethod.GET)
	@ResponseBody
	public EmisorasNaList appActionGetEmnaSel(HttpServletRequest request) {
		logger.info("[Controller]	::	appActionGetEmnaSel	-	[Method]");
		EmisorasNaList selListEmNa = new EmisorasNaList();
		selListEmNa = QuerysOperMap.selectedEmnaTicker();
		//Nota::Devuelve como json selListEmNa con jackson
		return selListEmNa;
	}
	
	@RequestMapping(value="/actionCheckTime", method=RequestMethod.GET)
	@ResponseBody
	public TimesVo appActionCheckTime(HttpServletRequest request){
		logger.info("[Controller]	::	appActionCheckTime	-	[Method]");
		Calendar calendar = Calendar.getInstance();
		int hrs = calendar.get(Calendar.HOUR_OF_DAY);
		int min = calendar.get(Calendar.MINUTE);
		String hrsStr = Integer.toString(hrs);
		String minStr = Integer.toString(min);
		if (hrs < 10) {
			hrsStr = "0"+hrsStr;
		}
		if (min < 10) {
			minStr = "0"+minStr;
		}
		TimesVo timesVo = new TimesVo();
		timesVo.setHora(hrsStr);
		timesVo.setMinuto(minStr);
		return timesVo;
	}
	
	@RequestMapping(value="/actionMailContact", method=RequestMethod.POST)
	@ResponseBody
	public String appActionMailContact(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appActionMailContact	-	[Method]");
		String responseCad = "";		
		try {
			OperSendEmail.formSendMail(request.getParameter("correoId"), request.getParameter("emailDestino"), request.getParameter("nameId"), request.getParameter("mensajeId"));
			responseCad = "Exito: Mensaje Enviado.";
		} catch (AddressException e) {
			responseCad = "Error: La Direccion Es Invalida.";
			logger.info("AddressException::"+e.getMessage());
		} catch (MessagingException e) {
			responseCad = "Error: No se envio el mensaje.";
			logger.info("MessagingException::"+e.getMessage());
		}
		return responseCad;
	}

	@RequestMapping(value="/actionGetMachine", method=RequestMethod.GET)
	@ResponseBody
	public TimesVo appActionGetMachine(HttpServletRequest request) {
		logger.info("[Controller]	::	appActionGetMachine	-	[Method]");
		TimesVo timesv0 = new TimesVo();
		ResourceBundle rb = ResourceBundle.getBundle("configprop");
		//Here read Prop
//		timesv0.setMachine("172.16.4.231");
//		timesv0.setBridge("9081");
		timesv0.setMachine(rb.getString("SERVER_POR_IP"));
		timesv0.setBridge(rb.getString("SERVER_POR_PORT"));
//		timesv0.setMachine("10.10.115.7");
//		timesv0.setBridge("9083");
		//Nota::Devuelve como json timesv0 con jackson
		return timesv0;
	}

	@RequestMapping(value="/formExterLog", method=RequestMethod.GET)
	public String appFormExterLog(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appFormExterLog	-	[Method]");
		String viewPage = "";
		viewPage = "/standAlone/formExterLogM1";
		return viewPage;
	}
	
	@RequestMapping(value="/actionSendContract", method=RequestMethod.GET)
	@ResponseBody
	public String appActionSendContract(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appActionSendContract	-	[Method]");
		ResponseEntity<String> response;
		response = QuerysOperMap.validateContract(request.getParameter("numCont"));
		return response.getBody();
	}
	
	@RequestMapping(value="/actionConfNewCount", method=RequestMethod.GET)
	@ResponseBody
	public String appActionConfNewCount(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appActionConfNewCount	-	[Method]");
		ResponseEntity<String> response;
		//System.out.println(request.getParameter("numCont")+"::"+request.getParameter("tuName")+"::"+request.getParameter("tuEmail")+"::"+request.getParameter("tuMovil"));
		response = QuerysOperMap.createCountByCon(request.getParameter("numCont"), request.getParameter("tuName"), request.getParameter("tuEmail"), request.getParameter("tuMovil"));
		//System.out.println("response.getBody()::"+response.getBody());
		return response.getBody();
	}
	
	@RequestMapping(value="/actionGetAllEmNa", method=RequestMethod.GET)
	@ResponseBody
	public String appActionGetAllEmNa(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	actionGetAllEmNa	-	[Method]");
		ResponseEntity<String> response;
		response = QuerysOperMap.obtainAllEmNa();
//		System.out.println("response.getBody()::"+response.getBody());
		return response.getBody();
	}
	
}
