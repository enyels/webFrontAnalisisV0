package mx.com.actinver.analisis.bo;

public class BlogUserCatAlias {

	
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getAlias() {
		return alias;
	}
	public void setAlias(String alias) {
		this.alias = alias;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public Integer getEstatus() {
		return estatus;
	}
	public void setEstatus(Integer estatus) {
		this.estatus = estatus;
	}
	
	public BlogUserCatAlias(String usuario, String alias, String nombre,
			Integer estatus) {
		super();
		this.usuario = usuario;
		this.alias = alias;
		this.nombre = nombre;
		this.estatus = estatus;
	}
	
	public BlogUserCatAlias() {
	
	}
	private String usuario;
	private String alias;
	private String nombre;
	private Integer estatus;
	
}
