package mx.com.actinver.analisis.bo;

public class Emisora {

	public int id;
	public String name;
	public Emisora(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	public Emisora() {

	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	
}
