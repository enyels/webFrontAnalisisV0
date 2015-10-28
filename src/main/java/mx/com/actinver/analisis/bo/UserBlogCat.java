package mx.com.actinver.analisis.bo;

public class UserBlogCat {

	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public Integer getEstatus() {
		return estatus;
	}
	public void setEstatus(Integer estatus) {
		this.estatus = estatus;
	}
	public UserBlogCat(String nombre, String usuario, String correo,
			Integer estatus) {
		super();
		this.nombre = nombre;
		this.usuario = usuario;
		this.correo = correo;
		this.estatus = estatus;
	}
	private String nombre;
	private String usuario;
	private String correo;
	private Integer estatus;
	
	
}
