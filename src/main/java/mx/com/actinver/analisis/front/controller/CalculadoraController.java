package mx.com.actinver.analisis.front.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import mx.com.actinver.analisis.bo.Emisora;
import mx.com.actinver.analisis.bo.InfoFinanciera;
import mx.com.actinver.analisis.bo.InfoFinancieraFib;
import mx.com.actinver.analisis.bo.Operatividad;
import mx.com.actinver.analisis.bo.OperatividadFib;
import mx.com.actinver.analisis.bo.Variaciones;
import mx.com.actinver.analisis.bo.VariacionesList;
import mx.com.actinver.analisis.operations.OperQueryBackRest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/CalculadoraController")
public class CalculadoraController {
	public static final Logger logger = LoggerFactory.getLogger(CalculadoraController.class);
	
	
	@RequestMapping(value="/getVariationsCalcu", method=RequestMethod.GET)
	@ResponseBody
	public Variaciones getVariationsCalcu(HttpServletRequest request) {
		logger.info("[Controller]	::	getVariationsCalcu	-	[Method]");
		String emisora=request.getParameter("emisora");
		String serie=request.getParameter("serie");
		logger.info("[Controller]	::	emisora	-	[parameter]"+emisora);
		logger.info("[Controller]	::	serie	-	[parameter]"+serie);
		Variaciones	responseBin = OperQueryBackRest.getVariationCalcu(emisora,serie);
		return responseBin;
	}
	
