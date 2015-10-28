package mx.com.actinver.analisis.front.controller;

import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import mx.com.actinver.analisis.operations.QuerysOperMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/InteractiveAdmController")
public class InteractiveAdmController {

	private static final Logger logger = LoggerFactory.getLogger(InteractiveAdmController.class);
	
	@RequestMapping(value="/setEmisorasDef", method=RequestMethod.GET)
	@ResponseBody
	public String updateEmia(HttpServletRequest request) {
		logger.info("[Controller]	::	updateEmia	-	[Method]");
		String responseCad = "";
		int responseBin = 1;
		Map params = request.getParameterMap();
		Iterator i = params.keySet().iterator();
		while (i.hasNext()) {
			String key = (String) i.next();
			String value = ( (String[]) params.get(key) )[0];
			responseBin = QuerysOperMap.updateEmiA(key, value);
		}
		if(responseBin == 1){
			responseCad = "Exito.Default";
		} else {
			responseCad = "Fallo.Default";
		}
		return responseCad;
	}
	
	@RequestMapping(value="/setEmisorasSel", method=RequestMethod.GET)
	@ResponseBody
	public String updateEmib(HttpServletRequest request) {
		logger.info("[Controller]	::	updateEmib	-	[Method]");
		String responseCad = "";
		int responseBin = 1;
		Map params = request.getParameterMap();
		Iterator i = params.keySet().iterator();
		while (i.hasNext()) {
			String key = (String) i.next();
			String value = ( (String[]) params.get(key) )[0];
			responseBin = QuerysOperMap.updateEmiB(key, value);
		}
		if (responseBin == 1) {
			responseCad = "Exito.Selected";
		} else {
			responseCad = "Fallo.Selected";
		}
		return responseCad;
	}

}
