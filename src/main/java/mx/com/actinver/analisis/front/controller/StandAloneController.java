package mx.com.actinver.analisis.front.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class StandAloneController {
	
	private static final Logger logger = LoggerFactory.getLogger(StandAloneController.class);
	
	@RequestMapping(value="/topMmv0", method=RequestMethod.GET)
	public String appTopMm(HttpServletRequest request, Model model) {
		logger.info("[Controller]	::	appTopMm	-	[Method]");
		String viewPage = "";
		viewPage = "/standAlone/topMmv0";
		return viewPage;
	}
	
	@RequestMapping(value="/intradiaIpcv0", method=RequestMethod.GET)
	public String appIntradiaIpc(HttpServletRequest request, Model model) {
		logger.info("[Controller]	::	appIntradiaIpc	-	[Method]");
		String viewPage = "";
		viewPage = "/standAlone/intradiaIpcv0";
		return viewPage;
	}

	@RequestMapping(value="/tickerv0", method=RequestMethod.GET)
	public String appTicker(HttpServletRequest request, Model model) {
		logger.info("[Controller]	::	appTicker	-	[Method]");
		String viewPage = "";
		viewPage = "/standAlone/tickerv0";
		return viewPage;		
	}
	
	@RequestMapping(value="/btnSendMailv0", method=RequestMethod.GET)
	public String appBtnSendMAil(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appBtnSendMAil	-	[Method]");
		String viewPage = "";
		viewPage = "/standAlone/btnSendMailv0";
		return viewPage;
	}
	
	@RequestMapping(value="/exterLogServ0", method=RequestMethod.GET)
	public String appExterLogServ(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appExterLogServ	-	[Method]");
		String viewPage = "";
		viewPage = "/standAlone/exterLogServ0";
		return viewPage;
	}
	
	//I::Solo de Prueba para probar apps
	@RequestMapping(value="/TestBody", method=RequestMethod.GET)
	public String appTestBody(HttpServletRequest request, Model model) {
		logger.info("[Controller]	::	appTestBody	-	[Method]");
		String viewPage = "";
		viewPage = "/standAlone/TestBody";
		return viewPage;
	}
	//F::Solo de Prueba para probar apps
	
}
