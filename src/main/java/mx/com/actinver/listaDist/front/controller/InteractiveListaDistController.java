package mx.com.actinver.listaDist.front.controller;

import java.util.Calendar;
import java.util.Date;
import java.util.TreeMap;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import mx.com.actinver.listaDist.operations.ListaDistOperMap;
import mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO;
import mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO;
import mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO;
import mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO;
import mx.com.actinver.negocio.listasdist.ws.contactos.PerfilTO;

@Controller
@RequestMapping("/InteractiveListaDistController")
public class InteractiveListaDistController {

	private static final Logger logger = LoggerFactory.getLogger(InteractiveListaDistController.class);
	
	@RequestMapping(value="/actionObtainOneCto", method=RequestMethod.GET)
	@ResponseBody
	private TreeMap<String, String> appActionObtainOneCto(HttpServletRequest request, ModelMap map) {
		logger.info("[Controller]	::	appActionObtainOneCto	-	[Method]");
		String numCliente = "";
		String tipoBusqueda = "";
		numCliente = request.getParameter("numCliente");
		tipoBusqueda = request.getParameter("tipoBusqueda");
		ContactoTO[] contactoToArr = {};
		contactoToArr = ListaDistOperMap.consultarContactosXCriteriosMap(Long.valueOf(numCliente), Integer.parseInt(tipoBusqueda));
		TreeMap<String, String> treeMapCto = new TreeMap<String, String>();
		if (contactoToArr.length != 0) {
			for (ContactoTO contactoTO : contactoToArr) {
				//System.out.println(contactoTO.getNumContrato());
				//System.out.println(contactoTO.getIdPerfilVenta().getId());
				treeMapCto.put("nombre", contactoTO.getNombre());
				treeMapCto.put("idEstado", String.valueOf(contactoTO.getEstado().getId()));
				treeMapCto.put("idIdioma", String.valueOf(contactoTO.getIdioma().getId()));
				treeMapCto.put("isCliente", String.valueOf(contactoTO.getIsCliente()));
				
				treeMapCto.put("contenidoAcceso", contactoTO.getContenidoAcceso());
				treeMapCto.put("idContenido", String.valueOf(contactoTO.getIdPerfilVenta().getIdContenido()));
				treeMapCto.put("email", String.valueOf(contactoTO.getEmail()));
				treeMapCto.put("numContrato", String.valueOf(contactoTO.getNumContrato()));
				treeMapCto.put("idPerfilVenta", String.valueOf(contactoTO.getIdPerfilVenta().getId()));
				treeMapCto.put("registrado", String.valueOf(contactoTO.getRegistrado()));
				treeMapCto.put("origenEmail", String.valueOf(contactoTO.getOrigenEmail()));
				treeMapCto.put("numCliente", String.valueOf(contactoTO.getNumCliente()));
			}
		} else if (contactoToArr.length == 0) {
			treeMapCto.put("nombre", "None");
			treeMapCto.put("idEstado", "None");
			treeMapCto.put("idIdioma", "None");
			treeMapCto.put("isCliente", "None");
			
			treeMapCto.put("contenidoAcceso", "None");
			treeMapCto.put("idContenido", "None");
			treeMapCto.put("email", "None");
			treeMapCto.put("numContrato", "None");
			treeMapCto.put("idPerfilVenta", "None");
			treeMapCto.put("registrado", "None");
			treeMapCto.put("origenEmail", "None");
			treeMapCto.put("numCliente", "None");
		}
		//System.out.println("numContrato::"+treeMapCto.get("numContrato")+"::idPerfilVenta::"+treeMapCto.get("idPerfilVenta"));
		return treeMapCto;
	}

	@RequestMapping(value="/actionFormBestProf", method=RequestMethod.GET)
	private String appFormBestProf(HttpServletRequest request, ModelMap map) {
		logger.info("[Controller]	::	appFormBestProf	-	[Method]");
		String viewPage = "";
		viewPage = "/listaDist/formBestProfv0";
		return viewPage;
	}

