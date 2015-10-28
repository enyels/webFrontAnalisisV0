package mx.com.actinver.analisis.bo;

public class Operatividad {
	
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
	public float getVolProm180d() {
		return volProm180d;
	}
	public void setVolProm180d(float volProm180d) {
		this.volProm180d = volProm180d;
	}
	public float getVolProm90d() {
		return volProm90d;
	}
	public void setVolProm90d(float volProm90d) {
		this.volProm90d = volProm90d;
	}
	public float getVolProm30d() {
		return volProm30d;
	}
	public void setVolProm30d(float volProm30d) {
		this.volProm30d = volProm30d;
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
	public float getImpProm30d() {
		return impProm30d;
	}
	public void setImpProm30d(float impProm30d) {
		this.impProm30d = impProm30d;
	}
	public float getFlotante() {
		return flotante;
	}
	public void setFlotante(float flotante) {
		this.flotante = flotante;
	}
	public Operatividad(int idOperatividad, String fecha, String emisora,
			String serie, String razon_social, String bursativilidad,
			float volProm180d, float volProm90d, float volProm30d,
			float impProm180d, float impProm90d, float impProm30d,
			float flotante) {
		super();
		this.idOperatividad = idOperatividad;
		this.fecha = fecha;
		this.emisora = emisora;
		this.serie = serie;
		this.razon_social = razon_social;
		this.bursativilidad = bursativilidad;
		this.volProm180d = volProm180d;
		this.volProm90d = volProm90d;
		this.volProm30d = volProm30d;
		this.impProm180d = impProm180d;
		this.impProm90d = impProm90d;
		this.impProm30d = impProm30d;
		this.flotante = flotante;
	}
	
	public Operatividad() {
		
	}
	
	
	
	
	private int idOperatividad;
	private String fecha;
	private String emisora;
	private String serie;
	private String razon_social;
	private String bursativilidad;
	private float volProm180d;
	private float volProm90d;
	private float volProm30d;
	private float impProm180d;
	private float impProm90d;
	private float impProm30d;
	private float flotante;
	
}
