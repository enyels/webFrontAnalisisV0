package mx.com.actinver.analisis.operations;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class OperSendEmail {
	
	public static String MAIL_SMTP_HOST = "masivos.actinver.com.mx";
	public static String MAIL_SMTP_SATARTTLS_ENABLE = "true";
	public static String MAIL_SMTP_PORT = "25";
	public static String MAIL_SMTP_USER = "webmaster@actinver.com.mx";
	public static String MAIL_SMTP_AUTH = "true";
	public static String MAIL_SMTP_PASS = "actinver6";
	
//	public static void formSendMail(String dcto, String autor, String email) throws AddressException, MessagingException {
	public static void formSendMail(String valOrigen, String valDestino, String valAsunto, String valMensaje) throws AddressException, MessagingException {
	
		String EMAIL_FROM_ADDR = valOrigen;
	    String EMAIL_TO_ADDR = valDestino;
		String EMAIL_SUBJECT = valAsunto;
		String EMAIL_CONTENT = valMensaje;
		
		Properties myProp = new Properties();
		myProp.setProperty("mail.smtp.host", MAIL_SMTP_HOST);
		myProp.setProperty("mail.smtp.starttls.enable", MAIL_SMTP_SATARTTLS_ENABLE);
		myProp.setProperty("mail.smtp.port", MAIL_SMTP_PORT);
		myProp.setProperty("mail.smtp.user", MAIL_SMTP_USER);
		myProp.setProperty("mail.smtp.auth", MAIL_SMTP_AUTH);
		
		Session mySessJmail = Session.getDefaultInstance(myProp);
		MimeMessage myMessage = new MimeMessage(mySessJmail);
		myMessage.setFrom(new InternetAddress(EMAIL_FROM_ADDR));
		myMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(EMAIL_TO_ADDR));
		
		if (EMAIL_TO_ADDR.equals("rrojas@actinver.com.mx")) {
			myMessage.addRecipient(Message.RecipientType.TO, new InternetAddress("gpartida@actinver.com.mx"));
			myMessage.addRecipient(Message.RecipientType.TO, new InternetAddress("lbasurto@actinver.com.mx"));
		}
		
		myMessage.setSubject(EMAIL_SUBJECT);
		myMessage.setText(EMAIL_CONTENT);
		
		Transport t = mySessJmail.getTransport("smtp");
		t.connect(MAIL_SMTP_USER, MAIL_SMTP_PASS);
		t.sendMessage(myMessage, myMessage.getAllRecipients());
		t.close();
	}
}
