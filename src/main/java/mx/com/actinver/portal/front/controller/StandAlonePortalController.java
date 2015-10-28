package mx.com.actinver.portal.front.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import mx.com.actinver.portal.operations.PortalOperMap;
import mx.com.actinver.portal.vo.EmisoraPeso;
import mx.com.actinver.portal.vo.RetornoSmrt;
import mx.com.actinver.portal.vo.TracsTopTen;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class StandAlonePortalController {

	@RequestMapping(value="/smartTracv0", method=RequestMethod.GET)
	public String appSmartTracv0(HttpServletRequest request, Model model){
		String viewPage = "";
		viewPage = "/portalAct/smartTracv0";
		return viewPage;
	}
	
	@RequestMapping(value="/mainStationv0", method=RequestMethod.GET)
	public String appMainStationv0(HttpServletRequest request, ModelMap modelMap){
		String viewPage = "";
		List<TracsTopTen> listObjTopTen = new ArrayList<TracsTopTen>();
		listObjTopTen = PortalOperMap.readFileXlsPortalTopTen();
		modelMap.addAttribute("listTopTen", listObjTopTen);
		viewPage = "/portalAct/mainStationv0";
		return viewPage;
	}
	
	@RequestMapping(value="/activoNetov0", method=RequestMethod.GET)
	public String appactivoNetov0(HttpServletRequest request, Model model){
		String viewPage = "";
		viewPage = "/portalAct/activoNetov0";
		return viewPage;
	}

	@RequestMapping(value="/navValuev0", method=RequestMethod.GET)
	public String appNavValuev0(HttpServletRequest request, Model model){
		String viewPage = "";
		viewPage = "/portalAct/navValuev0";
		return viewPage;
	}
	
	@RequestMapping(value="/graphValuev0", method=RequestMethod.GET)
	public String appgraphValuev0(HttpServletRequest request, Model model){
		String viewPage = "";
		viewPage = "/portalAct/graphValuev0";
		return viewPage;
	}	
	
	@RequestMapping(value="/graphValuevA0", method=RequestMethod.GET)
	public String appgraphValuevad0(HttpServletRequest request, Model model){
		String viewPage = "";
		viewPage = "/portalAct/graphValuevA0";
		return viewPage;
	}
	
	@RequestMapping(value="/graphValuevD0", method=RequestMethod.GET)
	public String appgraphValuevD0(HttpServletRequest request, Model model){
		String viewPage = "";
		viewPage = "/portalAct/graphValuevD0";
		return viewPage;
	}
	
	@RequestMapping(value="/etfValuev0", method=RequestMethod.GET)
	public String appetfValuev0(HttpServletRequest request, Model model){
		String viewPage = "";		
		List<EmisoraPeso> ListobjEmisoraPeso = new ArrayList<EmisoraPeso>();	
		ListobjEmisoraPeso = PortalOperMap.readFileXlsPortalETF();
		model.addAttribute("listETF", ListobjEmisoraPeso);
		viewPage = "/portalAct/etfValuev0";
		return viewPage;
	}

	@RequestMapping(value="/renForSmarv0", method=RequestMethod.GET)
	public String appRenForSmarv0(HttpServletRequest request, ModelMap modelMap){
		String viewPage = "";
		List<RetornoSmrt> listObjRetornoSmrt = new ArrayList<RetornoSmrt>();
		listObjRetornoSmrt = PortalOperMap.readFileXlsPortalSmartrcRetorno();
		modelMap.addAttribute("listObjRetornoSmrt", listObjRetornoSmrt);
		viewPage = "/portalAct/renForSmarv0";
		return viewPage;
	}
	
	@RequestMapping(value="/performBurAngv0", method=RequestMethod.GET)
	public String appPerformBurAngv0(HttpServletRequest request, ModelMap modelMap){
		String viewPage = "";
		List<RetornoSmrt> listObjRetornoAD = new ArrayList<RetornoSmrt>();
		listObjRetornoAD = PortalOperMap.readFileXlsPortalAYDRetorno();
		modelMap.addAttribute("listObjRetornoAD", listObjRetornoAD);
		viewPage = "/portalAct/performBurAngv0";
		return viewPage;
	}
	
	@RequestMapping(value="/performBurDiabv0", method=RequestMethod.GET)
	public String appPerformBurDiabv0(HttpServletRequest request, ModelMap modelMap){
		String viewPage = "";
		List<RetornoSmrt> listObjRetornoD = new ArrayList<RetornoSmrt>();
		listObjRetornoD = PortalOperMap.readFileXlsPortalDRetorno();
		modelMap.addAttribute("listObjRetornoD", listObjRetornoD);
		viewPage = "/portalAct/performBurDiabv0";
		return viewPage;
	}
	
}
