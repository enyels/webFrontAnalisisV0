package mx.com.actinver.listaDist.front.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class StandAloneListaDistController {

	@RequestMapping(value="/homeListaDv0", method=RequestMethod.GET)
	public String appsHomeListaDv0(HttpServletRequest request, ModelMap map) {
		String viewPage = "";
		viewPage = "/listaDist/homeListaDv0";
		return viewPage;
	}
	
}
