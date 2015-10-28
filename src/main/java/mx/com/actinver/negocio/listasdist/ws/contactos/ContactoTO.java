/**
 * ContactoTO.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package mx.com.actinver.negocio.listasdist.ws.contactos;

public class ContactoTO  implements java.io.Serializable {
    private java.lang.String nombre;

    private java.lang.Long numCliente;

    private java.lang.Long numContrato;

    private java.lang.String email;

    private mx.com.actinver.negocio.listasdist.ws.contactos.PerfilTO idPerfilVenta;

    private java.lang.String contenidoAcceso;

    private mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO estado;

    private mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO idioma;

    private int isCliente;

    private java.lang.String fechaCreacion;

    private java.lang.String nuevoEmail;

    private int registrado;

    private java.lang.Boolean avisoPrivacidad;

    private java.util.Calendar fechaAviso;

    private java.lang.String actualizadoPor;

    private java.lang.String origenEmail;

    public ContactoTO() {
    }

    public ContactoTO(
           java.lang.String nombre,
           java.lang.Long numCliente,
           java.lang.Long numContrato,
           java.lang.String email,
           mx.com.actinver.negocio.listasdist.ws.contactos.PerfilTO idPerfilVenta,
           java.lang.String contenidoAcceso,
           mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO estado,
           mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO idioma,
           int isCliente,
           java.lang.String fechaCreacion,
           java.lang.String nuevoEmail,
           int registrado,
           java.lang.Boolean avisoPrivacidad,
           java.util.Calendar fechaAviso,
           java.lang.String actualizadoPor,
           java.lang.String origenEmail) {
           this.nombre = nombre;
           this.numCliente = numCliente;
           this.numContrato = numContrato;
           this.email = email;
           this.idPerfilVenta = idPerfilVenta;
           this.contenidoAcceso = contenidoAcceso;
           this.estado = estado;
           this.idioma = idioma;
           this.isCliente = isCliente;
           this.fechaCreacion = fechaCreacion;
           this.nuevoEmail = nuevoEmail;
           this.registrado = registrado;
           this.avisoPrivacidad = avisoPrivacidad;
           this.fechaAviso = fechaAviso;
           this.actualizadoPor = actualizadoPor;
           this.origenEmail = origenEmail;
    }


    /**
     * Gets the nombre value for this ContactoTO.
     * 
     * @return nombre
     */
    public java.lang.String getNombre() {
        return nombre;
    }


    /**
     * Sets the nombre value for this ContactoTO.
     * 
     * @param nombre
     */
    public void setNombre(java.lang.String nombre) {
        this.nombre = nombre;
    }


    /**
     * Gets the numCliente value for this ContactoTO.
     * 
     * @return numCliente
     */
    public java.lang.Long getNumCliente() {
        return numCliente;
    }


    /**
     * Sets the numCliente value for this ContactoTO.
     * 
     * @param numCliente
     */
    public void setNumCliente(java.lang.Long numCliente) {
        this.numCliente = numCliente;
    }


    /**
     * Gets the numContrato value for this ContactoTO.
     * 
     * @return numContrato
     */
    public java.lang.Long getNumContrato() {
        return numContrato;
    }


    /**
     * Sets the numContrato value for this ContactoTO.
     * 
     * @param numContrato
     */
    public void setNumContrato(java.lang.Long numContrato) {
        this.numContrato = numContrato;
    }


    /**
     * Gets the email value for this ContactoTO.
     * 
     * @return email
     */
    public java.lang.String getEmail() {
        return email;
    }


    /**
     * Sets the email value for this ContactoTO.
     * 
     * @param email
     */
    public void setEmail(java.lang.String email) {
        this.email = email;
    }


    /**
     * Gets the idPerfilVenta value for this ContactoTO.
     * 
     * @return idPerfilVenta
     */
    public mx.com.actinver.negocio.listasdist.ws.contactos.PerfilTO getIdPerfilVenta() {
        return idPerfilVenta;
    }


    /**
     * Sets the idPerfilVenta value for this ContactoTO.
     * 
     * @param idPerfilVenta
     */
    public void setIdPerfilVenta(mx.com.actinver.negocio.listasdist.ws.contactos.PerfilTO idPerfilVenta) {
        this.idPerfilVenta = idPerfilVenta;
    }


    /**
     * Gets the contenidoAcceso value for this ContactoTO.
     * 
     * @return contenidoAcceso
     */
    public java.lang.String getContenidoAcceso() {
        return contenidoAcceso;
    }


    /**
     * Sets the contenidoAcceso value for this ContactoTO.
     * 
     * @param contenidoAcceso
     */
    public void setContenidoAcceso(java.lang.String contenidoAcceso) {
        this.contenidoAcceso = contenidoAcceso;
    }


    /**
     * Gets the estado value for this ContactoTO.
     * 
     * @return estado
     */
    public mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO getEstado() {
        return estado;
    }


    /**
     * Sets the estado value for this ContactoTO.
     * 
     * @param estado
     */
    public void setEstado(mx.com.actinver.negocio.listasdist.ws.contactos.EstadoTO estado) {
        this.estado = estado;
    }


    /**
     * Gets the idioma value for this ContactoTO.
     * 
     * @return idioma
     */
    public mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO getIdioma() {
        return idioma;
    }


    /**
     * Sets the idioma value for this ContactoTO.
     * 
     * @param idioma
     */
    public void setIdioma(mx.com.actinver.negocio.listasdist.ws.contactos.IdiomaTO idioma) {
        this.idioma = idioma;
    }


    /**
     * Gets the isCliente value for this ContactoTO.
     * 
     * @return isCliente
     */
    public int getIsCliente() {
        return isCliente;
    }


    /**
     * Sets the isCliente value for this ContactoTO.
     * 
     * @param isCliente
     */
    public void setIsCliente(int isCliente) {
        this.isCliente = isCliente;
    }


    /**
     * Gets the fechaCreacion value for this ContactoTO.
     * 
     * @return fechaCreacion
     */
    public java.lang.String getFechaCreacion() {
        return fechaCreacion;
    }


    /**
     * Sets the fechaCreacion value for this ContactoTO.
     * 
     * @param fechaCreacion
     */
    public void setFechaCreacion(java.lang.String fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }


    /**
     * Gets the nuevoEmail value for this ContactoTO.
     * 
     * @return nuevoEmail
     */
    public java.lang.String getNuevoEmail() {
        return nuevoEmail;
    }


    /**
     * Sets the nuevoEmail value for this ContactoTO.
     * 
     * @param nuevoEmail
     */
    public void setNuevoEmail(java.lang.String nuevoEmail) {
        this.nuevoEmail = nuevoEmail;
    }


    /**
     * Gets the registrado value for this ContactoTO.
     * 
     * @return registrado
     */
    public int getRegistrado() {
        return registrado;
    }


    /**
     * Sets the registrado value for this ContactoTO.
     * 
     * @param registrado
     */
    public void setRegistrado(int registrado) {
        this.registrado = registrado;
    }


    /**
     * Gets the avisoPrivacidad value for this ContactoTO.
     * 
     * @return avisoPrivacidad
     */
    public java.lang.Boolean getAvisoPrivacidad() {
        return avisoPrivacidad;
    }


    /**
     * Sets the avisoPrivacidad value for this ContactoTO.
     * 
     * @param avisoPrivacidad
     */
    public void setAvisoPrivacidad(java.lang.Boolean avisoPrivacidad) {
        this.avisoPrivacidad = avisoPrivacidad;
    }


    /**
     * Gets the fechaAviso value for this ContactoTO.
     * 
     * @return fechaAviso
     */
    public java.util.Calendar getFechaAviso() {
        return fechaAviso;
    }


    /**
     * Sets the fechaAviso value for this ContactoTO.
     * 
     * @param fechaAviso
     */
    public void setFechaAviso(java.util.Calendar fechaAviso) {
        this.fechaAviso = fechaAviso;
    }


    /**
     * Gets the actualizadoPor value for this ContactoTO.
     * 
     * @return actualizadoPor
     */
    public java.lang.String getActualizadoPor() {
        return actualizadoPor;
    }


    /**
     * Sets the actualizadoPor value for this ContactoTO.
     * 
     * @param actualizadoPor
     */
    public void setActualizadoPor(java.lang.String actualizadoPor) {
        this.actualizadoPor = actualizadoPor;
    }


    /**
     * Gets the origenEmail value for this ContactoTO.
     * 
     * @return origenEmail
     */
    public java.lang.String getOrigenEmail() {
        return origenEmail;
    }


    /**
     * Sets the origenEmail value for this ContactoTO.
     * 
     * @param origenEmail
     */
    public void setOrigenEmail(java.lang.String origenEmail) {
        this.origenEmail = origenEmail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ContactoTO)) return false;
        ContactoTO other = (ContactoTO) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.nombre==null && other.getNombre()==null) || 
             (this.nombre!=null &&
              this.nombre.equals(other.getNombre()))) &&
            ((this.numCliente==null && other.getNumCliente()==null) || 
             (this.numCliente!=null &&
              this.numCliente.equals(other.getNumCliente()))) &&
            ((this.numContrato==null && other.getNumContrato()==null) || 
             (this.numContrato!=null &&
              this.numContrato.equals(other.getNumContrato()))) &&
            ((this.email==null && other.getEmail()==null) || 
             (this.email!=null &&
              this.email.equals(other.getEmail()))) &&
            ((this.idPerfilVenta==null && other.getIdPerfilVenta()==null) || 
             (this.idPerfilVenta!=null &&
              this.idPerfilVenta.equals(other.getIdPerfilVenta()))) &&
            ((this.contenidoAcceso==null && other.getContenidoAcceso()==null) || 
             (this.contenidoAcceso!=null &&
              this.contenidoAcceso.equals(other.getContenidoAcceso()))) &&
            ((this.estado==null && other.getEstado()==null) || 
             (this.estado!=null &&
              this.estado.equals(other.getEstado()))) &&
            ((this.idioma==null && other.getIdioma()==null) || 
             (this.idioma!=null &&
              this.idioma.equals(other.getIdioma()))) &&
            this.isCliente == other.getIsCliente() &&
            ((this.fechaCreacion==null && other.getFechaCreacion()==null) || 
             (this.fechaCreacion!=null &&
              this.fechaCreacion.equals(other.getFechaCreacion()))) &&
            ((this.nuevoEmail==null && other.getNuevoEmail()==null) || 
             (this.nuevoEmail!=null &&
              this.nuevoEmail.equals(other.getNuevoEmail()))) &&
            this.registrado == other.getRegistrado() &&
            ((this.avisoPrivacidad==null && other.getAvisoPrivacidad()==null) || 
             (this.avisoPrivacidad!=null &&
              this.avisoPrivacidad.equals(other.getAvisoPrivacidad()))) &&
            ((this.fechaAviso==null && other.getFechaAviso()==null) || 
             (this.fechaAviso!=null &&
              this.fechaAviso.equals(other.getFechaAviso()))) &&
            ((this.actualizadoPor==null && other.getActualizadoPor()==null) || 
             (this.actualizadoPor!=null &&
              this.actualizadoPor.equals(other.getActualizadoPor()))) &&
            ((this.origenEmail==null && other.getOrigenEmail()==null) || 
             (this.origenEmail!=null &&
              this.origenEmail.equals(other.getOrigenEmail())));
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
        if (getNombre() != null) {
            _hashCode += getNombre().hashCode();
        }
        if (getNumCliente() != null) {
            _hashCode += getNumCliente().hashCode();
        }
        if (getNumContrato() != null) {
            _hashCode += getNumContrato().hashCode();
        }
        if (getEmail() != null) {
            _hashCode += getEmail().hashCode();
        }
        if (getIdPerfilVenta() != null) {
            _hashCode += getIdPerfilVenta().hashCode();
        }
        if (getContenidoAcceso() != null) {
            _hashCode += getContenidoAcceso().hashCode();
        }
        if (getEstado() != null) {
            _hashCode += getEstado().hashCode();
        }
        if (getIdioma() != null) {
            _hashCode += getIdioma().hashCode();
        }
        _hashCode += getIsCliente();
        if (getFechaCreacion() != null) {
            _hashCode += getFechaCreacion().hashCode();
        }
        if (getNuevoEmail() != null) {
            _hashCode += getNuevoEmail().hashCode();
        }
        _hashCode += getRegistrado();
        if (getAvisoPrivacidad() != null) {
            _hashCode += getAvisoPrivacidad().hashCode();
        }
        if (getFechaAviso() != null) {
            _hashCode += getFechaAviso().hashCode();
        }
        if (getActualizadoPor() != null) {
            _hashCode += getActualizadoPor().hashCode();
        }
        if (getOrigenEmail() != null) {
            _hashCode += getOrigenEmail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ContactoTO.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "contactoTO"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("nombre");
        elemField.setXmlName(new javax.xml.namespace.QName("", "nombre"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("numCliente");
        elemField.setXmlName(new javax.xml.namespace.QName("", "numCliente"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "long"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("numContrato");
        elemField.setXmlName(new javax.xml.namespace.QName("", "numContrato"));
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
        elemField.setFieldName("idPerfilVenta");
        elemField.setXmlName(new javax.xml.namespace.QName("", "idPerfilVenta"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "perfilTO"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("contenidoAcceso");
        elemField.setXmlName(new javax.xml.namespace.QName("", "contenidoAcceso"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("estado");
        elemField.setXmlName(new javax.xml.namespace.QName("", "estado"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "estadoTO"));
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
        elemField.setFieldName("isCliente");
        elemField.setXmlName(new javax.xml.namespace.QName("", "isCliente"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("fechaCreacion");
        elemField.setXmlName(new javax.xml.namespace.QName("", "fechaCreacion"));
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
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("registrado");
        elemField.setXmlName(new javax.xml.namespace.QName("", "registrado"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("avisoPrivacidad");
        elemField.setXmlName(new javax.xml.namespace.QName("", "avisoPrivacidad"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("fechaAviso");
        elemField.setXmlName(new javax.xml.namespace.QName("", "fechaAviso"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "dateTime"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("actualizadoPor");
        elemField.setXmlName(new javax.xml.namespace.QName("", "actualizadoPor"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("origenEmail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "origenEmail"));
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