	@RequestMapping(value="/actionObtainTheTree", method=RequestMethod.GET)
	@ResponseBody
	private String appObtainTheTree(HttpServletRequest request, ModelMap map) {
		logger.info("[Controller]	::	appObtainTheTree	-	[Method]");
		PerfilTO perfilTo = new PerfilTO();
		perfilTo.setId(Long.parseLong(request.getParameter("bestPerfil")));
		perfilTo.setIdContenido(Long.parseLong(request.getParameter("bestIdContenido")));
		ContactoTO contactoTo = new ContactoTO();
		contactoTo.setIdPerfilVenta(perfilTo);
		contactoTo.setNumContrato(Long.parseLong(request.getParameter("bestNumCto")));
		contactoTo.setEmail(request.getParameter("bestEmail"));
		contactoTo.setContenidoAcceso(request.getParameter("bestContenidoAcceso"));
		ContenidoTO[] contenidoTo = {};
		contenidoTo = ListaDistOperMap.consultarListaContenidosMap(contactoTo);
		Gson gson = new Gson();
		String responseStr = "";
		responseStr = gson.toJson(contenidoTo);
		return responseStr;
	}
	
	@RequestMapping(value="/actionUpdateContacto", method=RequestMethod.GET)
	@ResponseBody
	private String appUpdateContacto(HttpServletRequest request, ModelMap map){
		logger.info("[Controller]	::	appUpdateContacto	-	[Method]");
		Calendar calendar = Calendar.getInstance();
		int crDay = calendar.get(Calendar.DAY_OF_MONTH);
		int crMonth = calendar.get(Calendar.MONTH);
		int crYear = calendar.get(Calendar.YEAR);
		String crDayStr = Integer.toString(crDay);
		String crMonthStr = Integer.toString(crMonth); 
		crDayStr = (crDay < 10) ? ("0"+crDayStr) : crDayStr;
		crMonthStr = (crMonth < 10) ? ("0"+crMonthStr) : crMonthStr;
		String crDate = crDayStr+"/"+crMonthStr+"/"+crYear;
//			System.out.println("bestRegistrado::"+request.getParameter("bestRegistrado"));
//			System.out.println("bestNombre::"+request.getParameter("bestNombre"));
//			System.out.println("bestIdEstado::"+request.getParameter("bestIdEstado"));
//			System.out.println("bestIdIdioma::"+request.getParameter("bestIdIdioma"));
//			System.out.println("bestIsCliente::"+request.getParameter("bestIsCliente"));
//			System.out.println("bestPerfil::"+request.getParameter("bestPerfil"));
//			System.out.println("bestNumCto::"+request.getParameter("bestNumCto"));
//			System.out.println("bestEmail::"+request.getParameter("bestEmail"));
//			System.out.println("bestIdContenido::"+request.getParameter("bestIdContenido"));
//			System.out.println("bestContenidoAcceso::"+request.getParameter("bestContenidoAcceso"));
//			System.out.println("bestFechaCreacion::"+crDate);
//			System.out.println("bestNuevoEmail::"+request.getParameter("bestNuevoEmail"));
//			System.out.println("***Inicia Nuevos***");
//			System.out.println("bestTerminos::"+request.getParameter("bestTerminos"));
//			System.out.println("bestFechaModificacion::"+calendar);
//			System.out.println("bestOrigenMod::"+request.getParameter("bestOrigenMod"));
//			System.out.println("bestOrigenEmail::"+request.getParameter("bestOrigenEmail"));
//			System.out.println("***Fin Nuevos***");
		ContactoTO contactoTo = new ContactoTO();
		contactoTo.setRegistrado(Integer.parseInt(request.getParameter("bestRegistrado")));
		contactoTo.setOrigenEmail(request.getParameter("bestOrigenEmail"));
		contactoTo.setNombre(request.getParameter("bestNombre"));
			EstadoTO estadoTo = new EstadoTO();
			estadoTo.setId(Long.parseLong(request.getParameter("bestIdEstado")));
		contactoTo.setEstado(estadoTo);
			IdiomaTO idiomaTo = new IdiomaTO();
			idiomaTo.setId(Long.parseLong(request.getParameter("bestIdIdioma")));
		contactoTo.setIdioma(idiomaTo);
		contactoTo.setIsCliente(Integer.parseInt(request.getParameter("bestIsCliente")));
			PerfilTO perfilTo = new PerfilTO();
			perfilTo.setId(Long.parseLong(request.getParameter("bestPerfil")));
			perfilTo.setIdContenido(Long.parseLong(request.getParameter("bestIdContenido")));
		contactoTo.setIdPerfilVenta(perfilTo);
		contactoTo.setNumContrato(Long.valueOf(request.getParameter("bestNumCto")));
		contactoTo.setEmail(request.getParameter("bestEmail"));
		contactoTo.setContenidoAcceso(request.getParameter("bestContenidoAcceso"));
		contactoTo.setFechaCreacion(crDate);
		contactoTo.setNuevoEmail(request.getParameter("bestNuevoEmail"));
		contactoTo.setAvisoPrivacidad(Boolean.valueOf(request.getParameter("bestTerminos")));
		contactoTo.setFechaAviso(calendar);
		contactoTo.setActualizadoPor(request.getParameter("bestOrigenMod"));
		Boolean response; // = false; 
		response = ListaDistOperMap.actualizarContactoClienteMap(contactoTo);
		return response.toString();
	}

