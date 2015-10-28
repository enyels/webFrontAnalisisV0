/**
 * CriteriosContactosTO.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package mx.com.actinver.negocio.listasdist.ws.contactos;

public class CriteriosContactosTO  implements java.io.Serializable {
    private java.lang.String email;

    private java.lang.String nombreRazonSocial;

    private long numCliente;

    private int tipoBusqueda;

    public CriteriosContactosTO() {
    }

    public CriteriosContactosTO(
           java.lang.String email,
           java.lang.String nombreRazonSocial,
           long numCliente,
           int tipoBusqueda) {
           this.email = email;
           this.nombreRazonSocial = nombreRazonSocial;
           this.numCliente = numCliente;
           this.tipoBusqueda = tipoBusqueda;
    }


    /**
     * Gets the email value for this CriteriosContactosTO.
     * 
     * @return email
     */
    public java.lang.String getEmail() {
        return email;
    }


    /**
     * Sets the email value for this CriteriosContactosTO.
     * 
     * @param email
     */
    public void setEmail(java.lang.String email) {
        this.email = email;
    }


    /**
     * Gets the nombreRazonSocial value for this CriteriosContactosTO.
     * 
     * @return nombreRazonSocial
     */
    public java.lang.String getNombreRazonSocial() {
        return nombreRazonSocial;
    }


    /**
     * Sets the nombreRazonSocial value for this CriteriosContactosTO.
     * 
     * @param nombreRazonSocial
     */
    public void setNombreRazonSocial(java.lang.String nombreRazonSocial) {
        this.nombreRazonSocial = nombreRazonSocial;
    }


    /**
     * Gets the numCliente value for this CriteriosContactosTO.
     * 
     * @return numCliente
     */
    public long getNumCliente() {
        return numCliente;
    }


    /**
     * Sets the numCliente value for this CriteriosContactosTO.
     * 
     * @param numCliente
     */
    public void setNumCliente(long numCliente) {
        this.numCliente = numCliente;
    }


    /**
     * Gets the tipoBusqueda value for this CriteriosContactosTO.
     * 
     * @return tipoBusqueda
     */
    public int getTipoBusqueda() {
        return tipoBusqueda;
    }


    /**
     * Sets the tipoBusqueda value for this CriteriosContactosTO.
     * 
     * @param tipoBusqueda
     */
    public void setTipoBusqueda(int tipoBusqueda) {
        this.tipoBusqueda = tipoBusqueda;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CriteriosContactosTO)) return false;
        CriteriosContactosTO other = (CriteriosContactosTO) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.email==null && other.getEmail()==null) || 
             (this.email!=null &&
              this.email.equals(other.getEmail()))) &&
            ((this.nombreRazonSocial==null && other.getNombreRazonSocial()==null) || 
             (this.nombreRazonSocial!=null &&
              this.nombreRazonSocial.equals(other.getNombreRazonSocial()))) &&
            this.numCliente == other.getNumCliente() &&
            this.tipoBusqueda == other.getTipoBusqueda();
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
        if (getEmail() != null) {
            _hashCode += getEmail().hashCode();
        }
        if (getNombreRazonSocial() != null) {
            _hashCode += getNombreRazonSocial().hashCode();
        }
        _hashCode += new Long(getNumCliente()).hashCode();
        _hashCode += getTipoBusqueda();
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CriteriosContactosTO.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "criteriosContactosTO"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("email");
        elemField.setXmlName(new javax.xml.namespace.QName("", "email"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("nombreRazonSocial");
        elemField.setXmlName(new javax.xml.namespace.QName("", "nombreRazonSocial"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("numCliente");
        elemField.setXmlName(new javax.xml.namespace.QName("", "numCliente"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "long"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("tipoBusqueda");
        elemField.setXmlName(new javax.xml.namespace.QName("", "tipoBusqueda"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
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
