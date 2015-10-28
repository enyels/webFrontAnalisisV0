package mx.com.actinver.portal.vo;

public class Graphics {

	private String fecha;
	private String titulo;
	private double valTrac;
	public double getValTrac() {
		return valTrac;
	}
	public void setValTrac(double valTrac) {
		this.valTrac = valTrac;
	}
	private double valor;
	private double valorX2;
	
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
	public double getValor() {
		return valor;
	}
	public void setValor(double valor) {
		this.valor = valor;
	}
	public double getTrakingerror() {
		return trakingerror;
	}
	public void setTrakingerror(double trakingerror) {
		this.trakingerror = trakingerror;
	}

	public double getValorX2() {
		return valorX2;
	}
	public void setValorX2(double valorX2) {
		this.valorX2 = valorX2;
	}
	private double trakingerror;
}
