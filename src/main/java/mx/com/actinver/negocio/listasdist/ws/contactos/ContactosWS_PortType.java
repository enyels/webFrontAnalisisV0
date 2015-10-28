/**
 * ContactosWS_PortType.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package mx.com.actinver.negocio.listasdist.ws.contactos;

public interface ContactosWS_PortType extends java.rmi.Remote {
    public mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO[] consultarContactosXCriterios(mx.com.actinver.negocio.listasdist.ws.contactos.CriteriosContactosTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception;
    public mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO[] consultarIdiomas() throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception;
    public boolean registrarContactoCliente(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception;
    public boolean consultarContactoExiste(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception;
    public mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO[] consultarListaContenidos(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception;
    public mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO registrarContactoNoCliente(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception;
    public boolean consultaContactoNoClienteExiste(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception;
    public mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO[] consultarEstados() throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception;
    public boolean actualizarContactoCliente(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception;
    public boolean actualizarContactoNoCliente(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception;
    public mx.com.actinver.negocio.listasdist.ws.contactos.TipoUsuarioTO[] consultaNiveles() throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception;
}
