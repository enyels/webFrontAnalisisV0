package mx.com.actinver.analisis.front.controller;

import javax.servlet.http.HttpServletRequest;

import mx.com.actinver.analisis.operations.QuerysOperMap;
import mx.com.actinver.analisis.vo.EmisorasNaList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AdmAppsController {

	private static final Logger logger = LoggerFactory.getLogger(AdmAppsController.class);
	
	@RequestMapping(value="/admTickerv0", method=RequestMethod.GET)
	public String appAdmTicker(HttpServletRequest request, ModelMap modelMAp) {
		logger.info("[Controller]	::	appAdmTicker	-	[Method]");
		String viewPage = "";
		
		EmisorasNaList defListEmNa = new EmisorasNaList();
		EmisorasNaList selListEmNa = new EmisorasNaList();
		
		defListEmNa = QuerysOperMap.defaultEmnaTicker();
		selListEmNa = QuerysOperMap.selectedEmnaTicker();
		
		modelMAp.addAttribute("listEmDef", defListEmNa);
		modelMAp.addAttribute("listEmSel", selListEmNa);
		viewPage = "/admin/admTickerv0";
		return viewPage;
	}
	
}
