package com.smorales.grc.core.security;

import java.io.Serializable;

public class LoginDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String email;

	private String contrasenia;

	public LoginDTO() {

	}

	public LoginDTO(String email, String password) {
		this.email = email;
		this.contrasenia = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}

}
