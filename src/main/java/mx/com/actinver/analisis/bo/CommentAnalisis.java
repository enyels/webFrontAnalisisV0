package mx.com.actinver.analisis.bo;

import java.util.Date;

public class CommentAnalisis {

	private Integer id_coment;
	private Integer id_post;
	private String comment;
	private Date dateup;
	private  Date dateMod;
	private String nom_user;
	
	public Integer getId_coment() {
		return id_coment;
	}
	public void setId_coment(Integer id_coment) {
		this.id_coment = id_coment;
	}
	public Integer getId_post() {
		return id_post;
	}
	public void setId_post(Integer id_post) {
		this.id_post = id_post;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public Date getDateup() {
		return dateup;
	}
	public void setDateup(Date dateup) {
		this.dateup = dateup;
	}
	public Date getDateMod() {
		return dateMod;
	}
	public void setDateMod(Date dateMod) {
		this.dateMod = dateMod;
	}
	public String getNom_user() {
		return nom_user;
	}
	public void setNom_user(String nom_user) {
		this.nom_user = nom_user;
	}
	
	
	
}
