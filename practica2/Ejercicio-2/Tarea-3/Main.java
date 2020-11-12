package src;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class Main {

	public static void main(String[] args) {
		try {
//			archivoHTML(args[0],"rutas.html");
//			archivoKML(args[0],"rutas.kml");
			archivoSVG(args[0],"rutas");
		} catch (ParserConfigurationException | SAXException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

//	public static void archivoHTML(String ficheroName, String htmlName) throws ParserConfigurationException, SAXException, IOException {
//		OutputStream os = new FileOutputStream(htmlName);
//		PrintWriter pw = new PrintWriter(new OutputStreamWriter(os, "UTF-8"));
//		pw.print("<!DOCTYPE HTML>\r\n" + 
//				"\r\n" + 
//				"<html lang=\"es\">\r\n" + 
//				"<head>\r\n" + 
//				"    <!-- Datos que describen el documento -->\r\n" + 
//				"    <meta charset=\"UTF-8\">\r\n" + 
//				"    <link rel=\"stylesheet\" type=\"text/css\" href=\"estilo.css\">"	+
//				"    <title>Practica 2</title>\r\n" + 
//				"    <META name=\"rutas\" CONTENT=\"Rutas de la segunda practica\">\r\n" + 
//				"</head>\r\n" + 
//				"\r\n" + 
//				"<body>\r\n" + 
//				"    <!-- Datos con el contenidos que aparece en el navegador -->\r\n" + 
//				"    <header>\r\n" + 
//				"        <h1 class=\"principal\">Rutas de Drones SEW 2020</h1>\r\n" + 
//				"    </header>\r\n" + 
//				"    <section>\r\n");
//		// Creo una instancia de DocumentBuilderFactory
//		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
//		// Creo un documentBuilder
//		DocumentBuilder builder = factory.newDocumentBuilder();
//		// Obtengo el documento, a partir del XML
//		Document documento = builder.parse(new File(ficheroName));
//		// Cojo todas las etiquetas rutas del documento
//		NodeList listaRutas = documento.getElementsByTagName("rutas");
//		// Recorro las etiquetas
//		for (int i = 0; i < listaRutas.getLength(); i++) {
//			// Cojo el nodo actual
//			Node nruta = listaRutas.item(i);
//			// Compruebo si el nodo es un elemento
//			if (nruta.getNodeType() == Node.ELEMENT_NODE) {
//				// Lo transformo a Element
//				Element e = (Element) nruta;
//				// Obtengo sus hijos
//				NodeList nDatos = e.getChildNodes();
//				for (int j = 0; j < nDatos.getLength(); j++) {
//					// Obtengo al hijo actual
//					Node hijo = nDatos.item(j);
//					// Compruebo si es un nodo
//					if (hijo.getNodeType() == Node.ELEMENT_NODE) {
//						// Lo transformo a Element
//						Element e1 = (Element) hijo;
//						pw.print("    	<h2>"+e1.getAttribute("nombre")+", Tipo: "+e1.getAttribute("tipo")+", dificultad "+e1.getAttribute("dificultad")+"</h2>\r\n" + 
//								"           <table>\r\n");
//						// Obtengo sus hijos
//						NodeList nHijosDatos = e1.getChildNodes();
//						for (int q = 0; q < nHijosDatos.getLength(); q++) {
//							// Obtengo al hijo actual
//							Node hijo2 = nHijosDatos.item(q);
//							// Compruebo si es un nodo
//							if (hijo2.getNodeType() == Node.ELEMENT_NODE) {
//								// Lo transformo a Element
//								Element e2 = (Element) hijo2;
//								// Obtengo sus hijos
//								NodeList nHijos2Datos = e2.getChildNodes();
//								for (int r = 0; r < nHijos2Datos.getLength(); r++) {
//									// Obtengo al hijo actual
//									Node hijo3 = nHijos2Datos.item(r);
//									// Compruebo si es un nodo
//									if (hijo3.getNodeType() == Node.ELEMENT_NODE && hijo3.getNodeName()!="referencia") {
//										// Lo transformo a Element
//										Element e3 = (Element) hijo3;
//										// Obtengo sus hijos
//										NodeList nHijos3Datos = e3.getChildNodes();
//										pw.print("           	<tr>\r\n" + 
//												"               	<th >"+hijo3.getNodeName()+": "+ hijo3.getAttributes().getNamedItem("nombre").getTextContent()+"</th>\r\n" + 
//												"               	<td>\r\n"+
//												"  		           	<table>\r\n");
//										for (int s = 0; s < nHijos3Datos.getLength(); s++) {
//											// Obtengo al hijo actual
//											Node hijo4 = nHijos3Datos.item(s);
//											// Compruebo si es un nodo
//											if (hijo4.getNodeType() == Node.ELEMENT_NODE) {
//												// Lo transformo a Element
//												Element e4 = (Element) hijo4;
//												// Obtengo sus hijos
//												NodeList nHijos4Datos = e4.getChildNodes();
//												for (int t = 0; t < nHijos4Datos.getLength(); t++) {
//													// Obtengo al hijo actual
//													Node hijo5 = nHijos4Datos.item(t);
//													// Compruebo si es un nodo
//													if (hijo5.getNodeType() == Node.ELEMENT_NODE) {
//														
//													}
//												}if(hijo4.getNodeName()=="fotografias"||hijo4.getNodeName()=="videos") {
//													String[] str1=hijo4.getTextContent().split("https://");
//													pw.print("           			<tr>\r\n" + 
//															"               			<th rowspan="+(str1.length-1)+">"+hijo4.getNodeName()+"</th>\r\n" + 
//															"               			<td><a href=\""+"https://"+str1[1].trim()+"\">"+hijo4.getNodeName().substring(0, hijo4.getNodeName().length()-1)+" "+(1)+"</a></td>\r\n" +
//															"             			</tr>\r\n");
//													for(int a=2;a<str1.length;a++) {
//														pw.print("           			<tr>\r\n" + 
//																"               			<td><a href=\""+"https://"+str1[a].trim()+"\">"+hijo4.getNodeName().substring(0, hijo4.getNodeName().length()-1)+" "+(a)+"</a></td>\r\n" + 
//																"             			</tr>\r\n");
//													}
//												}else {
//													pw.print("           			<tr>\r\n" + 
//															"               			<th>"+hijo4.getNodeName()+"</th>\r\n" + 
//															"               			<td>"+hijo4.getTextContent()+"</td>\r\n" + 
//															"             			</tr>\r\n");
//												}
//											}
//										}
//										pw.print("  	</table>\r\n" + 
//												"    </td>\r\n"+
//												"  	</tr>\r\n");
//									}
//								}
//								if(hijo2.getNodeName()=="referencias") {
//									String[] str=hijo2.getTextContent().split("http");
//									pw.print("           	<tr>\r\n" + 
//											"              <th rowspan="+(str.length-1)+">"+hijo2.getNodeName()+"</th>\r\n" + 
//											"              <td>"+"http"+str[1]+"</td>\r\n" + 
//											"           	</tr>\r\n");
//									for(int a=2;a<str.length;a++) {
//										pw.print("           	<tr>\r\n" + 
//												"              <td>"+"http"+str[a]+"</td>\r\n" + 
//												"           	</tr>\r\n");
//									}
//								}else if(hijo2.getNodeName()!="hitos"){
//									pw.print("           	<tr>\r\n" + 
//											"              <th>"+hijo2.getNodeName()+"</th>\r\n" + 
//											"              <td>"+hijo2.getTextContent()+"</td>\r\n" + 
//											"            </tr>\r\n");
//								}
//								}
//							}
//							pw.print("         </table>\r\n");
//						}
//
//					}
//				}
//
//			}
//		pw.print("    </section>\r\n");
//		pw.print("</body>\r\n");
//		pw.print("</html>\r\n");
//		pw.close();
//	}
	
//	public static void archivoKML (String ficheroName, String htmlName) throws ParserConfigurationException, SAXException, IOException {
//		String longhito="";
//		FileWriter fw= new FileWriter(htmlName);
//		PrintWriter pw = new PrintWriter(fw);
//		pw.print("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
//				+"<kml xmlns=\"http://www.opengis.net/kml/2.2\"> <Document id='Universidad de Oviedo'>\n"
//				+"<name>Rutas</name>\n"
//				+"<description>Rutas generadas a partir del fichero xml</description>\n"
//				+ "<Style id=\"yellowLineGreenPoly\">\n" + 
//				" <LineStyle>\n" + 
//				" <color>7f00ffff</color>\n" + 
//				" <width>4</width>\n" + 
//				" </LineStyle>\n" + 
//				" <PolyStyle>\n" + 
//				" <color>7f00ff00</color>\n" + 
//				" </PolyStyle>\n" + 
//				" </Style>\n");
//		// Creo una instancia de DocumentBuilderFactory
//		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
//		// Creo un documentBuilder
//		DocumentBuilder builder = factory.newDocumentBuilder();
//		// Obtengo el documento, a partir del XML
//		Document documento = builder.parse(new File(ficheroName));
//		// Cojo todas las etiquetas rutas del documento
//		NodeList listaRutas = documento.getElementsByTagName("rutas");
//		// Recorro las etiquetas
//		for (int i = 0; i < listaRutas.getLength(); i++) {
//			// Cojo el nodo actual
//			Node nruta = listaRutas.item(i);
//			// Compruebo si el nodo es un elemento
//			if (nruta.getNodeType() == Node.ELEMENT_NODE) {
//				// Lo transformo a Element
//				Element e = (Element) nruta;
//				// Obtengo sus hijos
//				NodeList nDatos = e.getChildNodes();
//				for (int j = 0; j < nDatos.getLength(); j++) {
//					// Obtengo al hijo actual
//					Node hijo = nDatos.item(j);
//					// Compruebo si es un nodo
//					if (hijo.getNodeType() == Node.ELEMENT_NODE) {
//						// Lo transformo a Element
//						Element e1 = (Element) hijo;
//						pw.print("	<Placemark>\n"+"		<name>"+e1.getAttribute("nombre")+"</name>\n");
//						// Obtengo sus hijos
//						NodeList nHijosDatos = e1.getChildNodes();
//						for (int q = 0; q < nHijosDatos.getLength(); q++) {
//							// Obtengo al hijo actual
//							Node hijo2 = nHijosDatos.item(q);
//							// Compruebo si es un nodo
//							if (hijo2.getNodeType() == Node.ELEMENT_NODE) {
//								if(hijo2.getNodeName()=="descripcion") {
//									pw.print("		<description>"+hijo2.getTextContent()+"</description>\n"
//											+"		<styleUrl>#yellowLineGreenPoly</styleUrl>\n" + 
//											"		<LineString>\n" + 
//											"			<extrude>1</extrude>\n" + 
//											"			<tessellate>1</tessellate>\n" + 
//											"			<altitudeMode>absoluto</altitudeMode>\n");
//									pw.print("			<coordinates> ");
//								}
//								// Lo transformo a Element
//								Element e2 = (Element) hijo2;
//								// Obtengo sus hijos
//								NodeList nHijos2Datos = e2.getChildNodes();
//								for (int r = 0; r < nHijos2Datos.getLength(); r++) {
//									// Obtengo al hijo actual
//									Node hijo3 = nHijos2Datos.item(r);
//									// Compruebo si es un nodo
//									if (hijo3.getNodeType() == Node.ELEMENT_NODE && hijo3.getNodeName()!="referencia") {
//										// Lo transformo a Element
//										Element e3 = (Element) hijo3;
//										// Obtengo sus hijos
//										NodeList nHijos3Datos = e3.getChildNodes();
//										
//										for (int s = 0; s < nHijos3Datos.getLength(); s++) {
//											// Obtengo al hijo actual
//											Node hijo4 = nHijos3Datos.item(s);
//											// Compruebo si es un nodo
//											if (hijo4.getNodeType() == Node.ELEMENT_NODE) {
//												// Lo transformo a Element
//												Element e4 = (Element) hijo4;
//												// Obtengo sus hijos
//												NodeList nHijos4Datos = e4.getChildNodes();
//												for (int t = 0; t < nHijos4Datos.getLength(); t++) {
//													// Obtengo al hijo actual
//													Node hijo5 = nHijos4Datos.item(t);
//													// Compruebo si es un nodo
//													if (hijo5.getNodeType() == Node.ELEMENT_NODE) {
//														
//													}
//												}if(hijo4.getNodeName()=="long_hito"){
//													longhito=hijo4.getTextContent();
//												}else if(hijo4.getNodeName()=="lat_hito"){
//													pw.print(hijo4.getTextContent()+","+longhito+",");
//												}else if(hijo4.getNodeName()=="alt_hito") {
//													pw.print(hijo4.getTextContent()+"\n			");
//												}
//											}
//										}
//									}
//								}
//								}
//							}
//							pw.print("</coordinates>\n		</LineString>\n	</Placemark>\n");
//						}
//
//					}
//				}
//
//			}
//		pw.print("</Document> </kml>\n");
//		pw.close();
//	}
	
	public static void archivoSVG (String ficheroName, String svgName) throws ParserConfigurationException, SAXException, IOException {
		int number=1;
		String[] stringsTexto=new String[3];
		// Creo una instancia de DocumentBuilderFactory
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		// Creo un documentBuilder
		DocumentBuilder builder = factory.newDocumentBuilder();
		// Obtengo el documento, a partir del XML
		Document documento = builder.parse(new File(ficheroName));
		// Cojo todas las etiquetas rutas del documento
		NodeList listaRutas = documento.getElementsByTagName("rutas");
		// Recorro las etiquetas
		for (int i = 0; i < listaRutas.getLength(); i++) {
			// Cojo el nodo actual
			Node nruta = listaRutas.item(i);
			// Compruebo si el nodo es un elemento
			if (nruta.getNodeType() == Node.ELEMENT_NODE) {
				// Lo transformo a Element
				Element e = (Element) nruta;
				// Obtengo sus hijos
				NodeList nDatos = e.getChildNodes();
				for (int j = 0; j < nDatos.getLength(); j++) {
					// Obtengo al hijo actual
					Node hijo = nDatos.item(j);
					// Compruebo si es un nodo
					if (hijo.getNodeType() == Node.ELEMENT_NODE) {
						int lon=50;
						FileWriter fw= new FileWriter(svgName+number+".svg");
						number++;
						PrintWriter pw = new PrintWriter(fw);
						pw.print("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n" + 
								"<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"2.0\">\n"
								+"<rect x=\"25\" y=\"25\" width=\"200\" height=\"375\" fill=\"none\" stroke-width=\"4\" stroke=\"red\" />\n");
						int stringNumber=0;
						// Lo transformo a Element
						Element e1 = (Element) hijo;
						// Obtengo sus hijos
						NodeList nHijosDatos = e1.getChildNodes();
						for (int q = 0; q < nHijosDatos.getLength(); q++) {
							// Obtengo al hijo actual
							Node hijo2 = nHijosDatos.item(q);
							// Compruebo si es un nodo
							if (hijo2.getNodeType() == Node.ELEMENT_NODE) {
								if(hijo2.getNodeName()=="alt_ini") {
									pw.print("<text x=\""+lon+"\" y=\""+405+"\" fill=\"black\" style=\"writing-mode: tb;\">"+"Inicio"+"</text>\n");
									pw.print("<polyline points=\""+lon+","+hijo2.getTextContent()+" ");
									lon+=50;
								}
								// Lo transformo a Element
								Element e2 = (Element) hijo2;
								// Obtengo sus hijos
								NodeList nHijos2Datos = e2.getChildNodes();
								for (int r = 0; r < nHijos2Datos.getLength(); r++) {
									// Obtengo al hijo actual
									Node hijo3 = nHijos2Datos.item(r);
									// Compruebo si es un nodo
									if (hijo3.getNodeType() == Node.ELEMENT_NODE) {
									
										// Lo transformo a Element
										Element e3 = (Element) hijo3;
										// Obtengo sus hijos
										NodeList nHijos3Datos = e3.getChildNodes();
										
										for (int s = 0; s < nHijos3Datos.getLength(); s++) {
											// Obtengo al hijo actual
											Node hijo4 = nHijos3Datos.item(s);
											// Compruebo si es un nodo
											if (hijo4.getNodeType() == Node.ELEMENT_NODE) {
												// Lo transformo a Element
												Element e4 = (Element) hijo4;
												// Obtengo sus hijos
												NodeList nHijos4Datos = e4.getChildNodes();
												for (int t = 0; t < nHijos4Datos.getLength(); t++) {
													// Obtengo al hijo actual
													Node hijo5 = nHijos4Datos.item(t);
													// Compruebo si es un nodo
													if (hijo5.getNodeType() == Node.ELEMENT_NODE) {
													}
												}if(hijo4.getNodeName()=="alt_hito") {
													pw.print(lon+","+(400-Integer.valueOf((hijo4.getTextContent())))+" ");
													Element ex=(Element) hijo4.getParentNode();
													stringsTexto[stringNumber]="<text x=\""+lon+"\" y=\""+405+"\" fill=\"black\" style=\"writing-mode: tb;\">"+ex.getAttribute("nombre")+"</text>";
													stringNumber++;
													lon+=50;
												}
											}
										}
									}
								}
								}
							}
							pw.print("\" stroke=\"red\" stroke-width=\"4\" fill=\"none\" />\n");
							for(String aux:stringsTexto) {
								pw.print(aux+"\n");
							}
							pw.print("<text x=\""+230+"\" y=\""+400+"\" fill=\"black\" >"+"Nivel del mar"+"</text>\n");
							pw.print("<text x=\""+230+"\" y=\""+200+"\" fill=\"brown\" >"+"200 metros"+"</text>\n");
							pw.print("<line x1=\"25\" y1=\"200\" x2=\"225\" y2=\"200\" stroke=\"brown\" stroke-width=\"6\"/>");
							pw.print("</svg>\n");
							pw.close();
						}

					}
				}

			}
	}

}
