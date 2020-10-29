<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <h1>Rutas con drones</h1>
        <xsl:apply-templates/>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="rutas">
    <p>
      <xsl:apply-templates select="ruta"/>
    </p>
  </xsl:template>

  <xsl:template match="ruta">
    Nombre: <xsl:value-of select="ruta/@nombre"/>
    Agencia: <xsl:value-of select="ruta/@nombre"/>
    Tipo: <xsl:value-of select="ruta/@tipo"/>
    Dificultad: <xsl:value-of select="ruta/@nombre"/>
    Fecha de inicio: <xsl:value-of select="ruta/@nombre"/>
    Hora de inicio: <xsl:value-of select="ruta/@nombre"/>
    Duración: <xsl:value-of select="ruta/@nombre"/>
    
    Descripcion: <xsl:value-of select="ruta/@nombre"/>
    Target: <xsl:value-of select="ruta/@nombre"/>
    Lugar de inicio: <xsl:value-of select="ruta/@nombre"/>
    Direción de inicio: <xsl:value-of select="ruta/@nombre"/>
    
    Nombre: <xsl:value-of select="ruta/@nombre"/>
    <xsl:apply-templates select="hitos"/>
    <xsl:apply-templates select="referencias"/>
  </xsl:template>

  <xsl:template match="artista">
    Artista: <span style="color:#00ff00">
      <xsl:value-of select="."/>
    </span>
    <br/>
  </xsl:template>
</xsl:stylesheet>