package mx.com.actinver.analisis.front.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/CheckSessController")
public class CheckSessController {

	private static final Logger logger = LoggerFactory.getLogger(CheckSessController.class);
	
	@RequestMapping(value="/workWithSess", method=RequestMethod.GET)
	@ResponseBody
	public String appActionCheckCad(HttpServletRequest req, HttpServletResponse res){
		logger.info("[Controller]	::	appActionCheckCad	-	[Method]");
		String responseCad = "";		
		String checkPar1 = req.getParameter("valResultFind");
		String dePaga = "false";
		if (checkPar1.equals("undefined")) {
			responseCad = "false";
		} else {
			HttpSession session = req.getSession();
			session.setAttribute("param1", checkPar1);
			session.setAttribute("param2", dePaga);
			responseCad = "true";
		}
		return responseCad;
	}

	@RequestMapping(value="/workWithPaga", method=RequestMethod.GET)
	@ResponseBody
	public String appActionCheckPaga(HttpServletRequest req, HttpServletResponse res){
		logger.info("[Controller]	::	appActionCheckPaga	-	[Method]");
		String responseCad = "true";		
		String checkPar1 = req.getParameter("valResultFind");
		/*	Hacer Consulta para saber si es usuario es de paga */
		if (checkPar1.equals("undefined")) {
			responseCad = "false";
		} else {
//			responseCad = "true";
			responseCad = "false";
		}
		return responseCad;
	}
	
}