	@RequestMapping(value="/actionInsertContacto", method=RequestMethod.GET)
	@ResponseBody
	private String appInsertContacto(HttpServletRequest request, ModelMap map){
		logger.info("[Controller]	::	appInsertContacto	-	[Method]");
		System.out.println("[Controller]	::	appInsertContacto	-	[Method]");
		Calendar calendar = Calendar.getInstance();
		int crDay = calendar.get(Calendar.DAY_OF_MONTH);
		int crMonth = calendar.get(Calendar.MONTH);
		int crYear = calendar.get(Calendar.YEAR);
		String crDayStr = Integer.toString(crDay);
		String crMonthStr = Integer.toString(crMonth); 
		crDayStr = (crDay < 10) ? ("0"+crDayStr) : crDayStr;
		crMonthStr = (crMonth < 10) ? ("0"+crMonthStr) : crMonthStr;
		String crDate = crDayStr+"/"+crMonthStr+"/"+crYear;
		ContactoTO contactoTo = new ContactoTO();
		//contactoTo.setRegistrado(Integer.parseInt(request.getParameter("bestRegistrado")));
		contactoTo.setOrigenEmail(request.getParameter("bestOrigenEmail"));
		contactoTo.setNombre(request.getParameter("bestNombre"));
		EstadoTO estadoTo = new EstadoTO();
		estadoTo.setId(Long.parseLong(request.getParameter("bestIdEstado")));
		contactoTo.setEstado(estadoTo);
		IdiomaTO idiomaTo = new IdiomaTO();
		idiomaTo.setId(Long.parseLong(request.getParameter("bestIdIdioma")));
		contactoTo.setIdioma(idiomaTo);
		contactoTo.setIsCliente(Integer.parseInt(request.getParameter("bestIsCliente")));
		PerfilTO perfilTo = new PerfilTO();
		perfilTo.setId(Long.parseLong(request.getParameter("bestPerfil")));
		perfilTo.setIdContenido(Long.parseLong(request.getParameter("bestIdContenido")));
		contactoTo.setIdPerfilVenta(perfilTo);
		contactoTo.setNumContrato(Long.valueOf(request.getParameter("bestNumCto")));
		contactoTo.setNumCliente(Long.valueOf(request.getParameter("bestNumCliente")));
		contactoTo.setEmail(request.getParameter("bestEmail"));
		contactoTo.setContenidoAcceso(request.getParameter("bestContenidoAcceso"));
		contactoTo.setFechaCreacion(crDate);
		contactoTo.setNuevoEmail(request.getParameter("bestNuevoEmail"));
		contactoTo.setAvisoPrivacidad(Boolean.valueOf(request.getParameter("bestTerminos")));
		contactoTo.setFechaAviso(calendar);
		contactoTo.setActualizadoPor(request.getParameter("bestOrigenMod"));
		Boolean response = false; 
		response = ListaDistOperMap.registrarContactoClienteMap(contactoTo);
		return response.toString();
	}
	
}
