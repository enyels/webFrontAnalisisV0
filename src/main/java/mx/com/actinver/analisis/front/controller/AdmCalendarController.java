package mx.com.actinver.analisis.front.controller;

import java.io.UnsupportedEncodingException;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import mx.com.actinver.analisis.operations.OperQueryBackRest;
import mx.com.actinver.analisis.operations.QuerysOperMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/AdmCalendarController")
public class AdmCalendarController {

	private static final Logger logger = LoggerFactory.getLogger(AdmCalendarController.class);
	@RequestMapping(value="/deleteAdmCalendario", method=RequestMethod.GET)
	@ResponseBody
	public int deleteAdmCalendario(HttpServletRequest request) {
		logger.info("[Controller]	::	deleteAdmCalendario	-	[Method]");
		
		String idEvent=request.getParameter("idEvent");
		logger.info("[Controller]	::	deleteAdmCalendario	-	[parameter]"+idEvent);
		int responseBin = 1;
			responseBin = OperQueryBackRest.delateAdmCal(idEvent);
		return responseBin;
		
	}
	@RequestMapping(value="/updateAdmCalendario", method=RequestMethod.GET)
	@ResponseBody
	public int updateAdmCalendario(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	updateAdmCalendario	-	[Method]");
		request.setCharacterEncoding("UTF-8");
		String idEvent=request.getParameter("idEvent");
		String event=request.getParameter("event");
		
		
		logger.info("[Controller]	::	updateAdmCalendario	-	[parameter]"+event);
		int responseBin = 1;
			responseBin = OperQueryBackRest.updateAdmCal(idEvent,event);
		return responseBin;
		
	}
	@RequestMapping(value="/getFrontCalendario", method=RequestMethod.GET)
	@ResponseBody
	public String getIpFrontCalendario(HttpServletRequest request) throws UnsupportedEncodingException {
		request.setCharacterEncoding("UTF-8");
		logger.info("[Controller]	::	getIpFrontCalendario	-	[Method]");
		String responseIpFront= OperQueryBackRest.getIpfront();
		return responseIpFront;
		
	}
	@RequestMapping(value="/getBackCalendario", method=RequestMethod.GET)
	@ResponseBody
	public String getIpBackCalendario(HttpServletRequest request) throws UnsupportedEncodingException {
		request.setCharacterEncoding("UTF-8");
		logger.info("[Controller]	::	getIpBackCalendario	-	[Method]");
		String responseIpFront= OperQueryBackRest.getIpBack();
		return responseIpFront;
		
	}
	
	
	
	
	


}




