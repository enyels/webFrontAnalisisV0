/**
 * ContenidoTO.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package mx.com.actinver.negocio.listasdist.ws.contactos;

public class ContenidoTO  extends mx.com.actinver.negocio.listasdist.ws.contactos.CatalogoTO  implements java.io.Serializable {
    private mx.com.actinver.negocio.listasdist.ws.contactos.BoletinTO[] boletines;

    private java.lang.String id_contenido_padre;

    private boolean checked;

    public ContenidoTO() {
    }

    public ContenidoTO(
           long id,
           java.lang.String nombre,
           mx.com.actinver.negocio.listasdist.ws.contactos.BoletinTO[] boletines,
           java.lang.String id_contenido_padre,
           boolean checked) {
        super(
            id,
            nombre);
        this.boletines = boletines;
        this.id_contenido_padre = id_contenido_padre;
        this.checked = checked;
    }


    /**
     * Gets the boletines value for this ContenidoTO.
     * 
     * @return boletines
     */
    public mx.com.actinver.negocio.listasdist.ws.contactos.BoletinTO[] getBoletines() {
        return boletines;
    }


    /**
     * Sets the boletines value for this ContenidoTO.
     * 
     * @param boletines
     */
    public void setBoletines(mx.com.actinver.negocio.listasdist.ws.contactos.BoletinTO[] boletines) {
        this.boletines = boletines;
    }

    public mx.com.actinver.negocio.listasdist.ws.contactos.BoletinTO getBoletines(int i) {
        return this.boletines[i];
    }

    public void setBoletines(int i, mx.com.actinver.negocio.listasdist.ws.contactos.BoletinTO _value) {
        this.boletines[i] = _value;
    }


    /**
     * Gets the id_contenido_padre value for this ContenidoTO.
     * 
     * @return id_contenido_padre
     */
    public java.lang.String getId_contenido_padre() {
        return id_contenido_padre;
    }


    /**
     * Sets the id_contenido_padre value for this ContenidoTO.
     * 
     * @param id_contenido_padre
     */
    public void setId_contenido_padre(java.lang.String id_contenido_padre) {
        this.id_contenido_padre = id_contenido_padre;
    }


    /**
     * Gets the checked value for this ContenidoTO.
     * 
     * @return checked
     */
    public boolean isChecked() {
        return checked;
    }


    /**
     * Sets the checked value for this ContenidoTO.
     * 
     * @param checked
     */
    public void setChecked(boolean checked) {
        this.checked = checked;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ContenidoTO)) return false;
        ContenidoTO other = (ContenidoTO) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = super.equals(obj) && 
            ((this.boletines==null && other.getBoletines()==null) || 
             (this.boletines!=null &&
              java.util.Arrays.equals(this.boletines, other.getBoletines()))) &&
            ((this.id_contenido_padre==null && other.getId_contenido_padre()==null) || 
             (this.id_contenido_padre!=null &&
              this.id_contenido_padre.equals(other.getId_contenido_padre()))) &&
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
        int _hashCode = super.hashCode();
        if (getBoletines() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getBoletines());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getBoletines(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getId_contenido_padre() != null) {
            _hashCode += getId_contenido_padre().hashCode();
        }
        _hashCode += (isChecked() ? Boolean.TRUE : Boolean.FALSE).hashCode();
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ContenidoTO.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "contenidoTO"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("boletines");
        elemField.setXmlName(new javax.xml.namespace.QName("", "boletines"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://contactos.ws.listasdist.negocio.actinver.com.mx/", "boletinTO"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        elemField.setMaxOccursUnbounded(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("id_contenido_padre");
        elemField.setXmlName(new javax.xml.namespace.QName("", "id_contenido_padre"));
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
