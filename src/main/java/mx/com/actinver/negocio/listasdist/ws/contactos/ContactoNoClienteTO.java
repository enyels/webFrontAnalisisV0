/**
 * ContactoNoClienteTO.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package mx.com.actinver.negocio.listasdist.ws.contactos;

public class ContactoNoClienteTO  implements java.io.Serializable {
    private java.lang.Long idNoCliente;

    private java.lang.String email;

    private mx.com.actinver.negocio.listasdist.ws.contactos.PerfilTO perfil;

    private mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO estatus;

    private mx.com.actinver.negocio.listasdist.ws.contactos.NegocioTO negocio;

    private mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO idioma;

    private java.lang.String nombreCompleto;

    private java.lang.String listaDistribucion;

    private java.lang.String altaContacto;

    private java.lang.String nuevoEmail;

    public ContactoNoClienteTO() {
    }

    public ContactoNoClienteTO(
           java.lang.Long idNoCliente,
           java.lang.String email,
           mx.com.actinver.negocio.listasdist.ws.contactos.PerfilTO perfil,
           mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO estatus,
           mx.com.actinver.negocio.listasdist.ws.contactos.NegocioTO negocio,
           mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO idioma,
           java.lang.String nombreCompleto,
           java.lang.String listaDistribucion,
           java.lang.String altaContacto,
           java.lang.String nuevoEmail) {
           this.idNoCliente = idNoCliente;
           this.email = email;
           this.perfil = perfil;
           this.estatus = estatus;
           this.negocio = negocio;
           this.idioma = idioma;
           this.nombreCompleto = nombreCompleto;
           this.listaDistribucion = listaDistribucion;
           this.altaContacto = altaContacto;
           this.nuevoEmail = nuevoEmail;
    }


    /**
     * Gets the idNoCliente value for this ContactoNoClienteTO.
     * 
     * @return idNoCliente
     */
    public java.lang.Long getIdNoCliente() {
        return idNoCliente;
    }


    /**
     * Sets the idNoCliente value for this ContactoNoClienteTO.
     * 
     * @param idNoCliente
     */
    public void setIdNoCliente(java.lang.Long idNoCliente) {
        this.idNoCliente = idNoCliente;
    }


    /**
     * Gets the email value for this ContactoNoClienteTO.
     * 
     * @return email
     */
    public java.lang.String getEmail() {
        return email;
    }


    /**
     * Sets the email value for this ContactoNoClienteTO.
     * 
     * @param email
     */
    public void setEmail(java.lang.String email) {
        this.email = email;
    }


    /**
     * Gets the perfil value for this ContactoNoClienteTO.
     * 
     * @return perfil
     */
    public mx.com.actinver.negocio.listasdist.ws.contactos.PerfilTO getPerfil() {
        return perfil;
    }


    /**
     * Sets the perfil value for this ContactoNoClienteTO.
     * 
     * @param perfil
     */
    public void setPerfil(mx.com.actinver.negocio.listasdist.ws.contactos.PerfilTO perfil) {
        this.perfil = perfil;
    }


    /**
     * Gets the estatus value for this ContactoNoClienteTO.
     * 
     * @return estatus
     */
    public mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO getEstatus() {
        return estatus;
    }


    /**
     * Sets the estatus value for this ContactoNoClienteTO.
     * 
     * @param estatus
     */
    public void setEstatus(mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO estatus) {
        this.estatus = estatus;
    }


    /**
     * Gets the negocio value for this ContactoNoClienteTO.
     * 
     * @return negocio
     */
    public mx.com.actinver.negocio.listasdist.ws.contactos.NegocioTO getNegocio() {
        return negocio;
    }


    /**
     * Sets the negocio value for this ContactoNoClienteTO.
     * 
     * @param negocio
     */
    public void setNegocio(mx.com.actinver.negocio.listasdist.ws.contactos.NegocioTO negocio) {
        this.negocio = negocio;
    }


    /**
     * Gets the idioma value for this ContactoNoClienteTO.
     * 
     * @return idioma
     */
    public mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO getIdioma() {
        return idioma;
    }


    /**
     * Sets the idioma value for this ContactoNoClienteTO.
     * 
     * @param idioma
     */
    public void setIdioma(mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO idioma) {
        this.idioma = idioma;
    }


    /**
     * Gets the nombreCompleto value for this ContactoNoClienteTO.
     * 
     * @return nombreCompleto
     */
    public java.lang.String getNombreCompleto() {
        return nombreCompleto;
    }


    /**
     * Sets the nombreCompleto value for this ContactoNoClienteTO.
     * 
     * @param nombreCompleto
     */
    public void setNombreCompleto(java.lang.String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }


    /**
     * Gets the listaDistribucion value for this ContactoNoClienteTO.
     * 
     * @return listaDistribucion
     */
    public java.lang.String getListaDistribucion() {
        return listaDistribucion;
    }


    /**
     * Sets the listaDistribucion value for this ContactoNoClienteTO.
     * 
     * @param listaDistribucion
     */
    public void setListaDistribucion(java.lang.String listaDistribucion) {
        this.listaDistribucion = listaDistribucion;
    }


    /**
     * Gets the altaContacto value for this ContactoNoClienteTO.
     * 
     * @return altaContacto
     */
    public java.lang.String getAltaContacto() {
        return altaContacto;
    }


    /**
     * Sets the altaContacto value for this ContactoNoClienteTO.
     * 
     * @param altaContacto
     */
    public void setAltaContacto(java.lang.String altaContacto) {
        this.altaContacto = altaContacto;
    }


    /**
     * Gets the nuevoEmail value for this ContactoNoClienteTO.
     * 
     * @return nuevoEmail
     */
    public java.lang.String getNuevoEmail() {
        return nuevoEmail;
    }


    /**
     * Sets the nuevoEmail value for this ContactoNoClienteTO.
     * 
     * @param nuevoEmail
     */
    public void setNuevoEmail(java.lang.String nuevoEmail) {
        this.nuevoEmail = nuevoEmail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ContactoNoClienteTO)) return false;
        ContactoNoClienteTO other = (ContactoNoClienteTO) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.idNoCliente==null && other.getIdNoCliente()==null) || 
             (this.idNoCliente!=null &&
              this.idNoCliente.equals(other.getIdNoCliente()))) &&
            ((this.email==null && other.getEmail()==null) || 
             (this.email!=null &&
              this.email.equals(other.getEmail()))) &&
            ((this.perfil==null && other.getPerfil()==null) || 
             (this.perfil!=null &&
              this.perfil.equals(other.getPerfil()))) &&
            ((this.estatus==null && other.getEstatus()==null) || 
             (this.estatus!=null &&
              this.estatus.equals(other.getEstatus()))) &&
            ((this.negocio==null && other.getNegocio()==null) || 
             (this.negocio!=null &&
              this.negocio.equals(other.getNegocio()))) &&
            ((this.idioma==null && other.getIdioma()==null) || 
             (this.idioma!=null &&
              this.idioma.equals(other.getIdioma()))) &&
            ((this.nombreCompleto==null && other.getNombreCompleto()==null) || 
             (this.nombreCompleto!=null &&
              this.nombreCompleto.equals(other.getNombreCompleto()))) &&
            ((this.listaDistribucion==null && other.getListaDistribucion()==null) || 
             (this.listaDistribucion!=null &&
              this.listaDistribucion.equals(other.getListaDistribucion()))) &&
            ((this.altaContacto==null && other.getAltaContacto()==null) || 
             (this.altaContacto!=null &&
              this.altaContacto.equals(other.getAltaContacto()))) &&
            ((this.nuevoEmail==null && other.getNuevoEmail()==null) || 
             (this.nuevoEmail!=null &&
              this.nuevoEmail.equals(other.getNuevoEmail())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        if (getIdNoCliente() != null) {
            _hashCode += getIdNoCliente().hashCode();
        }
        if (getEmail() != null) {
            _hashCode += getEmail().hashCode();
        }
        if (getPerfil() != null) {
            _hashCode += getPerfil().hashCode();
        }
        if (getEstatus() != null) {
            _hashCode += getEstatus().hashCode();
        }
        if (getNegocio() != null) {
            _hashCode += getNegocio().hashCode();
        }
        if (getIdioma() != null) {
            _hashCode += getIdioma().hashCode();
        }
        if (getNombreCompleto() != null) {
            _hashCode += getNombreCompleto().hashCode();
        }
        if (getListaDistribucion() != null) {
            _hashCode += getListaDistribucion().hashCode();
        }
        if (getAltaContacto() != null) {
            _hashCode += getAltaContacto().hashCode();
        }
        if (getNuevoEmail() != null) {
            _hashCode += getNuevoEmail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ContactoNoClienteTO.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "ContactoNoClienteTO"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("idNoCliente");
        elemField.setXmlName(new javax.xml.namespace.QName("", "idNoCliente"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "long"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("email");
        elemField.setXmlName(new javax.xml.namespace.QName("", "email"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("perfil");
        elemField.setXmlName(new javax.xml.namespace.QName("", "perfil"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "perfilTO"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("estatus");
        elemField.setXmlName(new javax.xml.namespace.QName("", "estatus"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "estadoTO"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("negocio");
        elemField.setXmlName(new javax.xml.namespace.QName("", "negocio"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "negocioTO"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("idioma");
        elemField.setXmlName(new javax.xml.namespace.QName("", "idioma"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "idiomaTO"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("nombreCompleto");
        elemField.setXmlName(new javax.xml.namespace.QName("", "nombreCompleto"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("listaDistribucion");
        elemField.setXmlName(new javax.xml.namespace.QName("", "listaDistribucion"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("altaContacto");
        elemField.setXmlName(new javax.xml.namespace.QName("", "altaContacto"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("nuevoEmail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "nuevoEmail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
