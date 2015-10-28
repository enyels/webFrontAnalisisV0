package mx.com.actinver.portal.vo;

public class RetornoSmrt {
	
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getIndice() {
		return indice;
	}
	public void setIndice(String indice) {
		this.indice = indice;
	}
	public String getInicio() {
		return inicio;
	}
	public void setInicio(String inicio) {
		this.inicio = inicio;
	}
	public String getYtd() {
		return ytd;
	}
	public void setYtd(String ytd) {
		this.ytd = ytd;
	}
	public String getMesanterior() {
		return mesanterior;
	}
	public void setMesanterior(String mesanterior) {
		this.mesanterior = mesanterior;
	}
	public String getOney() {
		return oney;
	}
	public void setOney(String oney) {
		this.oney = oney;
	}
	public double getBursaValBase() {
		return bursaValBase;
	}
	public void setBursaValBase(double bursaValBase) {
		this.bursaValBase = bursaValBase;
	}
	private String fecha;
	private String titulo;
	private String indice;
	private String inicio;
	private String ytd;
	private String mesanterior;
	private String oney;
	private String cambioPorc;
	public String getCambioPorc() {
		return cambioPorc;
	}
	public void setCambioPorc(String cambioPorc) {
		this.cambioPorc = cambioPorc;
	}
	private double bursaValBase;
}
