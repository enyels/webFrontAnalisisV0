package mx.com.actinver.analisis.front.controller;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;

import mx.com.actinver.analisis.bo.Operatividad;
import mx.com.actinver.analisis.bo.WhishList;
import mx.com.actinver.analisis.bo.WishList;
import mx.com.actinver.analisis.operations.OperQueryBackRest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;




@Controller
@RequestMapping("/WishListController")
public class WishListController {
	public Boolean exiteMensaje=Boolean.TRUE;
	private static final Logger logger = LoggerFactory.getLogger(WishListController.class);
	
	@RequestMapping(value="/formWishList", method=RequestMethod.GET)
	public String appBtnWishList(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appBtnWishList	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/formWishList";
		logger.info(viewPage);
		return viewPage;
	}
	
	
	@RequestMapping(value="/getMessage", method=RequestMethod.GET)
	@ResponseBody
	public WhishList appgetMessage(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appgetMessagedel front	-	[Method]");
		String usuario=request.getParameter("usuario");
		logger.info("[Controller]	::	parameter	-	[usuario]"+usuario);
		WhishList responseMessage =OperQueryBackRest.getMessageWhish(usuario);
		return responseMessage;
	}
	
/*	@RequestMapping(value="/validaMessageFront", method=RequestMethod.GET)
	@ResponseBody
	public WhishList appgetvalidaMessage(HttpServletRequest request, Model model) throws UnsupportedEncodingException{
		logger.info("[Controller]	::	appgetvalidaMessage front	-	[Method]");
		 request.setCharacterEncoding("UTF-8");
		String usuario=request.getParameter("usuario");
		String mensaje=request.getParameter("mensaje");
		logger.info("[Controller]	::	parameter	-	[usuario]"+usuario);
		logger.info("[Controller]	::	parameter	-	[mensaje]"+mensaje);
	 

		
		WhishList responseMessage =OperQueryBackRest.getValidaDataWhish(usuario,mensaje);
		return responseMessage;
	}*/


	
	
}
