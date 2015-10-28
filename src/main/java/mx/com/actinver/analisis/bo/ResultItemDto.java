package mx.com.actinver.analisis.bo;

public class ResultItemDto {

	private String code;
	private String criticality;
	private String description;
	private String type;
	public ResultItemDto() {
		super();
		this.code = "";
		this.criticality = "";
		this.description = "";
		this.type = "";
	}
	public ResultItemDto(String code, String criticality, String description,
			String type) {
		super();
		this.code = code;
		this.criticality = criticality;
		this.description = description;
		this.type = type;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getCriticality() {
		return criticality;
	}
	public void setCriticality(String criticality) {
		this.criticality = criticality;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "ResultItemDto [code=" + code + ", criticality=" + criticality
				+ ", description=" + description + ", type=" + type + "]";
	}
	
	
}
