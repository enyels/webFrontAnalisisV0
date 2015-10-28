package mx.com.actinver.analisis.bo;

public class Variaciones {

	
	
	
	public Variaciones() {
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	public int getIdVariacion() {
		return idVariacion;
	}
	public void setIdVariacion(int idVariacion) {
		this.idVariacion = idVariacion;
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
	public float getUltPrecio() {
		return ultPrecio;
	}
	public void setUltPrecio(float ultPrecio) {
		this.ultPrecio = ultPrecio;
	}
	public float getMaxDoceM() {
		return maxDoceM;
	}
	public void setMaxDoceM(float maxDoceM) {
		this.maxDoceM = maxDoceM;
	}
	public String getFechaMaxDoce() {
		return fechaMaxDoce;
	}
	public void setFechaMaxDoce(String fechaMaxDoce) {
		this.fechaMaxDoce = fechaMaxDoce;
	}
	public float getVarMax() {
		return varMax;
	}
	public void setVarMax(float varMax) {
		this.varMax = varMax;
	}
	public float getMinDoceM() {
		return minDoceM;
	}
	public void setMinDoceM(float minDoceM) {
		this.minDoceM = minDoceM;
	}
	public String getFechaMin() {
		return fechaMin;
	}
	public void setFechaMin(String fechaMin) {
		this.fechaMin = fechaMin;
	}
	public float getVarMin() {
		return varMin;
	}
	public void setVarMin(float varMin) {
		this.varMin = varMin;
	}
	public float getRend12M() {
		return rend12M;
	}
	public void setRend12M(float rend12m) {
		rend12M = rend12m;
	}
	public float getRendYTD() {
		return rendYTD;
	}
	public void setRendYTD(float rendYTD) {
		this.rendYTD = rendYTD;
	}
















	public Variaciones(int idVariacion, String fecha, String emisora,
			String serie, float ultPrecio, float maxDoceM, String fechaMaxDoce,
			float varMax, float minDoceM, String fechaMin, float varMin,
			float rend12m, float rendYTD) {
		super();
		this.idVariacion = idVariacion;
		this.fecha = fecha;
		this.emisora = emisora;
		this.serie = serie;
		this.ultPrecio = ultPrecio;
		this.maxDoceM = maxDoceM;
		this.fechaMaxDoce = fechaMaxDoce;
		this.varMax = varMax;
		this.minDoceM = minDoceM;
		this.fechaMin = fechaMin;
		this.varMin = varMin;
		rend12M = rend12m;
		this.rendYTD = rendYTD;
	}
















	private int idVariacion;
	private String fecha;
	private String emisora;
	private String serie;
	private float ultPrecio;
	private float maxDoceM;
	private String fechaMaxDoce;
	private float varMax;
	private float minDoceM;
	private String fechaMin;
	private float varMin;
	private float rend12M;
	private float rendYTD;
	
	
}
