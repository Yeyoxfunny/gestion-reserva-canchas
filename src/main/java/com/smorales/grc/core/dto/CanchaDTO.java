package com.smorales.grc.core.dto;

import java.io.Serializable;
import java.math.BigDecimal;

public class CanchaDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;

	private String nombre;

	private String urlImagen;

	private BigDecimal precio;

	public CanchaDTO() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getUrlImagen() {
		return urlImagen;
	}

	public void setUrlImagen(String urlImagen) {
		this.urlImagen = urlImagen;
	}

	public BigDecimal getPrecio() {
		return precio;
	}

	public void setPrecio(BigDecimal precio) {
		this.precio = precio;
	}

}
