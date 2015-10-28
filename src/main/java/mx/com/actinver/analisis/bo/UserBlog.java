package mx.com.actinver.analisis.bo;

import java.util.Date;



public class UserBlog {

	private Integer id_blog_user;
	private String user_id;
	private String username;
	private Integer estatus;
	private Date createReg;
	private String nombreUsuario;
	private Integer show;
	private String image;
	private String user_pass;
	private int contrato;
	
	
	public int getContrato() {
		return contrato;
	}
	public void setContrato(int contrato) {
		this.contrato = contrato;
	}
	
	
	
	public String getUser_pass() {
		return user_pass;
	}
	public void setUser_pass(String user_pass) {
		this.user_pass = user_pass;
	}

	
	
	public String getNombreUsuario() {
		return nombreUsuario;
	}
	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	private ResultDto response;
	
	public Integer getId_blog_user() {
		return id_blog_user;
	}
	public void setId_blog_user(Integer id_blog_user) {
		this.id_blog_user = id_blog_user;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Integer getEstatus() {
		return estatus;
	}
	public void setEstatus(Integer estatus) {
		this.estatus = estatus;
	}
	public Date getCreateReg() {
		return createReg;
	}
	public void setCreateReg(Date createReg) {
		this.createReg = createReg;
	}
	public ResultDto getResponse() {
		return response;
	}
	public void setResponse(ResultDto response) {
		this.response = response;
	}
	
	public String getName() {
		return nombreUsuario;
	}
	public void setName(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}
	public Integer getShow() {
		return show;
	}
	public void setShow(Integer show) {
		this.show = show;
	}
	
}
