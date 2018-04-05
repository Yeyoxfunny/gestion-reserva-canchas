package com.smorales.grc.core.dto;

import java.io.Serializable;

import com.smorales.grc.core.domain.authentication.Authority;

public class UsuarioDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;

	private String email;

	private String nombres;

	private String apellidos;

	private String contrasenia;

	private Authority rol;

	public UsuarioDTO() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}

	public Authority getRol() {
		return rol;
	}

	public void setRol(Authority rol) {
		this.rol = rol;
	}

}
