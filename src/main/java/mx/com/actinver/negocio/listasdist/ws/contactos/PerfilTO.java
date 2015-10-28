/**
 * PerfilTO.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package mx.com.actinver.negocio.listasdist.ws.contactos;

public class PerfilTO  implements java.io.Serializable {
    private long id;

    private long idContenido;

    private java.lang.String nombre;

    private java.lang.String cx_perfil_larga;

    public PerfilTO() {
    }

    public PerfilTO(
           long id,
           long idContenido,
           java.lang.String nombre,
           java.lang.String cx_perfil_larga) {
           this.id = id;
           this.idContenido = idContenido;
           this.nombre = nombre;
           this.cx_perfil_larga = cx_perfil_larga;
    }


    /**
     * Gets the id value for this PerfilTO.
     * 
     * @return id
     */
    public long getId() {
        return id;
    }


    /**
     * Sets the id value for this PerfilTO.
     * 
     * @param id
     */
    public void setId(long id) {
        this.id = id;
    }


    /**
     * Gets the idContenido value for this PerfilTO.
     * 
     * @return idContenido
     */
    public long getIdContenido() {
        return idContenido;
    }


    /**
     * Sets the idContenido value for this PerfilTO.
     * 
     * @param idContenido
     */
    public void setIdContenido(long idContenido) {
        this.idContenido = idContenido;
    }


    /**
     * Gets the nombre value for this PerfilTO.
     * 
     * @return nombre
     */
    public java.lang.String getNombre() {
        return nombre;
    }


    /**
     * Sets the nombre value for this PerfilTO.
     * 
     * @param nombre
     */
    public void setNombre(java.lang.String nombre) {
        this.nombre = nombre;
    }


    /**
     * Gets the cx_perfil_larga value for this PerfilTO.
     * 
     * @return cx_perfil_larga
     */
    public java.lang.String getCx_perfil_larga() {
        return cx_perfil_larga;
    }


    /**
     * Sets the cx_perfil_larga value for this PerfilTO.
     * 
     * @param cx_perfil_larga
     */
    public void setCx_perfil_larga(java.lang.String cx_perfil_larga) {
        this.cx_perfil_larga = cx_perfil_larga;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof PerfilTO)) return false;
        PerfilTO other = (PerfilTO) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            this.id == other.getId() &&
            this.idContenido == other.getIdContenido() &&
            ((this.nombre==null && other.getNombre()==null) || 
             (this.nombre!=null &&
              this.nombre.equals(other.getNombre()))) &&
            ((this.cx_perfil_larga==null && other.getCx_perfil_larga()==null) || 
             (this.cx_perfil_larga!=null &&
              this.cx_perfil_larga.equals(other.getCx_perfil_larga())));
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
        _hashCode += new Long(getId()).hashCode();
        _hashCode += new Long(getIdContenido()).hashCode();
        if (getNombre() != null) {
            _hashCode += getNombre().hashCode();
        }
        if (getCx_perfil_larga() != null) {
            _hashCode += getCx_perfil_larga().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(PerfilTO.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "perfilTO"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("id");
        elemField.setXmlName(new javax.xml.namespace.QName("", "id"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "long"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("idContenido");
        elemField.setXmlName(new javax.xml.namespace.QName("", "idContenido"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "long"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("nombre");
        elemField.setXmlName(new javax.xml.namespace.QName("", "nombre"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("cx_perfil_larga");
        elemField.setXmlName(new javax.xml.namespace.QName("", "cx_perfil_larga"));
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
