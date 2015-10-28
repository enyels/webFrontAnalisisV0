package mx.com.actinver.listaDist.operations;

import java.net.MalformedURLException;
import java.net.URL;
import java.rmi.RemoteException;
import java.util.ResourceBundle;

import javax.xml.rpc.ServiceException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO;
import mx.com.actinver.negocio.listasdist.ws.contactos.ContactosWS_PortType;
import mx.com.actinver.negocio.listasdist.ws.contactos.ContactosWS_ServiceLocator;
import mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO;
import mx.com.actinver.negocio.listasdist.ws.contactos.CriteriosContactosTO;
import mx.com.actinver.negocio.listasdist.ws.contactos.Exception;

public class ListaDistOperMap {

	private static final Logger logger = LoggerFactory.getLogger(ListaDistOperMap.class);
	
	/*
	 * Consulta Contrato X tipo de Busqueda
	 * Ws :: /ws/contactos
	 * Method :: consultarContactosXCriterios
	 */
	public static ContactoTO[] consultarContactosXCriteriosMap (Long numCliente, int tipoBusqueda){
		ResourceBundle rb = ResourceBundle.getBundle("listasDist");
		ContactoTO[] contactoToArr = {};
		try {
			URL url = new URL(rb.getString("URLWS_CTTS_LOC"));
			ContactosWS_ServiceLocator locator = new ContactosWS_ServiceLocator();
			ContactosWS_PortType porType = locator.getContactosWSPort(url);
			CriteriosContactosTO criteriosCttosTo = new CriteriosContactosTO();
			criteriosCttosTo.setNumCliente(numCliente);
			criteriosCttosTo.setTipoBusqueda(tipoBusqueda);
			contactoToArr = porType.consultarContactosXCriterios(criteriosCttosTo);
		} catch (MalformedURLException e) {
			logger.info("[Controller]	::	consultarContactosXCriteriosMap	-	[Method] - "+e.getMessage());
		} catch (ServiceException e) {
			logger.info("[Controller]	::	consultarContactosXCriteriosMap	-	[Method] - "+e.getMessage());
		} catch (Exception e) {
			logger.info("[Controller]	::	consultarContactosXCriteriosMap	-	[Method] - "+e.getMessage());
		} catch (RemoteException e) {
			logger.info("[Controller]	::	consultarContactosXCriteriosMap	-	[Method] - "+e.getMessage());
		}
		return contactoToArr;
	}
	
	/*
	 * Consulta Lista de contenidos (Arbol)
	 * Ws :: /ws/contactos
	 * Method :: consultarListaContenidos
	 */
	public static ContenidoTO[] consultarListaContenidosMap(ContactoTO contactTo) {
//		System.out.println("Email::"+contactTo.getEmail());
//		System.out.println("ContenidoAcceso::"+contactTo.getContenidoAcceso());
//		System.out.println("NumContrato::"+contactTo.getNumContrato());
//		System.out.println("PerfilVenta::Id::"+contactTo.getIdPerfilVenta().getId());
//		System.out.println("PerfilVenta::IdContenido::"+contactTo.getIdPerfilVenta().getIdContenido());
		ResourceBundle rb = ResourceBundle.getBundle("listasDist");
		ContenidoTO[] contenidoTo = {};
		try {
			URL url = new URL(rb.getString("URLWS_CTTS_LOC"));
			ContactosWS_ServiceLocator locator = new ContactosWS_ServiceLocator();
			ContactosWS_PortType porType = locator.getContactosWSPort(url);
			contenidoTo = porType.consultarListaContenidos(contactTo); 
		} catch (MalformedURLException e) {
			logger.info("[Controller]	::	consultarListaContenidosMap	-	[Method] - "+e.getMessage());
		} catch (ServiceException e) {
			logger.info("[Controller]	::	consultarListaContenidosMap	-	[Method] - "+e.getMessage());
		} catch (Exception e) {
			logger.info("[Controller]	::	consultarListaContenidosMap	-	[Method] - "+e.getMessage());
		} catch (RemoteException e) {
			logger.info("[Controller]	::	consultarListaContenidosMap	-	[Method] - "+e.getMessage());
		}
		return contenidoTo;
	}
	
	/*
	 * Actualizar Contacto cliente
	 * Ws :: /ws/contactos
	 * Method :: actualizarContactoCliente
	 */
	public static Boolean actualizarContactoClienteMap(ContactoTO contactoTo) {
		ResourceBundle rb = ResourceBundle.getBundle("listasDist");
		Boolean response = null;
		try {
			URL url = new URL(rb.getString("URLWS_CTTS_LOC"));
			ContactosWS_ServiceLocator locator = new ContactosWS_ServiceLocator();
			ContactosWS_PortType porType = locator.getContactosWSPort(url);
			response = porType.actualizarContactoCliente(contactoTo);
		} catch (MalformedURLException e) {
			logger.info("[Controller]	::	actualizarContactoClienteMap	-	[Method] - "+e.getMessage());
		} catch (ServiceException e) {
			logger.info("[Controller]	::	actualizarContactoClienteMap	-	[Method] - "+e.getMessage());
		} catch (Exception e) {
			logger.info("[Controller]	::	actualizarContactoClienteMap	-	[Method] - "+e.getMessage());
		} catch (RemoteException e) {
			logger.info("[Controller]	::	actualizarContactoClienteMap	-	[Method] - "+e.getMessage());
		}
		return response;
	}

	/*
	 * Registrar Contacto cliente
	 * Ws :: /ws/contactos
	 * Method :: actualizarContactoCliente
	 */
	public static Boolean registrarContactoClienteMap(ContactoTO contactoTo) {
		ResourceBundle rb = ResourceBundle.getBundle("listasDist");
		Boolean response = null;
		try {
			URL url = new URL(rb.getString("URLWS_CTTS_LOC"));
			ContactosWS_ServiceLocator locator = new ContactosWS_ServiceLocator();
			ContactosWS_PortType porType = locator.getContactosWSPort(url);
			response = porType.registrarContactoCliente(contactoTo);
		} catch (MalformedURLException e) {
			logger.info("[Controller]	::	registrarContactoClienteMap	-	[Method] - "+e.getMessage());
		} catch (ServiceException e) {
			logger.info("[Controller]	::	registrarContactoClienteMap	-	[Method] - "+e.getMessage());
		} catch (Exception e) {
			logger.info("[Controller]	::	registrarContactoClienteMap	-	[Method] - "+e.getMessage());
		} catch (RemoteException e) {
			logger.info("[Controller]	::	registrarContactoClienteMap	-	[Method] - "+e.getMessage());
		}
		return response;
	}
	
}
