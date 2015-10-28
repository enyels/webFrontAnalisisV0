package mx.com.actinver.analisis.bo;

public class WishList {
	public int getId_usuario() {
		return id_usuario;
	}
	public void setId_usuario(int id_usuario) {
		this.id_usuario = id_usuario;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	private int id_usuario;
	public WishList(int id_usuario, String usuario, String mensaje,
			String status) {
		super();
		this.id_usuario = id_usuario;
		this.usuario = usuario;
		this.mensaje = mensaje;
		this.status = status;
	}
	public WishList() {
		
	}
	private String usuario;
	private String mensaje;
	private  String status;
}
