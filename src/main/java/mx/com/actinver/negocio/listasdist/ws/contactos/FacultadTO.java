/**
 * FacultadTO.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package mx.com.actinver.negocio.listasdist.ws.contactos;

public class FacultadTO  extends mx.com.actinver.negocio.listasdist.ws.contactos.CatalogoTO  implements java.io.Serializable {
    private mx.com.actinver.negocio.listasdist.ws.contactos.ModuloTO[] modulos;

    public FacultadTO() {
    }

    public FacultadTO(
           long id,
           java.lang.String nombre,
           mx.com.actinver.negocio.listasdist.ws.contactos.ModuloTO[] modulos) {
        super(
            id,
            nombre);
        this.modulos = modulos;
    }


    /**
     * Gets the modulos value for this FacultadTO.
     * 
     * @return modulos
     */
    public mx.com.actinver.negocio.listasdist.ws.contactos.ModuloTO[] getModulos() {
        return modulos;
    }


    /**
     * Sets the modulos value for this FacultadTO.
     * 
     * @param modulos
     */
    public void setModulos(mx.com.actinver.negocio.listasdist.ws.contactos.ModuloTO[] modulos) {
        this.modulos = modulos;
    }

    public mx.com.actinver.negocio.listasdist.ws.contactos.ModuloTO getModulos(int i) {
        return this.modulos[i];
    }

    public void setModulos(int i, mx.com.actinver.negocio.listasdist.ws.contactos.ModuloTO _value) {
        this.modulos[i] = _value;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof FacultadTO)) return false;
        FacultadTO other = (FacultadTO) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = super.equals(obj) && 
            ((this.modulos==null && other.getModulos()==null) || 
             (this.modulos!=null &&
              java.util.Arrays.equals(this.modulos, other.getModulos())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = super.hashCode();
        if (getModulos() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getModulos());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getModulos(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(FacultadTO.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "facultadTO"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("modulos");
        elemField.setXmlName(new javax.xml.namespace.QName("", "modulos"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "moduloTO"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        elemField.setMaxOccursUnbounded(true);
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
