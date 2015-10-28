/**
 * BoletinTO.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package mx.com.actinver.negocio.listasdist.ws.contactos;

public class BoletinTO  implements java.io.Serializable {
    private long id_lista_dist;

    private mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO contenido;

    private java.lang.String descripcion;

    private boolean checked;

    public BoletinTO() {
    }

    public BoletinTO(
           long id_lista_dist,
           mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO contenido,
           java.lang.String descripcion,
           boolean checked) {
           this.id_lista_dist = id_lista_dist;
           this.contenido = contenido;
           this.descripcion = descripcion;
           this.checked = checked;
    }


    /**
     * Gets the id_lista_dist value for this BoletinTO.
     * 
     * @return id_lista_dist
     */
    public long getId_lista_dist() {
        return id_lista_dist;
    }


    /**
     * Sets the id_lista_dist value for this BoletinTO.
     * 
     * @param id_lista_dist
     */
    public void setId_lista_dist(long id_lista_dist) {
        this.id_lista_dist = id_lista_dist;
    }


    /**
     * Gets the contenido value for this BoletinTO.
     * 
     * @return contenido
     */
    public mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO getContenido() {
        return contenido;
    }


    /**
     * Sets the contenido value for this BoletinTO.
     * 
     * @param contenido
     */
    public void setContenido(mx.com.actinver.negocio.listasdist.ws.contactos.ContenidoTO contenido) {
        this.contenido = contenido;
    }


    /**
     * Gets the descripcion value for this BoletinTO.
     * 
     * @return descripcion
     */
    public java.lang.String getDescripcion() {
        return descripcion;
    }


    /**
     * Sets the descripcion value for this BoletinTO.
     * 
     * @param descripcion
     */
    public void setDescripcion(java.lang.String descripcion) {
        this.descripcion = descripcion;
    }


    /**
     * Gets the checked value for this BoletinTO.
     * 
     * @return checked
     */
    public boolean isChecked() {
        return checked;
    }


    /**
     * Sets the checked value for this BoletinTO.
     * 
     * @param checked
     */
    public void setChecked(boolean checked) {
        this.checked = checked;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof BoletinTO)) return false;
        BoletinTO other = (BoletinTO) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            this.id_lista_dist == other.getId_lista_dist() &&
            ((this.contenido==null && other.getContenido()==null) || 
             (this.contenido!=null &&
              this.contenido.equals(other.getContenido()))) &&
            ((this.descripcion==null && other.getDescripcion()==null) || 
             (this.descripcion!=null &&
              this.descripcion.equals(other.getDescripcion()))) &&
            this.checked == other.isChecked();
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
        _hashCode += new Long(getId_lista_dist()).hashCode();
        if (getContenido() != null) {
            _hashCode += getContenido().hashCode();
        }
        if (getDescripcion() != null) {
            _hashCode += getDescripcion().hashCode();
        }
        _hashCode += (isChecked() ? Boolean.TRUE : Boolean.FALSE).hashCode();
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(BoletinTO.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "boletinTO"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("id_lista_dist");
        elemField.setXmlName(new javax.xml.namespace.QName("", "id_lista_dist"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "long"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("contenido");
        elemField.setXmlName(new javax.xml.namespace.QName("", "contenido"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "contenidoTO"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("descripcion");
        elemField.setXmlName(new javax.xml.namespace.QName("", "descripcion"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("checked");
        elemField.setXmlName(new javax.xml.namespace.QName("", "checked"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
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
