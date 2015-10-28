/**
 * ContactosWS_ServiceLocator.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package mx.com.actinver.negocio.listasdist.ws.contactos;

public class ContactosWS_ServiceLocator extends org.apache.axis.client.Service implements mx.com.actinver.negocio.listasdist.ws.contactos.ContactosWS_Service {

    public ContactosWS_ServiceLocator() {
    }


    public ContactosWS_ServiceLocator(org.apache.axis.EngineConfiguration config) {
        super(config);
    }

    public ContactosWS_ServiceLocator(java.lang.String wsdlLoc, javax.xml.namespace.QName sName) throws javax.xml.rpc.ServiceException {
        super(wsdlLoc, sName);
    }

    // Use to get a proxy class for ContactosWSPort
    private java.lang.String ContactosWSPort_address = "http://172.16.4.231:9080/webservice.listasdist.actinver/ws/contactos";

    public java.lang.String getContactosWSPortAddress() {
        return ContactosWSPort_address;
    }

    // The WSDD service name defaults to the port name.
    private java.lang.String ContactosWSPortWSDDServiceName = "ContactosWSPort";

    public java.lang.String getContactosWSPortWSDDServiceName() {
        return ContactosWSPortWSDDServiceName;
    }

    public void setContactosWSPortWSDDServiceName(java.lang.String name) {
        ContactosWSPortWSDDServiceName = name;
    }

    public mx.com.actinver.negocio.listasdist.ws.contactos.ContactosWS_PortType getContactosWSPort() throws javax.xml.rpc.ServiceException {
       java.net.URL endpoint;
        try {
            endpoint = new java.net.URL(ContactosWSPort_address);
        }
        catch (java.net.MalformedURLException e) {
            throw new javax.xml.rpc.ServiceException(e);
        }
        return getContactosWSPort(endpoint);
    }

    public mx.com.actinver.negocio.listasdist.ws.contactos.ContactosWS_PortType getContactosWSPort(java.net.URL portAddress) throws javax.xml.rpc.ServiceException {
        try {
            mx.com.actinver.negocio.listasdist.ws.contactos.ContactosWSPortBindingStub _stub = new mx.com.actinver.negocio.listasdist.ws.contactos.ContactosWSPortBindingStub(portAddress, this);
            _stub.setPortName(getContactosWSPortWSDDServiceName());
            return _stub;
        }
        catch (org.apache.axis.AxisFault e) {
            return null;
        }
    }

    public void setContactosWSPortEndpointAddress(java.lang.String address) {
        ContactosWSPort_address = address;
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        try {
            if (mx.com.actinver.negocio.listasdist.ws.contactos.ContactosWS_PortType.class.isAssignableFrom(serviceEndpointInterface)) {
                mx.com.actinver.negocio.listasdist.ws.contactos.ContactosWSPortBindingStub _stub = new mx.com.actinver.negocio.listasdist.ws.contactos.ContactosWSPortBindingStub(new java.net.URL(ContactosWSPort_address), this);
                _stub.setPortName(getContactosWSPortWSDDServiceName());
                return _stub;
            }
        }
        catch (java.lang.Throwable t) {
            throw new javax.xml.rpc.ServiceException(t);
        }
        throw new javax.xml.rpc.ServiceException("There is no stub implementation for the interface:  " + (serviceEndpointInterface == null ? "null" : serviceEndpointInterface.getName()));
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(javax.xml.namespace.QName portName, Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        if (portName == null) {
            return getPort(serviceEndpointInterface);
        }
        java.lang.String inputPortName = portName.getLocalPart();
        if ("ContactosWSPort".equals(inputPortName)) {
            return getContactosWSPort();
        }
        else  {
            java.rmi.Remote _stub = getPort(serviceEndpointInterface);
            ((org.apache.axis.client.Stub) _stub).setPortName(portName);
            return _stub;
        }
    }

    public javax.xml.namespace.QName getServiceName() {
        return new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "ContactosWS");
    }

    private java.util.HashSet ports = null;

    public java.util.Iterator getPorts() {
        if (ports == null) {
            ports = new java.util.HashSet();
            ports.add(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "ContactosWSPort"));
        }
        return ports.iterator();
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(java.lang.String portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        
if ("ContactosWSPort".equals(portName)) {
            setContactosWSPortEndpointAddress(address);
        }
        else 
{ // Unknown Port Name
            throw new javax.xml.rpc.ServiceException(" Cannot set Endpoint Address for Unknown Port" + portName);
        }
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(javax.xml.namespace.QName portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        setEndpointAddress(portName.getLocalPart(), address);
    }

}
