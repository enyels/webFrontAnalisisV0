package mx.com.actinver.analisis.utils;

import mx.com.actinver.analisis.bo.ResultDto;
import mx.com.actinver.analisis.bo.ResultItemDto;




public class ResultBuilder {

	public static ResultDto successResult(String language) {
		ResultDto result = new ResultDto();
		result.setStatus(1);
		ResultItemDto res = new ResultItemDto();
		res.setCode("BEADM0000001");
		res.setCriticality("INFO");
		if(language.equals("SPA")){
			res.setDescription("EXITO");
		}
		else if(language.equals("ENG")){
			res.setDescription("SUCCESS");
		}
		res.setType("N");
		result.getMessages().getItem().add(res);
		return result;
	}
	public static ResultDto exceptionResult(Exception ex) {
		ResultDto result = new ResultDto();
		result.setStatus(2);
		ResultItemDto res = new ResultItemDto();
		res.setCode("BEADM0000002");
		res.setCriticality("ERROR");
		res.setDescription("ERROR:" + ex.getMessage());
		res.setType("T");
		result.getMessages().getItem().add(res);
		return result;
	}
	
	public static ResultDto notFoundResult(String language) {
		ResultDto result = new ResultDto();
		result.setStatus(2);
		ResultItemDto res = new ResultItemDto();
		res.setCode("BEADM0000003");
		res.setCriticality("ERROR");
		if(language.equals("SPA")){
			res.setDescription("SIN RESULTADOS");
		}
		else if(language.equals("ENG")){
			res.setDescription("NOT FOUND");
		}
		res.setType("N");
		result.getMessages().getItem().add(res);
		return result;
	}
	public static ResultDto incorrectArguments(String language) {
		ResultDto result = new ResultDto();
		result.setStatus(2);
		ResultItemDto res = new ResultItemDto();
		res.setCode("BEADM0000004");
		res.setCriticality("ERROR");
		if(language.equals("SPA")){
			res.setDescription("PARAMETROS DE ENTRADA INCORRECTOS");
		}
		else if(language.equals("ENG")){
			res.setDescription("INCORRECT INPUT PARAMETERS");
		}
		res.setType("T");
		result.getMessages().getItem().add(res);
		return result;
	}
	public static ResultDto languageNotDefined(String language) {
		ResultDto result = new ResultDto();
		result.setStatus(2);
		ResultItemDto res = new ResultItemDto();
		res.setCode("BEADM0000004");
		res.setCriticality("ERROR");
		res.setDescription("LENGUAJE NO DEFINIDO");
		res.setType("T");
		result.getMessages().getItem().add(res);
		return result;
	}
	public static ResultDto updateFailureResult(String language) {
		ResultDto result = new ResultDto();
		result.setStatus(2);
		ResultItemDto res = new ResultItemDto();
		res.setCode("BEADM0000005");
		res.setCriticality("ERROR");
		if(language.equals("SPA")){
			res.setDescription("NO SE PUEDE ACTUALIZAR");
		}
		else if(language.equals("ENG")){
			res.setDescription("CAN'T UPDATE");
		}
		res.setType("T");
		result.getMessages().getItem().add(res);
		return result;
	}

	public static ResultDto LoginFailure(String language, String msgError) {
		ResultDto result = new ResultDto();
		result.setStatus(2);
		ResultItemDto res = new ResultItemDto();
		res.setCode("BEADM0000006");
		res.setCriticality("ERROR");
		if(language.equals("SPA")){
			res.setDescription(msgError);
		}
		else if(language.equals("ENG")){
			res.setDescription(msgError);
		}
		res.setType("T");
		result.getMessages().getItem().add(res);
		return result;
	}

	public static ResultDto passwordIncorrect(String msgError) {
		ResultDto result = new ResultDto();
		result.setStatus(2);
		ResultItemDto res = new ResultItemDto();
		res.setCode("BEADM0000007");
		res.setCriticality("ERROR");
		res.setDescription(msgError);
		res.setType("T");
		result.getMessages().getItem().add(res);
		return result;
	}
	
	/**
	 * 
	 * @param language 
	 * @param msgError
	 * @return ResultDto con el status, msg, code y descripcion del mensaje.
	 */
	public static ResultDto existingRecord(String language, String msgError){
		ResultDto result = new ResultDto();
		result.setStatus(2);
		ResultItemDto res = new ResultItemDto();
		res.setCode("BEADM0000009");
		res.setCriticality("ERROR");
		res.setDescription(msgError);
		res.setType("T");
		result.getMessages().getItem().add(res);
		return result;
	}

}