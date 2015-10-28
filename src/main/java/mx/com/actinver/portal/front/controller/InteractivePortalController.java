package mx.com.actinver.portal.front.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.TreeMap;

import javax.servlet.http.HttpServletRequest;

import mx.com.actinver.analisis.operations.QuerysOperMap;
import mx.com.actinver.portal.operations.PortalOperMap;
import mx.com.actinver.portal.vo.ActiveNeto;
import mx.com.actinver.portal.vo.EmisoraPeso;
import mx.com.actinver.portal.vo.Graphics;
import mx.com.actinver.portal.vo.RetornoSmrt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/InteractivePortalController")
public class InteractivePortalController {

	private static final Logger logger = LoggerFactory.getLogger(InteractivePortalController.class);
	
	@RequestMapping(value="/actionReadExcelData", method=RequestMethod.GET)
	@ResponseBody
	public TreeMap<String, Double> appActionReadExcelData(HttpServletRequest request, Model model) {
		logger.info("[Controller]	::	appActionReadExcelData	-	[Method]");
		TreeMap<String, Double> chartTreeMap = new TreeMap<String, Double>();
		chartTreeMap = PortalOperMap.readFileXlsPortal();
		return chartTreeMap;
	}
	
	@RequestMapping(value="/actionAllActivNet", method=RequestMethod.GET)
	@ResponseBody
	public List<ActiveNeto> appActionAllActivNet(HttpServletRequest request, ModelMap modelMap) {
		List<ActiveNeto> listActNet = new ArrayList<ActiveNeto>();
		listActNet = PortalOperMap.readFileXlsPortalActiveNeto();
		return listActNet;
	}

	@RequestMapping(value="/actionAllEmNaOptDel", method=RequestMethod.GET)
	@ResponseBody
	public String appActionAllEmNaOptDel(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	actionAllEmNaOptDel	-	[Method]");
		ResponseEntity<String> response;
		response = QuerysOperMap.obtainAllEmNaOptDel();
		return response.getBody();
	}
	
	@RequestMapping(value="/actionReadExcelDataGrp", method=RequestMethod.GET)
	@ResponseBody
	public List<Graphics> actionReadExcelDataGrp(HttpServletRequest request, Model model) {
		logger.info("[Controller]	::	actionReadExcelDataGrp	-	[Method]");
		List<Graphics> ListobjGraphics = new ArrayList<Graphics>();
		ListobjGraphics = PortalOperMap.readFileXlsPortalGraficaSmartrc();		
		return ListobjGraphics;
	}
	
	@RequestMapping(value="/actionReadExcelDataGrpA", method=RequestMethod.GET)
	@ResponseBody
	public List<Graphics> actionReadExcelDataGrpA(HttpServletRequest request, Model model) {
		logger.info("[Controller]	::	actionReadExcelDataGrpA	-	[Method]");
		List<Graphics> ListobjGraphics = new ArrayList<Graphics>();
		ListobjGraphics = PortalOperMap.readFileXlsPortalGraficaAngel();	
		return ListobjGraphics;
	}	
	
	@RequestMapping(value="/actionReadExcelDataGrpD", method=RequestMethod.GET)
	@ResponseBody
	public List<Graphics> actionReadExcelDataGrpD(HttpServletRequest request, Model model) {
		logger.info("[Controller]	::	actionReadExcelDataGrpD	-	[Method]");
		List<Graphics> ListobjGraphics = new ArrayList<Graphics>();		
		ListobjGraphics = PortalOperMap.readFileXlsPortalGraficaDiablo();
		return ListobjGraphics;
	}	
	
	@RequestMapping(value="/actionReadExcelDataETF", method=RequestMethod.GET)
	@ResponseBody
	public List<EmisoraPeso> actionReadExcelDataETF(HttpServletRequest request, Model model) {
		logger.info("[Controller]	::	actionReadExcelDataETF	-	[Method]");
		List<EmisoraPeso> ListobjEmisoraPeso = new ArrayList<EmisoraPeso>();	
		ListobjEmisoraPeso = PortalOperMap.readFileXlsPortalETF();
		return ListobjEmisoraPeso;
	}
	

	@RequestMapping(value="/actionReadExcelDesempSmartrac", method=RequestMethod.GET)
	@ResponseBody
	public List<RetornoSmrt> actionReadExcelDesempSmartrac(HttpServletRequest request, Model model) {
		logger.info("[Controller]	::	appActionReadExcelData	-	[Method]");
		List<RetornoSmrt> ListobjSmrt = new ArrayList<RetornoSmrt>();
		ListobjSmrt = PortalOperMap.readFileXlsPortalSmartrcRetorno();
		return ListobjSmrt;
	}	
	
	@RequestMapping(value="/actionReadExcelDesempAD", method=RequestMethod.GET)
	@ResponseBody
	public List<RetornoSmrt> actionReadExcelDesempAD(HttpServletRequest request, Model model) {
		logger.info("[Controller]	::	appActionReadExcelData	-	[Method]");
		List<RetornoSmrt> ListobjSmrt = new ArrayList<RetornoSmrt>();
		ListobjSmrt = PortalOperMap.readFileXlsPortalAYDRetorno();
		return ListobjSmrt;
	}	
	
}
