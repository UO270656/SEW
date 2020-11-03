package src;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class AppSmil {
	
	public static void main(String[] args) {
		try {
			System.out.println("Bienvenido a la aplicacion de gestion de playlist");
			lanzaApp(args[0]);
		} catch (Exception e) {
			System.err.print("Ha habido un fallo en la aplicacion, vuelva a lanzar la aplicacion");;
		}
	}
	public static void lanzaApp(String file) throws IOException, ParserConfigurationException, SAXException, TransformerException {
		BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
		recogerDatos(file,input);
		System.out.println("¿Desea seguir operando con la playlist?");
		System.out.println("-----------------------------------------------");
		System.out.println("Y -> Si");
		System.out.println("N -> No");
		if(input.readLine().equals("Y")) {
			lanzaApp(file);
		}
	}

	private static void recogerDatos(String file,BufferedReader input) throws IOException, ParserConfigurationException, SAXException, TransformerException {
		System.out.println("¿Que es lo que desea hacer?");
		System.out.println("-----------------------------------------------");
		System.out.println("A -> Añadir audio");
		System.out.println("B -> Modificar audio");
		String in=input.readLine();
		if(in.equals("A")||in.equals("a")) {
			añadirAudio(file,input);
		}else if(in.equals("B")||in.equals("b")) {
			modificarAudio(file,input);
		}
		
	}

	private static void modificarAudio(String file,BufferedReader input) throws IOException, ParserConfigurationException, SAXException, TransformerException {
		System.out.println("¿Cual es el src del audio que va a modificar?");
		String src = input.readLine();
		System.out.println("¿Desea añadir delay?");
		System.out.println("-----------------------------------------------");
		System.out.println("Y -> Si");
		System.out.println("Otra cosa -> No");
		int delay=0;
		if(input.readLine().equals("Y")) {
			System.out.println("¿Cuanto? (en segundos)");
			delay=Integer.parseInt(input.readLine());
			System.out.println("Añadido delay de "+delay+" segundos");
		}else {
			delay=0;
		}
		System.out.println("¿En que segundo empieza el audio?");
		float clip_start=Float.parseFloat(input.readLine());
		System.out.println("¿En que segundo acaba el audio?");
		float clip_end=Float.parseFloat(input.readLine());
		leerSMIL(file, src, delay, clip_start, clip_end);
	}
	
	private static void añadirAudio(String file,BufferedReader input) throws IOException, ParserConfigurationException, SAXException, TransformerException {
		System.out.println("¿Cual es el src del audio que va a añadir?");
		String src = input.readLine();
		System.out.println("¿Desea añadir delay?");
		System.out.println("-----------------------------------------------");
		System.out.println("Y -> Si");
		System.out.println("Otra cosa -> No");
		int delay=0;
		if(input.readLine().equals("Y")) {
			System.out.println("¿Cuanto? (en segundos)");
			delay=Integer.parseInt(input.readLine());
			System.out.println("Añadido delay de "+delay+" segundos");
		}else {
			delay=0;
		}
		System.out.println("¿En que segundo empieza el audio?");
		float clip_start=Float.parseFloat(input.readLine());
		System.out.println("¿En que segundo acaba el audio?");
		float clip_end=Float.parseFloat(input.readLine());
		System.out.println("¿Desea añadirlo al principio o al final de la playlist?");
		System.out.println("-----------------------------------------------");
		System.out.println("A -> Al principio");
		System.out.println("B -> Al final");
		String in=input.readLine();
		if(in.equals("A")||in.equals("a")) {
			FileReader reader=new FileReader(new File(file));
			BufferedReader buffreader=new BufferedReader(reader);
			StringBuilder str= new StringBuilder();
			String line;
			while((line=buffreader.readLine())!=null) {
				str.append(line+"\n");
			}
			buffreader.close();
			reader.close();
			String ficher=str.toString();
			String[] partes=ficher.split("<seq>");
			partes[0]+="<seq>";
			partes[1]="\n\t\t\t\t<audio src=\""+src+"\" delay=\""+delay+"\" clip-begin=\""+clip_start+"\" clip-end=\""+clip_end+"\"/>"+partes[1];
			FileWriter writer =new FileWriter(new File(file));
			PrintWriter pwriter=new PrintWriter(writer);
			pwriter.print(""+partes[0]+partes[1]);
			pwriter.close();
			writer.close();
		}else if(in.equals("B")||in.equals("b")) {
			FileReader reader=new FileReader(new File(file));
			BufferedReader buffreader=new BufferedReader(reader);
			StringBuilder str= new StringBuilder();
			String line;
			while((line=buffreader.readLine())!=null) {
				str.append(line+"\n");
			}
			buffreader.close();
			reader.close();
			String ficher=str.toString();
			String[] partes=ficher.split("</seq>");
			partes[0]+="<audio src=\""+src+"\" delay=\""+delay+"\" clip-begin=\""+clip_start+"\" clip-end=\""+clip_end+"\"/>\n\t\t\t\t";
			partes[1]="</seq>"+partes[1];
			FileWriter writer =new FileWriter(new File(file));
			PrintWriter pwriter=new PrintWriter(writer);
			pwriter.print(""+partes[0]+partes[1]);
			pwriter.close();
			writer.close();
		}
	}
	public static void leerSMIL(String fichero,String src,int delay,float clip_start, float clip_end) throws ParserConfigurationException, SAXException, IOException, TransformerException {
		StringBuilder nuevofichero=new StringBuilder();
		// Creo una instancia de DocumentBuilderFactory
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		// Creo un documentBuilder
		DocumentBuilder builder = factory.newDocumentBuilder();
		// Obtengo el documento, a partir del XML
		Document documento = builder.parse(new File(fichero));
		NodeList nodes=documento.getChildNodes();
		for (int i = 0; i < nodes.getLength(); i++) {
			// Cojo el nodo actual
			Node nodo1 = nodes.item(i);
			// Compruebo si el nodo es un elemento
			if (nodo1.getNodeType() == Node.ELEMENT_NODE) {
				// Lo transformo a Element
				Element e = (Element) nodo1;
				// Obtengo sus hijos
				NodeList nodes1 = e.getChildNodes();
				for (int j = 0; j < nodes1.getLength(); j++) {
					// Cojo el nodo actual
					Node nodo2 = nodes1.item(j);
					// Compruebo si el nodo es un elemento
					if (nodo2.getNodeType() == Node.ELEMENT_NODE) {
						if(nodo2.getNodeName().equals("body")) {
							// Lo transformo a Element
							Element ebody = (Element) nodo2;
							// Obtengo sus hijos
							NodeList nodes2 = ebody.getChildNodes();
							for (int r = 0; r < nodes2.getLength(); r++) {
								Node nodoBody = nodes2.item(r);
								if (nodoBody.getNodeType() == Node.ELEMENT_NODE) {
									// Lo transformo a Element
									Element eseq = (Element) nodo1;
									// Obtengo sus hijos
									NodeList nodes3 = eseq.getChildNodes();
									for (int s = 0; s < nodes3.getLength(); s++) {
										// Cojo el nodo actual
										Node nodoseq = nodes3.item(s);
										// Compruebo si el nodo es un elemento
										if (nodoseq.getNodeType() == Node.ELEMENT_NODE) {
											// Lo transformo a Element
											Element e2 = (Element) nodoseq;
											// Obtengo sus hijos
											NodeList nodes4 = e2.getChildNodes();
											for (int t = 0; t < nodes4.getLength(); t++) {
												// Cojo el nodo actual
												Node nodofinal = nodes4.item(t);
												// Compruebo si el nodo es un elemento
												if (nodofinal.getNodeType() == Node.ELEMENT_NODE) {
													// Lo transformo a Element
													Element e3 = (Element) nodofinal;
													// Obtengo sus hijos
													NodeList nodes5 = e3.getChildNodes();
													for (int u = 0; u < nodes5.getLength(); u++) {
														// Cojo el nodo actual
														Node nodomultimedia = nodes5.item(u);
														// Compruebo si el nodo es un elemento
														if (nodomultimedia.getNodeType() == Node.ELEMENT_NODE) {
															Element emultimedia = (Element) nodomultimedia;
															if(emultimedia.getAttribute("src").equals(src)) {
																emultimedia.setAttribute("delay", delay+"");
																emultimedia.setAttribute("clip-begin", clip_start+"");
																emultimedia.setAttribute("clip-end", clip_end+"");
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		TransformerFactory transformerFactory = TransformerFactory.newInstance();
		Transformer transformer = transformerFactory.newTransformer();
		DOMSource source = new DOMSource(documento);
		FileWriter writer = new FileWriter(new File(fichero));
		StreamResult result = new StreamResult(writer);
		transformer.transform(source, result);
	}
}
