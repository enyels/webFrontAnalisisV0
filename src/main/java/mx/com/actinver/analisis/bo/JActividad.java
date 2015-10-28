package mx.com.actinver.analisis.bo;

public class JActividad {

	//[{"id":830,"start":1262279460000,"end":1262281260000,"title":"this is a long event isnt that right?","body":"","multi":0,"allDay":false,"extension_id":2},{"id":831,"start":1262282052000,"end":1262283852000,"title":"830","body":"","multi":0,"allDay":false,"extension_id":2},{"id":832,"start":1262284644000,"end":1262286444000,"title":"831","body":"","multi":0,"allDay":false,"extension_id":2},{"id":833,"start":1262287236000,"end":1262289036000,"title":"832","body":"","multi":0,"allDay":false,"extension_id":2},{"id":834,"start":1262289828000,"end":1262291628000,"title":"833","body":"","multi":0,"allDay":false,"extension_id":2}
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getStart() {
		return start;
	}
	public void setStart(Integer start) {
		this.start = start;
	}
	public Integer getEnd() {
		return end;
	}
	public void setEnd(Integer end) {
		this.end = end;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public Integer getMulti() {
		return multi;
	}
	public void setMulti(Integer multi) {
		this.multi = multi;
	}
	public Boolean getAllDay() {
		return allDay;
	}
	public void setAllDay(Boolean allDay) {
		this.allDay = allDay;
	}
	public Integer getExtension_id() {
		return extension_id;
	}
	public void setExtension_id(Integer extension_id) {
		this.extension_id = extension_id;
	}
	private Integer start;
	private Integer end;
	private String title;
	private String body;
	private Integer multi;
	private Boolean allDay;
	private Integer extension_id;
	private Integer id;
	
	
	
}
