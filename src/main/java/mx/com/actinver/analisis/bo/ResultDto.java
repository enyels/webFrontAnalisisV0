package mx.com.actinver.analisis.bo;

public class ResultDto {

	private int status;
	private ResultMessagesDto messages;
	public ResultDto() {
		super();
		this.status = 0;
		this.messages = new ResultMessagesDto();
	}
	public ResultDto(int status, ResultMessagesDto messages) {
		super();
		this.status = status;
		this.messages = messages;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public ResultMessagesDto getMessages() {
		return messages;
	}
	public void setMessages(ResultMessagesDto messages) {
		this.messages = messages;
	}
	@Override
	public String toString() {
		return "ResultDto [status=" + status + ", messages=" + messages + "]";
	}
	
	
}
