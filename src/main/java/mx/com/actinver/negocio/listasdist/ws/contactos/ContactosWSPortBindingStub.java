/**
 * ContactosWSPortBindingStub.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package mx.com.actinver.negocio.listasdist.ws.contactos;

public class ContactosWSPortBindingStub extends org.apache.axis.client.Stub implements mx.com.actinver.negocio.listasdist.ws.contactos.ContactosWS_PortType {
    private java.util.Vector cachedSerClasses = new java.util.Vector();
    private java.util.Vector cachedSerQNames = new java.util.Vector();
    private java.util.Vector cachedSerFactories = new java.util.Vector();
    private java.util.Vector cachedDeserFactories = new java.util.Vector();

    static org.apache.axis.description.OperationDesc [] _operations;

    static {
        _operations = new org.apache.axis.description.OperationDesc[11];
        _initOperationDesc1();
        _initOperationDesc2();
    }

    private static void _initOperationDesc1(){
        org.apache.axis.description.OperationDesc oper;
        org.apache.axis.description.ParameterDesc param;
        oper = new org.apache.axis.description.OperationDesc();
        oper.setName("consultarContactosXCriterios");
        param = new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "arg0"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "criteriosContactosTO"), mx.com.actinver.negocio.listasdist.ws.contactos.CriteriosContactosTO.class, false, false);
        oper.addParameter(param);
        oper.setReturnType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "resultadoConsultaContactosTO"));
        oper.setReturnClass(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO[].class);
        oper.setReturnQName(new javax.xml.namespace.QName("", "return"));
        param = oper.getReturnParamDesc();
        param.setItemQName(new javax.xml.namespace.QName("", "contactosTO"));
        oper.setStyle(org.apache.axis.constants.Style.RPC);
        oper.setUse(org.apache.axis.constants.Use.LITERAL);
        oper.addFault(new org.apache.axis.description.FaultDesc(
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"),
                      "mx.com.actinver.negocio.listasdist.ws.contactos.Exception",
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"), 
                      true
                     ));
        _operations[0] = oper;

        oper = new org.apache.axis.description.OperationDesc();
        oper.setName("consultarIdiomas");
        oper.setReturnType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "resultadoIdiomasTO"));
        oper.setReturnClass(mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO[].class);
        oper.setReturnQName(new javax.xml.namespace.QName("", "return"));
        param = oper.getReturnParamDesc();
        param.setItemQName(new javax.xml.namespace.QName("", "idiomasTO"));
        oper.setStyle(org.apache.axis.constants.Style.RPC);
        oper.setUse(org.apache.axis.constants.Use.LITERAL);
        oper.addFault(new org.apache.axis.description.FaultDesc(
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"),
                      "mx.com.actinver.negocio.listasdist.ws.contactos.Exception",
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"), 
                      true
                     ));
        _operations[1] = oper;

        oper = new org.apache.axis.description.OperationDesc();
        oper.setName("registrarContactoCliente");
        param = new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "arg0"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "contactoTO"), mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO.class, false, false);
        oper.addParameter(param);
        oper.setReturnType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        oper.setReturnClass(boolean.class);
        oper.setReturnQName(new javax.xml.namespace.QName("", "return"));
        oper.setStyle(org.apache.axis.constants.Style.RPC);
        oper.setUse(org.apache.axis.constants.Use.LITERAL);
        oper.addFault(new org.apache.axis.description.FaultDesc(
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"),
                      "mx.com.actinver.negocio.listasdist.ws.contactos.Exception",
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"), 
                      true
                     ));
        _operations[2] = oper;

        oper = new org.apache.axis.description.OperationDesc();
        oper.setName("consultarContactoExiste");
        param = new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "arg0"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "contactoTO"), mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO.class, false, false);
        oper.addParameter(param);
        oper.setReturnType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        oper.setReturnClass(boolean.class);
        oper.setReturnQName(new javax.xml.namespace.QName("", "return"));
        oper.setStyle(org.apache.axis.constants.Style.RPC);
        oper.setUse(org.apache.axis.constants.Use.LITERAL);
        oper.addFault(new org.apache.axis.description.FaultDesc(
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"),
                      "mx.com.actinver.negocio.listasdist.ws.contactos.Exception",
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"), 
                      true
                     ));
        _operations[3] = oper;

        oper = new org.apache.axis.description.OperationDesc();
        oper.setName("consultarListaContenidos");
        param = new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "arg0"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "contactoTO"), mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO.class, false, false);
        oper.addParameter(param);
        oper.setReturnType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "listaContenidosTO"));
        oper.setReturnClass(mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO[].class);
        oper.setReturnQName(new javax.xml.namespace.QName("", "return"));
        param = oper.getReturnParamDesc();
        param.setItemQName(new javax.xml.namespace.QName("", "contenidos"));
        oper.setStyle(org.apache.axis.constants.Style.RPC);
        oper.setUse(org.apache.axis.constants.Use.LITERAL);
        oper.addFault(new org.apache.axis.description.FaultDesc(
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"),
                      "mx.com.actinver.negocio.listasdist.ws.contactos.Exception",
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"), 
                      true
                     ));
        _operations[4] = oper;

        oper = new org.apache.axis.description.OperationDesc();
        oper.setName("registrarContactoNoCliente");
        param = new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "arg0"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "ContactoNoClienteTO"), mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO.class, false, false);
        oper.addParameter(param);
        oper.setReturnType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "ContactoNoClienteTO"));
        oper.setReturnClass(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO.class);
        oper.setReturnQName(new javax.xml.namespace.QName("", "return"));
        oper.setStyle(org.apache.axis.constants.Style.RPC);
        oper.setUse(org.apache.axis.constants.Use.LITERAL);
        oper.addFault(new org.apache.axis.description.FaultDesc(
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"),
                      "mx.com.actinver.negocio.listasdist.ws.contactos.Exception",
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"), 
                      true
                     ));
        _operations[5] = oper;

        oper = new org.apache.axis.description.OperationDesc();
        oper.setName("consultaContactoNoClienteExiste");
        param = new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "arg0"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "ContactoNoClienteTO"), mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO.class, false, false);
        oper.addParameter(param);
        oper.setReturnType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        oper.setReturnClass(boolean.class);
        oper.setReturnQName(new javax.xml.namespace.QName("", "return"));
        oper.setStyle(org.apache.axis.constants.Style.RPC);
        oper.setUse(org.apache.axis.constants.Use.LITERAL);
        oper.addFault(new org.apache.axis.description.FaultDesc(
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"),
                      "mx.com.actinver.negocio.listasdist.ws.contactos.Exception",
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"), 
                      true
                     ));
        _operations[6] = oper;

        oper = new org.apache.axis.description.OperationDesc();
        oper.setName("consultarEstados");
        oper.setReturnType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "resultadoEstadosTO"));
        oper.setReturnClass(mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO[].class);
        oper.setReturnQName(new javax.xml.namespace.QName("", "return"));
        param = oper.getReturnParamDesc();
        param.setItemQName(new javax.xml.namespace.QName("", "estadosTO"));
        oper.setStyle(org.apache.axis.constants.Style.RPC);
        oper.setUse(org.apache.axis.constants.Use.LITERAL);
        oper.addFault(new org.apache.axis.description.FaultDesc(
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"),
                      "mx.com.actinver.negocio.listasdist.ws.contactos.Exception",
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"), 
                      true
                     ));
        _operations[7] = oper;

        oper = new org.apache.axis.description.OperationDesc();
        oper.setName("actualizarContactoCliente");
        param = new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "arg0"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "contactoTO"), mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO.class, false, false);
        oper.addParameter(param);
        oper.setReturnType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        oper.setReturnClass(boolean.class);
        oper.setReturnQName(new javax.xml.namespace.QName("", "return"));
        oper.setStyle(org.apache.axis.constants.Style.RPC);
        oper.setUse(org.apache.axis.constants.Use.LITERAL);
        oper.addFault(new org.apache.axis.description.FaultDesc(
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"),
                      "mx.com.actinver.negocio.listasdist.ws.contactos.Exception",
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"), 
                      true
                     ));
        _operations[8] = oper;

        oper = new org.apache.axis.description.OperationDesc();
        oper.setName("actualizarContactoNoCliente");
        param = new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "arg0"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "ContactoNoClienteTO"), mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO.class, false, false);
        oper.addParameter(param);
        oper.setReturnType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        oper.setReturnClass(boolean.class);
        oper.setReturnQName(new javax.xml.namespace.QName("", "return"));
        oper.setStyle(org.apache.axis.constants.Style.RPC);
        oper.setUse(org.apache.axis.constants.Use.LITERAL);
        oper.addFault(new org.apache.axis.description.FaultDesc(
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"),
                      "mx.com.actinver.negocio.listasdist.ws.contactos.Exception",
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"), 
                      true
                     ));
        _operations[9] = oper;

    }

    private static void _initOperationDesc2(){
        org.apache.axis.description.OperationDesc oper;
        org.apache.axis.description.ParameterDesc param;
        oper = new org.apache.axis.description.OperationDesc();
        oper.setName("consultaNiveles");
        oper.setReturnType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "resultadoNivelesTO"));
        oper.setReturnClass(mx.com.actinver.negocio.listasdist.ws.contactos.TipoUsuarioTO[].class);
        oper.setReturnQName(new javax.xml.namespace.QName("", "return"));
        param = oper.getReturnParamDesc();
        param.setItemQName(new javax.xml.namespace.QName("", "nivelesTO"));
        oper.setStyle(org.apache.axis.constants.Style.RPC);
        oper.setUse(org.apache.axis.constants.Use.LITERAL);
        oper.addFault(new org.apache.axis.description.FaultDesc(
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"),
                      "mx.com.actinver.negocio.listasdist.ws.contactos.Exception",
                      new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception"), 
                      true
                     ));
        _operations[10] = oper;

    }

    public ContactosWSPortBindingStub() throws org.apache.axis.AxisFault {
         this(null);
    }

    public ContactosWSPortBindingStub(java.net.URL endpointURL, javax.xml.rpc.Service service) throws org.apache.axis.AxisFault {
         this(service);
         super.cachedEndpoint = endpointURL;
    }

    public ContactosWSPortBindingStub(javax.xml.rpc.Service service) throws org.apache.axis.AxisFault {
        if (service == null) {
            super.service = new org.apache.axis.client.Service();
        } else {
            super.service = service;
        }
        ((org.apache.axis.client.Service)super.service).setTypeMappingVersion("1.2");
            java.lang.Class cls;
            javax.xml.namespace.QName qName;
            javax.xml.namespace.QName qName2;
            java.lang.Class beansf = org.apache.axis.encoding.ser.BeanSerializerFactory.class;
            java.lang.Class beandf = org.apache.axis.encoding.ser.BeanDeserializerFactory.class;
            java.lang.Class enumsf = org.apache.axis.encoding.ser.EnumSerializerFactory.class;
            java.lang.Class enumdf = org.apache.axis.encoding.ser.EnumDeserializerFactory.class;
            java.lang.Class arraysf = org.apache.axis.encoding.ser.ArraySerializerFactory.class;
            java.lang.Class arraydf = org.apache.axis.encoding.ser.ArrayDeserializerFactory.class;
            java.lang.Class simplesf = org.apache.axis.encoding.ser.SimpleSerializerFactory.class;
            java.lang.Class simpledf = org.apache.axis.encoding.ser.SimpleDeserializerFactory.class;
            java.lang.Class simplelistsf = org.apache.axis.encoding.ser.SimpleListSerializerFactory.class;
            java.lang.Class simplelistdf = org.apache.axis.encoding.ser.SimpleListDeserializerFactory.class;
            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "boletinTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.BoletinTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "catalogoTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.CatalogoTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "ContactoNoClienteTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "contactoTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "contenidoTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "criteriosContactosTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.CriteriosContactosTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "estadoTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "Exception");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.Exception.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "facultadTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.FacultadTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "idiomaTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "listaContenidosTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO[].class;
            cachedSerClasses.add(cls);
            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "contenidoTO");
            qName2 = new javax.xml.namespace.QName("", "contenidos");
            cachedSerFactories.add(new org.apache.axis.encoding.ser.ArraySerializerFactory(qName, qName2));
            cachedDeserFactories.add(new org.apache.axis.encoding.ser.ArrayDeserializerFactory());

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "moduloTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.ModuloTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "negocioTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.NegocioTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "perfilTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.PerfilTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "resultadoConsultaContactosTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO[].class;
            cachedSerClasses.add(cls);
            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "contactoTO");
            qName2 = new javax.xml.namespace.QName("", "contactosTO");
            cachedSerFactories.add(new org.apache.axis.encoding.ser.ArraySerializerFactory(qName, qName2));
            cachedDeserFactories.add(new org.apache.axis.encoding.ser.ArrayDeserializerFactory());

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "resultadoEstadosTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO[].class;
            cachedSerClasses.add(cls);
            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "estadoTO");
            qName2 = new javax.xml.namespace.QName("", "estadosTO");
            cachedSerFactories.add(new org.apache.axis.encoding.ser.ArraySerializerFactory(qName, qName2));
            cachedDeserFactories.add(new org.apache.axis.encoding.ser.ArrayDeserializerFactory());

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "resultadoIdiomasTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO[].class;
            cachedSerClasses.add(cls);
            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "idiomaTO");
            qName2 = new javax.xml.namespace.QName("", "idiomasTO");
            cachedSerFactories.add(new org.apache.axis.encoding.ser.ArraySerializerFactory(qName, qName2));
            cachedDeserFactories.add(new org.apache.axis.encoding.ser.ArrayDeserializerFactory());

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "resultadoNivelesTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.TipoUsuarioTO[].class;
            cachedSerClasses.add(cls);
            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "tipoUsuarioTO");
            qName2 = new javax.xml.namespace.QName("", "nivelesTO");
            cachedSerFactories.add(new org.apache.axis.encoding.ser.ArraySerializerFactory(qName, qName2));
            cachedDeserFactories.add(new org.apache.axis.encoding.ser.ArrayDeserializerFactory());

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "rolTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.RolTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "tipoPersonaTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.TipoPersonaTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "tipoUsuarioTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.TipoUsuarioTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

            qName = new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "tipoValorTO");
            cachedSerQNames.add(qName);
            cls = mx.com.actinver.negocio.listasdist.ws.contactos.TipoValorTO.class;
            cachedSerClasses.add(cls);
            cachedSerFactories.add(beansf);
            cachedDeserFactories.add(beandf);

    }

    protected org.apache.axis.client.Call createCall() throws java.rmi.RemoteException {
        try {
            org.apache.axis.client.Call _call = super._createCall();
            if (super.maintainSessionSet) {
                _call.setMaintainSession(super.maintainSession);
            }
            if (super.cachedUsername != null) {
                _call.setUsername(super.cachedUsername);
            }
            if (super.cachedPassword != null) {
                _call.setPassword(super.cachedPassword);
            }
            if (super.cachedEndpoint != null) {
                _call.setTargetEndpointAddress(super.cachedEndpoint);
            }
            if (super.cachedTimeout != null) {
                _call.setTimeout(super.cachedTimeout);
            }
            if (super.cachedPortName != null) {
                _call.setPortName(super.cachedPortName);
            }
            java.util.Enumeration keys = super.cachedProperties.keys();
            while (keys.hasMoreElements()) {
                java.lang.String key = (java.lang.String) keys.nextElement();
                _call.setProperty(key, super.cachedProperties.get(key));
            }
            // All the type mapping information is registered
            // when the first call is made.
            // The type mapping information is actually registered in
            // the TypeMappingRegistry of the service, which
            // is the reason why registration is only needed for the first call.
            synchronized (this) {
                if (firstCall()) {
                    // must set encoding style before registering serializers
                    _call.setEncodingStyle(null);
                    for (int i = 0; i < cachedSerFactories.size(); ++i) {
                        java.lang.Class cls = (java.lang.Class) cachedSerClasses.get(i);
                        javax.xml.namespace.QName qName =
                                (javax.xml.namespace.QName) cachedSerQNames.get(i);
                        java.lang.Object x = cachedSerFactories.get(i);
                        if (x instanceof Class) {
                            java.lang.Class sf = (java.lang.Class)
                                 cachedSerFactories.get(i);
                            java.lang.Class df = (java.lang.Class)
                                 cachedDeserFactories.get(i);
                            _call.registerTypeMapping(cls, qName, sf, df, false);
                        }
                        else if (x instanceof javax.xml.rpc.encoding.SerializerFactory) {
                            org.apache.axis.encoding.SerializerFactory sf = (org.apache.axis.encoding.SerializerFactory)
                                 cachedSerFactories.get(i);
                            org.apache.axis.encoding.DeserializerFactory df = (org.apache.axis.encoding.DeserializerFactory)
                                 cachedDeserFactories.get(i);
                            _call.registerTypeMapping(cls, qName, sf, df, false);
                        }
                    }
                }
            }
            return _call;
        }
        catch (java.lang.Throwable _t) {
            throw new org.apache.axis.AxisFault("Failure trying to get the Call object", _t);
        }
    }

    public mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO[] consultarContactosXCriterios(mx.com.actinver.negocio.listasdist.ws.contactos.CriteriosContactosTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception {
        if (super.cachedEndpoint == null) {
            throw new org.apache.axis.NoEndPointException();
        }
        org.apache.axis.client.Call _call = createCall();
        _call.setOperation(_operations[0]);
        _call.setUseSOAPAction(true);
        _call.setSOAPActionURI("");
        _call.setEncodingStyle(null);
        _call.setProperty(org.apache.axis.client.Call.SEND_TYPE_ATTR, Boolean.FALSE);
        _call.setProperty(org.apache.axis.AxisEngine.PROP_DOMULTIREFS, Boolean.FALSE);
        _call.setSOAPVersion(org.apache.axis.soap.SOAPConstants.SOAP11_CONSTANTS);
        _call.setOperationName(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "consultarContactosXCriterios"));

        setRequestHeaders(_call);
        setAttachments(_call);
 try {        java.lang.Object _resp = _call.invoke(new java.lang.Object[] {arg0});

        if (_resp instanceof java.rmi.RemoteException) {
            throw (java.rmi.RemoteException)_resp;
        }
        else {
            extractAttachments(_call);
            try {
                return (mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO[]) _resp;
            } catch (java.lang.Exception _exception) {
                return (mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO[]) org.apache.axis.utils.JavaUtils.convert(_resp, mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO[].class);
            }
        }
  } catch (org.apache.axis.AxisFault axisFaultException) {
    if (axisFaultException.detail != null) {
        if (axisFaultException.detail instanceof java.rmi.RemoteException) {
              throw (java.rmi.RemoteException) axisFaultException.detail;
         }
        if (axisFaultException.detail instanceof mx.com.actinver.negocio.listasdist.ws.contactos.Exception) {
              throw (mx.com.actinver.negocio.listasdist.ws.contactos.Exception) axisFaultException.detail;
         }
   }
  throw axisFaultException;
}
    }

    public mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO[] consultarIdiomas() throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception {
        if (super.cachedEndpoint == null) {
            throw new org.apache.axis.NoEndPointException();
        }
        org.apache.axis.client.Call _call = createCall();
        _call.setOperation(_operations[1]);
        _call.setUseSOAPAction(true);
        _call.setSOAPActionURI("");
        _call.setEncodingStyle(null);
        _call.setProperty(org.apache.axis.client.Call.SEND_TYPE_ATTR, Boolean.FALSE);
        _call.setProperty(org.apache.axis.AxisEngine.PROP_DOMULTIREFS, Boolean.FALSE);
        _call.setSOAPVersion(org.apache.axis.soap.SOAPConstants.SOAP11_CONSTANTS);
        _call.setOperationName(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "consultarIdiomas"));

        setRequestHeaders(_call);
        setAttachments(_call);
 try {        java.lang.Object _resp = _call.invoke(new java.lang.Object[] {});

        if (_resp instanceof java.rmi.RemoteException) {
            throw (java.rmi.RemoteException)_resp;
        }
        else {
            extractAttachments(_call);
            try {
                return (mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO[]) _resp;
            } catch (java.lang.Exception _exception) {
                return (mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO[]) org.apache.axis.utils.JavaUtils.convert(_resp, mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO[].class);
            }
        }
  } catch (org.apache.axis.AxisFault axisFaultException) {
    if (axisFaultException.detail != null) {
        if (axisFaultException.detail instanceof java.rmi.RemoteException) {
              throw (java.rmi.RemoteException) axisFaultException.detail;
         }
        if (axisFaultException.detail instanceof mx.com.actinver.negocio.listasdist.ws.contactos.Exception) {
              throw (mx.com.actinver.negocio.listasdist.ws.contactos.Exception) axisFaultException.detail;
         }
   }
  throw axisFaultException;
}
    }

    public boolean registrarContactoCliente(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception {
        if (super.cachedEndpoint == null) {
            throw new org.apache.axis.NoEndPointException();
        }
        org.apache.axis.client.Call _call = createCall();
        _call.setOperation(_operations[2]);
        _call.setUseSOAPAction(true);
        _call.setSOAPActionURI("");
        _call.setEncodingStyle(null);
        _call.setProperty(org.apache.axis.client.Call.SEND_TYPE_ATTR, Boolean.FALSE);
        _call.setProperty(org.apache.axis.AxisEngine.PROP_DOMULTIREFS, Boolean.FALSE);
        _call.setSOAPVersion(org.apache.axis.soap.SOAPConstants.SOAP11_CONSTANTS);
        _call.setOperationName(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "registrarContactoCliente"));

        setRequestHeaders(_call);
        setAttachments(_call);
 try {        java.lang.Object _resp = _call.invoke(new java.lang.Object[] {arg0});

        if (_resp instanceof java.rmi.RemoteException) {
            throw (java.rmi.RemoteException)_resp;
        }
        else {
            extractAttachments(_call);
            try {
                return ((java.lang.Boolean) _resp).booleanValue();
            } catch (java.lang.Exception _exception) {
                return ((java.lang.Boolean) org.apache.axis.utils.JavaUtils.convert(_resp, boolean.class)).booleanValue();
            }
        }
  } catch (org.apache.axis.AxisFault axisFaultException) {
    if (axisFaultException.detail != null) {
        if (axisFaultException.detail instanceof java.rmi.RemoteException) {
              throw (java.rmi.RemoteException) axisFaultException.detail;
         }
        if (axisFaultException.detail instanceof mx.com.actinver.negocio.listasdist.ws.contactos.Exception) {
              throw (mx.com.actinver.negocio.listasdist.ws.contactos.Exception) axisFaultException.detail;
         }
   }
  throw axisFaultException;
}
    }

    public boolean consultarContactoExiste(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception {
        if (super.cachedEndpoint == null) {
            throw new org.apache.axis.NoEndPointException();
        }
        org.apache.axis.client.Call _call = createCall();
        _call.setOperation(_operations[3]);
        _call.setUseSOAPAction(true);
        _call.setSOAPActionURI("");
        _call.setEncodingStyle(null);
        _call.setProperty(org.apache.axis.client.Call.SEND_TYPE_ATTR, Boolean.FALSE);
        _call.setProperty(org.apache.axis.AxisEngine.PROP_DOMULTIREFS, Boolean.FALSE);
        _call.setSOAPVersion(org.apache.axis.soap.SOAPConstants.SOAP11_CONSTANTS);
        _call.setOperationName(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "consultarContactoExiste"));

        setRequestHeaders(_call);
        setAttachments(_call);
 try {        java.lang.Object _resp = _call.invoke(new java.lang.Object[] {arg0});

        if (_resp instanceof java.rmi.RemoteException) {
            throw (java.rmi.RemoteException)_resp;
        }
        else {
            extractAttachments(_call);
            try {
                return ((java.lang.Boolean) _resp).booleanValue();
            } catch (java.lang.Exception _exception) {
                return ((java.lang.Boolean) org.apache.axis.utils.JavaUtils.convert(_resp, boolean.class)).booleanValue();
            }
        }
  } catch (org.apache.axis.AxisFault axisFaultException) {
    if (axisFaultException.detail != null) {
        if (axisFaultException.detail instanceof java.rmi.RemoteException) {
              throw (java.rmi.RemoteException) axisFaultException.detail;
         }
        if (axisFaultException.detail instanceof mx.com.actinver.negocio.listasdist.ws.contactos.Exception) {
              throw (mx.com.actinver.negocio.listasdist.ws.contactos.Exception) axisFaultException.detail;
         }
   }
  throw axisFaultException;
}
    }

    public mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO[] consultarListaContenidos(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception {
        if (super.cachedEndpoint == null) {
            throw new org.apache.axis.NoEndPointException();
        }
        org.apache.axis.client.Call _call = createCall();
        _call.setOperation(_operations[4]);
        _call.setUseSOAPAction(true);
        _call.setSOAPActionURI("");
        _call.setEncodingStyle(null);
        _call.setProperty(org.apache.axis.client.Call.SEND_TYPE_ATTR, Boolean.FALSE);
        _call.setProperty(org.apache.axis.AxisEngine.PROP_DOMULTIREFS, Boolean.FALSE);
        _call.setSOAPVersion(org.apache.axis.soap.SOAPConstants.SOAP11_CONSTANTS);
        _call.setOperationName(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "consultarListaContenidos"));

        setRequestHeaders(_call);
        setAttachments(_call);
 try {        java.lang.Object _resp = _call.invoke(new java.lang.Object[] {arg0});

        if (_resp instanceof java.rmi.RemoteException) {
            throw (java.rmi.RemoteException)_resp;
        }
        else {
            extractAttachments(_call);
            try {
                return (mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO[]) _resp;
            } catch (java.lang.Exception _exception) {
                return (mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO[]) org.apache.axis.utils.JavaUtils.convert(_resp, mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO[].class);
            }
        }
  } catch (org.apache.axis.AxisFault axisFaultException) {
    if (axisFaultException.detail != null) {
        if (axisFaultException.detail instanceof java.rmi.RemoteException) {
              throw (java.rmi.RemoteException) axisFaultException.detail;
         }
        if (axisFaultException.detail instanceof mx.com.actinver.negocio.listasdist.ws.contactos.Exception) {
              throw (mx.com.actinver.negocio.listasdist.ws.contactos.Exception) axisFaultException.detail;
         }
   }
  throw axisFaultException;
}
    }

    public mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO registrarContactoNoCliente(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception {
        if (super.cachedEndpoint == null) {
            throw new org.apache.axis.NoEndPointException();
        }
        org.apache.axis.client.Call _call = createCall();
        _call.setOperation(_operations[5]);
        _call.setUseSOAPAction(true);
        _call.setSOAPActionURI("");
        _call.setEncodingStyle(null);
        _call.setProperty(org.apache.axis.client.Call.SEND_TYPE_ATTR, Boolean.FALSE);
        _call.setProperty(org.apache.axis.AxisEngine.PROP_DOMULTIREFS, Boolean.FALSE);
        _call.setSOAPVersion(org.apache.axis.soap.SOAPConstants.SOAP11_CONSTANTS);
        _call.setOperationName(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "registrarContactoNoCliente"));

        setRequestHeaders(_call);
        setAttachments(_call);
 try {        java.lang.Object _resp = _call.invoke(new java.lang.Object[] {arg0});

        if (_resp instanceof java.rmi.RemoteException) {
            throw (java.rmi.RemoteException)_resp;
        }
        else {
            extractAttachments(_call);
            try {
                return (mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO) _resp;
            } catch (java.lang.Exception _exception) {
                return (mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO) org.apache.axis.utils.JavaUtils.convert(_resp, mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO.class);
            }
        }
  } catch (org.apache.axis.AxisFault axisFaultException) {
    if (axisFaultException.detail != null) {
        if (axisFaultException.detail instanceof java.rmi.RemoteException) {
              throw (java.rmi.RemoteException) axisFaultException.detail;
         }
        if (axisFaultException.detail instanceof mx.com.actinver.negocio.listasdist.ws.contactos.Exception) {
              throw (mx.com.actinver.negocio.listasdist.ws.contactos.Exception) axisFaultException.detail;
         }
   }
  throw axisFaultException;
}
    }

    public boolean consultaContactoNoClienteExiste(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception {
        if (super.cachedEndpoint == null) {
            throw new org.apache.axis.NoEndPointException();
        }
        org.apache.axis.client.Call _call = createCall();
        _call.setOperation(_operations[6]);
        _call.setUseSOAPAction(true);
        _call.setSOAPActionURI("");
        _call.setEncodingStyle(null);
        _call.setProperty(org.apache.axis.client.Call.SEND_TYPE_ATTR, Boolean.FALSE);
        _call.setProperty(org.apache.axis.AxisEngine.PROP_DOMULTIREFS, Boolean.FALSE);
        _call.setSOAPVersion(org.apache.axis.soap.SOAPConstants.SOAP11_CONSTANTS);
        _call.setOperationName(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "consultaContactoNoClienteExiste"));

        setRequestHeaders(_call);
        setAttachments(_call);
 try {        java.lang.Object _resp = _call.invoke(new java.lang.Object[] {arg0});

        if (_resp instanceof java.rmi.RemoteException) {
            throw (java.rmi.RemoteException)_resp;
        }
        else {
            extractAttachments(_call);
            try {
                return ((java.lang.Boolean) _resp).booleanValue();
            } catch (java.lang.Exception _exception) {
                return ((java.lang.Boolean) org.apache.axis.utils.JavaUtils.convert(_resp, boolean.class)).booleanValue();
            }
        }
  } catch (org.apache.axis.AxisFault axisFaultException) {
    if (axisFaultException.detail != null) {
        if (axisFaultException.detail instanceof java.rmi.RemoteException) {
              throw (java.rmi.RemoteException) axisFaultException.detail;
         }
        if (axisFaultException.detail instanceof mx.com.actinver.negocio.listasdist.ws.contactos.Exception) {
              throw (mx.com.actinver.negocio.listasdist.ws.contactos.Exception) axisFaultException.detail;
         }
   }
  throw axisFaultException;
}
    }

    public mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO[] consultarEstados() throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception {
        if (super.cachedEndpoint == null) {
            throw new org.apache.axis.NoEndPointException();
        }
        org.apache.axis.client.Call _call = createCall();
        _call.setOperation(_operations[7]);
        _call.setUseSOAPAction(true);
        _call.setSOAPActionURI("");
        _call.setEncodingStyle(null);
        _call.setProperty(org.apache.axis.client.Call.SEND_TYPE_ATTR, Boolean.FALSE);
        _call.setProperty(org.apache.axis.AxisEngine.PROP_DOMULTIREFS, Boolean.FALSE);
        _call.setSOAPVersion(org.apache.axis.soap.SOAPConstants.SOAP11_CONSTANTS);
        _call.setOperationName(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "consultarEstados"));

        setRequestHeaders(_call);
        setAttachments(_call);
 try {        java.lang.Object _resp = _call.invoke(new java.lang.Object[] {});

        if (_resp instanceof java.rmi.RemoteException) {
            throw (java.rmi.RemoteException)_resp;
        }
        else {
            extractAttachments(_call);
            try {
                return (mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO[]) _resp;
            } catch (java.lang.Exception _exception) {
                return (mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO[]) org.apache.axis.utils.JavaUtils.convert(_resp, mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO[].class);
            }
        }
  } catch (org.apache.axis.AxisFault axisFaultException) {
    if (axisFaultException.detail != null) {
        if (axisFaultException.detail instanceof java.rmi.RemoteException) {
              throw (java.rmi.RemoteException) axisFaultException.detail;
         }
        if (axisFaultException.detail instanceof mx.com.actinver.negocio.listasdist.ws.contactos.Exception) {
              throw (mx.com.actinver.negocio.listasdist.ws.contactos.Exception) axisFaultException.detail;
         }
   }
  throw axisFaultException;
}
    }

    public boolean actualizarContactoCliente(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception {
        if (super.cachedEndpoint == null) {
            throw new org.apache.axis.NoEndPointException();
        }
        org.apache.axis.client.Call _call = createCall();
        _call.setOperation(_operations[8]);
        _call.setUseSOAPAction(true);
        _call.setSOAPActionURI("");
        _call.setEncodingStyle(null);
        _call.setProperty(org.apache.axis.client.Call.SEND_TYPE_ATTR, Boolean.FALSE);
        _call.setProperty(org.apache.axis.AxisEngine.PROP_DOMULTIREFS, Boolean.FALSE);
        _call.setSOAPVersion(org.apache.axis.soap.SOAPConstants.SOAP11_CONSTANTS);
        _call.setOperationName(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "actualizarContactoCliente"));

        setRequestHeaders(_call);
        setAttachments(_call);
 try {        java.lang.Object _resp = _call.invoke(new java.lang.Object[] {arg0});

        if (_resp instanceof java.rmi.RemoteException) {
            throw (java.rmi.RemoteException)_resp;
        }
        else {
            extractAttachments(_call);
            try {
                return ((java.lang.Boolean) _resp).booleanValue();
            } catch (java.lang.Exception _exception) {
                return ((java.lang.Boolean) org.apache.axis.utils.JavaUtils.convert(_resp, boolean.class)).booleanValue();
            }
        }
  } catch (org.apache.axis.AxisFault axisFaultException) {
    if (axisFaultException.detail != null) {
        if (axisFaultException.detail instanceof java.rmi.RemoteException) {
              throw (java.rmi.RemoteException) axisFaultException.detail;
         }
        if (axisFaultException.detail instanceof mx.com.actinver.negocio.listasdist.ws.contactos.Exception) {
              throw (mx.com.actinver.negocio.listasdist.ws.contactos.Exception) axisFaultException.detail;
         }
   }
  throw axisFaultException;
}
    }

    public boolean actualizarContactoNoCliente(mx.com.actinver.negocio.listasdist.ws.contactos.ContactoNoClienteTO arg0) throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception {
        if (super.cachedEndpoint == null) {
            throw new org.apache.axis.NoEndPointException();
        }
        org.apache.axis.client.Call _call = createCall();
        _call.setOperation(_operations[9]);
        _call.setUseSOAPAction(true);
        _call.setSOAPActionURI("");
        _call.setEncodingStyle(null);
        _call.setProperty(org.apache.axis.client.Call.SEND_TYPE_ATTR, Boolean.FALSE);
        _call.setProperty(org.apache.axis.AxisEngine.PROP_DOMULTIREFS, Boolean.FALSE);
        _call.setSOAPVersion(org.apache.axis.soap.SOAPConstants.SOAP11_CONSTANTS);
        _call.setOperationName(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "actualizarContactoNoCliente"));

        setRequestHeaders(_call);
        setAttachments(_call);
 try {        java.lang.Object _resp = _call.invoke(new java.lang.Object[] {arg0});

        if (_resp instanceof java.rmi.RemoteException) {
            throw (java.rmi.RemoteException)_resp;
        }
        else {
            extractAttachments(_call);
            try {
                return ((java.lang.Boolean) _resp).booleanValue();
            } catch (java.lang.Exception _exception) {
                return ((java.lang.Boolean) org.apache.axis.utils.JavaUtils.convert(_resp, boolean.class)).booleanValue();
            }
        }
  } catch (org.apache.axis.AxisFault axisFaultException) {
    if (axisFaultException.detail != null) {
        if (axisFaultException.detail instanceof java.rmi.RemoteException) {
              throw (java.rmi.RemoteException) axisFaultException.detail;
         }
        if (axisFaultException.detail instanceof mx.com.actinver.negocio.listasdist.ws.contactos.Exception) {
              throw (mx.com.actinver.negocio.listasdist.ws.contactos.Exception) axisFaultException.detail;
         }
   }
  throw axisFaultException;
}
    }

    public mx.com.actinver.negocio.listasdist.ws.contactos.TipoUsuarioTO[] consultaNiveles() throws java.rmi.RemoteException, mx.com.actinver.negocio.listasdist.ws.contactos.Exception {
        if (super.cachedEndpoint == null) {
            throw new org.apache.axis.NoEndPointException();
        }
        org.apache.axis.client.Call _call = createCall();
        _call.setOperation(_operations[10]);
        _call.setUseSOAPAction(true);
        _call.setSOAPActionURI("");
        _call.setEncodingStyle(null);
        _call.setProperty(org.apache.axis.client.Call.SEND_TYPE_ATTR, Boolean.FALSE);
        _call.setProperty(org.apache.axis.AxisEngine.PROP_DOMULTIREFS, Boolean.FALSE);
        _call.setSOAPVersion(org.apache.axis.soap.SOAPConstants.SOAP11_CONSTANTS);
        _call.setOperationName(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "consultaNiveles"));

        setRequestHeaders(_call);
        setAttachments(_call);
 try {        java.lang.Object _resp = _call.invoke(new java.lang.Object[] {});

        if (_resp instanceof java.rmi.RemoteException) {
            throw (java.rmi.RemoteException)_resp;
        }
        else {
            extractAttachments(_call);
            try {
                return (mx.com.actinver.negocio.listasdist.ws.contactos.TipoUsuarioTO[]) _resp;
            } catch (java.lang.Exception _exception) {
                return (mx.com.actinver.negocio.listasdist.ws.contactos.TipoUsuarioTO[]) org.apache.axis.utils.JavaUtils.convert(_resp, mx.com.actinver.negocio.listasdist.ws.contactos.TipoUsuarioTO[].class);
            }
        }
  } catch (org.apache.axis.AxisFault axisFaultException) {
    if (axisFaultException.detail != null) {
        if (axisFaultException.detail instanceof java.rmi.RemoteException) {
              throw (java.rmi.RemoteException) axisFaultException.detail;
         }
        if (axisFaultException.detail instanceof mx.com.actinver.negocio.listasdist.ws.contactos.Exception) {
              throw (mx.com.actinver.negocio.listasdist.ws.contactos.Exception) axisFaultException.detail;
         }
   }
  throw axisFaultException;
}
    }

}
