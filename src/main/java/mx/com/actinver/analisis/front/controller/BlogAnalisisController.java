package mx.com.actinver.analisis.front.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;


import mx.com.actinver.analisis.bo.BlogUserCatAlias;
import mx.com.actinver.analisis.bo.CommentAnalisis;
import mx.com.actinver.analisis.bo.InfoFinanciera;
import mx.com.actinver.analisis.bo.UserBlog;
import mx.com.actinver.analisis.operations.OperQueryBackRest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/BlogAnalisisController")
public class BlogAnalisisController {
	private static final Logger logger = LoggerFactory.getLogger(BlogAnalisisController.class);

	
	@RequestMapping(value="/getFolioFront", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getFolioFront(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	getFolioFront	-	[Method]");
		request.setCharacterEncoding("UTF-8");
		String idEvent=request.getParameter("idEvent");
		String event=request.getParameter("event");
		Object[] responseBin;
			responseBin = OperQueryBackRest.getPostBlogAnalisis();
		return responseBin;
		
	}
	
	@RequestMapping(value="/getCommentByPost", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getCommentByPost(HttpServletRequest request) {
		logger.info("[Controller]	::	getCommentByPost	-	[Method]");
		String idPost=request.getParameter("idPost");
		logger.info("[Controller]	::	idPost	-	[parameter]"+idPost);
		Object[]	responseBin = OperQueryBackRest.getCommentByPost(idPost);
		return responseBin;
		
	}
	@RequestMapping(value="/setComment", method=RequestMethod.GET)
	@ResponseBody
	public Integer setComment(HttpServletRequest request) {
		logger.info("[Controller]	::	setComment	-	[Method]");
		Integer value1=Integer.parseInt(request.getParameter("idPost"));
		String value2=request.getParameter("comment");
		String  value3=request.getParameter("user");
		String value4 =request.getParameter("estatus");
		
		System.out.println("valor estatus"+value4);
		Integer	responseBin = OperQueryBackRest.setComment(value1,value2,value3,value4);
		return responseBin;
		
	}
	
	@RequestMapping(value="/getLikePost", method=RequestMethod.GET)
	@ResponseBody
	public int getLikePost(HttpServletRequest request) {
		logger.info("[Controller]	::	getCommentByPost	-	[Method]");
		String idPost=request.getParameter("idPost");
		logger.info("[Controller]	::	idPost	-	[parameter]"+idPost);
		int	responseBin = OperQueryBackRest.getLikePost(idPost);
		return responseBin;
		
	}
	//getCountComment
	@RequestMapping(value="/getCountComment", method=RequestMethod.GET)
	@ResponseBody
	public int getCountComment(HttpServletRequest request) {
		logger.info("[Controller]	::	getCountComment	-	[Method]");
		String idPost=request.getParameter("idPost");
		logger.info("[Controller]	::	idPost	-	[parameter]"+idPost);
		int	responseBin = OperQueryBackRest.getCountComment(idPost);
		return responseBin;
		
	}
	//setLikePost
	@RequestMapping(value="/setLikePost", method=RequestMethod.GET)
	@ResponseBody
	public Integer setLikePost(HttpServletRequest request) {
		logger.info("[Controller]	::	setComment	-	[Method]");
		Integer value1=Integer.parseInt(request.getParameter("idPost"));
		String  value2=request.getParameter("user");
		Integer	responseBin =0;
		if(value2!=null){
			responseBin = OperQueryBackRest.setLikePost(value1,value2);
		return responseBin;
		}else{
			return responseBin;
			
		}
	
		
	}
	@RequestMapping(value="/getPostByDate", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getPostByDate(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	getPostByDate	-	[Method]");
		request.setCharacterEncoding("UTF-8");

		String date=request.getParameter("date");
		Object[] responseBin;
			responseBin = OperQueryBackRest.getPostByDate(date);
		return responseBin;
		
	}
	@RequestMapping(value="/getPostByPage", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getPostByPage(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	getPostByPage	-	[Method]");
		request.setCharacterEncoding("UTF-8");
		Integer value1=Integer.parseInt(request.getParameter("page"));
	
		Object[] responseBin;
			responseBin = OperQueryBackRest.getPostByPage(value1);
		return responseBin;
		
	}
	@RequestMapping(value="/getStatusByUser", method=RequestMethod.GET)
	@ResponseBody
	public UserBlog getStatusByUser(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	getStatusByUser	-	[Method]");
		String user=request.getParameter("user");
		UserBlog responseBin;
			responseBin = OperQueryBackRest.getStatusByUser(user);
		return responseBin;
	}
	/*
	 * Guarda solo el analista
	 */
	@RequestMapping(value="/setUserAnalist", method=RequestMethod.GET)
	@ResponseBody
	public int setAlias(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	setUserAnalist	-	[Method]");
	
		String user=request.getParameter("user");
		String alias=request.getParameter("alias");
		int estatus=Integer.parseInt(request.getParameter("estatus"));
		String nombreUsuario=request.getParameter("nombreUsuario");
		int show=Integer.parseInt(request.getParameter("show"));
		String imguser=request.getParameter("imguser");
		int responseBin;
			responseBin = OperQueryBackRest.setAlias(user,alias,estatus,nombreUsuario,show,imguser);
		return responseBin;
		
	}
	
	@RequestMapping(value="/getPostLastFive", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getPostLastFive(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	getPostLastFive	-	[Method]");
		request.setCharacterEncoding("UTF-8");
		Object[] responseBin;
			responseBin = OperQueryBackRest.getPostLastFive();
		return responseBin;
		
	}
	
	@RequestMapping(value="/getPostByword", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getPostByword(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	getPostByword	-	[Method]");
		request.setCharacterEncoding("UTF-8");
		String word=request.getParameter("word");
		Object[] responseBin;
			responseBin = OperQueryBackRest.getPostByword(word);
		return responseBin;
		
	}
	
	@RequestMapping(value="/setPost", method=RequestMethod.POST, headers="Accept=application/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5")
	@ResponseBody
	public int setPost(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	setPost	-	[Method]");
		//request.setCharacterEncoding("UTF-8");
		String articulo=request.getParameter("articulo");
		logger.info("[parameter]	::	getPostByword	-	[parameter]"+articulo);
		
		int responseBinstr;
		return responseBinstr = OperQueryBackRest.setPost(articulo);
		
	}
	@RequestMapping(value="/setPostDos", method=RequestMethod.GET,headers = "Accept=application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5")
	@ResponseBody
	public int setPostDos(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	getPostByword	-	[Method]");
		request.setCharacterEncoding("UTF-8");
		String word=request.getParameter("articulo");
		String title=request.getParameter("title");
		String userid=request.getParameter("user");
		logger.info("[parameter]	::	setPostDos	-	[parameter]"+word);
		logger.info("[parameter]	::	setPostDos	-	[parameter]"+title);
		int  responseBin;
			responseBin = OperQueryBackRest.setPostDos(word,title,userid);
		return responseBin;
		
	}
	
	@RequestMapping(value="/getUserLikeIdPost", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getUserLikeIdPost(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	getUserLikeIdPost	-	[Method]");
	
		Integer idPost=Integer.parseInt(request.getParameter("idPost"));
		logger.info("[parameter]	::	getUserLikeIdPost	-	[parameter]"+idPost);
		
		Object[] responseBin;
			responseBin = OperQueryBackRest.getUserLikeIdPost(idPost);
		return responseBin;
	}
	
	@RequestMapping(value="/modPostbyIdpost", method=RequestMethod.GET)
	@ResponseBody
	public Integer modPostbyIdpost(HttpServletRequest request) {
		logger.info("[Controller]	::	modPostbyIdpost	-	[Method]");
		
		
		Integer value1=Integer.parseInt(request.getParameter("idPost"));
		logger.info("[parameter]	::	modPostbyIdpost	-	[parameter]"+value1);
		
		Integer	responseBin = OperQueryBackRest.modPostbyIdpost(value1);
		return responseBin;
		
	}
	
	@RequestMapping(value="/getPostByUser", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getPostByUser(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	getFolioFront	-	[Method]");
		String user=request.getParameter("user");
		Object[] responseBin;
			responseBin = OperQueryBackRest.getPostByUser(user);
		return responseBin;
	}
	
	@RequestMapping(value="/updatePostbig", method=RequestMethod.GET,headers = "Accept=application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5")
	@ResponseBody
	public int updatePostbig(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	getPostByword	-	[Method]");
		request.setCharacterEncoding("UTF-8");
		String word=request.getParameter("articulo");
		String title=request.getParameter("title");
		String idPost=request.getParameter("idPost");
		logger.info("[parameter]	::	updatePostbig	-	[parameter]"+word);
		logger.info("[parameter]	::	updatePostbig	-	[parameter]"+title);
		logger.info("[parameter]	::	updatePostbig	-	[parameter]"+title);
		int  responseBin;
			responseBin = OperQueryBackRest.updatePostbig(word,title,idPost);
		return responseBin;
		
	}
	
	@RequestMapping(value="/getUserCat", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getUserCat(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	getUserCat	-	[Method]");
	
		Object[] responseBin;
			responseBin = OperQueryBackRest.getUserCat();
		return responseBin;
		
	}

	@RequestMapping(value="/modCommentbyIdComment", method=RequestMethod.GET)
	@ResponseBody
	public Integer modCommentbyIdComment(HttpServletRequest request) {
		Integer value1=Integer.parseInt(request.getParameter("idComment"));
		Integer value2=Integer.parseInt(request.getParameter("estatus"));
		logger.info("[parameter]	::	modCommentbyIdComment	-	[parameter]"+value1);
		
		Integer	responseBin = OperQueryBackRest.modCommentbyIdComment(value1,value2);
		return responseBin;
		
	}
	//getUserAnalista
	@RequestMapping(value="/getUserAnalista", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getUserAnalista(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	getUserAnalista	-	[Method]");
	
		Object[] responseBin;
			responseBin = OperQueryBackRest.getUserAnalista();
		return responseBin;
		
	
	}
	
	//modUserAnalistaByUser
	@RequestMapping(value="/modUserAnalistaByUser", method=RequestMethod.GET)
	@ResponseBody
	public Integer modUserAnalistaByUser(HttpServletRequest request) {
		String value1=request.getParameter("idUser");
		logger.info("[parameter]	::	modUserAnalistaByUser	-	[parameter]"+value1);
		Integer	responseBin = OperQueryBackRest.modUserAnalistaByUser(value1);
		return responseBin;
		
	}
	//updateUserAnalistaByUser{tkn}/{idUser}/{name}/{newUser}/
	@RequestMapping(value="/updateUserAnalistaByUser", method=RequestMethod.GET)
	@ResponseBody
	public Integer updateUserAnalistaByUser(HttpServletRequest request) {
		String idUser=request.getParameter("idUser");
		String name=request.getParameter("name");
		String newUser=request.getParameter("newUser");
	
		Integer	responseBin = OperQueryBackRest.updateUserAnalistaByUser(idUser,name,newUser);
		return responseBin;
		
	}
	//getPostdate
	@RequestMapping(value="/getPostdate", method=RequestMethod.GET)
	@ResponseBody
	public Object[] getPostdate(HttpServletRequest request) {
		String date=request.getParameter("date");

	
		Object[] responseBin = OperQueryBackRest.getPostdate(date);
		return responseBin;
		
	}
	
	@RequestMapping(value="/setAlias2", method=RequestMethod.GET)
	@ResponseBody
	public UserBlog setAlias2(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	setAlias	-	[Method]");
	
		String user=request.getParameter("user");
		String alias=request.getParameter("alias");
		int estatus=Integer.parseInt(request.getParameter("estatus"));
		String nombreUsuario=request.getParameter("name");
		int show=Integer.parseInt(request.getParameter("show"));
		String imguser=request.getParameter("imguser");
		UserBlog responseBin;
			responseBin = OperQueryBackRest.setAlias2(user,alias,estatus,nombreUsuario,show,imguser);
		return responseBin;
		
	}
	@RequestMapping(value="/setAliasCat", method=RequestMethod.GET)
	@ResponseBody
	public UserBlog setAliasCat(HttpServletRequest request) throws UnsupportedEncodingException {
		logger.info("[Controller]	::	setAlias	-	[Method]");
	
		String user=request.getParameter("user");
		String alias=request.getParameter("alias");
		int estatus=Integer.parseInt(request.getParameter("estatus"));
		String nombreUsuario=request.getParameter("name");
		int show=Integer.parseInt(request.getParameter("show"));
		String imguser=request.getParameter("imguser");
	
	/*	'user' :user,
		'alias' :name,
		'estatus': estatus, 
		'name': nameTr,
		'show': show,
		'imguser':imgcodif*/
		
		
		
		
		UserBlog responseBin;
			responseBin = OperQueryBackRest.setAliasCat(user,alias,estatus,nombreUsuario,show,imguser);
		return responseBin;
		
	}
	
	//getPostdate
		@RequestMapping(value="/getAlias", method=RequestMethod.GET)
		@ResponseBody
		public UserBlog getAlias(HttpServletRequest request) {
			String user=request.getParameter("user");

		
			UserBlog responseBin = OperQueryBackRest.getAlias(user);
			return responseBin;
			
		}
	
//setUserAlias
		@RequestMapping(value="/setUserAlias", method=RequestMethod.GET)
		@ResponseBody
		public Integer setUserAlias(HttpServletRequest request) throws UnsupportedEncodingException {
			logger.info("[Controller]	::	setUserAlias	-	[Method]");
		
			String user=request.getParameter("user");
			String alias=request.getParameter("alias");
			int estatus=Integer.parseInt(request.getParameter("estatus"));
			String nombreUsuario=request.getParameter("nombreUsuario");
			int show=Integer.parseInt(request.getParameter("show"));
			int contrato=Integer.parseInt(request.getParameter("contrato"));
			///setUserAlias{tkn}/{user}/{alias}/{nombreUsuario}/{show}//{estatus}/
		
			Integer responseBin;
				responseBin = OperQueryBackRest.setUserAlias(user,alias,estatus,nombreUsuario,show,contrato);
			return responseBin;
			
		}
		//getUserCatAlias
		@RequestMapping(value="/getUserCatAlias", method=RequestMethod.GET)
		@ResponseBody
		public Object[]  getUserCatAlias(HttpServletRequest request) throws UnsupportedEncodingException {
			logger.info("[Controller]	::	getUserCatAlias	-	[Method]");
			///setUserAlias{tkn}/{user}/{alias}/{nombreUsuario}/{show}//{estatus}/
			Object[]  responseBin;
				responseBin = OperQueryBackRest.getUserCatAlias();
			return responseBin;
		}
		//getPostLikebyUser{tkn}/{idUser}/
		@RequestMapping(value="/getPostLikebyUser", method=RequestMethod.GET)
		@ResponseBody
		public Object[]  getPostLikebyUser(HttpServletRequest request) throws UnsupportedEncodingException {
			logger.info("[Controller]	::	getPostLikebyUser	-	[Method]");
			///setUserAlias{tkn}/{user}/{alias}/{nombreUsuario}/{show}//{estatus}/
			String user=request.getParameter("idUser");
			Object[]  responseBin;
				responseBin = OperQueryBackRest.getPostLikebyUser(user);
			return responseBin;
		}
		//getValidateuserPost
		@RequestMapping(value="/getValidateuserPost", method=RequestMethod.GET)
		@ResponseBody
		public Object[]  getValidateuserPost(HttpServletRequest request) throws UnsupportedEncodingException {
			logger.info("[Controller]	::	getValidateuserPost	-	[Method]");
			///setUserAlias{tkn}/{user}/{alias}/{nombreUsuario}/{show}//{estatus}/
			String user=request.getParameter("idUser");
			int idpost=Integer.parseInt(request.getParameter("idPost"));
			int idcoment=Integer.parseInt(request.getParameter("idComent"));
			Object[]  responseBin;
				responseBin = OperQueryBackRest.getValidateuserPost(user,idpost,idcoment);
			return responseBin;
		}
		///setUserPostComent{tkn}/{user}/{idpost}/{idcoment}/
		
		
		@RequestMapping(value="/setUserPostComent", method=RequestMethod.GET)
		@ResponseBody
		public Integer  setUserPostComent(HttpServletRequest request) throws UnsupportedEncodingException {
			logger.info("[Controller]	::	getValidateuserPost	-	[Method]");
			///setUserAlias{tkn}/{user}/{alias}/{nombreUsuario}/{show}//{estatus}/
			String user=request.getParameter("idUser");
			int idpost=Integer.parseInt(request.getParameter("idPost"));
			int idcoment=Integer.parseInt(request.getParameter("idComent"));
			
			Integer  responseBin;
				responseBin = OperQueryBackRest.setUserPostComent(user,idpost,idcoment);
			return responseBin;
		}
		
		@RequestMapping(value="/getAllBlogUser", method=RequestMethod.GET)
		@ResponseBody
		public Object[]  getAllBlogUser(HttpServletRequest request) throws UnsupportedEncodingException {
			logger.info("[Controller]	::	getAllBlogUser	-	[Method]");
			///setUserAlias{tkn}/{user}/{alias}/{nombreUsuario}/{show}//{estatus}/
			
			Object[]  responseBin;
				responseBin = OperQueryBackRest.getAllBlogUser();
			return responseBin;
		}
		
		//setLikePost
		@RequestMapping(value="/getLike", method=RequestMethod.GET)
		@ResponseBody
		public Integer getLike(HttpServletRequest request) {
			logger.info("[Controller]	::	getLike	-	[Method]");
			Integer value1=Integer.parseInt(request.getParameter("idPost"));
			String  value2=request.getParameter("user");
			Integer	responseBin = OperQueryBackRest.getLikePost(value1,value2);
			return responseBin;
			
		}
		
		@RequestMapping(value="/getPostByDateLess", method=RequestMethod.GET)
		@ResponseBody
		public Object[] getPostByDateLess(HttpServletRequest request) throws UnsupportedEncodingException {
			logger.info("[Controller]	::	getPostByPage	-	[Method]");
			request.setCharacterEncoding("UTF-8");
			String date =request.getParameter("date");
			Integer page=Integer.parseInt(request.getParameter("page"));
			
			Object[] responseBin;
				responseBin = OperQueryBackRest.getPostByDateLess(date,page);
			return responseBin;
			
		}
		
		@RequestMapping(value="/getCommentByPostAnalisis", method=RequestMethod.GET)
		@ResponseBody
		public Object[] getCommentByPostAnalisis(HttpServletRequest request) {
			logger.info("[Controller]	::	getCommentByPost	-	[Method]");
			String idPost=request.getParameter("idPost");
			logger.info("[Controller]	::	idPost	-	[parameter]"+idPost);
			Object[]	responseBin = OperQueryBackRest.getCommentByPostAnalisis(idPost);
			return responseBin;
			
		}
		/*
		 *actualiza relacion usarios post.
		 */
		//setUserComentAnalist/{idUser}/{idUserComent}/
		@RequestMapping(value="/setCommentAnalist", method=RequestMethod.GET)
		@ResponseBody
		public Integer setCommentAnalist(HttpServletRequest request) {
			logger.info("[Controller]	::	setComment	-	[Method]");
			
			String  idUser=request.getParameter("idUser");
			Integer idUserComent=Integer.parseInt(request.getParameter("idUserComent"));
		
			
		
			Integer	responseBin = OperQueryBackRest.setCommentAnalist(idUser,idUserComent);
			return responseBin;
			
		}
		//setComennetByPostParameterAnalist/{idPost}/{comentario}/{user}/{estatus}/"
		//getPostAnalisisAnalist/{user}
		@RequestMapping(value="/getPostAnalisisAnalist", method=RequestMethod.GET)
		@ResponseBody
		public Object[] getPostAnalisisAnalist(HttpServletRequest request) {
			logger.info("[Controller]	::	getPostAnalisisAnalist	-	[Method]");
			String  user=request.getParameter("user");
			Object[]	responseBin = OperQueryBackRest.getPostAnalisisAnalist(user);
			return responseBin;
		}
		/*
		 * guarda comentario solo en el adm de comentarios  con estatus 2 y en guarda relacion usarios post estatus 1
		 */
		
		@RequestMapping(value="/setComennetByPostParameterAnalist", method=RequestMethod.GET)
		@ResponseBody
		public Integer setComennetByPostParameterAnalist(HttpServletRequest request) {
			logger.info("[Controller]	::	setComment	-	[Method]");
			Integer value1=Integer.parseInt(request.getParameter("idPost"));
			String value2=request.getParameter("comment");
			String  value3=request.getParameter("user");
			String value4 =request.getParameter("estatus");
			
			System.out.println("valor estatus"+value4);
			Integer	responseBin = OperQueryBackRest.setComennetByPostParameterAnalist(value1,value2,value3,value4);
			return responseBin;
			
		}
		
		@RequestMapping(value="/deleteUser", method=RequestMethod.GET)
		@ResponseBody
		public Integer deleteUser(HttpServletRequest request) {
			logger.info("[Controller]	::	setComment	-	[Method]");
			Integer contrato=Integer.parseInt(request.getParameter("contrato"));
			String idusuario=request.getParameter("idusuario");
			String mensaje=request.getParameter("mensaje");
			Integer	responseBin = OperQueryBackRest.deleteUser(contrato,idusuario,mensaje);
			return responseBin;
			
		}
		@RequestMapping(value="/updPasswordUser", method=RequestMethod.GET)
		@ResponseBody
		public UserBlog updPasswordUser(HttpServletRequest request) {
			logger.info("[Controller]	::	updPasswordUser	-	[Method]");
			String  user=request.getParameter("user");
			String  oldpass=request.getParameter("oldpass");
			String  newpass=request.getParameter("newpass");
			UserBlog	responseBin = OperQueryBackRest.updPasswordUser(user,oldpass,newpass);
			return responseBin;
		}
		
		@RequestMapping(value="/getCommentByPostIdAll", method=RequestMethod.GET)
		@ResponseBody
		public Object[] getCommentByPostIdAll(HttpServletRequest request) {
			logger.info("[Controller]	::	getCommentByPostIdAll	-	[Method]");
			String idPost=request.getParameter("idPost");
			logger.info("[Controller]	::	IDPOST	-	[parameter]"+idPost);
			Object[]	responseBin = OperQueryBackRest.getCommentByPostIdAll(idPost);
			return responseBin;
			
		}
		

		
		@RequestMapping(value="/getPostNoPublish", method=RequestMethod.GET)
		@ResponseBody
		public Object[] getPostNoPublish(HttpServletRequest request) {
			logger.info("[Controller]	::	getPostNoPublish	-	[Method]");
			String  user=request.getParameter("user");
			Object[]	responseBin = OperQueryBackRest.getPostNoPublish(user);
			return responseBin;
		}
		
		
		
		@RequestMapping(value="/getCommentByPostNoPublish", method=RequestMethod.GET)
		@ResponseBody
		public Object[] getCommentByPostNoPublish(HttpServletRequest request) {
			logger.info("[Controller]	::	getCommentByPostNoPublish	-	[Method]");
			String idPost=request.getParameter("idPost");
			logger.info("[Controller]	::	IDPOST	-	[parameter]"+idPost);
			Object[]	responseBin = OperQueryBackRest.getCommentByPostNoPublish(idPost);
			return responseBin;
			
		}
		
		@RequestMapping(value="/getCountCommentNoPublish", method=RequestMethod.GET)
		@ResponseBody
		public int getCountCommentNoPublish(HttpServletRequest request) {
			logger.info("[Controller]	::	getCountCommentNoPublish	-	[Method]");
			String idPost=request.getParameter("idPost");
			logger.info("[Controller]	::	idPost	-	[parameter]"+idPost);
			int	responseBin = OperQueryBackRest.getCountCommentNoPublish(idPost);
			return responseBin;
			
		}
	
	
}
