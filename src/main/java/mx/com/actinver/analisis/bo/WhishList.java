package mx.com.actinver.analisis.bo;


public class WhishList {

	private int id_usuario;
	private String usuario;
	private String mensaje;
	private  String status;
	
	private ResultDto response;
	
	public ResultDto getResponse() {
		return response;
	}
	public void setResponse(ResultDto response) {
		this.response = response;
	}
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
	
	
	
	
}
