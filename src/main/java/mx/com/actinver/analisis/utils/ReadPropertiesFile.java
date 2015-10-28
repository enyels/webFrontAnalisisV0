package mx.com.actinver.analisis.utils;



import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class ReadPropertiesFile {

	/* */
	//private final static String PATH_PROPERTIES = "/properties/";
	private final static String PATH_PROPERTIES = "Aplicacion/Oracle/Middleware/Oracle_WT1/instances/instance1/config/OHS/ohs1/htdocs/resources/";
	private final static String GA_CONFIG_PROPERTIES_NAME = "config.properties";
	private final static String URL_WS_FRONT = "url_ws_front";
	private final static String URL_WS_BACK = "url_ws_back";
	private static Properties configProps = null;
	static {
		configProps = new Properties();
			FileReader fr;
			try {
				fr = new FileReader(new File(
						PATH_PROPERTIES.concat(GA_CONFIG_PROPERTIES_NAME)));
			//System.out.println(GA_CONFIG_PROPERTIES_NAME);
				configProps.load(fr);
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}

	/**
	 * 
	 * @param propertyKey
	 * @return
	 */
	public static String getPropertiesConfig(final String propertyKey) {
		return configProps.getProperty(propertyKey);
	}

	/**
	 * 
	 * @return
	 */
	public static String getUrlWsFront() {
		return configProps.getProperty(URL_WS_FRONT);
	}

	public static String getUrlWsBack() {
		return configProps.getProperty(URL_WS_BACK);
	}

	
	
}