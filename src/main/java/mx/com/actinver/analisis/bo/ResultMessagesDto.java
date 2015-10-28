package mx.com.actinver.analisis.bo;

import java.util.ArrayList;
import java.util.List;

public class ResultMessagesDto {

	private List<ResultItemDto> item;

	public ResultMessagesDto() {
		super();
		this.item = new ArrayList<ResultItemDto>();
	}

	public ResultMessagesDto(List<ResultItemDto> item) {
		super();
		this.item = item;
	}

	public List<ResultItemDto> getItem() {
		return item;
	}

	public void setItem(List<ResultItemDto> item) {
		this.item = item;
	}

	@Override
	public String toString() {
		return "ResultMessagesDto [item=" + item + "]";
	}
	
}