	@RequestMapping(value="/getCompanyNameCalcu", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getCompanyNameCalcu(HttpServletRequest request) {
		logger.info("[Controller]	::	getCompanyNameCalcu	-	[Method]");
		Object[] responseBin = OperQueryBackRest.CompanyNameCalcu();
		return responseBin;
	}
	
	
	@RequestMapping(value="/getOperatividadCalcu", method=RequestMethod.GET)
	@ResponseBody
	public Operatividad getOperatividadCalcu(HttpServletRequest request) {
		logger.info("[Controller]	::	getOperatividadCalcu	-	[Method]");
		String emisora=request.getParameter("emisora");
		String serie=request.getParameter("serie");
		
		logger.info("[Controller]	::	emisora	-	[parameter]"+emisora);
		logger.info("[Controller]	::	serie	-	[parameter]"+serie);

		Operatividad	responseBin = OperQueryBackRest.getOperatividadCalcu(emisora,serie);
		return responseBin;
		
	}
	@RequestMapping(value="/getInfoFinancieraCalcu", method=RequestMethod.GET)
	@ResponseBody
	public InfoFinanciera getInfoFinancieraCalcu(HttpServletRequest request) {
		logger.info("[Controller]	::	getInfoFinancieraCalcu	-	[Method]");
		String emisora=request.getParameter("emisora");
		String serie=request.getParameter("serie");
		logger.info("[Controller]	::	emisora	-	[parameter]"+emisora);
		logger.info("[Controller]	::	serie	-	[parameter]"+serie);
		InfoFinanciera	responseBin = OperQueryBackRest.getInfoFinancieraCalcu(emisora,serie);
		return responseBin;
		
	}
	
	
	
	//calculadora  financiera

	@RequestMapping(value="/getVariationsCalcuFin", method=RequestMethod.GET)
	@ResponseBody
	public Variaciones getVariationsCalcuFin(HttpServletRequest request) {
		logger.info("[Controller]	::	getVariationsCalcu	-	[Method]");
		String emisora=request.getParameter("emisora");
		String serie=request.getParameter("serie");
		logger.info("[Controller]	::	emisora	-	[parameter]"+emisora);
		logger.info("[Controller]	::	serie	-	[parameter]"+serie);
		Variaciones	responseBin = OperQueryBackRest.getVariationCalcuFin(emisora,serie);
		return responseBin;
		
	}
	
	@RequestMapping(value="/getCompanyNameCalcuFin", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getCompanyNameCalcuFin(HttpServletRequest request) {
		logger.info("[Controller]	::	getCompanyNameCalcu	-	[Method]");
		Object[] responseBin = OperQueryBackRest.CompanyNameCalcuFin();
		return responseBin;
		
	}
	
	
	@RequestMapping(value="/getOperatividadCalcuFin", method=RequestMethod.GET)
	@ResponseBody
	public Operatividad getOperatividadCalcuFin(HttpServletRequest request) {
		logger.info("[Controller]	::	getOperatividadCalcu	-	[Method]");
		String emisora=request.getParameter("emisora");
		String serie=request.getParameter("serie");
		
		logger.info("[Controller]	::	emisora	-	[parameter]"+emisora);
		logger.info("[Controller]	::	serie	-	[parameter]"+serie);

		Operatividad	responseBin = OperQueryBackRest.getOperatividadCalcuFin(emisora,serie);
		return responseBin;
		
	}
	@RequestMapping(value="/getInfoFinancieraCalcuFin", method=RequestMethod.GET)
	@ResponseBody
	public InfoFinanciera getInfoFinancieraCalcuFin(HttpServletRequest request) {
		logger.info("[Controller]	::	getInfoFinancieraCalcu	-	[Method]");
		String emisora=request.getParameter("emisora");
		String serie=request.getParameter("serie");
		logger.info("[Controller]	::	emisora	-	[parameter]"+emisora);
		logger.info("[Controller]	::	serie	-	[parameter]"+serie);
		InfoFinanciera	responseBin = OperQueryBackRest.getInfoFinancieraCalcuFin(emisora,serie);
		return responseBin;
		
	}
	@RequestMapping(value="/formCalculadora", method=RequestMethod.GET)
	public String appFormCalculadora(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	formCalculadora	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/formCalculadora";
		logger.info(viewPage);
		return viewPage;
	}
	
	
	@RequestMapping(value="/getCompanyNameCalcuFib", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getCompanyNameCalcuFib(HttpServletRequest request) {
		logger.info("[Controller]	::	getCompanyNameCalcu	-	[Method]");
		Object[] responseBin = OperQueryBackRest.CompanyNameCalcuFib();
		return responseBin;
		
	}
	
	
	@RequestMapping(value="/getOperatividadCalcuFib", method=RequestMethod.GET)
	@ResponseBody
	public OperatividadFib getOperatividadCalcuFib(HttpServletRequest request) {
		logger.info("[Controller]	::	getOperatividadCalcuFib	-	[Method]");
		String emisora=request.getParameter("emisora");
		String serie=request.getParameter("serie");
		
		logger.info("[Controller]	::	emisora	-	[parameter]"+emisora);
		logger.info("[Controller]	::	serie	-	[parameter]"+serie);

		OperatividadFib	responseBin = OperQueryBackRest.getOperatividadCalcuFib(emisora,serie);
		return responseBin;
	}
	
	@RequestMapping(value="/getVariationsCalcuFib", method=RequestMethod.GET)
	@ResponseBody
	public Variaciones getVariationsCalcuFib(HttpServletRequest request) {
		logger.info("[Controller]	::	getVariationsCalcu	-	[Method]");
		String emisora=request.getParameter("emisora");
		String serie=request.getParameter("serie");
		logger.info("[Controller]	::	emisora	-	[parameter]"+emisora);
		logger.info("[Controller]	::	serie	-	[parameter]"+serie);
		Variaciones	responseBin = OperQueryBackRest.getVariationsCalcuFib(emisora,serie);
		return responseBin;
		
	}
	//getInfofinancieraFib
	@RequestMapping(value="/getInfofinancieraFib", method=RequestMethod.GET)
	@ResponseBody
	public InfoFinancieraFib getInfofinancieraFib(HttpServletRequest request) {
		logger.info("[Controller]	::	getInfofinancieraFib	-	[Method]");
		String emisora=request.getParameter("emisora");
		String serie=request.getParameter("serie");
		logger.info("[Controller]	::	emisora	-	[parameter]"+emisora);
		logger.info("[Controller]	::	serie	-	[parameter]"+serie);
		InfoFinancieraFib	responseBin = OperQueryBackRest.getInfofinancieraFib(emisora,serie);
		return responseBin;
		
	}
	
}
