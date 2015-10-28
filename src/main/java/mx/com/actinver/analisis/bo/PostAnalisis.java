package mx.com.actinver.analisis.bo;

import java.util.Date;

public class PostAnalisis {

	public Integer getIdPost() {
		return idPost;
	}
	public void setIdPost(Integer idPost) {
		this.idPost = idPost;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getArticulo() {
		return articulo;
	}
	public void setArticulo(String articulo) {
		this.articulo = articulo;
	}
	public String getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(String idUsuario) {
		this.idUsuario = idUsuario;
	}
	public Date getDatePublic() {
		return datePublic;
	}
	public void setDatePublic(Date datePublic) {
		this.datePublic = datePublic;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Date getDateMod() {
		return dateMod;
	}
	public void setDateMod(Date dateMod) {
		this.dateMod = dateMod;
	}
	public Integer getIdUser() {
		return idUser;
	}
	public void setIdUser(Integer idUser) {
		this.idUser = idUser;
	}
	public String getAutor() {
		return autor;
	}
	public void setAutor(String autor) {
		this.autor = autor;
	}
	public String getImgAutor() {
		return imgAutor;
	}
	public void setImgAutor(String imgAutor) {
		this.imgAutor = imgAutor;
	}
	private Integer idPost;
	private String titulo;
	private String articulo;
	private String  idUsuario;
	private Date datePublic;
	private int status;
	private Date dateMod;
	private Integer idUser;
	private String autor;
	private String imgAutor;
	
}
