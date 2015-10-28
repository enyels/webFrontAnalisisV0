package mx.com.actinver.analisis.front.controller;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;




import mx.com.actinver.analisis.operations.OperQueryBackRest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
@Controller
public class PageController {

	private static final Logger logger = LoggerFactory.getLogger(StandAloneController.class);

	@RequestMapping(value="/calendario", method=RequestMethod.GET)
	public String appCalendar(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appCalendar	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/calendariov0";
		return viewPage;
	}	
	
	@RequestMapping(value="/btnWishList", method=RequestMethod.GET)
	public String appBtnWishlist(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appBtnWishlist	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/btnWishList";
		return viewPage;
	}	
	@RequestMapping(value="/calculadora", method=RequestMethod.GET)
	public String appCalculadora(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appCalculadora	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/calculadora";
		return viewPage;
	}	
	@RequestMapping(value="/AdmCalculadora", method=RequestMethod.GET)
	public String appAdmCalculadora(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appAdmCalculadora	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/AdmCalculadora";
		return viewPage;
	}
	
	
	
	@RequestMapping(value="/AdmCalendario", method=RequestMethod.GET)
	public String appAdmCalendario(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appAdmUser	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/AdmCalendario";
		return viewPage;
	}
	
	@RequestMapping("/event")
	public ModelAndView getEvent() throws UnsupportedEncodingException {
		String message = null;
		OperQueryBackRest actividadBOImpl = new OperQueryBackRest();
		message=actividadBOImpl.getActivityClientFromBack();
		logger.info("****[Controller]	::	getEvent	-	[Method]"+message);
		return new ModelAndView("/pages/event", "message", message);
	}
	@RequestMapping(value="/blogAnalisis", method=RequestMethod.GET)
	public String appBlogAnalisis(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appBlogAnalisis	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/blogAnalisis";
		return viewPage;
	}
	@RequestMapping(value="/blogAnalisis2", method=RequestMethod.GET)
	public String appBlogAnalisis2(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appBlogAnalisis2	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/blogAnalisis2";
		return viewPage;
	}
	@RequestMapping(value="/blogAnalisis3", method=RequestMethod.GET)
	public String appBlogAnalisis3(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appBlogAnalisis3	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/blogAnalisis3";
		return viewPage;
	}
	@RequestMapping(value="/calculadoraFinanciera", method=RequestMethod.GET)
	public String appCalculadoraFinanciera(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appCalculadoraFinanciera	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/calculadoraFinanciera";
		return viewPage;
	}
	//blogAddPost.
	@RequestMapping(value="/blogAddPost", method=RequestMethod.GET)
	public String appBlogAddPost(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appBlogAddPost	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/blogAddPost";
		return viewPage;
	}
	@RequestMapping(value="/admBlogAnalisis", method=RequestMethod.GET)
	public String appAdmBlogAnalisis(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	admBlogAnalisis	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/admBlogAnalisis";
		return viewPage;
	}
	@RequestMapping(value="/blogAnalisis4", method=RequestMethod.GET)
	public String appBlogAnalisis4(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appBlogAnalisis4	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/blogAnalisis4";
		return viewPage;
	}
	@RequestMapping(value="/blogAnalisis6", method=RequestMethod.GET)
	public String appBlogAnalisis6(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	appBlogAnalisis6	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/blogAnalisis6";
		return viewPage;
	}
	@RequestMapping(value="/calculadoraFibras", method=RequestMethod.GET)
	public String appCalculadoraFibras(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	calculadoraFibras	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/calculadoraFibras";
		return viewPage;
	}
	//admBlogPostAnalisis.
	@RequestMapping(value="/admBlogPostAnalisis", method=RequestMethod.GET)
	public String appAdmBlogPostAnalisis(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	admBlogPostAnalisis	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/admBlogPostAnalisis";
		return viewPage;
	}
	//admBlogPostModAnalisis
	
	@RequestMapping(value="/admBlogPostModAnalisis", method=RequestMethod.GET)
	public String appAdmBlogPostModAnalisis(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	admBlogPostModAnalisis	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/admBlogPostModAnalisis";
		return viewPage;
	}
	
	//admBlogUserCat
	@RequestMapping(value="/admBlogUserCat", method=RequestMethod.GET)
	public String appAdmBlogUserCat(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	admBlogUserCat	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/admBlogUserCat";
		return viewPage;
	}
	
	@RequestMapping(value="/admBlogCommentAnalisis", method=RequestMethod.GET)
	public String appAdmBlogCommentAnalisis(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	admBlogCommentAnalisis	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/admBlogCommentAnalisis";
		return viewPage;
	}
	////admBlogUserAnalisis
	@RequestMapping(value="/admBlogUserAnalisis", method=RequestMethod.GET)
	public String appAdmBlogUserAnalisis(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	admBlogUserAnalisis	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/admBlogUserAnalisis";
		return viewPage;
	}
	
	@RequestMapping(value="/admBlogPostAnalisisSup", method=RequestMethod.GET)
	public String admBlogPostAnalisisSup(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	admBlogUserAnalisis	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/admBlogPostAnalisisSup";
		return viewPage;
	}
	//admBlogPerfil
	
	@RequestMapping(value="/admBlogPerfil", method=RequestMethod.GET)
	public String admBlogPerfil(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	admBlogPerfil	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/admBlogPerfil";
		return viewPage;
	}
	@RequestMapping(value="/admBlogUserCatAlias", method=RequestMethod.GET)
	public String admBlogUserCatAlias(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	admBlogUserCatAlias	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/admBlogUserCatAlias";
		return viewPage;
	}
	//admBlogModAlias
	
	@RequestMapping(value="/admBlogModAlias", method=RequestMethod.GET)
	public String admBlogModAlias(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	admBlogModAlias	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/admBlogModAlias";
		return viewPage;
	}
	//admBlogUpdateAlias.
	@RequestMapping(value="/admBlogUpdateAlias", method=RequestMethod.GET)
	public String admBlogUpdateAlias(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	admBlogModAlias	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/admBlogUpdateAlias";
		return viewPage;
	}
	@RequestMapping(value="/admBlogCommentEliminar", method=RequestMethod.GET)
	public String appAdmBlogCommentEliminar(HttpServletRequest request, Model model){
		logger.info("[Controller]	::	admBlogCommentEliminar	-	[Method]");
		String viewPage = "";
		viewPage = "/pages/admBlogCommentEliminar";
		return viewPage;
	}
}
