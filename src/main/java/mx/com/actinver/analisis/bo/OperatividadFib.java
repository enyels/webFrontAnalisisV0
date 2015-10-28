package mx.com.actinver.analisis.bo;

public class OperatividadFib {
	private int idOperatividad;
	public int getIdOperatividad() {
		return idOperatividad;
	}
	public void setIdOperatividad(int idOperatividad) {
		this.idOperatividad = idOperatividad;
	}
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	public String getEmisora() {
		return emisora;
	}
	public void setEmisora(String emisora) {
		this.emisora = emisora;
	}
	public String getSerie() {
		return serie;
	}
	public void setSerie(String serie) {
		this.serie = serie;
	}
	public String getRazon_social() {
		return razon_social;
	}
	public void setRazon_social(String razon_social) {
		this.razon_social = razon_social;
	}
	public String getBursativilidad() {
		return bursativilidad;
	}
	public void setBursativilidad(String bursativilidad) {
		this.bursativilidad = bursativilidad;
	}
	public float getVolProm90d() {
		return volProm90d;
	}
	public void setVolProm90d(float volProm90d) {
		this.volProm90d = volProm90d;
	}
	public float getImpProm180d() {
		return impProm180d;
	}
	public void setImpProm180d(float impProm180d) {
		this.impProm180d = impProm180d;
	}
	public float getImpProm90d() {
		return impProm90d;
	}
	public void setImpProm90d(float impProm90d) {
		this.impProm90d = impProm90d;
	}
	public float getFlotante() {
		return flotante;
	}
	public void setFlotante(float flotante) {
		this.flotante = flotante;
	}
	public float getP_objetivo() {
		return p_objetivo;
	}
	public void setP_objetivo(float p_objetivo) {
		this.p_objetivo = p_objetivo;
	}
	public float getAcciones() {
		return acciones;
	}
	public void setAcciones(float acciones) {
		this.acciones = acciones;
	}
	private String fecha;
	private String emisora;
	private String serie;
	private String razon_social;
	private String bursativilidad;
	private float volProm90d;
	private float impProm180d;
	private float impProm90d;
	private float flotante;
	private float p_objetivo;
	private float acciones;
	private float anio;
	public float getAnio() {
		return anio;
	}
	public void setAnio(float anio) {
		this.anio = anio;
	}
}
